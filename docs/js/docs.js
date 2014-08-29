$.getJSON('js/_data.json', function(data) {

    var result = yr.run('main', data);

    $('.content').html(result);

    $('[example]').each(function(i, el) {
        var $code = $('[code=' + $(el).attr('example') +']');
        $(el).append($code.html());
        $code.remove();
    })

    $('.code_yate').each(function(i, el){
        var $el = $(el);
        var $code = $(el).find('pre');
        $code .hide()
        var link = $('<a data-nb="button" class="nb-button _nb-small-pseudo-button"><span class="_nb-button-content">Yate code</span></a>').on('click', function(){
            $code.toggle();
        })
        $el.prepend(link)
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
