import { Vue } from 'vue-property-decorator';
import app from '@/app';
import OTelInput from 'o-tel-input';

Vue.directive('o-focus', {
	inserted(el, binding) {
		if (binding.value) {
			el.focus();
		}
	},
});

Vue.directive('i18n', {
	inserted(el, binding) {
		binding.value && app.i18n.el(el, binding.value);
	},
	update(el, binding) {
		binding.value && app.i18n.el(el, binding.value);
	},
});

Vue.directive('o-tel-input', {
	inserted(el, binding) {
		if (binding) {
			let $el = $(el),
				$i = $el.parent().find('.otel-input-select'),
				ot = new OTelInput({
					chooserRoot: 'body',
					number: $el.val(),
					cc2: app.configs.get('OW_APP_ALLOWED_COUNTRIES')[0],
					allowedCountries: () =>
						app.configs.get('OW_APP_ALLOWED_COUNTRIES'),
					chooserSelector: $i,
				});
			ot.bindInput(el as HTMLInputElement);
		}
	},
});
