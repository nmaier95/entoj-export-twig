'use strict';

/**
 * Requirements
 */
const TwigForNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigForNodeRenderer.js').TwigForNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigForNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigForNodeRenderer, 'export.renderer/TwigForNodeRenderer', undefined, require('./RendererHelper.js').options());
});
