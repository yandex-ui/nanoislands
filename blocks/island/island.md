## Yate

### Default island

    nb-island()

Default options: none.

### Options

* padding: s / m / l
* type: inline / fly
* content: {} — island's content.

### Examples

Basic island:

```
    nb-island({
        'content': 'Остров миу-миу'
    })
```

Flying island with an M-sized padding:

```
    nb-island({
        'content': 'Летающий остров'
        'type': 'fly'
        'padding': 'm'
    })
```

Inline island with an L-sized padding:

```
    nb-island({
        'content': 'Остров с паддингами и инлайном'
        'padding': 'l'
        'type':  'inline'
    })
```

## JS

### Initialisation

None. Island is a static block.

### Methods

None declared