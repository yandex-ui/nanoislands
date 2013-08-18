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

    // func nb-button(nodeset options) : xml
    M.f1 = function f1(m, c0, i0, l0, a0, v2) {
        v2 = (v2 === undefined) ? [] : v2;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        var v3 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "button", (yr.externals['nb-extend'])(yr.object2nodeset( v3 ), v2));

        return r0;
    };

    // func nb-button-link(nodeset options) : xml
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
        r0 += m.f('f0', c0, i0, l0, a0, "buttonLink", (yr.externals['nb-extend'])(yr.object2nodeset( v5 ), v4));

        return r0;
    };

    // func nb-button-attach(nodeset options) : xml
    M.f3 = function f3(m, c0, i0, l0, a0, v6) {
        v6 = (v6 === undefined) ? [] : v6;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        var v7 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "buttonAttach", (yr.externals['nb-extend'])(yr.object2nodeset( v7 ), v6));

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

    // func nb-radio-button(nodeset options) : xml
    M.f7 = function f7(m, c0, i0, l0, a0, v14) {
        v14 = (v14 === undefined) ? [] : v14;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "type" ] = "radio";
        var v15 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "radio-button", (yr.externals['nb-extend'])(yr.object2nodeset( v15 ), v14));

        return r0;
    };

    // func nb-select(nodeset select) : xml
    M.f8 = function f8(m, c0, i0, l0, a0, v16) {
        v16 = (v16 === undefined) ? [] : v16;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "direction" ] = "bottom";
        var v17 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "select", (yr.externals['nb-extend'])(yr.object2nodeset( v17 ), v16));

        return r0;
    };

    // func nb-checkbox(nodeset options) : xml
    M.f9 = function f9(m, c0, i0, l0, a0, v18) {
        v18 = (v18 === undefined) ? [] : v18;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "type" ] = "checkbox";
        var v19 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "checkbox", (yr.externals['nb-extend'])(yr.object2nodeset( v19 ), v18));

        return r0;
    };

    // func nb-input(nodeset options) : xml
    M.f10 = function f10(m, c0, i0, l0, a0, v20) {
        v20 = (v20 === undefined) ? [] : v20;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var v21 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "input", (yr.externals['nb-extend'])(yr.object2nodeset( v21 ), v20));

        return r0;
    };

    // func nb-input-group(nodeset options) : xml
    M.f11 = function f11(m, c0, i0, l0, a0, v22) {
        v22 = (v22 === undefined) ? [] : v22;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "input-group", v22);

        return r0;
    };

    // func nb-progress(nodeset options) : xml
    M.f12 = function f12(m, c0, i0, l0, a0, v23) {
        v23 = (v23 === undefined) ? [] : v23;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "bar" ] = "true";
        r1[ "start" ] = "0";
        r1[ "type" ] = "percentage";
        r1[ "title" ] = "";
        var v24 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "progress", (yr.externals['nb-extend'])(yr.object2nodeset( v24 ), v23));

        return r0;
    };

    // func nb-icon(icon) : xml
    M.f13 = function f13(m, c0, i0, l0, a0, v25) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "icon" ] = v25;
        r1[ "size" ] = "s";
        var v26 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "icon", yr.object2nodeset( v26 ));

        return r0;
    };

    // func nb-paranja(nodeset options) : xml
    M.f14 = function f14(m, c0, i0, l0, a0, v27) {
        v27 = (v27 === undefined) ? [] : v27;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "theme" ] = "dark";
        var v28 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "paranja", (yr.externals['nb-extend'])(yr.object2nodeset( v28 ), v27));

        return r0;
    };

    // func nb-island(nodeset options) : xml
    M.f15 = function f15(m, c0, i0, l0, a0, v29) {
        v29 = (v29 === undefined) ? [] : v29;
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "";
        var v30 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "island", (yr.externals['nb-extend'])(yr.object2nodeset( v30 ), v29));

        return r0;
    };

    // func nb-dropzone(nodeset options) : xml
    M.f16 = function f16(m, c0, i0, l0, a0, v31) {
        v31 = (v31 === undefined) ? [] : v31;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "theme" ] = "pseudo";
        r2[ "class" ] = "nb-dropzone__button";
        r1[ "button" ] = r2;
        var v32 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "dropzone", (yr.externals['nb-deep-extend'])(yr.object2nodeset( v32 ), v31));

        return r0;
    };

    // func nb-loader(nodeset options) : xml
    M.f17 = function f17(m, c0, i0, l0, a0, v33) {
        v33 = (v33 === undefined) ? [] : v33;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v34 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "loader", (yr.externals['nb-extend'])(yr.object2nodeset( v34 ), v33));

        return r0;
    };

    // func nb-slider(nodeset options) : xml
    M.f18 = function f18(m, c0, i0, l0, a0, v35) {
        v35 = (v35 === undefined) ? [] : v35;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        r1[ "value" ] = 0;
        r1[ "type" ] = "range";
        r1[ "theme" ] = "normal";
        r1[ "orientation" ] = "horiz";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "type" ] = "square";
        r1[ "handle" ] = r2;
        var v36 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "slider", (yr.externals['nb-deep-extend'])(yr.object2nodeset( v36 ), v35));

        return r0;
    };

    // func nb-tabs(nodeset options) : xml
    M.f19 = function f19(m, c0, i0, l0, a0, v37) {
        v37 = (v37 === undefined) ? [] : v37;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v38 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "tabs", (yr.externals['nb-extend'])(yr.object2nodeset( v38 ), v37));

        return r0;
    };

    // func nb-arrow(nodeset arrow) : xml
    M.f20 = function f20(m, c0, i0, l0, a0, v39) {
        v39 = (v39 === undefined) ? [] : v39;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "buttonContent" ] = "Найти";
        var v40 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "arrow", (yr.externals['nb-extend'])(yr.object2nodeset( v40 ), v39));

        return r0;
    };

    // func nb-header(nodeset header) : xml
    M.f21 = function f21(m, c0, i0, l0, a0, v41) {
        v41 = (v41 === undefined) ? [] : v41;
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
        var v42 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "header", (yr.externals['nb-extend'])(yr.object2nodeset( v42 ), v41));

        return r0;
    };

    // func nb-user(nodeset user) : xml
    M.f22 = function f22(m, c0, i0, l0, a0, v43) {
        v43 = (v43 === undefined) ? [] : v43;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "userpic" ] = "/libs/nanoislands/blocks/header/avatar.png";
        var v44 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "user", (yr.externals['nb-extend'])(yr.object2nodeset( v44 ), v43));

        return r0;
    };

    // func podium(xml markup) : xml
    M.f23 = function f23(m, c0, i0, l0, a0, v45) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-podium" + "\">";
        r0 += v45;
        r0 += "</div>";

        return r0;
    };

    // func code(xml markup) : xml
    M.f24 = function f24(m, c0, i0, l0, a0, v46) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-code demo-code_sample" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "js-beautify" + "\">";
        r0 += scalar2xml( xml2scalar( v46 ) );
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";

        return r0;
    };

    // func show(xml markup) : xml
    M.f25 = function f25(m, c0, i0, l0, a0, v47) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f23', c0, i0, l0, a0, v47);
        r0 += m.f('f24', c0, i0, l0, a0, v47);
        r0 += "</div>";

        return r0;
    };

    // func select-medium() : xml
    M.f26 = function f26(m, c0, i0, l0, a0) {
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
        var v48 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f8', c0, i0, l0, a0, yr.object2nodeset( v48 ));

        return r0;
    };

    // func select-small() : xml
    M.f27 = function f27(m, c0, i0, l0, a0) {
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
        var v49 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f8', c0, i0, l0, a0, yr.object2nodeset( v49 ));

        return r0;
    };

    // func selects() : xml
    M.f28 = function f28(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-select_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f26', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-select_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f27', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func button-medium() : xml
    M.f29 = function f29(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Применить";
        var v50 = r1;

        //  var link : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Проверить";
        r1[ "href" ] = "#";
        var v51 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v50 ));
        r0 += " ";
        r0 += m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v51 ));

        return r0;
    };

    // func button-small() : xml
    M.f30 = function f30(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var button : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Применить";
        r1[ "size" ] = "s";
        var v52 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v52 ));

        return r0;
    };

    // func button-action() : xml
    M.f31 = function f31(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var buttonM : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Отправить";
        r1[ "size" ] = "m";
        r1[ "theme" ] = "action";
        var v53 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v53 ));

        return r0;
    };

    // func button-pseudo() : xml
    M.f32 = function f32(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var buttonM : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Выбрать…";
        r1[ "size" ] = "m";
        r1[ "theme" ] = "pseudo";
        var v54 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v54 ));

        return r0;
    };

    // func button-images() : xml
    M.f33 = function f33(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var icon : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "icon" ] = "eye_16";
        var v55 = r1;

        //  var button : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "icon" ] = "link_16";
        r1[ "content" ] = "Открыть";
        var v56 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v55 ));
        r0 += " ";
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v56 ));

        return r0;
    };

    // func button-disabled() : xml
    M.f34 = function f34(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var disabled : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Кнопка";
        r1[ "disabled" ] = true;
        var v57 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v57 ));

        return r0;
    };

    // func radio-button() : xml
    M.f35 = function f35(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var radioGroup : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "name" ] = "btn";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "content" ] = "Все";
        r3[ "value" ] = "btn1";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "content" ] = "Непрочитанные";
        r3[ "value" ] = "btn3";
        r3[ "checked" ] = true;
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "content" ] = "Прочитанные";
        r3[ "value" ] = "btn4";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "content" ] = "Удаленные";
        r3[ "value" ] = "btn2";
        r3[ "disabled" ] = true;
        r2.push(r3);
        r1[ "group" ] = r2;
        var v58 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f7', c0, i0, l0, a0, yr.object2nodeset( v58 ));

        return r0;
    };

    // func attach-button() : xml
    M.f36 = function f36(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var attach : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "mod" ] = "attach";
        r1[ "content" ] = "Прикрепить файл";
        var v59 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset( v59 ));

        return r0;
    };

    // func buttons() : xml
    M.f37 = function f37(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f29', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f30', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Action ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_theme_action";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f31', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Pseudo ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_theme_pseudo";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f32', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Disabled ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_disabled";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f34', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Кнопка с иконкой";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f33', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Радио-группа";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f35', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Attach ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_type_attach";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f36', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func checkbox-radio() : xml
    M.f38 = function f38(m, c0, i0, l0, a0) {
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
        var v60 = r1;

        //  var radio2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "radio";
        r1[ "text" ] = "Паук";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "biotype";
        r1[ "attrs" ] = r2;
        var v61 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset( v60 ));
        r0 += "<br/>";
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset( v61 ));

        return r0;
    };

    // func checkbox-check() : xml
    M.f39 = function f39(m, c0, i0, l0, a0) {
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
        var v62 = r1;

        //  var radio2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "Сын";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "task";
        r1[ "attrs" ] = r2;
        var v63 = r1;

        //  var radio3 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "Дом";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "task";
        r1[ "attrs" ] = r2;
        var v64 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset( v62 ));
        r0 += "<br/>";
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset( v63 ));
        r0 += "<br/>";
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset( v64 ));

        return r0;
    };

    // func checkbox-small() : xml
    M.f40 = function f40(m, c0, i0, l0, a0) {
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
        var v65 = r1;

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
        var v66 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset( v65 ));
        r0 += "<br/>";
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset( v66 ));

        return r0;
    };

    // func checkbox() : xml
    M.f41 = function f41(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Radio";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f38', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Checkbox";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f39', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-checkbox_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f40', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func toggle-default() : xml
    M.f42 = function f42(m, c0, i0, l0, a0) {
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
    M.f43 = function f43(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup1', how: { where: 'left', what: 'right' }}" + "\" href=\"" + "#right" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап справа";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-to-left() : xml
    M.f44 = function f44(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup2', how: { where: 'right', what: 'left' }}" + "\" href=\"" + "#left" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап слева";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-to-top() : xml
    M.f45 = function f45(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup3', how: { where: 'top', what: 'bottom' }}" + "\" href=\"" + "#top" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап сверху";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-modal() : xml
    M.f46 = function f46(m, c0, i0, l0, a0) {
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
    M.f47 = function f47(m, c0, i0, l0, a0) {
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
        r3[ "href" ] = "#";
        r3[ "text" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v67 = r1;

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
        var v68 = r1;

        //  var toLeft : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup2";
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
        var v69 = r1;

        //  var toTop : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup3";
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
        var v70 = r1;

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
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "content" ] = "Отправить";
        r3[ "size" ] = "m";
        r3[ "theme" ] = "action";
        r3[ "class" ] = "nb-popup__button";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "content" ] = "Сохранить";
        r3[ "size" ] = "m";
        r3[ "class" ] = "nb-popup__button";
        r2.push(r3);
        r1[ "buttons" ] = r2;
        var v71 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f23', c0, i0, l0, a0, m.f('f42', c0, i0, l0, a0));
        r0 += m.f('f24', c0, i0, l0, a0, m.f('f42', c0, i0, l0, a0));
        r0 += m.f('f24', c0, i0, l0, a0, m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v67 )));
        r0 += "</div>";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v67 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f23', c0, i0, l0, a0, m.f('f43', c0, i0, l0, a0));
        r0 += m.f('f24', c0, i0, l0, a0, m.f('f43', c0, i0, l0, a0));
        r0 += m.f('f24', c0, i0, l0, a0, m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v68 )));
        r0 += "</div>";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v68 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f23', c0, i0, l0, a0, m.f('f44', c0, i0, l0, a0));
        r0 += m.f('f24', c0, i0, l0, a0, m.f('f44', c0, i0, l0, a0));
        r0 += m.f('f24', c0, i0, l0, a0, m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v69 )));
        r0 += "</div>";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v69 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f23', c0, i0, l0, a0, m.f('f45', c0, i0, l0, a0));
        r0 += m.f('f24', c0, i0, l0, a0, m.f('f45', c0, i0, l0, a0));
        r0 += m.f('f24', c0, i0, l0, a0, m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v70 )));
        r0 += "</div>";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v70 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f23', c0, i0, l0, a0, m.f('f46', c0, i0, l0, a0));
        r0 += m.f('f24', c0, i0, l0, a0, m.f('f46', c0, i0, l0, a0));
        r0 += m.f('f24', c0, i0, l0, a0, m.f('f6', c0, i0, l0, a0, yr.object2nodeset( v71 )));
        r0 += "</div>";
        r0 += m.f('f6', c0, i0, l0, a0, yr.object2nodeset( v71 ));
        r0 += "</div>";

        return r0;
    };

    // func progresses() : xml
    M.f48 = function f48(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "progress2";
        r1[ "start" ] = "20";
        var v72 = r1;

        //  var title : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "progress1";
        r1[ "start" ] = "30";
        r1[ "type" ] = "title";
        r1[ "title" ] = "Король_Лев_5_rutracker.org";
        var v73 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Percentage ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-progress_type_percentage";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f12', c0, i0, l0, a0, yr.object2nodeset( v72 )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Title ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-progress_type_title";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f12', c0, i0, l0, a0, yr.object2nodeset( v73 )));
        r0 += "</div>";

        return r0;
    };

    // func input-small() : xml
    M.f49 = function f49(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Москва";
        var v74 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f10', c0, i0, l0, a0, yr.object2nodeset( v74 ));

        return r0;
    };

    // func input-medium() : xml
    M.f50 = function f50(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "content" ] = "Москва";
        var v75 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f10', c0, i0, l0, a0, yr.object2nodeset( v75 ));

        return r0;
    };

    // func input-disabled() : xml
    M.f51 = function f51(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "disabled" ] = "1";
        r1[ "attrs" ] = r2;
        r1[ "content" ] = "Москва";
        var v76 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f10', c0, i0, l0, a0, yr.object2nodeset( v76 ));

        return r0;
    };

    // func input-length() : xml
    M.f52 = function f52(m, c0, i0, l0, a0) {
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
        var v77 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f10', c0, i0, l0, a0, yr.object2nodeset( v77 ));

        return r0;
    };

    // func inputs() : xml
    M.f53 = function f53(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-input_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f50', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-input_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f49', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Disabled ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-input_disabled";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f51', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Maxlength";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f52', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func input-groups() : xml
    M.f54 = function f54(m, c0, i0, l0, a0) {
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
        var v78 = r1;

        //  var blockDefault2 : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "icon" ] = "link_16";
        r1[ "button" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "content" ] = "http://yadi.sk/";
        r1[ "input" ] = r2;
        var v79 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поле+кнопка";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v78 )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Кнопка+поле";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v79 )));
        r0 += "</div>";

        return r0;
    };

    // func island-simple() : xml
    M.f55 = function f55(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Остров миу-миу";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "style" ] = "height: 100px; width: 200px";
        r1[ "attrs" ] = r2;
        var v80 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset( v80 ));

        return r0;
    };

    // func island-fly() : xml
    M.f56 = function f56(m, c0, i0, l0, a0) {
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
        var v81 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset( v81 ));

        return r0;
    };

    // func island-padding() : xml
    M.f57 = function f57(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Остров с паддингами и инлайном";
        r1[ "padding" ] = "l";
        r1[ "type" ] = "inline";
        var v82 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f15', c0, i0, l0, a0, yr.object2nodeset( v82 ));

        return r0;
    };

    // func islands() : xml
    M.f58 = function f58(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f55', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f56', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Padding: L, Inline ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-island_padding_l.nb-island_inline";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f57', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func loader-small() : xml
    M.f59 = function f59(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var loader : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v83 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v83 ));

        return r0;
    };

    // func loader-medium() : xml
    M.f60 = function f60(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var loader : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v84 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v84 ));

        return r0;
    };

    // func loader-white() : xml
    M.f61 = function f61(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var loader : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "color" ] = "white";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v85 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v85 ));

        return r0;
    };

    // func loaders() : xml
    M.f62 = function f62(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-loader_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f60', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-loader_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f59', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section demo-section_dark" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Color: White ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-loader_color_white";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f61', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func slider-small() : xml
    M.f63 = function f63(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var slider : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "s2";
        r1[ "size" ] = "s";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "type" ] = "round";
        r2[ "class" ] = "js-custom-class";
        r1[ "handle" ] = r2;
        r1[ "value" ] = 20;
        var v86 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset( v86 ));

        return r0;
    };

    // func slider-medium() : xml
    M.f64 = function f64(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var slider : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "class" ] = "js-super-class";
        r1[ "value" ] = 50;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "type" ] = "round";
        r1[ "handle" ] = r2;
        r1[ "id" ] = "s1";
        var v87 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset( v87 ));

        return r0;
    };

    // func slider-large() : xml
    M.f65 = function f65(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var slider : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "l";
        r1[ "value" ] = 70;
        var v88 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset( v88 ));

        return r0;
    };

    // func sliders() : xml
    M.f66 = function f66(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S, handle: Round";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f63', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M, handle: Round";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f64', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: L, handle: Square";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f65', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func tooltips-jq() : xml
    M.f67 = function f67(m, c0, i0, l0, a0) {
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
    M.f68 = function f68(m, c0, i0, l0, a0) {
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
    M.f69 = function f69(m, c0, i0, l0, a0) {
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
    M.f70 = function f70(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Статья";
        r3[ "content" ] = m.f('f68', c0, i0, l0, a3);
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Обсуждение";
        r3[ "content" ] = m.f('f69', c0, i0, l0, a3);
        r2.push(r3);
        r1[ "items" ] = r2;
        var v89 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f19', c0, i0, l0, a0, yr.object2nodeset( v89 ));

        return r0;
    };

    // func tabs-small() : xml
    M.f71 = function f71(m, c0, i0, l0, a0) {
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
        r0 += m.f('f19', c0, i0, l0, a0, yr.object2nodeset( v90 ));

        return r0;
    };

    // func tabs-island() : xml
    M.f72 = function f72(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var exchange : xml
        var r1 = '';
        var a1 = { a: {} };
        //  var group : object
        var r2 = {};
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "placeholder" ] = "Серийный номер";
        r2[ "input" ] = r3;
        var r3 = {};
        var a3 = { a: {} };
        r3[ "size" ] = "s";
        r3[ "content" ] = "Обменять";
        r2[ "button" ] = r3;
        var v91 = r2;

        r1 += closeAttrs(a1);
        r1 += m.f('f11', c0, i0, l0, a1, yr.object2nodeset( v91 ));
        var v92 = r1;

        //  var return : xml
        var r1 = '';
        var a1 = { a: {} };
        //  var group : object
        var r2 = {};
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "placeholder" ] = "Серийный номер";
        r2[ "input" ] = r3;
        var r3 = {};
        var a3 = { a: {} };
        r3[ "size" ] = "s";
        r3[ "content" ] = "Вернуть";
        r2[ "button" ] = r3;
        var v93 = r2;

        r1 += closeAttrs(a1);
        r1 += m.f('f11', c0, i0, l0, a1, yr.object2nodeset( v93 ));
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
            'class': new yr.scalarAttr("nb-island nb-island_type_fly nb-island_padding_m")
        };
        a0.s = 'div';
        a0.a[ "style" ] = new yr.scalarAttr("width: 300px");
        r0 += closeAttrs(a0);
        r0 += m.f('f19', c0, i0, l0, a0, yr.object2nodeset( v95 ));
        r0 += "</div>";

        return r0;
    };

    // func tabs() : xml
    M.f73 = function f73(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-tabs_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f70', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-tabs_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f71', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Внутри острова ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-tabs_rise_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f72', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func arrow-service() : xml
    M.f74 = function f74(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "false";
        r1[ "href" ] = "#";
        r1[ "text" ] = "Диск";
        var v96 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f20', c0, i0, l0, a0, yr.object2nodeset( v96 ));

        return r0;
    };

    // func arrow-search() : xml
    M.f75 = function f75(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        var v97 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f20', c0, i0, l0, a0, yr.object2nodeset( v97 ));

        return r0;
    };

    // func arrow-search-requests() : xml
    M.f76 = function f76(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "requests" ] = "8 млн ответов";
        r1[ "value" ] = "жираф";
        var v98 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f20', c0, i0, l0, a0, yr.object2nodeset( v98 ));

        return r0;
    };

    // func arrow-search-service() : xml
    M.f77 = function f77(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "href" ] = "#";
        r1[ "text" ] = "Диск";
        var v99 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f20', c0, i0, l0, a0, yr.object2nodeset( v99 ));

        return r0;
    };

    // func arrows() : xml
    M.f78 = function f78(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Название сервиса";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f74', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поисковая стрелка (по умолчанию)";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f75', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поисковая стрелка (по умолчанию)";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f76', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поисковая стрелка (по умолчанию)";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f77', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    //  var header : object
    M.v100 = function(m, c0, i0, l0) {
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
    M.f79 = function f79(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Шапка с поисковой стрелкой";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f21', c0, i0, l0, a0, yr.object2nodeset( m.v('v100', c0) )));
        r0 += "</div>";

        return r0;
    };

    //  var userNormal : object
    M.v101 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "sweetlush";
        r1[ "notices" ] = "7";
        r1[ "userpic" ] = "http://center.yandex-team.ru/api/v1/user/sweetlush/photo_10670/300.jpg";
        return r1;
    };

    //  var userRtL : object
    M.v102 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "Username";
        r1[ "notices" ] = "1";
        r1[ "rightToLeft" ] = "true";
        return r1;
    };

    //  var userSmall : object
    M.v103 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "basvasilich";
        r1[ "size" ] = "s";
        r1[ "userpic" ] = "http://center.yandex-team.ru/api/v1/user/basvasilich/photo_6631/300.jpg?0.5863942694850266";
        return r1;
    };

    // func userBlock() : xml
    M.f80 = function f80(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе 42px";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f22', c0, i0, l0, a0, yr.object2nodeset( m.v('v101', c0) )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе справа налево";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f22', c0, i0, l0, a0, yr.object2nodeset( m.v('v102', c0) )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе 32px";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, m.f('f22', c0, i0, l0, a0, yr.object2nodeset( m.v('v103', c0) )));
        r0 += "</div>";

        return r0;
    };

    var j1 = [ 1, 0 ];

    var j2 = [ 0, 'id' ];

    var j3 = [ 0, 'class' ];

    var j4 = [ 0, 'mixin-nb' ];

    var j5 = [ 0, 'data-nb', 0, '*' ];

    var j6 = [ 0, 'attrs', 0, '*' ];

    var j7 = [ 0, 'button' ];

    var j8 = [ 0, 'size' ];

    var j9 = [ 0, 'theme' ];

    var j10 = [ 0, 'static' ];

    var j11 = [ 0, 'disabled' ];

    var j12 = [ 0, 'content' ];

    var j13 = [ 0, 'icon' ];

    var j14 = [ 0, 'type' ];

    var j15 = [ 0, 'buttonLink' ];

    var j16 = [ 0, 'href' ];

    var j17 = [ 0, 'buttonAttach' ];

    var j18 = [ 0, 'attrs', 0, 'name' ];

    var j19 = [ 0, 'popupMenu' ];

    var j20 = [ 0, 'tail' ];

    var j21 = [ 0, 'menu' ];

    var j22 = [ 0, 'text' ];

    var j23 = [ 0, 'popup' ];

    var j24 = [ 0, 'title' ];

    var j25 = [ 0, 'modalPopup' ];

    var j26 = [ 0, 'close' ];

    var j27 = [ 0, 'close', 0, 'class' ];

    var j28 = [ 0, 'close', 0, 'attrs' ];

    var j29 = [ 0, 'close', 0, 'attrs', 0, '*' ];

    var j30 = [ 0, 'buttons' ];

    var j31 = [ 0, 'radio-button' ];

    var j32 = [ 0, 'group' ];

    var j33 = [ 1, 1, 0, 'name' ];

    var j34 = [ 0, 'value' ];

    var j35 = [ 0, 'checked' ];

    var j36 = [ 1, 1, 0, 'theme' ];

    var j37 = [ 1, 1, 0, 'size' ];

    var j38 = [ 0, 'select' ];

    var j39 = [ 0, 'direction' ];

    var j40 = [ 0, 'mod' ];

    var j41 = [ 0, 'items' ];

    var j42 = [ 0, 'selected' ];

    function p0(m, c0, i0, l0) {
        return simpleBoolean('selected', c0);
    }

    var j43 = [ 0, 'select', 0, 'items', 2, p0 ];

    var j44 = [ 0, 'checkbox' ];

    var j45 = [ 0, 'input' ];

    var j46 = [ 0, 'input', 0, 'disabled' ];

    var j47 = [ 0, 'input', 0, 'readonly' ];

    var j48 = [ 0, 'input', 0, 'maxlength' ];

    var j49 = [ 0, 'input', 0, 'length' ];

    var j50 = [ 0, 'input', 0, 'placeholder' ];

    var j51 = [ 0, 'input', 0, 'type' ];

    var j52 = [ 0, 'input', 0, 'name' ];

    var j53 = [ 0, 'input-group' ];

    var j54 = [ 0, 'progress' ];

    var j55 = [ 0, 'progress', 0, 'type' ];

    var j56 = [ 0, 'progress', 0, 'id' ];

    var j57 = [ 0, 'progress', 0, 'start' ];

    var j58 = [ 0, 'progress', 0, 'bar' ];

    var j59 = [ 0, 'start' ];

    var j60 = [ 0, 'progress', 0, 'title' ];

    var j61 = [ 0, 'type' ];

    function p1(m, c0, i0, l0) {
        return cmpSN("percentage", selectNametest('type', c0.doc.root, []));
    }

    var j62 = [ 0, 'progress', 0, 'title', 4, p1 ];

    function p2(m, c0, i0, l0) {
        return simpleBoolean('icon', c0);
    }

    var j63 = [ 0, 'icon', 2, p2 ];

    var j64 = [ 0, 'paranja' ];

    var j65 = [ 0, 'paranja', 0, 'theme' ];

    var j66 = [ 0, 'island' ];

    var j67 = [ 0, 'island', 0, 'padding' ];

    var j68 = [ 0, 'island', 0, 'type' ];

    var j69 = [ 0, 'dropzone' ];

    var j70 = [ 0, 'dropzone', 0, 'mod' ];

    var j71 = [ 0, 'dropzone', 0, 'button' ];

    var j72 = [ 0, 'head' ];

    function p3(m, c0, i0, l0) {
        return cmpSN("modal", selectNametest('mod', c0, []));
    }

    var j73 = [ 0, 'dropzone', 2, p3 ];

    var j74 = [ 0, 'dropzone', 0, 'head' ];

    var j75 = [ 0, 'dropzone', 0, 'text' ];

    var j76 = [ 1, 1, 0, 'button' ];

    function p4(m, c0, i0, l0) {
        return !(cmpSN("false", [ c0 ]));
    }

    var j77 = [ 0, 'dropzone', 0, 'button', 2, p4 ];

    var j78 = [ 0, 'loader' ];

    var j79 = [ 0, 'color' ];

    var j80 = [ 0, 'slider' ];

    var j81 = [ 0, 'handle', 0, '*' ];

    var j82 = [ 0, 'slider', 0, 'size' ];

    var j83 = [ 0, 'slider', 0, 'value' ];

    var j84 = [ 0, 'slider', 0, 'id' ];

    var j85 = [ 0, 'slider', 0, 'theme' ];

    var j86 = [ 0, 'slider', 0, 'orientation' ];

    var j87 = [ 0, 'slider', 0, 'handle', 0, 'type' ];

    var j88 = [ 0, 'slider', 0, 'handle', 0, 'class' ];

    var j89 = [ 0, 'tabs' ];

    var j90 = [ 0, 'rise' ];

    var j91 = [ 0, 'active' ];

    var j92 = [ 0, 'arrow' ];

    var j93 = [ 0, 'search' ];

    var j94 = [ 0, 'buttonContent' ];

    var j95 = [ 0, 'requests' ];

    var j96 = [ 0, 'header' ];

    var j97 = [ 0, 'settings' ];

    var j98 = [ 0, 'services' ];

    var j99 = [ 0, 'user' ];

    var j100 = [ 0, 'yaHref' ];

    var j101 = [ 0, 'username' ];

    var j102 = [ 0, 'userpic' ];

    var j103 = [ 0, 'notices' ];

    var j104 = [ 0, 'rightToLeft' ];

    var j105 = [ ];

    // match .* : nb-main-attrs
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, [ c0 ], 'nb-attrs', a0)
        r0 += m.a(m, selectNametest('*', c0, []), 'nb-attrs', a0)
        if (simpleBoolean('id', c0)) {
            a0.a[ "id" ] = new yr.scalarAttr(simpleScalar('id', c0));
        }
        var r1 = '';
        var a1 = { a: {} };
        var items0 = selectNametest('class', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r1 += " " + nodeset2scalar( ( [ c1 ] ) );
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
            r1 += " " + nodeset2scalar( ( [ c1 ] ) );
        }
        var tmp0 = a0.a[ "data-nb" ];
        if (tmp0) {
            a0.a[ "data-nb" ] = tmp0.addscalar(r1);
        } else {
            a0.a[ "data-nb" ] = new yr.scalarAttr(r1);
        }
        var items0 = m.s(j5, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ "data-nb-" + ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( [ c1 ] ));
        }
        var items0 = m.s(j6, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( [ c1 ] ));
        }

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    // match .* : nb-main-content
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, [ c0 ], 'nb-content', a0)

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
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
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
        if (cmpSN("round", selectNametest('type', c0, []))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_type_round");
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
        if ((simpleBoolean('content', c0) && simpleBoolean('icon', c0))) {
            r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
            r0 += closeAttrs(a0);
            r0 += simpleScalar('content', c0);
        } else if ((!simpleBoolean('content', c0) && simpleBoolean('icon', c0))) {
            r0 += closeAttrs(a0);
            r0 += " ";
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
    M.t2.j = j7;
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
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
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
        if (cmpSN("round", selectNametest('type', c0, []))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_type_round");
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
        if ((simpleBoolean('content', c0) && simpleBoolean('icon', c0))) {
            r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
            r0 += closeAttrs(a0);
            r0 += simpleScalar('content', c0);
        } else if ((!simpleBoolean('content', c0) && simpleBoolean('icon', c0))) {
            r0 += closeAttrs(a0);
            r0 += " ";
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
    M.t3.j = j15;
    M.t3.a = 0;

    // match .buttonAttach : nb
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-button _init nb-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " nb-button_type_attach  nb-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ))
        };
        a0.s = 'span';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
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
        if (cmpSN("round", selectNametest('type', c0, []))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_type_round");
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
        if ((simpleBoolean('content', c0) && simpleBoolean('icon', c0))) {
            r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
            r0 += closeAttrs(a0);
            r0 += simpleScalar('content', c0);
        } else if ((!simpleBoolean('content', c0) && simpleBoolean('icon', c0))) {
            r0 += closeAttrs(a0);
            r0 += " ";
            r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
        } else {
            r0 += closeAttrs(a0);
            r0 += simpleScalar('content', c0);
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "<input";
        a0.a = {
            'type': new yr.scalarAttr("file"),
            'class': new yr.scalarAttr("nb-button__attach")
        };
        a0.s = 'input';
        if (nodeset2boolean( m.s(j18, c0) )) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( ( m.s(j18, c0) ) ));
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "</span>";

        return r0;
    };
    M.t4.j = j17;
    M.t4.a = 0;

    // match .popupMenu : nb
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-popup _hidden"),
            'data-nb': new yr.scalarAttr("popup")
        };
        a0.s = 'div';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        if (simpleBoolean('tail', c0)) {
            a0.a[ "data-nb-tail" ] = new yr.scalarAttr(simpleScalar('tail', c0));
        }
        r0 += closeAttrs(a0);
        var items0 = selectNametest('menu', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<a";
            a0.a = {
                'class': new yr.scalarAttr("nb-popup__line _link")
            };
            a0.s = 'a';
            if (simpleBoolean('href', c1)) {
                a0.a[ "href" ] = new yr.scalarAttr(simpleScalar('href', c1));
            }
            r0 += m.a(m, [ c1 ], 'nb-main-attrs', a0)
            r0 += closeAttrs(a0);
            r0 += simpleScalar('text', c1);
            r0 += "</a>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t5.j = j19;
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
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        if (simpleBoolean('tail', c0)) {
            a0.a[ "data-nb-tail" ] = new yr.scalarAttr(simpleScalar('tail', c0));
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('title', c0)) {
            r0 += "<div class=\"" + "nb-popup__title" + "\">";
            r0 += simpleScalar('title', c0);
            r0 += "</div>";
        }
        r0 += "<div class=\"" + "nb-popup__content" + "\">";
        r0 += simpleScalar('content', c0);
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t6.j = j23;
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
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-popup__i" + "\">";
        if (simpleBoolean('close', c0)) {
            r0 += "<a";
            a0.a = {
                'class': new yr.scalarAttr("nb-popup__close " + nodeset2scalar( ( m.s(j27, c0) ) ))
            };
            a0.s = 'a';
            if (nodeset2boolean( m.s(j28, c0) )) {
                var items0 = m.s(j29, c0);
                for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                    var c1 = items0[ i1 ];
                    a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( [ c1 ] ));
                }
            }
            r0 += closeAttrs(a0);
            r0 += m.f('f13', c0, i0, l0, a0, "close_16");
            r0 += "</a>";
        }
        if (simpleBoolean('title', c0)) {
            r0 += "<div class=\"" + "nb-popup__title" + "\">";
            r0 += simpleScalar('title', c0);
            r0 += "</div>";
        }
        r0 += "<div class=\"" + "nb-popup__content" + "\">";
        r0 += simpleScalar('content', c0);
        r0 += "</div>";
        if (simpleBoolean('buttons', c0)) {
            r0 += "<div class=\"" + "nb-popup__buttons" + "\">";
            var items0 = selectNametest('buttons', c0, []);
            for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                var c1 = items0[ i1 ];
                r0 += m.f('f1', c1, i1, l1, a0, [ c1 ]);
                r0 += " ";
            }
            r0 += "</div>";
        }
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t7.j = j25;
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
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        var items0 = selectNametest('group', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            //  var uniq : scalar
            var v104 = "nb-radio-button_" + ( (yr.externals['nb-uniq'])() );

            r0 += "<span class=\"" + "nb-radio-button__button" + "\">";
            r0 += "<input";
            a0.a = {
                'class': new yr.scalarAttr("nb-radio-button__radio"),
                'type': new yr.scalarAttr("radio"),
                'name': new yr.scalarAttr(nodeset2scalar( ( m.s(j33, c1) ) )),
                'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c1, []) ) )),
                'id': new yr.scalarAttr(( v104 ))
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
                'for': new yr.scalarAttr(( v104 )),
                'class': new yr.scalarAttr("nb-button  js-button nb-button_theme_" + nodeset2scalar( ( m.s(j36, c1) ) ) + " nb-button_size_" + nodeset2scalar( ( m.s(j37, c1) ) )),
                'data-value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c1, []) ) ))
            };
            a0.s = 'label';
            r0 += m.a(m, [ c1 ], 'nb-main-attrs', a0)
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
                r0 += closeAttrs(a0);
                r0 += " ";
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
    M.t8.j = j31;
    M.t8.a = 0;

    // match .select : nb
    M.t9 = function t9(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-select ui-front _init  nb-select_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " nb-select_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) )),
            'data-nb': new yr.scalarAttr("select"),
            'data-nb-direction': new yr.scalarAttr(nodeset2scalar( ( selectNametest('direction', c0, []) ) ))
        };
        a0.s = 'div';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";

        return r0;
    };
    M.t9.j = j38;
    M.t9.a = 0;

    // match .select : nb-content
    M.t10 = function t10(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<button";
        a0.a = {
            'class': new yr.scalarAttr("nb-button nb-select__button _init nb-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " nb-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) )),
            'data-nb': new yr.scalarAttr("button")
        };
        a0.s = 'button';
        if (nodeset2boolean( (selectNametest('disabled', c0, [])) )) {
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
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, selectNametest('items', c0, []), 'nb-button-content', a0)
        r0 += closeAttrs(a0);
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

        return r0;
    };
    M.t10.j = j38;
    M.t10.a = 0;

    // match .select.items[ .selected ] : nb-button-content
    M.t11 = function t11(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('text', c0, []) );

        return r0;
    };
    M.t11.j = j43;
    M.t11.a = 0;

    // match .checkbox : nb
    M.t12 = function t12(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var uniq : scalar
        var v105 = "nb-checkbox_" + ( (yr.externals['nb-uniq'])() );

        r0 += closeAttrs(a0);
        r0 += "<label class=\"" + "nb-checkbox nb-checkbox_size_" + nodeset2attrvalue( ( selectNametest('size', c0, []) ) ) + "\" for=\"" + scalar2attrvalue( ( v105 ) ) + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("nb-checkbox__input"),
            'type': new yr.scalarAttr(nodeset2scalar( ( selectNametest('type', c0, []) ) )),
            'id': new yr.scalarAttr(( v105 ))
        };
        a0.s = 'input';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<span class=\"" + "nb-checkbox__flag nb-checkbox__flag_" + nodeset2attrvalue( ( selectNametest('type', c0, []) ) ) + "\"></span>";
        r0 += " ";
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += "</label>";

        return r0;
    };
    M.t12.j = j44;
    M.t12.a = 0;

    // match .checkbox : nb-content
    M.t13 = function t13(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-checkbox__label" + "\">";
        r0 += nodeset2xml( selectNametest('text', c0, []) );
        r0 += "</span>";

        return r0;
    };
    M.t13.j = j44;
    M.t13.a = 0;

    // match .checked : nb-attrs
    M.t14 = function t14(m, c0, i0, l0, a0) {
        var r0 = '';

        if (nodeset2boolean( [ c0 ] )) {
            a0.a[ "checked" ] = new yr.scalarAttr("checked");
        }

        return r0;
    };
    M.t14.j = j35;
    M.t14.a = 0;

    // match .input : nb
    M.t15 = function t15(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'data-nb': new yr.scalarAttr("input"),
            'class': new yr.scalarAttr("nb-input-box")
        };
        a0.s = 'span';
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
                a0.a[ "class" ] = tmp0.addscalar(" nb-input_disabled js-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-input_disabled js-disabled");
            }
        }
        if (simpleBoolean('id', c0)) {
            a0.a[ "id" ] = new yr.scalarAttr(simpleScalar('id', c0));
        }
        var r1 = '';
        var a1 = { a: {} };
        var items0 = selectNametest('class', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r1 += " " + nodeset2scalar( ( [ c1 ] ) );
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
            r1 += " " + nodeset2scalar( ( [ c1 ] ) );
        }
        var tmp0 = a0.a[ "data-nb" ];
        if (tmp0) {
            a0.a[ "data-nb" ] = tmp0.addscalar(r1);
        } else {
            a0.a[ "data-nb" ] = new yr.scalarAttr(r1);
        }
        var items0 = m.s(j5, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ "data-nb-" + ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( [ c1 ] ));
        }
        r0 += closeAttrs(a0);
        r0 += "<input";
        a0.a = {
            'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('content', c0, []) ) )),
            'class': new yr.scalarAttr("nb-input")
        };
        a0.s = 'input';
        var items0 = m.s(j6, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( [ c1 ] ));
        }
        r0 += m.a(m, selectNametest('*', c0, []), 'nb-content', a0)
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "</span>";

        return r0;
    };
    M.t15.j = j45;
    M.t15.a = 0;

    // match .input.disabled : nb-content
    M.t16 = function t16(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        r0 += closeAttrs(a0);
        r0 += scalar2xml( (yr.externals['nb-warn'])("Увидел это предупреждение - перенеси параметр " + ( c0.name ) + " у input в объект attrs. В новой версии nanoislands эти параметры будут удалены и работать не будут.") );

        return r0;
    };
    M.t16.j = j46;
    M.t16.a = 0;

    // match .input.readonly : nb-content
    M.t17 = function t17(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "readonly" ] = new yr.scalarAttr("readonly");
        r0 += closeAttrs(a0);
        r0 += scalar2xml( (yr.externals['nb-warn'])("Увидел это предупреждение - перенеси параметр " + ( c0.name ) + " у input в объект attrs. В новой версии nanoislands эти параметры будут удалены и работать не будут.") );

        return r0;
    };
    M.t17.j = j47;
    M.t17.a = 0;

    // match .input.maxlength : nb-content
    M.t18 = function t18(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "maxlength" ] = new yr.scalarAttr(nodeset2scalar( [ c0 ] ));
        r0 += closeAttrs(a0);
        r0 += scalar2xml( (yr.externals['nb-warn'])("Увидел это предупреждение - перенеси параметр " + ( c0.name ) + " у input в объект attrs. В новой версии nanoislands эти параметры будут удалены и работать не будут.") );

        return r0;
    };
    M.t18.j = j48;
    M.t18.a = 0;

    // match .input.length : nb-content
    M.t19 = function t19(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "size" ] = new yr.scalarAttr(nodeset2scalar( [ c0 ] ));
        r0 += closeAttrs(a0);
        r0 += scalar2xml( (yr.externals['nb-warn'])("Увидел это предупреждение - перенеси параметр " + ( c0.name ) + " у input в объект attrs. В новой версии nanoislands эти параметры будут удалены и работать не будут.") );

        return r0;
    };
    M.t19.j = j49;
    M.t19.a = 0;

    // match .input.placeholder : nb-content
    M.t20 = function t20(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "placeholder" ] = new yr.scalarAttr(nodeset2scalar( [ c0 ] ));
        r0 += closeAttrs(a0);
        r0 += scalar2xml( (yr.externals['nb-warn'])("Увидел это предупреждение - перенеси параметр " + ( c0.name ) + " у input в объект attrs. В новой версии nanoislands эти параметры будут удалены и работать не будут.") );

        return r0;
    };
    M.t20.j = j50;
    M.t20.a = 0;

    // match .input.type : nb-content
    M.t21 = function t21(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "type" ] = new yr.scalarAttr(nodeset2scalar( [ c0 ] ));
        r0 += closeAttrs(a0);
        r0 += scalar2xml( (yr.externals['nb-warn'])("Увидел это предупреждение - перенеси параметр " + ( c0.name ) + " у input в объект attrs. В новой версии nanoislands эти параметры будут удалены и работать не будут.") );

        return r0;
    };
    M.t21.j = j51;
    M.t21.a = 0;

    // match .input.name : nb-content
    M.t22 = function t22(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( [ c0 ] ));
        r0 += closeAttrs(a0);
        r0 += scalar2xml( (yr.externals['nb-warn'])("Увидел это предупреждение - перенеси параметр " + ( c0.name ) + " у input в объект attrs. В новой версии nanoislands эти параметры будут удалены и работать не будут.") );

        return r0;
    };
    M.t22.j = j52;
    M.t22.a = 0;

    // match .input-group : nb
    M.t23 = function t23(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        a0.a[ "class" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('class', c0, []) ) ) + " nb-input-group");
        a0.a[ "data-nb" ] = new yr.scalarAttr("input-group");
        r0 += closeAttrs(a0);
        var items0 = selectNametest('*', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (c1.name == "button") {
                r0 += m.f('f1', c1, i1, l1, a0, [ c1 ]);
            } else if (c1.name == "input") {
                r0 += m.f('f10', c1, i1, l1, a0, [ c1 ]);
            }
        }
        r0 += "</div>";

        return r0;
    };
    M.t23.j = j53;
    M.t23.a = 0;

    // match .progress : nb
    M.t24 = function t24(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";

        return r0;
    };
    M.t24.j = j54;
    M.t24.a = 0;

    // match .progress : nb-attrs
    M.t25 = function t25(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb" ] = new yr.scalarAttr("progress");
        a0.a[ "class" ] = new yr.scalarAttr("nb-progress _init");

        return r0;
    };
    M.t25.j = j54;
    M.t25.a = 0;

    // match .progress.type : nb-attrs
    M.t26 = function t26(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb-type" ] = new yr.scalarAttr(nodeset2scalar( ( [ c0 ] ) ));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-progress_type_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-progress_type_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t26.j = j55;
    M.t26.a = 0;

    // match .progress.id : nb-attrs
    M.t27 = function t27(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "id" ] = new yr.scalarAttr(nodeset2scalar( ( [ c0 ] ) ));

        return r0;
    };
    M.t27.j = j56;
    M.t27.a = 0;

    // match .progress.start : nb-attrs
    M.t28 = function t28(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb-progress" ] = new yr.scalarAttr(nodeset2scalar( ( [ c0 ] ) ));

        return r0;
    };
    M.t28.j = j57;
    M.t28.a = 0;

    // match .progress : nb-content
    M.t29 = function t29(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, selectNametest('*', c0, []), 'nb-content', a0)

        return r0;
    };
    M.t29.j = j54;
    M.t29.a = 0;

    // match .progress.bar : nb-content
    M.t30 = function t30(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-progress__bar js-bar" + "\" style=\"" + "width: " + nodeset2attrvalue( ( selectNametest('start', c0.doc.root, []) ) ) + "%" + "\"></div>";

        return r0;
    };
    M.t30.j = j58;
    M.t30.a = 0;

    // match .progress.title : nb-content
    M.t31 = function t31(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-progress__title js-title")
        };
        a0.s = 'div';
        r0 += m.a(m, [ c0 ], 'nb-progress-text', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";

        return r0;
    };
    M.t31.j = j60;
    M.t31.a = 0;

    // match .progress.title : nb-progress-text
    M.t32 = function t32(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( [ c0 ] );

        return r0;
    };
    M.t32.j = j60;
    M.t32.a = 0;

    // match .progress.title[ /.type == "percentage" ] : nb-progress-text
    M.t33 = function t33(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += scalar2xml( simpleScalar('start', c0.doc.root) + "%" );

        return r0;
    };
    M.t33.j = j62;
    M.t33.a = 0;

    // match .icon : nb
    M.t34 = function t34(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<img src=\"" + "//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" + "\" class=\"" + "nb-icon nb-icon_" + nodeset2attrvalue( ( [ c0 ] ) ) + "\"/>";

        return r0;
    };
    M.t34.j = j13;
    M.t34.a = 0;

    // match .icon[ .icon ] : nb
    M.t35 = function t35(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<img src=\"" + "//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" + "\" class=\"" + "nb-icon nb-icon_" + nodeset2attrvalue( ( selectNametest('icon', c0, []) ) ) + " nb-icon_size_" + nodeset2attrvalue( ( selectNametest('size', c0, []) ) ) + "\"/>";

        return r0;
    };
    M.t35.j = j63;
    M.t35.a = 0;

    // match .paranja : nb
    M.t36 = function t36(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";

        return r0;
    };
    M.t36.j = j64;
    M.t36.a = 0;

    // match .paranja : nb-attrs
    M.t37 = function t37(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb" ] = new yr.scalarAttr("paranja");
        a0.a[ "class" ] = new yr.scalarAttr("nb-paranja");

        return r0;
    };
    M.t37.j = j64;
    M.t37.a = 0;

    // match .paranja.theme : nb-attrs
    M.t38 = function t38(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-paranja_theme_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-paranja_theme_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t38.j = j65;
    M.t38.a = 0;

    // match .island : nb
    M.t39 = function t39(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-island")
        };
        a0.s = 'div';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";

        return r0;
    };
    M.t39.j = j66;
    M.t39.a = 0;

    // match .island.padding : nb-attrs
    M.t40 = function t40(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-island_padding_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-island_padding_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t40.j = j67;
    M.t40.a = 0;

    // match .island.type : nb-attrs
    M.t41 = function t41(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-island_type_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-island_type_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t41.j = j68;
    M.t41.a = 0;

    // match .island : nb-content
    M.t42 = function t42(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('content', c0, []) );

        return r0;
    };
    M.t42.j = j66;
    M.t42.a = 0;

    // match .dropzone : nb
    M.t43 = function t43(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";

        return r0;
    };
    M.t43.j = j69;
    M.t43.a = 0;

    // match .dropzone : nb-attrs
    M.t44 = function t44(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "class" ] = new yr.scalarAttr("nb-dropzone");

        return r0;
    };
    M.t44.j = j69;
    M.t44.a = 0;

    // match .dropzone : nb-attrs
    M.t45 = function t45(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "class" ] = new yr.scalarAttr("nb-dropzone");

        return r0;
    };
    M.t45.j = j69;
    M.t45.a = 0;

    // match .dropzone.mod : nb-attrs
    M.t46 = function t46(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-dropzone_type_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-dropzone_type_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t46.j = j70;
    M.t46.a = 0;

    // match .dropzone.button : nb-attrs
    M.t47 = function t47(m, c0, i0, l0, a0) {
        var r0 = '';

        return r0;
    };
    M.t47.j = j71;
    M.t47.a = 0;

    // match .dropzone : nb-main-content
    M.t48 = function t48(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, [ c0 ], 'nb-content', a0)

        return r0;
    };
    M.t48.j = j69;
    M.t48.a = 0;

    // match .dropzone : nb-content
    M.t49 = function t49(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, selectNametest('head', c0, []), 'nb-content', a0)
        r0 += m.a(m, selectNametest('text', c0, []), 'nb-content', a0)
        r0 += m.a(m, [ c0 ], 'cover', a0)

        return r0;
    };
    M.t49.j = j69;
    M.t49.a = 0;

    // match .dropzone[ .mod == "modal" ] : cover
    M.t50 = function t50(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-dropzone__cover js-dropzone" + "\"></div>";

        return r0;
    };
    M.t50.j = j73;
    M.t50.a = 0;

    // match .dropzone.head : nb-content
    M.t51 = function t51(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-dropzone__head" + "\">";
        r0 += nodeset2xml( [ c0 ] );
        r0 += "</div>";

        return r0;
    };
    M.t51.j = j74;
    M.t51.a = 0;

    // match .dropzone.text : nb-content
    M.t52 = function t52(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-dropzone__text" + "\">";
        r0 += nodeset2xml( [ c0 ] );
        r0 += m.a(m, m.s(j76, c0), 'nb-content', a0)
        r0 += "</div>";

        return r0;
    };
    M.t52.j = j75;
    M.t52.a = 0;

    // match .dropzone.button[ . != "false" ] : nb-content
    M.t53 = function t53(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, [ c0 ]);

        return r0;
    };
    M.t53.j = j77;
    M.t53.a = 0;

    // match .loader : nb
    M.t54 = function t54(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-loader nb-loader_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ))
        };
        a0.s = 'span';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
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
    M.t54.j = j78;
    M.t54.a = 0;

    // match .slider : nb
    M.t55 = function t55(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-slider__body nb-slider__body_type_{.type}" + "\">";
        r0 += "<a";
        a0.a = {
        };
        a0.s = 'a';
        a0.a[ "class" ] = new yr.scalarAttr("nb-slider__handle nb-button nb-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " nb-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ) + " ui-slider-handle");
        r0 += m.a(m, m.s(j81, c0), 'nb-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-slider__handle__text" + "\"></span>";
        r0 += "</a>";
        r0 += "</div>";
        r0 += "<input class=\"" + "nb-slider__fallback" + "\" type=\"" + "text" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('value', c0, []) ) ) + "\" id=\"" + nodeset2attrvalue( ( selectNametest('id', c0, []) ) ) + "\"/>";
        r0 += "</div>";

        return r0;
    };
    M.t55.j = j80;
    M.t55.a = 0;

    // match .slider : nb-attrs
    M.t56 = function t56(m, c0, i0, l0, a0) {
        var r0 = '';

        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("slider");
        }
        a0.a[ "class" ] = new yr.scalarAttr("nb-slider _init");

        return r0;
    };
    M.t56.j = j80;
    M.t56.a = 0;

    // match .slider.size : nb-attrs
    M.t57 = function t57(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-slider_size_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-slider_size_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t57.j = j82;
    M.t57.a = 0;

    // match .slider.value : nb-attrs
    M.t58 = function t58(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb-value" ] = new yr.scalarAttr(nodeset2scalar( ( [ c0 ] ) ));

        return r0;
    };
    M.t58.j = j83;
    M.t58.a = 0;

    // match .slider.id : nb-attrs
    M.t59 = function t59(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "id" ] = new yr.scalarAttr(nodeset2scalar( ( [ c0 ] ) ));

        return r0;
    };
    M.t59.j = j84;
    M.t59.a = 0;

    // match .slider.theme : nb-attrs
    M.t60 = function t60(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-slider_theme_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-slider_theme_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t60.j = j85;
    M.t60.a = 0;

    // match .slider.orientation : nb-attrs
    M.t61 = function t61(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-slider_orientation_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-slider_orientation_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t61.j = j86;
    M.t61.a = 0;

    // match .slider.handle.type : nb-attrs
    M.t62 = function t62(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-slider__handle_type_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-slider__handle_type_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t62.j = j87;
    M.t62.a = 0;

    // match .slider.handle.class : nb-attrs
    M.t63 = function t63(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" " + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" " + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t63.j = j88;
    M.t63.a = 0;

    // match .tabs : nb
    M.t64 = function t64(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var prefix : scalar
        var v106 = "tabs-" + ( (yr.externals['nb-uniq'])() );

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
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
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
            r0 += "<a class=\"" + "nb-tabs__link _link" + "\" href=\"" + "#" + scalar2attrvalue( ( v106 ) ) + "-" + scalar2attrvalue( ( i1 ) ) + "\">";
            r0 += nodeset2xml( selectNametest('title', c1, []) );
            r0 += "</a>";
            r0 += "</li>";
        }
        r0 += "</ul>";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<div class=\"" + "nb-tabs__panel" + "\" id=\"" + scalar2attrvalue( ( v106 ) ) + "-" + scalar2attrvalue( ( i1 ) ) + "\">";
            r0 += simpleScalar('content', c1);
            r0 += "</div>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t64.j = j89;
    M.t64.a = 0;

    // match .arrow : nb
    M.t65 = function t65(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-arrow _init"),
            'data-nb': new yr.scalarAttr("arrow")
        };
        a0.s = 'div';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
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
            r1[ "attrs" ] = r2;
            var v107 = r1;

            //  var button : object
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "m";
            r1[ "content" ] = yr.nodeset2data(selectNametest('buttonContent', c0, []));
            r1[ "class" ] = "nb-arrow__button";
            var v108 = r1;

            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-arrow__search");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-arrow__search");
            }
            r0 += closeAttrs(a0);
            r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v108 ));
            if (simpleBoolean('text', c0)) {
                r0 += "<div class=\"" + "nb-arrow__name__wrap" + "\">";
                r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('href', c0, []) ) ) + "\" class=\"" + "nb-arrow__name _link" + "\">" + nodeset2xml( ( selectNametest('text', c0, []) ) ) + "</a>";
                r0 += "</div>";
            }
            r0 += "<div class=\"" + "nb-arrow__input__wrap" + "\">";
            r0 += m.f('f10', c0, i0, l0, a0, yr.object2nodeset( v107 ));
            r0 += "</div>";
            if (simpleBoolean('requests', c0)) {
                r0 += "<div class=\"" + "nb-arrow__requests__wrap" + "\">";
                r0 += "<span class=\"" + "nb-arrow__input_fake" + "\">" + " " + "</span>";
                r0 += "<div class=\"" + "nb-arrow__requests" + "\">" + " — " + nodeset2xml( ( selectNametest('requests', c0, []) ) ) + " " + "</div>";
                r0 += "</div>";
            }
        }
        r0 += closeAttrs(a0);
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t65.j = j92;
    M.t65.a = 0;

    // match .header : nb
    M.t66 = function t66(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-header _init"),
            'data-nb': new yr.scalarAttr("header")
        };
        a0.s = 'div';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
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
            var v109 = r1;

            r0 += "<div class=\"" + "nb-header__button" + "\">";
            r0 += "<div";
            a0.a = {
                'class': new yr.scalarAttr("nb-header__button__icon")
            };
            a0.s = 'div';
            r0 += m.a(m, m.n(j13, yr.object2nodeset( v109 )), 'nb', a0)
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
            var v110 = r1;

            r0 += "<div class=\"" + "nb-header__button" + "\">";
            r0 += "<div";
            a0.a = {
                'class': new yr.scalarAttr("nb-header__button__icon")
            };
            a0.s = 'div';
            r0 += m.a(m, m.n(j13, yr.object2nodeset( v110 )), 'nb', a0)
            r0 += closeAttrs(a0);
            r0 += "</div>";
            r0 += "</div>";
        }
        if (simpleBoolean('user', c0)) {
            r0 += m.f('f22', c0, i0, l0, a0, selectNametest('user', c0, []));
        }
        r0 += "</div>";
        r0 += "<div class=\"" + "nb-header__main" + "\">";
        r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('yaHref', c0, []) ) ) + "\" class=\"" + "nb-header__logo" + "\"></a>";
        r0 += m.f('f20', c0, i0, l0, a0, selectNametest('arrow', c0, []));
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t66.j = j96;
    M.t66.a = 0;

    // match .user : nb
    M.t67 = function t67(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-user nb-user_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " _init"),
            'data-nb': new yr.scalarAttr("user")
        };
        a0.s = 'div';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (!simpleBoolean('rightToLeft', c0)) {
            r0 += "<div class=\"" + "nb-user__avatar" + "\" style=\"" + "background-image: url('" + nodeset2attrvalue( ( selectNametest('userpic', c0, []) ) ) + "')" + "\">";
            if (simpleScalar('notices', c0) > 0) {
                r0 += "<div class=\"" + "nb-user__notice-count" + "\">";
                r0 += nodeset2xml( selectNametest('notices', c0, []) );
                r0 += "</div>";
            }
            r0 += "</div>";
            if (simpleBoolean('username', c0)) {
                r0 += "<span class=\"" + "nb-user__name _link" + "\">";
                r0 += nodeset2xml( selectNametest('username', c0, []) );
                r0 += "</span>";
            }
        } else {
            if (simpleBoolean('username', c0)) {
                r0 += "<span class=\"" + "nb-user__name _link" + "\">";
                r0 += nodeset2xml( selectNametest('username', c0, []) );
                r0 += "</span>";
            }
            r0 += "<div class=\"" + "nb-user__avatar nb-user__avatar_size_" + nodeset2attrvalue( ( selectNametest('size', c0, []) ) ) + "\" style=\"" + "background-image: url('" + nodeset2attrvalue( ( selectNametest('userpic', c0, []) ) ) + "')" + "\">";
            if (simpleScalar('notices', c0) > 0) {
                r0 += "<div class=\"" + "nb-user__notice-count" + "\">";
                r0 += nodeset2xml( selectNametest('notices', c0, []) );
                r0 += "</div>";
            }
            r0 += "</div>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t67.j = j99;
    M.t67.a = 0;

    // match /
    M.t68 = function t68(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var check : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "Компактный вид";
        r1[ "class" ] = "js-toggle-compact";
        var v111 = r1;

        //  var check2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "HTML";
        r1[ "class" ] = "js-toggle-html";
        var v112 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-toggle nb-island nb-island_fly" + "\">";
        r0 += "<div class=\"" + "demo-toggle__section" + "\">";
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset( v111 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-toggle__section demo-toggle__section_second" + "\">";
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset( v112 ));
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Кнопки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f37', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Флаги";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f41', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Поля ввода";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f53', c0, i0, l0, a0);
        r0 += m.f('f54', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Прогрессбары";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f48', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Острова";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f58', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Крутилки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f62', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Слайдеры";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f66', c0, i0, l0, a0);
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
        r0 += m.f('f28', c0, i0, l0, a0);
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
        r0 += m.f('f47', c0, i0, l0, a0);
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
        r0 += m.f('f67', c0, i0, l0, a0);
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
        r0 += m.f('f73', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Arrows";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f78', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Шапка";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f79', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Блок юзера";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f80', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t68.j = 1;
    M.t68.a = 1;

    M.matcher = {
        "nb-main-attrs": {
            "*": [
                "t0"
            ]
        },
        "nb-main-content": {
            "*": [
                "t1"
            ],
            "dropzone": [
                "t48",
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
                "t12"
            ],
            "input": [
                "t15"
            ],
            "input-group": [
                "t23"
            ],
            "progress": [
                "t24"
            ],
            "icon": [
                "t35",
                "t34"
            ],
            "paranja": [
                "t36"
            ],
            "island": [
                "t39"
            ],
            "dropzone": [
                "t43"
            ],
            "loader": [
                "t54"
            ],
            "slider": [
                "t55"
            ],
            "tabs": [
                "t64"
            ],
            "arrow": [
                "t65"
            ],
            "header": [
                "t66"
            ],
            "user": [
                "t67"
            ]
        },
        "nb-content": {
            "select": [
                "t10"
            ],
            "checkbox": [
                "t13"
            ],
            "disabled": [
                "t16"
            ],
            "readonly": [
                "t17"
            ],
            "maxlength": [
                "t18"
            ],
            "length": [
                "t19"
            ],
            "placeholder": [
                "t20"
            ],
            "type": [
                "t21"
            ],
            "name": [
                "t22"
            ],
            "progress": [
                "t29"
            ],
            "bar": [
                "t30"
            ],
            "title": [
                "t31"
            ],
            "island": [
                "t42"
            ],
            "dropzone": [
                "t49"
            ],
            "head": [
                "t51"
            ],
            "text": [
                "t52"
            ],
            "button": [
                "t53"
            ]
        },
        "nb-button-content": {
            "items": [
                "t11"
            ]
        },
        "nb-attrs": {
            "checked": [
                "t14"
            ],
            "progress": [
                "t25"
            ],
            "type": [
                "t62",
                "t41",
                "t26"
            ],
            "id": [
                "t59",
                "t27"
            ],
            "start": [
                "t28"
            ],
            "paranja": [
                "t37"
            ],
            "theme": [
                "t60",
                "t38"
            ],
            "padding": [
                "t40"
            ],
            "dropzone": [
                "t45",
                "t44"
            ],
            "mod": [
                "t46"
            ],
            "button": [
                "t47"
            ],
            "slider": [
                "t56"
            ],
            "size": [
                "t57"
            ],
            "value": [
                "t58"
            ],
            "orientation": [
                "t61"
            ],
            "class": [
                "t63"
            ]
        },
        "nb-progress-text": {
            "title": [
                "t33",
                "t32"
            ]
        },
        "cover": {
            "dropzone": [
                "t50"
            ]
        },
        "": {
            "": [
                "t68"
            ]
        }
    };
    M.imports = [];

    yr.register('main', M);

})();
