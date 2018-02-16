'use strict';

/**
 * Requirements
 */
const TwigFilterNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigFilterNodeRenderer.js').TwigFilterNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigFilterNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigFilterNodeRenderer, 'export.renderer/TwigFilterNodeRenderer', undefined, require('./RendererHelper.js').options());
});
