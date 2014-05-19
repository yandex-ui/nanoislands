;(function(yr) {

    /* Делает extend двух и более объектов объектов
    *
    * @param {Boolean} deep extend или нет
    * @param {Object} Родительский объект
    * @param {Object} объект который расширяет
    *
    * @return {Object} Новый объект
    * */

    function extend(deep) {
        var exts = Array.prototype.slice.call(arguments, 1);
        var newObj = {}

        for (var i = 0, c = exts.length; i < c; i++) {
            var ext = exts[i];
            extendHelper(deep, newObj, ext)
        }

        return newObj;
    }

    function extendHelper(deep, destination, source) {
      for (var prop in source) {
          var sp = source[prop]
          var dp = destination[prop]

          if (deep && destination == sp) {
            continue;
          }
          if (deep && typeof sp == 'object' && dp) {
              extendHelper(deep, dp, sp);
          } else if (sp != undefined) {
              destination[prop] = source[prop];
          }
      }

      return destination;
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


yr.externals['_nb-extend'] = function(parent, node) {
    if (node && node[0]) {
        if (typeof node == 'string') {
            parent[0].data.content = node;
        } else {
            var dataParent = parent[0].data;
            var dataNode = node[0].data;
            var dataNew = extend(false, dataParent, dataNode);
            parent[0].data = dataNew;
        }
    }

    return parent;
}

yr.externals['_nb-deep-extend'] = function(parent, node) {
    if (node && node[0]) {
        if (typeof node == 'string') {
            parent[0].data.content = node;
        } else {
            var dataParent = parent[0].data;
            var dataNode = node[0].data;
            var dataNew = extend(true, dataParent, dataNode);
            parent[0].data = dataNew;
        }
    }

    return parent;
}

yr.externals['_nb-wrap'] = function(name, options) {
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

yr.externals['_nb-uniq'] = (function(){
    var uniq = 0;
    return function() {
        return uniq++;
    }
})()

yr.externals['_nb-warn'] = function(message){
    console.log('%c' + message, 'color:#ffcc00');
};

})(typeof yr === 'undefined' && typeof require === 'function' ? require('yate/lib/runtime.js') : yr);
