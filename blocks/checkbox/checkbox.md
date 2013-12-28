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
* `'checked'` {boolean} — checked button
* `'text'` {string} — text of the label
* `'attrs'` {object} `{'attr2': 'value2'}` — custom DOM attributes for checkbox input


#### Example

Action buttom, size L with custom classes

```
    nb-checkbox({
        'type': 'radio'
        'text': 'Паук'
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
     * @fires 'nb-checkbox_checked' | 'nb-radio_checked'
     * @returns {Object} nb.block
     */
    checkbox.check();

    /**
     * Unchecking checkbox or radio
     * @fires 'nb-checkbox_unchecked' | 'nb-radio_unchecked'
     * @returns {Object} nb.block
     */
    checkbox.uncheck();

    /**
     * Return indeterminate state of the checkbox or radio
     * @returns {Boolean}
     */
    checkbox.isIndeterminate();

    /**
     * Set indeterminate state of the checkbox or radio
     * @fires 'nb-checkbox_indeterminated' | 'nb-radio_indeterminated'
     * @returns {Object} nb.block
     */
    checkbox.setIndeterminate();

    /**
     * Set determinate state of the checkbox or radio
     * @fires 'nb-checkbox_determinated' | 'nb-radio_determinated'
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
     * @fires 'nb-checkbox_enabled' | 'nb-radio_enabled'
     * @returns {Object} nb.block
     */
    checkbox.enable();

    /**
     * Disable the checkbox or radio
     * @fires 'nb-checkbox_disabled' | 'nb-radio_disabled'
     * @returns {Object} nb.block
     */
    checkbox.disable();

    /**
     * Focus the checkbox or radio
     * @fires 'nb-checkbox_focused' | 'nb-radio_focused'
     * @returns {Object} nb.block
     */
    checkbox.focus();

    /**
     * Blur the checkbox or radio
     * @fires 'nb-checkbox_blured' | 'nb-radio_blured'
     * @returns {Object} nb.block
     */
    checkbox.blur();


    /**
     * Sets label of the checkbox or radio
     * @param {String|Number} label
     * @fires 'nb-checkbox_label-set' | 'nb-radio_label-set'
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
     * @fires 'nb-checkbox_name-set' | 'nb-radio_name-set'
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
     * @fires 'nb-checkbox_value-set' | 'nb-radio_value-set'
     * @returns {Object} nb.block
     */
    checkbox.setValue()

```



