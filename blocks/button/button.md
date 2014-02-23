### Default button

```
nb-button()
```

* `size: m`
* `theme: normal`

### Optional attributes

* `'size'` {string} `'s' / 'm' / 'l'`
* `'theme'` {string} `'normal' / 'action' (yellow) / 'dark' / 'pseudo' / 'pseudo-inverted' / 'promo' (big yellow)`
* `'id'` {string} ...
* `'name'` {string} ...
* `'class'` {array} `['my_class1', 'my_class2']` — additional classes
* `'disabled'` {boolean} — disabled button
* `'tabindex'` {string}
* `'icon'` {string} ... — link to icon
* `'iconText'` {string} ... — symbol for icon
* `'content'` {string} ... — content of button
* `'attrs'` {object} `{'type': 'submit', 'attr2: 'value2' }` — custom DOM attributes for button
* `'static'` {boolean} — block without nanoblocks functionality (JavaScript API)
* `'type'` {string}
*   `'file'` — attach button. This is not DOM type aka `<input type=""/>`, this is instance type.
*   `'link'` — `<a>`
*   `'label'` - `<label>`
*   `'inline'` - `<span>`

#### Example

Action buttom, size L with custom classes

```
nb-button({
    'size': 'l'
    'theme': 'action'
    'id': 'id1'
    'class': [
        'my_class1'
        'my_class2'
    ]
    'content': 'Hello World'
    'attrs': {
        'name': 'my_name'
     }
})
```
