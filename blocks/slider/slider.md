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
* `'content'` {xml|string} — handle's content, can be string or `xml` _xss warning!_

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
 * @fires 'nb-value-set'
 */
slider.setValue(45);

/**
 * Set name of the fallback input
 * @param {String|Number} value
 * @fires 'nb-name-set'
 * @return {Object} nb.block
 */
slider.setName('name')

/**
 * Get name of the fallback input
 * @return {String|Boolean} name
 */
slider.getName(); // 'name'

/**
 * Return slider's value
 * @return {Number} value
 */
slider.getValue(); // -> 45

/**
 * Set disabled state
 * @fires 'nb-disabled'
 */
slider.disable();

/**
 * Reset disabled state
 * @fires 'nb-enabled'
 */
 slider.enable();

 /**
 * Destroy the slider
 * @fires 'nb-destroyed'
 */
slider.destroy();

```
