'use strict';

var assign = require('object-assign');
var postcss = require('postcss');

var processors = [{
    // postcss-import should run first so other plugins
    // will work on the AST as if there's one file to process
    plugin: require('postcss-import'),
    namespace: 'postcss-import',
    defaults: {}
}, {
    // postcss-mixins should run before postcss-simple-vars & postcss-nested
    plugin: require('postcss-mixins'),
    namespace: 'postcss-mixins',
    defaults: {}
}, {
    plugin: require('postcss-simple-vars'),
    namespace: 'postcss-simple-vars',
    defaults: {}
}, {
    plugin: require('postcss-nested'),
    namespace: 'postcss-nested',
    defaults: {}
}];

module.exports = postcss.plugin('postcss-packlite', function (opts) {
    opts = assign({}, opts);

    var instance = postcss();

    processors.forEach(function (processor) {
        var processorOptions = assign({},
        											processor.defaults,
        											opts[processor.namespace]);

        if (!processorOptions.disable) {
            instance.use(processor.plugin(processorOptions));
        }
    });

    return instance;
});
