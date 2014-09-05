$.getJSON('js/_data.json', function(data) {

    var result = yr.run('main', data);

    $('.content').html(result);

    $('[example]').each(function(i, el) {
        var $el = $(el);

        var $code = $('[code=' + $el.attr('example') + ']');
        $el.append($code.html());
        $code.remove();


        var $podium = $el.find('.podium');
        var $html = $el.find('.code_html');
        var $yate = $el.parent().find('.code_yate');

        $yate.hide();
        $yate.appendTo($el);

        $html.hide();

        var linkYate = makeButton('Yate code').on('click', function() {
            $yate.toggle();
        });

        var linkHtml = makeButton('HTML code').on('click', function() {
            $html.toggle();
        })

        var actions = $('<div class="actions"></div>').append(linkYate).append(linkHtml)
        actions.insertAfter($podium)
    })

    $('.jsdoc').each(function(i, el){
        var $el = $(el);
        var $content = $el.find('.jsdoc__content')
        var $link = $el.find('.jsdoc__title a')
        $content.hide()

        $link.on('click', function(evt, el){
            evt.preventDefault();
            $content.toggle();
        })

    })


    nb.init();

    function makeButton(content) {
        return $('<a data-nb="button" class="nb-button _nb-small-pseudo-button"><span class="_nb-button-content">' + content + '</span></a>')
    }

    function unescapeHTML(input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
    }

    $('.js-beautify').each(function() {
        var $el = $(this);

        $el.text(html_beautify(unescapeHTML($el.html()), {
            unformatted: [],
            wrap_line_length: 80
        }));
    });
    hljs.initHighlightingOnLoad();

    $('.js-show-input-error').click(function() {
        var inputErrorNode = document.querySelector('.js-input-error');
        if (inputErrorNode) {
            var inputError = nb.block(inputErrorNode);
            inputError.showError();
        }
    });
})
