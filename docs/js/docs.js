$.getJSON('js/_data.json', function(data) {

    var result = yr.run('main', data);

    $('.content').html(result);

    $('[example]').each(function(i, el) {
        var $code = $('[code=' + $(el).attr('example') +']');
        $(el).append($code.html());
        $code.remove();
    })

    nb.init();


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
