Suggest element.

```
nb-suggest(options)
```

### Options
 * `'id'` {string}
 * `'name'` {string}
 * `'attrs'` {object} - attrubutes for suggest node
 * `'attrsInput'` {object} - attrubutes for input node
 * `'disabled'` {boolean}
 * `'source'`: {array} — source data for suggest
 * `'highlight'`: {boolean} — hightlight results or not
 * `'size'` {string}  - input size. `'s'` (no other sizes supported)
 * `'countMax'` {string}  - The number of elements in which the drop-down list appears scroll (default = 10)
 * `'classSuggest'` {string} — additional class for suggest popup
 * `'content'` {string} — initial content og suggest field


### Examples

```
nb-suggest({
     'source': [
        'Вариант 1'
        'Вариант 2'
     ]
     'highlight': true()
 })
```