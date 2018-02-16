'use strict';

/**
 * Requirements
 */
const TwigComplexVariableNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigComplexVariableNodeRenderer.js').TwigComplexVariableNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigComplexVariableNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigComplexVariableNodeRenderer, 'export.renderer/TwigComplexVariableNodeRenderer', undefined, require('./RendererHelper.js').options(true));
});
