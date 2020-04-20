import Vue from 'vue';
import app from '@/app';

Vue.directive('o-focus', {
	inserted(el, binding) {
		if (binding.value && typeof el.focus === 'function') {
			el.focus();
		}
	},
});
(function(i18n) {
	Vue.directive('o-i18n', i18n);
	Vue.directive('i18n', i18n);
})({
	inserted(el, binding) {
		binding.value && app.i18n.el(el, binding.value);
	},
	update(el, binding) {
		binding.value && app.i18n.el(el, binding.value);
	},
});
