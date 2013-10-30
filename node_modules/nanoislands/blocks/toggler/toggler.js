nb.define('toggler', {
    events: {
        'init':    'oninit',
        'click':   'onToggle',
        'toggle':  'onToggle',
        'disable': 'onDisable',
        'enable':  'onEnable'
    },

    oninit: function(){
        this.$node = $(this.node);
        this.$checkbox = this.$node.find('.nb-toggler__checkbox');
    },

    onToggle: function(){
        if (!this.$node.hasClass('nb-toggler_disabled')) {
            this.$node.toggleClass('nb-toggler_checked');
            if (this.$checkbox.attr('checked')) {
                this.$checkbox.removeAttr('checked');
            } else {
                this.$checkbox.attr('checked', 'checked');
            }
        }
    },

    onDisable: function() {
        this.$checkbox.attr('disabled', 'disabled');
        this.$node.addClass('nb-toggler_disabled');
    },

    onEnable: function() {
        this.$checkbox.removeAttr('disabled');
        this.$node.removeClass('nb-toggler_disabled');

    }
})
