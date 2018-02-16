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
class TwigIfNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/TwigIfNodeRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('IfNode'));
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

            // ... ? ... : ....
            if (node.parent && node.parent.is('ExpressionNode'))
            {
                result+= yield configuration.renderer.renderList(node.children, configuration);
                result+= ' if ';
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= ' else ';
                result+= yield configuration.renderer.renderList(node.elseChildren, configuration);
            }
            // If ...
            else if (!node.elseChildren.length && !node.elseIfChildren.length)
            {
                result+= '{% if ';
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= ' %}';               
                result+= yield configuration.renderer.renderList(node.children, configuration);
                result+= '{% endif %}';
            }
            // If ... elseif ... else ...
            else
            {
                result+= '{% if ';
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= ' %}';
                result+= yield configuration.renderer.renderList(node.children, configuration);
                if (node.elseIfChildren.length)
                {
                    for (const elseIfNode of node.elseIfChildren)
                    {
                        result+= '{% elif ';
                        result+= yield configuration.renderer.renderNode(elseIfNode.condition, configuration);
                        result+= ' %}';
                        result+= yield configuration.renderer.renderList(elseIfNode.children, configuration);
                    }
                }
                if (node.elseChildren.length)
                {
                    result+= '{% else %}';
                    result+= yield configuration.renderer.renderList(node.elseChildren, configuration);
                }
                result+= '{% endif %}';
            }
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.TwigIfNodeRenderer = TwigIfNodeRenderer;
