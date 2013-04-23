(function() {

yr.externals['nb-extend'] = function(parent, node) {
    if (node[0]) {
        if (typeof node == 'string') {
            parent[0].data.content = node;
        } else {
            var dataParent = parent[0].data;
            var dataNode = node[0].data;
            var dataNew = _.extend(dataParent, dataNode);
            parent[0].data = dataNew;
        }
    }

    return parent;
}

})()