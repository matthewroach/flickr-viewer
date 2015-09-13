
module.exports = {



	app: {
		src: [
			'src/js/libs/jquery-2.1.4.js',
			'src/js/libs/underscore.js',
			'src/js/libs/backbone.js',
			'src/js/libs/*.js',
			'src/js/models/*.js',
			'src/js/collections/*.js',
			'src/js/views/*.js',
			'src/js/<%= package.name %>.js'
		],
		dest: 'app/a/js/<%= package.name %>.js'
	}



};
