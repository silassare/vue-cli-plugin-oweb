import {
	OWebApp,
	tViewDialog,
	OWebPageBase,
	OWebRouteContext,
	iPageRouteFull,
} from 'oweb';
import {VueConstructor} from 'vue';
import servicesBundle from "@/services";

const storeBundle = function (app: OWebApp) {
	console.log('[App] store bundle created for %s.', app.getAppName());

	let page: OWebPageBase<VueConstructor> = undefined as any,
		route: iPageRouteFull              = undefined as any,
		routeContext: OWebRouteContext     = undefined as any;

	return {
		ready   : false,
		splash  : true,
		frozen  : false,
		page,
		route,
		routeContext,
		dialogs : [] as tViewDialog[],
		// for reactivity
		services: servicesBundle(app),
		// custom store data
		...customStoreDataFn(app),
	};
};

const customStoreDataFn = (app: OWebApp) => {
	return {};
};

export default storeBundle;
