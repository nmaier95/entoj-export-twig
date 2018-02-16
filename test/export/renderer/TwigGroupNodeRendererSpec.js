'use strict';

/**
 * Requirements
 */
const TwigGroupNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigGroupNodeRenderer.js').TwigGroupNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigGroupNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigGroupNodeRenderer, 'export.renderer/TwigGroupNodeRenderer', undefined, require('./RendererHelper.js').options());
});
