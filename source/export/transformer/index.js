/**
 * @namespace export.renderer
 */
module.exports =
{
    TwigConcatTransformer: require('./TwigConcatTransformer.js').TwigConcatTransformer,

    transformerList:
    [
        require('entoj-system').export.transformer.RemoveLoadModelTransformer,
        require('./TwigConcatTransformer.js').TwigConcatTransformer
    ]
};
