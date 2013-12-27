# Input

HTML input element.

## Yate

```
    nb-input(options)
```

### Options

* `id` {string}
* `class` {array} — additional classes
* `attrs` {object} — custom DOM attrubutes for input node
* `content` {string} — `value` of the input
* `disabled` {boolean}
* `size` {string} — input size, `s` only (no other sizes supported)

### Examples

```
    nb-input({
        'size': 's'
        'attrs': {
            'placeholder': 'Введите пароль'
            'type': 'password'
        }
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
### Input methods


input — nb block

```
  /**
    * Focus the input
    * @fires 'nb-input_focused'
    * @returns {nb.block}
    */
    input.focus();

    /**
    * Blur the input
    * @fires 'nb-input_blured'
    * @returns {nb.block}
    */
    input.blur();

    /**
    * Disables the input
    * @fires 'nb-input_disabled'
    * @returns {nb.block}
    */
    input.disable();

    /**
    * Enables the input
    * @fires 'nb-input_enabled'
    * @returns {nb.block}
    */
    input.enable();

    /**
    * Set value of the input
    * @param {String|Object} value
    * @fires 'nb-input_value-setted'
    * @returns {nb.block}
    */
    input.setValue('value');

    /**
    * Get value of the input
    * @returns {String|Object} value
    */
    input.getValue();

    /**
    * Get name of the input
    * @returns {String|Object} name
    */
    input.getName();

    /**
    * Return state of the input
    * @returns {Boolean}
    */
    input.isEnabled();

```