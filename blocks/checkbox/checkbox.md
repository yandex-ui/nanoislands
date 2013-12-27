## Yate
### Default checkbox

    nb-checkbox()

* `size` — m
* `type` — checkbox

### Optional attributes

* `id` {string}
* `class` {array} — additional classes ['my_class1', 'my_class2']
* `size` {string} — size, `s` or `m`
* `type` {string} — type, `checkbox` or `radio`
* `disabled` {boolean} — `true()` to disable button
* `checked` {boolean} — `true()` for checked button
* `text` {string} — text of the label
* `attrs` {object} — — custom DOM attributes for checkbox input, e.g. `{ 'attr2: 'value2' }`


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
     * @returns {nb.block}
     */
    checkbox.check();

    /**
     * Unchecking checkbox or radio
     * @fires 'nb-checkbox_unchecked' | 'nb-radio_unchecked'
     * @returns {nb.block}
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
     * @returns {nb.block}
     */
    checkbox.setIndeterminate();

    /**
     * Set determinate state of the checkbox or radio
     * @fires 'nb-checkbox_determinated' | 'nb-radio_determinated'
     * @returns {nb.block}
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
     * @returns {nb.block}
     */
    checkbox.enable();

    /**
     * Disable the checkbox or radio
     * @fires 'nb-checkbox_disabled' | 'nb-radio_disabled'
     * @returns {nb.block}
     */
    checkbox.disable();

    /**
     * Focus the checkbox or radio
     * @fires 'nb-checkbox_focused' | 'nb-radio_focused'
     * @returns {nb.block}
     */
    checkbox.focus();

    /**
     * Blur the checkbox or radio
     * @fires 'nb-checkbox_blured' | 'nb-radio_blured'
     * @returns {nb.block}
     */
    checkbox.blur();

    /**
     * Sets label of the checkbox or radio
     * @param {String|Number} label
     * @fires 'nb-checkbox_label-setted' | 'nb-radio_label-setted'
     * @returns {nb.block}
     */
    checkbox.setLabel('New label');

    /**
     * Gets label of the checkbox or radio
     * @returns {String | Number}
     */
    checkbox.getLabel();

    /**
     * Get name of the checkbox or radio
     * @returns {String|Object} name
     */
    checkbox.getName();

```



