'use strict';

/**
 * global-conf router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-conf.global-conf');
