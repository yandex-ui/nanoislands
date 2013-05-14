;(function() {

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

// http://underscorejs.org/#pluck
function pluck(list, popertyName) {
    var result = [];

    for (var i = 0, c = list.length; i < c; i++) {
        var item = list[i];
        var value = item && item[popertyName];

        if (value) {
            result.push(value)
        }
    }

    return result;
}


yr.externals['nb-extend'] = function(parent, node) {
    if (node && node[0]) {
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

yr.externals['nb-wrap'] = function(name, options) {
    var data = {};

    if (options && options.length) {
        data[name] = options.length == 1
            ? options[0].data
            : pluck(options, 'data')
    }

    return [{
        data: data,
        name: '',
        parent: null,
        doc: options[0].doc
    }];
}


yr.externals['nb-uniq'] = (function(){
    var uniq = 0;
    return function() {
        return uniq++;
    }
})()


})();
