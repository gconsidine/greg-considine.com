module.exports = function (grunt) {

	grunt.config.set('concat', {
		js: {
      src: ['assets/tmp/app-bundle.js'],
			dest: 'assets/tmp/app.js'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

};
