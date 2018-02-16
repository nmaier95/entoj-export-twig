'use strict';

/**
 * Requirements
 */
const TwigIfNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigIfNodeRenderer.js').TwigIfNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigIfNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigIfNodeRenderer, 'export.renderer/TwigIfNodeRenderer', undefined, require('./RendererHelper.js').options());
});
