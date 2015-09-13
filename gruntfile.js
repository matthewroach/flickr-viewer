
module.exports = function( grunt ) {
	var path = require('path');

  require('load-grunt-config')(grunt, {
  	// Path to task.js files, defaults to grunt dir
    configPath: path.join(process.cwd(), 'grunt/tasks/'),
    // Can optionally pass options to load-grunt-tasks.  If you set to false, it will disable auto loading tasks.
    loadGruntTasks: {
	    pattern: 'grunt-*',
	    config: require('./package.json'),
	    scope: 'devDependencies'
    }
  });

}
