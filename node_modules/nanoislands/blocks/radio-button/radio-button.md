## Yate

### Radio button

* Horizontal compound block
* consists of several buttons
* behaves like a group of radio-buttons

NB: To get a group of actial _radiobuttons_ (like those you can get using vanilla HTML) use `checkbox` with corresponding options.

### Basic usage example:

(See `demo/index.html`.)

```
    nb-radio-button({
        'name': 'btn'
        'group':  [
            {
                'content': 'Foo'
                'value': 'btn1'
            }
            {
                'content': 'Bar'
                'value': 'btn3'
            }
            {
                'content': 'Baz'
                'value': 'btn4'
            }
            {
                'content': 'Quux'
                'value': 'btn2'
            }
        ]
    })
```

Default options:

* size: m
* theme: normal

### Options
* `'id'` {string}
* `'size'` {string} `s / m / l`
* `'theme'` {string} `normal / action (yellow) / dark / pseudo / promo (big yellow)`
* `'class'` {array}  — additional classes for radio-button
* `'group'` {array} — array of hashes, each hash describes a button:
    * `'content'` {string} ... — string of button's content
    * `'value'` {string}... — corresponding value
    * `'name'` {string} ... — name for radio-button
    * `'icon'` {string} ... — icon name
    * `'checked'` {boolean} — checked element of radio-group
    * `'disabled'` {boolean}  — for disabled element

### Initialization

Initialize nb block on DOM node:
```

    nb.block(node);

```

Initialize all nb blocks with class '_init' within DOM node
```

    nb.init(node);

```

### Radiobutton methods

None declared. Element is rendered as static.