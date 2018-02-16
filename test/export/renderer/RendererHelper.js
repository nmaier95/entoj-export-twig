'use strict';

/**
 * Exports
 * @ignore
 */
module.exports.options = function(dynamic, fixtureConfiguration)
{
    const result =
    {
        configurationCreator: function(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration)
        {
            const TwigModuleConfiguration = require(TWIG_SOURCE + '/configuration/TwigModuleConfiguration.js').TwigModuleConfiguration;
            const TwigConfiguration = require(TWIG_SOURCE + '/export/TwigConfiguration.js').TwigConfiguration;
            const fluidModuleConfiguration = new TwigModuleConfiguration(global.fixtures.globalConfiguration, buildConfiguration);
            return new TwigConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, fluidModuleConfiguration);
        },
        basePath: TWIG_FIXTURES + '/nodeRenderer'
    };
    if (dynamic === true)
    {
        result.createFixture = () => require('entoj-system/test').fixture.project.createDynamic(fixtureConfiguration);
    }
    else
    {
        result.createFixture = () => require('entoj-system/test').fixture.project.createStatic(fixtureConfiguration);
    }
    result.resultExtension = '.j2';
    return result;
};
