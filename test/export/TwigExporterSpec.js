'use strict';

/**
 * Requirements
 */
const TwigExporter = require(TWIG_SOURCE + '/export/TwigExporter.js').TwigExporter;
const TwigModuleConfiguration = require(TWIG_SOURCE + '/configuration/TwigModuleConfiguration.js').TwigModuleConfiguration;
const TwigRenderer = require(TWIG_SOURCE + '/export/TwigRenderer.js').TwigRenderer;
const TwigTransformer = require(TWIG_SOURCE + '/export/TwigTransformer.js').TwigTransformer;
const DocumentationCallable = require('entoj-system').model.documentation.DocumentationCallable;
const exporterSpec = require('entoj-system/test').export.ExporterShared;
const projectFixture = require('entoj-system/test').fixture.project;
const co = require('co');
const fs = require('fs');
const UPDATE_SPECS = true;


/**
 * Spec
 */
describe(TwigExporter.className, function()
{
    /**
     * Exporter Test
     */
    function prepareParameters(parameters, fullyConfigure)
    {
        const options =
        {
            settings:
            {
                jsp:
                {
                    configurationName: 'default'
                }
            }
        };
        if (fullyConfigure)
        {
            options.mappings =
            [
                {
                    type: require(TWIG_SOURCE + '/export/TwigRenderer.js').TwigRenderer,
                    '!nodeRenderers': require(TWIG_SOURCE + '/export/renderer/index.js').rendererList
                },
                {
                    type: require(TWIG_SOURCE + '/export/TwigTransformer.js').TwigTransformer,
                    '!nodeTransformers': require(TWIG_SOURCE + '/export/transformer/index.js').transformerList
                }
            ];
        }

        const fixture = projectFixture.createDynamic(options);
        const moduleConfiguration = fixture.context.di.create(TwigModuleConfiguration);
        const jspRenderer = fixture.context.di.create(TwigRenderer);
        const jspTransformer = fixture.context.di.create(TwigTransformer);
        if (parameters && parameters.length)
        {
            parameters.push(moduleConfiguration, jspRenderer, jspTransformer);
            return parameters;
        }
        else
        {
            return [fixture.globalRepository, fixture.buildConfiguration, moduleConfiguration, jspRenderer, jspTransformer];
        }
    }
    exporterSpec(TwigExporter, 'export/TwigExporter', prepareParameters);


    /**
     * TwigExporter Test
     */
    function expectFixture(fixture, entityQuery, macroQuery, settings)
    {
        const promise = co(function*()
        {
            const testee = new TwigExporter(...prepareParameters(undefined, true));
            const result = yield testee.export('base', entityQuery, macroQuery, settings);
            if (UPDATE_SPECS)
            {
                fs.writeFileSync(TWIG_FIXTURES + '/exporter/' + fixture + '.expected.j2', result.contents, { encoding: 'utf8' });
            }
            expect(result.contents).to.be.equal(fs.readFileSync(TWIG_FIXTURES + '/exporter/' + fixture + '.expected.j2', { encoding: 'utf8' }));
            return result;
        });
        return promise;
    }

    describe('#export', function()
    {
        it('should export the default macro of given entity', function()
        {
            const promise = co(function*()
            {
                const result = yield expectFixture('default-macro', 'e-image', undefined, undefined);
                expect(result.configuration.macro).to.be.instanceof(DocumentationCallable);
                expect(result.configuration.macro.name).to.be.equal('e_image');
            });
            return promise;
        });

        it('should export the configured macro of given entity', function()
        {
            const promise = co(function*()
            {
                const result = yield expectFixture('selected-macro', 'm-teaser', 'm_teaser_hero', undefined);
                expect(result.configuration.macro).to.be.instanceof(DocumentationCallable);
                expect(result.configuration.macro.name).to.be.equal('m_teaser_hero');
            });
            return promise;
        });

        xit('should allow to preconfigure macro parameters', function()
        {
            const promise = co(function*()
            {
                const settings =
                {
                    parameters:
                    {
                        classes: 'configured'
                    }
                };
                yield expectFixture('macro-parameters', 'e-image', undefined, settings);
            });
            return promise;
        });

        xit('should allow to preconfigure call arguments', function()
        {
            const promise = co(function*()
            {
                const settings =
                {
                    settings:
                    {
                        e_cta:
                        {
                            arguments:
                            {
                                skin: 'dark'
                            }
                        }
                    }
                };
                yield expectFixture('call-arguments', 'm-teaser', undefined, settings);
            });
            return promise;
        });

        it('should allow macro calls that uses yield', function()
        {
            const promise = co(function*()
            {
                const settings =
                {
                };
                yield expectFixture('yield', 'm-teaser', undefined, settings);
            });
            return promise;
        });

        it('should allow to export templates', function()
        {
            const promise = co(function*()
            {
                const settings =
                {
                };
                yield expectFixture('template', 't-bare', undefined, settings);
            });
            return promise;
        });
    });
});
