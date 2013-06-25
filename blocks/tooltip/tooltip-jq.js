nb.define('tooltip-jq-toggler', {

    //NOTES: из-за такого определения Factory._onevent постоянно долбится событиями
    // но по другому (mouseeneter/leave) не сделать, потому что они случаться один раз на document
    // как вариант для mouseenter/leave надо делать не $document.on(event), $document.on(event, '.nb')
    events: {
        'mouseover': 'onmouseenter'
    },

    'onmouseenter': function() {
        if (this.getMod('_disabled')) {
            return true;
        }

        var data = this.data()[this.name];

        $(this.node).tooltip({
            content: data.content,
            items: '*'
        });
        $(this.node).tooltip("open");
    }

});
