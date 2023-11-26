'use strict';

/**
 * user-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-test.user-test');
