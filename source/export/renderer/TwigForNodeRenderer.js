'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 *
 */
class TwigForNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/TwigForNodeRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('ForNode'));
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
            let result = '';

            // Create iteration var
            const variableName = node.keyName 
                ? node.keyName + ', ' + node.valueName 
                : node.valueName;

            // Create iteration
            result+= '{% for ';
            result+= variableName;
            result+= ' in ';
            result+= yield configuration.renderer.renderNode(node.value, configuration);
            result+= ' %}';

            // Render children
            result+= yield configuration.renderer.renderList(node.children, configuration);

            // End Iteration
            result+= '{% endfor %}';

            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.TwigForNodeRenderer = TwigForNodeRenderer;
