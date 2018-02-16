'use strict';

/**
 * Requirements
 */
const TwigRenderer = require(TWIG_SOURCE + '/export/TwigRenderer.js').TwigRenderer;
const TwigConfiguration = require(TWIG_SOURCE + '/export/TwigConfiguration.js').TwigConfiguration;
const TwigModuleConfiguration = require(TWIG_SOURCE + '/configuration/TwigModuleConfiguration.js').TwigModuleConfiguration;
const TwigNodeRenderers = require(TWIG_SOURCE + '/export/renderer/index.js');
const rendererSpec = require('entoj-system/test').export.RendererShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(TwigRenderer.className, function()
{
    /**
     * Renderer Test
     */
    const fixtureConfiguration =
    {
        settings:
        {
            jsp:
            {
                assetBaseUrl: '/base/global/assets',
                imageBaseUrl: '/images'
            }
        }
    };
    const testFixtures =
    {
        'should render conditions': 'conditions',
        'should render assignments': 'assignments',
        'should render calls': 'calls',      
        'should render loops': 'loops',
        /*
        'should render filter': 'filter'
        */
    };
    const options =
    {
        configurationCreator: function(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration)
        {
            const moduleConfiguration = new TwigModuleConfiguration(global.fixtures.globalConfiguration, global.fixtures.buildConfiguration);
            return new TwigConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration);
        },
        fixtureInputPath: require('entoj-system/test').fixture.export.renderer,
        fixtureExpectedPath: TWIG_FIXTURES + '/renderer',
        createFixture: () => projectFixture.createDynamic(fixtureConfiguration)
    };
    const prepareParameters = (parameters) =>
    {
        global.fixtures.context.di.map('nunjucks.filter/ImageUrlFilter.dataProperties', ['src']);
        global.fixtures.context.di.map('nunjucks.filter/LinkUrlFilter.dataProperties', ['url']);
        const classes = TwigNodeRenderers.rendererList;
        const nodeRenderers = global.fixtures.context.createInstances(classes);
        return [nodeRenderers];
    };
    rendererSpec(TwigRenderer, 'export/TwigRenderer', prepareParameters, testFixtures, options);
});
