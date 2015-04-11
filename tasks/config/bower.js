module.exports = function(grunt) {

  grunt.config.set('bower', {
      dev: {
          dest: '.tmp/public',
          js_dest: '.tmp/public/js',
          css_dest: '.tmp/public/styles',
          options: {
     packageSpecific: {
       bootstrap: {
         dest: '.tmp/public/bootstrap',
         css_dest: '.tmp/public/bootstrap',
         js_dest: '.tmp/public/bootstrap'


       	},
         jquery:{
         	dest:'.tmp/public/js/jquery',
         	js_dest:'.tmp/public/js/jquery'

         }
     	}
      }
  }
  });

  grunt.loadNpmTasks('grunt-bower');
};
