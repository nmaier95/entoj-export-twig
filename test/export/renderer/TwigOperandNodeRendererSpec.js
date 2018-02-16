'use strict';

/**
 * Requirements
 */
const TwigOperandNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigOperandNodeRenderer.js').TwigOperandNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigOperandNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigOperandNodeRenderer, 'export.renderer/TwigOperandNodeRenderer', undefined, require('./RendererHelper.js').options());
});
