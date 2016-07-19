/*eslint-env node*/
var path = require("path");

module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);
	require("load-grunt-config")(grunt, {
		configPath: path.join(process.cwd(), ".grunt"),
		pkg: grunt.file.readJSON("package.json")
	});

	var r = grunt.registerTask;

	r("lint", ["sasslint", "eslint"]);
	r("docs", ["sassdoc", "documentation"]);
	r("build", ["sass", "webpack"]);
	r("serve", ["express", "open", "watch"]);

	r("default", ["lint", "docs", "build", "serve"]);
};
