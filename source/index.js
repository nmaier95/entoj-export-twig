'use strict';

/**
 * Registers with default configurations
 */
function register(configuration, options)
{
    // Commands
    configuration.commands.add(require('./command/TwigExportCommand.js').TwigExportCommand);

    // Export
    configuration.mappings.add(require('./index.js').export.TwigRenderer,
        {
            '!nodeRenderers': require('./index.js').export.renderer.rendererList
        });
    configuration.mappings.add(require('./index.js').export.TwigTransformer,
        {
            '!nodeTransformers': require('./index.js').export.transformer.transformerList
        });    
}


/**
 * Exports
 * @ignore
 */
module.exports =
{
    register: register,
    command: require('./command/index.js'),
    configuration: require('./configuration/index.js'),
    export: require('./export/index.js'),
    task: require('./task/index.js')
};
