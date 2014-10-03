//  Snippets.

//  Simple jpath as boolean.
//
function bstep(d0, name) {
    if (!d0) { return false; }

    if (d0 instanceof Array) {
        for (var i0 = 0, l0 = d0.length; i0 < l0; i0++) {
            var v0 = d0[i0];
            if (v0 && v0[name]) {
                return true;
            }
        }

        return false;
    } else {
        return d0[name];
    }
}

//  Simple jpath as scalar.
//
function sstep(d, name) {
    if (!d) { return ''; }

    var v;
    if (d instanceof Array) {
        if (!d.length) { return ''; }

        v = d[0][name];
    } else {
        v = d[name];
    }

    return (v == null || typeof v === 'object') ? '' : v;
}

//  Simple step.

function nstep(d, name) {
    var r;
    if (d instanceof Array) {
        var l = d.length;
        if (!l) { return []; }

        r = [ d[0][name] ];
        for (var i = 1; i < l; i++) {
            r.push( d[i][name] );
        }
        return r;
    } else {
        r = d[name];
        return (r === undefined) ? [] : [ r ];
    }
}

function nsteps(d, NAME1, NAME2) {
    if (!d) { return []; }

    var n;
    var r, i, l;

    //  Step snippet.
    n || (( n = (d instanceof Array) ));
    if (n) {
        if ( !((l = d.length)) ) { return []; }
        r = [ d[0][NAME1] ];
        for (i = 1; i < l; i++) {
            r.push( d[i][NAME1] );
        }
        d = r;
    } else {
        d = d[NAME1];
        if (d === undefined) { return []; }
    }

    n || (( n = (d instanceof Array) ));
    if (n) {
        if ( !((l = d.length)) ) { return []; }
        r = [ d[0][NAME2] ];
        for (i = 1; i < l; i++) {
            r.push( d[i][NAME2] );
        }
        d = r;
    } else {
        d = d[NAME2];
        if (d === undefined) { return []; }
    }

    return (n || d instanceof Array) ? d : [ d ];
}

function filter(d) {
    if (!d) { return []; }

    var n;
    var r, i, l, v;

    //  Step snippet.
    n || (( n = (d instanceof Array) ));
    if (n) {
        if ( !((l = d.length)) ) { return []; }
        r = [ d[0]['foo'] ];
        for (i = 1; i < l; i++) {
            r.push( d[i]['foo'] );
        }
        d = r;
    } else {
        d = d['foo'];
        if (d === undefined) { return []; }
    }

    n || (( n = (d instanceof Array) ));
    if (n) {
        if ( !((l = d.length)) ) { return []; }
        r = [];
        var m = 0;
        for (i = 0; i < l; i++) {
            v = d[i];
            var t = v['bar'];
            if (t) {
                if ( (t instanceof Array) ? t.length : t ) {
                    r.push(v);
                }
            }
        }
        d = r;
    } else {
        if (!d) { return []; }
        v = d['bar'];

        if ( !( (v instanceof Array) ? v.length : v ) ) {
            return [];
        }
    }

    return (n || d instanceof Array) ? d : [ d ];
}

function filter2(d0) {
    if (!d0) { return []; }

    var n0, d0, i0, l0, v0, r0;

    //  Step snippet.
    n0 || (( n0 = d0 instanceof Array ));
    if (n0) {
        if ( !((l0 = d0.length)) ) { return []; }
        r0 = [];
        for (i0 = 0; i0 < l0; i0++) {
            var v0 = d0[i0]['foo'];
            if (v0 !== undefined) {
                r0.push(v0);
            }
        }
        d0 = r0;
    } else {
        d0 = d0['foo'];
        if (d0 === undefined) { return []; }
    }

    n0 || (( n0 = d0 instanceof Array ));
    if (n0) {
        if ( !((l0 = d0.length)) ) { return []; }
        r0 = [];
        for (i0 = 0; i0 < l0; i0++) {
            var v0 = d0[i0];
            if ( bstep(v0, 'bar') ) {
                r0.push(v0);
            }
        }
        d0 = r0;
    } else {
        if ( !bstep(d0, 'bar') ) {
            return [];
        }
    }

    return (n0 || d0 instanceof Array) ? d0 : [ d0 ];
}

//  ---------------------------------------------------------------------------------------------------------------  //

function jpath(data) {
    if (!data) { return []; }

    var is_nodeset = false;
    var r, i, l;

    is_nodeset || (( is_nodeset = (data instanceof Array) ));
    if (is_nodeset) {
        if ( !((l = data.length)) ) { return []; }
        r = [ data[0]['foo'] ];
        for (i = 1; i < l; i++) {
            r.push( data[i]['foo'] );
        }
        data = r;
    } else {
        data = data['foo'];
        if (data === undefined) { return []; }
    }

    is_nodeset || (( is_nodeset = (data instanceof Array) ));
    if (is_nodeset) {
        if ( !((l = data.length)) ) { return []; }
        r = [ data[0]['bar'] ];
        for (i = 1; i < l; i++) {
            r.push( data[i]['bar'] );
        }
        data = r;
    } else {
        data = data['bar'];
        if (data === undefined) { return []; }
    }

    return (is_nodeset) ? data : [ data ];
}

function jpath2(data_0) {
    if (!data_0) { return []; }

    var i, l;
    var is_nodeset_1, is_nodeset_2;
    var data_1, data_2;
    var empty_1, empty_2;
    var t_1, t_2;
    var r_1, r_2;

    //  .foo
    empty_1 = false;
    is_nodeset_1 || (( is_nodeset_1 = (data_0 instanceof Array) ));
    if (is_nodeset_1) {
        if (( l = data_0.length )) {
            t_1 = [ data_0[0]['foo'] ];
            for (i = 1; i < l; i++) {
                t_1.push( data_0[i]['foo'] );
            }
            data_1 = t_1;
        } else {
            empty_1 = true;
        }
    } else {
        data_1 = data_0['foo'];
        empty_1 = (data_1 === undefined);
    }
    if (empty_1) {
        r1 = '';
    } else {

        //  .bar
        empty_2 = false;
        is_nodeset_2 || (( is_nodeset_2 = (data_1 instanceof Array) ));
        if (is_nodeset_2) {
            if (( l = data_1.length )) {
                t_2 = [ data_1[0]['bar'] ];
                for (i = 1; i < l; i++) {
                    t_2.push( data_1[i]['bar'] );
                }
                data_2 = t_2;
            } else {
                empty_2 = true;
            }
        } else {
            data_2 = data_1['bar'];
            empty_2 = (data_2 === undefined);
        }
        //  r2 = .boolean()
        r2 = !empty_2 && (is_nodeset_2) ? data_2[0] : data_2;

        if (!r2) {
            r1 = '';
        } else {

            //  .id
            empty_2 = false;
            is_nodeset_2 || (( is_nodeset_2 = (data_1 instanceof Array) ));
            if (is_nodeset_2) {
                if (( l = data_1.length )) {
                    t_2 = [ data_1[0]['id'] ];
                    for (i = 1; i < l; i++) {
                        t_2.push( data_1[i]['id'] );
                    }
                    data_2 = t_2;
                } else {
                    empty_2 = true;
                }
            } else {
                data_2 = data_1['id'];
                empty_2 = (data_2 === undefined);
            }

            if (empty_2) {
                r1 = '';
            }
            r1 = (is_nodeset_2) ? data_2[0] : data_2;

        }
    }

    return r1;
}

function jpath3(d0) {
    if (!d0) { return []; }

    var i, l;
    var n1, n2;
    var d1, d2;
    var e1, e2;
    var t1, t2;
    var r_1, r_2;
    var v1, v2;

    //  .foo
    if (d0 instanceof Array) {
        if (( l = d0.length )) {
            d1 = [];
            for (i = 0; i < l; i++) {
                var v1 = d0[i]['foo'];
                if ( jpath5(v1, 'bar') ) {
                    //  FIXME
                    d1.push(v1);
                }
            }
        } else {
            return [];
        }
    } else {
        d1 = d0['foo'];
        if ( !jpath5(d1, 'bar') ) {
            return [];
        }
    }

    //  .id
    if (d1 instanceof Array) {
        if (( l = d1.length )) {
            d2 = [ d1[0]['id'] ];
            for (i = 1; i < l; i++) {
                d2.push( d1[i]['id'] );
            }
            return d2;
        } else {
            return [];
        }
    } else {
        d2 = d1['id'];
        return (d2 === undefined) ? [ d2 ] : [];
    }
}

//  boolean(.bar)
function jpath4(d0) {
    if (!d0) { return false; }

    if (d0 instanceof Array) {
        return (d0.length) ? d0[0]['bar'] : false;
    } else {
        return d0['bar'];
    }
}

//  boolean(.bar)
function jpath5(d0, name) {
    if (!d0) { return false; }

    if (d0 instanceof Array) {
        return (d0.length) ? d0[0][name] : false;
    } else {
        return d0[name];
    }
}

/*
function jpath3(data) {
    if (!data) { return []; }

    var is_nodeset = false;
    var r, i, l;

    is_nodeset || (( is_nodeset = (data instanceof Array) ));
    //  data = (is_nodeset) ? step(data, 'foo') : ( (( data = data['foo'] )) === undefined ) ? [] : data;
    if (is_nodeset) {
        data = step(data, 'foo');
    } else {
        data = data['foo'];
        if (data === undefined) { return []; }
    }

    is_nodeset || (( is_nodeset = (data instanceof Array) ));
    //  data = (is_nodeset) ? step(data, 'bar') : ( (( data = data['bar'] )) === undefined ) ? [] : data;
    if (is_nodeset) {
        data = step(data, 'bar');
    } else {
        data = data['bar'];
        if (data === undefined) { return []; }
    }

    return (is_nodeset) ? data : [ data ];
}

function step(data, name) {
    var l = data.length;
    if (!l) { return []; }

    var r = [ data[0]['foo'] ];
    for (var i = 1; i < l; i++) {
        r.push( data[i]['foo'] );
    }
    return r;
}

module.exports = {
    jpath: jpath,
    jpath3: jpath3
};

*/

