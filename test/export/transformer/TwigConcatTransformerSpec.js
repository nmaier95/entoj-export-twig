'use strict';

/**
 * Requirements
 */
const TwigConcatTransformer = require(TWIG_SOURCE + '/export/transformer/TwigConcatTransformer.js').TwigConcatTransformer;
const nodeTransformerSpec = require('entoj-system/test').export.NodeTransformerShared;


/**
 * Spec
 */
describe(TwigConcatTransformer.className, function()
{
    /**
     * NodeTransformer Test
     */
    const options =
    {
        basePath: TWIG_FIXTURES + '/transformer'
    };
    const testFixtures =
    {
        'should replace the operand of string concats with tilde': 'TwigConcatTransformer'
    };
    nodeTransformerSpec(TwigConcatTransformer, 'export.transformer/TwigConcatTransformer', undefined, testFixtures, options);
});
