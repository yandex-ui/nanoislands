## Yate

### Default loader

    nb-loader()
    
* `size`: `m`

### Options

* `color` {string} — spinner color, black by default, `while` is the only alternate option
* `size` {string} — spinner size — s / m / l

### Examples

Small loader:

```
    nb-loader({
        'size': 's'
        'attrs': {
            'data-id': '1'
        }
    })
```

Medium loader:

```
    nb-loader({
        'attrs': {
            'data-id': '1'
        }
    })
```

White medium loader on white background:

```
    nb-loader({
        'color': 'white'
        'attrs': {
            'data-id': '1'
        }
    })
```

## JS

### Initialisation

None. Loader is a static block.

### Methods

None declared.