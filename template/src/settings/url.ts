import { tUrlList } from 'oweb';

export default {
	// -----start: required
	OZ_SERVER_GET_FILE_URI:
		'files/ozone-{oz_file_id}-{oz_file_key}-{oz_file_quality}',
	OZ_SERVER_TNET_SERVICE: 'tnet/',
	OZ_SERVER_LOGIN_SERVICE: 'login/',
	OZ_SERVER_LOGOUT_SERVICE: 'logout/',
	OZ_SERVER_SIGNUP_SERVICE: 'signup/',
	OZ_SERVER_ACCOUNT_RECOVERY_SERVICE: 'account-recovery/',
	OZ_SERVER_PASSWORD_SERVICE: 'password/',
	OZ_SERVER_CAPTCHA_SERVICE: 'captcha/',
	OZ_SERVER_UPLOAD_SERVICE: 'upload/',
	// -----end: required
} as tUrlList;
