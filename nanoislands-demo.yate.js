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

    var j0 = [ 0, '*' ];

    // func nb-block(name, nodeset options) : xml
    M.f0 = function f0(m, c0, i0, l0, a0, v0, v1) {
        v1 = (v1 === undefined) ? [] : v1;
        var r0 = '';

        r0 += m.a(m, m.n(j0, (yr.externals['nb-wrap'])(v0, v1)), 'nb', a0)

        return r0;
    };

    // func nb-block-obj(name, object options) : xml
    M.f1 = function f1(m, c0, i0, l0, a0, v2, v3) {
        var r0 = '';

        r0 += m.a(m, m.n(j0, yr.object2nodeset( (yr.externals['nb-wrap-obj'])(v2, v3) )), 'nb', a0)

        return r0;
    };

    var j1 = [ 0, 'href' ];

    var j2 = [ 0, 'type' ];

    // func nb-button-old(nodeset options) : xml
    M.f2 = function f2(m, c0, i0, l0, a0, v4) {
        v4 = (v4 === undefined) ? [] : v4;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        var v5 = r1;

        r0 += closeAttrs(a0);
        if (cmpSN("file", m.n(j2, v4))) {
            r0 += m.f('f0', c0, i0, l0, a0, "buttonAttach", (yr.externals['nb-extend'])(yr.object2nodeset( v5 ), v4));
        } else if (nodeset2boolean( m.n(j1, v4) )) {
            r0 += m.f('f0', c0, i0, l0, a0, "buttonLink", (yr.externals['nb-extend'])(yr.object2nodeset( v5 ), v4));
        } else {
            r0 += m.f('f0', c0, i0, l0, a0, "button", (yr.externals['nb-extend'])(yr.object2nodeset( v5 ), v4));
        }

        return r0;
    };

    // func nb-button(object options) : xml
    M.f3 = function f3(m, c0, i0, l0, a0, v6) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        var v7 = r1;

        r0 += closeAttrs(a0);
        if (cmpSN("file", m.n(j2, yr.object2nodeset( v6 )))) {
            r0 += m.f('f1', c0, i0, l0, a0, "buttonAttach", (yr.externals['nb-extend-obj'])(v7, v6));
        } else if (nodeset2boolean( m.n(j1, yr.object2nodeset( v6 )) )) {
            r0 += m.f('f1', c0, i0, l0, a0, "buttonLink", (yr.externals['nb-extend-obj'])(v7, v6));
        } else {
            r0 += m.f('f1', c0, i0, l0, a0, "button", (yr.externals['nb-extend-obj'])(v7, v6));
        }

        return r0;
    };

    // func nb-popup-menu(nodeset options) : xml
    M.f4 = function f4(m, c0, i0, l0, a0, v8) {
        v8 = (v8 === undefined) ? [] : v8;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "none" ] = "none";
        var v9 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "popupMenu", (yr.externals['nb-extend'])(yr.object2nodeset( v9 ), v8));

        return r0;
    };

    // func nb-popup(nodeset options) : xml
    M.f5 = function f5(m, c0, i0, l0, a0, v10) {
        v10 = (v10 === undefined) ? [] : v10;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "none" ] = "none";
        var v11 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "popup", (yr.externals['nb-extend'])(yr.object2nodeset( v11 ), v10));

        return r0;
    };

    // func nb-popup-modal(nodeset options) : xml
    M.f6 = function f6(m, c0, i0, l0, a0, v12) {
        v12 = (v12 === undefined) ? [] : v12;
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
        var v13 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "modalPopup", (yr.externals['nb-deep-extend'])(yr.object2nodeset( v13 ), v12));

        return r0;
    };

    var j3 = [ 0, 'data' ];

    // func _nb-popup-content(nodeset content) : xml
    M.f7 = function f7(m, c0, i0, l0, a0, v14) {
        v14 = (v14 === undefined) ? [] : v14;
        var r0 = '';

        r0 += closeAttrs(a0);
        if (nodeset2boolean( m.n(j3, v14) )) {
            r0 += "<div";
            a0.a = {
                'class': new yr.scalarAttr("nb-popup__content")
            };
            a0.s = 'div';
            r0 += m.a(m, v14, 'nb-main-attrs', a0)
            r0 += closeAttrs(a0);
            r0 += nodeset2scalar( m.n(j3, v14) );
            r0 += "</div>";
        } else {
            r0 += "<div class=\"" + "nb-popup__content" + "\">";
            r0 += nodeset2scalar( v14 );
            r0 += "</div>";
        }

        return r0;
    };

    // func _nb-popup-title(nodeset title) : xml
    M.f8 = function f8(m, c0, i0, l0, a0, v15) {
        v15 = (v15 === undefined) ? [] : v15;
        var r0 = '';

        r0 += closeAttrs(a0);
        if (nodeset2boolean( m.n(j3, v15) )) {
            r0 += "<div";
            a0.a = {
                'class': new yr.scalarAttr("nb-popup__title")
            };
            a0.s = 'div';
            r0 += m.a(m, v15, 'nb-main-attrs', a0)
            r0 += closeAttrs(a0);
            r0 += nodeset2scalar( m.n(j3, v15) );
            r0 += "</div>";
        } else {
            r0 += "<div class=\"" + "nb-popup__title" + "\">";
            r0 += nodeset2scalar( v15 );
            r0 += "</div>";
        }

        return r0;
    };

    var j4 = [ 1, 0 ];

    var j5 = [ 0, 'data', 0, '*' ];

    // func _nb-popup-buttons(nodeset buttons) : xml
    M.f9 = function f9(m, c0, i0, l0, a0, v16) {
        v16 = (v16 === undefined) ? [] : v16;
        var r0 = '';

        r0 += closeAttrs(a0);
        if (nodeset2boolean( m.n(j3, v16) )) {
            r0 += "<div";
            a0.a = {
                'class': new yr.scalarAttr("nb-popup__buttons")
            };
            a0.s = 'div';
            r0 += m.a(m, v16, 'nb-main-attrs', a0)
            r0 += closeAttrs(a0);
            if (( m.n(j5, v16) ).length) {
                var items0 = m.n(j3, v16);
                for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                    var c1 = items0[ i1 ];
                    r0 += m.f('f2', c1, i1, l1, a0, m.s(j4, c1));
                    r0 += " ";
                }
            } else {
                r0 += nodeset2scalar( m.n(j3, v16) );
            }
            r0 += "</div>";
        } else {
            r0 += "<div class=\"" + "nb-popup__buttons" + "\">";
            if (( m.n(j0, v16) ).length) {
                var items0 = v16;
                for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                    var c1 = items0[ i1 ];
                    r0 += m.f('f2', c1, i1, l1, a0, m.s(j4, c1));
                    r0 += " ";
                }
            } else {
                r0 += nodeset2scalar( v16 );
            }
            r0 += "</div>";
        }

        return r0;
    };

    // func nb-radio-button(object options) : xml
    M.f10 = function f10(m, c0, i0, l0, a0, v17) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "type" ] = "radio";
        var v18 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "radio-button", (yr.externals['nb-extend-obj'])(v18, v17));

        return r0;
    };

    // func nb-select(nodeset select) : xml
    M.f11 = function f11(m, c0, i0, l0, a0, v19) {
        v19 = (v19 === undefined) ? [] : v19;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "direction" ] = "bottom";
        var v20 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "select", (yr.externals['nb-extend'])(yr.object2nodeset( v20 ), v19));

        return r0;
    };

    // func nb-checkbox(nodeset options) : xml
    M.f12 = function f12(m, c0, i0, l0, a0, v21) {
        v21 = (v21 === undefined) ? [] : v21;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "type" ] = "checkbox";
        var v22 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "checkbox", (yr.externals['nb-extend'])(yr.object2nodeset( v22 ), v21));

        return r0;
    };

    // func nb-input(nodeset options) : xml
    M.f13 = function f13(m, c0, i0, l0, a0, v23) {
        v23 = (v23 === undefined) ? [] : v23;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var v24 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "input", (yr.externals['nb-extend'])(yr.object2nodeset( v24 ), v23));

        return r0;
    };

    // func nb-input-group(nodeset options) : xml
    M.f14 = function f14(m, c0, i0, l0, a0, v25) {
        v25 = (v25 === undefined) ? [] : v25;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "input-group", v25);

        return r0;
    };

    // func nb-progress(nodeset options) : xml
    M.f15 = function f15(m, c0, i0, l0, a0, v26) {
        v26 = (v26 === undefined) ? [] : v26;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "bar" ] = "true";
        r1[ "start" ] = "0";
        r1[ "type" ] = "percentage";
        r1[ "title" ] = " ";
        var v27 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "progress", (yr.externals['nb-extend'])(yr.object2nodeset( v27 ), v26));

        return r0;
    };

    // func nb-icon(icon) : xml
    M.f16 = function f16(m, c0, i0, l0, a0, v28) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "icon" ] = v28;
        r1[ "size" ] = "s";
        var v29 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "icon", yr.object2nodeset( v29 ));

        return r0;
    };

    // func nb-paranja(nodeset options) : xml
    M.f17 = function f17(m, c0, i0, l0, a0, v30) {
        v30 = (v30 === undefined) ? [] : v30;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "theme" ] = "dark";
        var v31 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "paranja", (yr.externals['nb-extend'])(yr.object2nodeset( v31 ), v30));

        return r0;
    };

    // func nb-island(nodeset options) : xml
    M.f18 = function f18(m, c0, i0, l0, a0, v32) {
        v32 = (v32 === undefined) ? [] : v32;
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "";
        var v33 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "island", (yr.externals['nb-extend'])(yr.object2nodeset( v33 ), v32));

        return r0;
    };

    // func nb-dropzone(nodeset options) : xml
    M.f19 = function f19(m, c0, i0, l0, a0, v34) {
        v34 = (v34 === undefined) ? [] : v34;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "type" ] = "file";
        r2[ "theme" ] = "pseudo";
        r2[ "class" ] = "nb-dropzone__button";
        r1[ "button" ] = r2;
        var v35 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "dropzone", (yr.externals['nb-deep-extend'])(yr.object2nodeset( v35 ), v34));

        return r0;
    };

    // func nb-loader(nodeset options) : xml
    M.f20 = function f20(m, c0, i0, l0, a0, v36) {
        v36 = (v36 === undefined) ? [] : v36;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v37 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "loader", (yr.externals['nb-extend'])(yr.object2nodeset( v37 ), v36));

        return r0;
    };

    // func nb-slider(nodeset options) : xml
    M.f21 = function f21(m, c0, i0, l0, a0, v38) {
        v38 = (v38 === undefined) ? [] : v38;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "value" ] = 0;
        r1[ "type" ] = "range";
        r1[ "orientation" ] = "horiz";
        var v39 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "slider", (yr.externals['nb-deep-extend'])(yr.object2nodeset( v39 ), v38));

        return r0;
    };

    // func nb-tabs(nodeset options) : xml
    M.f22 = function f22(m, c0, i0, l0, a0, v40) {
        v40 = (v40 === undefined) ? [] : v40;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v41 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "tabs", (yr.externals['nb-extend'])(yr.object2nodeset( v41 ), v40));

        return r0;
    };

    // func nb-arrow(nodeset arrow) : xml
    M.f23 = function f23(m, c0, i0, l0, a0, v42) {
        v42 = (v42 === undefined) ? [] : v42;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "buttonContent" ] = "Найти";
        var v43 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "arrow", (yr.externals['nb-extend'])(yr.object2nodeset( v43 ), v42));

        return r0;
    };

    // func nb-header(nodeset header) : xml
    M.f24 = function f24(m, c0, i0, l0, a0, v44) {
        v44 = (v44 === undefined) ? [] : v44;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "search" ] = "true";
        r2[ "buttonContent" ] = "Найти";
        r2[ "class" ] = "nb-header__arrow";
        r1[ "arrow" ] = r2;
        r1[ "services" ] = "true";
        r1[ "settings" ] = "true";
        r1[ "yaHref" ] = "http://yandex.ru";
        var v45 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "header", (yr.externals['nb-deep-extend'])(yr.object2nodeset( v45 ), v44));

        return r0;
    };

    // func nb-user(nodeset user) : xml
    M.f25 = function f25(m, c0, i0, l0, a0, v46) {
        v46 = (v46 === undefined) ? [] : v46;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "userpic" ] = "avatar.png";
        var v47 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "user", (yr.externals['nb-extend'])(yr.object2nodeset( v47 ), v46));

        return r0;
    };

    // func nb-suggest(nodeset options) : xml
    M.f26 = function f26(m, c0, i0, l0, a0, v48) {
        v48 = (v48 === undefined) ? [] : v48;
        var r0 = '';

        //  var defaults : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        r1[ "countMax" ] = "10";
        r1[ "type" ] = "default";
        var v49 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "suggest", (yr.externals['nb-extend'])(yr.object2nodeset( v49 ), v48));

        return r0;
    };

    // func nb-toggler(nodeset toggler) : xml
    M.f27 = function f27(m, c0, i0, l0, a0, v50) {
        v50 = (v50 === undefined) ? [] : v50;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "leftText" ] = "On";
        r1[ "rightText" ] = "Off";
        r1[ "size" ] = "s";
        var v51 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "toggler", (yr.externals['nb-extend'])(yr.object2nodeset( v51 ), v50));

        return r0;
    };

    // func podium(xml markup) : xml
    M.f28 = function f28(m, c0, i0, l0, a0, v52) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-podium" + "\">";
        r0 += v52;
        r0 += "</div>";

        return r0;
    };

    // func code(xml markup) : xml
    M.f29 = function f29(m, c0, i0, l0, a0, v53) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-code demo-code_sample" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "js-beautify" + "\">";
        r0 += scalar2xml( xml2scalar( v53 ) );
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";

        return r0;
    };

    // func show(xml markup) : xml
    M.f30 = function f30(m, c0, i0, l0, a0, v54) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f28', c0, i0, l0, a0, v54);
        r0 += m.f('f29', c0, i0, l0, a0, v54);
        r0 += "</div>";

        return r0;
    };

    // func select-medium() : xml
    M.f31 = function f31(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "id" ] = "select1";
        r1[ "class" ] = "my-test-class";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "text" ] = "Карта";
        r3[ "value" ] = "option1";
        r3[ "selected" ] = "true";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "text" ] = "Спутник";
        r3[ "value" ] = "option2";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "text" ] = "Гибрид";
        r3[ "value" ] = "option3";
        r2.push(r3);
        r1[ "items" ] = r2;
        var v55 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v55 ));

        return r0;
    };

    // func select-small() : xml
    M.f32 = function f32(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        r1[ "id" ] = "select2";
        r1[ "direction" ] = "top";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "text" ] = "Карта";
        r3[ "value" ] = "option1";
        r3[ "selected" ] = "true";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "text" ] = "Спутник";
        r3[ "value" ] = "option2";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "text" ] = "Гибрид";
        r3[ "value" ] = "option3";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "text" ] = "Народная карта";
        r3[ "value" ] = "option4";
        r2.push(r3);
        r1[ "items" ] = r2;
        var v56 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v56 ));

        return r0;
    };

    // func selects() : xml
    M.f33 = function f33(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-select_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f31', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-select_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f32', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func button-medium() : xml
    M.f34 = function f34(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var button : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Применить";
        var v57 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f3', c0, i0, l0, a0, v57);
        r0 += " ";
        r0 += m.f('f3', c0, i0, l0, a0, (function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Проверить";
            r0[ "href" ] = "#";

            return r0;
        })());

        return r0;
    };

    // func button-small() : xml
    M.f35 = function f35(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f3', c0, i0, l0, a0, (function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Применить";
            r0[ "size" ] = "s";

            return r0;
        })());

        return r0;
    };

    // func button-action() : xml
    M.f36 = function f36(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f3', c0, i0, l0, a0, (function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Отправить";
            r0[ "size" ] = "m";
            r0[ "theme" ] = "action";

            return r0;
        })());

        return r0;
    };

    // func button-pseudo() : xml
    M.f37 = function f37(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f3', c0, i0, l0, a0, (function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Выбрать…";
            r0[ "size" ] = "m";
            r0[ "theme" ] = "pseudo";

            return r0;
        })());

        return r0;
    };

    // func button-dark() : xml
    M.f38 = function f38(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f3', c0, i0, l0, a0, (function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Готово";
            r0[ "size" ] = "m";
            r0[ "theme" ] = "dark";

            return r0;
        })());

        return r0;
    };

    // func button-images() : xml
    M.f39 = function f39(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f3', c0, i0, l0, a0, (function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "icon" ] = "eye";

            return r0;
        })());
        r0 += " ";
        r0 += m.f('f3', c0, i0, l0, a0, (function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "icon" ] = "link";
            r0[ "content" ] = "Открыть";

            return r0;
        })());

        return r0;
    };

    // func button-disabled() : xml
    M.f40 = function f40(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f3', c0, i0, l0, a0, (function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Кнопка";
            r0[ "disabled" ] = true;

            return r0;
        })());

        return r0;
    };

    // func radio-button() : xml
    M.f41 = function f41(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f10', c0, i0, l0, a0, (function() {
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
        })());

        return r0;
    };

    // func attach-button() : xml
    M.f42 = function f42(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f3', c0, i0, l0, a0, (function() {
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

            return r0;
        })());

        return r0;
    };

    // func buttons() : xml
    M.f43 = function f43(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f34', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f35', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Action ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_theme_action";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f36', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Pseudo ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_theme_pseudo";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f37', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Dark ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_theme_dark";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f38', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Disabled ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_disabled";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f40', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Кнопка с иконкой";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f39', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Радио-группа";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f41', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Attach ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_type_attach";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f42', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func checkbox-radio() : xml
    M.f44 = function f44(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var radio : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "radio";
        r1[ "text" ] = "Человек";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "biotype";
        r1[ "attrs" ] = r2;
        var v58 = r1;

        //  var radio2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "radio";
        r1[ "text" ] = "Паук";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "biotype";
        r1[ "attrs" ] = r2;
        var v59 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset( v58 ));
        r0 += "<br/>";
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset( v59 ));

        return r0;
    };

    // func checkbox-check() : xml
    M.f45 = function f45(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var radio : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "Дерево";
        r1[ "checked" ] = true;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "task";
        r1[ "attrs" ] = r2;
        var v60 = r1;

        //  var radio2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "Сын";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "task";
        r1[ "attrs" ] = r2;
        var v61 = r1;

        //  var radio3 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "Дом";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "task";
        r1[ "attrs" ] = r2;
        var v62 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset( v60 ));
        r0 += "<br/>";
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset( v61 ));
        r0 += "<br/>";
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset( v62 ));

        return r0;
    };

    // func checkbox-small() : xml
    M.f46 = function f46(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var radio : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "radio";
        r1[ "size" ] = "s";
        r1[ "text" ] = "JavaScript";
        r1[ "checked" ] = true;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "language";
        r1[ "attrs" ] = r2;
        var v63 = r1;

        //  var radio2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "radio";
        r1[ "size" ] = "s";
        r1[ "text" ] = "Java";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "language";
        r1[ "attrs" ] = r2;
        var v64 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset( v63 ));
        r0 += "<br/>";
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset( v64 ));

        return r0;
    };

    // func checkbox() : xml
    M.f47 = function f47(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Radio";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f44', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Checkbox";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f45', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-checkbox_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f46', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func toggle-default() : xml
    M.f48 = function f48(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup'}" + "\" href=\"" + "#default" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап по умолчанию";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-to-right() : xml
    M.f49 = function f49(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup1', how: { at: 'left', my: 'right' }}" + "\" href=\"" + "#right" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап справа";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-to-left() : xml
    M.f50 = function f50(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup2', how: { at: 'right top', my: 'left' }}" + "\" href=\"" + "#left" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап слева";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-to-top() : xml
    M.f51 = function f51(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup3', how: { at: 'top', my: 'bottom' }}" + "\" href=\"" + "#top" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап сверху";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-modal() : xml
    M.f52 = function f52(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup4'}" + "\" href=\"" + "#modal" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Модальный Попап";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func popups() : xml
    M.f53 = function f53(m, c0, i0, l0, a0) {
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
        r3[ "text" ] = "Скопировать";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "text" ] = "Переместить";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "separator" ] = true;
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "text" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v65 = r1;

        //  var toRight : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup1";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "text" ] = "Скопировать";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "text" ] = "Переместить";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "text" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v66 = r1;

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
        r3[ "text" ] = "Скопировать";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "text" ] = "Переместить";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "text" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v67 = r1;

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
        r3[ "text" ] = "Скопировать";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "text" ] = "Переместить";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "text" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v68 = r1;

        //  var modal : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup4";
        r1[ "title" ] = "Some modal popup";
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
        r4[ "class" ] = "nb-popup__button";
        r3.push(r4);
        var r4 = {};
        var a4 = { a: {} };
        r4[ "content" ] = "Сохранить";
        r4[ "size" ] = "m";
        r4[ "class" ] = "nb-popup__button";
        r3.push(r4);
        r2[ "data" ] = r3;
        r1[ "buttons" ] = r2;
        var v69 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f48', c0, i0, l0, a0));
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f48', c0, i0, l0, a0));
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v65 )));
        r0 += "</div>";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v65 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f49', c0, i0, l0, a0));
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f49', c0, i0, l0, a0));
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v66 )));
        r0 += "</div>";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v66 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f50', c0, i0, l0, a0));
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f50', c0, i0, l0, a0));
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v67 )));
        r0 += "</div>";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v67 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f51', c0, i0, l0, a0));
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f51', c0, i0, l0, a0));
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v68 )));
        r0 += "</div>";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v68 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f52', c0, i0, l0, a0));
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f52', c0, i0, l0, a0));
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f6', c0, i0, l0, a0, yr.object2nodeset( v69 )));
        r0 += "</div>";
        r0 += m.f('f6', c0, i0, l0, a0, yr.object2nodeset( v69 ));
        r0 += "</div>";

        return r0;
    };

    // func dropzone() : xml
    M.f54 = function f54(m, c0, i0, l0, a0) {
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
        r2[ "class" ] = "nb-dropzone__button";
        r1[ "button" ] = r2;
        var v70 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Зона для загрузки файла";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f19', c0, i0, l0, a0, yr.object2nodeset( v70 )));
        r0 += "</div>";

        return r0;
    };

    // func progresses() : xml
    M.f55 = function f55(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "progress2";
        r1[ "start" ] = "20";
        var v71 = r1;

        //  var title : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "progress1";
        r1[ "start" ] = "30";
        r1[ "type" ] = "title";
        r1[ "title" ] = "Король_Лев_5_rutracker.org";
        var v72 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Percentage ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-progress_type_percentage";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f15', c0, i0, l0, a0, yr.object2nodeset( v71 )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Title ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-progress_type_title";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f15', c0, i0, l0, a0, yr.object2nodeset( v72 )));
        r0 += "</div>";

        return r0;
    };

    // func input-small() : xml
    M.f56 = function f56(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Москва";
        var v73 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f13', c0, i0, l0, a0, yr.object2nodeset( v73 ));

        return r0;
    };

    // func input-medium() : xml
    M.f57 = function f57(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f13', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "content" ] = "Москва11";

            return r0;
        })()));

        return r0;
    };

    // func input-disabled() : xml
    M.f58 = function f58(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "disabled" ] = true;
        r1[ "content" ] = "Москва";
        var v74 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f13', c0, i0, l0, a0, yr.object2nodeset( v74 ));

        return r0;
    };

    // func input-length() : xml
    M.f59 = function f59(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "length" ] = 11;
        r2[ "maxlength" ] = 11;
        r2[ "placeholder" ] = "11 символов";
        r1[ "attrs" ] = r2;
        var v75 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f13', c0, i0, l0, a0, yr.object2nodeset( v75 ));

        return r0;
    };

    // func inputs() : xml
    M.f60 = function f60(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-input_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f57', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-input_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f56', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Disabled ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-input_disabled";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f58', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Maxlength";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f59', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func input-groups() : xml
    M.f61 = function f61(m, c0, i0, l0, a0) {
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
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f14', c0, i0, l0, a0, yr.object2nodeset( v76 )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Кнопка+поле";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f14', c0, i0, l0, a0, yr.object2nodeset( v77 )));
        r0 += "</div>";

        return r0;
    };

    // func island-simple() : xml
    M.f62 = function f62(m, c0, i0, l0, a0) {
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
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset( v78 ));

        return r0;
    };

    // func island-fly() : xml
    M.f63 = function f63(m, c0, i0, l0, a0) {
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
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset( v79 ));

        return r0;
    };

    // func island-padding() : xml
    M.f64 = function f64(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Остров с паддингами и инлайном";
        r1[ "padding" ] = "l";
        r1[ "type" ] = "inline";
        var v80 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset( v80 ));

        return r0;
    };

    // func islands() : xml
    M.f65 = function f65(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f62', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f63', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Padding: L, Inline ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-island_padding_l.nb-island_inline";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f64', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func loader-small() : xml
    M.f66 = function f66(m, c0, i0, l0, a0) {
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
        r0 += m.f('f20', c0, i0, l0, a0, yr.object2nodeset( v81 ));

        return r0;
    };

    // func loader-medium() : xml
    M.f67 = function f67(m, c0, i0, l0, a0) {
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
        r0 += m.f('f20', c0, i0, l0, a0, yr.object2nodeset( v82 ));

        return r0;
    };

    // func loader-white() : xml
    M.f68 = function f68(m, c0, i0, l0, a0) {
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
        r0 += m.f('f20', c0, i0, l0, a0, yr.object2nodeset( v83 ));

        return r0;
    };

    // func loaders() : xml
    M.f69 = function f69(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-loader_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f67', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-loader_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f66', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section demo-section_dark" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Color: White ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-loader_color_white";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f68', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func all-icons(size, boolean white) : xml
    M.f71 = function f71(m, c0, i0, l0, a0, v84, v85) {
        var r0 = '';

        function f70(m, c0, i0, l0, a0, v86) {
            var r0 = '';

            //  var default : object
            var r1 = {};
            var a1 = { a: {} };
            r1[ "icon" ] = v86;
            r1[ "size" ] = v84;
            var v87 = r1;

            r0 += closeAttrs(a0);
            r0 += m.f('f0', c0, i0, l0, a0, "icon", yr.object2nodeset( v87 ));
            r0 += " ";

            return r0;
        }

        r0 += closeAttrs(a0);
        if (v85) {
            r0 += f70(m, c0, i0, l0, a0, "download_white");
            r0 += f70(m, c0, i0, l0, a0, "link_white");
            r0 += f70(m, c0, i0, l0, a0, "trash_white");
        } else {
            r0 += f70(m, c0, i0, l0, a0, "close");
            r0 += f70(m, c0, i0, l0, a0, "download");
            r0 += f70(m, c0, i0, l0, a0, "people");
            r0 += f70(m, c0, i0, l0, a0, "help");
            r0 += f70(m, c0, i0, l0, a0, "eye");
            r0 += f70(m, c0, i0, l0, a0, "link");
            r0 += f70(m, c0, i0, l0, a0, "pause");
            r0 += f70(m, c0, i0, l0, a0, "play");
            r0 += f70(m, c0, i0, l0, a0, "three-dots");
            r0 += f70(m, c0, i0, l0, a0, "trash");
            r0 += f70(m, c0, i0, l0, a0, "mail");
            r0 += f70(m, c0, i0, l0, a0, "vk");
            r0 += f70(m, c0, i0, l0, a0, "twitter");
            r0 += f70(m, c0, i0, l0, a0, "odnoklassniki");
        }

        return r0;
    };

    // func icons() : xml
    M.f72 = function f72(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-icon_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f71', c0, i0, l0, a0, "s");
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-icon_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f71', c0, i0, l0, a0, "m");
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section demo-section_dark" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "White";
        r0 += "</div>";
        r0 += m.f('f71', c0, i0, l0, a0, "s", true);
        r0 += m.f('f71', c0, i0, l0, a0, "m", true);
        r0 += "</div>";

        return r0;
    };

    // func slider-small() : xml
    M.f73 = function f73(m, c0, i0, l0, a0) {
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
        var v88 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f21', c0, i0, l0, a0, yr.object2nodeset( v88 ));

        return r0;
    };

    // func slider-medium() : xml
    M.f74 = function f74(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var slider : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "class" ] = "js-super-class";
        r1[ "value" ] = 50;
        r1[ "id" ] = "s1";
        var v89 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f21', c0, i0, l0, a0, yr.object2nodeset( v89 ));

        return r0;
    };

    // func sliders() : xml
    M.f75 = function f75(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f73', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f74', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func tooltips-jq() : xml
    M.f76 = function f76(m, c0, i0, l0, a0) {
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
    M.f77 = function f77(m, c0, i0, l0, a0) {
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
    M.f78 = function f78(m, c0, i0, l0, a0) {
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
    M.f79 = function f79(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Статья";
        r3[ "content" ] = m.f('f77', c0, i0, l0, a3);
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Обсуждение";
        r3[ "content" ] = m.f('f78', c0, i0, l0, a3);
        r2.push(r3);
        r1[ "items" ] = r2;
        var v90 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f22', c0, i0, l0, a0, yr.object2nodeset( v90 ));

        return r0;
    };

    // func tabs-small() : xml
    M.f80 = function f80(m, c0, i0, l0, a0) {
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
        var v91 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f22', c0, i0, l0, a0, yr.object2nodeset( v91 ));

        return r0;
    };

    // func tabs-island() : xml
    M.f81 = function f81(m, c0, i0, l0, a0) {
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
        r3[ "attrs" ] = r4;
        r2[ "input" ] = r3;
        var r3 = {};
        var a3 = { a: {} };
        r3[ "size" ] = "s";
        r3[ "content" ] = "Обменять";
        r2[ "button" ] = r3;
        var v92 = r2;

        r1 += closeAttrs(a1);
        r1 += m.f('f14', c0, i0, l0, a1, yr.object2nodeset( v92 ));
        var v93 = r1;

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
        var v94 = r2;

        r1 += closeAttrs(a1);
        r1 += m.f('f14', c0, i0, l0, a1, yr.object2nodeset( v94 ));
        var v95 = r1;

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "rise" ] = "m";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Обмен";
        r3[ "content" ] = v93;
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Возврат";
        r3[ "content" ] = v95;
        r2.push(r3);
        r1[ "items" ] = r2;
        var v96 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-island nb-island_type_fly nb-island_padding_m")
        };
        a0.s = 'div';
        a0.a[ "style" ] = new yr.scalarAttr("width: 300px");
        r0 += closeAttrs(a0);
        r0 += m.f('f22', c0, i0, l0, a0, yr.object2nodeset( v96 ));
        r0 += "</div>";

        return r0;
    };

    // func tabs() : xml
    M.f82 = function f82(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-tabs_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f79', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-tabs_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f80', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Внутри острова ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-tabs_rise_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f81', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func arrow-service() : xml
    M.f83 = function f83(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "false";
        r1[ "href" ] = "#";
        r1[ "text" ] = "Диск";
        var v97 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f23', c0, i0, l0, a0, yr.object2nodeset( v97 ));

        return r0;
    };

    // func arrow-search() : xml
    M.f84 = function f84(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        var v98 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f23', c0, i0, l0, a0, yr.object2nodeset( v98 ));

        return r0;
    };

    // func arrow-search-requests() : xml
    M.f85 = function f85(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "requests" ] = "8 млн ответов";
        r1[ "value" ] = "жираф";
        var v99 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f23', c0, i0, l0, a0, yr.object2nodeset( v99 ));

        return r0;
    };

    // func arrow-search-service() : xml
    M.f86 = function f86(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "href" ] = "#";
        r1[ "text" ] = "Диск";
        var v100 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f23', c0, i0, l0, a0, yr.object2nodeset( v100 ));

        return r0;
    };

    // func arrows() : xml
    M.f87 = function f87(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Название сервиса";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f83', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поисковая стрелка (по умолчанию)";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f84', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поисковая стрелка (по умолчанию)";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f85', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поисковая стрелка (по умолчанию)";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f86', c0, i0, l0, a0));
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
    M.f88 = function f88(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Шапка с поисковой стрелкой";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f24', c0, i0, l0, a0, yr.object2nodeset( m.v('v101', c0.doc.root) )));
        r0 += "</div>";

        return r0;
    };

    //  var userNormal : object
    M.v102 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "sweetlush";
        r1[ "notices" ] = "7";
        r1[ "userpic" ] = "http://center.yandex-team.ru/api/v1/user/sweetlush/photo_10670/300.jpg";
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
        r1[ "userpic" ] = "http://center.yandex-team.ru/api/v1/user/basvasilich/photo_6631/300.jpg?0.5863942694850266";
        return r1;
    };

    //  var userEmail : object
    M.v105 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "Константин Леонидович Васильев";
        r1[ "email" ] = "mctep@yandex-team.ru";
        r1[ "justify" ] = true;
        r1[ "rightToLeft" ] = true;
        r1[ "size" ] = "s";
        r1[ "userpic" ] = "https://center.yandex-team.ru/api/v1/user/mctep/avatar/36.jpg";
        return r1;
    };

    //  var userEmail2 : object
    M.v106 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "Константин Леонидович Васильев";
        r1[ "email" ] = "mctep@yandex-team.ru";
        r1[ "justify" ] = true;
        r1[ "size" ] = "m";
        r1[ "userpic" ] = "https://center.yandex-team.ru/api/v1/user/mctep/avatar/36.jpg";
        return r1;
    };

    // func userBlock() : xml
    M.f89 = function f89(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе L";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f25', c0, i0, l0, a0, yr.object2nodeset( m.v('v102', c0.doc.root) )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе справа налево";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f25', c0, i0, l0, a0, yr.object2nodeset( m.v('v103', c0.doc.root) )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе S";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f25', c0, i0, l0, a0, yr.object2nodeset( m.v('v104', c0.doc.root) )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе растянутый и с имейлом";
        r0 += "</div>";
        r0 += "<div style=\"" + "width: 200px" + "\">";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f25', c0, i0, l0, a0, yr.object2nodeset( m.v('v105', c0.doc.root) )));
        r0 += "</div>";
        r0 += "<div style=\"" + "width: 200px" + "\">";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f25', c0, i0, l0, a0, yr.object2nodeset( m.v('v106', c0.doc.root) )));
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };

    // func suggests() : xml
    M.f90 = function f90(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var suggest : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "source" ] = "[\"Вариант 1\", \"Вариант 2\", \"Вариант 3\", \"Вариант 4\", \"Вариант 5\", \"Вариант 6\", \"Вариант 7\", \"Вариант 8\", \"Вариант 9\", \"Вариант 10\", \"Вариант 11\", \"Вариант 12\", \"Вариант 13\", \"Вариант 14\", \"Вариант 15\", \"Вариант 16\", \"Вариант 17\", \"Вариант 18\", \"Вариант 19\"]";
        r1[ "highlight" ] = true;
        var v107 = r1;

        //  var suggestUser : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "source" ] = "[{\"value\": \"Константин Константинович Константинопольский\",\"label\": \"Константин Константинович Константинопольский konstantin.konstantinopolsky\",\"username\": \"Константин Константинович Константинопольский\",\"email\": \"konstantin.konstantinopolsky@yandex-team.ru\"},{\"value\": \"Константин Васильев\",\"label\": \"Константин Васильев mctep\",\"username\": \"Константин Васильев\",\"email\": \"mctep@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/mctep/avatar/54.jpg\"},{\"value\": \"Евгений Дорошенко\",\"label\": \"Евгений Дорошенко esdoroshenko\",\"username\": \"Евгений Дорошенко\",\"email\": \"esdoroshenko@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/esdoroshenko/avatar/54.jpg\"},{\"value\": \"Вадим Пацев\",\"label\": \"Вадим Пацев basvasilich\",\"username\": \"Вадим Пацев\",\"email\": \"basvasilich@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/basvasilich/avatar/54.jpg\"},{\"value\": \"Светлана Блыщак\",\"label\": \"Светлана Блыщак sweetlush\",\"username\": \"Светлана Блыщак\",\"email\": \"sweetlush@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/sweetlush/avatar/54.jpg\"},{\"value\": \"Яна Недоросткова\",\"label\": \"Яна Недоросткова yanann11\",\"username\": \"Яна Недоросткова\",\"email\": \"yanann11@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/yanann11/avatar/54.jpg\"},{\"value\": \"Азиз Йулдошев\",\"label\": \"Азиз Йулдошев lapple\",\"username\": \"Азиз Йулдошев\",\"email\": \"lapple@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/lapple/avatar/54.jpg\"}]";
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
        r0 += m.f('f26', c0, i0, l0, a0, yr.object2nodeset( v107 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Саджест с подсветкой, в котором представлена команда разработчиков Диска";
        r0 += "</div>";
        r0 += m.f('f26', c0, i0, l0, a0, yr.object2nodeset( v108 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Саджест, который ходит на сервер за demo/users.json.";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-h5" + "\">";
        r0 += "Для корректной работы, необходмо настроить ваш сервер на выдачу json файлов как есть. ";
        r0 += "Файл статичный, поэтому результаты будут всегда одинаковые. ";
        r0 += "</div>";
        r0 += m.f('f26', c0, i0, l0, a0, yr.object2nodeset( v109 ));
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
    M.f91 = function f91(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок переключатель";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f27', c0, i0, l0, a0, yr.object2nodeset( m.v('v110', c0.doc.root) )));
        r0 += "<br/>";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок переключатель M";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f27', c0, i0, l0, a0, yr.object2nodeset( m.v('v111', c0.doc.root) )));
        r0 += "<br/>";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок переключатель disabled";
        r0 += "</div>";
        r0 += m.f('f30', c0, i0, l0, a0, m.f('f27', c0, i0, l0, a0, yr.object2nodeset( m.v('v112', c0.doc.root) )));
        r0 += "</div>";

        return r0;
    };

    var j6 = [ 0, 'id' ];

    var j7 = [ 0, 'class' ];

    var j8 = [ 0, 'mixin-nb' ];

    var j9 = [ 0, 'data-nb', 0, '*' ];

    var j10 = [ 0, 'attrs', 0, '*' ];

    var j11 = [ 0, 'button' ];

    var j12 = [ 0, 'size' ];

    var j13 = [ 0, 'theme' ];

    var j14 = [ 0, 'static' ];

    var j15 = [ 0, 'disabled' ];

    var j16 = [ 0, 'content' ];

    var j17 = [ 0, 'icon' ];

    var j18 = [ 0, 'buttonLink' ];

    var j19 = [ 0, 'buttonAttach' ];

    var j20 = [ 0, 'multiple' ];

    var j21 = [ 0, 'attrs', 0, 'name' ];

    var j22 = [ 0, 'popupMenu' ];

    var j23 = [ 0, 'tail' ];

    var j24 = [ 0, 'menu' ];

    var j25 = [ 0, 'text' ];

    var j26 = [ 0, 'separator' ];

    var j27 = [ 0, 'popup' ];

    var j28 = [ 0, 'title' ];

    var j29 = [ 0, 'modalPopup' ];

    var j30 = [ 0, 'close' ];

    var j31 = [ 0, 'close', 0, 'class' ];

    var j32 = [ 0, 'close', 0, 'attrs' ];

    var j33 = [ 0, 'close', 0, 'attrs', 0, '*' ];

    var j34 = [ 0, 'buttons' ];

    var j35 = [ 0, 'radio-button' ];

    var j36 = [ 0, 'group' ];

    var j37 = [ 1, 1, 0, 'name' ];

    var j38 = [ 0, 'value' ];

    var j39 = [ 0, 'checked' ];

    var j40 = [ 1, 1, 0, 'theme' ];

    var j41 = [ 1, 1, 0, 'size' ];

    var j42 = [ 0, 'select' ];

    var j43 = [ 0, 'direction' ];

    var j44 = [ 0, 'within' ];

    var j45 = [ 0, 'mod' ];

    var j46 = [ 0, 'items' ];

    var j47 = [ 0, 'selected' ];

    var j48 = [ 0, 'checkbox' ];

    var j49 = [ 0, 'input' ];

    var j50 = [ 0, 'input-group' ];

    var j51 = [ 0, 'progress' ];

    var j52 = [ 0, 'start' ];

    var j53 = [ 0, 'bar' ];

    function p0(m, c0, i0, l0) {
        return simpleBoolean('icon', c0);
    }

    var j54 = [ 0, 'icon', 2, p0 ];

    var j55 = [ 0, 'paranja' ];

    var j56 = [ 0, 'island' ];

    var j57 = [ 0, 'padding' ];

    var j58 = [ 0, 'dropzone' ];

    var j59 = [ 0, 'head' ];

    var j60 = [ 0, 'loader' ];

    var j61 = [ 0, 'color' ];

    var j62 = [ 0, 'slider' ];

    var j63 = [ 0, 'orientation' ];

    var j64 = [ 0, 'handle', 0, 'class' ];

    var j65 = [ 0, 'tabs' ];

    var j66 = [ 0, 'rise' ];

    var j67 = [ 0, 'active' ];

    var j68 = [ 0, 'arrow' ];

    var j69 = [ 0, 'search' ];

    var j70 = [ 0, 'buttonContent' ];

    var j71 = [ 0, 'action' ];

    var j72 = [ 0, 'requests' ];

    var j73 = [ 0, 'header' ];

    var j74 = [ 0, 'settings' ];

    var j75 = [ 0, 'services' ];

    var j76 = [ 0, 'user' ];

    var j77 = [ 0, 'yaHref' ];

    var j78 = [ 0, 'justify' ];

    var j79 = [ 0, 'rightToLeft' ];

    var j80 = [ 0, 'userpic' ];

    var j81 = [ 0, 'notices' ];

    var j82 = [ 0, 'username' ];

    var j83 = [ 0, 'email' ];

    var j84 = [ 0, 'user', 0, 'username' ];

    var j85 = [ 0, 'user', 0, 'email' ];

    var j86 = [ 0, 'suggest' ];

    var j87 = [ 0, 'attrsInput' ];

    var j88 = [ 0, 'countMax' ];

    var j89 = [ 0, 'source' ];

    var j90 = [ 0, 'highlight' ];

    var j91 = [ 0, 'class-suggest' ];

    var j92 = [ ];

    var j93 = [ 0, 'item' ];

    function p1(m, c0, i0, l0) {
        return cmpSN("default", selectNametest('type', c0, []));
    }

    var j94 = [ 2, p1, 0, 'item' ];

    var j95 = [ 0, 'label' ];

    function p2(m, c0, i0, l0) {
        return cmpSN("username", selectNametest('type', c0, []));
    }

    var j96 = [ 2, p2, 0, 'item' ];

    var j97 = [ 0, 'size' ];

    var j98 = [ 0, 'usernameHighlighted' ];

    var j99 = [ 0, 'emailHighlighted' ];

    function p3(m, c0, i0, l0) {
        return cmpSN("suggest", selectNametest('mod', c0, [])) && simpleBoolean('usernameHighlighted', c0);
    }

    var j100 = [ 0, 'user', 2, p3, 0, 'username' ];

    var j101 = [ 1, 1, 0, 'usernameHighlighted' ];

    function p4(m, c0, i0, l0) {
        return cmpSN("suggest", selectNametest('mod', c0, [])) && simpleBoolean('emailHighlighted', c0);
    }

    var j102 = [ 0, 'user', 2, p4, 0, 'email' ];

    var j103 = [ 1, 1, 0, 'emailHighlighted' ];

    var j104 = [ 0, 'toggler' ];

    var j105 = [ 0, 'leftText' ];

    var j106 = [ 0, 'rightText' ];

    // match .* : nb-main-attrs
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j4, c0), 'nb-attrs', a0)
        r0 += m.a(m, selectNametest('*', c0, []), 'nb-attrs', a0)
        if (simpleBoolean('id', c0)) {
            a0.a[ "id" ] = new yr.scalarAttr(simpleScalar('id', c0));
        }
        var r1 = '';
        var a1 = { a: {} };
        var items0 = selectNametest('class', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r1 += " " + nodeset2scalar( ( m.s(j4, c1) ) );
        }
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(r1);
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(r1);
        }
        var r1 = '';
        var a1 = { a: {} };
        var items0 = selectNametest('mixin-nb', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r1 += " " + nodeset2scalar( ( m.s(j4, c1) ) );
        }
        var tmp0 = a0.a[ "data-nb" ];
        if (tmp0) {
            a0.a[ "data-nb" ] = tmp0.addscalar(r1);
        } else {
            a0.a[ "data-nb" ] = new yr.scalarAttr(r1);
        }
        var items0 = m.s(j9, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ "data-nb-" + ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j4, c1) ));
        }
        var items0 = m.s(j10, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j4, c1) ));
        }

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    // match .* : nb-main-content
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j4, c0), 'nb-content', a0)

        return r0;
    };
    M.t1.j = j0;
    M.t1.a = 0;

    // match .button : nb
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<button";
        a0.a = {
            'class': new yr.scalarAttr("nb-button _init nb-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + "  nb-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ))
        };
        a0.s = 'button';
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("button");
        }
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-button_disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (!nodeset2boolean( (selectNametest('content', c0, [])) ) && simpleBoolean('icon', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_only-icon");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-button_only-icon");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-button__text")
        };
        a0.s = 'span';
        if ((simpleBoolean('content', c0) && simpleBoolean('icon', c0))) {
            r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
            r0 += closeAttrs(a0);
            r0 += simpleScalar('content', c0);
        } else if ((!simpleBoolean('content', c0) && simpleBoolean('icon', c0))) {
            r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
        } else {
            r0 += closeAttrs(a0);
            r0 += simpleScalar('content', c0);
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</button>";

        return r0;
    };
    M.t2.j = j11;
    M.t2.a = 0;

    // match .buttonLink : nb
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
            'class': new yr.scalarAttr("nb-button _init nb-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + "  nb-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ))
        };
        a0.s = 'a';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-button_disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (!nodeset2boolean( (selectNametest('disabled', c0, [])) ) && simpleBoolean('href', c0)) {
            a0.a[ "href" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('href', c0, []) ) ));
        }
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("button");
        }
        if (!nodeset2boolean( (selectNametest('content', c0, [])) ) && simpleBoolean('icon', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_only-icon");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-button_only-icon");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-button__text")
        };
        a0.s = 'span';
        if ((simpleBoolean('content', c0) && simpleBoolean('icon', c0))) {
            r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
            r0 += closeAttrs(a0);
            r0 += simpleScalar('content', c0);
        } else if ((!simpleBoolean('content', c0) && simpleBoolean('icon', c0))) {
            r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
        } else {
            r0 += closeAttrs(a0);
            r0 += simpleScalar('content', c0);
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };
    M.t3.j = j18;
    M.t3.a = 0;

    // match .buttonAttach : nb
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("nb-button _init nb-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " nb-button_type_attach  nb-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ))
        };
        a0.s = 'label';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-button_disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (!nodeset2boolean( (selectNametest('disabled', c0, [])) ) && simpleBoolean('href', c0)) {
            a0.a[ "href" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('href', c0, []) ) ));
        }
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("button");
        }
        if (!nodeset2boolean( (selectNametest('content', c0, [])) ) && simpleBoolean('icon', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_only-icon");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-button_only-icon");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-file-intruder" + "\">";
        r0 += "<span class=\"" + "nb-file-intruder__inner" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("nb-file-intruder__input"),
            'type': new yr.scalarAttr("file")
        };
        a0.s = 'input';
        if (simpleBoolean('multiple', c0)) {
            a0.a[ "multiple" ] = new yr.scalarAttr("multiple");
        }
        if (nodeset2boolean( m.s(j21, c0) )) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( ( m.s(j21, c0) ) ));
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<span class=\"" + "nb-file-intruder__focus" + "\"></span>";
        r0 += "</span>";
        r0 += "</span>";
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-button__text")
        };
        a0.s = 'span';
        if ((simpleBoolean('content', c0) && simpleBoolean('icon', c0))) {
            r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
            r0 += closeAttrs(a0);
            r0 += simpleScalar('content', c0);
        } else if ((!simpleBoolean('content', c0) && simpleBoolean('icon', c0))) {
            r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
        } else {
            r0 += closeAttrs(a0);
            r0 += simpleScalar('content', c0);
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t4.j = j19;
    M.t4.a = 0;

    // match .popupMenu : nb
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-popup")
        };
        a0.s = 'div';
        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("popup");
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _hidden");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _hidden");
            }
        }
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('tail', c0)) {
            a0.a[ "data-nb-tail" ] = new yr.scalarAttr(simpleScalar('tail', c0));
        }
        r0 += closeAttrs(a0);
        var items0 = selectNametest('menu', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (simpleBoolean('separator', c1)) {
                r0 += "<div class=\"" + "nb-popup__separator" + "\"></div>";
            } else {
                r0 += "<a";
                a0.a = {
                    'class': new yr.scalarAttr("nb-popup__line")
                };
                a0.s = 'a';
                if (simpleBoolean('href', c1)) {
                    a0.a[ "href" ] = new yr.scalarAttr(simpleScalar('href', c1));
                }
                r0 += m.a(m, m.s(j4, c1), 'nb-main-attrs', a0)
                r0 += closeAttrs(a0);
                r0 += simpleScalar('text', c1);
                r0 += "</a>";
            }
        }
        r0 += "</div>";

        return r0;
    };
    M.t5.j = j22;
    M.t5.a = 0;

    // match .popup : nb
    M.t6 = function t6(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-popup _hidden"),
            'data-nb': new yr.scalarAttr("popup")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('tail', c0)) {
            a0.a[ "data-nb-tail" ] = new yr.scalarAttr(simpleScalar('tail', c0));
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('title', c0)) {
            r0 += m.f('f8', c0, i0, l0, a0, selectNametest('title', c0, []));
        }
        if (simpleBoolean('content', c0)) {
            r0 += m.f('f7', c0, i0, l0, a0, selectNametest('content', c0, []));
        }
        r0 += "</div>";

        return r0;
    };
    M.t6.j = j27;
    M.t6.a = 0;

    // match .modalPopup : nb
    M.t7 = function t7(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-popup nb-popup_type_modal")
        };
        a0.s = 'div';
        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("popup");
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _hidden");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _hidden");
            }
        }
        if (simpleBoolean('theme', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-popup_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-popup_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ));
            }
        }
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-popup__i" + "\">";
        if (simpleBoolean('close', c0)) {
            r0 += "<a";
            a0.a = {
                'class': new yr.scalarAttr("nb-popup__close " + nodeset2scalar( ( m.s(j31, c0) ) ))
            };
            a0.s = 'a';
            if (nodeset2boolean( m.s(j32, c0) )) {
                var items0 = m.s(j33, c0);
                for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                    var c1 = items0[ i1 ];
                    a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j4, c1) ));
                }
            }
            r0 += closeAttrs(a0);
            r0 += "</a>";
        }
        if (simpleBoolean('title', c0)) {
            r0 += m.f('f8', c0, i0, l0, a0, selectNametest('title', c0, []));
        }
        if (simpleBoolean('content', c0)) {
            r0 += m.f('f7', c0, i0, l0, a0, selectNametest('content', c0, []));
        }
        if (simpleBoolean('buttons', c0)) {
            r0 += m.f('f9', c0, i0, l0, a0, selectNametest('buttons', c0, []));
        }
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t7.j = j29;
    M.t7.a = 0;

    // match .radio-button : nb
    M.t8 = function t8(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'data-nb': new yr.scalarAttr("radio-button"),
            'class': new yr.scalarAttr("nb-radio-button nb-radio-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ) + " nb-radio-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " _init")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        var items0 = selectNametest('group', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            //  var uniq : scalar
            var v113 = "nb-radio-button_" + ( (yr.externals['nb-uniq'])() );

            r0 += "<span class=\"" + "nb-radio-button__button" + "\">";
            r0 += "<input";
            a0.a = {
                'class': new yr.scalarAttr("nb-radio-button__radio"),
                'type': new yr.scalarAttr("radio"),
                'name': new yr.scalarAttr(nodeset2scalar( ( m.s(j37, c1) ) )),
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
            r0 += closeAttrs(a0);
            r0 += '';
            r0 += "<label";
            a0.a = {
                'for': new yr.scalarAttr(( v113 )),
                'class': new yr.scalarAttr("nb-button  js-button nb-button_theme_" + nodeset2scalar( ( m.s(j40, c1) ) ) + " nb-button_size_" + nodeset2scalar( ( m.s(j41, c1) ) )),
                'data-value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c1, []) ) ))
            };
            a0.s = 'label';
            r0 += m.a(m, m.s(j4, c1), 'nb-main-attrs', a0)
            if (simpleBoolean('checked', c1)) {
                var tmp1 = a0.a[ "class" ];
                if (tmp1) {
                    a0.a[ "class" ] = tmp1.addscalar(" nb-button_type_checked");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr(" nb-button_type_checked");
                }
            }
            if (simpleBoolean('disabled', c1)) {
                var tmp1 = a0.a[ "class" ];
                if (tmp1) {
                    a0.a[ "class" ] = tmp1.addscalar(" nb-button_disabled js-disabled");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr(" nb-button_disabled js-disabled");
                }
                a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
            }
            if (!nodeset2boolean( (selectNametest('content', c1, [])) ) && simpleBoolean('icon', c1)) {
                var tmp1 = a0.a[ "class" ];
                if (tmp1) {
                    a0.a[ "class" ] = tmp1.addscalar(" nb-button_only-icon");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr(" nb-button_only-icon");
                }
            }
            if (cmpSN("round", selectNametest('type', c1, []))) {
                var tmp1 = a0.a[ "class" ];
                if (tmp1) {
                    a0.a[ "class" ] = tmp1.addscalar(" nb-button_type_round");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr(" nb-button_type_round");
                }
            }
            r0 += closeAttrs(a0);
            r0 += "<span";
            a0.a = {
                'class': new yr.scalarAttr("nb-button__text")
            };
            a0.s = 'span';
            if ((simpleBoolean('content', c1) && simpleBoolean('icon', c1))) {
                r0 += m.a(m, selectNametest('icon', c1, []), 'nb', a0)
                r0 += closeAttrs(a0);
                r0 += simpleScalar('content', c1);
            } else if ((!simpleBoolean('content', c1) && simpleBoolean('icon', c1))) {
                r0 += m.a(m, selectNametest('icon', c1, []), 'nb', a0)
            } else {
                r0 += closeAttrs(a0);
                r0 += simpleScalar('content', c1);
            }
            r0 += closeAttrs(a0);
            r0 += "</span>";
            r0 += "</label>";
            r0 += "</span>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t8.j = j35;
    M.t8.a = 0;

    // match .select : nb
    M.t9 = function t9(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-select _init  nb-select_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " nb-select_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) )),
            'data-nb': new yr.scalarAttr("select"),
            'data-nb-direction': new yr.scalarAttr(nodeset2scalar( ( selectNametest('direction', c0, []) ) ))
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('within', c0)) {
            a0.a[ "data-nb-within" ] = new yr.scalarAttr(simpleScalar('within', c0));
        }
        r0 += closeAttrs(a0);
        r0 += "<button";
        a0.a = {
            'class': new yr.scalarAttr("nb-button nb-select__button _init nb-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " nb-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) )),
            'data-nb': new yr.scalarAttr("button")
        };
        a0.s = 'button';
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-button_disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (cmpSN("round", selectNametest('mod', c0, []))) {
            a0.a[ "class" ] = new yr.scalarAttr("nb-button nb-button_type_round");
        }
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-button__text" + "\">";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (simpleBoolean('selected', c1)) {
                r0 += nodeset2xml( selectNametest('text', c1, []) );
            }
        }
        r0 += "</span>";
        r0 += "</button>";
        r0 += "<select";
        a0.a = {
            'id': new yr.scalarAttr("nb-select_" + nodeset2scalar( ( selectNametest('id', c0, []) ) )),
            'class': new yr.scalarAttr("nb-select__fallback"),
            'name': new yr.scalarAttr(nodeset2scalar( ( selectNametest('id', c0, []) ) ))
        };
        a0.s = 'select';
        if (nodeset2boolean( (selectNametest('disabled', c0, [])) )) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += closeAttrs(a0);
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<option";
            a0.a = {
            };
            a0.s = 'option';
            a0.a[ "label" ] = new yr.scalarAttr(simpleScalar('text', c1));
            a0.a[ "value" ] = new yr.scalarAttr(simpleScalar('value', c1));
            if (nodeset2boolean( (selectNametest('selected', c1, [])) )) {
                a0.a[ "selected" ] = new yr.scalarAttr("");
            }
            r0 += closeAttrs(a0);
            r0 += nodeset2xml( selectNametest('text', c1, []) );
            r0 += "</option>";
        }
        r0 += "</select>";
        r0 += "</div>";

        return r0;
    };
    M.t9.j = j42;
    M.t9.a = 0;

    // match .checkbox : nb
    M.t10 = function t10(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var uniq : scalar
        var v114 = "nb-checkbox_" + ( (yr.externals['nb-uniq'])() );

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("nb-checkbox nb-checkbox_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " nb-checkbox_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) )),
            'for': new yr.scalarAttr(( v114 ))
        };
        a0.s = 'label';
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-checkbox_disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-checkbox_disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("nb-checkbox__input"),
            'type': new yr.scalarAttr(nodeset2scalar( ( selectNametest('type', c0, []) ) )),
            'id': new yr.scalarAttr(( v114 ))
        };
        a0.s = 'input';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (simpleBoolean('checked', c0)) {
            a0.a[ "checked" ] = new yr.scalarAttr("checked");
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<span class=\"" + "nb-checkbox__flag nb-checkbox__flag_type_" + nodeset2attrvalue( ( selectNametest('type', c0, []) ) ) + "\"><span class=\"" + "nb-checkbox__flag__icon" + "\"></span></span>";
        r0 += "<span class=\"" + "nb-checkbox__label" + "\">";
        r0 += nodeset2xml( selectNametest('text', c0, []) );
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t10.j = j48;
    M.t10.a = 0;

    // match .input : nb
    M.t11 = function t11(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'data-nb': new yr.scalarAttr("input"),
            'class': new yr.scalarAttr("nb-input")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('size', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-input_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-input_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ));
            }
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-input_disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-input_disabled");
            }
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        r0 += closeAttrs(a0);
        r0 += "<input";
        a0.a = {
            'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('content', c0, []) ) )),
            'class': new yr.scalarAttr("nb-input__input")
        };
        a0.s = 'input';
        var items0 = m.s(j10, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j4, c1) ));
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += m.a(m, selectNametest('*', c0, []), 'nb-content', a0)
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "</span>";

        return r0;
    };
    M.t11.j = j49;
    M.t11.a = 0;

    // match .input-group : nb
    M.t12 = function t12(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-input-group"),
            'data-nb': new yr.scalarAttr("input-group")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-input-group_disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-input-group_disabled");
            }
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        r0 += closeAttrs(a0);
        var items0 = selectNametest('*', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (c1.name == "button") {
                r0 += m.f('f2', c1, i1, l1, a0, m.s(j4, c1));
            } else if (c1.name == "input") {
                r0 += m.f('f13', c1, i1, l1, a0, m.s(j4, c1));
            }
        }
        r0 += "</div>";

        return r0;
    };
    M.t12.j = j50;
    M.t12.a = 0;

    // match .progress : nb
    M.t13 = function t13(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-progress _init nb-progress_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) )),
            'data-nb': new yr.scalarAttr("progress"),
            'data-nb-type': new yr.scalarAttr(nodeset2scalar( ( selectNametest('type', c0, []) ) )),
            'data-nb-progress': new yr.scalarAttr(nodeset2scalar( ( selectNametest('start', c0, []) ) ))
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('bar', c0)) {
            r0 += "<div class=\"" + "nb-progress__bar js-bar" + "\" style=\"" + "width: " + nodeset2attrvalue( ( selectNametest('start', c0, []) ) ) + "%" + "\"></div>";
        }
        if (simpleBoolean('title', c0)) {
            r0 += "<div class=\"" + "nb-progress__title js-title" + "\">";
            if (cmpSN("percentage", selectNametest('type', c0, []))) {
                r0 += scalar2xml( simpleScalar('start', c0) + "%" );
            } else {
                r0 += nodeset2xml( selectNametest('title', c0, []) );
            }
            r0 += "</div>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t13.j = j51;
    M.t13.a = 0;

    // match .icon : nb
    M.t14 = function t14(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<img src=\"" + "//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" + "\" class=\"" + "nb-icon nb-icon_" + nodeset2attrvalue( ( m.s(j4, c0) ) ) + "\"/>";

        return r0;
    };
    M.t14.j = j17;
    M.t14.a = 0;

    // match .icon[ .icon ] : nb
    M.t15 = function t15(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<img src=\"" + "//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" + "\" class=\"" + "nb-icon nb-icon_" + nodeset2attrvalue( ( selectNametest('icon', c0, []) ) ) + " nb-icon_size_" + nodeset2attrvalue( ( selectNametest('size', c0, []) ) ) + "\"/>";

        return r0;
    };
    M.t15.j = j54;
    M.t15.a = 0;

    // match .paranja : nb
    M.t16 = function t16(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-paranja nb-paranja_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) )),
            'data-nb': new yr.scalarAttr("paranja")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</div>";

        return r0;
    };
    M.t16.j = j55;
    M.t16.a = 0;

    // match .island : nb
    M.t17 = function t17(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-island")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('padding', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-island_padding_" + nodeset2scalar( ( selectNametest('padding', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-island_padding_" + nodeset2scalar( ( selectNametest('padding', c0, []) ) ));
            }
        }
        if (simpleBoolean('type', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-island_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-island_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) ));
            }
        }
        r0 += closeAttrs(a0);
        r0 += simpleScalar('content', c0);
        r0 += "</div>";

        return r0;
    };
    M.t17.j = j56;
    M.t17.a = 0;

    // match .dropzone : nb
    M.t18 = function t18(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-dropzone")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (!(cmpSN("modal", selectNametest('type', c0, [])))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-dropzone_type_static");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-dropzone_type_static");
            }
        }
        if (simpleBoolean('type', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-dropzone_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-dropzone_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) ));
            }
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('head', c0)) {
            r0 += "<div class=\"" + "nb-dropzone__head" + "\">";
            r0 += nodeset2xml( selectNametest('head', c0, []) );
            r0 += "</div>";
        }
        if (simpleBoolean('text', c0)) {
            r0 += "<div class=\"" + "nb-dropzone__text" + "\">";
            r0 += simpleScalar('text', c0);
            if (!(cmpSN("false", selectNametest('button', c0, [])))) {
                r0 += m.f('f2', c0, i0, l0, a0, selectNametest('button', c0, []));
            }
            r0 += "</div>";
        }
        if (cmpSN("modal", selectNametest('type', c0, []))) {
            r0 += "<div class=\"" + "nb-dropzone__cover js-dropzone" + "\"></div>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t18.j = j58;
    M.t18.a = 0;

    // match .loader : nb
    M.t19 = function t19(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-loader nb-loader_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ))
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-loader__spinner")
        };
        a0.s = 'span';
        if (simpleBoolean('color', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-loader__spinner_color_" + nodeset2scalar( ( selectNametest('color', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-loader__spinner_color_" + nodeset2scalar( ( selectNametest('color', c0, []) ) ));
            }
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</span>";

        return r0;
    };
    M.t19.j = j60;
    M.t19.a = 0;

    // match .slider : nb
    M.t20 = function t20(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-slider _init nb-slider_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + "  nb-slider_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ) + " nb-slider_orientation_" + nodeset2scalar( ( selectNametest('orientation', c0, []) ) ) + "  nb-slider__handle_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) )),
            'data-nb-value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c0, []) ) ))
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("slider");
        }
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-slider__body nb-slider__body_type_" + nodeset2attrvalue( ( selectNametest('type', c0, []) ) ) + "\">";
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("ui-slider-handle")
        };
        a0.s = 'label';
        if (cmpSN("s", selectNametest('size', c0, []))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-slider__small-handle");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-slider__small-handle");
            }
        } else {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-slider__handle");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-slider__handle");
            }
        }
        if (nodeset2boolean( m.s(j64, c0) )) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" " + nodeset2scalar( ( m.s(j64, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" " + nodeset2scalar( ( m.s(j64, c0) ) ));
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-button__text" + "\">";
        r0 += "<input class=\"" + "nb-slider__fallback" + "\" type=\"" + "text" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('value', c0, []) ) ) + "\" id=\"" + nodeset2attrvalue( ( selectNametest('id', c0, []) ) ) + "__value" + "\"/>";
        r0 += "</span>";
        r0 += "</label>";
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t20.j = j62;
    M.t20.a = 0;

    // match .tabs : nb
    M.t21 = function t21(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var prefix : scalar
        var v115 = "tabs-" + ( (yr.externals['nb-uniq'])() );

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-tabs nb-tabs_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " _init"),
            'data-nb': new yr.scalarAttr("tabs")
        };
        a0.s = 'div';
        if (simpleBoolean('rise', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-tabs_rise_" + nodeset2scalar( ( selectNametest('rise', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-tabs_rise_" + nodeset2scalar( ( selectNametest('rise', c0, []) ) ));
            }
        }
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<ul class=\"" + "nb-tabs__tabs" + "\">";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<li";
            a0.a = {
                'class': new yr.scalarAttr("nb-tabs__tab")
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
            r0 += "<a class=\"" + "nb-tabs__link _link" + "\" href=\"" + "#" + scalar2attrvalue( ( v115 ) ) + "-" + scalar2attrvalue( ( i1 ) ) + "\">";
            r0 += nodeset2xml( selectNametest('title', c1, []) );
            r0 += "</a>";
            r0 += "</li>";
        }
        r0 += "</ul>";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<div class=\"" + "nb-tabs__panel" + "\" id=\"" + scalar2attrvalue( ( v115 ) ) + "-" + scalar2attrvalue( ( i1 ) ) + "\">";
            r0 += simpleScalar('content', c1);
            r0 += "</div>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t21.j = j65;
    M.t21.a = 0;

    // match .arrow : nb
    M.t22 = function t22(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-arrow _init"),
            'data-nb': new yr.scalarAttr("arrow")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (!(cmpSN("true", selectNametest('search', c0, [])))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-arrow_service");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-arrow_service");
            }
        } else {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-arrow_search");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-arrow_search");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-arrow__top" + "\"></div>";
        r0 += "<div class=\"" + "nb-arrow__bottom" + "\"></div>";
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-arrow__content")
        };
        a0.s = 'div';
        if (!(cmpSN("true", selectNametest('search', c0, [])))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-arrow__service");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-arrow__service");
            }
            r0 += closeAttrs(a0);
            r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('href', c0, []) ) ) + "\" class=\"" + "_link nb-arrow__service__name" + "\">" + nodeset2xml( ( selectNametest('text', c0, []) ) ) + "</a>";
        } else {
            //  var input : object
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "m";
            r1[ "class" ] = "nb-arrow__input";
            var r2 = {};
            var a2 = { a: {} };
            r2[ "autocomplete" ] = "off";
            r2[ "value" ] = yr.nodeset2data(selectNametest('value', c0, []));
            r2[ "name" ] = "text";
            r1[ "attrs" ] = r2;
            var v116 = r1;

            //  var button : object
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "m";
            r1[ "content" ] = yr.nodeset2data(selectNametest('buttonContent', c0, []));
            r1[ "class" ] = "nb-arrow__button";
            var r2 = {};
            var a2 = { a: {} };
            r2[ "type" ] = "submit";
            r1[ "attrs" ] = r2;
            var v117 = r1;

            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-arrow__search");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-arrow__search");
            }
            r0 += closeAttrs(a0);
            r0 += "<form";
            a0.a = {
            };
            a0.s = 'form';
            if (simpleBoolean('action', c0)) {
                a0.a[ "action" ] = new yr.scalarAttr(simpleScalar('action', c0));
            }
            r0 += closeAttrs(a0);
            r0 += m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v117 ));
            if (simpleBoolean('text', c0)) {
                r0 += "<div class=\"" + "nb-arrow__name__wrap" + "\">";
                r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('href', c0, []) ) ) + "\" class=\"" + "nb-arrow__name _link" + "\">" + nodeset2xml( ( selectNametest('text', c0, []) ) ) + "</a>";
                r0 += "</div>";
            }
            r0 += "<div class=\"" + "nb-arrow__input__wrap" + "\">";
            r0 += m.f('f13', c0, i0, l0, a0, yr.object2nodeset( v116 ));
            r0 += "</div>";
            if (simpleBoolean('requests', c0)) {
                r0 += "<div class=\"" + "nb-arrow__requests__wrap" + "\">";
                r0 += "<span class=\"" + "nb-arrow__input_fake" + "\">" + " " + "</span>";
                r0 += "<div class=\"" + "nb-arrow__requests" + "\">" + " — " + nodeset2xml( ( selectNametest('requests', c0, []) ) ) + " " + "</div>";
                r0 += "</div>";
            }
            r0 += "</form>";
        }
        r0 += closeAttrs(a0);
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t22.j = j68;
    M.t22.a = 0;

    // match .header : nb
    M.t23 = function t23(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-header _init"),
            'data-nb': new yr.scalarAttr("header")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-header__actions" + "\">";
        if (cmpSN("true", selectNametest('settings', c0, []))) {
            //  var iconSettings : object
            var r1 = {};
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "icon" ] = "settings";
            r2[ "size" ] = "m";
            r1[ "icon" ] = r2;
            var v118 = r1;

            r0 += "<div class=\"" + "nb-header__button" + "\">";
            r0 += "<div";
            a0.a = {
                'class': new yr.scalarAttr("nb-header__button__icon")
            };
            a0.s = 'div';
            r0 += m.a(m, m.n(j17, yr.object2nodeset( v118 )), 'nb', a0)
            r0 += closeAttrs(a0);
            r0 += "</div>";
            r0 += "</div>";
        }
        if (cmpSN("true", selectNametest('services', c0, []))) {
            //  var iconServices : object
            var r1 = {};
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "icon" ] = "services";
            r2[ "size" ] = "m";
            r1[ "icon" ] = r2;
            var v119 = r1;

            r0 += "<div class=\"" + "nb-header__button" + "\">";
            r0 += "<div";
            a0.a = {
                'class': new yr.scalarAttr("nb-header__button__icon")
            };
            a0.s = 'div';
            r0 += m.a(m, m.n(j17, yr.object2nodeset( v119 )), 'nb', a0)
            r0 += closeAttrs(a0);
            r0 += "</div>";
            r0 += "</div>";
        }
        if (simpleBoolean('user', c0)) {
            r0 += m.f('f25', c0, i0, l0, a0, selectNametest('user', c0, []));
        }
        r0 += "</div>";
        r0 += "<div class=\"" + "nb-header__main" + "\">";
        r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('yaHref', c0, []) ) ) + "\" class=\"" + "nb-header__logo" + "\"></a>";
        r0 += m.f('f23', c0, i0, l0, a0, selectNametest('arrow', c0, []));
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t23.j = j73;
    M.t23.a = 0;

    // match .user : nb
    M.t24 = function t24(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-user nb-user_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " _init"),
            'data-nb': new yr.scalarAttr("user")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('justify', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-user_justify");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-user_justify");
            }
        }
        if (!simpleBoolean('rightToLeft', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-user_direction_ltr");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-user_direction_ltr");
            }
            r0 += m.a(m, m.s(j4, c0), 'nb-user-pic', a0)
            r0 += m.a(m, m.s(j4, c0), 'nb-user-name', a0)
        } else {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-user_direction_rtl");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-user_direction_rtl");
            }
            r0 += m.a(m, m.s(j4, c0), 'nb-user-name', a0)
            r0 += m.a(m, m.s(j4, c0), 'nb-user-pic', a0)
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";

        return r0;
    };
    M.t24.j = j76;
    M.t24.a = 0;

    // match .user : nb-user-pic
    M.t25 = function t25(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-user__avatar nb-user__avatar_size_" + nodeset2attrvalue( ( selectNametest('size', c0, []) ) ) + "\" style=\"" + "background-image: url('" + nodeset2attrvalue( ( selectNametest('userpic', c0, []) ) ) + "')" + "\">";
        if (simpleScalar('notices', c0) > 0) {
            r0 += "<span class=\"" + "nb-user__notice-count" + "\">";
            r0 += nodeset2xml( selectNametest('notices', c0, []) );
            r0 += "</span>";
        }
        r0 += "</span>";

        return r0;
    };
    M.t25.j = j76;
    M.t25.a = 0;

    // match .user : nb-user-name
    M.t26 = function t26(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-user__label" + "\">";
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-user__name _link"),
            'title': new yr.scalarAttr(nodeset2scalar( ( selectNametest('username', c0, []) ) ))
        };
        a0.s = 'span';
        r0 += m.a(m, selectNametest('username', c0, []), 'nb-user-name', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";
        if (simpleBoolean('email', c0)) {
            r0 += "<span";
            a0.a = {
                'class': new yr.scalarAttr("nb-user__email"),
                'title': new yr.scalarAttr(nodeset2scalar( ( selectNametest('email', c0, []) ) ))
            };
            a0.s = 'span';
            r0 += m.a(m, selectNametest('email', c0, []), 'nb-user-name', a0)
            r0 += closeAttrs(a0);
            r0 += "</span>";
        }
        r0 += "</span>";

        return r0;
    };
    M.t26.j = j76;
    M.t26.a = 0;

    // match .user.username : nb-user-name
    M.t27 = function t27(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( m.s(j4, c0) );

        return r0;
    };
    M.t27.j = j84;
    M.t27.a = 0;

    // match .user.email : nb-user-name
    M.t28 = function t28(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( m.s(j4, c0) );

        return r0;
    };
    M.t28.j = j85;
    M.t28.a = 0;

    // match .suggest : nb
    M.t29 = function t29(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var input : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
        r1[ "content" ] = yr.nodeset2data(selectNametest('content', c0, []));
        r1[ "class" ] = "nb-suggest__input";
        r1[ "attrs" ] = yr.nodeset2data(selectNametest('attrsInput', c0, []));
        var v120 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-suggest__container _init"),
            'data-nb': new yr.scalarAttr("suggest")
        };
        a0.s = 'div';
        a0.a[ "data-countMax" ] = new yr.scalarAttr(simpleScalar('countMax', c0));
        a0.a[ "data-type" ] = new yr.scalarAttr(simpleScalar('type', c0));
        a0.a[ "data-size" ] = new yr.scalarAttr(simpleScalar('size', c0));
        a0.a[ "data-source" ] = new yr.scalarAttr(simpleScalar('source', c0));
        a0.a[ "data-highlight" ] = new yr.scalarAttr(simpleScalar('highlight', c0));
        a0.a[ "data-class-suggest" ] = new yr.scalarAttr("nb-island nb-island_type_fly nb-suggest nb-suggest_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ));
        if (simpleBoolean('class-suggest', c0)) {
            var tmp0 = a0.a[ "data-class-suggest" ];
            if (tmp0) {
                a0.a[ "data-class-suggest" ] = tmp0.addscalar(" " + nodeset2scalar( ( selectNametest('class-suggest', c0, []) ) ));
            } else {
                a0.a[ "data-class-suggest" ] = new yr.scalarAttr(" " + nodeset2scalar( ( selectNametest('class-suggest', c0, []) ) ));
            }
        }
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += m.f('f13', c0, i0, l0, a0, yr.object2nodeset( v120 ));
        r0 += "</div>";

        return r0;
    };
    M.t29.j = j86;
    M.t29.a = 0;

    // match / : nb-suggest
    M.t30 = function t30(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<li>";
        r0 += "<a";
        a0.a = {
        };
        a0.s = 'a';
        r0 += m.a(m, selectNametest('item', c0, []), 'nb-suggest', a0)
        r0 += closeAttrs(a0);
        r0 += "</a>";
        r0 += "</li>";

        return r0;
    };
    M.t30.j = 1;
    M.t30.a = 1;

    // match /[ .type == "default" ].item : nb-suggest
    M.t31 = function t31(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += simpleScalar('label', c0);

        return r0;
    };
    M.t31.j = j94;
    M.t31.a = 1;

    // match /[ .type == "username" ].item : nb-suggest
    M.t32 = function t32(m, c0, i0, l0, a0) {
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
        var v121 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f25', c0, i0, l0, a0, yr.object2nodeset( v121 ));

        return r0;
    };
    M.t32.j = j96;
    M.t32.a = 1;

    // match .user[ .mod == "suggest" && .usernameHighlighted ].username : nb-user-name
    M.t33 = function t33(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2scalar( m.s(j101, c0) );

        return r0;
    };
    M.t33.j = j100;
    M.t33.a = 0;

    // match .user[ .mod == "suggest" && .emailHighlighted ].email : nb-user-name
    M.t34 = function t34(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2scalar( m.s(j103, c0) );

        return r0;
    };
    M.t34.j = j102;
    M.t34.a = 0;

    // match .toggler : nb
    M.t35 = function t35(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
            'tabindex': new yr.scalarAttr("1"),
            'class': new yr.scalarAttr("nb-toggler nb-toggler_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " _init"),
            'data-nb': new yr.scalarAttr("toggler")
        };
        a0.s = 'a';
        r0 += m.a(m, m.s(j4, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('checked', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-toggler_checked");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-toggler_checked");
            }
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-toggler_disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-toggler_disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<label class=\"" + "nb-toggler__label" + "\">";
        r0 += "<input";
        a0.a = {
            'type': new yr.scalarAttr("checkbox"),
            'class': new yr.scalarAttr("nb-toggler__checkbox")
        };
        a0.s = 'input';
        if (nodeset2boolean( m.s(j21, c0) )) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( m.s(j21, c0) ));
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
        r0 += "<div class=\"" + "nb-toggler__container" + "\">";
        r0 += "<div class=\"" + "nb-toggler__sticker nb-toggler__sticker_left" + "\">";
        r0 += "<span class=\"" + "nb-toggler__text" + "\">";
        r0 += nodeset2xml( selectNametest('leftText', c0, []) );
        r0 += "</span>";
        r0 += "</div>";
        r0 += "<div class=\"" + "nb-toggler__sticker nb-toggler__sticker_right" + "\">";
        r0 += "<span class=\"" + "nb-toggler__text" + "\">";
        r0 += nodeset2xml( selectNametest('rightText', c0, []) );
        r0 += "</span>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "nb-toggler__knob" + "\"></div>";
        r0 += "</a>";

        return r0;
    };
    M.t35.j = j104;
    M.t35.a = 0;

    // match /
    M.t36 = function t36(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var check : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "Компактный вид";
        r1[ "class" ] = "js-toggle-compact";
        var v122 = r1;

        //  var check2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "HTML";
        r1[ "class" ] = "js-toggle-html";
        var v123 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-toggle nb-island nb-island_fly" + "\">";
        r0 += "<div class=\"" + "demo-toggle__section" + "\">";
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset( v122 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-toggle__section demo-toggle__section_second" + "\">";
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset( v123 ));
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Кнопки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f43', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Флаги";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f47', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Поля ввода";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f60', c0, i0, l0, a0);
        r0 += m.f('f61', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Прогрессбары";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f55', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Острова";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f65', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Крутилки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f69', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Иконки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f72', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Слайдеры";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f75', c0, i0, l0, a0);
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
        r0 += m.f('f33', c0, i0, l0, a0);
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
        r0 += m.f('f53', c0, i0, l0, a0);
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
        r0 += m.f('f76', c0, i0, l0, a0);
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
        r0 += m.f('f82', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Suggests";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f90', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Arrows";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f87', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Шапка";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f88', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Блок юзера";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f89', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Dropzone";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f54', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Toggler";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f91', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t36.j = 1;
    M.t36.a = 1;

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
            "button": [
                "t2"
            ],
            "buttonLink": [
                "t3"
            ],
            "buttonAttach": [
                "t4"
            ],
            "popupMenu": [
                "t5"
            ],
            "popup": [
                "t6"
            ],
            "modalPopup": [
                "t7"
            ],
            "radio-button": [
                "t8"
            ],
            "select": [
                "t9"
            ],
            "checkbox": [
                "t10"
            ],
            "input": [
                "t11"
            ],
            "input-group": [
                "t12"
            ],
            "progress": [
                "t13"
            ],
            "icon": [
                "t15",
                "t14"
            ],
            "paranja": [
                "t16"
            ],
            "island": [
                "t17"
            ],
            "dropzone": [
                "t18"
            ],
            "loader": [
                "t19"
            ],
            "slider": [
                "t20"
            ],
            "tabs": [
                "t21"
            ],
            "arrow": [
                "t22"
            ],
            "header": [
                "t23"
            ],
            "user": [
                "t24"
            ],
            "suggest": [
                "t29"
            ],
            "toggler": [
                "t35"
            ]
        },
        "nb-user-pic": {
            "user": [
                "t25"
            ]
        },
        "nb-user-name": {
            "user": [
                "t26"
            ],
            "username": [
                "t33",
                "t27"
            ],
            "email": [
                "t34",
                "t28"
            ]
        },
        "nb-suggest": {
            "": [
                "t30"
            ],
            "item": [
                "t32",
                "t31"
            ]
        },
        "": {
            "": [
                "t36"
            ]
        }
    };
    M.imports = [];

    yr.register('main', M);

})();
