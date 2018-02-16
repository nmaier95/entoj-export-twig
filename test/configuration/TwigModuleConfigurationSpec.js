'use strict';

/**
 * Requirements
 */
const TwigModuleConfiguration = require(TWIG_SOURCE + '/configuration/TwigModuleConfiguration.js').TwigModuleConfiguration;
const baseSpec = require('entoj-system/test').BaseShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(TwigModuleConfiguration.className, function()
{
    /**
     * Base Test
     */
    baseSpec(TwigModuleConfiguration, 'configuration/TwigModuleConfiguration', () =>
    {
        return [global.fixtures.globalConfiguration, global.fixtures.buildConfiguration];
    });


    beforeEach(function()
    {
        global.fixtures = projectFixture.createStatic();
    });
});
