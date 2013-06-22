(function() {


nb.define('select', {
    events : {
        'init': function(){
            var that = this
            nb.init(that)
            var c = that.children()

            console.log(c)

            that.button = c[0]
            that.popup = c[1]
            that.$fallback = $(that.node).find('.nb-select__fallback')
            that.value = that.$fallback.find('option[selected]').attr('value')
            that.text = that.$fallback.find('option[selected]').html()

            $(that.popup.node).css({
                'min-width': $(that.button.node).outerWidth() - 2
            })

            nb.on('select:'+ that.popup.node.getAttribute('id') +':change', function(name, params){
                that.trigger('changeValue', params)
            })
        },
        'changeValue': 'onChangeValue'

    },
    onChangeValue: function(name, params){
        this.value =  params.value
        this.text =  params.text
        this.button.trigger('textChange', params)
        this.$fallback.find('option[selected]').removeAttr('selected')
        this.$fallback.find('option[value = '+ params.value +']').attr('selected', 'selected')
    }
});

})();


