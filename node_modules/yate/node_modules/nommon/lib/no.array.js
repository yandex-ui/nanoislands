var no = no || require('./no.base.js');

//  ---------------------------------------------------------------------------------------------------------------  //

no.array = function(value) {
    if (value === undefined) {
        return [];
    }

    return (value instanceof Array) ? value : [ value ];
};

//  ---------------------------------------------------------------------------------------------------------------  //

no.array.map = function(array, callback) {
    var r = [];

    for (var i = 0, l = array.length; i < l; i++) {
        var value = callback( array[i], i );

        if (value !== undefined) {
            r.push(value);
        }
    }

    return r;
};

//  ---------------------------------------------------------------------------------------------------------------  //

