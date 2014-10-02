```
    nb-input-group()
```

Renders compound group of text input field and button, ordered accordingly to `options`.

### Options

* `id` {string}
* `class` {array} — additional classes
* `disabled` {boolean} — disable both inputs
* `input` {string} — options for text input field
* `button` {string} — options for button

NB: For description of `button` and `input` see corresponding docs

### Examples

A button with an icon, then a text input field:

> <div example="input-group1"/>
>
> ```yate
> nb-input-group({
>    'button' : {
>        'size': 's'
>        'icon': 'link'
>    }
>    'input' : {
>        'size': 's'
>        'content': 'http://yadi.sk/'
>    }
> })
> ```

A group of an input field and a button with text, disabled altogether as a whole:

> <div example="input-group"/>
>
> ```yate
> nb-input-group({
>    'input' : {
>        'size': 's'
>        'attrs': {
>            'placeholder': 'Ticket number'
>        }
>    }
>    'button' : {
>        'size': 's'
>        'content': 'check'
>        'disabled': true()
>    }
> })
> ```