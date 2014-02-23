nb.define('header', {
    events: {
        'click .nb-header__button': 'togglePress'
    },

    /*!
     * Toggles pressed state of button
     */

    togglePress: function(e) {
        var $target = $(e.target);
        $target.closest('.nb-header__button').toggleClass('nb-header__button_pressed');

        if ($target.hasClass('nb-icon_services')) {
            nb.trigger('services-click');
        }

        if ($target.hasClass('nb-icon_settings')) {
            nb.trigger('settings-click');
        }
    }
}, 'base');
