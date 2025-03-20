'use strict';

const controllers = require('./controllers');

const routeHelpers = module.exports;

routeHelpers.setupRoutes = function (router, middleware) {
    // Regular marketplace routes
    router.get('/marketplace', middleware.buildHeader, controllers.renderMarketplace);
    router.get('/api/marketplace', controllers.renderMarketplace);

    // Admin routes
    router.get('/admin/plugins/marketplace', middleware.admin.buildHeader, middleware.admin.checkPrivileges, controllers.renderAdmin);
    router.get('/api/admin/plugins/marketplace', middleware.admin.checkPrivileges, controllers.renderAdmin);
};