import { Vue } from 'vue-property-decorator';
import app from '@/app';

Vue.directive('o-focus', {
	inserted(el, binding) {
		if (binding.value && typeof el.focus === 'function') {
			el.focus();
		}
	},
});

Vue.directive('o-i18n', {
	inserted(el, binding) {
		binding.value && app.i18n.el(el, binding.value);
	},
	update(el, binding) {
		binding.value && app.i18n.el(el, binding.value);
	},
});
