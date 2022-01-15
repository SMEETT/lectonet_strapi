'use strict';

/**
 * second-ct service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::second-ct.second-ct');
