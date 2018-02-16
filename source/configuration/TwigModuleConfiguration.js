'use strict';

/**
 * Requirements
 * @ignore
 */
const Base = require('entoj-system').Base;
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;
const GlobalConfiguration = require('entoj-system').model.configuration.GlobalConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


/**
 * @memberOf configuration
 */
class TwigModuleConfiguration extends Base
{
    /**
     * @param  {model.configuration.GlobalConfiguration} globalConfiguration
     */
    constructor(globalConfiguration, buildConfiguration, options)
    {
        super();

        //Check params
        assertParameter(this, 'globalConfiguration', globalConfiguration, true, GlobalConfiguration);
        assertParameter(this, 'buildConfiguration', buildConfiguration, true, BuildConfiguration);

        // Create configuration
        const prefix = options
            ? options.prefix || 'twig'
            : 'twig';
        this._configurationName = buildConfiguration.get(prefix + '.configurationName', globalConfiguration.get(prefix + '.configurationName', prefix));
        this._exportPath = buildConfiguration.get(prefix + '.exportPath', globalConfiguration.get(prefix + '.exportPath', '${cache}/${configurationName}/export'));
        this._assetBaseUrl = buildConfiguration.get(prefix + '.assetBaseUrl', globalConfiguration.get(prefix + '.assetBaseUrl', ''));
        this._svgBaseUrl = buildConfiguration.get(prefix + '.svgBaseUrl', globalConfiguration.get(prefix + '.svgBaseUrl', ''));
        this._svgBasePath = buildConfiguration.get(prefix + '.svgBasePath', globalConfiguration.get(prefix + '.svgBasePath', ''));
        this._imageBaseUrl = buildConfiguration.get(prefix + '.imageBaseUrl', globalConfiguration.get(prefix + '.imageBaseUrl', ''));
        this._basePath = buildConfiguration.get(prefix + '.basePath', globalConfiguration.get(prefix + '.basePath', ''));
        this._includePath = buildConfiguration.get(prefix + '.includePath', globalConfiguration.get(prefix + '.includePath', ''));
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': [GlobalConfiguration, BuildConfiguration, 'configuration/TwigModuleConfiguration.options'] };
    }


    /**
     * @inheritDocss
     */
    static get className()
    {
        return 'configuration/TwigModuleConfiguration';
    }


    /**
     * Provides variables to use in path resolving
     *
     * @type {Object}
     */
    get variables()
    {
        return {
            configurationName: this._configurationName
        };
    }


    /**
     * The name of the export configurations for entities.
     *
     * @type {String}
     */
    get configurationName()
    {
        return this._configurationName;
    }


    /**
     * The path to the folder where files are exported to
     *
     * @type {String}
     */
    get exportPath()
    {
        return this._exportPath;
    }


    /**
     * The base url for images - used by imageUrl filter
     *
     * @type {String}
     */
    get imageBaseUrl()
    {
        return this._imageBaseUrl;
    }


    /**
     * The base url for assets - used by assetUrl filter
     *
     * @type {String}
     */
    get assetBaseUrl()
    {
        return this._assetBaseUrl;
    }


    /**
     * The base path for svg icons - used by svgViewBox filter renderer
     *
     * @type {String}
     */
    get svgBasePath()
    {
        return this._svgBasePath;
    }


    /**
     * The base path for svg icons - used by svgUrl filter
     *
     * @type {String}
     */
    get svgBaseUrl()
    {
        return this._svgBaseUrl;
    }


    /**
     * The base path for exported jsp artefacts
     *
     * @type {String}
     */
    get basePath()
    {
        return this._basePath;
    }


    /**
     * The base url for included jsp artefacts
     *
     * @type {String}
     */
    get includePath()
    {
        return this._includePath;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.TwigModuleConfiguration = TwigModuleConfiguration;
