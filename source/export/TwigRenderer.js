'use strict';

// Requirements
const Renderer = require('entoj-system').export.Renderer;


/**
 * @memberOf export
 * @extends export.Renderer
 */
class TwigRenderer extends Renderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export/TwigRenderer';
    }


    /**
     * @inheritDoc
     */
    renderPreface(configuration)
    {
        let result = '';
        for (const usageName in configuration.macroUsage)
        {
            const usage = configuration.macroUsage[usageName];
            result+= '{% from \'' + usage.includePath + '\' import ' + usage.macro.name + ' %}\n';
        }
        configuration.resetMacroUsage();
        return Promise.resolve(result);
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': ['export/TwigRenderer.nodeRenderers', 'export/TwigRenderer.options'] };
    }
}


// Exports
module.exports.TwigRenderer = TwigRenderer;
