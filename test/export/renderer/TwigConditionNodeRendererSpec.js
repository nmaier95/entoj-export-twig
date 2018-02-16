'use strict';

/**
 * Requirements
 */
const TwigConditionNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigConditionNodeRenderer.js').TwigConditionNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigConditionNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigConditionNodeRenderer, 'export.renderer/TwigConditionNodeRenderer', undefined, require('./RendererHelper.js').options());
});
