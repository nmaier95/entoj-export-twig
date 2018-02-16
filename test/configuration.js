'use strict';

/**
 * Configure path
 */
const path = require('path');
global.TWIG_SOURCE = path.resolve(__dirname + '/../source');
global.TWIG_FIXTURES = path.resolve(__dirname + '/__fixtures__');
global.TWIG_TEST = __dirname;


/**
 * Configure chai
 */
const chai = require('chai');
chai.config.includeStack = true;
global.expect = chai.expect;
