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
* `'ghost'` {boolean} — ghost mode input
* `'disabled'` {boolean}
* `'size'` {string}  - input size. `'s'` (no other sizes supported)
* `'error'` {object} `{content: 'error content', direction: 'right|left'}`
* `'leftContent'` {string|xml} — content of the left field of input
* `'rightContent'` {string|xml} — content of the right field of input
* `'hint'` {string | Object} — content of hint or `{ text: '...', ghost: true() }` for ghost hint

### Examples

```
    nb-input({
        'size': 's'
        'hint': 'Введите пароль'
        'attrs': {
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
 * Show inputs error
 * @param {Object | String} params —  optional params of error popup or contentof Error
 *    {
 *        autoclose: ...
 *        where: ...
 *        how: ...
 *        appendTo: ...
 *        content: ...
 *    }
 * @returns {Object} nb.block
 */
input.showError()

/**
 * Hide inputs error
 * @returns {Object} nb.block
 */
input.hideError()

/**
 * Set content of inputs error
 * @param {string} content - content for error
 * @fires 'nb-error-content-set'
 * @returns {Object} nb.block
 */
input.setErrorContent();

/**
* Focus the input
* @fires 'nb-focused'
* @returns {Object} nb.block
*/
input.focus();

/**
* Blur the input
* @fires 'nb-blured'
* @returns {Object} nb.block
*/
input.blur();

/**
* Disables the input
* @fires 'nb-disabled'
* @returns {Object} nb.block
*/
input.disable();

/**
* Enables the input
* @fires 'nb-enabled'
* @returns {Object} nb.block
*/
input.enable();

/**
* Set value of the input
* @param {String|Object} value
* @fires 'nb-value-set'
* @returns {Object} nb.block
*/
input.setValue('value');

/**
* Set name of the input
* @param {String|Object} value
* @fires 'nb-name-set', 'nb-changed'
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
 * Resets value of the input
 * @fires 'nb-value-set'
 * @returns {Object} nb.block
 */
input.reset();

/**
* Set placeholder of the input
* @param {String} value
* @fires 'nb-placeholder-set'
* @returns {Object} nb.block
*/
input.setHint('new placeholder');

/**
* Get placeholder of the input
* @returns {String} placeholder
*/
input.getHint()

/**
* Destroy the input
*/
input.destroy()

```
