const configs = {
	transpileDependencies: ["oweb", "gobl-utils-ts"],
	chainWebpack: config => {
		config
			.plugin('define')
			.tap(args => {
				const pck = require('./package.json'),
					owebConfig = {
						api: 'localhost:3030',
						devApi: 'localhost:3030',
						...(pck.oweb || {})
					};

				args[0]['process.env']['NAME'] = JSON.stringify(pck.name);
				args[0]['process.env']['VERSION'] = JSON.stringify(pck.version);
				args[0]['process.env']['API'] = JSON.stringify(owebConfig.api);
				args[0]['process.env']['API_DEV'] = JSON.stringify(owebConfig.devApi);

				return args;
			})
	}
};

if (process.env.NODE_ENV === 'production') {
	configs.publicPath = "/";
} else {
	configs.publicPath = "/";
}

module.exports = configs;
