'use strict';

/* globals $, app, socket */

$(document).ready(function() {
    // Admin page functionality
    if (app.user && app.user.isAdmin) {
        $('.marketplace-settings').on('submit', function(e) {
            e.preventDefault();
            
            const settings = {
                enableMarketplace: $('#enableMarketplace').is(':checked')
            };
            
            socket.emit('admin.settings.saveMarketplaceSettings', settings, function(err) {
                if (err) {
                    app.alertError(err.message);
                    return;
                }
                app.alertSuccess('Settings saved!');
            });
        });
    }
    
    // Main marketplace page functionality
    if ($('.marketplace').length) {
        // Add your marketplace initialization code here
        console.log('Marketplace loaded');
    }
});