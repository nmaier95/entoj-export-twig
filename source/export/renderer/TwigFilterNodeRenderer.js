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
class TwigFilterNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/TwigFilterNodeRenderer';
    }


    /**
     * @type {Boolean|Array}
     */
    get filterName()
    {
        return false;
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('FilterNode', { name: this.filterName }));
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
            result+= yield configuration.renderer.renderNode(node.value, configuration);            
            result+= '|' + node.name + '(';
            const args = [];
            if (node.arguments)
            {
                for (const argument of node.arguments)
                {
                    args.push(yield configuration.renderer.renderNode(argument.value, configuration));
                }
            }
            result+= args.join(', ');
            result+= ')';
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.TwigFilterNodeRenderer = TwigFilterNodeRenderer;
