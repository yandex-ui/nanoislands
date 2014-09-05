### Default checkbox

> <div example="checkbox-default" />
>
> ```yate
>     nb-checkbox()
> ```

* `size` — m
* `type` — checkbox

### Optional attributes

* `'size'` {string} `'s'` / `'m'`
* `'id'` {string}...
* `'name'` {string}...
* `'class'` {array} `['my_class1', 'my_class2']` — additional classes
* `'type'` {string} `'checkbox'` / `'radio'` / `'button'`
* `'disabled'` {boolean} — disabled button
* `'value'` {string} — value
* `'tabindex'` {string} — tabindex
* `'checked'` {boolean} — checked button
* `'theme'` {string} `'normal' / 'action' (yellow) / 'dark' / 'pseudo' / 'promo' (big yellow)` — theme for button type
* `'content'` {string} — text (or custom html) of the label, can be string or `xml` _xss warning!_
* `'attrs'` {object} `{'attr2': 'value2'}` — custom DOM attributes for checkbox input


#### Yate Example

#### checked

> <div example="checkbox-checked" />
>
> ```yate
>     nb-checkbox({
>         'checked': true()
>     })
> ```

#### checkbox with label

> <div example="checkbox-label" />
>
> ```yate
>     nb-checkbox({
>         'content': 'Do you want to be an icon for the disfranchised masses?'
>         'name': 'is_rock_star'
>     })
> ```

#### Sizes

> <div example="checkbox-sizes" />
>
> ```yate
>     nb-checkbox({
>         'size': 'm'
>     })
>     ' '
>     nb-checkbox({
>         'size': 's'
>     })
> ```

#### Types

Button type of checkbox

> <div example="checkbox-button" />
>
>```yate
>    nb-checkbox({
>        'type': 'button'
>        'content': 'Greet the world?'
>    })
>```

#### Disabled

> <div example="checkbox-disable-label" />
>
> ```yate
>     nb-checkbox({
>         'content': 'Bet you can`t check me!'
>         'disabled': true()
>     })
> ```

> <div example="checkbox-disable-button" />
>
> ```yate
>     nb-checkbox({
>         'type': 'button'
>         'content': 'I`m sorry, but you can`t do it anymore'
>         'disabled': true()
>     })
> ```