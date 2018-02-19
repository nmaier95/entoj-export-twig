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
        for (const callName in configuration.macroCalls)
        {
            const call = configuration.macroCalls[callName];
            if (!call.addedInclude)
            {
                result+= '{% from \'' + call.includePath + '\' import ' + call.macro.name + ' %}\n';
            }
        }
        configuration.resetMacroCalls();
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
