'use strict';

/**
 * Requirements
 */
const TwigMacroNodeRenderer = require(TWIG_SOURCE + '/export/renderer/TwigMacroNodeRenderer.js').TwigMacroNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(TwigMacroNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(TwigMacroNodeRenderer, 'export.renderer/TwigMacroNodeRenderer', undefined, require('./RendererHelper.js').options());
});
