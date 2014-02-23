```
    nb-input(options)
```

### Options

* `'id'` {string}
* `'name'` {string}
* `'attrs'` {object} - attrubutes for input node
* `'content'` {string|xml} - `value` of the input
* `'type'` {string} — `'multiline'` textarea
* `'ghost'` {boolean} — ghost mode input
* `'disabled'` {boolean}
* `'size'` {string}  - input size. `'s'` (no other sizes supported)
* `'error'` {object} `{content: 'error content', direction: 'right|left'}`
* `'leftContent'` {string|xml} — content of the left field of input
* `'rightContent'` {string|xml} — content of the right field of input
* `'hint'` {string | Object} — content of hint or `{ text: '...', ghost: true() }` for ghost hint

### Examples

```
    nb-input({
        'size': 's'
        'hint': 'Введите пароль'
        'attrs': {
            'type': 'password'
        }
    })
```