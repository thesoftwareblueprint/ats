/**
 * Created by walter on 2/17/14.
 */
module.exports = {
    options: {
        base: './app/src'
    },
    'dist': {
        src: ['<%= globalConfig.srcfiles.tpl %>'],
        dest: '<%= globalConfig.tmpdir %>/ats-templates.js',

        module: 'ats.templates'
    }
};