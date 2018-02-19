'use strict';

/**
 * Requirements
 */
const TwigConfiguration = require(TWIG_SOURCE + '/export/TwigConfiguration.js').TwigConfiguration;
const TwigModuleConfiguration = require(TWIG_SOURCE + '/configuration/TwigModuleConfiguration.js').TwigModuleConfiguration;
const configurationSpec = require('entoj-system/test').export.ConfigurationShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(TwigConfiguration.className, function()
{
    /**
     * Configuration Test
     */
    function prepareParameters(parameters)
    {
        const fixture = projectFixture.createStatic(true);
        const moduleConfiguration = new TwigModuleConfiguration(fixture.globalConfiguration, fixture.buildConfiguration);
        if (parameters && parameters.length)
        {
            parameters.push(moduleConfiguration);
            return parameters;
        }
        else
        {
            return [undefined, undefined, {}, undefined, undefined, undefined, fixture.globalRepository, fixture.buildConfiguration, moduleConfiguration];
        }
    }

    configurationSpec(TwigConfiguration, 'export/TwigConfiguration', prepareParameters, { identifier: 'twig' });
});
