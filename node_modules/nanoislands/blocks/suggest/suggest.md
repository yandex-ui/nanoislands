# Suggest

Suggest element.

## Yate

```
nb-suggest(options)
```

### Options
 * `'id'` {string}
 * `'name'` {string}
 * `'attrs'` {object} - attrubutes for suggest node
 * `'attrsInput'` {object} - attrubutes for input node
 * `'disabled'` {boolean}
 * `'source'`: {array} — source data for suggest
 * `'highlight'`: {boolean} — hightlight results or not
 * `'size'` {string}  - input size. `'s'` (no other sizes supported)
 * `'countMax'` {string}  - The number of elements in which the drop-down list appears scroll (default = 10)
 * `'classSuggest'` {string} — additional class for suggest popup
 * `'content'` {string} — initial content og suggest field


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

 * nb-type – bubble when enter a value
 * nb-select – bubble when select in suggest popup
 * nb-keypress-enter – bubble when input keypressed

### Methods

suggest — nb block

```

/**
* Get selected item from suggest
* @return {Object}
*/
suggest.getSelected();

/**
* Sets option to the jUI widget
* http://api.jqueryui.com/autocomplete/#method-option
* @param  {Object.<string, number>} option — {
*      name: value —  имя и значение опцииопции
* }
* @fires 'nb-option-set'
* @returns {Object} nb.block
*/
suggest.setOption({autoFocus: true});


/**
* Gets option of the jUI widget
* http://api.jqueryui.com/autocomplete/#method-option
* @param {String} option
* @returns {String} option value
*/
suggest.getOption();

/*
* Set new items for suggest
* @params {Array} source New source
* @fires 'nb-source-changed'
* @returns {Object} nb.block
*/
suggest.setSource(['var1', 'var2', 'var3']);

/*
* Get items from suggest
* @returns {Array} source
*/
suggest.getSource();

/**
* Скрывает список предложений
* @fires 'nb-closed'
* @returns {Object} nb.block
*/
suggest.close();

/**
* Disables the suggest
* @fires 'nb-disabled'
* @returns {Object} nb.block
*/
suggest.disable();

/**
* Enables the suggest
* @fires 'nb-enabled'
* @returns {Object} nb.block
*/
suggest.enable();

/**
* Return state of the suggest
* @returns {Boolean}
*/
suggest.isEnabled();

/**
* Focus the suggest
* @fires 'nb-focused'
* @returns {Object} nb.block
*/
suggest.focus();

/**
* Get name of the suggest
* @returns {String|Object} name
*/
suggest.getName();

/**
* Set name of the suggest
* @param {string} name
* @fires 'nb-name-set'
* @returns {Object} nb.block
*/
suggest.setName('name');

/**
* Blur the suggest
* @fires 'nb-blured'
* @returns {Object} nb.block
*/
suggest.blur();

/**
* Get current value of the suggest
* @returns {String | Number}
*/
suggest.getValue();

/**
* Get current value of the suggest
* @param {String} value
* @fires 'nb-value-set'
* @returns {Object} nb.block
*/
suggest.setValue('New value');

/**
* Search value in the source array and open suggest popup
* @param  {string | number} value
* @returns {Object} nb.block
*/
suggest.search('Va');

/**
* Destroy the suggest
* @fires 'nb-destroyed'
*/
suggest.destroy()


```
