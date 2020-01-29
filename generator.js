module.exports = api => {
	api.render("./template");

	api.injectImports(api.entryFile, `import '@/oweb.boot'`);

	api.extendPackage({
		scripts: {
			"serve": "npm run bundle && vue-cli-service serve",
			"build": "npm run bundle && vue-cli-service build",
			"bundle": "APP_DIR=`pwd` && cd ../ && oz db ts-bundle $APP_DIR/src/",
			"less-watch": "cd ./src/assets/styles/ && less-watch-compiler . . bundle.less ",
		},
		dependencies: {
			"oweb": "silassare/oweb",
			"oweb-tel-input": "silassare/oweb-tel-input",
			"gobl-utils-ts": "silassare/gobl-utils-ts"
		},
		devDependencies: {
			"@types/jquery": "*",
			"less-watch-compiler": "*"
		}
	});
}
