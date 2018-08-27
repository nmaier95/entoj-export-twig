'use strict';

/**
 * Requirements
 * @ignore
 */
const TwigExporter = require('../export/TwigExporter.js').TwigExporter;
const ExportTask = require('entoj-system').task.ExportTask;
const GlobalRepository = require('entoj-system').model.GlobalRepository;
const CliLogger = require('entoj-system').cli.CliLogger;
const EntitiesRepository = require('entoj-system').model.entity.EntitiesRepository;


/**
 * @memberOf task
 */
class TwigExportTask extends ExportTask
{
    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [CliLogger, EntitiesRepository, GlobalRepository, TwigExporter] };
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'task/TwigExportTask';
    }


    /**
     * @inheritDoc
     */
    get sectionName()
    {
        return 'Exporting Twig files';
    }


    /**
     * @inheritDoc
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
