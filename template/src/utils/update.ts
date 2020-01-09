import { OWebApp } from 'oweb';

const checkUpdate = (app: OWebApp) => {
	let updater = app.ls.load('updater') || {},
		now = Date.now() / 1000,
		aDay = 86400,
		last_show = app.ls.load('updater_last_show') || 0,
		show = false;

	if (updater.shouldUpdate) {
		if (updater.forceUpdate) {
			show = true;
		} else if (now - last_show >= aDay) {
			show = true;
		}
	}

	if (show) {
		app.ls.save('updater_last_show', now);
		app.router.browseTo('/app/update', undefined, false);
	}
};

export { checkUpdate };
