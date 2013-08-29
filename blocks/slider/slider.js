nb.define('slider', {
    events: {
        'init': 'onInit',
        'changeValue': 'onChangeValue'
    },

    onInit: function() {
        var that = this;
        that.data = that.data();
        that.$fallback = $(that.node).find('.nb-slider__fallback');
        that.$control = $(that.node).children('.nb-slider__body');

        that.$fallback.attr('readonly','readonly');
        that.$control.show();

        that.$control.slider({
            range: 'min',
            value: that.data.value,
            change: function() {
                that.data.value = that.$control.slider("option", "value");
                that.onChangeValue();
            }
        });
        that.onChangeValue();
    },

    onChangeValue: function(value){
        if (value) {
            this.data.value = this.$control.slider("option", "value", value);
        }
        this.$fallback.attr('value', this.data.value);

        // Adjust the width of an input to its content
        this.$fallback.width(0);
        this.$fallback.width(this.$fallback[0].scrollWidth);
    }
});
