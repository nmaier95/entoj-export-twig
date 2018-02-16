'use strict';

/**
 * Requirements
 */
const TwigFunctionCallNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigFunctionCallNodeRenderer.js').TwigFunctionCallNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigFunctionCallNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigFunctionCallNodeRenderer, 'export.renderer/TwigFunctionCallNodeRenderer', undefined, require('./RendererHelper.js').options());
});
