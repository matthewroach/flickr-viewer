
module.exports = {



	main: {
		options: {
			style: 'expanded',
			sourcemap: 'none',
			unixNewlines: true
		},
		files: {
			'app/a/css/<%= package.name %>.css': 'src/scss/<%= package.name %>.scss'
		}
	}



};
