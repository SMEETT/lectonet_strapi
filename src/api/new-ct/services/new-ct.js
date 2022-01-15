'use strict';

/**
 * new-ct service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-ct.new-ct');
