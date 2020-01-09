import app from '@/app';
import { tFileQuality, tI18nData, tI18nPluralize, Utils } from 'oweb';
import Vue from 'vue';
import OTelInput from 'o-tel-input';
import { OZUser, DCQuestion } from '@/gobl.bundle';

export const vuePlugin = function() {
	Vue.mixin({
		methods: helpers,
	});
};

const helpers = {
	i18n(
		key: string,
		data: tI18nData = {},
		pluralize?: tI18nPluralize,
		lang?: string
	) {
		return app.i18n.toHuman(key, data, pluralize, lang);
	},

	ow_file_url(file: string, quality: tFileQuality = 0, def?: string) {
		let parts = file.split('_'),
			url = app.url.get('OZ_SERVER_GET_FILE_URI'),
			o = '0',
			file_id = o,
			file_key = o;

		if (parts.length === 2) {
			file_id = parts[0];
			file_key = parts[1];
		}

		if (def && (file_id === o || file_key === o)) {
			return def;
		}

		let data: any = {
			'{oz_file_id}': file_id,
			'{oz_file_key}': file_key,
			'{oz_file_quality}': quality,
		};

		Object.keys(data).forEach(function(key) {
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
		const key = '__ow_key_id',
			type = typeof value;

		if (type === 'object' || type === 'function') {
			return key in value ? value[key] : (value[key] = Utils.id());
		}

		return Utils.id();
	},

	ow_browse_to(route: string) {
		app.router.browseTo(route);
	},
	// ****************************************
	// *           CUSTOMS METHODS            *
	// ****************************************
	ux_user_pic(user: OZUser, quality: 0 | 1 | 2 | 3 = 0) {
		let pic = USER_PIC,
			gender = (user.gender || '').toLowerCase();

		if (gender === 'male') {
			pic = USER_MALE;
		} else if (gender === 'female') {
			pic = USER_FEMALE;
		}
		return this.ow_file_url(user.getPicid(), quality, pic);
	},

	ux_custom_data(data: string, def: any = {}) {
		let parsed: any;
		try {
			parsed = JSON.parse(data);
		} catch (e) {}

		return parsed || def;
	},

	ux_format_phone(phone: string) {
		return new OTelInput({ number: phone }).getInput(true);
	},

	ux_format_amount(
		amount: number | string,
		currency: string = 'XOF',
		local: string = 'fr-FR'
	) {
		return Number(amount).toLocaleString(local, {
			style: 'currency',
			currency: currency,
		});
	},

	ux_format_date(unix_timestamp: number, format: string = 'MMM Do, h:mm a') {
		let moment = (window as any).moment;

		moment.locale(app.configs.get('OW_APP_DEFAULT_LANG'));

		return moment(unix_timestamp * 1000).format(format);
	},

	ux_go_back() {
		app.router.goBack();
	},

	ux_can_go_back() {
		return window.history.length > 1;
	},

	ux_uuid() {
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

	ux_question_data(q: DCQuestion) {
		let data = {
			dirty: false,
			required: false,
			subLabel: '',
			typeOptions: {
				min: 0,
				max: 0,
				othersChoice: false,
				othersChoiceUuid: this.ux_uuid(),
				choices: [],
			},
		};

		try {
			data = Utils.assign(data, JSON.parse(q.data) || {});
		} catch (e) {}

		return data;
	},
	ux_answer_valid(q: DCQuestion, answer: any) {
		let options = this.ux_question_data(q);

		if (!options.required && !answer) {
			return true;
		}

		return !(
			!answer ||
			!answer.isValid ||
			(options.required && answer.isEmpty)
		);
	},
};

const USER_PIC = require('../assets/img/user_pic.png');
const USER_MALE = require('../assets/img/user_male.png');
const USER_FEMALE = require('../assets/img/user_female.png');

export default helpers;
