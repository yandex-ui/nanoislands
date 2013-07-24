nb.define('slider', {
    events: {
        'init': 'onInit',
        'changeValue': 'onChangeValue'
    },

    onInit: function() {
        var that = this;
        that.data = that.data();
        that.$fallback = $(that.node).children('.nb-slider__fallback');
        that.$control = $(that.node).children('.nb-slider__body');

        that.$fallback.hide();
        that.$control.show();

        that.$control.slider({
            range: 'min',
            value: that.data.value,
            change: function() {
                that.data.value = that.$control.slider("option", "value");
                that.onChangeValue();
            }
        });
    },

    onChangeValue: function(value){
        if (value) {
            this.data.value = this.$control.slider("option", "value", value);
        }

        this.$fallback.attr('value', this.data.value);
    }
});