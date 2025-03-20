'use strict';

const controllers = require('./lib/controllers');
const routeHelpers = require('./lib/routeHelpers');

const plugin = module.exports;

plugin.init = async function (params) {
    const { router, middleware } = params;

    // Setup routes
    routeHelpers.setupRoutes(router, middleware);

    return;
};

plugin.addAdminNavigation = function (header) {
    header.plugins.push({
        route: '/plugins/marketplace',
        icon: 'fa-shopping-cart',
        name: 'Marketplace'
    });
    return header;
};

plugin.addNavigation = function (header) {
    header.navigation.push({
        route: '/marketplace',
        title: 'Marketplace',
        enabled: true,
        iconClass: 'fa-shopping-cart',
        textClass: 'visible-xs-inline',
        text: 'Marketplace'
    });
    return header;
};

plugin.getAreas = function(areas) {
    areas = areas.concat([
        {
            name: "Marketplace Sidebar",
            template: "marketplace/sidebar",
            location: "marketplace"
        }
    ]);
    return areas;
};