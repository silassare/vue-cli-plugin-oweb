import {OWebApp, OWebServiceStore} from 'oweb';
import app from '@/app';
import {OZUser} from '@/gobl.bundle';

export default class UsersStore extends OWebServiceStore<OZUser> {
	private busy                = false;
	private user_data_cb: any[] = [];

	constructor(app: OWebApp) {
		super(app, OZUser, 'users');
	}
}
