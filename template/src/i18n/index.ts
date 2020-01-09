import { OWebI18n, Utils } from "oweb";
import en from "./en";
import fr from "./fr";

Utils.forEach({ fr, en }, function (value, code) {
	OWebI18n.loadLangData(code, value);
});
