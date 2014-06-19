var yr = yr || require('yate/lib/runtime.js');

(function() {

    var cmpNN = yr.cmpNN;
    var cmpSN = yr.cmpSN;
    var nodeset2xml = yr.nodeset2xml;
    var nodeset2boolean = yr.nodeset2boolean;
    var nodeset2attrvalue = yr.nodeset2attrvalue;
    var nodeset2scalar = yr.nodeset2scalar;
    var scalar2attrvalue = yr.scalar2attrvalue;
    var xml2attrvalue = yr.xml2attrvalue;
    var scalar2xml = yr.scalar2xml;
    var xml2scalar = yr.xml2scalar;
    var simpleScalar = yr.simpleScalar;
    var simpleBoolean = yr.simpleBoolean;
    var selectNametest = yr.selectNametest;
    var closeAttrs = yr.closeAttrs;

    var M = new yr.Module();

    // func nb-nodeset-to-xml(xml data) : xml
    M.f0 = function f0(m, c0, i0, l0, a0, v0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += v0;

        return r0;
    };

    var j0 = [ 0, '*' ];

    // func _nb-block(name, nodeset options) : xml
    M.f1 = function f1(m, c0, i0, l0, a0, v1, v2) {
        v2 = (v2 === undefined) ? [] : v2;
        var r0 = '';

        r0 += m.a(m, m.n(j0, (yr.externals['_nb-wrap'])(v1, v2)), 'nb', a0)

        return r0;
    };

    var j1 = [ 0, 'name' ];

    var j2 = [ 0, 'size' ];

    var j3 = [ 0, 'theme' ];

    var j4 = [ 0, 'type' ];

    // func _size-theme-type-class(nodeset options) : attr
    M.f2 = function f2(m, c0, i0, l0, a0, v3) {
        v3 = (v3 === undefined) ? [] : v3;
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-" + nodeset2scalar( ( m.n(j1, v3) ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-" + nodeset2scalar( ( m.n(j1, v3) ) ));
        }
        if ((!nodeset2boolean( m.n(j2, v3) ) || cmpSN("m", m.n(j2, v3))) && (!nodeset2boolean( m.n(j3, v3) ) || cmpSN("normal", m.n(j3, v3))) && !nodeset2boolean( m.n(j4, v3) )) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-normal-" + nodeset2scalar( ( m.n(j1, v3) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-normal-" + nodeset2scalar( ( m.n(j1, v3) ) ));
            }
        } else {
            //  var size : scalar
            var r1 = '';
            var a1 = { a: {} };
            if (cmpSN("s", m.n(j2, v3))) {
                r1 += "-small";
            } else if (cmpSN("l", m.n(j2, v3))) {
                r1 += "-large";
            } else if (cmpSN("xl", m.n(j2, v3))) {
                r1 += "-extra-large";
            }
            var v4 = r1;

            //  var theme : scalar
            var r1 = '';
            var a1 = { a: {} };
            if (!(cmpSN("normal", m.n(j3, v3))) && nodeset2boolean( m.n(j3, v3) )) {
                r1 += "-" + nodeset2scalar( m.n(j3, v3) );
            }
            var v5 = r1;

            //  var type : scalar
            var r1 = '';
            var a1 = { a: {} };
            if (nodeset2boolean( m.n(j4, v3) )) {
                r1 += "-" + nodeset2scalar( m.n(j4, v3) );
            }
            var v6 = r1;

            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb" + ( v4 ) + ( v5 ) + ( v6 ) + "-" + nodeset2scalar( ( m.n(j1, v3) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb" + ( v4 ) + ( v5 ) + ( v6 ) + "-" + nodeset2scalar( ( m.n(j1, v3) ) ));
            }
        }

        return a0.a;
    };

    // func nb-icon(nodeset options) : xml
    M.f3 = function f3(m, c0, i0, l0, a0, v7) {
        v7 = (v7 === undefined) ? [] : v7;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var v8 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "ico", (yr.externals['_nb-extend'])(yr.object2nodeset( v8 ), v7));

        return r0;
    };

    // func nb-button(nodeset options) : xml
    M.f4 = function f4(m, c0, i0, l0, a0, v9) {
        v9 = (v9 === undefined) ? [] : v9;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        var v10 = r1;

        r0 += closeAttrs(a0);
        if (cmpSN("file", m.n(j4, v9))) {
            r0 += m.f('f1', c0, i0, l0, a0, "buttonAttach", (yr.externals['_nb-extend'])(yr.object2nodeset( v10 ), v9));
        } else if (cmpSN("inline", m.n(j4, v9))) {
            r0 += m.f('f1', c0, i0, l0, a0, "buttonSpan", (yr.externals['_nb-extend'])(yr.object2nodeset( v10 ), v9));
        } else if (cmpSN("label", m.n(j4, v9))) {
            r0 += m.f('f1', c0, i0, l0, a0, "buttonLabel", (yr.externals['_nb-extend'])(yr.object2nodeset( v10 ), v9));
        } else if (cmpSN("link", m.n(j4, v9))) {
            r0 += m.f('f1', c0, i0, l0, a0, "buttonLink", (yr.externals['_nb-extend'])(yr.object2nodeset( v10 ), v9));
        } else {
            r0 += m.f('f1', c0, i0, l0, a0, "button", (yr.externals['_nb-extend'])(yr.object2nodeset( v10 ), v9));
        }

        return r0;
    };

    var j5 = [ 0, 'disabled' ];

    var j6 = [ 0, 'tabindex' ];

    var j7 = [ 0, 'attrs', 0, 'name' ];

    var j8 = [ 0, 'content' ];

    var j9 = [ 0, 'icon' ];

    var j10 = [ 0, 'iconText' ];

    // func _nb-button-attributes(type) : attr
    M.f5 = function f5(m, c0, i0, l0, a0, v11) {
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "button";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            r0[ "theme" ] = yr.nodeset2data(selectNametest('theme', c0, []));

            return r0;
        })()));
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
            a0.a[ "tabindex" ] = new yr.scalarAttr("-1");
            if (v11 == "button") {
                a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
            }
        }
        if ((simpleBoolean('tabindex', c0) && !simpleBoolean('disabled', c0))) {
            a0.a[ "tabindex" ] = new yr.scalarAttr(simpleScalar('tabindex', c0));
        }
        if (v11 == "attach") {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-attach-button");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-attach-button");
            }
        }
        if (v11 == "button") {
            if (simpleBoolean('name', c0)) {
                a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
            }
            if (nodeset2boolean( m.s(j7, c0) )) {
                a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( m.s(j7, c0) ));
            }
        }
        if (!nodeset2boolean( (selectNametest('content', c0, [])) ) && (simpleBoolean('icon', c0) || simpleBoolean('iconText', c0))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-with-only-button");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-with-only-button");
            }
        }

        return a0.a;
    };

    // func _nb-button-content() : xml
    M.f6 = function f6(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if (simpleBoolean('iconText', c0)) {
            r0 += "<span class=\"" + "nb-icon _nb-icon-text" + "\">";
            r0 += nodeset2xml( selectNametest('iconText', c0, []) );
            r0 += "</span>";
        }
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }

        return r0;
    };

    var j11 = [ 0, 'static' ];

    // func _nb-button-static() : attr
    M.f7 = function f7(m, c0, i0, l0, a0) {
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _init");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _init");
            }
            a0.a[ "data-nb" ] = new yr.scalarAttr("button");
        }

        return a0.a;
    };

    // func nb-popup-menu(nodeset options) : xml
    M.f8 = function f8(m, c0, i0, l0, a0, v12) {
        v12 = (v12 === undefined) ? [] : v12;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "none" ] = "none";
        var v13 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "popupMenu", (yr.externals['_nb-extend'])(yr.object2nodeset( v13 ), v12));

        return r0;
    };

    // func nb-popup(nodeset options) : xml
    M.f9 = function f9(m, c0, i0, l0, a0, v14) {
        v14 = (v14 === undefined) ? [] : v14;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "none" ] = "none";
        var v15 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "popup", (yr.externals['_nb-extend'])(yr.object2nodeset( v15 ), v14));

        return r0;
    };

    // func nb-popup-modal(nodeset options) : xml
    M.f10 = function f10(m, c0, i0, l0, a0, v16) {
        v16 = (v16 === undefined) ? [] : v16;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "modal" ] = "true";
        r2[ "width" ] = "auto";
        r2[ "height" ] = "auto";
        r2[ "minHeight" ] = "auto";
        r1[ "data-nb" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "none" ] = "none";
        r1[ "close" ] = r2;
        var v17 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "modalPopup", (yr.externals['_nb-deep-extend'])(yr.object2nodeset( v17 ), v16));

        return r0;
    };

    // func _nb-popup-content(nodeset content) : xml
    M.f11 = function f11(m, c0, i0, l0, a0, v18) {
        v18 = (v18 === undefined) ? [] : v18;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "_nb-popup-content" + "\">";
        r0 += nodeset2scalar( v18 );
        r0 += "</div>";

        return r0;
    };

    // func _nb-popup-title(nodeset title) : xml
    M.f12 = function f12(m, c0, i0, l0, a0, v19) {
        v19 = (v19 === undefined) ? [] : v19;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "_nb-popup-title" + "\">";
        r0 += nodeset2scalar( v19 );
        r0 += "</div>";

        return r0;
    };

    var j12 = [ 0, 'data' ];

    var j13 = [ 0, 'data', 0, '*' ];

    var j14 = [ 1, 0 ];

    // func _nb-popup-buttons(nodeset buttons) : xml
    M.f13 = function f13(m, c0, i0, l0, a0, v20) {
        v20 = (v20 === undefined) ? [] : v20;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("_nb-popup-buttons")
        };
        a0.s = 'div';
        r0 += m.a(m, v20, 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (( m.n(j13, v20) ).length) {
            var items0 = m.n(j12, v20);
            for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                var c1 = items0[ i1 ];
                r0 += m.f('f4', c1, i1, l1, a0, m.s(j14, c1));
            }
        } else {
            r0 += nodeset2scalar( m.n(j12, v20) );
        }
        r0 += "</div>";

        return r0;
    };

    // func nb-radio-button(nodeset options) : xml
    M.f14 = function f14(m, c0, i0, l0, a0, v21) {
        v21 = (v21 === undefined) ? [] : v21;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "type" ] = "radio";
        var v22 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "radio-button", (yr.externals['_nb-extend'])(yr.object2nodeset( v22 ), v21));

        return r0;
    };

    // func nb-select(nodeset select) : xml
    M.f15 = function f15(m, c0, i0, l0, a0, v23) {
        v23 = (v23 === undefined) ? [] : v23;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "direction" ] = "bottom";
        var v24 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "select", (yr.externals['_nb-extend'])(yr.object2nodeset( v24 ), v23));

        return r0;
    };

    var j15 = [ 0, 'text' ];

    var j16 = [ 0, 'value' ];

    var j17 = [ 0, 'selected' ];

    var j18 = [ 0, 'separator' ];

    // func _select-option(nodeset item) : xml
    M.f16 = function f16(m, c0, i0, l0, a0, v25) {
        v25 = (v25 === undefined) ? [] : v25;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<option";
        a0.a = {
        };
        a0.s = 'option';
        if (nodeset2boolean( m.n(j18, v25) )) {
            a0.a[ "separator" ] = new yr.scalarAttr("true");
        } else {
            a0.a[ "label" ] = new yr.scalarAttr(nodeset2scalar( m.n(j15, v25) ));
            a0.a[ "value" ] = new yr.scalarAttr(nodeset2scalar( m.n(j16, v25) ));
            a0.a[ "data-icon" ] = new yr.scalarAttr(simpleScalar('icon', c0));
            if (nodeset2boolean( (m.n(j17, v25)) )) {
                a0.a[ "selected" ] = new yr.scalarAttr("");
            }
            r0 += closeAttrs(a0);
            r0 += nodeset2xml( m.n(j15, v25) );
        }
        r0 += closeAttrs(a0);
        r0 += "</option>";

        return r0;
    };

    // func nb-checkbox(nodeset options) : xml
    M.f17 = function f17(m, c0, i0, l0, a0, v26) {
        v26 = (v26 === undefined) ? [] : v26;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "type" ] = "checkbox";
        r1[ "theme" ] = "normal";
        var v27 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "checkbox", (yr.externals['_nb-extend'])(yr.object2nodeset( v27 ), v26));

        return r0;
    };

    var j19 = [ 0, 'leftContent' ];

    var j20 = [ 0, 'rightContent' ];

    var j21 = [ 0, 'labelContent' ];

    var j22 = [ 0, 'reset' ];

    var j23 = [ 0, 'ghost' ];

    var j24 = [ 0, 'error' ];

    var j25 = [ 0, 'hint' ];

    // func nb-input(nodeset options) : xml
    M.f18 = function f18(m, c0, i0, l0, a0, v28) {
        v28 = (v28 === undefined) ? [] : v28;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var v29 = r1;

        r0 += closeAttrs(a0);
        if (nodeset2boolean( m.n(j19, v28) ) || nodeset2boolean( m.n(j20, v28) ) || nodeset2boolean( m.n(j21, v28) ) || nodeset2boolean( m.n(j22, v28) ) || nodeset2boolean( m.n(j23, v28) ) || nodeset2boolean( m.n(j24, v28) ) || nodeset2boolean( m.n(j25, v28) )) {
            if (cmpSN("multiline", m.n(j4, v28))) {
                r0 += m.f('f1', c0, i0, l0, a0, "textarea", (yr.externals['_nb-extend'])(yr.object2nodeset( v29 ), v28));
            } else {
                r0 += m.f('f1', c0, i0, l0, a0, "input", (yr.externals['_nb-extend'])(yr.object2nodeset( v29 ), v28));
            }
        } else {
            if (cmpSN("multiline", m.n(j4, v28))) {
                r0 += m.f('f1', c0, i0, l0, a0, "textareaSimple", (yr.externals['_nb-extend'])(yr.object2nodeset( v29 ), v28));
            } else {
                r0 += m.f('f1', c0, i0, l0, a0, "inputSimple", (yr.externals['_nb-extend'])(yr.object2nodeset( v29 ), v28));
            }
        }

        return r0;
    };

    // func nb-input-group(nodeset options) : xml
    M.f19 = function f19(m, c0, i0, l0, a0, v30) {
        v30 = (v30 === undefined) ? [] : v30;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "input-group", v30);

        return r0;
    };

    // func nb-progress(nodeset options) : xml
    M.f20 = function f20(m, c0, i0, l0, a0, v31) {
        v31 = (v31 === undefined) ? [] : v31;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "bar" ] = "true";
        r1[ "start" ] = "0";
        r1[ "type" ] = "percentage";
        r1[ "title" ] = " ";
        var v32 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "progress", (yr.externals['_nb-extend'])(yr.object2nodeset( v32 ), v31));

        return r0;
    };

    // func nb-paranja(nodeset options) : xml
    M.f21 = function f21(m, c0, i0, l0, a0, v33) {
        v33 = (v33 === undefined) ? [] : v33;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "theme" ] = "dark";
        var v34 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "paranja", (yr.externals['_nb-extend'])(yr.object2nodeset( v34 ), v33));

        return r0;
    };

    // func nb-island(nodeset options) : xml
    M.f22 = function f22(m, c0, i0, l0, a0, v35) {
        v35 = (v35 === undefined) ? [] : v35;
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "";
        var v36 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "island", (yr.externals['_nb-extend'])(yr.object2nodeset( v36 ), v35));

        return r0;
    };

    // func nb-dropzone(nodeset options) : xml
    M.f23 = function f23(m, c0, i0, l0, a0, v37) {
        v37 = (v37 === undefined) ? [] : v37;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "type" ] = "file";
        r2[ "theme" ] = "pseudo";
        r2[ "class" ] = "_nb-dropzone-button";
        r1[ "button" ] = r2;
        var v38 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "dropzone", (yr.externals['_nb-deep-extend'])(yr.object2nodeset( v38 ), v37));

        return r0;
    };

    // func nb-loader(nodeset options) : xml
    M.f24 = function f24(m, c0, i0, l0, a0, v39) {
        v39 = (v39 === undefined) ? [] : v39;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v40 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "loader", (yr.externals['_nb-extend'])(yr.object2nodeset( v40 ), v39));

        return r0;
    };

    // func nb-slider(nodeset options) : xml
    M.f25 = function f25(m, c0, i0, l0, a0, v41) {
        v41 = (v41 === undefined) ? [] : v41;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "value" ] = 0;
        r1[ "type" ] = "range";
        r1[ "size" ] = "s";
        r1[ "orientation" ] = "horiz";
        var v42 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "slider", (yr.externals['_nb-deep-extend'])(yr.object2nodeset( v42 ), v41));

        return r0;
    };

    // func nb-tabs(nodeset options) : xml
    M.f26 = function f26(m, c0, i0, l0, a0, v43) {
        v43 = (v43 === undefined) ? [] : v43;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v44 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "tabs", (yr.externals['_nb-extend'])(yr.object2nodeset( v44 ), v43));

        return r0;
    };

    // func nb-arrow(nodeset arrow) : xml
    M.f27 = function f27(m, c0, i0, l0, a0, v45) {
        v45 = (v45 === undefined) ? [] : v45;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "buttonContent" ] = "Найти";
        var v46 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "arrow", (yr.externals['_nb-extend'])(yr.object2nodeset( v46 ), v45));

        return r0;
    };

    // func nb-header(nodeset header) : xml
    M.f28 = function f28(m, c0, i0, l0, a0, v47) {
        v47 = (v47 === undefined) ? [] : v47;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "search" ] = "true";
        r2[ "buttonContent" ] = "Найти";
        r2[ "class" ] = "_nb-header-arrow";
        r1[ "arrow" ] = r2;
        r1[ "services" ] = "true";
        r1[ "settings" ] = "true";
        r1[ "yaHref" ] = "http://yandex.ru";
        var v48 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "header", (yr.externals['_nb-deep-extend'])(yr.object2nodeset( v48 ), v47));

        return r0;
    };

    // func nb-user(nodeset user) : xml
    M.f29 = function f29(m, c0, i0, l0, a0, v49) {
        v49 = (v49 === undefined) ? [] : v49;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v50 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "user", (yr.externals['_nb-extend'])(yr.object2nodeset( v50 ), v49));

        return r0;
    };

    // func nb-suggest(nodeset options) : xml
    M.f30 = function f30(m, c0, i0, l0, a0, v51) {
        v51 = (v51 === undefined) ? [] : v51;
        var r0 = '';

        //  var defaults : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "countMax" ] = "10";
        r1[ "type" ] = "default";
        var v52 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "suggest", (yr.externals['_nb-extend'])(yr.object2nodeset( v52 ), v51));

        return r0;
    };

    // func nb-toggler(nodeset toggler) : xml
    M.f31 = function f31(m, c0, i0, l0, a0, v53) {
        v53 = (v53 === undefined) ? [] : v53;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "leftText" ] = "On";
        r1[ "rightText" ] = "Off";
        r1[ "size" ] = "s";
        var v54 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "toggler", (yr.externals['_nb-extend'])(yr.object2nodeset( v54 ), v53));

        return r0;
    };

    // func podium(xml markup) : xml
    M.f32 = function f32(m, c0, i0, l0, a0, v55) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-podium" + "\">";
        r0 += v55;
        r0 += "</div>";

        return r0;
    };

    // func code(xml markup) : xml
    M.f33 = function f33(m, c0, i0, l0, a0, v56) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-code demo-code_sample" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "js-beautify" + "\">";
        r0 += scalar2xml( xml2scalar( v56 ) );
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";

        return r0;
    };

    // func show(xml markup) : xml
    M.f34 = function f34(m, c0, i0, l0, a0, v57) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f32', c0, i0, l0, a0, v57);
        r0 += m.f('f33', c0, i0, l0, a0, v57);
        r0 += "</div>";

        return r0;
    };

    // func select-medium() : xml
    M.f35 = function f35(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select1";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "name" ] = "myname";
            r0[ "attrs" ] = r1;
            r0[ "class" ] = "my-test-class";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option3";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select3";
            r0[ "class" ] = "my-test-class";
            r0[ "theme" ] = "pseudo";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option3";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select4";
            r0[ "class" ] = "my-test-class";
            r0[ "theme" ] = "dark";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option3";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select-gropu1";
            r0[ "class" ] = "my-test-class";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option3";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "separator" ] = true;
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Группа";
            var r3 = [];
            var a3 = { a: {} };
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "Супер Карта";
            r4[ "value" ] = "option4";
            r3.push(r4);
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "Супер Спутник";
            r4[ "value" ] = "option5";
            r3.push(r4);
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "Супер Гибрид";
            r4[ "value" ] = "option6";
            r3.push(r4);
            r2[ "group" ] = r3;
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select5";
            r0[ "class" ] = "my-test-class";
            r0[ "theme" ] = "action";
            r0[ "maxHeight" ] = "3";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "style" ] = "width: 120px";
            r0[ "attrs" ] = r1;
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Народная карта";
            r2[ "value" ] = "option0";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option33";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид1";
            r2[ "value" ] = "option32";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид2";
            r2[ "value" ] = "option31";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select6";
            r0[ "class" ] = "my-test-class";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "style" ] = "max-width: 200px";
            r0[ "attrs" ] = r1;
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "icon" ] = "twitter";
            r2[ "text" ] = "Twitter";
            r2[ "value" ] = "option0";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "icon" ] = "vk";
            r2[ "text" ] = "VK";
            r2[ "value" ] = "option1";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Ещё";
            r2[ "value" ] = "option4";
            r2[ "icon" ] = "three-dots";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "disabled" ] = true;
            r0[ "id" ] = "select9";
            r0[ "class" ] = "my-test-class";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "icon" ] = "twitter";
            r2[ "text" ] = "Twitter";
            r2[ "value" ] = "option0";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "icon" ] = "vk";
            r2[ "text" ] = "VK";
            r2[ "value" ] = "option1";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Ещё";
            r2[ "value" ] = "option4";
            r2[ "icon" ] = "three-dots";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select10";
            r0[ "class" ] = "my-test-class";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "";
            r2[ "value" ] = "option1";
            r2[ "selected" ] = "true";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select-group55";
            r0[ "class" ] = "my-test-class";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option3";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "separator" ] = true;
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Группа";
            var r3 = [];
            var a3 = { a: {} };
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "Супер Карта";
            r4[ "value" ] = "option4";
            r4[ "selected" ] = "true";
            r3.push(r4);
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "Супер Спутник";
            r4[ "value" ] = "option5";
            r3.push(r4);
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "Супер Гибрид";
            r4[ "value" ] = "option6";
            r3.push(r4);
            r2[ "group" ] = r3;
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " Текст рядом с селектами";

        return r0;
    };

    // func select-small() : xml
    M.f36 = function f36(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "s";
            r0[ "id" ] = "select7";
            r0[ "direction" ] = "top";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option3";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Народная карта";
            r2[ "value" ] = "option4";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "s";
            r0[ "id" ] = "select8";
            r0[ "class" ] = "my-test-class";
            r0[ "theme" ] = "pseudo";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option3";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " Текст рядом с селектами";

        return r0;
    };

    // func selects() : xml
    M.f37 = function f37(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f35', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f36', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func button-medium() : xml
    M.f38 = function f38(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var button : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Normal button";
        var v58 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v58 ));
        r0 += " ";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Link button";
            r0[ "type" ] = "link";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "href" ] = "#";
            r0[ "attrs" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Label button";
            r0[ "type" ] = "label";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "for" ] = "blah";
            r0[ "attrs" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Span button";
            r0[ "type" ] = "span";

            return r0;
        })()));

        return r0;
    };

    // func button-small() : xml
    M.f39 = function f39(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Применить";
            r0[ "size" ] = "s";

            return r0;
        })()));

        return r0;
    };

    // func button-action() : xml
    M.f40 = function f40(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Отправить";
            r0[ "size" ] = "m";
            r0[ "theme" ] = "action";

            return r0;
        })()));

        return r0;
    };

    // func button-pseudo() : xml
    M.f41 = function f41(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Выбрать…";
            r0[ "size" ] = "m";
            r0[ "theme" ] = "pseudo";

            return r0;
        })()));

        return r0;
    };

    // func button-pseudo-inverted() : xml
    M.f42 = function f42(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Выбрать…";
            r0[ "size" ] = "m";
            r0[ "theme" ] = "pseudo-inverted";

            return r0;
        })()));

        return r0;
    };

    // func button-dark() : xml
    M.f43 = function f43(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Готово";
            r0[ "size" ] = "m";
            r0[ "theme" ] = "dark";

            return r0;
        })()));

        return r0;
    };

    // func button-promo() : xml
    M.f44 = function f44(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Скачать";
            r0[ "size" ] = "m";
            r0[ "theme" ] = "promo";

            return r0;
        })()));

        return r0;
    };

    // func button-images() : xml
    M.f45 = function f45(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "icon" ] = "eye";

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "iconText" ] = "▼";

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "icon" ] = "link";
            r0[ "content" ] = "Открыть";

            return r0;
        })()));

        return r0;
    };

    // func button-disabled() : xml
    M.f46 = function f46(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Кнопка";
            r0[ "disabled" ] = true;

            return r0;
        })()));

        return r0;
    };

    // func radio-button() : xml
    M.f47 = function f47(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f14', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "name" ] = "btn";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Все";
            r2[ "value" ] = "btn1";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Непрочитанные";
            r2[ "value" ] = "btn3";
            r2[ "checked" ] = true;
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Прочитанные";
            r2[ "value" ] = "btn4";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Удаленные";
            r2[ "value" ] = "btn2";
            r2[ "disabled" ] = true;
            r1.push(r2);
            r0[ "group" ] = r1;

            return r0;
        })()));
        r0 += "<br/>";
        r0 += "<br/>";
        r0 += m.f('f14', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "s";
            r0[ "name" ] = "btn11";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Все";
            r2[ "value" ] = "btn1";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Непрочитанные";
            r2[ "value" ] = "btn3";
            r2[ "checked" ] = true;
            r1.push(r2);
            r0[ "group" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func attach-button() : xml
    M.f48 = function f48(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Прикрепить файл";
            r0[ "theme" ] = "action";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("myclass1");
            r1.push("myclass2");
            r0[ "class" ] = r1;
            r0[ "type" ] = "file";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "title" ] = "Выберите файл";
            r0[ "attrs" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func buttons() : xml
    M.f49 = function f49(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-normal-button";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f38', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-small-button";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f39', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Action ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-action-button";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f40', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Pseudo ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-pseudo-button";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f41', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\" style=\"" + "background-color: #333; color: #fff" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Pseudo-inverted";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_theme_pseudo";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f42', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Dark ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-dark-button";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f43', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Promo";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-promo-button";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f44', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Disabled ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-disabled";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f46', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Кнопка с иконкой";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f45', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Радио-группа";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f47', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Attach ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-attach-button";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f48', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func checkbox-radio() : xml
    M.f50 = function f50(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var radio : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "radio";
        r1[ "content" ] = "Человек";
        r1[ "name" ] = "biotype";
        var v59 = r1;

        //  var radio2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "radio";
        r1[ "content" ] = "Паук";
        r1[ "name" ] = "biotype";
        var v60 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v59 ));
        r0 += "<br/>";
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v60 ));

        return r0;
    };

    // func checkbox-button() : xml
    M.f51 = function f51(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var button : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "button";
        r1[ "content" ] = "Залипающая кнопка";
        r1[ "name" ] = "sticky-button";
        var v61 = r1;

        //  var theme1 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "theme" ] = "pseudo";
        r1[ "content" ] = "Pseudo кнопка";
        var v62 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v61 ));
        r0 += "<br/>";
        r0 += "<br/>";
        r0 += m.f('f17', c0, i0, l0, a0, (yr.externals['_nb-extend'])(yr.object2nodeset( v61 ), yr.object2nodeset( v62 )));

        return r0;
    };

    // func checkbox-check() : xml
    M.f52 = function f52(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var radio : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Дерево";
        r1[ "id" ] = "task";
        r1[ "checked" ] = true;
        r1[ "name" ] = "task";
        var v63 = r1;

        //  var radio2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Сын";
        r1[ "name" ] = "task";
        var v64 = r1;

        //  var radio3 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Дом";
        r1[ "name" ] = "task";
        var v65 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v63 ));
        r0 += "<br/>";
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v64 ));
        r0 += "<br/>";
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v65 ));

        return r0;
    };

    // func checkbox-small() : xml
    M.f53 = function f53(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "type" ] = "radio";
            r0[ "size" ] = "s";
            r0[ "content" ] = "JavaScript";
            r0[ "checked" ] = true;
            r0[ "name" ] = "language";

            return r0;
        })()));
        r0 += "<br/>";
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "type" ] = "radio";
            r0[ "size" ] = "s";
            r0[ "content" ] = "Java";
            r0[ "name" ] = "language";

            return r0;
        })()));
        r0 += "<br/>";
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "s";
            r0[ "content" ] = "Java Small";

            return r0;
        })()));

        return r0;
    };

    // func checkbox() : xml
    M.f54 = function f54(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Radio";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f50', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Checkbox";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f52', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f53', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Button";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f51', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func toggle-default() : xml
    M.f55 = function f55(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a id=\"" + "popup-toggler" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup'}" + "\" href=\"" + "#default" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "default";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-to-right() : xml
    M.f56 = function f56(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a id=\"" + "popup-toggler1" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup1', how: { at: 'left', my: 'right'}}" + "\" href=\"" + "#right" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап справа";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-to-left() : xml
    M.f57 = function f57(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a id=\"" + "popup-toggler2" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup2', how: { at: 'right top', my: 'left' }}" + "\" href=\"" + "#left" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап слева";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-to-top() : xml
    M.f58 = function f58(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a id=\"" + "popup-toggler3" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup3', how: { at: 'top', my: 'bottom' }}" + "\" href=\"" + "#top" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап сверху";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-modal() : xml
    M.f59 = function f59(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup4'}" + "\" href=\"" + "#modal" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Модальный Попап";
        r0 += "</span>";
        r0 += "</a>";
        r0 += "<br/>";
        r0 += "<br/>";
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup-content'}" + "\" href=\"" + "#modal-content" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Модальный Попап c контролами";
        r0 += "</span>";
        r0 += "</a>";
        r0 += "<br/>";
        r0 += "<br/>";
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup5'}" + "\" href=\"" + "#modalBlank" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Базовый Модальный Попап";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func popups() : xml
    M.f60 = function f60(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Скопировать";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Переместить";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "separator" ] = true;
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v66 = r1;

        //  var toRight : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup1";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Скопировать";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Переместить";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v67 = r1;

        //  var toLeft : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup2";
        r1[ "tail" ] = "top";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Скопировать";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Переместить";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v68 = r1;

        //  var toTop : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup3";
        r1[ "tail" ] = "left";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Скопировать";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Переместить";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v69 = r1;

        //  var modal : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup4";
        r1[ "titleContent" ] = "Some modal popup";
        r1[ "content" ] = "Some text for that popup";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "width" ] = "300px";
        r1[ "data-nb" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "class" ] = "ns-action";
        var r3 = {};
        var a3 = { a: {} };
        r3[ "data-params" ] = "123";
        r2[ "attrs" ] = r3;
        r1[ "close" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "class" ] = "ns-subliew-buttons";
        var r3 = [];
        var a3 = { a: {} };
        var r4 = {};
        var a4 = { a: {} };
        r4[ "content" ] = "Отправить";
        r4[ "size" ] = "m";
        r4[ "theme" ] = "action";
        r4[ "class" ] = "_nb-popup-button";
        r3.push(r4);
        var r4 = {};
        var a4 = { a: {} };
        r4[ "content" ] = "Сохранить";
        r4[ "size" ] = "m";
        r4[ "class" ] = "_nb-popup-button";
        r3.push(r4);
        r2[ "data" ] = r3;
        r1[ "buttons" ] = r2;
        var v70 = r1;

        //  var modalWithContent : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup-content";
        r1[ "titleContent" ] = "Modal with complex content";
        var r2 = '';
        var a2 = { a: {} };
        r2 += closeAttrs(a2);
        r2 += m.f('f15', c0, i0, l0, a2, yr.object2nodeset((function() {
            var r2 = {};
            var a2 = { a: {} };
            r2[ "size" ] = "m";
            r2[ "appendto" ] = "#popup-content";
            r2[ "theme" ] = "pseudo";
            r2[ "tabindex" ] = 1;
            r2[ "maxHeight" ] = 5;
            r2[ "name" ] = "select";
            var r3 = [];
            var a3 = { a: {} };
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "option1";
            r4[ "value" ] = "1";
            r3.push(r4);
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "option2";
            r4[ "value" ] = "2";
            r3.push(r4);
            r2[ "items" ] = r3;

            return r2;
        })()));
        r2 += " ";
        r2 += m.f('f15', c0, i0, l0, a2, yr.object2nodeset((function() {
            var r2 = {};
            var a2 = { a: {} };
            r2[ "size" ] = "m";
            r2[ "appendto" ] = "#popup-content";
            r2[ "theme" ] = "pseudo";
            r2[ "disabled" ] = true;
            r2[ "name" ] = "select";
            var r3 = [];
            var a3 = { a: {} };
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "option1";
            r4[ "value" ] = "1";
            r3.push(r4);
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "option2";
            r4[ "value" ] = "2";
            r3.push(r4);
            r2[ "items" ] = r3;

            return r2;
        })()));
        r2 += "<br/>";
        r2 += "<br/>";
        r2 += m.f('f18', c0, i0, l0, a2, yr.object2nodeset((function() {
            var r2 = {};
            var a2 = { a: {} };
            r2[ "size" ] = "m";
            r2[ "name" ] = "answer";
            r2[ "tabindex" ] = 3;
            r2[ "hint" ] = "question";

            return r2;
        })()));
        r2 += "<br/>";
        r2 += "<br/>";
        r2 += m.f('f18', c0, i0, l0, a2, yr.object2nodeset((function() {
            var r2 = {};
            var a2 = { a: {} };
            r2[ "size" ] = "m";
            r2[ "name" ] = "answer";
            r2[ "tabindex" ] = 4;
            r2[ "hint" ] = "answer";
            var r3 = {};
            var a3 = { a: {} };
            r3[ "direction" ] = "right";
            r3[ "content" ] = "ERROR";
            r2[ "error" ] = r3;

            return r2;
        })()));
        r2 += "<br/>";
        r2 += "<br/>";
        r2 += m.f('f4', c0, i0, l0, a2, yr.object2nodeset((function() {
            var r2 = {};
            var a2 = { a: {} };
            r2[ "size" ] = "m";
            r2[ "tabindex" ] = 5;
            r2[ "theme" ] = "action";
            r2[ "content" ] = "BUTTON";

            return r2;
        })()));
        r2 += " ";
        r2 += m.f('f4', c0, i0, l0, a2, yr.object2nodeset((function() {
            var r2 = {};
            var a2 = { a: {} };
            r2[ "size" ] = "m";
            r2[ "theme" ] = "action";
            r2[ "disabled" ] = true;
            r2[ "content" ] = "DISABLED";

            return r2;
        })()));
        r1[ "content" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "width" ] = "300px";
        r1[ "data-nb" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "class" ] = "ns-action";
        var r3 = {};
        var a3 = { a: {} };
        r3[ "data-params" ] = "123";
        r2[ "attrs" ] = r3;
        r1[ "close" ] = r2;
        var v71 = r1;

        //  var modalBlank : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup5";
        r1[ "theme" ] = "blank";
        r1[ "close" ] = false;
        r1[ "content" ] = "Some text for that popup";
        var v72 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\" style=\"" + "text-align: right" + "\">";
        r0 += m.f('f32', c0, i0, l0, a0, m.f('f55', c0, i0, l0, a0));
        r0 += m.f('f33', c0, i0, l0, a0, m.f('f55', c0, i0, l0, a0));
        r0 += m.f('f33', c0, i0, l0, a0, m.f('f8', c0, i0, l0, a0, yr.object2nodeset( v66 )));
        r0 += "</div>";
        r0 += m.f('f8', c0, i0, l0, a0, yr.object2nodeset( v66 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\" id=\"" + "test" + "\">";
        r0 += m.f('f32', c0, i0, l0, a0, m.f('f56', c0, i0, l0, a0));
        r0 += m.f('f33', c0, i0, l0, a0, m.f('f56', c0, i0, l0, a0));
        r0 += m.f('f33', c0, i0, l0, a0, m.f('f8', c0, i0, l0, a0, yr.object2nodeset( v67 )));
        r0 += "</div>";
        r0 += m.f('f8', c0, i0, l0, a0, yr.object2nodeset( v67 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f32', c0, i0, l0, a0, m.f('f57', c0, i0, l0, a0));
        r0 += m.f('f33', c0, i0, l0, a0, m.f('f57', c0, i0, l0, a0));
        r0 += m.f('f33', c0, i0, l0, a0, m.f('f8', c0, i0, l0, a0, yr.object2nodeset( v68 )));
        r0 += "</div>";
        r0 += m.f('f8', c0, i0, l0, a0, yr.object2nodeset( v68 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f32', c0, i0, l0, a0, m.f('f58', c0, i0, l0, a0));
        r0 += m.f('f33', c0, i0, l0, a0, m.f('f58', c0, i0, l0, a0));
        r0 += m.f('f33', c0, i0, l0, a0, m.f('f8', c0, i0, l0, a0, yr.object2nodeset( v69 )));
        r0 += "</div>";
        r0 += m.f('f8', c0, i0, l0, a0, yr.object2nodeset( v69 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f32', c0, i0, l0, a0, m.f('f59', c0, i0, l0, a0));
        r0 += m.f('f33', c0, i0, l0, a0, m.f('f59', c0, i0, l0, a0));
        r0 += m.f('f33', c0, i0, l0, a0, m.f('f10', c0, i0, l0, a0, yr.object2nodeset( v70 )));
        r0 += "</div>";
        r0 += m.f('f10', c0, i0, l0, a0, yr.object2nodeset( v70 ));
        r0 += m.f('f10', c0, i0, l0, a0, yr.object2nodeset( v72 ));
        r0 += m.f('f10', c0, i0, l0, a0, yr.object2nodeset( v71 ));
        r0 += "</div>";

        return r0;
    };

    // func dropzone() : xml
    M.f61 = function f61(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "head" ] = "Загрузка файлов";
        r1[ "text" ] = "Перетащите файлы сюда или ";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "content" ] = "выбрите...";
        r2[ "type" ] = "file";
        r2[ "theme" ] = "pseudo";
        r2[ "class" ] = "nb-dropzone-button";
        r1[ "button" ] = r2;
        var v73 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Зона для загрузки файла";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f23', c0, i0, l0, a0, yr.object2nodeset( v73 )));
        r0 += "</div>";

        return r0;
    };

    // func progresses() : xml
    M.f62 = function f62(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "progress2";
        r1[ "start" ] = "20";
        var v74 = r1;

        //  var title : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "progress1";
        r1[ "start" ] = "30";
        r1[ "type" ] = "title";
        r1[ "title" ] = "Король_Лев_5_rutracker.org";
        var v75 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Percentage ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-percentage-progress";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f20', c0, i0, l0, a0, yr.object2nodeset( v74 )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Title ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-title-progress";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f20', c0, i0, l0, a0, yr.object2nodeset( v75 )));
        r0 += "</div>";

        return r0;
    };

    // func input-small() : xml
    M.f63 = function f63(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Москва";

            return r0;
        })()));

        return r0;
    };

    // func input-medium() : xml
    M.f64 = function f64(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "content" ] = "Москва и Питер";

            return r0;
        })()));

        return r0;
    };

    // func input-disabled() : xml
    M.f65 = function f65(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "disabled" ] = true;
            r0[ "content" ] = "Москва";

            return r0;
        })()));

        return r0;
    };

    // func input-length() : xml
    M.f66 = function f66(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            var r1 = {};
            var a1 = { a: {} };
            r1[ "length" ] = 11;
            r1[ "maxlength" ] = 11;
            r1[ "placeholder" ] = "11 символов";
            r0[ "attrs" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func input-multiline() : xml
    M.f67 = function f67(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "type" ] = "multiline";

            return r0;
        })()));

        return r0;
    };

    // func input-ghost() : xml
    M.f68 = function f68(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "ghost" ] = true;

            return r0;
        })()));

        return r0;
    };

    // func input-reset() : xml
    M.f69 = function f69(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "reset" ] = true;
            r0[ "size" ] = "m";
            r0[ "content" ] = "privet";

            return r0;
        })()));

        return r0;
    };

    // func input-small-reset() : xml
    M.f70 = function f70(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "reset" ] = true;
            r0[ "size" ] = "s";
            r0[ "content" ] = "privet";

            return r0;
        })()));

        return r0;
    };

    // func input-left-right() : xml
    M.f71 = function f71(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "leftContent" ] = "Prefix...";
            r0[ "rightContent" ] = "...postfix";

            return r0;
        })()));

        return r0;
    };

    // func input-textarea-reset() : xml
    M.f72 = function f72(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "reset" ] = true;
            r0[ "size" ] = "m";
            r0[ "type" ] = "multiline";
            r0[ "content" ] = "privet";

            return r0;
        })()));

        return r0;
    };

    // func input-error() : xml
    M.f73 = function f73(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Здесь будет ошибка";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "direction" ] = "right";
            r1[ "content" ] = "Все плохо!!!";
            r0[ "error" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func input-hint() : xml
    M.f74 = function f74(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "hint" ] = "Your Email or Name";

            return r0;
        })()));

        return r0;
    };

    // func input-hint-ghost() : xml
    M.f75 = function f75(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "hello@nano.is";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "ghost" ] = true;
            r1[ "text" ] = " — Your Email or Name";
            r0[ "hint" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func inputs() : xml
    M.f76 = function f76(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f64', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f63', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Disabled ";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f65', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Maxlength";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f66', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Multiline";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f67', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Multiline with reset";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f72', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Ghost";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f68', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Reset";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f69', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Small reset";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f70', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Postfix, prefix";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f71', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Error";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f73', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Hint";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f74', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Ghost hint";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f75', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func input-groups() : xml
    M.f77 = function f77(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var blockDefault1 : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        var r3 = {};
        var a3 = { a: {} };
        r3[ "placeholder" ] = "Номер билета";
        r2[ "attrs" ] = r3;
        r1[ "input" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "content" ] = "Проверить";
        r1[ "button" ] = r2;
        var v76 = r1;

        //  var blockDefault2 : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "icon" ] = "link";
        r1[ "button" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "content" ] = "http://yadi.sk/";
        r1[ "input" ] = r2;
        var v77 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поле+кнопка";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f19', c0, i0, l0, a0, yr.object2nodeset( v76 )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Кнопка+поле";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f19', c0, i0, l0, a0, yr.object2nodeset( v77 )));
        r0 += "</div>";

        return r0;
    };

    // func island-simple() : xml
    M.f78 = function f78(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Остров миу-миу";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "style" ] = "height: 100px; width: 200px";
        r1[ "attrs" ] = r2;
        var v78 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f22', c0, i0, l0, a0, yr.object2nodeset( v78 ));

        return r0;
    };

    // func island-fly() : xml
    M.f79 = function f79(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Летающий остров";
        r1[ "type" ] = "fly";
        r1[ "padding" ] = "m";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "style" ] = "height: 100px; width: 200px";
        r1[ "attrs" ] = r2;
        var v79 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f22', c0, i0, l0, a0, yr.object2nodeset( v79 ));

        return r0;
    };

    // func island-padding() : xml
    M.f80 = function f80(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Остров с паддингами и инлайном";
        r1[ "padding" ] = "l";
        r1[ "type" ] = "inline";
        var v80 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f22', c0, i0, l0, a0, yr.object2nodeset( v80 ));

        return r0;
    };

    // func islands() : xml
    M.f81 = function f81(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f78', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f79', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Padding: L, Inline ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-large-inline-island";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f80', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func loader-small() : xml
    M.f82 = function f82(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var loader : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v81 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f24', c0, i0, l0, a0, yr.object2nodeset( v81 ));

        return r0;
    };

    // func loader-medium() : xml
    M.f83 = function f83(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var loader : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v82 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f24', c0, i0, l0, a0, yr.object2nodeset( v82 ));

        return r0;
    };

    // func loader-white() : xml
    M.f84 = function f84(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var loader : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "color" ] = "white";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v83 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f24', c0, i0, l0, a0, yr.object2nodeset( v83 ));

        return r0;
    };

    // func loaders() : xml
    M.f85 = function f85(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f83', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f82', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section demo-section_dark" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Color: White ";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f84', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func all-icons-s(boolean white) : xml
    M.f86 = function f86(m, c0, i0, l0, a0, v84) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if (v84) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "download-white";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "upload-white";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "link-white";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "trash-white";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "full-screen-white";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "compose-yellow";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "zoom-white";

                return r0;
            })()));
        } else {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "close";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "download";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "upload";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "people";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "help";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "eye";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "link";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "link";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "pause";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "play";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "play";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "three-dots";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "trash";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "attention";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "mail";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "vk";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "twitter";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "odnoklassniki";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "shared";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "published";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "new-folder";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "view-tiles";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "view-icons";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "view-list";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "compose";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "next";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "prev";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "volume";

                return r0;
            })()));
        }

        return r0;
    };

    // func all-icons-m(boolean white) : xml
    M.f87 = function f87(m, c0, i0, l0, a0, v85) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if (v85) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "download-white";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "upload-white";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "link-white";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "trash-white";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "full-screen-white";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "compose-yellow";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "zoom-white";
                r0[ "size" ] = "m";

                return r0;
            })()));
        } else {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "close";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "download";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "upload";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "people";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "help";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "eye";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "link";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "link";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "pause";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "play";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "play";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "three-dots";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "trash";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "attention";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "mail";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "vk";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "twitter";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "odnoklassniki";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "shared";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "published";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "new-folder";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "view-tiles";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "view-icons";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "view-list";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "compose";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "next";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "prev";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "volume";
                r0[ "size" ] = "m";

                return r0;
            })()));
        }

        return r0;
    };

    // func icons() : xml
    M.f88 = function f88(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section demo-section_icons" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "</div>";
        r0 += m.f('f86', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section demo-section_icons" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "</div>";
        r0 += m.f('f87', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section demo-section_dark demo-section_icons" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "White";
        r0 += "</div>";
        r0 += m.f('f86', c0, i0, l0, a0, true);
        r0 += m.f('f87', c0, i0, l0, a0, true);
        r0 += "</div>";

        return r0;
    };

    // func slider-small() : xml
    M.f89 = function f89(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var slider : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "s2";
        r1[ "size" ] = "s";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "class" ] = "js-custom-class";
        r1[ "handle" ] = r2;
        r1[ "value" ] = 20;
        var v86 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f25', c0, i0, l0, a0, yr.object2nodeset( v86 ));

        return r0;
    };

    // func slider-medium() : xml
    M.f90 = function f90(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var slider : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "class" ] = "js-super-class";
        r1[ "value" ] = 50;
        r1[ "id" ] = "s1";
        var v87 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f25', c0, i0, l0, a0, yr.object2nodeset( v87 ));

        return r0;
    };

    // func slider-disabled() : xml
    M.f91 = function f91(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var slider : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "disabled" ] = true;
        var v88 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f25', c0, i0, l0, a0, yr.object2nodeset( v88 ));

        return r0;
    };

    // func sliders() : xml
    M.f92 = function f92(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f89', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f90', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Disabled";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f91', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func tooltips-jq() : xml
    M.f93 = function f93(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<a href=\"" + "#hello" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "tooltip-jq-toggler" + "\" data-nb-tooltip-jq-toggler=\"" + "{content: 'tooltip1'}" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">" + "Тултип с текстом" + "</span>";
        r0 += "</a>";
        r0 += "<br/>";
        r0 += "<br/>";
        r0 += "<a href=\"" + "#hello" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "tooltip-jq-toggler" + "\" data-nb-tooltip-jq-toggler=\"" + "{content: 'tool&lt;b&gt;tip2&lt;/b&gt;'}" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">" + "Тултип с HTML" + "</span>";
        r0 += "</a>";
        r0 += "</div>";

        return r0;
    };

    // func tabs-article() : xml
    M.f94 = function f94(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div style=\"" + "line-height: 1.4;" + "\">";
        r0 += "<strong>";
        r0 += "Остров";
        r0 += "</strong>";
        r0 += " — участок суши (обычно естественного происхождения), окружённый со ";
        r0 += "всех сторон водой и постоянно возвышающийся над водой даже в период ";
        r0 += "наибольшего прилива. От материков острова отличаются меньшими ";
        r0 += "размерами (самым большим по площади островом принято считать ";
        r0 += "Гренландию, которая приблизительно в три раза меньше самого малого ";
        r0 += "континента — Австралии). Встречаются одиночные острова и их группы ";
        r0 += "— архипелаги.";
        r0 += "</div>";

        return r0;
    };

    // func tabs-discussion() : xml
    M.f95 = function f95(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div style=\"" + "line-height: 1.4; margin-bottom: 1em;" + "\">";
        r0 += "На черта в этой статье флагифицировали все упоминания стран? Вообще ";
        r0 += "сомневаюсь в необходимости этого, она была придумана для списков и ";
        r0 += "карточек. ";
        r0 += "<a class=\"" + "_link" + "\" href=\"" + "#" + "\">";
        r0 += "Username";
        r0 += "</a>";
        r0 += " 14:14, 6 сентября 2011 (UTC)";
        r0 += "</div>";
        r0 += "<div style=\"" + "line-height: 1.4; margin-left: 2em;" + "\">";
        r0 += "Чем вы так недовольны?Или это ваш менталитет?Флаги нужны ";
        r0 += "<a class=\"" + "_link" + "\" href=\"" + "#" + "\">";
        r0 += "213.87.142.97";
        r0 += "</a>";
        r0 += " 13:23, 16 февраля 2013 (UTC)";
        r0 += "</div>";

        return r0;
    };

    // func tabs-medium() : xml
    M.f96 = function f96(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Статья";
        r3[ "content" ] = m.f('f94', c0, i0, l0, a3);
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Обсуждение";
        r3[ "content" ] = m.f('f95', c0, i0, l0, a3);
        r2.push(r3);
        r1[ "items" ] = r2;
        var v89 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f26', c0, i0, l0, a0, yr.object2nodeset( v89 ));

        return r0;
    };

    // func tabs-small() : xml
    M.f97 = function f97(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Главное";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Политика";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Экономика";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Спорт";
        r3[ "active" ] = true;
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Технологии";
        r2.push(r3);
        r1[ "items" ] = r2;
        var v90 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f26', c0, i0, l0, a0, yr.object2nodeset( v90 ));

        return r0;
    };

    // func tabs-island() : xml
    M.f98 = function f98(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var exchange : xml
        var r1 = '';
        var a1 = { a: {} };
        //  var group : object
        var r2 = {};
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        var r4 = {};
        var a4 = { a: {} };
        r4[ "placeholder" ] = "Серийный номер";
        r4[ "style" ] = "width: 90%";
        r3[ "attrs" ] = r4;
        r2[ "input" ] = r3;
        var r3 = {};
        var a3 = { a: {} };
        r3[ "size" ] = "s";
        r3[ "content" ] = "Обменять";
        r2[ "button" ] = r3;
        var v91 = r2;

        r1 += closeAttrs(a1);
        r1 += m.f('f19', c0, i0, l0, a1, yr.object2nodeset( v91 ));
        var v92 = r1;

        //  var return : xml
        var r1 = '';
        var a1 = { a: {} };
        //  var group : object
        var r2 = {};
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        var r4 = {};
        var a4 = { a: {} };
        r4[ "placeholder" ] = "Серийный номер";
        r3[ "attrs" ] = r4;
        r2[ "input" ] = r3;
        var r3 = {};
        var a3 = { a: {} };
        r3[ "size" ] = "s";
        r3[ "content" ] = "Вернуть";
        r2[ "button" ] = r3;
        var v93 = r2;

        r1 += closeAttrs(a1);
        r1 += m.f('f19', c0, i0, l0, a1, yr.object2nodeset( v93 ));
        var v94 = r1;

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "rise" ] = "m";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Обмен";
        r3[ "content" ] = v92;
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Возврат";
        r3[ "content" ] = v94;
        r2.push(r3);
        r1[ "items" ] = r2;
        var v95 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-island _nb-fly-island")
        };
        a0.s = 'div';
        a0.a[ "style" ] = new yr.scalarAttr("width: 500px");
        r0 += closeAttrs(a0);
        r0 += m.f('f26', c0, i0, l0, a0, yr.object2nodeset( v95 ));
        r0 += "</div>";

        return r0;
    };

    // func tabs() : xml
    M.f99 = function f99(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f96', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f97', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Внутри острова ";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f98', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func arrow-service() : xml
    M.f100 = function f100(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "false";
        r1[ "text" ] = "Диск";
        var v96 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f27', c0, i0, l0, a0, yr.object2nodeset( v96 ));

        return r0;
    };

    // func arrow-service-link() : xml
    M.f101 = function f101(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "false";
        r1[ "href" ] = "#";
        r1[ "text" ] = "Диск";
        var v97 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f27', c0, i0, l0, a0, yr.object2nodeset( v97 ));

        return r0;
    };

    // func arrow-search() : xml
    M.f102 = function f102(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        var v98 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f27', c0, i0, l0, a0, yr.object2nodeset( v98 ));

        return r0;
    };

    // func arrow-search-requests() : xml
    M.f103 = function f103(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "requests" ] = "8 млн ответов";
        r1[ "value" ] = "жираф";
        var v99 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f27', c0, i0, l0, a0, yr.object2nodeset( v99 ));

        return r0;
    };

    // func arrow-search-service() : xml
    M.f104 = function f104(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "href" ] = "#";
        r1[ "text" ] = "Диск";
        var v100 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f27', c0, i0, l0, a0, yr.object2nodeset( v100 ));

        return r0;
    };

    // func arrows() : xml
    M.f105 = function f105(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Название сервиса";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f100', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Название сервиса со ссылкой";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f101', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поисковая стрелка (по умолчанию)";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f102', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поисковая стрелка (по умолчанию)";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f103', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поисковая стрелка (по умолчанию)";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f104', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    //  var header : object
    M.v101 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "username" ] = "Username";
        r2[ "notices" ] = "7";
        r1[ "user" ] = r2;
        return r1;
    };

    // func header() : xml
    M.f106 = function f106(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Шапка с поисковой стрелкой";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f28', c0, i0, l0, a0, yr.object2nodeset( m.v('v101', c0.doc.root) )));
        r0 += "</div>";

        return r0;
    };

    //  var userNormal : object
    M.v102 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "sweetlush";
        r1[ "notices" ] = "7";
        return r1;
    };

    //  var userRtL : object
    M.v103 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "Username";
        r1[ "notices" ] = "1";
        r1[ "rightToLeft" ] = "true";
        return r1;
    };

    //  var userSmall : object
    M.v104 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "basvasilich";
        r1[ "size" ] = "s";
        return r1;
    };

    //  var userEmail : object
    M.v105 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "Константин Леонидович Васильев";
        r1[ "email" ] = "pupkin@yandex.ru";
        r1[ "justify" ] = true;
        r1[ "rightToLeft" ] = true;
        r1[ "size" ] = "s";
        return r1;
    };

    //  var userEmail2 : object
    M.v106 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "Константин Леонидович Васильев";
        r1[ "email" ] = "pupkin@yandex.ru";
        r1[ "justify" ] = true;
        r1[ "size" ] = "m";
        return r1;
    };

    // func userBlock() : xml
    M.f107 = function f107(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе L";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f29', c0, i0, l0, a0, yr.object2nodeset( m.v('v102', c0.doc.root) )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе справа налево";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f29', c0, i0, l0, a0, yr.object2nodeset( m.v('v103', c0.doc.root) )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе S";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f29', c0, i0, l0, a0, yr.object2nodeset( m.v('v104', c0.doc.root) )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе растянутый и с имейлом";
        r0 += "</div>";
        r0 += "<div style=\"" + "width: 200px" + "\">";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f29', c0, i0, l0, a0, yr.object2nodeset( m.v('v105', c0.doc.root) )));
        r0 += "</div>";
        r0 += "<div style=\"" + "width: 200px" + "\">";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f29', c0, i0, l0, a0, yr.object2nodeset( m.v('v106', c0.doc.root) )));
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };

    var j26 = [ 0, 'source' ];

    // func suggests() : xml
    M.f108 = function f108(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var suggest : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "source" ] = "[\"Вариант 1\", \"Вариант 2\", \"Вариант 3\", \"Вариант 4\", \"Вариант 5\", \"Вариант 6\", \"Вариант 7\", \"Вариант 8\", \"Вариант 9\", \"Вариант 10\", \"Вариант 11\", \"Вариант 12\", \"Вариант 13\", \"Вариант 14\", \"Вариант 15\", \"Вариант 16\", \"Вариант 17\", \"Вариант 18\", \"Вариант 19\"]";
        r1[ "highlight" ] = true;
        r1[ "size" ] = "s";
        var v107 = r1;

        //  var suggestUser : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "source" ] = "[{\"value\": \"Константин Константинович Константинопольский\",\"labelContent\": \"Константин Константинович Константинопольский konstantin.konstantinopolsky\",\"username\": \"Константин Константинович Константинопольский\",\"email\": \"konstantin.konstantinopolsky@yandex-team.ru\"},{\"value\": \"Константин Васильев\",\"labelContent\": \"Константин Васильев mctep\",\"username\": \"Константин Васильев\",\"email\": \"mctep@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/mctep/avatar/54.jpg\"},{\"value\": \"Евгений Дорошенко\",\"labelContent\": \"Евгений Дорошенко esdoroshenko\",\"username\": \"Евгений Дорошенко\",\"email\": \"esdoroshenko@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/esdoroshenko/avatar/54.jpg\"},{\"value\": \"Вадим Пацев\",\"labelContent\": \"Вадим Пацев basvasilich\",\"username\": \"Вадим Пацев\",\"email\": \"basvasilich@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/basvasilich/avatar/54.jpg\"},{\"value\": \"Светлана Блыщак\",\"labelContent\": \"Светлана Блыщак sweetlush\",\"username\": \"Светлана Блыщак\",\"email\": \"sweetlush@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/sweetlush/avatar/54.jpg\"},{\"value\": \"Яна Недоросткова\",\"labelContent\": \"Яна Недоросткова yanann11\",\"username\": \"Яна Недоросткова\",\"email\": \"yanann11@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/yanann11/avatar/54.jpg\"},{\"value\": \"Азиз Йулдошев\",\"labelContent\": \"Азиз Йулдошев lapple\",\"username\": \"Азиз Йулдошев\",\"email\": \"lapple@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/lapple/avatar/54.jpg\"}]";
        r1[ "highlight" ] = true;
        r1[ "type" ] = "username";
        var v108 = r1;

        //  var suggestUser2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "source" ] = "./users.json";
        r1[ "type" ] = "username";
        var v109 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Простейший саджест с большим количеством вариантов. Введите буквы «Ва»";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, yr.object2nodeset( v107 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Саджест с подсветкой, в котором представлена команда разработчиков Диска";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, yr.object2nodeset( v108 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Саджест, который ходит на сервер за demo/users.json.";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-h5" + "\">";
        r0 += "Для корректной работы, необходмо настроить ваш сервер на выдачу json файлов как есть. ";
        r0 += "Файл статичный, поэтому результаты будут всегда одинаковые. ";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, yr.object2nodeset( v109 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Саджест c произвольным полем ввода. Введите буквы «Ва»";
        r0 += "</div>";
        r0 += "<input";
        a0.a = {
        };
        a0.s = 'input';
        a0.a[ "class" ] = new yr.scalarAttr("nb-input _nb-small-simple-input _init");
        a0.a[ "id" ] = new yr.scalarAttr("suggest-with-custom-input");
        a0.a[ "placeholder" ] = new yr.scalarAttr("Введите вариант");
        a0.a[ "data-nb" ] = new yr.scalarAttr("suggest");
        a0.a[ "data-class-suggest" ] = new yr.scalarAttr("nb-island _nb-fly-island _nb-suggest-container _nb-small-suggest");
        a0.a[ "data-source" ] = new yr.scalarAttr(nodeset2scalar( m.n(j26, yr.object2nodeset( v107 )) ));
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "</div>";

        return r0;
    };

    //  var togglerS : object
    M.v110 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "leftText" ] = "Вкл";
        r1[ "rightText" ] = "Выкл";
        return r1;
    };

    //  var togglerM : object
    M.v111 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "leftText" ] = "Вкл";
        r1[ "rightText" ] = "Выкл";
        r1[ "size" ] = "m";
        r1[ "checked" ] = true;
        return r1;
    };

    //  var togglerDisabled : object
    M.v112 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "leftText" ] = "Вкл";
        r1[ "rightText" ] = "Выкл";
        r1[ "size" ] = "m";
        r1[ "disabled" ] = true;
        return r1;
    };

    // func toggleBlock() : xml
    M.f109 = function f109(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок переключатель";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f31', c0, i0, l0, a0, yr.object2nodeset( m.v('v110', c0.doc.root) )));
        r0 += "<br/>";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок переключатель M";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f31', c0, i0, l0, a0, yr.object2nodeset( m.v('v111', c0.doc.root) )));
        r0 += "<br/>";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок переключатель disabled";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f31', c0, i0, l0, a0, yr.object2nodeset( m.v('v112', c0.doc.root) )));
        r0 += "</div>";

        return r0;
    };

    // func button-input-button() : xml
    M.f110 = function f110(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Слева";
            r0[ "size" ] = "m";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-group-item");
            r0[ "class" ] = r1;

            return r0;
        })()));
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-group-item");
            r0[ "class" ] = r1;
            r0[ "size" ] = "m";

            return r0;
        })()));
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Справа";
            r0[ "size" ] = "m";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-group-item");
            r0[ "class" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func button-input-button-strict() : xml
    M.f111 = function f111(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Слева";
            r0[ "theme" ] = "pseudo";
            r0[ "size" ] = "s";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-group-start");
            r0[ "class" ] = r1;

            return r0;
        })()));
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "В центре";
            r0[ "theme" ] = "pseudo";
            r0[ "size" ] = "s";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-group-middle");
            r0[ "class" ] = r1;

            return r0;
        })()));
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Справа";
            r0[ "theme" ] = "pseudo";
            r0[ "size" ] = "s";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-group-end");
            r0[ "class" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func groups() : xml
    M.f112 = function f112(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-group-item";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f110', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-group-start, ";
        r0 += ".nb-group-middle, ";
        r0 += ".nb-group-end";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f111', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func gap-xs() : xml
    M.f113 = function f113(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "foo";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-with-xs-right-gap");
            r0[ "class" ] = r1;

            return r0;
        })()));
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "bar";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-with-xs-right-gap");
            r0[ "class" ] = r1;

            return r0;
        })()));
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "baz";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-with-xs-right-gap");
            r0[ "class" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func gap-s() : xml
    M.f114 = function f114(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "foo";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-with-s-right-gap");
            r0[ "class" ] = r1;

            return r0;
        })()));
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "bar";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-with-s-right-gap");
            r0[ "class" ] = r1;

            return r0;
        })()));
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "baz";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-with-s-right-gap");
            r0[ "class" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func gap-m() : xml
    M.f115 = function f115(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "foo";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-with-m-right-gap");
            r0[ "class" ] = r1;

            return r0;
        })()));
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "bar";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-with-m-right-gap");
            r0[ "class" ] = r1;

            return r0;
        })()));
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "baz";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-with-m-right-gap");
            r0[ "class" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func gap-l() : xml
    M.f116 = function f116(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "foo";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-with-l-right-gap");
            r0[ "class" ] = r1;

            return r0;
        })()));
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "bar";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-with-l-right-gap");
            r0[ "class" ] = r1;

            return r0;
        })()));
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "baz";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("nb-with-l-right-gap");
            r0[ "class" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func gaps() : xml
    M.f117 = function f117(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-with-xs-right-gap";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f113', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-with-s-right-gap";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f114', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-with-m-right-gap";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f115', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-with-l-right-gap";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f34', c0, i0, l0, a0, m.f('f116', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    var j27 = [ 0, 'id' ];

    var j28 = [ 0, 'class' ];

    var j29 = [ 0, 'mixin-nb' ];

    var j30 = [ 0, 'data-nb', 0, '*' ];

    var j31 = [ 0, 'attrs', 0, '*' ];

    var j32 = [ 0, 'ico' ];

    var j33 = [ 0, 'button' ];

    var j34 = [ 0, 'buttonLink' ];

    var j35 = [ 0, 'buttonSpan' ];

    var j36 = [ 0, 'buttonLabel' ];

    var j37 = [ 0, 'buttonAttach' ];

    var j38 = [ 0, 'attrs', 0, 'multiple' ];

    var j39 = [ 0, 'multiple' ];

    var j40 = [ 0, 'attrs', 0, 'title' ];

    var j41 = [ 0, 'popupMenu' ];

    var j42 = [ 0, 'tail' ];

    var j43 = [ 0, 'menu' ];

    var j44 = [ 0, 'href' ];

    var j45 = [ 0, 'popup' ];

    var j46 = [ 0, 'titleContent' ];

    var j47 = [ 0, 'modalPopup' ];

    var j48 = [ 0, 'close' ];

    var j49 = [ 0, 'close', 0, 'class' ];

    var j50 = [ 0, 'close', 0, 'attrs' ];

    var j51 = [ 0, 'close', 0, 'attrs', 0, '*' ];

    var j52 = [ 0, 'buttons' ];

    var j53 = [ 0, 'radio-button' ];

    var j54 = [ 0, 'group' ];

    var j55 = [ 1, 1, 0, 'name' ];

    var j56 = [ 0, 'checked' ];

    var j57 = [ 1, 1, 0, 'size' ];

    var j58 = [ 0, 'select' ];

    function p0(m, c0, i0, l0) {
        return nodeset2boolean( (selectNametest('selected', c0, [])) );
    }

    var j59 = [ 0, 'items', 2, p0 ];

    var j60 = [ 0, 'direction' ];

    var j61 = [ 0, 'within' ];

    var j62 = [ 0, 'appendto' ];

    var j63 = [ 0, 'maxHeight' ];

    var j64 = [ 0, 'items' ];

    var j65 = [ ];

    var j66 = [ 0, 'checkbox' ];

    var j67 = [ 0, 'input' ];

    var j68 = [ 0, 'error', 0, 'direction' ];

    var j69 = [ 0, 'hint', 0, 'text' ];

    var j70 = [ 0, 'hint', 0, 'ghost' ];

    var j71 = [ 0, 'error', 0, 'content' ];

    var j72 = [ 0, 'textarea' ];

    var j73 = [ 0, 'inputSimple' ];

    var j74 = [ 0, 'textareaSimple' ];

    var j75 = [ 0, 'input-group' ];

    var j76 = [ 0, 'progress' ];

    var j77 = [ 0, 'bar' ];

    var j78 = [ 0, 'start' ];

    var j79 = [ 0, 'title' ];

    var j80 = [ 0, 'paranja' ];

    var j81 = [ 0, 'island' ];

    var j82 = [ 0, 'padding' ];

    var j83 = [ 0, 'dropzone' ];

    var j84 = [ 0, 'head' ];

    var j85 = [ 0, 'loader' ];

    var j86 = [ 0, 'color' ];

    var j87 = [ 0, 'slider' ];

    var j88 = [ 0, 'orientation' ];

    var j89 = [ 0, 'handle', 0, 'class' ];

    var j90 = [ 0, 'tabs' ];

    var j91 = [ 0, 'rise' ];

    var j92 = [ 0, 'active' ];

    var j93 = [ 0, 'arrow' ];

    var j94 = [ 0, 'requests' ];

    var j95 = [ 0, 'buttonTabindex' ];

    var j96 = [ 0, 'buttonContent' ];

    var j97 = [ 0, 'inputTabindex' ];

    var j98 = [ 0, 'search' ];

    function p1(m, c0, i0, l0) {
        return !(cmpSN("true", selectNametest('search', c0, [])));
    }

    var j99 = [ 0, 'arrow', 2, p1 ];

    function p2(m, c0, i0, l0) {
        return simpleBoolean('href', c0);
    }

    var j100 = [ 0, 'arrow', 2, p1, 2, p2 ];

    var j101 = [ 0, 'header' ];

    var j102 = [ 0, 'settings' ];

    var j103 = [ 0, 'services' ];

    var j104 = [ 0, 'user' ];

    var j105 = [ 0, 'yaHref' ];

    var j106 = [ 0, 'justify' ];

    var j107 = [ 0, 'rightToLeft' ];

    var j108 = [ 0, 'userpic' ];

    var j109 = [ 0, 'notices' ];

    var j110 = [ 0, 'username' ];

    var j111 = [ 0, 'email' ];

    var j112 = [ 0, 'suggest' ];

    var j113 = [ 0, 'countMax' ];

    var j114 = [ 0, 'highlight' ];

    var j115 = [ 0, 'classSuggest' ];

    var j116 = [ 0, 'attrsInput' ];

    var j117 = [ 0, 'item' ];

    function p3(m, c0, i0, l0) {
        return cmpSN("default", selectNametest('type', c0, []));
    }

    var j118 = [ 2, p3, 0, 'item' ];

    function p4(m, c0, i0, l0) {
        return cmpSN("username", selectNametest('type', c0, []));
    }

    var j119 = [ 2, p4, 0, 'item' ];

    var j120 = [ 0, 'size' ];

    var j121 = [ 0, 'usernameHighlighted' ];

    var j122 = [ 0, 'emailHighlighted' ];

    var j123 = [ 0, 'mod' ];

    function p5(m, c0, i0, l0) {
        return cmpSN("suggest", selectNametest('mod', c0, [])) && simpleBoolean('usernameHighlighted', c0);
    }

    var j124 = [ 0, 'user', 2, p5, 0, 'username' ];

    var j125 = [ 1, 1, 0, 'usernameHighlighted' ];

    function p6(m, c0, i0, l0) {
        return cmpSN("suggest", selectNametest('mod', c0, [])) && simpleBoolean('emailHighlighted', c0);
    }

    var j126 = [ 0, 'user', 2, p6, 0, 'email' ];

    var j127 = [ 1, 1, 0, 'emailHighlighted' ];

    var j128 = [ 0, 'toggler' ];

    var j129 = [ 0, 'leftText' ];

    var j130 = [ 0, 'rightText' ];

    // match .* : nb-main-attrs
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j14, c0), 'nb-attrs', a0)
        r0 += m.a(m, selectNametest('*', c0, []), 'nb-attrs', a0)
        if (simpleBoolean('id', c0)) {
            a0.a[ "id" ] = new yr.scalarAttr(simpleScalar('id', c0));
        }
        var r1 = '';
        var a1 = { a: {} };
        var items0 = selectNametest('class', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r1 += " " + nodeset2scalar( ( m.s(j14, c1) ) );
        }
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(r1);
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(r1);
        }
        if (simpleBoolean('mixin-nb', c0)) {
            var r1 = '';
            var a1 = { a: {} };
            var items0 = selectNametest('mixin-nb', c0, []);
            for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                var c1 = items0[ i1 ];
                r1 += " " + nodeset2scalar( ( m.s(j14, c1) ) );
            }
            var tmp0 = a0.a[ "data-nb" ];
            if (tmp0) {
                a0.a[ "data-nb" ] = tmp0.addscalar(r1);
            } else {
                a0.a[ "data-nb" ] = new yr.scalarAttr(r1);
            }
        }
        var items0 = m.s(j30, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ "data-nb-" + ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j14, c1) ));
        }
        var items0 = m.s(j31, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j14, c1) ));
        }

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    // match .* : nb-main-content
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j14, c0), 'nb-content', a0)

        return r0;
    };
    M.t1.j = j0;
    M.t1.a = 0;

    // match .ico : nb
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<img";
        a0.a = {
            'src': new yr.scalarAttr("//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif")
        };
        a0.s = 'img';
        var r1 = '';
        var a1 = { a: {} };
        r1 += "nb-icon nb-";
        r1 += simpleScalar('size', c0);
        if (!(cmpSN("", selectNametest('icon', c0, [])))) {
            r1 += "-";
            r1 += simpleScalar('icon', c0);
        }
        r1 += "-icon";
        a0.a[ "class" ] = new yr.scalarAttr(r1);
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += '';

        return r0;
    };
    M.t2.j = j32;
    M.t2.a = 0;

    // match .button : nb
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<button";
        a0.a = {
        };
        a0.s = 'button';
        m.f('f5', c0, i0, l0, a0, "button");
        m.f('f7', c0, i0, l0, a0);
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-button-content" + "\">";
        if (simpleBoolean('icon', c0)) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = yr.nodeset2data(selectNametest('icon', c0, []));

                return r0;
            })()));
        }
        r0 += m.f('f6', c0, i0, l0, a0);
        r0 += "</span>";
        r0 += "</button>";

        return r0;
    };
    M.t3.j = j33;
    M.t3.a = 0;

    // match .buttonLink : nb
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
        };
        a0.s = 'a';
        m.f('f5', c0, i0, l0, a0, "link");
        m.f('f7', c0, i0, l0, a0);
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-button-content" + "\">";
        if (simpleBoolean('icon', c0)) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = yr.nodeset2data(selectNametest('icon', c0, []));

                return r0;
            })()));
        }
        r0 += m.f('f6', c0, i0, l0, a0);
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };
    M.t4.j = j34;
    M.t4.a = 0;

    // match .buttonSpan : nb
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
        };
        a0.s = 'span';
        m.f('f5', c0, i0, l0, a0, "span");
        m.f('f7', c0, i0, l0, a0);
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-button-content" + "\">";
        if (simpleBoolean('icon', c0)) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = yr.nodeset2data(selectNametest('icon', c0, []));

                return r0;
            })()));
        }
        r0 += m.f('f6', c0, i0, l0, a0);
        r0 += "</span>";
        r0 += "</span>";

        return r0;
    };
    M.t5.j = j35;
    M.t5.a = 0;

    // match .buttonLabel : nb
    M.t6 = function t6(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
        };
        a0.s = 'label';
        m.f('f5', c0, i0, l0, a0, "label");
        m.f('f7', c0, i0, l0, a0);
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-button-content" + "\">";
        if (simpleBoolean('icon', c0)) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = yr.nodeset2data(selectNametest('icon', c0, []));

                return r0;
            })()));
        }
        r0 += m.f('f6', c0, i0, l0, a0);
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t6.j = j36;
    M.t6.a = 0;

    // match .buttonAttach : nb
    M.t7 = function t7(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
        };
        a0.s = 'label';
        m.f('f5', c0, i0, l0, a0, "attach");
        m.f('f7', c0, i0, l0, a0);
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-file-intruder" + "\">";
        r0 += "<span class=\"" + "_nb-file-intruder-inner" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("_nb-file-intruder-input"),
            'type': new yr.scalarAttr("file")
        };
        a0.s = 'input';
        if (nodeset2boolean( m.s(j38, c0) ) || simpleBoolean('multiple', c0)) {
            a0.a[ "multiple" ] = new yr.scalarAttr("multiple");
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (nodeset2boolean( m.s(j7, c0) )) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( ( m.s(j7, c0) ) ));
        }
        if (nodeset2boolean( m.s(j40, c0) )) {
            var tmp0 = a0.a[ "title" ];
            if (tmp0) {
                a0.a[ "title" ] = tmp0.addscalar(nodeset2scalar( ( m.s(j40, c0) ) ));
            } else {
                a0.a[ "title" ] = new yr.scalarAttr(nodeset2scalar( ( m.s(j40, c0) ) ));
            }
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<span class=\"" + "_nb-file-intruder-focus" + "\"></span>";
        r0 += "</span>";
        r0 += "</span>";
        r0 += "<span class=\"" + "_nb-button-content" + "\">";
        if (simpleBoolean('icon', c0)) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = yr.nodeset2data(selectNametest('icon', c0, []));

                return r0;
            })()));
        }
        r0 += m.f('f6', c0, i0, l0, a0);
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t7.j = j37;
    M.t7.a = 0;

    // match .popupMenu : nb
    M.t8 = function t8(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-popup _nb-popup _init")
        };
        a0.s = 'div';
        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("popup");
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-hidden");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-hidden");
            }
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('tail', c0)) {
            a0.a[ "data-nb-tail" ] = new yr.scalarAttr(simpleScalar('tail', c0));
        }
        r0 += closeAttrs(a0);
        r0 += "<ul class=\"" + "_nb-popup-menu" + "\">";
        var items0 = selectNametest('menu', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (simpleBoolean('separator', c1)) {
                r0 += "<li class=\"" + "_nb-popup-separator" + "\"></li>";
            } else {
                r0 += "<li class=\"" + "_nb-popup-line" + "\">";
                r0 += "<a";
                a0.a = {
                    'class': new yr.scalarAttr("_nb-popup-link")
                };
                a0.s = 'a';
                if (simpleBoolean('href', c1)) {
                    a0.a[ "href" ] = new yr.scalarAttr(simpleScalar('href', c1));
                }
                r0 += m.a(m, m.s(j14, c1), 'nb-main-attrs', a0)
                r0 += closeAttrs(a0);
                r0 += simpleScalar('content', c1);
                r0 += "</a>";
                r0 += "</li>";
            }
        }
        r0 += "</ul>";
        r0 += "</div>";

        return r0;
    };
    M.t8.j = j41;
    M.t8.a = 0;

    // match .popup : nb
    M.t9 = function t9(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-popup _nb-popup _init _nb-is-hidden"),
            'data-nb': new yr.scalarAttr("popup")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('tail', c0)) {
            a0.a[ "data-nb-tail" ] = new yr.scalarAttr(simpleScalar('tail', c0));
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('titleContent', c0)) {
            r0 += m.f('f12', c0, i0, l0, a0, selectNametest('titleContent', c0, []));
        }
        if (simpleBoolean('content', c0)) {
            r0 += m.f('f11', c0, i0, l0, a0, selectNametest('content', c0, []));
        }
        r0 += "</div>";

        return r0;
    };
    M.t9.j = j45;
    M.t9.a = 0;

    // match .modalPopup : nb
    M.t10 = function t10(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if (simpleBoolean('static', c0)) {
            r0 += m.f('f21', c0, i0, l0, a0);
        }
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "popup";
            r0[ "theme" ] = yr.nodeset2data(selectNametest('theme', c0, []));
            r0[ "type" ] = "modal";

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _nb-popup");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _nb-popup");
        }
        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("popup");
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-hidden");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-hidden");
            }
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "_nb-popup-i" + "\">";
        if (simpleBoolean('close', c0)) {
            r0 += "<a";
            a0.a = {
                'class': new yr.scalarAttr("_nb-popup-close")
            };
            a0.s = 'a';
            var r1 = '';
            var a1 = { a: {} };
            var items0 = m.s(j49, c0);
            for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                var c1 = items0[ i1 ];
                r1 += " " + nodeset2scalar( ( m.s(j14, c1) ) );
            }
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(r1);
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(r1);
            }
            if (nodeset2boolean( m.s(j50, c0) )) {
                var items0 = m.s(j51, c0);
                for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                    var c1 = items0[ i1 ];
                    a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j14, c1) ));
                }
            }
            r0 += closeAttrs(a0);
            r0 += "</a>";
        }
        if (simpleBoolean('titleContent', c0)) {
            r0 += m.f('f12', c0, i0, l0, a0, selectNametest('titleContent', c0, []));
        }
        if (simpleBoolean('content', c0)) {
            r0 += m.f('f11', c0, i0, l0, a0, selectNametest('content', c0, []));
        }
        if (simpleBoolean('buttons', c0)) {
            r0 += m.f('f13', c0, i0, l0, a0, selectNametest('buttons', c0, []));
        }
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t10.j = j47;
    M.t10.a = 0;

    // match .radio-button : nb
    M.t11 = function t11(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "radio-button";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            r0[ "theme" ] = yr.nodeset2data(selectNametest('theme', c0, []));

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-group");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-group");
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        var items0 = selectNametest('group', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            //  var uniq : scalar
            var v113 = "nb-radio-button_" + ( (yr.externals['_nb-uniq'])() );

            r0 += "<span class=\"" + "_nb-radio-button-button nb-complex-group-item" + "\">";
            r0 += "<input";
            a0.a = {
                'class': new yr.scalarAttr("_nb-radio-button-radio"),
                'type': new yr.scalarAttr("radio"),
                'name': new yr.scalarAttr(nodeset2scalar( ( m.s(j55, c1) ) )),
                'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c1, []) ) )),
                'id': new yr.scalarAttr(( v113 ))
            };
            a0.s = 'input';
            if (simpleBoolean('checked', c1)) {
                a0.a[ "checked" ] = new yr.scalarAttr("checked");
            }
            if (simpleBoolean('disabled', c1)) {
                a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
            }
            if ((simpleBoolean('tabindex', c1) && !simpleBoolean('disabled', c1))) {
                a0.a[ "tabindex" ] = new yr.scalarAttr(simpleScalar('tabindex', c1));
            }
            if (simpleBoolean('name', c1)) {
                a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c1));
            }
            if (nodeset2boolean( m.s(j7, c1) )) {
                a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( m.s(j7, c1) ));
            }
            r0 += closeAttrs(a0);
            r0 += '';
            r0 += m.f('f4', c1, i1, l1, a0, (yr.externals['_nb-extend'])(m.s(j14, c1), yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                var r1 = [];
                var a1 = { a: {} };
                r1.push("nb-complex-group-item-subject");
                r1.push("js-button");
                r0[ "class" ] = r1;
                r0[ "type" ] = "label";
                r0[ "static" ] = true;
                r0[ "id" ] = false;
                r0[ "size" ] = yr.nodeset2data(m.s(j57, c1));
                var r1 = {};
                var a1 = { a: {} };
                r1[ "for" ] = v113;
                r1[ "data-value" ] = yr.nodeset2data(selectNametest('value', c1, []));
                r0[ "attrs" ] = r1;

                return r0;
            })())));
            r0 += "</span>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t11.j = j53;
    M.t11.a = 0;

    // match .select : nb
    M.t12 = function t12(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var isSelected : boolean
        var v114 = ( m.s(j59, c0) ).length > 0;

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'data-nb-direction': new yr.scalarAttr(nodeset2scalar( ( selectNametest('direction', c0, []) ) )),
            'data-nb': new yr.scalarAttr("select"),
            'tabindex': new yr.scalarAttr("0")
        };
        a0.s = 'span';
        m.f('f5', c0, i0, l0, a0, "span");
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-select _init _nb-select-button");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-select _init _nb-select-button");
        }
        if (cmpSN("s", selectNametest('size', c0, []))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-small-normal-select");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-small-normal-select");
            }
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('within', c0)) {
            a0.a[ "data-nb-within" ] = new yr.scalarAttr(simpleScalar('within', c0));
        }
        if (simpleBoolean('appendto', c0)) {
            a0.a[ "data-nb-appendto" ] = new yr.scalarAttr(simpleScalar('appendto', c0));
        }
        if ((simpleBoolean('tabindex', c0) && !simpleBoolean('disabled', c0))) {
            a0.a[ "tabindex" ] = new yr.scalarAttr(simpleScalar('tabindex', c0));
        }
        if (simpleBoolean('maxHeight', c0)) {
            a0.a[ "data-nb-maxheight" ] = new yr.scalarAttr(simpleScalar('maxHeight', c0));
        }
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-button-content" + "\">";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((v114 && simpleBoolean('selected', c1)) || (!v114 && i1 == 0)) {
                r0 += nodeset2xml( selectNametest('text', c1, []) );
            }
        }
        r0 += "</span>";
        r0 += "<span class=\"" + "_nb-select-helper" + "\"></span>";
        r0 += "<select";
        a0.a = {
            'class': new yr.scalarAttr("_nb-select-fallback")
        };
        a0.s = 'select';
        if (nodeset2boolean( (selectNametest('disabled', c0, [])) )) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (nodeset2boolean( m.s(j7, c0) )) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( m.s(j7, c0) ));
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-select-options', a0)
        r0 += closeAttrs(a0);
        r0 += "</select>";
        r0 += "<span";
        a0.a = {
        };
        a0.s = 'span';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "select-dropdown";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            r0[ "theme" ] = yr.nodeset2data(selectNametest('theme', c0, []));

            return r0;
        })()));
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</span>";

        return r0;
    };
    M.t12.j = j58;
    M.t12.a = 0;

    // match / | .select : nb-select-options
    M.t13 = function t13(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (simpleBoolean('group', c1)) {
                r0 += "<optgroup label=\"" + nodeset2attrvalue( ( selectNametest('text', c1, []) ) ) + "\" data-nb-type=\"" + nodeset2attrvalue( ( selectNametest('type', c1, []) ) ) + "\">";
                var items1 = selectNametest('group', c1, []);
                for (var i2 = 0, l2 = items1.length; i2 < l2; i2++) {
                    var c2 = items1[ i2 ];
                    r0 += m.f('f16', c2, i2, l2, a0, m.s(j14, c2));
                }
                r0 += "</optgroup>";
            } else {
                r0 += m.f('f16', c1, i1, l1, a0, m.s(j14, c1));
            }
        }

        return r0;
    };
    M.t13.s = [ 1, j58 ];
    M.t13.a = [ 1, 0 ];

    // match .checkbox : nb
    M.t14 = function t14(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var uniq : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (simpleBoolean('id', c0)) {
            r1 += simpleScalar('id', c0);
        } else {
            r1 += (yr.externals['_nb-uniq'])();
        }
        var v115 = r1;

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'data-nb': new yr.scalarAttr("checkbox"),
            'for': new yr.scalarAttr("nb-checkbox_" + ( v115 ))
        };
        a0.s = 'label';
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "checkbox";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            if (simpleBoolean('type', c0)) {
                r0[ "type" ] = yr.nodeset2data(selectNametest('type', c0, []));
            }

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("_nb-checkbox-input"),
            'id': new yr.scalarAttr("nb-checkbox_" + ( v115 ))
        };
        a0.s = 'input';
        if (cmpSN("button", selectNametest('type', c0, []))) {
            a0.a[ "type" ] = new yr.scalarAttr("checkbox");
        } else {
            a0.a[ "type" ] = new yr.scalarAttr(simpleScalar('type', c0));
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if ((simpleBoolean('tabindex', c0) && !simpleBoolean('disabled', c0))) {
            a0.a[ "tabindex" ] = new yr.scalarAttr(simpleScalar('tabindex', c0));
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (simpleBoolean('checked', c0)) {
            a0.a[ "checked" ] = new yr.scalarAttr("checked");
        }
        if (( selectNametest('value', c0, []) ).length) {
            a0.a[ "value" ] = new yr.scalarAttr(simpleScalar('value', c0));
        }
        r0 += closeAttrs(a0);
        r0 += '';
        if (cmpSN("button", selectNametest('type', c0, []))) {
            r0 += m.f('f4', c0, i0, l0, a0, (yr.externals['_nb-extend'])(m.s(j14, c0), yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "type" ] = "inline";
                r0[ "static" ] = true;
                r0[ "id" ] = false;
                r0[ "attrs" ] = false;
                var r1 = [];
                var a1 = { a: {} };
                r1.push("_nb-checkbox-label");
                r0[ "class" ] = r1;

                return r0;
            })())));
        } else {
            r0 += "<span";
            a0.a = {
                'class': new yr.scalarAttr("_nb-checkbox-flag ")
            };
            a0.s = 'span';
            if (cmpSN("checkbox", selectNametest('type', c0, []))) {
                var tmp0 = a0.a[ "class" ];
                if (tmp0) {
                    a0.a[ "class" ] = tmp0.addscalar("_nb-checkbox-normal-flag");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr("_nb-checkbox-normal-flag");
                }
            } else if (simpleBoolean('type', c0)) {
                var tmp0 = a0.a[ "class" ];
                if (tmp0) {
                    a0.a[ "class" ] = tmp0.addscalar("_nb-checkbox-" + nodeset2scalar( ( selectNametest('type', c0, []) ) ) + "-flag");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr("_nb-checkbox-" + nodeset2scalar( ( selectNametest('type', c0, []) ) ) + "-flag");
                }
            }
            r0 += closeAttrs(a0);
            r0 += "<span class=\"" + "_nb-checkbox-flag-icon" + "\"></span>";
            r0 += "</span>";
            r0 += "<span class=\"" + "_nb-checkbox-label" + "\">";
            if (nodeset2boolean( (selectNametest('content', c0, [])) )) {
                r0 += simpleScalar('content', c0);
            }
            r0 += "</span>";
        }
        r0 += "</label>";

        return r0;
    };
    M.t14.j = j66;
    M.t14.a = 0;

    // match .input : nb
    M.t15 = function t15(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var errorId : scalar
        var v116 = "nb-input_error" + (yr.externals['_nb-uniq'])();

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
        };
        a0.s = 'label';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "input";
            if (simpleBoolean('size', c0)) {
                r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            }
            r0[ "type" ] = "complex";

            return r0;
        })()));
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("input");
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        if (simpleBoolean('ghost', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-ghost");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-ghost");
            }
            a0.a[ "data-nb-ghost" ] = new yr.scalarAttr("true");
        }
        if (simpleBoolean('error', c0)) {
            a0.a[ "data-nb-error" ] = new yr.scalarAttr("{ \"id\": \"" + ( v116 ) + "\", \"direction\":\"" + nodeset2scalar( ( m.s(j68, c0) ) ) + "\"}");
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('hint', c0) && !(cmpSN("", m.s(j69, c0)))) {
            r0 += "<span class=\"" + "_nb-input-hint" + "\">";
            r0 += "<span class=\"" + "_nb-input-hint-inner" + "\">";
            if (nodeset2boolean( m.s(j70, c0) )) {
                r0 += "<span class=\"" + "_nb-input-hint-ghost" + "\"></span>";
                r0 += "<span class=\"" + "_nb-input-hint-content" + "\">";
                r0 += nodeset2xml( m.s(j69, c0) );
                r0 += "</span>";
            } else {
                r0 += nodeset2xml( selectNametest('hint', c0, []) );
            }
            r0 += "</span>";
            r0 += "</span>";
        }
        if (simpleBoolean('error', c0)) {
            r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "class" ] = "_nb-error-popup";
                r0[ "content" ] = yr.nodeset2data(m.s(j71, c0));
                r0[ "id" ] = v116;

                return r0;
            })()));
        }
        if (simpleBoolean('reset', c0)) {
            r0 += "<span class=\"" + "_nb-input-reset" + "\"></span>";
        }
        if (simpleBoolean('leftContent', c0)) {
            r0 += "<span class=\"" + "_nb-input-left" + "\">";
            r0 += simpleScalar('leftContent', c0);
            r0 += "</span>";
        }
        if (simpleBoolean('rightContent', c0)) {
            r0 += "<span class=\"" + "_nb-input-right" + "\">";
            r0 += simpleScalar('rightContent', c0);
            r0 += "</span>";
        }
        r0 += "<span class=\"" + "_nb-input-content" + "\">";
        r0 += "<input";
        a0.a = {
            'type': new yr.scalarAttr("text"),
            'class': new yr.scalarAttr("_nb-input-controller"),
            'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('content', c0, []) ) ))
        };
        a0.s = 'input';
        var items0 = m.s(j31, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j14, c1) ));
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if ((simpleBoolean('tabindex', c0) && !simpleBoolean('disabled', c0))) {
            a0.a[ "tabindex" ] = new yr.scalarAttr(simpleScalar('tabindex', c0));
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<span class=\"" + "_nb-input-view" + "\">" + " " + "</span>";
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t15.j = j67;
    M.t15.a = 0;

    // match .textarea : nb
    M.t16 = function t16(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var errorId : scalar
        var v117 = "nb-input_error" + (yr.externals['_nb-uniq'])();

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
        };
        a0.s = 'label';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "input";
            if (simpleBoolean('size', c0)) {
                r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            }
            r0[ "type" ] = "complex";

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("input");
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        if (simpleBoolean('ghost', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-ghost _init");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-ghost _init");
            }
            a0.a[ "data-nb-ghost" ] = new yr.scalarAttr("true");
        }
        if (simpleBoolean('error', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _init");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _init");
            }
            a0.a[ "data-nb-error" ] = new yr.scalarAttr("{ \"id\": \"" + ( v117 ) + "\", \"direction\":\"" + nodeset2scalar( ( m.s(j68, c0) ) ) + "\" }");
            r0 += closeAttrs(a0);
            r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "class" ] = "_nb-error-popup";
                r0[ "content" ] = yr.nodeset2data(m.s(j71, c0));
                r0[ "id" ] = v117;

                return r0;
            })()));
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('reset', c0)) {
            r0 += "<span class=\"" + "_nb-input-reset" + "\"></span>";
        }
        if (simpleBoolean('leftContent', c0)) {
            r0 += "<span class=\"" + "_nb-input-left" + "\">";
            r0 += simpleScalar('leftContent', c0);
            r0 += "</span>";
        }
        if (simpleBoolean('rightContent', c0)) {
            r0 += "<span class=\"" + "_nb-input-right" + "\">";
            r0 += simpleScalar('rightContent', c0);
            r0 += "</span>";
        }
        r0 += "<span class=\"" + "_nb-input-content" + "\">";
        r0 += "<textarea";
        a0.a = {
            'class': new yr.scalarAttr("_nb-input-controller")
        };
        a0.s = 'textarea';
        var items0 = m.s(j31, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j14, c1) ));
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if ((simpleBoolean('tabindex', c0) && !simpleBoolean('disabled', c0))) {
            a0.a[ "tabindex" ] = new yr.scalarAttr(simpleScalar('tabindex', c0));
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</textarea>";
        r0 += "<span class=\"" + "_nb-input-view" + "\">" + " " + "</span>";
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t16.j = j72;
    M.t16.a = 0;

    // match .inputSimple : nb
    M.t17 = function t17(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<input";
        a0.a = {
            'type': new yr.scalarAttr("text"),
            'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('content', c0, []) ) )),
            'data-nb-type': new yr.scalarAttr("simple")
        };
        a0.s = 'input';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "input";
            if (simpleBoolean('size', c0)) {
                r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            }
            r0[ "type" ] = "simple";

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if ((simpleBoolean('tabindex', c0) && !simpleBoolean('disabled', c0))) {
            a0.a[ "tabindex" ] = new yr.scalarAttr(simpleScalar('tabindex', c0));
        }
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("input");
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        r0 += closeAttrs(a0);
        r0 += '';

        return r0;
    };
    M.t17.j = j73;
    M.t17.a = 0;

    // match .textareaSimple : nb
    M.t18 = function t18(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<textarea";
        a0.a = {
            'data-nb-type': new yr.scalarAttr("simple")
        };
        a0.s = 'textarea';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "input";
            if (simpleBoolean('size', c0)) {
                r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            }
            r0[ "type" ] = "simple";

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if ((simpleBoolean('tabindex', c0) && !simpleBoolean('disabled', c0))) {
            a0.a[ "tabindex" ] = new yr.scalarAttr(simpleScalar('tabindex', c0));
        }
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("input");
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</textarea>";

        return r0;
    };
    M.t18.j = j74;
    M.t18.a = 0;

    // match .input-group : nb
    M.t19 = function t19(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-input-group"),
            'data-nb': new yr.scalarAttr("input-group")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        r0 += closeAttrs(a0);
        var items0 = selectNametest('*', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (c1.name == "button") {
                r0 += m.f('f4', c1, i1, l1, a0, m.s(j14, c1));
            } else if (c1.name == "input") {
                r0 += m.f('f18', c1, i1, l1, a0, m.s(j14, c1));
            }
        }
        r0 += "</div>";

        return r0;
    };
    M.t19.j = j75;
    M.t19.a = 0;

    // match .progress : nb
    M.t20 = function t20(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'data-nb': new yr.scalarAttr("progress"),
            'data-nb-type': new yr.scalarAttr(nodeset2scalar( ( selectNametest('type', c0, []) ) ))
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "progress";
            r0[ "type" ] = yr.nodeset2data(selectNametest('type', c0, []));

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('bar', c0)) {
            r0 += "<div class=\"" + "_nb-progress-bar js-bar" + "\" style=\"" + "width: " + nodeset2attrvalue( ( selectNametest('start', c0, []) ) ) + "%" + "\"></div>";
        }
        if (simpleBoolean('title', c0)) {
            r0 += "<div class=\"" + "_nb-progress-title js-title" + "\">";
            if (cmpSN("percentage", selectNametest('type', c0, []))) {
                r0 += scalar2xml( simpleScalar('start', c0) + "%" );
            } else {
                r0 += nodeset2xml( selectNametest('title', c0, []) );
            }
            r0 += "</div>";
        }
        r0 += "<input type=\"" + "hidden" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('start', c0, []) ) ) + "%" + "\"/>";
        r0 += "</div>";

        return r0;
    };
    M.t20.j = j76;
    M.t20.a = 0;

    // match .paranja : nb
    M.t21 = function t21(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "paranja";
            r0[ "theme" ] = yr.nodeset2data(selectNametest('theme', c0, []));

            return r0;
        })()));
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</div>";

        return r0;
    };
    M.t21.j = j80;
    M.t21.a = 0;

    // match .island : nb
    M.t22 = function t22(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var type : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (simpleBoolean('type', c0)) {
            r1 += "-" + simpleScalar('type', c0);
        } else {
            r1 += "";
        }
        var v118 = r1;

        //  var padding : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (cmpSN("s", selectNametest('padding', c0, []))) {
            r1 += "-small";
        } else if (cmpSN("l", selectNametest('padding', c0, []))) {
            r1 += "-large";
        } else if (cmpSN("m", selectNametest('padding', c0, []))) {
            r1 += "";
        }
        var v119 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar("nb-island _nb" + ( v119 ) + ( v118 ) + "-island");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr("nb-island _nb" + ( v119 ) + ( v118 ) + "-island");
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</div>";

        return r0;
    };
    M.t22.j = j81;
    M.t22.a = 0;

    // match .dropzone : nb
    M.t23 = function t23(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "dropzone";
            r0[ "type" ] = yr.nodeset2data(selectNametest('type', c0, []));

            return r0;
        })()));
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('head', c0)) {
            r0 += "<div class=\"" + "_nb-dropzone-head" + "\">";
            r0 += nodeset2xml( selectNametest('head', c0, []) );
            r0 += "</div>";
        }
        if (simpleBoolean('content', c0)) {
            r0 += "<div class=\"" + "_nb-dropzone-text" + "\">";
            if (simpleBoolean('content', c0)) {
                r0 += simpleScalar('content', c0);
            }
            if (!(cmpSN("false", selectNametest('button', c0, [])))) {
                r0 += m.f('f4', c0, i0, l0, a0, selectNametest('button', c0, []));
            }
            r0 += "</div>";
        }
        if (cmpSN("modal", selectNametest('type', c0, []))) {
            r0 += "<div class=\"" + "_nb-dropzone-cover" + "\"></div>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t23.j = j83;
    M.t23.a = 0;

    // match .loader : nb
    M.t24 = function t24(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
        };
        a0.s = 'span';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "loader";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));

            return r0;
        })()));
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("_nb-loader-spinner")
        };
        a0.s = 'span';
        if (simpleBoolean('color', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-loader-" + nodeset2scalar( ( selectNametest('color', c0, []) ) ) + "-spinner");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-loader-" + nodeset2scalar( ( selectNametest('color', c0, []) ) ) + "-spinner");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</span>";

        return r0;
    };
    M.t24.j = j85;
    M.t24.a = 0;

    // match .slider : nb
    M.t25 = function t25(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "slider";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init _nb-" + nodeset2scalar( ( selectNametest('orientation', c0, []) ) ) + "-slider _nb-slider-" + nodeset2scalar( ( selectNametest('type', c0, []) ) ) + "-handle");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init _nb-" + nodeset2scalar( ( selectNametest('orientation', c0, []) ) ) + "-slider _nb-slider-" + nodeset2scalar( ( selectNametest('type', c0, []) ) ) + "-handle");
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        a0.a[ "data-nb-value" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c0, []) ) ));
        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("slider");
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "_nb-slider-body _nb-slider-" + nodeset2attrvalue( ( selectNametest('type', c0, []) ) ) + "-body" + "\">";
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("ui-slider-handle")
        };
        a0.s = 'label';
        if (cmpSN("s", selectNametest('size', c0, []))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-slider-small-handle");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-slider-small-handle");
            }
        } else {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-slider-handle");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-slider-handle");
            }
        }
        if (nodeset2boolean( m.s(j89, c0) )) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" " + nodeset2scalar( ( m.s(j89, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" " + nodeset2scalar( ( m.s(j89, c0) ) ));
            }
        }
        if ((simpleBoolean('tabindex', c0) && !simpleBoolean('disabled', c0))) {
            a0.a[ "tabindex" ] = new yr.scalarAttr(simpleScalar('tabindex', c0));
        }
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-button-content" + "\">";
        r0 += "<input";
        a0.a = {
            'tabindex': new yr.scalarAttr("-1"),
            'class': new yr.scalarAttr("_nb-slider-fallback"),
            'type': new yr.scalarAttr("text"),
            'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c0, []) ) )),
            'readonly': new yr.scalarAttr("readonly")
        };
        a0.s = 'input';
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('name', c0, []) ) ));
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "</span>";
        r0 += "</label>";
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t25.j = j87;
    M.t25.a = 0;

    // match .tabs : nb
    M.t26 = function t26(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var prefix : scalar
        var v120 = "tabs-" + ( (yr.externals['_nb-uniq'])() );

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'data-nb': new yr.scalarAttr("tabs")
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "tabs";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            if (simpleBoolean('rise', c0)) {
                r0[ "type" ] = "rise-" + simpleScalar('rise', c0);
            }

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<ul class=\"" + "_nb-tabs-tabs" + "\">";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<li";
            a0.a = {
                'class': new yr.scalarAttr("_nb-tabs-tab")
            };
            a0.s = 'li';
            if (simpleBoolean('active', c1)) {
                var tmp1 = a0.a[ "class" ];
                if (tmp1) {
                    a0.a[ "class" ] = tmp1.addscalar(" ui-tabs-active");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr(" ui-tabs-active");
                }
            }
            r0 += closeAttrs(a0);
            r0 += "<a class=\"" + "_nb-tabs-link _link" + "\" href=\"" + "#" + scalar2attrvalue( ( v120 ) ) + "-" + scalar2attrvalue( ( i1 ) ) + "\">";
            r0 += nodeset2xml( selectNametest('title', c1, []) );
            r0 += "</a>";
            r0 += "</li>";
        }
        r0 += "</ul>";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<div class=\"" + "_nb-tabs-panel" + "\" id=\"" + scalar2attrvalue( ( v120 ) ) + "-" + scalar2attrvalue( ( i1 ) ) + "\">";
            if (simpleBoolean('content', c1)) {
                r0 += simpleScalar('content', c1);
            }
            r0 += "</div>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t26.j = j90;
    M.t26.a = 0;

    // match .arrow : nb
    M.t27 = function t27(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var input-label : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (simpleBoolean('text', c0)) {
            r1 += "<a href=\"" + simpleScalar('href', c0) + "\" class=\"_nb-search-arrow-label\">" + simpleScalar('text', c0) + "</a>";
        } else {
            r1 += "";
        }
        var v121 = r1;

        //  var input-requests : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (simpleBoolean('requests', c0)) {
            r1 += " — " + simpleScalar('requests', c0);
        } else {
            r1 += "";
        }
        var v122 = r1;

        r0 += closeAttrs(a0);
        r0 += "<form";
        a0.a = {
            'class': new yr.scalarAttr("nb-arrow _nb-search-arrow")
        };
        a0.s = 'form';
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-arrow-tail" + "\"></span>";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "class" ] = "_nb-search-arrow-button";
            r0[ "tabindex" ] = yr.nodeset2data(selectNametest('buttonTabindex', c0, []));
            r0[ "content" ] = yr.nodeset2data(selectNametest('buttonContent', c0, []));
            var r1 = {};
            var a1 = { a: {} };
            r1[ "type" ] = "submit";
            r0[ "attrs" ] = r1;

            return r0;
        })()));
        r0 += "<div class=\"" + "_nb-search-arrow-content" + "\">";
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "class" ] = "_nb-search-arrow-input";
            r0[ "tabindex" ] = yr.nodeset2data(selectNametest('inputTabindex', c0, []));
            r0[ "leftContent" ] = v121;
            var r1 = {};
            var a1 = { a: {} };
            r1[ "autocomplete" ] = "off";
            r1[ "value" ] = yr.nodeset2data(selectNametest('value', c0, []));
            r1[ "name" ] = "text";
            r0[ "attrs" ] = r1;
            var r1 = {};
            var a1 = { a: {} };
            r1[ "text" ] = v122;
            r1[ "ghost" ] = true;
            r0[ "hint" ] = r1;

            return r0;
        })()));
        r0 += "</div>";
        r0 += "</form>";

        return r0;
    };
    M.t27.j = j93;
    M.t27.a = 0;

    // match .arrow[ .search != "true" ] : nb
    M.t28 = function t28(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("_nb-service-arrow")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-arrow-tail" + "\"></span>";
        r0 += nodeset2xml( selectNametest('text', c0, []) );
        r0 += "</div>";

        return r0;
    };
    M.t28.j = j99;
    M.t28.a = 0;

    // match .arrow[ .search != "true" ][ .href ] : nb
    M.t29 = function t29(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
            'href': new yr.scalarAttr(nodeset2scalar( ( selectNametest('href', c0, []) ) )),
            'class': new yr.scalarAttr("_nb-service-arrow")
        };
        a0.s = 'a';
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-arrow-tail" + "\"></span>";
        r0 += nodeset2xml( selectNametest('text', c0, []) );
        r0 += "</a>";

        return r0;
    };
    M.t29.j = j100;
    M.t29.a = 0;

    // match .header : nb
    M.t30 = function t30(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-header _init"),
            'data-nb': new yr.scalarAttr("header")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "_nb-header-actions" + "\">";
        if (cmpSN("true", selectNametest('settings', c0, []))) {
            r0 += "<div class=\"" + "_nb-header-button" + "\">";
            r0 += "<div class=\"" + "_nb-header-button-icon" + "\">";
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "settings";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += "</div>";
            r0 += "</div>";
        }
        if (cmpSN("true", selectNametest('services', c0, []))) {
            r0 += "<div class=\"" + "_nb-header-button" + "\">";
            r0 += "<div class=\"" + "_nb-header-button-icon" + "\">";
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "services";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += "</div>";
            r0 += "</div>";
        }
        if (simpleBoolean('user', c0)) {
            r0 += m.f('f29', c0, i0, l0, a0, selectNametest('user', c0, []));
        }
        r0 += "</div>";
        r0 += "<div class=\"" + "_nb-header-main" + "\">";
        r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('yaHref', c0, []) ) ) + "\" class=\"" + "_nb-header-logo" + "\"></a>";
        r0 += m.f('f27', c0, i0, l0, a0, selectNametest('arrow', c0, []));
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t30.j = j101;
    M.t30.a = 0;

    // match .user : nb
    M.t31 = function t31(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
        };
        a0.s = 'span';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "user";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        if (simpleBoolean('justify', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-user_justify");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-user_justify");
            }
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        if (!simpleBoolean('rightToLeft', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-user_ltr");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-user_ltr");
            }
            r0 += m.a(m, m.s(j14, c0), 'nb-user-pic', a0)
            r0 += m.a(m, m.s(j14, c0), 'nb-user-name', a0)
        } else {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-user_rtl");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-user_rtl");
            }
            r0 += m.a(m, m.s(j14, c0), 'nb-user-name', a0)
            r0 += m.a(m, m.s(j14, c0), 'nb-user-pic', a0)
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";

        return r0;
    };
    M.t31.j = j104;
    M.t31.a = 0;

    // match .user : nb-user-pic
    M.t32 = function t32(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
        };
        a0.s = 'span';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "user-avatar";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));

            return r0;
        })()));
        if (simpleBoolean('userpic', c0)) {
            var tmp0 = a0.a[ "style" ];
            if (tmp0) {
                a0.a[ "style" ] = tmp0.addscalar(" background-image: url('" + nodeset2scalar( ( selectNametest('userpic', c0, []) ) ) + "')");
            } else {
                a0.a[ "style" ] = new yr.scalarAttr(" background-image: url('" + nodeset2scalar( ( selectNametest('userpic', c0, []) ) ) + "')");
            }
        }
        r0 += closeAttrs(a0);
        if (simpleScalar('notices', c0) > 0) {
            r0 += "<span class=\"" + "_nb-user-notice-count" + "\">";
            r0 += nodeset2xml( selectNametest('notices', c0, []) );
            r0 += "</span>";
        }
        r0 += "</span>";

        return r0;
    };
    M.t32.j = j104;
    M.t32.a = 0;

    // match .user : nb-user-name
    M.t33 = function t33(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-user-label" + "\">";
        r0 += "<span class=\"" + "_nb-user-name _link" + "\" title=\"" + nodeset2attrvalue( ( selectNametest('username', c0, []) ) ) + "\">";
        r0 += nodeset2xml( selectNametest('username', c0, []) );
        r0 += "</span>";
        if (simpleBoolean('email', c0)) {
            r0 += "<span class=\"" + "_nb-user-email" + "\" title=\"" + nodeset2attrvalue( ( selectNametest('email', c0, []) ) ) + "\">";
            r0 += nodeset2xml( selectNametest('email', c0, []) );
            r0 += "</span>";
        }
        r0 += "</span>";

        return r0;
    };
    M.t33.j = j104;
    M.t33.a = 0;

    // match .suggest : nb
    M.t34 = function t34(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-suggest _init"),
            'data-nb': new yr.scalarAttr("suggest")
        };
        a0.s = 'div';
        a0.a[ "data-countMax" ] = new yr.scalarAttr(simpleScalar('countMax', c0));
        a0.a[ "data-type" ] = new yr.scalarAttr(simpleScalar('type', c0));
        a0.a[ "data-size" ] = new yr.scalarAttr(simpleScalar('size', c0));
        a0.a[ "data-source" ] = new yr.scalarAttr(simpleScalar('source', c0));
        a0.a[ "data-highlight" ] = new yr.scalarAttr(simpleScalar('highlight', c0));
        a0.a[ "data-class-suggest" ] = new yr.scalarAttr("nb-island _nb-fly-island _nb-suggest-container _nb-" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + "-suggest");
        if (simpleBoolean('class', c0)) {
            var tmp0 = a0.a[ "data-class-suggest" ];
            if (tmp0) {
                a0.a[ "data-class-suggest" ] = tmp0.addscalar(" " + nodeset2scalar( ( selectNametest('classSuggest', c0, []) ) ));
            } else {
                a0.a[ "data-class-suggest" ] = new yr.scalarAttr(" " + nodeset2scalar( ( selectNametest('classSuggest', c0, []) ) ));
            }
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            r0[ "class" ] = "_nb-suggest-input";
            r0[ "attrs" ] = yr.nodeset2data(selectNametest('attrsInput', c0, []));
            r0[ "tabindex" ] = yr.nodeset2data(selectNametest('tabindex', c0, []));
            r0[ "disabled" ] = yr.nodeset2data(selectNametest('disabled', c0, []));
            r0[ "name" ] = yr.nodeset2data(selectNametest('name', c0, []));
            r0[ "content" ] = yr.nodeset2data(selectNametest('content', c0, []));

            return r0;
        })()));
        r0 += "</div>";

        return r0;
    };
    M.t34.j = j112;
    M.t34.a = 0;

    // match / : nb-suggest
    M.t35 = function t35(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<li class=\"" + "_nb-suggest-item" + "\">";
        r0 += "<a";
        a0.a = {
            'class': new yr.scalarAttr("_nb-suggest-item-link")
        };
        a0.s = 'a';
        r0 += m.a(m, selectNametest('item', c0, []), 'nb-suggest', a0)
        r0 += closeAttrs(a0);
        r0 += "</a>";
        r0 += "</li>";

        return r0;
    };
    M.t35.j = 1;
    M.t35.a = 1;

    // match /[ .type == "default" ].item : nb-suggest
    M.t36 = function t36(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if (simpleBoolean('labelContent', c0)) {
            r0 += simpleScalar('labelContent', c0);
        }

        return r0;
    };
    M.t36.j = j118;
    M.t36.a = 1;

    // match /[ .type == "username" ].item : nb-suggest
    M.t37 = function t37(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var user : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = yr.nodeset2data(selectNametest('size', c0.doc.root, []));
        r1[ "mod" ] = "suggest";
        var r2 = [];
        if (simpleBoolean('username', c0)) {
            r2 += yr.nodeset2data(selectNametest('username', c0, []));
        } else if (simpleBoolean('email', c0)) {
            r2 += yr.nodeset2data(selectNametest('email', c0, []));
        }
        r1[ "username" ] = r2;
        r1[ "rightToLeft" ] = true;
        if (simpleBoolean('username', c0) && simpleBoolean('email', c0)) {
            r1[ "email" ] = yr.nodeset2data(selectNametest('email', c0, []));
        }
        r1[ "justify" ] = true;
        if (simpleBoolean('userpic', c0)) {
            r1[ "userpic" ] = yr.nodeset2data(selectNametest('userpic', c0, []));
        }
        if (simpleBoolean('usernameHighlighted', c0)) {
            r1[ "usernameHighlighted" ] = yr.nodeset2data(selectNametest('usernameHighlighted', c0, []));
        }
        if (simpleBoolean('emailHighlighted', c0)) {
            r1[ "emailHighlighted" ] = yr.nodeset2data(selectNametest('emailHighlighted', c0, []));
        }
        var v123 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f29', c0, i0, l0, a0, yr.object2nodeset( v123 ));

        return r0;
    };
    M.t37.j = j119;
    M.t37.a = 1;

    // match .user[ .mod == "suggest" && .usernameHighlighted ].username : nb-user-name
    M.t38 = function t38(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2scalar( m.s(j125, c0) );

        return r0;
    };
    M.t38.j = j124;
    M.t38.a = 0;

    // match .user[ .mod == "suggest" && .emailHighlighted ].email : nb-user-name
    M.t39 = function t39(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2scalar( m.s(j127, c0) );

        return r0;
    };
    M.t39.j = j126;
    M.t39.a = 0;

    // match .toggler : nb
    M.t40 = function t40(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
            'data-nb': new yr.scalarAttr("toggler")
        };
        a0.s = 'a';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "toggler";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        r0 += m.a(m, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('checked', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-checked");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-checked");
            }
        }
        if ((simpleBoolean('tabindex', c0) && !simpleBoolean('disabled', c0))) {
            a0.a[ "tabindex" ] = new yr.scalarAttr(simpleScalar('tabindex', c0));
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<label class=\"" + "_nb-toggler-label" + "\">";
        r0 += "<input";
        a0.a = {
            'type': new yr.scalarAttr("checkbox"),
            'class': new yr.scalarAttr("_nb-toggler-checkbox")
        };
        a0.s = 'input';
        var items0 = m.s(j31, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j14, c1) ));
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (simpleBoolean('checked', c0)) {
            a0.a[ "checked" ] = new yr.scalarAttr("checked");
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "</label>";
        r0 += "<span class=\"" + "_nb-toggler-container" + "\">";
        r0 += "<span class=\"" + "_nb-toggler-sticker _nb-toggler-left-sticker" + "\">";
        r0 += "<span class=\"" + "_nb-toggler-text" + "\">";
        r0 += nodeset2xml( selectNametest('leftText', c0, []) );
        r0 += "</span>";
        r0 += "</span>";
        r0 += "<span class=\"" + "_nb-toggler-sticker _nb-toggler-right-sticker" + "\">";
        r0 += "<span class=\"" + "_nb-toggler-text" + "\">";
        r0 += nodeset2xml( selectNametest('rightText', c0, []) );
        r0 += "</span>";
        r0 += "</span>";
        r0 += "</span>";
        r0 += "<span class=\"" + "_nb-toggler-knob" + "\"></span>";
        r0 += "</a>";

        return r0;
    };
    M.t40.j = j128;
    M.t40.a = 0;

    // match /
    M.t41 = function t41(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var check : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Компактный вид";
        r1[ "class" ] = "js-toggle-compact";
        var v124 = r1;

        //  var check2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "HTML";
        r1[ "class" ] = "js-toggle-html";
        var v125 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-toggle nb-island nb-fly-island" + "\">";
        r0 += "<div class=\"" + "demo-toggle__section" + "\">";
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v124 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-toggle__section demo-toggle__section_second" + "\">";
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v125 ));
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Кнопки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f49', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Флаги";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f54', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Поля ввода";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f76', c0, i0, l0, a0);
        r0 += m.f('f77', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Классы групп";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f112', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Прогрессбары";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f62', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Острова";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f81', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Крутилки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f85', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Иконки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f88', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Слайдеры";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f92', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Cелекты";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-h5" + "\">";
        r0 += "Требует подключения JS";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f37', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Выпадающие списки";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-h5" + "\">";
        r0 += "Требует подключения JS";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f60', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Tooltips";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-h5" + "\">";
        r0 += "Требует подключения JS";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f93', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Табы";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-h5" + "\">";
        r0 += "Требует подключения JS";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f99', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Suggests";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f108', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Arrows";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f105', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Шапка";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f106', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Блок юзера";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f107', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Dropzone";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f61', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Toggler";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f109', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Gap classes";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f117', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t41.j = 1;
    M.t41.a = 1;

    M.matcher = {
        "nb-main-attrs": {
            "*": [
                "t0"
            ]
        },
        "nb-main-content": {
            "*": [
                "t1"
            ]
        },
        "nb": {
            "ico": [
                "t2"
            ],
            "button": [
                "t3"
            ],
            "buttonLink": [
                "t4"
            ],
            "buttonSpan": [
                "t5"
            ],
            "buttonLabel": [
                "t6"
            ],
            "buttonAttach": [
                "t7"
            ],
            "popupMenu": [
                "t8"
            ],
            "popup": [
                "t9"
            ],
            "modalPopup": [
                "t10"
            ],
            "radio-button": [
                "t11"
            ],
            "select": [
                "t12"
            ],
            "checkbox": [
                "t14"
            ],
            "input": [
                "t15"
            ],
            "textarea": [
                "t16"
            ],
            "inputSimple": [
                "t17"
            ],
            "textareaSimple": [
                "t18"
            ],
            "input-group": [
                "t19"
            ],
            "progress": [
                "t20"
            ],
            "paranja": [
                "t21"
            ],
            "island": [
                "t22"
            ],
            "dropzone": [
                "t23"
            ],
            "loader": [
                "t24"
            ],
            "slider": [
                "t25"
            ],
            "tabs": [
                "t26"
            ],
            "arrow": [
                "t29",
                "t28",
                "t27"
            ],
            "header": [
                "t30"
            ],
            "user": [
                "t31"
            ],
            "suggest": [
                "t34"
            ],
            "toggler": [
                "t40"
            ]
        },
        "nb-select-options": {
            "": [
                "t13"
            ],
            "select": [
                "t13"
            ]
        },
        "nb-user-pic": {
            "user": [
                "t32"
            ]
        },
        "nb-user-name": {
            "user": [
                "t33"
            ],
            "username": [
                "t38"
            ],
            "email": [
                "t39"
            ]
        },
        "nb-suggest": {
            "": [
                "t35"
            ],
            "item": [
                "t37",
                "t36"
            ]
        },
        "": {
            "": [
                "t41"
            ]
        }
    };
    M.imports = [];

    yr.register('main', M);

})();
