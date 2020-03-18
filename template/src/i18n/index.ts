import { OWebI18n, Utils, tI18nDefinition } from 'oweb';
import en from './en';
import fr from './fr';

Utils.forEach({ fr, en }, function(value: tI18nDefinition, code: string) {
	OWebI18n.loadLangData(code, value);
});
