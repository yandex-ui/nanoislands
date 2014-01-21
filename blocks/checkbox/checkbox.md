## Yate
### Default checkbox

    nb-checkbox()

* `size` — m
* `type` — checkbox

### Optional attributes

* `'size'` {string} `'s'` / `'m'`
* `'id'` {string}...
* `'name'` {string}...
* `'class'` {array} `['my_class1', 'my_class2']` — additional classes
* `'type'` {string} `'checkbox'` / `'radio'`
* `'disabled'` {boolean} — disabled button
* `'value'` {string} — value
* `'tabindex'` {string} — tabindex
* `'checked'` {boolean} — checked button
* `'content'` {string} — text (or custom html) of the label, can be string or `xml` _xss warning!_
* `'attrs'` {object} `{'attr2': 'value2'}` — custom DOM attributes for checkbox input


#### Example

Action buttom, size L with custom classes

```
    nb-checkbox({
        'type': 'radio'
        'content': 'Паук'
        'attrs': {
            'name': 'biotype'
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

### Checkbox methods

checkbox — nb block

```

    /**
     * Return check state of the checkbox or radio
     * @returns {Boolean}
     */
    checkbox.isChecked();

    /**
     * Checking checkbox or radio
     * @fires 'nb-checked', 'nb-changed'
     * @returns {Object} nb.block
     */
    checkbox.check();

    /**
     * Unchecking checkbox or radio
     * @fires 'nb-unchecked', 'nb-changed'
     * @returns {Object} nb.block
     */
    checkbox.uncheck();

    /**
     * Toggle to the opposite state checkbox or radio
     * @fires 'nb-changed'
     * @return {Object} nb.block
     */
    checkbox.toggle();

    /**
     * Return indeterminate state of the checkbox or radio
     * @returns {Boolean}
     */
    checkbox.isIndeterminate();

    /**
     * Set indeterminate state of the checkbox or radio
     * @fires 'nb-indeterminated'
     * @returns {Object} nb.block
     */
    checkbox.setIndeterminate();

    /**
     * Set determinate state of the checkbox or radio
     * @fires 'nb-determinated'
     * @returns {Object} nb.block
     */
    checkbox.setDeterminate();

    /**
     * Return enable state of the checkbox or radio
     * @returns {Boolean}
     */
    checkbox.isEnabled();

    /**
     * Enable the checkbox or radio
     * @fires 'nb-enabled'
     * @returns {Object} nb.block
     */
    checkbox.enable();

    /**
     * Disable the checkbox or radio
     * @fires 'nb-disabled'
     * @returns {Object} nb.block
     */
    checkbox.disable();

    /**
     * Focus the checkbox or radio
     * @fires 'nb-focused'
     * @returns {Object} nb.block
     */
    checkbox.focus();

    /**
     * Blur the checkbox or radio
     * @fires 'nb-blured'
     * @returns {Object} nb.block
     */
    checkbox.blur();


    /**
     * Sets label of the checkbox or radio
     * @param {String|Number} label
     * @fires 'nb-label-set'
     * @returns {Object} nb.block
     */
    checkbox.setLabel()

    /**
     * Gets label of the checkbox or radio
     * @returns {String | Number}
     */
    checkbox.getLabel()

    /**
     * Get name of the checkbox or radio
     * @returns {String|Object} name
     */
    checkbox.getName()

    /**
     * Set checkbox value
     * @param {String|Number} value
     * @fires 'nb-name-set'
     * @returns {Object} nb.block
     */
    checkbox.setName()

    /**
     * Returns checkbox value
     * @returns {String}
     */

    checkbox.getValue()

    /**
     * Set checkbox value
     * @param {String|Number} value
     * @fires 'nb-value-set'
     * @returns {Object} nb.block
     */
    checkbox.setValue()

     /**
     * Destroy checkbox
     * @fires 'nb-destroyed'
     */
     checkbox.destroy()

```



