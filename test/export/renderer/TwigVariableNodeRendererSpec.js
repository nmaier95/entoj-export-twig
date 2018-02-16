'use strict';

/**
 * Requirements
 */
const TwigVariableNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigVariableNodeRenderer.js').TwigVariableNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigVariableNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigVariableNodeRenderer, 'export.renderer/TwigVariableNodeRenderer', undefined, require('./RendererHelper.js').options());
});
