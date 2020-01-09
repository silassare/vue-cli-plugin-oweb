import {
	OWebApp,
	tViewDialog,
	OWebPageBase,
	OWebRouteContext,
	iPageRouteFull,
} from 'oweb';
import { VueConstructor } from 'vue';
import UsersStore from '@/services/users';

const bundleCache = function<T, R>(fn: (ctx: R) => T): (ctx: R) => T {
	let map = (fn as any)['__cache_map'] || new Map();

	(fn as any)['__cache_map'] = map;

	return function(ctx: R) {
		if (!map.has(ctx)) {
			map.set(ctx, fn(ctx));
		}

		return map.get(ctx);
	};
};

const storeBundle = function(app: OWebApp) {
	console.log('[App] store bundle created for %s.', app.getAppName());

	let page: OWebPageBase<VueConstructor> = undefined as any,
		route: iPageRouteFull = undefined as any,
		routeContext: OWebRouteContext = undefined as any;

	return {
		ready: false,
		splash: true,
		frozen: false,
		page,
		route,
		routeContext,
		dialogs: [] as tViewDialog[],
		// for reactivity
		services: bundleCache(servicesBundle)(app),
		// custom store
		...customStore(),
	};
};

const servicesBundle = function(app: OWebApp) {
	console.log('[App] services bundle created for %s.', app.getAppName());

	return {
		users: new UsersStore(app),
	};
};

const customStore = () => {
	return {};
};

export default {
	store: bundleCache(storeBundle),
	services: bundleCache(servicesBundle),
};
