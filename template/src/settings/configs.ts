import { tConfigList } from 'oweb';

const DEV_MODE = process.env.NODE_ENV !== 'production',
	API_URL = DEV_MODE ? process.env.API_DEV : process.env.API;

let w_loc = window.location,
	w_doc = window.document,
	file_name_reg = /[^/]+\.(html|htm|php|o)$/i,
	app_use_hash = false,
	base_uri = app_use_hash ? w_doc.baseURI || w_loc.origin : w_loc.origin,
	app_url = app_use_hash
		? w_loc.protocol +
		  '//' +
		  w_loc.host +
		  w_loc.pathname.replace(file_name_reg, '')
		: base_uri.replace(file_name_reg, '').replace(w_loc.hash, '');

export default {
	'!OW_APP_NAME': process.env.NAME,
	'!OW_APP_VERSION': process.env.VERSION,
	'!OW_APP_LOCAL_BASE_URL': app_url,
	'!OW_APP_ROUTER_HASH_MODE': app_use_hash,
	'!OW_APP_ALLOWED_COUNTRIES': ['bj'],

	OW_APP_DEFAULT_LANG: 'fr',
	OW_APP_UPDATER_SCRIPT_SRC: '',

	'!OZ_API_KEY_HEADER_NAME': 'x-ozone-api-key',
	'!OZ_API_REAL_METHOD_HEADER_NAME': 'x-ozone-real-method',
	'!OZ_API_KEY': 'A326D67A-56396BDC-0CEE96CB-9B849421',
	'!OZ_API_BASE_URL': API_URL,

	'!OZ_CODE_REG': '^[0-9]{6}$',
	'!OZ_USER_NAME_MIN_LENGTH': 3,
	'!OZ_USER_NAME_MAX_LENGTH': 60,
	'!OZ_PASS_MIN_LENGTH': 6,
	'!OZ_PASS_MAX_LENGTH': 60,
	'!OZ_USER_MIN_AGE': 12,
	'!OZ_USER_MAX_AGE': 100,
	'!OZ_PPIC_MIN_SIZE': 150,
	'!OZ_USER_ALLOWED_GENDERS': ['Male', 'Female'],
} as tConfigList;
