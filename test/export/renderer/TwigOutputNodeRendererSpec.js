'use strict';

/**
 * Requirements
 */
const TwigOutputNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigOutputNodeRenderer.js').TwigOutputNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigOutputNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigOutputNodeRenderer, 'export.renderer/TwigOutputNodeRenderer', undefined, require('./RendererHelper.js').options());
});
