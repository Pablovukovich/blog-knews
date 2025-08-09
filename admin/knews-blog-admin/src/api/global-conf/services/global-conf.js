'use strict';

/**
 * global-conf service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-conf.global-conf');
