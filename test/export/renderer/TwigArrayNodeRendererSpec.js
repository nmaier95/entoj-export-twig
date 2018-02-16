'use strict';

/**
 * Requirements
 */
const TwigArrayNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigArrayNodeRenderer.js').TwigArrayNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigArrayNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigArrayNodeRenderer, 'export.renderer/TwigArrayNodeRenderer', undefined, require('./RendererHelper.js').options());
});
