module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
		        livereload: true,
		    },
		    scripts: {
		        files: [
		        	'assets/js/*.js',
		        	'assets/js/*/*.js',
		        	'assets/css/*.scss',
		        	'assets/css/*/*.scss',
		        	'*/*.php',
		        	'*.php',
		        	'*.html'
		        ],
		        tasks: ['sass', 'uglify'],
		        options: {
		            spawn: false,
		        },
		    },    
		},	
		sass: {
			options: {
				loadPath: require('node-bourbon').includePaths,
				style: 'compressed'
			},			
			dist: {
				files: {
					'assets/css/style.css': 'assets/css/style.scss',
				}
			}
		},
		uglify: {
		    base: {
		        src: [
			        'assets/js/base.js',
			        'assets/js/bundle.js'
				],
		        dest: 'assets/js/base.min.js',
		    },
		    libs: {
		        src: [
		            'assets/js/jquery.js',
		            'assets/js/howler.js',
		            'assets/js/fittext.js',
		        ],
		        dest: 'assets/js/libs.min.js',
		    }
		}
    });
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('work', ['watch','uglify:base','sass']);
    grunt.registerTask('build', ['sass','uglify']);
};
