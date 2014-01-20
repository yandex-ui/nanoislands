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

### Slider events

* `nb-slider_slide` — Triggered on every mouse move during slide.
    * @param {Number} value  — The current value of the slider.
* `nb-slider_slidestart` — Triggered when the user starts sliding.
    * @param {Number} value  — The current value of the slider.
* `nb-slider_slidestop` — Triggered when the user starts sliding.
    * @param {Number} value  — The current value of the slider.

### Slider methods

```

var slider = nb.block(node);

/**
 * Set specified value to slider
 * @param {Number} value
 * @fires 'nb-slider_value-set'
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
 * Destroy the slider
 * @fires 'nb-slider_destroyed'
 */
slider.destroy();

```
