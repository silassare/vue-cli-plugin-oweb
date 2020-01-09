import OTelInput from 'o-tel-input';
import { OWebFormValidator } from 'oweb';

OWebFormValidator.addFieldValidators({
	phone: function(value: any, name: string, fv: OWebFormValidator) {
		fv.assert(
			OTelInput.isPhoneNumberPossible(value, true),
			'OZ_FIELD_PHONE_INVALID'
		);
		let t_obj = new OTelInput({ number: value }),
			phone: string = t_obj.getInput(),
			cc2: string = t_obj.getCurrentCountry().cc2;

		fv.setField(name, phone.replace(/[ -]/g, ''));

		// set only if it is not already set
		// we may have multiple phone field or a cc2 field
		if (!fv.getField('cc2')) {
			fv.setField('cc2', cc2);
		}
	},
});
