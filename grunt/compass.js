/**
 * Created by walter on 2/17/14.
 */
module.exports = {
    options: {
        sassDir: '<%= globalConfig.srcdir %>',
        cssDir: '<%= globalConfig.distdir %>',
        generatedImagesDir: '<%= globalConfig.distdir %>/images/generated',
        imagesDir: '<%= globalConfig.srcdir %>/assets/images',
        javascriptsDir: '<%= globalConfig.srcdir %>',
        fontsDir: '<%= globalConfig.app %>/bower_components/bootstrap-sass/vendor/assets/fonts/bootstrap',
        importPath: '<%= globalConfig.app %>/bower_components',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
    },
    dist: {
        options: {
            generatedImagesDir: '<%= globalConfig.distdir %>/images/generated',
            outputStyle: 'compressed',
            environment: 'production'
        }
    },
    dev: {
        options: {
            debugInfo: true
        }
    }
};