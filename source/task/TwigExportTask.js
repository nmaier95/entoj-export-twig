'use strict';

/**
 * Requirements
 * @ignore
 */
const TwigExporter = require('../export/TwigExporter.js').TwigExporter;
const ExportTask = require('entoj-system').task.ExportTask;
const GlobalRepository = require('entoj-system').model.GlobalRepository;
const CliLogger = require('entoj-system').cli.CliLogger;
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;


/**
 * @memberOf task
 */
class TwigExportTask extends ExportTask
{
    /**
     * @param {cli.CliLogger} cliLogger
     * @param {model.GlobalRepository} globalRepository
     */
    constructor(cliLogger, globalRepository, buildConfiguration, exporter)
    {
        super(cliLogger, globalRepository, exporter);
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': [CliLogger, GlobalRepository, BuildConfiguration, TwigExporter] };
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'task/TwigExportTask';
    }


    /**
     * @inheritDocs
     */
    get sectionName()
    {
        return 'Exporting Twig files';
    }


    /**
     * @inheritDocs
     */
    get exportName()
    {
        return 'twig';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.TwigExportTask = TwigExportTask;
