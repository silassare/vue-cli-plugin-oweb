import {OWebApp} from "oweb";
import UsersStore from "./users";

const servicesBundle = function(app: OWebApp) {
	console.log('[App] services bundle created for %s.', app.getAppName());

	return {
		users: new UsersStore(app),
	};
};

export default servicesBundle