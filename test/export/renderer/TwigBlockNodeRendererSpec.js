'use strict';

/**
 * Requirements
 */
const TwigBlockNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigBlockNodeRenderer.js').TwigBlockNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigBlockNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigBlockNodeRenderer, 'export.renderer/TwigBlockNodeRenderer', undefined, require('./RendererHelper.js').options());
});
