module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        haml: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    'index.html': 'index.haml'
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'assets/js/jquery-1.10.2.min.js',
                    'assets/js/scrollReveal.js',
                    'assets/js/jquery.fancybox.pack.js',
                    'assets/js/jquery.fancybox-media.js',
                    'assets/js/custom.js'
                ],
                dest: 'assets/js/build/production.js',
                nonull: true
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                src: 'assets/js/build/production.js',
                dest: 'assets/js/build/production.min.js'
            }
        },
        compass: {
            options: {
                banner: false
            },
            dist: { 
                options: {
                    sassDir: 'assets/sass',
                    cssDir: 'assets/css'
                }
            }
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '/* PH DataMapper Min css file */'
                },
                files: {
                    'assets/css_min/production.min.css': [
                        'assets/css/bootstrap.css',
                        'assets/css/bootstrap-responsive.css',
                        'assets/css/jquery.fancybox.css',
                        'assets/css/style.css',
                        'assets/css/media.css'
                    ]
                }
            }
        },
        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['notify:gruntChange']
            },
            scripts: {
                files: ['assets/js/*.js', 'assets/js/libs/*.js'],
                tasks: ['concat', 'uglify']
            },
            csstosass: {
                files: ['assets/sass/*.sass'],
                tasks: ['compass']
            },
            css: {
                files: ['assets/css/*.css','assets/css/!*.min.css'],
                tasks: ['cssmin']
            },
            haml: {
                files: ['*.haml'],
                tasks: ['haml']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-haml');

    grunt.registerTask('default', ['concat','uglify','compass','cssmin', 'haml']);
    grunt.registerTask('set', ['concat','uglify','compass','cssmin', 'haml','watch']);
};