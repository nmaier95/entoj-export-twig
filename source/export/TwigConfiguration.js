'use strict';

// Requirements
const Configuration = require('entoj-system').export.Configuration;
const TwigModuleConfiguration = require('../configuration/TwigModuleConfiguration.js').TwigModuleConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


/**
 * @memberOf export.fluid
 * @extends export.Configuration
 */
class TwigConfiguration extends Configuration
{
    /**
     * @ignore
     */
    constructor(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration)
    {
        super(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration);

        // Check params
        assertParameter(this, 'moduleConfiguration', moduleConfiguration, true, TwigModuleConfiguration);

        // Assign options
        this._moduleConfiguration = moduleConfiguration;
        this._identifier = moduleConfiguration.configurationName;
        this.macroUsage = {};
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export/TwigConfiguration';
    }


    /**
     * @type {configuration.TwigConfiguration}
     */
    get moduleConfiguration()
    {
        return this._moduleConfiguration;
    }


    /**
     * @param {Object} macroConfiguration
     */
    registerMacroUsage(macroConfiguration)
    {
        this.macroUsage[macroConfiguration.site.name + ':' + macroConfiguration.macro.name] = macroConfiguration;
    }


    /**
     *
     */
    resetMacroUsage()
    {
        this.macroUsage = {};
    }


    /**
     * @inheritDoc
     */
    refineConfiguration(configuration)
    {
        const result = configuration;
        result.moduleConfiguration = this.moduleConfiguration;
        if (this.settings.filename)
        {
            result.filename = '';
            if (this.settings.filename.indexOf('/') === -1)
            {
                result.filename+= this.moduleConfiguration.basePath + result.entity.id.site.name.urlify() + '/' + result.entity.id.category.pluralName.urlify() + '/';
            }
            result.filename+= (this.settings.filename.substr(0, this.settings.filename.lastIndexOf('.')) || this.settings.filename);
        }
        else
        {
            result.filename = this.moduleConfiguration.basePath + result.entity.id.site.name.urlify() + '/' + result.entity.id.category.pluralName.urlify() + '/';
            if (result.macro)
            {
                result.filename+= result.macro.name.replace(/_/g, '-');
            }
            else
            {
                result.filename+= result.entity.idString.replace(/_/g, '-');
            }
        }
        if (!result.filename.endsWith('.j2'))
        {
            result.filename+= '.j2';
        }

        result.includePath = this.moduleConfiguration.includePath + result.entity.id.site.name.urlify() + '/' + result.entity.id.category.pluralName.urlify() + '/';
        if (result.macro)
        {
            result.includePath+= result.macro.name.replace(/_/g, '-');
        }
        else
        {
            result.includePath+= result.entity.idString.replace(/_/g, '-');
        }
        if (!result.includePath.endsWith('.j2'))
        {
            result.includePath+= '.j2';
        }

        return Promise.resolve(result);
    }
}


// Exports
module.exports.TwigConfiguration = TwigConfiguration;
