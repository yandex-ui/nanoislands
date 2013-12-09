# Suggest

Suggest element.

## Yate

```
nb-suggest(options)
```

### Options
 * `'attrs'` {object} - attrubutes for suggest node
 * `'attrsInput'` {object} - attrubutes for input node
 * `'disabled'` {boolean}
 * `'source'`: {array} — source data for suggest
 * `'highlight'`: {boolean} — hightlight results or not
 * `'size'` {string}  - input size. `'s'` (no other sizes supported)
 * `'countMax'` {string}  - The number of elements in which the drop-down list appears scroll (default = 10)
 * `'classSuggest'` {string} — additional class for suggest popup


### Examples

```
nb-suggest({
     'source': [
        'Вариант 1'
        'Вариант 2'
     ]
     'highlight': true()
 })
```


## JS

### Initialization

Initialize nb block on DOM node:
```
    nb.block(node);
```
Initialize all nb blocks with class '_init' within DOM node
```
    nb.init(node);
```

### Events

suggest — nb block

```

    suggest.trigger('close');
    suggest.trigger('enable');
    suggest.trigger('disable');

```

 * nb-type – bubble when enter a value
 * nb-select – bubble when select in suggest popup
 * nb-keypress-enter – bubble when input keypressed

### Methods

suggest — nb block

```

    /**
     * Returns the selected item from the the 'source' array.
     * @return {Object}
     */

     suggest.getSelected();


    /**
     * Set option to jUI widget
     * http://api.jqueryui.com/autocomplete/#method-option
     * @param  {Object.<string, number>} option — {
     *      name: value
     * }
     */

     suggest.setOption({'maxCount': 5})


    /**
    * Get current value oj the suggest
    * @returns {String | Number}
    */

    suggest.getValue();

     /**
     * Search value in the source array and open suggest popup
     * @param  {string | number} value
     */

    suggest.search('text');

```
