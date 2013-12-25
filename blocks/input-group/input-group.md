## Yate

### Input group

    nb-input-group()

Accepts hash containing options for button and input field (in any order), outputs them accordingly.

### Optional attributes

* disabled: true() — disabled inputs

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

### Initialisation

/!\ TODO

### Group methods

/!\ TODO