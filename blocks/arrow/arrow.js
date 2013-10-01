nb.define('arrow', {
    events: {
        'init': 'oninit',
        'focusin .nb-arrow__input__wrap': 'focus',
        'focusout .nb-arrow__input__wrap': 'blur'
    },

    oninit: function(){
        this.$node = $(this.node);
        this.$wrap = this.$node.find('.nb-arrow__name__wrap');
        this.$requests =  this.$node.find('.nb-arrow__requests');
        this.$node.find('.nb-arrow__input_fake').text(this.$node.find('.nb-input').attr('value'));
    },

    focus: function(){
        if (!this.$wrap.hasClass('nb-arrow__name__wrap_focus')) {
            this.$wrap.addClass('nb-arrow__name__wrap_focus');
        }
        this.$requests.fadeOut('fast');

    },
    blur: function() {
        this.$wrap.removeClass('nb-arrow__name__wrap_focus');
        this.$node.find('.nb-arrow__input_fake').text(this.$node.find('.nb-input').attr('value'));
        this.$requests.fadeIn('fast');
    }
})
