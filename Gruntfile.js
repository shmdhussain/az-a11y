module.exports = function(grunt) {
 
    grunt.initConfig({
 
		
        //our JSHint options
        // jshint: {
            // mine: ['js/*.js'] //files to lint
        // },
		
		
		//our concat options
        // concat: {
            // options: {
                // separator: ';' //separates scripts
            // },
            // dist: {
                // src: ['js/*.js'], //Using mini match for your scripts to concatenate
                // dest: 'js/script.js' //where to output the script
            // }
        // },
		
		//our uglify options
	   
	   paths: {
			src: {
				myjs: 'build/js/*.js',
				my_third_party_js: 'build/lib/*.js',
			},
			dest: {
				myjs_dest: 'build/js/myapp.js',
				my_third_party_js_dest: 'build/lib/thirdparty.js'
			},
			thirdparty:{
				src:'build/lib/'
			}
        },
       uglify: {
		options: {
		  mangle: false,
		  compress: {
			drop_console: true
		  }
		},
		my_jsfiles: {
		  options: {
			sourceMap: true,
			//sourceMapName: 'path/to/sourcemap.map'
		  },
		  files: {
			'<%= paths.dest.myjs_dest %>': ['<%= paths.src.myjs %>']
		  }
		},
		my_third_party_jsfiles: {
		  options: {
			//sourceMap: true,
			//sourceMapName: 'path/to/sourcemap.map'
		  },
		  files: {
			'<%= paths.dest.my_third_party_js_dest %>': ['<%= paths.thirdparty.src%>jquery.min.js','<%= paths.thirdparty.src%>prism.js','<%= paths.thirdparty.src%>angular.js','<%= paths.thirdparty.src%>angular-resource.js','<%= paths.thirdparty.src%>angular-animate.js','<%= paths.thirdparty.src%>angular-ui-router.min.js']
		  }
		},
	  },
		
		//our LESS options
		less: {
		  development: {
			files: {
			  "build/css/app.css": "build/css/app.less",
			  "build/css/elements.css": "build/css/elements.less"
			}
		  }
		  
		},
		
		connect: {
		server: {
		  options: {
			port: 8082,
			base: 'build',
			keepalive:true
		  }
		}
	  },
	  watch: {
		  css: {
			files: ['build/css/*.less','<%= paths.src.myjs %>'],
			tasks: ['less','uglify:my_jsfiles']
		  }
	  },
	  clean: {
		  build: ["build/css/elements.css", "build/css/app.css","<%= paths.dest.myjs_dest %>","<%= paths.dest.my_third_party_js_dest %>"],
		  //release: ["path/to/another/dir/one", "path/to/another/dir/two"]
	  },
		
		
    });
 
    //load our tasks
    // grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//default tasks to run
	
    grunt.registerTask('default', ['clean:build','less','uglify:my_jsfiles','uglify:my_third_party_jsfiles','connect']);
    //grunt.registerTask('minus', ['uglify:my_jsfiles','uglify:my_third_party_jsfiles']);
	
	
	//grunt.registerTask('development', ['jshint']);
   // grunt.registerTask('production', ['jshint', 'concat', 'uglify']);
}