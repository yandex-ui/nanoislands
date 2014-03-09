nb.define('progress', {

    oninit: function() {
        var data = this.nbdata();

        if (data && data.type) {
            this.type = data.type;
        }

        this.$title = this.$node.find('.js-title');
        this.$control = this.$node.find('input');
        this.$bar = this.$node.find('.js-bar');
    },

    /**
     * Set value of the progress
     * @param {String|Number} value
     * @fires 'nb-value-set'
     * @returns {Object} nb.block
     */
    setValue: function(value) {
        var val = parseFloat(value);

        this.$control.val(val);
        this.$bar.css({width: val + '%'});

        if (this.type == 'percentage') {
            this.$title.html(val + '%');
        }
        this.trigger('nb-value-set', this);
        return this;
    },

    /**
     * Get value of the progress
     * @returns {String} value
     */
    getValue: function() {
        return this.$control.val();
    },

    /**
    * Change value of the progress by 1
    * @fires 'nb-changed'
    * @returns {Object} nb.block
    */
    tick: function() {
        var val = parseFloat(this.getValue());

        if (val < 100) {
            val++;
        }

        this.setValue(val);
        this.trigger('nb-changed', this);

        return this;
    }
}, 'base');
