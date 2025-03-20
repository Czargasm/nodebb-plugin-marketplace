'use strict';

const controllers = module.exports;

controllers.renderMarketplace = async function (req, res) {
    try {
        const data = {
            title: 'Marketplace',
            breadcrumbs: [{
                text: 'Marketplace',
                url: '/marketplace'
            }]
        };
        
        res.render('marketplace', data);
    } catch (err) {
        console.error('[marketplace] Error rendering marketplace page:', err);
        res.status(500).json({
            error: 'Error rendering marketplace page'
        });
    }
};

controllers.renderAdmin = async function (req, res) {
    try {
        const data = {
            title: 'Marketplace',
            breadcrumbs: [{
                text: 'Plugins',
                url: '/admin/plugins'
            }, {
                text: 'Marketplace'
            }]
        };
        
        res.render('admin/plugins/marketplace', data);
    } catch (err) {
        console.error('[marketplace] Error rendering admin page:', err);
        res.status(500).json({
            error: 'Error rendering admin page'
        });
    }
};