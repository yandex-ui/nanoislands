```
    nb-slider()
```

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