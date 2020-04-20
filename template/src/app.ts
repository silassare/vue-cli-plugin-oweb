import {tRouteTarget, OWebTNet, tRouteStateObject, createApp} from 'oweb';
import {default as appConfigs} from '@/settings/configs';
import {default as appUrlList} from '@/settings/url';
import helpers from './utils/helpers';
import storeBundle from "@/oweb.bundles";
import Vue from 'vue';

if (process.env.NODE_ENV === 'production') {
	console.log   = () => undefined;
	console.warn  = () => undefined;
	console.error = () => undefined;

	Vue.config.errorHandler = function () {
		// this helps debug vue errors in production
		(window as any).oweb_vue_error = arguments;
	};
}

const app = createApp(
	appConfigs['!OW_APP_NAME'],
	appConfigs,
	appUrlList,
	storeBundle
);

app.onReady(function () {
	// TODO use entry point for next page after login
	let entryPoint = location.href;
	console.log('[App] entry point ->', entryPoint);

	if (/login/.test(entryPoint)) {
		// prevent next to be login if the entry point is already the login page
		entryPoint = this.router.pathToURL('/').href;
	}

	const ctx  = this,
		  tNet = new OWebTNet(this),
		  next = function (path?: string, state?: tRouteStateObject) {
			  ctx.store.ready  = true;
			  ctx.store.splash = false;
			  ctx.router.start(true, path, state);
		  };

	tNet.on(OWebTNet.EVT_TNET_READY, (state: string) => {
		switch (state) {
			case OWebTNet.STATE_VERIFIED_USER:
				next();
				break;
			case OWebTNet.STATE_OFFLINE_USER:
				helpers.ow_notify_offline(ctx);
				next('/login', {
					next: entryPoint,
				});
				break;
			case OWebTNet.STATE_SIGN_UP_PROCESS:
				next('/register');
				break;
			case OWebTNet.STATE_NO_USER:
				next('/login', {
					next: entryPoint,
				});
				break;
			case OWebTNet.STATE_UNKNOWN:
				helpers.ow_notify_offline(ctx);
				next('/login', {
					next: entryPoint,
				});
				break;
		}
	}).check();
})
   .onShowHomePage(function (options: tRouteStateObject) {
	   this.router.browseTo('/', options, false, true);
   })
   .onShowLoginPage(function (options: tRouteStateObject) {
	   this.router.browseTo(
		   '/login',
		   {
			   next: location.href,
			   ...options,
		   },
		   false,
		   true
	   );
   })
   .onShowRegistrationPage(function (options: tRouteStateObject) {
	   this.router.browseTo('/register', options, false, true);
   })
   .onPageNotFound(function (target: tRouteTarget) {
	   this.router.browseTo('/');
   });

(window as any).app = app;
export default app;
