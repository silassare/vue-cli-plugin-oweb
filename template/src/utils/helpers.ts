import app from '@/app';
import {
	tFileQuality,
	tI18nData,
	tI18nPluralize,
	Utils,
	OWebApp,
	OWebTelInput,
} from 'oweb';
import Vue from 'vue';
import {OZUser} from '@/gobl.bundle';

export const vuePlugin = function () {
	Vue.mixin({
		methods: helpers,
	});
};

const defaultHelpers = {
	i18n(
		key: string,
		data: tI18nData = {},
		pluralize?: tI18nPluralize,
		lang?: string
	) {
		return app.i18n.toHuman(key, data, pluralize, lang);
	},
	ow_notify_offline(app: OWebApp) {
		!window.navigator.onLine &&
		app.view.dialog({
			type: 'error',
			text: 'UX_LANG_YOU_ARE_OFFLINE',
		});
	},
	ow_file_url(file: string, quality: tFileQuality = 0, def?: string) {
		let parts    = file.split('_'),
			url      = app.url.get('OZ_SERVER_GET_FILE_URI'),
			o        = '0',
			file_id  = o,
			file_key = o;

		if (parts.length === 2) {
			file_id  = parts[0];
			file_key = parts[1];
		}

		if (def && (file_id === o || file_key === o)) {
			return def;
		}

		let data: any = {
			'{oz_file_id}'     : file_id,
			'{oz_file_key}'    : file_key,
			'{oz_file_quality}': quality,
		};

		Object.keys(data).forEach(function (key) {
			url = url.replace(key, data[key]);
		});

		return url;
	},

	ow_local_time(time: string | number) {
		let offset = new Date().getTimezoneOffset() * 60;

		if (typeof time === 'string') {
			time = parseInt(time);
		}

		return (time + offset) * 1000;
	},

	ow_route_link(path: string): string {
		return app.router.pathToURL(path).href;
	},

	ow_loop_key(value: any) {
		const key  = '__ow_key_id',
			  type = typeof value;

		if (type === 'object' || type === 'function') {
			return key in value ? value[key] : (value[key] = Utils.id());
		}

		return Utils.id();
	},

	ow_browse_to(route: string) {
		app.router.browseTo(route);
	},

	ow_user_pic(user: OZUser, quality: 0 | 1 | 2 | 3 = 0) {
		let pic    = USER_PIC,
			gender = (user.gender || '').toLowerCase();

		if (gender === 'male') {
			pic = USER_MALE;
		} else if (gender === 'female') {
			pic = USER_FEMALE;
		}
		return this.ow_file_url(user.getPicid(), quality, pic);
	},

	ow_custom_data(data: string, def: any = {}) {
		let parsed: any;
		try {
			parsed = JSON.parse(data);
		} catch (e) {}

		return parsed || def;
	},

	ow_format_phone(phone: string) {
		return new OWebTelInput({number: phone}).getInput(true);
	},

	ow_format_amount(
		amount: number | string,
		currency: string = 'XOF',
		local: string    = 'fr-FR'
	) {
		return Number(amount).toLocaleString(local, {
			style   : 'currency',
			currency: currency,
		});
	},

	ow_format_date(unix_timestamp: number, format: string = 'MMM Do, h:mm a') {
		let moment = (window as any).moment;

		moment.locale(app.configs.get('OW_APP_DEFAULT_LANG'));

		return moment(unix_timestamp * 1000).format(format);
	},

	ow_format_date_since(unix_timestamp: number) {
		let moment = (window as any).moment;

		moment.locale(app.configs.get('OW_APP_DEFAULT_LANG'));

		return moment(unix_timestamp * 1000).fromNow();
	},

	ow_format_date_input(
		unix_timestamp: number,
		format: string = 'YYYY-MM-DDThh:mm'
	) {
		let moment = (window as any).moment;

		return moment(unix_timestamp * 1000).format(format);
	},

	ow_short_text(text: string, len?: number, ellipsis?: string) {
		len      = len || 100;
		ellipsis = text.length > len ? ellipsis || '...' : '';
		text     = text.substr(0, len);
		return text.length ? text + ellipsis : '';
	},

	ow_line_to_br(text: string) {
		return (text || '').replace(/\\r\\n?|\\n/g, '<br/>');
	},

	ow_go_back() {
		app.router.goBack();
	},

	ow_can_go_back() {
		return window.history.length > 1;
	},

	ow_uuid() {
		return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(
			/[018]/g,
			(c: any) => {
				return (
					c ^
					(crypto.getRandomValues(new Uint8Array(1))[0] &
					 (15 >> (c / 4)))
				).toString(16);
			}
		);
	},
};

const customHelpers = {};

const helpers = {...defaultHelpers, ...customHelpers};

const USER_PIC    = require('../assets/images/user-pic.png');
const USER_MALE   = require('../assets/images/user-male.png');
const USER_FEMALE = require('../assets/images/user-female.png');

export default helpers;