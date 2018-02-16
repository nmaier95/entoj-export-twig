'use strict';

/**
 * Requirements
 * @ignore
 */
const ExportCommand = require('entoj-system').command.ExportCommand;
const Context = require('entoj-system').application.Context;
const TwigExportTask = require('../task/TwigExportTask.js').TwigExportTask;
const TwigModuleConfiguration = require('../configuration/TwigModuleConfiguration.js').TwigModuleConfiguration;
const BeautifyHtmlTask = require('entoj-html').task.BeautifyHtmlTask;


/**
 * @memberOf command
 */
class TwigExportCommand extends ExportCommand
{
    /**
     */
    constructor(context)
    {
        super(context);

        // Assign options
        this._exportName = 'twig';
        this._moduleConfigurationClass = TwigModuleConfiguration;
        this._exportTaskClass = TwigExportTask;
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [Context] };
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'command/TwigExportCommand';
    }


    /**
     * @inheritDocs
     */
    addTasks(task, mapping)
    {
        if (!task)
        {
            return Promise.resolve();
        }
        return Promise.resolve(task.pipe(this.context.di.create(BeautifyHtmlTask, mapping)));
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.TwigExportCommand = TwigExportCommand;
