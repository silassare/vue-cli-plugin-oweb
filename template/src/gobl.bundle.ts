/**
 * Auto generated file, please don't edit.
 *
 * With: Gobl v1.0.9
 * Time: 1580480893
 */

import {
	GoblEntity,
	register,
	getEntityCache,
	c_bool,
	c_int,
	c_string,
	tGoblEntityData,
} from 'gobl-utils-ts';


export class OZUser extends GoblEntity {
	static readonly PREFIX:string = 'user';
	static readonly COLUMNS:string[] = 'user_id|user_phone|user_email|user_pass|user_name|user_gender|user_birth_date|user_picid|user_cc2|user_data|user_add_time|user_valid'.split('|');
	static readonly COL_ID:string = 'user_id';
	static readonly COL_PHONE:string = 'user_phone';
	static readonly COL_EMAIL:string = 'user_email';
	static readonly COL_PASS:string = 'user_pass';
	static readonly COL_NAME:string = 'user_name';
	static readonly COL_GENDER:string = 'user_gender';
	static readonly COL_BIRTH_DATE:string = 'user_birth_date';
	static readonly COL_PICID:string = 'user_picid';
	static readonly COL_CC2:string = 'user_cc2';
	static readonly COL_DATA:string = 'user_data';
	static readonly COL_ADD_TIME:string = 'user_add_time';
	static readonly COL_VALID:string = 'user_valid';

	constructor(data?: tGoblEntityData) {
		super(data, "OZUser", OZUser.PREFIX, OZUser.COLUMNS);
	}
	
	singlePKValue(){
		return this.id;
	}
	identifierColumns(){
		return [OZUser.COL_ID,];
	}
	static fromCache(cache_key: string): OZUser | undefined {
		let cache = <any>getEntityCache("OZUser");
		return cache && cache[cache_key];
	}

	get id(){ return c_string(this._data[OZUser.COL_ID])}
	set id(nVal:any){ this._set(OZUser.COL_ID, c_string(nVal))}
	getId(){ return this.id}
	setId(nVal:any):this { this.id = nVal; return this}
	get phone(){ return c_string(this._data[OZUser.COL_PHONE])}
	set phone(nVal:any){ this._set(OZUser.COL_PHONE, c_string(nVal))}
	getPhone(){ return this.phone}
	setPhone(nVal:any):this { this.phone = nVal; return this}
	get email(){ return c_string(this._data[OZUser.COL_EMAIL])}
	set email(nVal:any){ this._set(OZUser.COL_EMAIL, c_string(nVal))}
	getEmail(){ return this.email}
	setEmail(nVal:any):this { this.email = nVal; return this}
	get pass(){ return c_string(this._data[OZUser.COL_PASS])}
	set pass(nVal:any){ this._set(OZUser.COL_PASS, c_string(nVal))}
	getPass(){ return this.pass}
	setPass(nVal:any):this { this.pass = nVal; return this}
	get name(){ return c_string(this._data[OZUser.COL_NAME])}
	set name(nVal:any){ this._set(OZUser.COL_NAME, c_string(nVal))}
	getName(){ return this.name}
	setName(nVal:any):this { this.name = nVal; return this}
	get gender(){ return c_string(this._data[OZUser.COL_GENDER])}
	set gender(nVal:any){ this._set(OZUser.COL_GENDER, c_string(nVal))}
	getGender(){ return this.gender}
	setGender(nVal:any):this { this.gender = nVal; return this}
	get birth_date(){ return c_string(this._data[OZUser.COL_BIRTH_DATE])}
	set birth_date(nVal:any){ this._set(OZUser.COL_BIRTH_DATE, c_string(nVal))}
	getBirthDate(){ return this.birth_date}
	setBirthDate(nVal:any):this { this.birth_date = nVal; return this}
	get picid(){ return c_string(this._data[OZUser.COL_PICID])}
	set picid(nVal:any){ this._set(OZUser.COL_PICID, c_string(nVal))}
	getPicid(){ return this.picid}
	setPicid(nVal:any):this { this.picid = nVal; return this}
	get cc2(){ return c_string(this._data[OZUser.COL_CC2])}
	set cc2(nVal:any){ this._set(OZUser.COL_CC2, c_string(nVal))}
	getCc2(){ return this.cc2}
	setCc2(nVal:any):this { this.cc2 = nVal; return this}
	get data(){ return c_string(this._data[OZUser.COL_DATA])}
	set data(nVal:any){ this._set(OZUser.COL_DATA, c_string(nVal))}
	getData(){ return this.data}
	setData(nVal:any):this { this.data = nVal; return this}
	get add_time(){ return c_string(this._data[OZUser.COL_ADD_TIME])}
	set add_time(nVal:any){ this._set(OZUser.COL_ADD_TIME, c_string(nVal))}
	getAddTime(){ return this.add_time}
	setAddTime(nVal:any):this { this.add_time = nVal; return this}
	get valid(){ return c_bool(this._data[OZUser.COL_VALID])}
	set valid(nVal:any){ this._set(OZUser.COL_VALID, c_bool(nVal))}
	getValid(){ return this.valid}
	setValid(nVal:any):this { this.valid = nVal; return this}

}

register("OZUser", OZUser);
export class OZAdmin extends GoblEntity {
	static readonly PREFIX:string = 'admin';
	static readonly COLUMNS:string[] = 'admin_user_id|admin_level|admin_data|admin_add_time|admin_valid'.split('|');
	static readonly COL_USER_ID:string = 'admin_user_id';
	static readonly COL_LEVEL:string = 'admin_level';
	static readonly COL_DATA:string = 'admin_data';
	static readonly COL_ADD_TIME:string = 'admin_add_time';
	static readonly COL_VALID:string = 'admin_valid';

	constructor(data?: tGoblEntityData) {
		super(data, "OZAdmin", OZAdmin.PREFIX, OZAdmin.COLUMNS);
	}
	
	singlePKValue(){
		return this.user_id;
	}
	identifierColumns(){
		return [OZAdmin.COL_USER_ID,];
	}
	static fromCache(cache_key: string): OZAdmin | undefined {
		let cache = <any>getEntityCache("OZAdmin");
		return cache && cache[cache_key];
	}

	get user_id(){ return c_string(this._data[OZAdmin.COL_USER_ID])}
	set user_id(nVal:any){ this._set(OZAdmin.COL_USER_ID, c_string(nVal))}
	getUserId(){ return this.user_id}
	setUserId(nVal:any):this { this.user_id = nVal; return this}
	get level(){ return c_int(this._data[OZAdmin.COL_LEVEL])}
	set level(nVal:any){ this._set(OZAdmin.COL_LEVEL, c_int(nVal))}
	getLevel(){ return this.level}
	setLevel(nVal:any):this { this.level = nVal; return this}
	get data(){ return c_string(this._data[OZAdmin.COL_DATA])}
	set data(nVal:any){ this._set(OZAdmin.COL_DATA, c_string(nVal))}
	getData(){ return this.data}
	setData(nVal:any):this { this.data = nVal; return this}
	get add_time(){ return c_string(this._data[OZAdmin.COL_ADD_TIME])}
	set add_time(nVal:any){ this._set(OZAdmin.COL_ADD_TIME, c_string(nVal))}
	getAddTime(){ return this.add_time}
	setAddTime(nVal:any):this { this.add_time = nVal; return this}
	get valid(){ return c_bool(this._data[OZAdmin.COL_VALID])}
	set valid(nVal:any){ this._set(OZAdmin.COL_VALID, c_bool(nVal))}
	getValid(){ return this.valid}
	setValid(nVal:any):this { this.valid = nVal; return this}

}

register("OZAdmin", OZAdmin);
export class OZCountry extends GoblEntity {
	static readonly PREFIX:string = 'country';
	static readonly COLUMNS:string[] = 'country_cc2|country_code|country_name|country_name_real|country_data|country_add_time|country_valid'.split('|');
	static readonly COL_CC2:string = 'country_cc2';
	static readonly COL_CODE:string = 'country_code';
	static readonly COL_NAME:string = 'country_name';
	static readonly COL_NAME_REAL:string = 'country_name_real';
	static readonly COL_DATA:string = 'country_data';
	static readonly COL_ADD_TIME:string = 'country_add_time';
	static readonly COL_VALID:string = 'country_valid';

	constructor(data?: tGoblEntityData) {
		super(data, "OZCountry", OZCountry.PREFIX, OZCountry.COLUMNS);
	}
	
	singlePKValue(){
		return this.cc2;
	}
	identifierColumns(){
		return [OZCountry.COL_CC2,];
	}
	static fromCache(cache_key: string): OZCountry | undefined {
		let cache = <any>getEntityCache("OZCountry");
		return cache && cache[cache_key];
	}

	get cc2(){ return c_string(this._data[OZCountry.COL_CC2])}
	set cc2(nVal:any){ this._set(OZCountry.COL_CC2, c_string(nVal))}
	getCc2(){ return this.cc2}
	setCc2(nVal:any):this { this.cc2 = nVal; return this}
	get code(){ return c_string(this._data[OZCountry.COL_CODE])}
	set code(nVal:any){ this._set(OZCountry.COL_CODE, c_string(nVal))}
	getCode(){ return this.code}
	setCode(nVal:any):this { this.code = nVal; return this}
	get name(){ return c_string(this._data[OZCountry.COL_NAME])}
	set name(nVal:any){ this._set(OZCountry.COL_NAME, c_string(nVal))}
	getName(){ return this.name}
	setName(nVal:any):this { this.name = nVal; return this}
	get name_real(){ return c_string(this._data[OZCountry.COL_NAME_REAL])}
	set name_real(nVal:any){ this._set(OZCountry.COL_NAME_REAL, c_string(nVal))}
	getNameReal(){ return this.name_real}
	setNameReal(nVal:any):this { this.name_real = nVal; return this}
	get data(){ return c_string(this._data[OZCountry.COL_DATA])}
	set data(nVal:any){ this._set(OZCountry.COL_DATA, c_string(nVal))}
	getData(){ return this.data}
	setData(nVal:any):this { this.data = nVal; return this}
	get add_time(){ return c_string(this._data[OZCountry.COL_ADD_TIME])}
	set add_time(nVal:any){ this._set(OZCountry.COL_ADD_TIME, c_string(nVal))}
	getAddTime(){ return this.add_time}
	setAddTime(nVal:any):this { this.add_time = nVal; return this}
	get valid(){ return c_bool(this._data[OZCountry.COL_VALID])}
	set valid(nVal:any){ this._set(OZCountry.COL_VALID, c_bool(nVal))}
	getValid(){ return this.valid}
	setValid(nVal:any):this { this.valid = nVal; return this}

}

register("OZCountry", OZCountry);
export class OZFile extends GoblEntity {
	static readonly PREFIX:string = 'file';
	static readonly COLUMNS:string[] = 'file_id|file_user_id|file_key|file_clone|file_origin|file_size|file_type|file_name|file_label|file_path|file_thumb|file_data|file_add_time|file_valid'.split('|');
	static readonly COL_ID:string = 'file_id';
	static readonly COL_USER_ID:string = 'file_user_id';
	static readonly COL_KEY:string = 'file_key';
	static readonly COL_CLONE:string = 'file_clone';
	static readonly COL_ORIGIN:string = 'file_origin';
	static readonly COL_SIZE:string = 'file_size';
	static readonly COL_TYPE:string = 'file_type';
	static readonly COL_NAME:string = 'file_name';
	static readonly COL_LABEL:string = 'file_label';
	static readonly COL_PATH:string = 'file_path';
	static readonly COL_THUMB:string = 'file_thumb';
	static readonly COL_DATA:string = 'file_data';
	static readonly COL_ADD_TIME:string = 'file_add_time';
	static readonly COL_VALID:string = 'file_valid';

	constructor(data?: tGoblEntityData) {
		super(data, "OZFile", OZFile.PREFIX, OZFile.COLUMNS);
	}
	
	singlePKValue(){
		return this.id;
	}
	identifierColumns(){
		return [OZFile.COL_ID,];
	}
	static fromCache(cache_key: string): OZFile | undefined {
		let cache = <any>getEntityCache("OZFile");
		return cache && cache[cache_key];
	}

	get id(){ return c_string(this._data[OZFile.COL_ID])}
	set id(nVal:any){ this._set(OZFile.COL_ID, c_string(nVal))}
	getId(){ return this.id}
	setId(nVal:any):this { this.id = nVal; return this}
	get user_id(){ return c_string(this._data[OZFile.COL_USER_ID])}
	set user_id(nVal:any){ this._set(OZFile.COL_USER_ID, c_string(nVal))}
	getUserId(){ return this.user_id}
	setUserId(nVal:any):this { this.user_id = nVal; return this}
	get key(){ return c_string(this._data[OZFile.COL_KEY])}
	set key(nVal:any){ this._set(OZFile.COL_KEY, c_string(nVal))}
	getKey(){ return this.key}
	setKey(nVal:any):this { this.key = nVal; return this}
	get clone(){ return c_string(this._data[OZFile.COL_CLONE])}
	set clone(nVal:any){ this._set(OZFile.COL_CLONE, c_string(nVal))}
	getClone(){ return this.clone}
	setClone(nVal:any):this { this.clone = nVal; return this}
	get origin(){ return c_string(this._data[OZFile.COL_ORIGIN])}
	set origin(nVal:any){ this._set(OZFile.COL_ORIGIN, c_string(nVal))}
	getOrigin(){ return this.origin}
	setOrigin(nVal:any):this { this.origin = nVal; return this}
	get size(){ return c_string(this._data[OZFile.COL_SIZE])}
	set size(nVal:any){ this._set(OZFile.COL_SIZE, c_string(nVal))}
	getSize(){ return this.size}
	setSize(nVal:any):this { this.size = nVal; return this}
	get type(){ return c_string(this._data[OZFile.COL_TYPE])}
	set type(nVal:any){ this._set(OZFile.COL_TYPE, c_string(nVal))}
	getType(){ return this.type}
	setType(nVal:any):this { this.type = nVal; return this}
	get name(){ return c_string(this._data[OZFile.COL_NAME])}
	set name(nVal:any){ this._set(OZFile.COL_NAME, c_string(nVal))}
	getName(){ return this.name}
	setName(nVal:any):this { this.name = nVal; return this}
	get label(){ return c_string(this._data[OZFile.COL_LABEL])}
	set label(nVal:any){ this._set(OZFile.COL_LABEL, c_string(nVal))}
	getLabel(){ return this.label}
	setLabel(nVal:any):this { this.label = nVal; return this}
	get path(){ return c_string(this._data[OZFile.COL_PATH])}
	set path(nVal:any){ this._set(OZFile.COL_PATH, c_string(nVal))}
	getPath(){ return this.path}
	setPath(nVal:any):this { this.path = nVal; return this}
	get thumb(){ return c_string(this._data[OZFile.COL_THUMB])}
	set thumb(nVal:any){ this._set(OZFile.COL_THUMB, c_string(nVal))}
	getThumb(){ return this.thumb}
	setThumb(nVal:any):this { this.thumb = nVal; return this}
	get data(){ return c_string(this._data[OZFile.COL_DATA])}
	set data(nVal:any){ this._set(OZFile.COL_DATA, c_string(nVal))}
	getData(){ return this.data}
	setData(nVal:any):this { this.data = nVal; return this}
	get add_time(){ return c_string(this._data[OZFile.COL_ADD_TIME])}
	set add_time(nVal:any){ this._set(OZFile.COL_ADD_TIME, c_string(nVal))}
	getAddTime(){ return this.add_time}
	setAddTime(nVal:any):this { this.add_time = nVal; return this}
	get valid(){ return c_bool(this._data[OZFile.COL_VALID])}
	set valid(nVal:any){ this._set(OZFile.COL_VALID, c_bool(nVal))}
	getValid(){ return this.valid}
	setValid(nVal:any):this { this.valid = nVal; return this}

}

register("OZFile", OZFile);

console.log('[gobl] ready!');
