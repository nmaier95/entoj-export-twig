'use strict';

/**
 * Requirements
 */
const TwigExportCommand = require(TWIG_SOURCE + '/command/TwigExportCommand.js').TwigExportCommand;
const exportCommandSpec = require('entoj-system/test').command.ExportCommandShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(TwigExportCommand.className, function()
{
    /**
     * Command Test
     */
    function prepareParameters()
    {
        const fixture = projectFixture.createDynamic();
        return [fixture.context];
    }

    exportCommandSpec(TwigExportCommand, 'command/TwigExportCommand', prepareParameters, { action: 'jsp' });
});
