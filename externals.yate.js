(function() {

function extend(obj) {
    var exts = Array.prototype.slice.call(arguments, 1);

    if (exts.length) {
        for (var i = 0, c = exts.length; i < c; i++) {
            var ext = exts[i];

            for (var key in ext) {
                var prop = ext[key];
                obj[key] = prop;
            }
        }
    }

    return obj;
}

yr.externals['nb-extend'] = function(parent, node) {
    if (node[0]) {
        if (typeof node == 'string') {
            parent[0].data.content = node;
        } else {
            var dataParent = parent[0].data;
            var dataNode = node[0].data;
            var dataNew = extend(dataParent, dataNode);
            parent[0].data = dataNew;
        }
    }

    return parent;
}

yr.externals['nb-create'] = function(name, options) {
    var data = {};
    data[name] = options[0].data;

    return [{
        data: data,
        name: '',
        parent: null,
        doc: options[0].doc
    }];
}

})();
