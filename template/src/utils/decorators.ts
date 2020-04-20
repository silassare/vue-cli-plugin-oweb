import {
	OWebEvent,
	iPage,
	OWebPager,
	OWebRouteContext,
	iPageRouteFull,
	iPageRoute,
	Utils,
} from 'oweb';
import {VueClass} from 'vue-class-component/lib/declarations';
import app from "@/app";
import Vue from 'vue';

type Component = VueClass<Vue>;

interface iPageDecoratorOptions {
	name: string;
	routes: iPageRoute[];
	install?: (pager: OWebPager<Component>) => void;
	requireLogin?: (
		context: OWebRouteContext,
		route: iPageRouteFull
	) => boolean;
	onOpen?: (context: OWebRouteContext, route: iPageRouteFull) => void;
	onClose?: (oldRoute: iPageRouteFull, newRoute: iPageRouteFull) => void;
}

export default class PageBase<T extends Component> extends OWebEvent
	implements iPage<T> {
	constructor(
		private component: T,
		private options: iPageDecoratorOptions = {} as any
	) {
		super();

		this.options.install && this.on('install', this.options.install);
		this.options.onOpen && this.on('open', this.options.onOpen);
		this.options.onClose && this.on('close', this.options.onClose);
	}

	install(pager: OWebPager<T>): this {
		this.trigger('install', [pager], true);
		return this;
	}

	onOpen(context: OWebRouteContext, route: iPageRouteFull): void {
		this.trigger('open', [context, route], true);
	}

	onClose(oldRoute: iPageRouteFull, newRoute: iPageRouteFull): void {
		this.trigger('close', [oldRoute, newRoute], true);
	}

	getName() {
		return this.options.name;
	}

	getRoutes() {
		return this.options.routes;
	}

	requireLogin(context: OWebRouteContext, route: iPageRouteFull) {
		return this.options.requireLogin
			   ? this.options.requireLogin(context, route)
			   : false;
	}

	getComponent() {
		return this.component;
	}
}

const pageEvent = function (event: 'open' | 'close' | 'install') {
	return function (
		target: Component,
		name: string,
		descriptor: PropertyDescriptor
	) {
		let value = descriptor.value;
		console.log(
			'[PageDecorator] pageEvent',
			event,
			target,
			name,
			descriptor
		);
		if (typeof value !== 'function') {
			throw new Error(
				`Page event handler "${target}.${name}" should be a valid function not "${typeof value}".`
			);
		}
	};
};

const pageRoutes = function (
	target: object,
	name: string,
	descriptor: PropertyDescriptor
) {
	let value = descriptor.value;
	console.log('[PageDecorator] pageRoutes', target, name, descriptor);
	if (typeof value !== 'function') {
		throw new Error(
			`Page routes "${target}.${name}" should be an array not "${typeof value}".`
		);
	}
};

const pagesCache: { [key: string]: iPage<Component> } = {};
const keyName                                         = '__OWEB_PAGE_KEY__';

const registerPageFor = (
	component: Component,
	options: iPageDecoratorOptions
) => {
	let page = getPageFor(component, options);

	app.pager.registerPage(page);
	return page;
};
const getPageFor      = (component: Component, options: iPageDecoratorOptions) => {
	let id = (component as any)[keyName];

	if (!id) {
		id             = (component as any)[keyName] = Utils.id();
		pagesCache[id] = new PageBase(component, options) as iPage<Component>;
	}

	return pagesCache[id];
};

const Page = function (options: iPageDecoratorOptions) {
	return function <C extends Component>(component: C): C {
		registerPageFor(component, options);

		return component;
	};
};
export {Page, pageEvent, pageRoutes};
