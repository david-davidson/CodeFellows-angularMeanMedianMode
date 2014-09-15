'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    clean: {
      dev: {
        src: [
          'build/'
        ]
      },
      test: {
        src: [
        'tests/testBundle.js'
        ]
      }
    },

    copy: {
      dev: {
        expand: true,
        cwd: 'app/',
        src: [
          '*.html',
          '*.css'
          ],
        dest: 'build/',
        filter: 'isFile'
      }
    },

    jshint: {
      files: [
        '*.js',
        'app/*.js',
        'app/**/*.js'
      ],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: [
        'server.js',
        'Gruntfile.js',
        'app/*.js',
        'app/**/*.js'
      ],
      options: {
        config: '.jscsrc'
      }
    },

    browserify: {
      dev: {
        options: {
          transform: [
            'debowerify'
          ],
          debug: true
        },
        src: [
          'app/*.js'
        ],
        dest: 'build/bundle.js'
      },
      test: {
        options: {
          transform: [
            'debowerify'
          ],
          debug: true
        },
        src: [
          'tests/*.js'
        ],
        dest: 'tests/testBundle.js'
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }

  });

  grunt.registerTask('default', [
      'jshint',
      'jscs',
      'clean:dev',
      'browserify:dev',
      'copy:dev'
    ]);
  grunt.registerTask('test', [
      'jshint',
      'jscs',
      'clean:test',
      'browserify:test',
      // 'copy:dev'
      'karma:unit'
    ]);
};