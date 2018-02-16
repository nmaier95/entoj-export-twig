'use strict';

/**
 * Requirements
 */
const TwigLiteralNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigLiteralNodeRenderer.js').TwigLiteralNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigLiteralNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigLiteralNodeRenderer, 'export.renderer/TwigLiteralNodeRenderer', undefined, require('./RendererHelper.js').options());
});
