module.exports = api => {
	api.render("./template");

	api.injectImports(api.entryFile, `import '@/oweb.boot'`);

	api.extendPackage({
		scripts: {
			"serve": "npm run bundle && vue-cli-service serve",
			"build": "npm run bundle && vue-cli-service build",
			"bundle": "oweb bundle-components -l && cd ../ && oz db ts-bunlde ./app/src/",
		},
		dependencies: {
			"oweb": "*",
			"gobl-utils-ts": "*",
			"o-tel-input": "*"
		},
		devDependencies: {
			"@types/jquery": "*"
		}
	});
}
