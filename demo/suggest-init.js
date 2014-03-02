(function() {
    var suggest = nb.find('suggest-with-custom-input');
    var customInput = nb.find('custom-input-for-suggest');
    suggest.setInput(customInput.$node);
})();
