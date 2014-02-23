### Default checkbox

```
nb-checkbox()
```

* `size` — m
* `type` — checkbox

### Optional attributes

* `'size'` {string} `'s'` / `'m'`
* `'id'` {string}...
* `'name'` {string}...
* `'class'` {array} `['my_class1', 'my_class2']` — additional classes
* `'type'` {string} `'checkbox'` / `'radio'` / `'button'`
* `'disabled'` {boolean} — disabled button
* `'value'` {string} — value
* `'tabindex'` {string} — tabindex
* `'checked'` {string} `'normal' / 'action' (yellow) / 'dark' / 'pseudo' / 'promo' (big yellow)` — theme for button type
* `'theme'` {boolean} `'checkbox'` / `'radio'` / `'button'` — checked button
* `'content'` {string} — text (or custom html) of the label, can be string or `xml` _xss warning!_
* `'attrs'` {object} `{'attr2': 'value2'}` — custom DOM attributes for checkbox input


#### Example

Action buttom, size L with custom classes

```
    nb-checkbox({
        'type': 'radio'
        'content': 'Паук'
        'attrs': {
            'name': 'biotype'
        }
    })

```