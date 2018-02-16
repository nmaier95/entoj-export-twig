'use strict';

// Requirements
const Exporter = require('entoj-system').export.Exporter;
const GlobalRepository = require('entoj-system').model.GlobalRepository;
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;
const JinjaParser = require('entoj-system').export.parser.JinjaParser;
const TwigRenderer = require('./TwigRenderer.js').TwigRenderer;
const TwigTransformer = require('./TwigTransformer.js').TwigTransformer;
const TwigConfiguration = require('./TwigConfiguration.js').TwigConfiguration;
const TwigModuleConfiguration = require('../configuration/TwigModuleConfiguration.js').TwigModuleConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


/**
 * @memberOf export
 * @extends export.Renderer
 */
class TwigExporter extends Exporter
{
    /**
     * @ignore
     */
    constructor(globalRepository, buildConfiguration, moduleConfiguration, renderer, transformer)
    {
        super(globalRepository, buildConfiguration, new JinjaParser(), renderer, transformer);

        // Check params
        assertParameter(this, 'moduleConfiguration', moduleConfiguration, true, TwigModuleConfiguration);

        // Assign options
        this._moduleConfiguration = moduleConfiguration;
        this._configurationClass = TwigConfiguration;
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export/TwigExporter';
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [GlobalRepository, BuildConfiguration, TwigModuleConfiguration, TwigRenderer, TwigTransformer] };
    }


    /**
     * @type {configuration.TwigModuleConfiguration}
     */
    get moduleConfiguration()
    {
        return this._moduleConfiguration;
    }


    /**
     * @protected
     * @param {model.entity.EntityAspect} entity
     * @param {model.documentation.DocumentationCallable} macro
     * @param {Object} settings
     * @returns {Configuration}
     */
    createConfigurationInstance(entity, macro, settings)
    {
        return new this._configurationClass(entity, macro, settings,
            this.parser, this.renderer, this.transformer,
            this.globalRepository, this.buildConfiguration, this.moduleConfiguration);
    }
}


// Exports
module.exports.TwigExporter = TwigExporter;
