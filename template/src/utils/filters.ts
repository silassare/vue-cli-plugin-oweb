import { Vue } from 'vue-property-decorator';
import OTelInput from 'o-tel-input';
import app from '@/app';

Vue.filter(
	'formatDate',
	(unix_timestamp: number, format: string = 'MMM Do, h:mm a') => {
		let moment = (window as any).moment;

		moment.locale(app.configs.get('OW_APP_DEFAULT_LANG'));

		return moment(unix_timestamp * 1000).format(format);
	}
);

Vue.filter('sinceDate', (unix_timestamp: number) => {
	let moment = (window as any).moment;

	moment.locale(app.configs.get('OW_APP_DEFAULT_LANG'));

	return moment(unix_timestamp * 1000).fromNow();
});

Vue.filter('dateInputValue', (unix_timestamp: number) => {
	let moment = (window as any).moment;

	return moment(unix_timestamp * 1000).format('YYYY-MM-DDThh:mm');
});

Vue.filter('formatPhone', (phone: string) => {
	return new OTelInput({ number: phone }).getInput(true);
});

Vue.filter(
	'formatAmount',
	(amount: any, currency: string = 'XOF', locales: string = 'fr-FR') => {
		return Number(amount).toLocaleString(locales, {
			style: 'currency',
			currency: currency.toUpperCase(),
		});
	}
);

Vue.filter('shortText', (text: string, len?: number, ellipsis?: string) => {
	len = len || 100;
	ellipsis = text.length > len ? ellipsis || '...' : '';
	text = text.substr(0, len);
	return text.length ? text + ellipsis : '';
});

Vue.filter('lineToBr', (text: string) => {
	return (text || '').replace(/\\r\\n|\\n/g, '<br/>');
});
