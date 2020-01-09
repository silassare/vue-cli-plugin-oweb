module.exports = {
	chainWebpack: config => {
		config
			.plugin('define')
			.tap(args => {
				let package = require('./package.json');
				let owebConfig = package.oweb || {};
				owebConfig = { api: 'localhost:3030', devApi: 'localhost:3030', ...owebConfig };

				args[0]['process.env']['NAME'] = JSON.stringify(package.name);
				args[0]['process.env']['VERSION'] = JSON.stringify(package.version);
				args[0]['process.env']['API'] = JSON.stringify(owebConfig.api);
				args[0]['process.env']['API_DEV'] = JSON.stringify(owebConfig.apiDev);

				return args;
			})
	}
}
