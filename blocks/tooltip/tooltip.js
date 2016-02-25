nb.define('tooltip-jq-toggler', {
    oninit: function() {
        this.onmouseenter = this.onmouseenter.bind(this);
        this.$node.tooltip(this._getParams());
        this.$node.on('mouseenter', this.onmouseenter);
    },
    destroy: function() {
        this.$node.tooltip('destroy');
        this.$node.off('mouseenter', this.onmouseenter);
        this.nbdestroy();
    },
    onmouseenter: function() {
        if (this.$node.hasClass('_nb-is-disabled')) {
            return true;
        }
        this.$node.tooltip("open");
    },
    _getParams: function() {
        var data = this.nbdata()[this.name] || {};
        var params = {
            tooltipClass: 'nb-tooltip nb-island _nb-small-fly-island'
        };

        if (data['class']) {
            data.tooltipClass += ' ' + data['class'];
        }
        if (data.content) {
            params.content = data.content;
        }
        if (data.position) {
            params.position = data.position;
        }
        return params;
    }
}, 'base');
