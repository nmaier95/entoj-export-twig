'use strict';

/**
 * Requirements
 */
const TwigExpressionNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigExpressionNodeRenderer.js').TwigExpressionNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigExpressionNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigExpressionNodeRenderer, 'export.renderer/TwigExpressionNodeRenderer', undefined, require('./RendererHelper.js').options());
});
