'use strict';

/**
 * newsbox service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsbox.newsbox');
