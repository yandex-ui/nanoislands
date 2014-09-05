### Default input

> <div example="input-simple"/>
>
> ```yate
> nb-input({
>   'content': 'hello, world!',
>   'name': 'greetings'
> })
> ```
>

* size: 's'

### Options

* `'id'` {string}
* `'name'` {string}
* `'attrs'` {object} - attrubutes for input node
* `'content'` {string|xml} - `value` of the input
* `'type'` {string} — `'multiline'` textarea
* `'ghost'` {boolean} — ghost mode input
* `'disabled'` {boolean}
* `'reset'` {boolean} — reset control in input
* `'tabindex'` {string} — tabindex
* `'size'` {string}  - input size. `'s'` (no other sizes supported)
* `'error'` {object} `{content: 'error content', direction: 'right|left'}`
* `'leftContent'` {string|xml} — content of the left field of input
* `'rightContent'` {string|xml} — content of the right field of input
* `'hint'` {string | Object} — content of hint or `{ text: '...', ghost: true() }` for ghost hint

### Yate examples

### Types

> <div example="input-simple-left-content"/>
>
> ```yate
> nb-input({
>     'leftContent': 'hello, world!'
>     'name': 'greetings'
> })
> ```

> <div example="input-simple-right-content"/>
>
> ```yate
> nb-input({
>     'rightContent': 'hello, world!'
>     'name': 'greetings'
> })
> ```

> <div example="input-simple-reset"/>
>
> ```yate
> nb-input({
>     'reset': true()
>     'content': 'hello, world!'
>     'name': 'greetings'
> })
> ```

> <div example="input-simple-hint"/>
>
> ```yate
> nb-input({
>     'name': 'greetings'
>     'hint': 'Can you greet the world?'
> })
> ```

> <div example="input-simple-hint-ghost"/>
>
> ```yate
> nb-input({
>     'name': 'greetings'
>     'hint': {
>          'text': 'Can you greet the world?'
>          'ghost': true()
>     }
> })
> ```

> <div example="input-simple-error"/>
>
> ```yate
> nb-input({
>     'name': 'greetings'
>     'error': {
>          'content': 'Ooops... It`s a wrong way'
>     }
> })
> ```

> <div example="input-multiline"/>
>
> ```yate
> nb-input({
>     'content': 'hello, world!'
>     'name': 'greetings'
>     'type': 'multiline'
> })
> ```

> <div example="input-multiline-rightContent"/>
>
> ```yate
> nb-input({
>     'rightContent': 'hello, world!'
>     'name': 'greetings'
>     'type': 'multiline'
> })
> ```

### Sizes

> <div example="input-size-s"/>
>
> ```yate
> nb-input({
>     'size': 's'
>     'content': 'hello, world!'
>     'name': 'greetings'
> })
> ```

> <div example="input-size-m"/>
>
> ```yate
> nb-input({
>     'size': 'm'
>     'content': 'hello, world!'
>     'name': 'greetings'
> })
> ```

### Disabled

> <div example="input-simple-disabled"/>
>
> ```yate
> nb-input({
>     'content': 'hello, world!'
>     'name': 'greetings'
>     'disabled': true()
> })
> ```

> <div example="input-multiline-disabled"/>
>
> ```yate
> nb-input({
>     'content': 'hello, world!'
>     'name': 'greetings'
>     'type': 'multiline'
>     'disabled': true()
> })
> ```