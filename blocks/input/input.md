# Input

HTML input element.

## Yate

```
    nb-input(options)
```

### Options

* `'id'` {string}
* `'name'` {string}
* `'attrs'` {object} - attrubutes for input node
* `'content'` {string|xml} - `value` of the input
* `'type'` {string} — `'multiline'` textarea
* `'disabled'` {boolean}
* `'size'` {string}  - input size. `'s'` (no other sizes supported)

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
    * @returns {Object} nb.block
    */
    input.focus();

    /**
    * Blur the input
    * @fires 'nb-input_blured'
    * @returns {Object} nb.block
    */
    input.blur();

    /**
    * Disables the input
    * @fires 'nb-input_disabled'
    * @returns {Object} nb.block
    */
    input.disable();

    /**
    * Enables the input
    * @fires 'nb-input_enabled'
    * @returns {Object} nb.block
    */
    input.enable();

    /**
    * Set value of the input
    * @param {String|Object} value
    * @fires 'nb-input_value-set'
    * @returns {Object} nb.block
    */
    input.setValue('value');

    /**
    * Set name of the input
    * @param {String|Object} value
    * @fires 'nb-input_name-set'
    * @returns {Object} nb.block
    */
    input.setName('value');

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

    /**
    * Destroy the input
    */
    input.destroy()

```