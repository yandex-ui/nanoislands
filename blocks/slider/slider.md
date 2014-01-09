## Yate
### Default slider

    nb-slider()

* size: s
* value: 0
* orientation: horiz
* type: range

### Optional attributes
* `'size'` {string} `m / s`
* `'value'` {number}
* `'id'` {string} block@id
* `'class'` {array} `['my_class1', 'my_class2']`
* `'disabled'` {boolean}

#### Example

```
nb-slider({
    'size': 's'
    'class': 'js-super-class'
    'value': 50
    'disabled': true()
    'id': 's1'
})
```

## JS

### Slider methods

```

var slider = nb.block(node);

/**
 * Set specified value to slider
 * @param {Number} value
 * @fires 'nb-slider_changed'
 */
slider.setValue(45);

/**
 * Return slider's value
 * @return {Number} value
 */
slider.getValue(); // -> 45

/**
 * Set disabled state
 * @fires 'nb-slider_disabled'
 */
slider.disable();

/**
 * Reset disabled state
 * @fires 'nb-slider_enabled'
 */
 slider.enable();

/**
 * Return state of the slider
 * @return {Boolean}
 */
slider.isEnabled();

```
