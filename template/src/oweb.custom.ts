import { tViewDialog } from 'oweb';
import app from '@/app';

app.pager.onLocationChange((route, page) => {
	app.store.page = page;
	app.store.route = route;
	app.store.routeContext = app.router.getRouteContext();
});

app.view
	.onFreeze(() => {
		app.store.frozen = true;
		document.body.classList.add('oweb-freeze');
	})
	.onUnFreeze(() => {
		app.store.frozen = false;
		document.body.classList.remove('oweb-freeze');
	})
	.onDialog((dialog: tViewDialog, can_use_alert: boolean) => {
		let { text, data } = dialog;

		if (text && text.length) {
			if (can_use_alert && app.isMobileApp()) {
				alert(app.i18n.toHuman(text, data));
			} else {
				app.store.dialogs.push(dialog);
			}
		}
	});
