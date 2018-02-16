'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;
const prepareParameters = require('entoj-system').export.renderer.helper.prepareParameters;
const co = require('co');


/**
 * Renders a macro
 */
class TwigMacroNodeRenderer extends NodeListRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/TwigMacroNodeRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('MacroNode'));
    }


    /**
     * @return {Promise<String>}
     */
    render(node, configuration)
    {
        if (!node || !configuration)
        {
            return Promise.resolve('');
        }
        const promise = co(function*()
        {
            // Prepare
            let result = '';
            const macroConfiguration = yield configuration.getMacroConfiguration(node.name);

            // Name
            result+= '{% macro ' + node.name + '(';

            // Parameters
            const parameters = prepareParameters(node, macroConfiguration, configuration, 'literals');
            let isFirst = true;
            for (const paramName in parameters)
            {
                if (!isFirst)
                {
                    result+= ', ';
                }
                result+= paramName;
                if (parameters[paramName].value !== null)
                {
                    result+= ' = ' + parameters[paramName].value;
                }
                isFirst = false;              
            }
            result+= ') %}';


            // Children
            result+= yield configuration.renderer.renderList(node.children, configuration);
            result+= '{% endmacro %}';


            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.TwigMacroNodeRenderer = TwigMacroNodeRenderer;
