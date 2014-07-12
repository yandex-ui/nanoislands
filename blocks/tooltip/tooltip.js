nb.define('tooltip-jq-toggler', {

    //NOTES: из-за такого определения Factory._onevent постоянно долбится событиями
    // но по другому (mouseeneter/leave) не сделать, потому что они случаться один раз на document
    // как вариант для mouseenter/leave надо делать не $document.on(event), $document.on(event, '.nb')
    events: {
        'mouseover': 'onmouseenter'
    },

    'onmouseenter': function() {
        if (this.$node.hasClass('_nb-is-disabled')) {
            return true;
        }

        var data = this.nbdata()[this.name];

        var params = {
            content: data.content,
            items: '*',
            tooltipClass: "nb-tooltip nb-island _nb-small-fly-island"
        };

        if (data.position) {
            params.position = data.position;
        }

        this.$node.tooltip(params);
        this.$node.tooltip("open");
    }

}, 'base');
