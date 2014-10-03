```
    nb-paranja()
```

* `theme` — dark

### Options

* `id` {string}
* `class` {array} — additional classes
* `attrs` {object} — custom DOM attributes, e.g.: `{ 'attr2: 'value2' }`
* `theme` {string} — light / dark
* `content` {xml, string} — can be string or `xml` _xss warning!_

### Examples

```
    nb-paranja({
        'theme': 'light'
        'content': '<div>Surprise!</div>'
    })
```