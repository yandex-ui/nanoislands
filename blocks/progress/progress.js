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
     * @param {String|Number} newVal —  Новое значение.
     */

    update: function(newVal) {
        var val = parseFloat(newVal);

        this.$bar.css({width: val + '%'});

        if (this.type == 'percentage') {
            this.$title.html(val + '%');
        }

        this.data('progress', val);
    },

    /**
     * Меняет значение на единицу
     */
    tick: function() {
        var newVal = parseFloat(this.data('progress'));

        if (newVal < 100) {
            newVal++;
        }

        this.update(newVal);
    }
});
