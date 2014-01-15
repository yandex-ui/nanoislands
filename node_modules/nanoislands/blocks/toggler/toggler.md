## Yate

### Default toggler

```
nb-toggler()
```

* leftText — On
* rightText — Off
* size — s

### Optional settings
* `'id'` {string}
* `'name'` {string}
* `'disabled'` {boolean}
* `'checked'` {boolean}
* `'leftText'` {string} 'On'
* `'rightText'` {string} 'Off'

### Example

Turned on enabled toggler with custom a titles on the sides

```
nb-toggler({
    'leftText': 'yep!'
    'rightText': 'nope :-('
    'checked': true()
})
```

## JS

### Toggler methods

```

// init component
var toggler = nb.block(node);

    /**
     * Set value of the toggler
     * @param {String} value of the check state
     * @fires 'nb-toggler_value-set'
     * @returns {Object} nb.block
     */
    toggler.setValue('value');

    /**
     * Returns value of the toggler
     * @return {String} value
     */
    toggler.getValue();

    /**
     * Toggle to the oppocite value
     * Do nothing if toggler is disabled
     * @returns {Object} nb.block
     */
    toggler.toggle();

    /**
     * Returns name of the toggler
     * @return {String} value
     */
    toggler.getName();

    /**
     * Set name of the toggler
     * @param {String} value
     * @fires 'nb-toggler_name-set'
     * @returns {Object} nb.block
     */
    toggler.setName(value);

    /**
     * Disable toggler
     * @fires 'nb-toggler_disabled'
     */
    toggler.disable()

    /**
     * Enable toggler
     * @fires 'nb-toggler_enabled'
     */
    enable()

    /**
     * Return enable state of the toggler
     * @returns {Boolean}
     */
    toggler.isEnabled()


    /**
     * Focus the input
     * @fires 'nb-toggler_focused'
     * @returns {Object} nb.block
     */
    toggler.focus();

    /**
     * Blur the input
     * @fires 'nb-toggler_blured'
     * @returns {Object} nb.block
     */
    toggler.blur();

    /**
     * Return check state of the toggler
     * @returns {Boolean}
     */
    toggler.isChecked();

    /**
     * Checking toggler
     * @fires 'nb-toggler_checked'
     * @returns {Object} nb.block
     */
    toggler.check();

    /**
     * Unchecking toggler
     * @fires 'nb-toggler_unchecked'
     * @returns {Object} nb.block
     */
    toggler.uncheck();

    /**
     * Destroy the toggler
     */
    toggler.destroy();

```

