module.exports = function(grunt) {

  

  require("load-grunt-tasks")(grunt);

	grunt.initConfig({

         less: {
         	style: {
         		files: {
         			"source/css/style.css": ["source/less/*.less"]
         		}

         	}
         },

         autoprefixer: {
         	options: {
         		browsers: ["last 2 version", "ie 10",'firefox 38'],
                diff: true
         	},
            style: {
            	src: "source/css/style.css"
            }
         },

        cmq: {
        	style:{
        		files:{
        			"source/css/style.css": ["source/css/style.css"]
        		}
        	}
        },

        cssmin: {
        	style: {
        		options: {
        			keepSpecialComments:0,
        			report: "gzip"
        		},
        	files: {
        		"source/css/style-min.css": ["source/css/style.css"]
        	}
        	}
        },


        watch: {
        	style:{
        	  	files: 'source/less/*.less',
                tasks: ['less', 'autoprefixer', 'cmq', 'cssmin','includereplace'],
        	  }
        },

        includereplace: {
           html: {

             src: '*.html',
             dest: 'source/'
        }
    }
       

	});

	grunt.registerTask("build", [
		"less",
		"autoprefixer",
		"cmq",
		"cssmin"
		]);

    grunt.registerTask("pre-build", [
        "less",
        "autoprefixer",
        "cmq",
        "cssmin",
        "includereplace"
        ]);
};