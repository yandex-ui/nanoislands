## Yate
### Default select

    nb-select()

* size: m
* theme: normal
* direction: bottom

### Optional attributes
* `'size'` {string} `m / s`
* `'theme'` {string} `normal / action (yellow) / dark / pseudo`
* `'id'` {string} block@id and select@name
* `'name'` {string}
* `'direction'` {string} bottom / top — open default direction
* `'class'` {array} `['my_class1', 'my_class2']`
* `'disabled'` {boolean}
* `'within'` {string} '...' - id attr of the container where listing tries to fit in (window default)
* `'items'` {array}  - each object in array could have text, value and selected fields
    * `'text'` {string} 'Карта'
    * `'value'` {string} 'option1'
    * `'selected'` {boolean}

#### Example

```
nb-select( {
  'size': 's'
  'id': 'select1'
  'class': 'my-sp-class'
  'attrs': {
        'name': 'my-name'
   }
  'theme': 'dark'
  'items': [
      {
          'text': 'Карта'
          'value': 'option1'
          'selected': 'true'
      }
      {
          'text': 'Спутник'
          'value': 'option2'
      }
      {
          'text': 'Гибрид'
          'value': 'option3'
      }
  ]
})
```

## JS

### Select methods

```

var select = nb.block(node);

/**
 * Changes a value of control, text on the button and select value it the fallback
 *
 * @param name — event id that caused the change
 * @param params — {
     *     text: '..'
     *     value: '..'
     * }
 * @fires 'nb-select_changed'
 */
select.setState({
    text: 'Hello, world!',
    value: 'option1'
});

/**
 * Returns state of the select
 *
 * @return {Object} -
     * {
     *     value: '..'
     *     text: '..'
     * }
 */
select.getState();

/**
 * Disables the select
 * @fires 'nb-select_disabled'
 * @returns {Object} nb.block
 */
select.disable()

/**
 * Enables the select
 * @fires 'nb-select_enabled'
 * @returns {Object} nb.block
 */
select.enable();

/**
 * Return state of the select
 * @returns {Boolean}
 */
select.isEnabled()

/**
 * Focus the select
 * @fires 'nb-select_focused'
 * @returns {Object} nb.block
 */
select.focus()

/**
 * Blur the select
 * @fires 'nb-select_blured'
 * @returns {Object} nb.block
 */
select.blur()

/**
 * Destroy the select
 * @fires 'nb-select_destroyed'
 */
select.destroy()


```
