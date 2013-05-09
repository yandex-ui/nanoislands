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

    /**
     * Изменяет значение прогресс бара
     * @param {String} Новое значение.
     */

    update: function(newVal) {
        var newVal = parseFloat(newVal, 10)

        this.$bar.css({width: newVal + '%'})

        if (this.type == 'percentage'){
            this.$title.html(newVal + '%')
        }

        this.data('progress', newVal)
    },

    /**
     * Меняет значение на еденицу
     */
    tick: function() {
        var newVal = parseFloat(this.data('progress'))

        newVal < 100 ? newVal++ : newVal

        this.update(newVal)
    }
})