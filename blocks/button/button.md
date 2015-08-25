### Default button

> <div example="button-default">
> </div>
>
> ```yate
> nb-button({
>     'content': 'Button'
> })
> ```

* `size: m`
* `theme: normal`

### Optional attributes

* `'size'` {string} `'s' / 'm' / 'l'`
* `'theme'` {string} `'normal' / 'action' (yellow) / 'dark' / 'pseudo' / 'pseudo-inverted' / 'promo' (big yellow)`
* `'id'` {string} ...
* `'name'` {string} ...
* `'class'` {array} `['my_class1', 'my_class2']` — additional classes
* `'disabled'` {boolean} — disabled button
* `'tabindex'` {string}
* `'icon'` {string} ... — link to icon
* `'iconText'` {string} ... — symbol for icon
* `'content'` {string} ... — content of button
* `'attrs'` {object} `{'type': 'submit', 'attr2: 'value2' }` — custom DOM attributes for button
* `'static'` {boolean} — block without nanoblocks functionality (JavaScript API)
* `'type'` {string}
  * `'file'` — attach button. This is not DOM type aka `<input type=""/>`, this is instance type.
  * `'link'` — `<a>`
  * `'label'` - `<label>`
  * `'inline'` - `<span>`

### Yate examples

#### Types
`'type': 'link'  'label'  'inline'  'file'`

> <div example="buttons-type">
> </div>
>
> ```yate
> nb-button({
>     'content': 'Link button'
>     'type': 'link'
>     'attrs': {
>         'href': '#'
>     }
> })
> ' '
> nb-button({
>     'content': 'Label button'
>     'type': 'label'
>     'attrs': {
>         'for': 'blah'
>     }
> })
> ' '
> nb-button({
>     'content': 'Span button'
>     'type': 'inline'
> })
> ' '
> nb-button({
>      'content': 'Attach file'
>      'type': 'file'
> })
> ```

#### Size
> <div example="buttons-size" >
> </div>
>
> ```yate
> nb-button({
>     'content': 'Small'
>     'size': 's'
> })
> ' '
> nb-button({
>    'content': 'Medium'
> })
> ' '
> nb-button({
>    'theme': 'promo'
>    'content': 'Large'
> })
> ' '
> nb-button({
>    'theme': 'promo'
>    'size': 'xl'
>    'content': 'Extra large'
> })
> ```


#### Themes
`'theme': 'action'  'pseudo'  'dark'  'promo' 'flying'`
> <div example="buttons-theme" >
> </div>
>
> ```yate
> nb-button({
>     'content': 'Action'
>     'theme': 'action'
> })
> ' '
> nb-button({
>     'content': 'Pseudo'
>     'theme': 'pseudo'
> })
> ' '
> nb-button({
>     'content': 'Dark'
>     'theme': 'dark'
> })
>
> ' '
> nb-button({
>     'content': 'Promo'
>     'theme': 'promo'
> })
>
> ' '
> nb-button({
>     'content': 'Flying'
>     'theme': 'flying'
> })
> ```

#### Icons
> <div example="buttons-icon" >
> </div>
>
> ```yate
> nb-button({
>     'icon': 'eye'
> })
>
> ' '
> nb-button({
>     'iconText': '▼'
> })
>
> ' '
> nb-button({
>       'icon': 'link'
>       'content': 'Открыть'
> })
> ```

#### Disabled
> <div example="button-disabled" >
> </div>
>
> ```yate
> nb-button({
>   'disabled': true()
>   'content': 'Disabled'
> }
> ```

