## Yate
### Default select

    nb-select()

* size: m
* theme: normal
* direction: bottom

### Optional attributes
* size: m / s
* theme: normal / action (yellow) / dark / pseudo
* id: ...
* direction: bottom / top — open default direction
* class: ['my_class1', 'my_class2']
* disabled: true()
* within: '...' - id attr of the container where listing tries to fit in (window default)
* items: [ {...}, {...}, ... ] - each object in array could have text, value and selected fields
    * text: 'Карта'
    * value: 'option1'
    * selected: 'true'

#### Example

```
nb-select( {
  'size': 's'
  'id': 'select1'
  'class': 'my-sp-class'
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
 * @returns {nb.block}
 */
select.disable()

/**
 * Enables the select
 * @fires 'nb-select_enabled'
 * @returns {nb.block}
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
 * @returns {nb.block}
 */
select.focus()

/**
 * Blur the select
 * @fires 'nb-select_blured'
 * @returns {nb.block}
 */
select.blur()

/**
 * Destroy the select
 * @fires 'nb-select_destroyed'
 */
select.destroy()


```