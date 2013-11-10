'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    useminPrepare: {
      html: 'app/index.html',
      options: {
        dest: 'dist'
      }
    },

    htmlmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app',
          src: '*.html',
          dest: 'dist'
        }]
      }
    },

    usemin: {
      html: ['dist/{,*/}*.html'],
      css: ['dist/styles/{,*/}*.css'],
      options: {
        dirs: ['dist']
      }
    },

    clean: {
      dist: ['.tmp', 'dist/*'],
      server: '.tmp'
    },

  });

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'htmlmin',
    'concat',
    'cssmin',
    'uglify',
    'usemin'
  ]);


};
