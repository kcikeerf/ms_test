module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  grunt.initConfig({
    watch: {
      styles: {
        files: ['src/sass/**/*.scss'], // which files to watch
        tasks: ['sass', 'postcss'],
        options: {
          nospawn: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'src/css/style-school-view.css': 'src/sass/style-school-view.scss',
          'src/css/style-academic-report.css': 'src/sass/style-academic-report.scss',
          'src/css/style-mq-report.css': 'src/sass/style-mq-report.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true, // inline sourcemaps

        // or
        map: {
            inline: false, // save all sourcemaps as separate files...
            annotation: 'src/css/maps/' // ...to the specified directory
        },

        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 10 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'src/css/*.css'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.registerTask('default', ['sass', 'postcss']);
  grunt.registerTask('sass-w', ['sass', 'postcss', 'watch']);
  grunt.registerTask('default-js', ['concat', 'uglify']);
};