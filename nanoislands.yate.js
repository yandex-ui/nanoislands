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

    // func nb-popup(nodeset options) : xml
    M.f2 = function f2(m, c0, i0, l0, a0, v4) {
        v4 = (v4 === undefined) ? [] : v4;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "fake" ] = 1;
        var v5 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "popup", (yr.externals['nb-extend'])(yr.object2nodeset( v5 ), v4));

        return r0;
    };

    // func nb-radio-button(nodeset options) : xml
    M.f3 = function f3(m, c0, i0, l0, a0, v6) {
        v6 = (v6 === undefined) ? [] : v6;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "type" ] = "radio";
        var v7 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "radio-button", (yr.externals['nb-extend'])(yr.object2nodeset( v7 ), v6));

        return r0;
    };

    // func nb-select(nodeset select) : xml
    M.f4 = function f4(m, c0, i0, l0, a0, v8) {
        v8 = (v8 === undefined) ? [] : v8;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "direction" ] = "bottom";
        var v9 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "select", (yr.externals['nb-extend'])(yr.object2nodeset( v9 ), v8));

        return r0;
    };

    // func nb-checkbox(nodeset options) : xml
    M.f5 = function f5(m, c0, i0, l0, a0, v10) {
        v10 = (v10 === undefined) ? [] : v10;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "type" ] = "checkbox";
        var v11 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "checkbox", (yr.externals['nb-extend'])(yr.object2nodeset( v11 ), v10));

        return r0;
    };

    // func nb-input(nodeset options) : xml
    M.f6 = function f6(m, c0, i0, l0, a0, v12) {
        v12 = (v12 === undefined) ? [] : v12;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var v13 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "input", (yr.externals['nb-extend'])(yr.object2nodeset( v13 ), v12));

        return r0;
    };

    // func nb-input-group(nodeset options) : xml
    M.f7 = function f7(m, c0, i0, l0, a0, v14) {
        v14 = (v14 === undefined) ? [] : v14;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "input-group", v14);

        return r0;
    };

    // func nb-progress(nodeset options) : xml
    M.f8 = function f8(m, c0, i0, l0, a0, v15) {
        v15 = (v15 === undefined) ? [] : v15;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "bar" ] = "true";
        r1[ "start" ] = "0";
        r1[ "type" ] = "percentage";
        r1[ "title" ] = "";
        var v16 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "progress", (yr.externals['nb-extend'])(yr.object2nodeset( v16 ), v15));

        return r0;
    };

    // func nb-icon(icon) : xml
    M.f9 = function f9(m, c0, i0, l0, a0, v17) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "icon" ] = v17;
        var v18 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "icon", yr.object2nodeset( v18 ));

        return r0;
    };

    // func nb-paranja(nodeset options) : xml
    M.f10 = function f10(m, c0, i0, l0, a0, v19) {
        v19 = (v19 === undefined) ? [] : v19;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "theme" ] = "dark";
        var v20 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "paranja", (yr.externals['nb-extend'])(yr.object2nodeset( v20 ), v19));

        return r0;
    };

    // func nb-island(nodeset options) : xml
    M.f11 = function f11(m, c0, i0, l0, a0, v21) {
        v21 = (v21 === undefined) ? [] : v21;
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "";
        var v22 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "island", (yr.externals['nb-extend'])(yr.object2nodeset( v22 ), v21));

        return r0;
    };

    // func nb-dropzone(nodeset options) : xml
    M.f12 = function f12(m, c0, i0, l0, a0, v23) {
        v23 = (v23 === undefined) ? [] : v23;
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
        var v24 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "dropzone", (yr.externals['nb-deep-extend'])(yr.object2nodeset( v24 ), v23));

        return r0;
    };

    // func nb-loader(nodeset options) : xml
    M.f13 = function f13(m, c0, i0, l0, a0, v25) {
        v25 = (v25 === undefined) ? [] : v25;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v26 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "loader", (yr.externals['nb-extend'])(yr.object2nodeset( v26 ), v25));

        return r0;
    };

    // func nb-slider(nodeset options) : xml
    M.f14 = function f14(m, c0, i0, l0, a0, v27) {
        v27 = (v27 === undefined) ? [] : v27;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        r1[ "value" ] = 0;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "type" ] = "square";
        r1[ "knob" ] = r2;
        var v28 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "slider", (yr.externals['nb-deep-extend'])(yr.object2nodeset( v28 ), v27));

        return r0;
    };

    // func nb-dialog(nodeset options) : xml
    M.f15 = function f15(m, c0, i0, l0, a0, v29) {
        v29 = (v29 === undefined) ? [] : v29;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "theme" ] = "normal";
        r1[ "title" ] = "Диалог";
        r1[ "close" ] = true;
        r1[ "content" ] = "содержание диалога";
        var v30 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "dialog", (yr.externals['nb-extend'])(yr.object2nodeset( v30 ), v29));

        return r0;
    };

    // func podium(xml markup) : xml
    M.f16 = function f16(m, c0, i0, l0, a0, v31) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-podium" + "\">";
        r0 += v31;
        r0 += "</div>";

        return r0;
    };

    // func code(xml markup) : xml
    M.f17 = function f17(m, c0, i0, l0, a0, v32) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-code demo-code_sample" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "js-beautify" + "\">";
        r0 += scalar2xml( v32 );
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";

        return r0;
    };

    // func show(xml markup) : xml
    M.f18 = function f18(m, c0, i0, l0, a0, v33) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f16', c0, i0, l0, a0, v33);
        r0 += m.f('f17', c0, i0, l0, a0, v33);
        r0 += "</div>";

        return r0;
    };

    // func select-medium() : xml
    M.f19 = function f19(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "id" ] = "select1";
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
        var v34 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v34 ));

        return r0;
    };

    // func select-small() : xml
    M.f20 = function f20(m, c0, i0, l0, a0) {
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
        var v35 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v35 ));

        return r0;
    };

    // func selects() : xml
    M.f21 = function f21(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-select_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f19', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-select_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f20', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func button-medium() : xml
    M.f22 = function f22(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Применить";
        var v36 = r1;

        //  var link : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Проверить";
        r1[ "href" ] = "#";
        var v37 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v36 ));
        r0 += " ";
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v37 ));

        return r0;
    };

    // func button-small() : xml
    M.f23 = function f23(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var button : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Применить";
        r1[ "size" ] = "s";
        var v38 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v38 ));

        return r0;
    };

    // func button-action() : xml
    M.f24 = function f24(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var buttonM : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Отправить";
        r1[ "size" ] = "m";
        r1[ "theme" ] = "action";
        var v39 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v39 ));

        return r0;
    };

    // func button-pseudo() : xml
    M.f25 = function f25(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var buttonM : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Выбрать…";
        r1[ "size" ] = "m";
        r1[ "theme" ] = "pseudo";
        var v40 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v40 ));

        return r0;
    };

    // func nb-myButton(nodeset options) : xml
    M.f26 = function f26(m, c0, i0, l0, a0, v41) {
        v41 = (v41 === undefined) ? [] : v41;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "mod" ] = "myButton";
        r1[ "class" ] = "nb-mybutton";
        var v42 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, (yr.externals['nb-extend'])(yr.object2nodeset( v42 ), v41));

        return r0;
    };

    // func button-extend() : xml
    M.f27 = function f27(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var options : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "I extended from the button";
        var v43 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f26', c0, i0, l0, a0, yr.object2nodeset( v43 ));

        return r0;
    };

    // func button-images() : xml
    M.f28 = function f28(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var icon : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "icon" ] = "eye_16";
        var v44 = r1;

        //  var button : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "icon" ] = "link_16";
        r1[ "content" ] = "Открыть";
        var v45 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v44 ));
        r0 += " ";
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v45 ));

        return r0;
    };

    // func button-disabled() : xml
    M.f29 = function f29(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var disabled : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Кнопка";
        r1[ "disabled" ] = true;
        var v46 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v46 ));

        return r0;
    };

    // func radio-button() : xml
    M.f30 = function f30(m, c0, i0, l0, a0) {
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
        var v47 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset( v47 ));

        return r0;
    };

    // func attach-button() : xml
    M.f31 = function f31(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var attach : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "mod" ] = "attach";
        r1[ "content" ] = "Прикрепить файл";
        var v48 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v48 ));

        return r0;
    };

    // func buttons() : xml
    M.f32 = function f32(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f22', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f23', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Action ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_theme_action";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f24', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Pseudo ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_theme_pseudo";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f25', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Disabled ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_disabled";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f29', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Кнопка с иконкой";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f28', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Радио-группа";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f30', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Attach ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_type_attach";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f31', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func checkbox-radio() : xml
    M.f33 = function f33(m, c0, i0, l0, a0) {
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
        var v49 = r1;

        //  var radio2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "radio";
        r1[ "text" ] = "Паук";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "biotype";
        r1[ "attrs" ] = r2;
        var v50 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f5', c0, i0, l0, a0, yr.object2nodeset( v49 ));
        r0 += "<br/>";
        r0 += m.f('f5', c0, i0, l0, a0, yr.object2nodeset( v50 ));

        return r0;
    };

    // func checkbox-check() : xml
    M.f34 = function f34(m, c0, i0, l0, a0) {
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
        var v51 = r1;

        //  var radio2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "Сын";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "task";
        r1[ "attrs" ] = r2;
        var v52 = r1;

        //  var radio3 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "Дом";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "name" ] = "task";
        r1[ "attrs" ] = r2;
        var v53 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f5', c0, i0, l0, a0, yr.object2nodeset( v51 ));
        r0 += "<br/>";
        r0 += m.f('f5', c0, i0, l0, a0, yr.object2nodeset( v52 ));
        r0 += "<br/>";
        r0 += m.f('f5', c0, i0, l0, a0, yr.object2nodeset( v53 ));

        return r0;
    };

    // func checkbox-small() : xml
    M.f35 = function f35(m, c0, i0, l0, a0) {
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
        var v54 = r1;

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
        var v55 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f5', c0, i0, l0, a0, yr.object2nodeset( v54 ));
        r0 += "<br/>";
        r0 += m.f('f5', c0, i0, l0, a0, yr.object2nodeset( v55 ));

        return r0;
    };

    // func checkbox() : xml
    M.f36 = function f36(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Radio";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f33', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Checkbox";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f34', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-checkbox_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f35', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func toggle-default() : xml
    M.f37 = function f37(m, c0, i0, l0, a0) {
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
    M.f38 = function f38(m, c0, i0, l0, a0) {
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
    M.f39 = function f39(m, c0, i0, l0, a0) {
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
    M.f40 = function f40(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup3', how: { where: 'top', what: 'bottom' }}" + "\" href=\"" + "#top" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап сверху";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func popups() : xml
    M.f41 = function f41(m, c0, i0, l0, a0) {
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
        var v56 = r1;

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
        var v57 = r1;

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
        var v58 = r1;

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
        var v59 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f16', c0, i0, l0, a0, m.f('f37', c0, i0, l0, a0));
        r0 += m.f('f17', c0, i0, l0, a0, m.f('f37', c0, i0, l0, a0));
        r0 += m.f('f17', c0, i0, l0, a0, m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v56 )));
        r0 += "</div>";
        r0 += m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v56 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f16', c0, i0, l0, a0, m.f('f38', c0, i0, l0, a0));
        r0 += m.f('f17', c0, i0, l0, a0, m.f('f38', c0, i0, l0, a0));
        r0 += m.f('f17', c0, i0, l0, a0, m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v57 )));
        r0 += "</div>";
        r0 += m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v57 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f16', c0, i0, l0, a0, m.f('f39', c0, i0, l0, a0));
        r0 += m.f('f17', c0, i0, l0, a0, m.f('f39', c0, i0, l0, a0));
        r0 += m.f('f17', c0, i0, l0, a0, m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v58 )));
        r0 += "</div>";
        r0 += m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v58 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f16', c0, i0, l0, a0, m.f('f40', c0, i0, l0, a0));
        r0 += m.f('f17', c0, i0, l0, a0, m.f('f40', c0, i0, l0, a0));
        r0 += m.f('f17', c0, i0, l0, a0, m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v59 )));
        r0 += "</div>";
        r0 += m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v59 ));
        r0 += "</div>";

        return r0;
    };

    // func progresses() : xml
    M.f42 = function f42(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "progress2";
        r1[ "start" ] = "20";
        var v60 = r1;

        //  var title : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "progress1";
        r1[ "start" ] = "30";
        r1[ "type" ] = "title";
        r1[ "title" ] = "Король_Лев_5_rutracker.org";
        var v61 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Percentage ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-progress_type_percentage";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f8', c0, i0, l0, a0, yr.object2nodeset( v60 )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Title ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-progress_type_title";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f8', c0, i0, l0, a0, yr.object2nodeset( v61 )));
        r0 += "</div>";

        return r0;
    };

    // func input-small() : xml
    M.f43 = function f43(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Москва";
        var v62 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f6', c0, i0, l0, a0, yr.object2nodeset( v62 ));

        return r0;
    };

    // func input-medium() : xml
    M.f44 = function f44(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "content" ] = "Москва";
        var v63 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f6', c0, i0, l0, a0, yr.object2nodeset( v63 ));

        return r0;
    };

    // func input-disabled() : xml
    M.f45 = function f45(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "disabled" ] = "1";
        r1[ "content" ] = "Москва";
        var v64 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f6', c0, i0, l0, a0, yr.object2nodeset( v64 ));

        return r0;
    };

    // func input-length() : xml
    M.f46 = function f46(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "length" ] = 11;
        r1[ "maxlength" ] = 11;
        r1[ "placeholder" ] = "11 символов";
        var v65 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f6', c0, i0, l0, a0, yr.object2nodeset( v65 ));

        return r0;
    };

    // func inputs() : xml
    M.f47 = function f47(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-input_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f44', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-input_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f43', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Disabled ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-input_disabled";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f45', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Maxlength";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f46', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func input-groups() : xml
    M.f48 = function f48(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var blockDefault1 : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "placeholder" ] = "Номер билета";
        r1[ "input" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "content" ] = "Проверить";
        r1[ "button" ] = r2;
        var v66 = r1;

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
        var v67 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поле+кнопка";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f7', c0, i0, l0, a0, yr.object2nodeset( v66 )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Кнопка+поле";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f7', c0, i0, l0, a0, yr.object2nodeset( v67 )));
        r0 += "</div>";

        return r0;
    };

    // func island-simple() : xml
    M.f49 = function f49(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Остров миу-миу";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "style" ] = "height: 100px; width: 200px";
        r1[ "attrs" ] = r2;
        var v68 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v68 ));

        return r0;
    };

    // func island-padding() : xml
    M.f50 = function f50(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Остров с паддингами и инлайном";
        r1[ "padding" ] = "l";
        r1[ "inline" ] = true;
        var v69 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v69 ));

        return r0;
    };

    // func islands() : xml
    M.f51 = function f51(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f49', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Padding: L, Inline ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-island_padding_l.nb-island_inline";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f50', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func loader-small() : xml
    M.f52 = function f52(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var loader : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v70 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f13', c0, i0, l0, a0, yr.object2nodeset( v70 ));

        return r0;
    };

    // func loader-medium() : xml
    M.f53 = function f53(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var loader : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v71 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f13', c0, i0, l0, a0, yr.object2nodeset( v71 ));

        return r0;
    };

    // func loaders() : xml
    M.f54 = function f54(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-loader_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f53', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-loader_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f52', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func slider-small() : xml
    M.f55 = function f55(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var slider : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "type" ] = "round";
        r2[ "class" ] = "js-custom-class";
        var r3 = {};
        var a3 = { a: {} };
        r3[ "data-id" ] = "123";
        r2[ "attrs" ] = r3;
        r1[ "knob" ] = r2;
        r1[ "value" ] = 20;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v72 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f14', c0, i0, l0, a0, yr.object2nodeset( v72 ));

        return r0;
    };

    // func slider-medium() : xml
    M.f56 = function f56(m, c0, i0, l0, a0) {
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
        r1[ "knob" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v73 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f14', c0, i0, l0, a0, yr.object2nodeset( v73 ));

        return r0;
    };

    // func slider-large() : xml
    M.f57 = function f57(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var slider : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "l";
        r1[ "value" ] = 70;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v74 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f14', c0, i0, l0, a0, yr.object2nodeset( v74 ));

        return r0;
    };

    // func sliders() : xml
    M.f58 = function f58(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S, Knob: Round";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f55', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M, Knob: Round";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f56', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: L, Knob: Square";
        r0 += "</div>";
        r0 += m.f('f18', c0, i0, l0, a0, m.f('f57', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func tooltips-jq() : xml
    M.f59 = function f59(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<p>" + "Тултипы jQuery UI (обрати внимание на решение коллизий!):" + "</p>";
        r0 += "<div style=\"" + "display: inline-block; position: relative; margin: 0 1em" + "\">";
        r0 += "<a href=\"" + "#hello" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "tooltip-jq-toggler" + "\" data-nb-tooltip-jq-toggler=\"" + "{content: 'tooltip1'}" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">" + "Tooltip1" + "</span>";
        r0 += "</a>";
        r0 += "</div>";
        r0 += "<div style=\"" + "display: inline-block; position: relative; margin: 0 1em" + "\">";
        r0 += "<a href=\"" + "#hello" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "tooltip-jq-toggler" + "\" data-nb-tooltip-jq-toggler=\"" + "{content: 'tool&lt;b&gt;tip2&lt;/b&gt;'}" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">" + "Tooltip2" + "</span>";
        r0 += "</a>";
        r0 += "</div>";
        r0 += "<p>" + "Тултипы встроенные в jQuery UI, вне nb (обрати внимание на решение коллизий!):" + "</p>";
        r0 += "<div style=\"" + "display: inline-block; position: relative; margin: 0 0.5em" + "\">";
        r0 += "<a href=\"" + "#hello" + "\" class=\"" + "link link_wrapper link_pseudo" + "\" title=\"" + "look at me!" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">" + "Tooltip1" + "</span>";
        r0 += "</a>";
        r0 += "</div>";
        r0 += "<div style=\"" + "display: inline-block; position: relative; margin: 0 0.5em" + "\">";
        r0 += "<a href=\"" + "#hello" + "\" class=\"" + "link link_wrapper link_pseudo" + "\" title=\"" + "look &lt;b&gt;at me!&lt;/b&gt;" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">" + "Tooltip2" + "</span>";
        r0 += "</a>";
        r0 += "</div>";

        return r0;
    };

    var j1 = [ 1, 0 ];

    var j2 = [ 0, 'attrs', 0, '*' ];

    var j3 = [ 0, 'class' ];

    var j4 = [ 0, 'button' ];

    var j5 = [ 0, 'href' ];

    function p0(m, c0, i0, l0) {
        return simpleBoolean('href', c0);
    }

    var j6 = [ 0, 'button', 2, p0 ];

    var j7 = [ 0, 'mod' ];

    function p1(m, c0, i0, l0) {
        return cmpSN("attach", selectNametest('mod', c0, []));
    }

    var j8 = [ 0, 'button', 2, p1 ];

    var j9 = [ 0, 'disabled' ];

    function p2(m, c0, i0, l0) {
        return !simpleBoolean('disabled', c0);
    }

    var j10 = [ 0, 'button', 2, p2, 0, 'href' ];

    var j11 = [ 0, 'button', 0, 'size' ];

    var j12 = [ 0, 'button', 0, 'theme' ];

    var j13 = [ 0, 'button', 0, 'disabled' ];

    function p3(m, c0, i0, l0) {
        return cmpSN("round", selectNametest('mod', c0, []));
    }

    var j14 = [ 0, 'button', 2, p3 ];

    var j15 = [ 0, 'content' ];

    function p4(m, c0, i0, l0) {
        return !nodeset2boolean( (selectNametest('content', c0, [])) );
    }

    var j16 = [ 0, 'button', 2, p4, 0, 'icon' ];

    var j17 = [ 0, 'icon' ];

    function p5(m, c0, i0, l0) {
        return simpleBoolean('content', c0) && simpleBoolean('icon', c0);
    }

    var j18 = [ 0, 'button', 2, p5 ];

    function p6(m, c0, i0, l0) {
        return !simpleBoolean('content', c0) && simpleBoolean('icon', c0);
    }

    var j19 = [ 0, 'button', 2, p6 ];

    var j20 = [ 0, 'popup' ];

    var j21 = [ 0, 'popup', 0, 'id' ];

    var j22 = [ 0, 'popup', 0, 'modal' ];

    var j23 = [ 0, 'popup', 0, 'menu' ];

    var j24 = [ 0, 'text' ];

    var j25 = [ 0, 'radio-button' ];

    var j26 = [ 0, 'group' ];

    var j27 = [ 0, 'radio-button', 0, 'group' ];

    var j28 = [ 1, 1, 0, 'size' ];

    var j29 = [ 1, 1, 0, 'theme' ];

    var j30 = [ 1, 1, 0, 'type' ];

    var j31 = [ 1, 1, 0, 'name' ];

    var j32 = [ 0, 'value' ];

    function p7(m, c0, i0, l0) {
        return cmpSN("radio-button", selectNametest('mod', c0, []));
    }

    var j33 = [ 0, 'button', 2, p7 ];

    var j34 = [ 0, 'name' ];

    var j35 = [ 0, 'checked' ];

    var j36 = [ 0, 'button', 2, p7, 0, 'checked' ];

    var j37 = [ 0, 'select' ];

    var j38 = [ 0, 'id' ];

    var j39 = [ 0, 'direction' ];

    var j40 = [ 0, 'size' ];

    var j41 = [ 0, 'theme' ];

    var j42 = [ 0, 'items' ];

    var j43 = [ 0, 'select', 0, 'items' ];

    var j44 = [ 0, 'selected' ];

    function p8(m, c0, i0, l0) {
        return simpleBoolean('selected', c0);
    }

    var j45 = [ 0, 'select', 0, 'items', 2, p8 ];

    var j46 = [ 0, 'select', 0, 'size' ];

    var j47 = [ 0, 'select', 0, 'theme' ];

    var j48 = [ 0, 'select', 0, 'disabled' ];

    var j49 = [ 0, 'select', 2, p3 ];

    var j50 = [ 0, 'checkbox' ];

    var j51 = [ 0, 'type' ];

    var j52 = [ 0, 'input' ];

    var j53 = [ 0, 'input', 0, 'size' ];

    var j54 = [ 0, 'input', 0, 'disabled' ];

    var j55 = [ 0, 'input', 0, 'readonly' ];

    var j56 = [ 0, 'input', 0, 'maxlength' ];

    var j57 = [ 0, 'input', 0, 'length' ];

    var j58 = [ 0, 'input', 0, 'placeholder' ];

    var j59 = [ 0, 'input', 0, 'type' ];

    var j60 = [ 0, 'input', 0, 'name' ];

    var j61 = [ 0, 'input-group' ];

    var j62 = [ 0, 'progress' ];

    var j63 = [ 0, 'progress', 0, 'type' ];

    var j64 = [ 0, 'progress', 0, 'id' ];

    var j65 = [ 0, 'progress', 0, 'start' ];

    var j66 = [ 0, 'progress', 0, 'bar' ];

    var j67 = [ 0, 'start' ];

    var j68 = [ 0, 'progress', 0, 'title' ];

    var j69 = [ 0, 'type' ];

    function p9(m, c0, i0, l0) {
        return cmpSN("percentage", selectNametest('type', c0.doc.root, []));
    }

    var j70 = [ 0, 'progress', 0, 'title', 4, p9 ];

    function p10(m, c0, i0, l0) {
        return simpleBoolean('icon', c0);
    }

    var j71 = [ 0, 'icon', 2, p10 ];

    var j72 = [ 0, 'paranja' ];

    var j73 = [ 0, 'paranja', 0, 'theme' ];

    var j74 = [ 0, 'island' ];

    var j75 = [ 0, 'island', 0, 'padding' ];

    var j76 = [ 0, 'island', 0, 'inline' ];

    var j77 = [ 0, 'dropzone' ];

    var j78 = [ 0, 'dropzone', 0, 'mod' ];

    var j79 = [ 0, 'dropzone', 0, 'button' ];

    var j80 = [ 0, 'head' ];

    function p11(m, c0, i0, l0) {
        return cmpSN("modal", selectNametest('mod', c0, []));
    }

    var j81 = [ 0, 'dropzone', 2, p11 ];

    var j82 = [ 0, 'dropzone', 0, 'head' ];

    var j83 = [ 0, 'dropzone', 0, 'text' ];

    var j84 = [ 1, 1, 0, 'button' ];

    function p12(m, c0, i0, l0) {
        return !(cmpSN("false", [ c0 ]));
    }

    var j85 = [ 0, 'dropzone', 0, 'button', 2, p12 ];

    var j86 = [ 0, 'loader' ];

    var j87 = [ 0, 'slider' ];

    var j88 = [ 0, 'track', 0, 'class' ];

    var j89 = [ 0, 'interval', 0, 'class' ];

    var j90 = [ 0, 'knob', 0, 'type' ];

    var j91 = [ 0, 'knob', 0, 'class' ];

    var j92 = [ 0, 'range', 0, 'class' ];

    var j93 = [ 0, 'dialog' ];

    var j94 = [ 0, 'dialog', 0, 'id' ];

    var j95 = [ 0, 'title' ];

    var j96 = [ 0, 'close' ];

    var j97 = [ 0, 'actions' ];

    function p13(m, c0, i0, l0) {
        return nodeset2boolean( [ c0 ] ) != false;
    }

    var j98 = [ 0, 'close', 2, p13 ];

    var j99 = [ 0, 'right' ];

    var j100 = [ 0, 'left' ];

    function p14(m, c0, i0, l0) {
        return cmpSN("myButton", selectNametest('mod', c0, []));
    }

    var j101 = [ 0, 'button', 2, p14 ];

    var j102 = [ ];

    // match .* : nb-main-attrs
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, [ c0 ], 'nb-attrs', a0)
        r0 += m.a(m, selectNametest('*', c0, []), 'nb-attrs', a0)
        r0 += m.a(m, m.s(j2, c0), 'nb-attrs', a0)

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

    // match .class : nb-attrs
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" " + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" " + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t2.j = j3;
    M.t2.a = 0;

    // match .attrs.* : nb-attrs
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ ( yr.nodeName( [ c0 ] ) ) ] = new yr.scalarAttr(nodeset2scalar( [ c0 ] ));

        return r0;
    };
    M.t3.j = j2;
    M.t3.a = 0;

    // match .button : nb
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<button";
        a0.a = {
        };
        a0.s = 'button';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</button>";

        return r0;
    };
    M.t4.j = j4;
    M.t4.a = 0;

    // match .button[ .href ] : nb
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
        };
        a0.s = 'a';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</a>";

        return r0;
    };
    M.t5.j = j6;
    M.t5.a = 0;

    // match .button[ .mod == "attach" ] : nb
    M.t6 = function t6(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
        };
        a0.s = 'span';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += closeAttrs(a0);
        r0 += "<input type=\"" + "file" + "\" class=\"" + "nb-button__attach" + "\"/>";
        r0 += "</span>";

        return r0;
    };
    M.t6.j = j8;
    M.t6.a = 0;

    // match .button : nb-attrs
    M.t7 = function t7(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb" ] = new yr.scalarAttr("button");
        a0.a[ "class" ] = new yr.scalarAttr("nb-button");

        return r0;
    };
    M.t7.j = j4;
    M.t7.a = 0;

    // match .button[ !.disabled ].href : nb-attrs
    M.t8 = function t8(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "href" ] = new yr.scalarAttr(nodeset2scalar( ( [ c0 ] ) ));

        return r0;
    };
    M.t8.j = j10;
    M.t8.a = 0;

    // match .button.size : nb-attrs
    M.t9 = function t9(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-button_size_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-button_size_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t9.j = j11;
    M.t9.a = 0;

    // match .button.theme : nb-attrs
    M.t10 = function t10(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-button_theme_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-button_theme_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t10.j = j12;
    M.t10.a = 0;

    // match .button.disabled : nb-attrs
    M.t11 = function t11(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-button_disabled js-disabled");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-button_disabled js-disabled");
        }
        a0.a[ "disabled" ] = new yr.scalarAttr("disabled");

        return r0;
    };
    M.t11.j = j13;
    M.t11.a = 0;

    // match .button[ .mod == "attach" ] : nb-attrs
    M.t12 = function t12(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "class" ] = new yr.scalarAttr("nb-button nb-button_type_attach");
        a0.a[ "data-nb" ] = new yr.scalarAttr("button");

        return r0;
    };
    M.t12.j = j8;
    M.t12.a = 0;

    // match .button[ .mod == "round" ] : nb-attrs
    M.t13 = function t13(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "class" ] = new yr.scalarAttr("nb-button nb-button_type_round");

        return r0;
    };
    M.t13.j = j14;
    M.t13.a = 0;

    // match .button[ !( .content ) ].icon : nb-attrs
    M.t14 = function t14(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-button_only-icon");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-button_only-icon");
        }

        return r0;
    };
    M.t14.j = j16;
    M.t14.a = 0;

    // match .button : nb-content
    M.t15 = function t15(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, [ c0 ], 'nb-content-button', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";

        return r0;
    };
    M.t15.j = j4;
    M.t15.a = 0;

    // match .button : nb-content-button
    M.t16 = function t16(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('content', c0, []) );

        return r0;
    };
    M.t16.j = j4;
    M.t16.a = 0;

    // match .button[ .content && .icon ] : nb-content-button
    M.t17 = function t17(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('content', c0, []) );

        return r0;
    };
    M.t17.j = j18;
    M.t17.a = 0;

    // match .button[ !.content && .icon ] : nb-content-button
    M.t18 = function t18(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += " ";
        r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)

        return r0;
    };
    M.t18.j = j19;
    M.t18.a = 0;

    // match .popup : nb
    M.t19 = function t19(m, c0, i0, l0, a0) {
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
    M.t19.j = j20;
    M.t19.a = 0;

    // match .popup : nb-attrs
    M.t20 = function t20(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb" ] = new yr.scalarAttr("popup");
        a0.a[ "class" ] = new yr.scalarAttr("nb-popup _hidden");

        return r0;
    };
    M.t20.j = j20;
    M.t20.a = 0;

    // match .popup.id : nb-attrs
    M.t21 = function t21(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "id" ];
        if (tmp0) {
            a0.a[ "id" ] = tmp0.addscalar(nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "id" ] = new yr.scalarAttr(nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t21.j = j21;
    M.t21.a = 0;

    // match .popup.modal : nb-attrs
    M.t22 = function t22(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb-modal" ] = new yr.scalarAttr("true");

        return r0;
    };
    M.t22.j = j22;
    M.t22.a = 0;

    // match .popup : nb-content
    M.t23 = function t23(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, selectNametest('*', c0, []), 'nb-content', a0)

        return r0;
    };
    M.t23.j = j20;
    M.t23.a = 0;

    // match .popup.menu : nb-content
    M.t24 = function t24(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('href', c0, []) ) ) + "\" class=\"" + "nb-popup__line _link" + "\">";
        r0 += nodeset2xml( selectNametest('text', c0, []) );
        r0 += "</a>";

        return r0;
    };
    M.t24.j = j23;
    M.t24.a = 0;

    // match .radio-button : nb
    M.t25 = function t25(m, c0, i0, l0, a0) {
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
    M.t25.j = j25;
    M.t25.a = 0;

    // match .radio-button : nb-attrs
    M.t26 = function t26(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb" ] = new yr.scalarAttr("radio-button");
        a0.a[ "class" ] = new yr.scalarAttr("nb-radio-button _init");

        return r0;
    };
    M.t26.j = j25;
    M.t26.a = 0;

    // match .radio-button : nb-content
    M.t27 = function t27(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, selectNametest('group', c0, []), 'nb-content-radio-button', a0)

        return r0;
    };
    M.t27.j = j25;
    M.t27.a = 0;

    // match .radio-button.group : nb-content-radio-button
    M.t28 = function t28(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var button : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = yr.nodeset2data(m.s(j28, c0));
        r1[ "theme" ] = yr.nodeset2data(m.s(j29, c0));
        r1[ "class" ] = simpleScalar('class', c0) + " js-button";
        r1[ "type" ] = yr.nodeset2data(m.s(j30, c0));
        r1[ "name" ] = yr.nodeset2data(m.s(j31, c0));
        r1[ "mod" ] = "radio-button";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-value" ] = yr.nodeset2data(selectNametest('value', c0, []));
        r1[ "attrs" ] = r2;
        var v75 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, (yr.externals['nb-extend'])(yr.object2nodeset( v75 ), [ c0 ]));

        return r0;
    };
    M.t28.j = j27;
    M.t28.a = 0;

    // match .button[ .mod == "radio-button" ] : nb
    M.t29 = function t29(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var uniq : scalar
        var v76 = "nb-radio-button_" + ( (yr.externals['nb-uniq'])() );

        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-radio-button__button" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("nb-radio-button__radio"),
            'type': new yr.scalarAttr("radio"),
            'name': new yr.scalarAttr(nodeset2scalar( ( selectNametest('name', c0, []) ) )),
            'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c0, []) ) )),
            'id': new yr.scalarAttr(( v76 ))
        };
        a0.s = 'input';
        if (simpleBoolean('checked', c0)) {
            a0.a[ "checked" ] = new yr.scalarAttr("checked");
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<label";
        a0.a = {
            'for': new yr.scalarAttr(( v76 ))
        };
        a0.s = 'label';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</label>";
        r0 += "</span>";

        return r0;
    };
    M.t29.j = j33;
    M.t29.a = 0;

    // match .button[ .mod == "radio-button" ] : nb-attrs
    M.t30 = function t30(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "class" ] = new yr.scalarAttr("nb-button");

        return r0;
    };
    M.t30.j = j33;
    M.t30.a = 0;

    // match .button[ .mod == "radio-button" ].checked : nb-attrs
    M.t31 = function t31(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-button_type_checked");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-button_type_checked");
        }

        return r0;
    };
    M.t31.j = j36;
    M.t31.a = 0;

    // match .select : nb
    M.t32 = function t32(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        a0.a[ "id" ] = new yr.scalarAttr(simpleScalar('id', c0));
        a0.a[ "data-nb" ] = new yr.scalarAttr("select");
        a0.a[ "data-nb-direction" ] = new yr.scalarAttr(simpleScalar('direction', c0));
        a0.a[ "class" ] = new yr.scalarAttr("nb-select ui-front _init");
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-select_size_" + simpleScalar('size', c0));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-select_size_" + simpleScalar('size', c0));
        }
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-select_theme_" + simpleScalar('theme', c0));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-select_theme_" + simpleScalar('theme', c0));
        }
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";

        return r0;
    };
    M.t32.j = j37;
    M.t32.a = 0;

    // match .select : nb-content
    M.t33 = function t33(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<button";
        a0.a = {
        };
        a0.s = 'button';
        a0.a[ "data-nb" ] = new yr.scalarAttr("button");
        a0.a[ "class" ] = new yr.scalarAttr("nb-button nb-select__button _init");
        r0 += m.a(m, selectNametest('*', c0, []), 'nb-button-attrs', a0)
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
        };
        a0.s = 'select';
        a0.a[ "id" ] = new yr.scalarAttr("nb-select_" + simpleScalar('id', c0));
        a0.a[ "class" ] = new yr.scalarAttr("nb-select__fallback");
        a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('id', c0));
        if (nodeset2boolean( (selectNametest('disabled', c0, [])) )) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += m.a(m, selectNametest('items', c0, []), 'nb-fallback-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</select>";

        return r0;
    };
    M.t33.j = j37;
    M.t33.a = 0;

    // match .select.items : nb-fallback-content
    M.t34 = function t34(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<option";
        a0.a = {
        };
        a0.s = 'option';
        a0.a[ "label" ] = new yr.scalarAttr(simpleScalar('text', c0));
        a0.a[ "value" ] = new yr.scalarAttr(simpleScalar('value', c0));
        if (nodeset2boolean( (selectNametest('selected', c0, [])) )) {
            a0.a[ "selected" ] = new yr.scalarAttr("");
        }
        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('text', c0, []) );
        r0 += "</option>";

        return r0;
    };
    M.t34.j = j43;
    M.t34.a = 0;

    // match .select.items[ .selected ] : nb-button-content
    M.t35 = function t35(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('text', c0, []) );

        return r0;
    };
    M.t35.j = j45;
    M.t35.a = 0;

    // match .select.size : nb-button-attrs
    M.t36 = function t36(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-button_size_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-button_size_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t36.j = j46;
    M.t36.a = 0;

    // match .select.theme : nb-button-attrs
    M.t37 = function t37(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-button_theme_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-button_theme_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t37.j = j47;
    M.t37.a = 0;

    // match .select.disabled : nb-button-attrs
    M.t38 = function t38(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-button_disabled");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-button_disabled");
        }
        a0.a[ "disabled" ] = new yr.scalarAttr("disabled");

        return r0;
    };
    M.t38.j = j48;
    M.t38.a = 0;

    // match .select[ .mod == "round" ] : nb-button-attrs
    M.t39 = function t39(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "class" ] = new yr.scalarAttr("nb-button nb-button_type_round");

        return r0;
    };
    M.t39.j = j49;
    M.t39.a = 0;

    // match .checkbox : nb
    M.t40 = function t40(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var uniq : scalar
        var v77 = "nb-checkbox_" + ( (yr.externals['nb-uniq'])() );

        r0 += closeAttrs(a0);
        r0 += "<label class=\"" + "nb-checkbox nb-checkbox_size_" + nodeset2attrvalue( ( selectNametest('size', c0, []) ) ) + "\" for=\"" + scalar2attrvalue( ( v77 ) ) + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("nb-checkbox__input"),
            'type': new yr.scalarAttr(nodeset2scalar( ( selectNametest('type', c0, []) ) )),
            'id': new yr.scalarAttr(( v77 ))
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
    M.t40.j = j50;
    M.t40.a = 0;

    // match .checkbox : nb-content
    M.t41 = function t41(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-checkbox__label" + "\">";
        r0 += nodeset2xml( selectNametest('text', c0, []) );
        r0 += "</span>";

        return r0;
    };
    M.t41.j = j50;
    M.t41.a = 0;

    // match .checked : nb-attrs
    M.t42 = function t42(m, c0, i0, l0, a0) {
        var r0 = '';

        if (nodeset2boolean( [ c0 ] )) {
            a0.a[ "checked" ] = new yr.scalarAttr("checked");
        }

        return r0;
    };
    M.t42.j = j35;
    M.t42.a = 0;

    // match .input : nb
    M.t43 = function t43(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
        };
        a0.s = 'span';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";

        return r0;
    };
    M.t43.j = j52;
    M.t43.a = 0;

    // match .input : nb-attrs
    M.t44 = function t44(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb" ] = new yr.scalarAttr("input");
        a0.a[ "class" ] = new yr.scalarAttr("nb-input-box");

        return r0;
    };
    M.t44.j = j52;
    M.t44.a = 0;

    // match .input.size : nb-attrs
    M.t45 = function t45(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-input_size_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-input_size_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t45.j = j53;
    M.t45.a = 0;

    // match .input.disabled : nb-attrs
    M.t46 = function t46(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-input_disabled js-disabled");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-input_disabled js-disabled");
        }

        return r0;
    };
    M.t46.j = j54;
    M.t46.a = 0;

    // match .input : nb-content
    M.t47 = function t47(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<input";
        a0.a = {
            'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('content', c0, []) ) )),
            'class': new yr.scalarAttr("nb-input")
        };
        a0.s = 'input';
        r0 += m.a(m, selectNametest('*', c0, []), 'nb-content', a0)
        r0 += closeAttrs(a0);
        r0 += '';

        return r0;
    };
    M.t47.j = j52;
    M.t47.a = 0;

    // match .input.disabled : nb-content
    M.t48 = function t48(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "disabled" ] = new yr.scalarAttr("disabled");

        return r0;
    };
    M.t48.j = j54;
    M.t48.a = 0;

    // match .input.readonly : nb-content
    M.t49 = function t49(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "readonly" ] = new yr.scalarAttr("readonly");

        return r0;
    };
    M.t49.j = j55;
    M.t49.a = 0;

    // match .input.maxlength : nb-content
    M.t50 = function t50(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "maxlength" ] = new yr.scalarAttr(nodeset2scalar( [ c0 ] ));

        return r0;
    };
    M.t50.j = j56;
    M.t50.a = 0;

    // match .input.length : nb-content
    M.t51 = function t51(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "size" ] = new yr.scalarAttr(nodeset2scalar( [ c0 ] ));

        return r0;
    };
    M.t51.j = j57;
    M.t51.a = 0;

    // match .input.placeholder : nb-content
    M.t52 = function t52(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "placeholder" ] = new yr.scalarAttr(nodeset2scalar( [ c0 ] ));

        return r0;
    };
    M.t52.j = j58;
    M.t52.a = 0;

    // match .input.type : nb-content
    M.t53 = function t53(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "type" ] = new yr.scalarAttr(nodeset2scalar( [ c0 ] ));

        return r0;
    };
    M.t53.j = j59;
    M.t53.a = 0;

    // match .input.name : nb-content
    M.t54 = function t54(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( [ c0 ] ));

        return r0;
    };
    M.t54.j = j60;
    M.t54.a = 0;

    // match .input-group : nb
    M.t55 = function t55(m, c0, i0, l0, a0) {
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
                r0 += m.f('f6', c1, i1, l1, a0, [ c1 ]);
            }
        }
        r0 += "</div>";

        return r0;
    };
    M.t55.j = j61;
    M.t55.a = 0;

    // match .progress : nb
    M.t56 = function t56(m, c0, i0, l0, a0) {
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
    M.t56.j = j62;
    M.t56.a = 0;

    // match .progress : nb-attrs
    M.t57 = function t57(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb" ] = new yr.scalarAttr("progress");
        a0.a[ "class" ] = new yr.scalarAttr("nb-progress _init");

        return r0;
    };
    M.t57.j = j62;
    M.t57.a = 0;

    // match .progress.type : nb-attrs
    M.t58 = function t58(m, c0, i0, l0, a0) {
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
    M.t58.j = j63;
    M.t58.a = 0;

    // match .progress.id : nb-attrs
    M.t59 = function t59(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "id" ] = new yr.scalarAttr(nodeset2scalar( ( [ c0 ] ) ));

        return r0;
    };
    M.t59.j = j64;
    M.t59.a = 0;

    // match .progress.start : nb-attrs
    M.t60 = function t60(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb-progress" ] = new yr.scalarAttr(nodeset2scalar( ( [ c0 ] ) ));

        return r0;
    };
    M.t60.j = j65;
    M.t60.a = 0;

    // match .progress : nb-content
    M.t61 = function t61(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, selectNametest('*', c0, []), 'nb-content', a0)

        return r0;
    };
    M.t61.j = j62;
    M.t61.a = 0;

    // match .progress.bar : nb-content
    M.t62 = function t62(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-progress__bar js-bar" + "\" style=\"" + "width: " + nodeset2attrvalue( ( selectNametest('start', c0.doc.root, []) ) ) + "%" + "\"></div>";

        return r0;
    };
    M.t62.j = j66;
    M.t62.a = 0;

    // match .progress.title : nb-content
    M.t63 = function t63(m, c0, i0, l0, a0) {
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
    M.t63.j = j68;
    M.t63.a = 0;

    // match .progress.title : nb-progress-text
    M.t64 = function t64(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( [ c0 ] );

        return r0;
    };
    M.t64.j = j68;
    M.t64.a = 0;

    // match .progress.title[ /.type == "percentage" ] : nb-progress-text
    M.t65 = function t65(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += scalar2xml( simpleScalar('start', c0.doc.root) + "%" );

        return r0;
    };
    M.t65.j = j70;
    M.t65.a = 0;

    // match .icon : nb
    M.t66 = function t66(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<img src=\"" + "//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" + "\" class=\"" + "nb-icon nb-icon_" + nodeset2attrvalue( ( [ c0 ] ) ) + "\"/>";

        return r0;
    };
    M.t66.j = j17;
    M.t66.a = 0;

    // match .icon[ .icon ] : nb
    M.t67 = function t67(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<img src=\"" + "//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" + "\" class=\"" + "nb-icon nb-icon_" + nodeset2attrvalue( ( selectNametest('icon', c0, []) ) ) + "\"/>";

        return r0;
    };
    M.t67.j = j71;
    M.t67.a = 0;

    // match .paranja : nb
    M.t68 = function t68(m, c0, i0, l0, a0) {
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
    M.t68.j = j72;
    M.t68.a = 0;

    // match .paranja : nb-attrs
    M.t69 = function t69(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb" ] = new yr.scalarAttr("paranja");
        a0.a[ "class" ] = new yr.scalarAttr("nb-paranja");

        return r0;
    };
    M.t69.j = j72;
    M.t69.a = 0;

    // match .paranja.theme : nb-attrs
    M.t70 = function t70(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-paranja_theme_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-paranja_theme_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t70.j = j73;
    M.t70.a = 0;

    // match .island : nb
    M.t71 = function t71(m, c0, i0, l0, a0) {
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
    M.t71.j = j74;
    M.t71.a = 0;

    // match .island.padding : nb-attrs
    M.t72 = function t72(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-island_padding_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-island_padding_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t72.j = j75;
    M.t72.a = 0;

    // match .island.inline : nb-attrs
    M.t73 = function t73(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-island_inline");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-island_inline");
        }

        return r0;
    };
    M.t73.j = j76;
    M.t73.a = 0;

    // match .island : nb-content
    M.t74 = function t74(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('content', c0, []) );

        return r0;
    };
    M.t74.j = j74;
    M.t74.a = 0;

    // match .dropzone : nb
    M.t75 = function t75(m, c0, i0, l0, a0) {
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
    M.t75.j = j77;
    M.t75.a = 0;

    // match .dropzone : nb-attrs
    M.t76 = function t76(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "class" ] = new yr.scalarAttr("nb-dropzone");

        return r0;
    };
    M.t76.j = j77;
    M.t76.a = 0;

    // match .dropzone : nb-attrs
    M.t77 = function t77(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "class" ] = new yr.scalarAttr("nb-dropzone");

        return r0;
    };
    M.t77.j = j77;
    M.t77.a = 0;

    // match .dropzone.mod : nb-attrs
    M.t78 = function t78(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-dropzone_type_" + nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-dropzone_type_" + nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t78.j = j78;
    M.t78.a = 0;

    // match .dropzone.button : nb-attrs
    M.t79 = function t79(m, c0, i0, l0, a0) {
        var r0 = '';

        return r0;
    };
    M.t79.j = j79;
    M.t79.a = 0;

    // match .dropzone : nb-main-content
    M.t80 = function t80(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, [ c0 ], 'nb-content', a0)

        return r0;
    };
    M.t80.j = j77;
    M.t80.a = 0;

    // match .dropzone : nb-content
    M.t81 = function t81(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, selectNametest('head', c0, []), 'nb-content', a0)
        r0 += m.a(m, selectNametest('text', c0, []), 'nb-content', a0)
        r0 += m.a(m, [ c0 ], 'cover', a0)

        return r0;
    };
    M.t81.j = j77;
    M.t81.a = 0;

    // match .dropzone[ .mod == "modal" ] : cover
    M.t82 = function t82(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-dropzone__cover js-dropzone" + "\"></div>";

        return r0;
    };
    M.t82.j = j81;
    M.t82.a = 0;

    // match .dropzone.head : nb-content
    M.t83 = function t83(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-dropzone__head" + "\">";
        r0 += nodeset2xml( [ c0 ] );
        r0 += "</div>";

        return r0;
    };
    M.t83.j = j82;
    M.t83.a = 0;

    // match .dropzone.text : nb-content
    M.t84 = function t84(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-dropzone__text" + "\">";
        r0 += nodeset2xml( [ c0 ] );
        r0 += m.a(m, m.s(j84, c0), 'nb-content', a0)
        r0 += "</div>";

        return r0;
    };
    M.t84.j = j83;
    M.t84.a = 0;

    // match .dropzone.button[ . != "false" ] : nb-content
    M.t85 = function t85(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, [ c0 ]);

        return r0;
    };
    M.t85.j = j85;
    M.t85.a = 0;

    // match .loader : nb
    M.t86 = function t86(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr(nodeset2scalar( ( selectNametest('class', c0, []) ) ) + " nb-loader nb-loader_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ))
        };
        a0.s = 'span';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-loader__spinner" + "\"></span>";
        r0 += "</span>";

        return r0;
    };
    M.t86.j = j86;
    M.t86.a = 0;

    // match .slider : nb
    M.t87 = function t87(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-slider nb-slider_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " " + nodeset2scalar( ( selectNametest('class', c0, []) ) ))
        };
        a0.s = 'span';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-slider__track " + nodeset2attrvalue( ( m.s(j88, c0) ) ) + "\">";
        r0 += "<span class=\"" + "nb-slider__full" + "\"></span>";
        r0 += "<span class=\"" + "nb-slider__interval " + nodeset2attrvalue( ( m.s(j89, c0) ) ) + "\" style=\"" + "width: " + nodeset2attrvalue( ( selectNametest('value', c0, []) ) ) + "%" + "\"></span>";
        r0 += "</span>";
        r0 += m.a(m, [ c0 ], 'nb-slider-knob', a0)
        r0 += "</span>";

        return r0;
    };
    M.t87.j = j87;
    M.t87.a = 0;

    // match .slider : nb-slider-knob
    M.t88 = function t88(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var knob : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "class" ] = "nb-slider__knob nb-slider__knob_" + nodeset2scalar( ( m.s(j90, c0) ) ) + " nb-slider__knob_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " " + nodeset2scalar( ( m.s(j91, c0) ) );
        var r2 = {};
        var a2 = { a: {} };
        r2[ "style" ] = "left: " + nodeset2scalar( ( selectNametest('value', c0, []) ) ) + "%";
        r1[ "attrs" ] = r2;
        var v78 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-slider__range nb-slider__range_size_" + nodeset2attrvalue( ( selectNametest('size', c0, []) ) ) + " " + nodeset2attrvalue( ( m.s(j92, c0) ) ) + "\">";
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v78 ));
        r0 += "</div>";

        return r0;
    };
    M.t88.j = j87;
    M.t88.a = 0;

    // match .dialog : nb
    M.t89 = function t89(m, c0, i0, l0, a0) {
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
    M.t89.j = j93;
    M.t89.a = 0;

    // match .dialog : nb-attrs
    M.t90 = function t90(m, c0, i0, l0, a0) {
        var r0 = '';

        a0.a[ "data-nb" ] = new yr.scalarAttr("dialog");
        a0.a[ "class" ] = new yr.scalarAttr("nb-dialog nb-dialog_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ) + " nb-island nb-island_fly");

        return r0;
    };
    M.t90.j = j93;
    M.t90.a = 0;

    // match .dialog.id : nb-attrs
    M.t91 = function t91(m, c0, i0, l0, a0) {
        var r0 = '';

        var tmp0 = a0.a[ "id" ];
        if (tmp0) {
            a0.a[ "id" ] = tmp0.addscalar(nodeset2scalar( ( [ c0 ] ) ));
        } else {
            a0.a[ "id" ] = new yr.scalarAttr(nodeset2scalar( ( [ c0 ] ) ));
        }

        return r0;
    };
    M.t91.j = j94;
    M.t91.a = 0;

    // match .dialog : nb-content
    M.t92 = function t92(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-dialog__header" + "\">";
        r0 += nodeset2xml( selectNametest('title', c0, []) );
        r0 += m.a(m, selectNametest('close', c0, []), 'nb-dialog', a0)
        r0 += "</div>";
        r0 += m.a(m, selectNametest('content', c0, []), 'nb-dialog', a0)
        r0 += m.a(m, selectNametest('actions', c0, []), 'nb-dialog', a0)

        return r0;
    };
    M.t92.j = j93;
    M.t92.a = 0;

    // match .close[ . != false() ] : nb-dialog
    M.t93 = function t93(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a class=\"" + "nb-dialog__close " + nodeset2attrvalue( ( selectNametest('class', c0, []) ) ) + "\">";
        r0 += m.f('f9', c0, i0, l0, a0, "close_16");
        r0 += "</a>";

        return r0;
    };
    M.t93.j = j98;
    M.t93.a = 0;

    // match .content : nb-dialog
    M.t94 = function t94(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-dialog__content" + "\">";
        r0 += nodeset2xml( [ c0 ] );
        r0 += "</div>";

        return r0;
    };
    M.t94.j = j15;
    M.t94.a = 0;

    // match .actions : nb-dialog
    M.t95 = function t95(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-dialog__actions" + "\">";
        r0 += "<div class=\"" + "nb-dialog__pull_right" + "\">";
        var items0 = selectNametest('right', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += m.f('f1', c1, i1, l1, a0, [ c1 ]);
            r0 += " ";
        }
        r0 += "</div>";
        var items0 = selectNametest('left', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += " ";
            r0 += m.f('f1', c1, i1, l1, a0, [ c1 ]);
        }
        r0 += "</div>";

        return r0;
    };
    M.t95.j = j97;
    M.t95.a = 0;

    // match .button[ .mod == "myButton" ] : nb
    M.t96 = function t96(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<button";
        a0.a = {
        };
        a0.s = 'button';
        r0 += m.a(m, [ c0 ], 'nb-main-attrs', a0)
        a0.a[ "data-nb" ] = new yr.scalarAttr("");
        r0 += m.a(m, [ c0 ], 'nb-main-content', a0)
        r0 += m.a(m, [ c0 ], 'nb-mybuttonElem', a0)
        r0 += closeAttrs(a0);
        r0 += "</button>";

        return r0;
    };
    M.t96.j = j101;
    M.t96.a = 0;

    // match .button[ .mod == "myButton" ] : nb-mybuttonElem
    M.t97 = function t97(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-button__text" + "\" style=\"" + "margin-left: -2em" + "\">" + " :-) " + "</span>";

        return r0;
    };
    M.t97.j = j101;
    M.t97.a = 0;

    // match .button[ .mod == "myButton" ] : nb-content-button
    M.t98 = function t98(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<b>";
        r0 += nodeset2xml( selectNametest('content', c0, []) );
        r0 += "</b>";

        return r0;
    };
    M.t98.j = j101;
    M.t98.a = 0;

    // match /
    M.t99 = function t99(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var check : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "Компактный вид";
        r1[ "class" ] = "js-toggle-compact";
        var v79 = r1;

        //  var check2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "text" ] = "HTML";
        r1[ "class" ] = "js-toggle-html";
        var v80 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-toggle nb-island nb-island_fly" + "\">";
        r0 += "<div class=\"" + "demo-toggle__section" + "\">";
        r0 += m.f('f5', c0, i0, l0, a0, yr.object2nodeset( v79 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-toggle__section demo-toggle__section_second" + "\">";
        r0 += m.f('f5', c0, i0, l0, a0, yr.object2nodeset( v80 ));
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Кнопки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f32', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Флаги";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f36', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Поля ввода";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f47', c0, i0, l0, a0);
        r0 += m.f('f48', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Прогрессбары";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f42', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Острова";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f51', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Крутилки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f54', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Слайдеры";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f58', c0, i0, l0, a0);
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
        r0 += m.f('f21', c0, i0, l0, a0);
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
        r0 += m.f('f41', c0, i0, l0, a0);
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
        r0 += m.f('f59', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t99.j = 1;
    M.t99.a = 1;

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
                "t80",
                "t1"
            ]
        },
        "nb-attrs": {
            "class": [
                "t3",
                "t2"
            ],
            "*": [
                "t3"
            ],
            "button": [
                "t79",
                "t30",
                "t13",
                "t12",
                "t7",
                "t3"
            ],
            "href": [
                "t8",
                "t3"
            ],
            "size": [
                "t45",
                "t9",
                "t3"
            ],
            "theme": [
                "t70",
                "t10",
                "t3"
            ],
            "disabled": [
                "t46",
                "t11",
                "t3"
            ],
            "icon": [
                "t14",
                "t3"
            ],
            "popup": [
                "t20",
                "t3"
            ],
            "id": [
                "t91",
                "t59",
                "t21",
                "t3"
            ],
            "modal": [
                "t22",
                "t3"
            ],
            "radio-button": [
                "t26",
                "t3"
            ],
            "checked": [
                "t42",
                "t31",
                "t3"
            ],
            "input": [
                "t44",
                "t3"
            ],
            "progress": [
                "t57",
                "t3"
            ],
            "type": [
                "t58",
                "t3"
            ],
            "start": [
                "t60",
                "t3"
            ],
            "paranja": [
                "t69",
                "t3"
            ],
            "padding": [
                "t72",
                "t3"
            ],
            "inline": [
                "t73",
                "t3"
            ],
            "dropzone": [
                "t77",
                "t76",
                "t3"
            ],
            "mod": [
                "t78",
                "t3"
            ],
            "dialog": [
                "t90",
                "t3"
            ]
        },
        "nb": {
            "button": [
                "t96",
                "t29",
                "t6",
                "t5",
                "t4"
            ],
            "popup": [
                "t19"
            ],
            "radio-button": [
                "t25"
            ],
            "select": [
                "t32"
            ],
            "checkbox": [
                "t40"
            ],
            "input": [
                "t43"
            ],
            "input-group": [
                "t55"
            ],
            "progress": [
                "t56"
            ],
            "icon": [
                "t67",
                "t66"
            ],
            "paranja": [
                "t68"
            ],
            "island": [
                "t71"
            ],
            "dropzone": [
                "t75"
            ],
            "loader": [
                "t86"
            ],
            "slider": [
                "t87"
            ],
            "dialog": [
                "t89"
            ]
        },
        "nb-content": {
            "button": [
                "t85",
                "t15"
            ],
            "popup": [
                "t23"
            ],
            "menu": [
                "t24"
            ],
            "radio-button": [
                "t27"
            ],
            "select": [
                "t33"
            ],
            "checkbox": [
                "t41"
            ],
            "input": [
                "t47"
            ],
            "disabled": [
                "t48"
            ],
            "readonly": [
                "t49"
            ],
            "maxlength": [
                "t50"
            ],
            "length": [
                "t51"
            ],
            "placeholder": [
                "t52"
            ],
            "type": [
                "t53"
            ],
            "name": [
                "t54"
            ],
            "progress": [
                "t61"
            ],
            "bar": [
                "t62"
            ],
            "title": [
                "t63"
            ],
            "island": [
                "t74"
            ],
            "dropzone": [
                "t81"
            ],
            "head": [
                "t83"
            ],
            "text": [
                "t84"
            ],
            "dialog": [
                "t92"
            ]
        },
        "nb-content-button": {
            "button": [
                "t98",
                "t18",
                "t17",
                "t16"
            ]
        },
        "nb-content-radio-button": {
            "group": [
                "t28"
            ]
        },
        "nb-fallback-content": {
            "items": [
                "t34"
            ]
        },
        "nb-button-content": {
            "items": [
                "t35"
            ]
        },
        "nb-button-attrs": {
            "size": [
                "t36"
            ],
            "theme": [
                "t37"
            ],
            "disabled": [
                "t38"
            ],
            "select": [
                "t39"
            ]
        },
        "nb-progress-text": {
            "title": [
                "t65",
                "t64"
            ]
        },
        "cover": {
            "dropzone": [
                "t82"
            ]
        },
        "nb-slider-knob": {
            "slider": [
                "t88"
            ]
        },
        "nb-dialog": {
            "close": [
                "t93"
            ],
            "content": [
                "t94"
            ],
            "actions": [
                "t95"
            ]
        },
        "nb-mybuttonElem": {
            "button": [
                "t97"
            ]
        },
        "": {
            "": [
                "t99"
            ]
        }
    };
    M.imports = [];

    yr.register('main', M);

})();
