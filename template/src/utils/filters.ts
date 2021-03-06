import Vue from 'vue';
import helpers from './helpers';

for (let key in helpers) {
	if (Object.prototype.hasOwnProperty.call(helpers, key)) {
		Vue.filter(key, (helpers as any)[key]);
	}
}
