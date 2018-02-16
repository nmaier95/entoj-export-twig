'use strict';

// Requirements
const Transformer = require('entoj-system').export.Transformer;


/**
 * @memberOf export
 * @extends export.Transformer
 */
class TwigTransformer extends Transformer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/TwigTransformer';
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': ['export/TwigTransformer.nodeTransformers'] };
    }
}


// Exports
module.exports.TwigTransformer = TwigTransformer;
