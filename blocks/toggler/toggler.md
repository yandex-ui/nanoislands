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
 * Returns value of the checked state
 * @return {Boolean} value
 */
toggler.getValue();

/**
 * Set value of the checked state
 * @param {Boolean} value of the check state 
 * @fires 'nb-toggler_checked'
 */
toggler.setValue(true);

/**
 * Toggle to the oppocite value
 * Do nothing if toggler is disabled
 * @fires 'nb-toggler_checked'
 */
toggler.toggle();

/**
 * Disable toggler
 * @fires 'nb-toggler_disabled'
 */
toggler.disable();

/**
 * Enable toggler
 * @fires 'nb-toggler_enabled'
 */
toggler.enable();
```

