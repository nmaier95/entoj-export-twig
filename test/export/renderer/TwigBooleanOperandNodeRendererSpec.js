'use strict';

/**
 * Requirements
 */
const TwigBooleanOperandNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigBooleanOperandNodeRenderer.js').TwigBooleanOperandNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigBooleanOperandNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigBooleanOperandNodeRenderer, 'export.renderer/TwigBooleanOperandNodeRenderer', undefined, require('./RendererHelper.js').options());
});
