import { tI18nOptions } from 'oweb';
import { PropOptions } from 'vue';

export type tOWMessage = tI18nOptions | string;
export type tOWValidatorFn = (
	value: any
) => { value: any; isValid: boolean; errorMessage: tOWMessage };

export type tOWIconOptions = {
	size?: 'small' | 'normal' | 'medium';
	icon: String;
};

// ====================FORM & FIELDS=========================
export type tOWFieldOptions = {
	field: string;
	attrs: {
		[key: string]: any;
	};
	label: { i18n: tOWMessage };
};

export type tOWFormOptions = {
	fields: {
		[key: string]: tOWFieldOptions;
	};
};

export type tOWButtonOptions = {
	iconLeft?: tOWIconOptions;
	iconRight?: tOWIconOptions;
	i18n?: tOWMessage;
	[key: string]: any;
};
export type tOWLabelOptions = {
	i18n?: tOWMessage;
	[key: string]: any;
};
export type tOWInputOptions = {
	iconLeft?: tOWIconOptions;
	iconRight?: tOWIconOptions;
	i18n?: tOWMessage;
	value?: Number | String;
	validator?: tOWValidatorFn;
	[key: string]: any;
};

export type tOWTextareaOptions = tOWInputOptions;

export const fnTypeI18n = function(options: PropOptions = {}): PropOptions {
	return {
		type: [String, Object],
		...options,
	};
};
export const fnTypeIcon = function(options: PropOptions = {}): PropOptions {
	return {
		type: Object,
		...options,
	};
};
