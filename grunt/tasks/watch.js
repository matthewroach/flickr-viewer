
module.exports = {



	sass: {
		files: 'src/scss/**/*.scss',
		tasks: [ 'sass' ]
	},



	js: {
		files: 'src/js/**',
		tasks: [ 'concat' ],
		options: {
			interrupt: true
		}
	}



};
