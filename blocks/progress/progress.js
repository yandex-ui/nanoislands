nb.define('progress', {
    events: {
        'init': 'oninit'
    },

    oninit: function() {
        var data = this.data();

        if ('type' in data) {
            this.type = data.type;
        }

        this.$title = $(this.node).find('.js-title');
        this.$bar = $(this.node).find('.js-bar');
    },

    update: function(newVal) {
        var newVal = parseFloat(newVal)

        this.$bar.css({width: newVal + '%'})

        if (this.type == 'percentage'){
            this.$title.html(newVal + '%')
        }

        this.data('progress', newVal)
    },

    tick: function() {
        var newVal = parseFloat(this.data('progress'))

        newVal < 100 ?  newVal = newVal + 1 : newVal

        this.update(newVal)
    }
})