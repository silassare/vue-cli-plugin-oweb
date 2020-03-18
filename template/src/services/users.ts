import { OWebApp, OWebServiceStore } from 'oweb';
import { OZUser } from '@/gobl.bundle';

export default class UsersStore extends OWebServiceStore<OZUser> {
	constructor(app: OWebApp) {
		super(app, OZUser, 'users');
	}
}
