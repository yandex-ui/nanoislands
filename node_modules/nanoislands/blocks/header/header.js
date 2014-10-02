nb.define('header', {
    events: {
        'click .nb-header-button': 'togglePress'
    },

    /*!
     * Toggles pressed state of button
     */

    togglePress: function(e) {
        var $target = $(e.target);
        $target.closest('.nb-header-button').toggleClass('nb-header-pressed-button');

        if ($target.hasClass('nb-services-icon')) {
            nb.trigger('services-click');
        }

        if ($target.hasClass('nb-settings-icon')) {
            nb.trigger('settings-click');
        }
    }
}, 'base');
