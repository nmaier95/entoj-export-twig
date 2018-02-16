'use strict';

/**
 * Requirements
 */
const TwigCallNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigCallNodeRenderer.js').TwigCallNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigCallNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigCallNodeRenderer, 'export.renderer/TwigCallNodeRenderer', undefined, require('./RendererHelper.js').options(true));
});
