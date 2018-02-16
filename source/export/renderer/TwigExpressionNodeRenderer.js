'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;


/**
 *
 */
class TwigExpressionNodeRenderer extends NodeListRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/TwigExpressionNodeRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, context)
    {
        return Promise.resolve(node && node.is('ExpressionNode'));
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.TwigExpressionNodeRenderer = TwigExpressionNodeRenderer;
