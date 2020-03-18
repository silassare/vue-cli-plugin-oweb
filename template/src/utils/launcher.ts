import { OWebApp } from 'oweb';

export default (app: OWebApp) => {
	const event = app.isMobileApp() ? 'deviceready' : 'DOMContentLoaded',
		launch = () => {
			if (!app.isMobileApp() && document.readyState === 'complete') {
				deviceReady();
				return;
			}

			document.addEventListener(event, deviceReady, false);
		},
		deviceReady = () => {
			document.removeEventListener(event, deviceReady);
			setTimeout(app.start.bind(app), 500);
		};

	return {
		launch,
		deviceReady,
	};
};
