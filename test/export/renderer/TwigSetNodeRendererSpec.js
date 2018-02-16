'use strict';

/**
 * Requirements
 */
const TwigSetNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigSetNodeRenderer.js').TwigSetNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigSetNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigSetNodeRenderer, 'export.renderer/TwigSetNodeRenderer', undefined, require('./RendererHelper.js').options());
});
