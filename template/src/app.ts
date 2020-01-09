import { OWebApp, tRouteTarget, OWebTNet, tRouteStateObject } from 'oweb';
import { default as appConfigs } from '@/settings/configs';
import { default as appUrlList } from '@/settings/url';
import bundles from '@/oweb.bundles';

if (process.env.NODE_ENV === 'production') {
	console.log = () => undefined;
	console.warn = () => undefined;
	console.error = () => undefined;
}

class OWApp extends OWebApp {
	constructor() {
		super(appConfigs['!OW_APP_NAME'], appConfigs, appUrlList);
		this.i18n.setDefaultLang(this.configs.get('OW_APP_DEFAULT_LANG'));
	}

	get store() {
		return bundles.store(this);
	}

	get services() {
		return this.store.services;
	}

	start() {
		super.start();

		// TODO use entry point for next page after login
		let entryPoint = location.href;
		console.log('[App] entry point ->', entryPoint);

		if (/login/.test(entryPoint)) {
			// prevent next to be login if the entry point is already the login page
			entryPoint = app.router.pathToURL('/').href;
		}

		let ref_code = new URL(location.href).searchParams.get('ref');
		if (ref_code && /[a-zA-Z0-9]{8}/.test(ref_code)) {
			localStorage.setItem('referrer_code', ref_code);
		}

		let ctx = this;
		let tNet = new OWebTNet(this);
		let next = function(path?: string, state?: tRouteStateObject) {
			ctx.store.ready = true;
			ctx.store.splash = false;
			ctx.router
				.notFound(ctx.showHomePage.bind(ctx))
				.start(true, path, state);
		};

		tNet.on(OWebTNet.EVT_TNET_READY, (state: string) => {
			switch (state) {
				case OWebTNet.STATE_VERIFIED_USER:
					next();
					break;
				case OWebTNet.STATE_OFFLINE_USER:
					console.log('[App] show login page');
					ctx.notifyOffline();
					next('/login', {
						next: entryPoint,
					});
					break;
				case OWebTNet.STATE_SIGN_UP_PROCESS:
					console.log('[App] show registration page');
					next('/register');
					break;
				case OWebTNet.STATE_NO_USER:
					console.log('[App] show login page');
					next('/login', {
						next: entryPoint,
					});
					break;
				case OWebTNet.STATE_UNKNOWN:
					console.log('[App] show login page');
					next('/login', {
						next: entryPoint,
					});
					ctx.notifyOffline();
					break;
			}
		}).check();

		return this;
	}

	notifyOffline() {
		!window.navigator.onLine &&
			this.view.dialog({
				type: 'error',
				text: 'UX_LANG_YOU_ARE_OFFLINE',
			});
	}

	showLoginPage(options: any = {}) {
		this.router.browseTo(
			'/login',
			{
				next: location.href,
				...options,
			},
			false,
			true
		);
		return this;
	}

	showSignUpPage(options: any = {}) {
		this.router.browseTo('/register', options, false, true);
		return this;
	}

	showHomePage(options: any = {}) {
		this.router.browseTo('/', options, false, true);
		return this;
	}

	showNotFound(target: tRouteTarget) {
		(window as any).location = '/';
		return this;
	}
}

let app = new OWApp();
(window as any).app = app;

export default app;
