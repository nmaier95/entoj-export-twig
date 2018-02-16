'use strict';

/**
 * Requirements
 * @ignore
 */
const TwigOperandNodeRenderer = require('./TwigOperandNodeRenderer.js').TwigOperandNodeRenderer;


/**
 *
 */
class TwigBooleanOperandNodeRenderer extends TwigOperandNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/TwigBooleanOperandNodeRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('BooleanOperandNode'));
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.TwigBooleanOperandNodeRenderer = TwigBooleanOperandNodeRenderer;
