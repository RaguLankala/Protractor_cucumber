module.exports = function(grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        jshint : {
            files : [ 'Gruntfile.js', 'features/step_definitions/*.js', 'features/support/*.js' ],
            options : {
// options here to override JSHint defaults
                globals : {
                    jQuery : true,
                    console : true,
                    module : true,
                    document : true
                }
            }
        },
        protractor : {
            options : {
                keepAlive : true,
                configFile : "protractor.config.js"
            },
            singlerun : {},
            auto : {
                keepAlive : true,
                options : {
                    args : {
                        seleniumPort : 4444,
                        seleniumArgs : [ '-browserTimeout=120' ]
                    }
                }
            }
        },
        shell : {
            options : {
                stdout : true
            },
            protractor_install : {
                command : 'node ./node_modules/protractor/bin/webdriver-manager update'
            },
            npm_install : {
                command : 'npm install'
            },
            mvn_generate : {
                command : 'mvn site -Dallure.results_pattern=allure-results'
            },
            jetty_run : {
                command : 'mvn jetty:run -Djetty.port=1234'
            },
            mvn_clean : {
                command : 'mvn clean'
            },
            remove_screenshots : {
                command : 'rmdir allure-results /S /Q'
            },
            debug: {
                command : '--expose_debug_as=v8debug'
            }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-shell-spawn');
    grunt.registerTask('install', [ 'shell:npm_install', 'shell:protractor_install' ]);
    grunt.registerTask('default', [ 'jshint', 'protractor:singlerun' ]);
    //grunt.registerTask('reports', [ 'shell:mvn_clean', 'shell:mvn_generate', 'shell:jetty_run']);
    //grunt.registerTask('debug', ['shell:debug']);
};