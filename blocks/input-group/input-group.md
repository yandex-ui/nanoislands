## Yate

### Input group

    nb-input-group()

Renders compound group of text input field and button, ordered accordingly to `options`.

### Options

* `'disabled'` {boolean} — disable both inputs
* `'input'` {string} — options for text input field
* `'button'` {string} — options for button
* `'id'` {string}
* `'class'` {array} — additional classes

NB: For description of `button` and `input` see corresponding docs

### Examples

A button with an icon, then a text input field:

```
    nb-input-group({
        'button' : {
            'size': 's'
            'icon': 'link'
        }
        'input' : {
            'size': 's'
            'content': 'http://yadi.sk/'
        }
    })
```

A group of an input field and a button with text, disabled altogether as a whole:

```
    nb-input-group({
        'input' : {
            'size': 's'
            'attrs': {
                'placeholder': 'Speak and...'
            }
        }
        'button' : {
            'size': 's'
            'content': 'spell.'
        }
        'disabled' : true()
    })
``` 

## JS

### Initialization

Initialize nb block on DOM node:
```

    nb.block(node);

```

Initialize all nb blocks with class '_init' within DOM node

```

    nb.init(node);

```

### Input group methods

None declared.