### Popup
There are 2 parts of popup control:
— toggler
— popup

#### Options for popup toggler


<a id="popup-toggler" class="nb link link_wrapper link_pseudo" data-nb="popup-toggler" data-nb-popup-toggler="{id: 'popup1'}" href="#default">
    <span class="link__inner">
        "Default Toggler"
    </span>
</a>
>```html
> <a id="popup-toggler" class="nb link link_wrapper link_pseudo" data-nb="popup-toggler" data-nb-popup-toggler="{id: 'popup1'}" href="#default">
>    <span class="link__inner">
>        "Default Toggler"
>    </span>
> </a>
>```

* `id` {string} — id of connecte popup
* `appendTo` {string} —  selector where append to
* `how` {object} – http://api.jqueryui.com/position/
```
{
    at: '..',
    my: '..',
    collision: '..',
    using: '..',
    within '..',
    autoclose: true
}
```

#### Example of generic popup menu
<a data-nb="popup-toggler" data-nb-popup-toggler="{id: 'popup1'}" href="#default">
    <span class="link__inner">
        "Default Toggler"
    </span>
</a>

<a data-nb="popup-toggler" data-nb-popup-toggler="{id: 'popup1', how: { at: 'right', my: 'left'}}" href="#right">
    <span class="link__inner">
        "To left"
    </span>
</a>

<a data-nb="popup-toggler" data-nb-popup-toggler="{id: 'popup1', how: { at: 'left', my: 'right'}}" href="#right">
    <span class="link__inner">
        "To left"
    </span>
</a>
<div example="popup1"/>
> ```yate
> nb-popup-menu({
>     'id': 'popup1'
>     'menu': [
>         {
>              'attrs': {
>                   'daria-action': 'someCoolActon'
>              }
>              'class': [
>                   'someCoolClass'
>              ]
>              'href': '#'
>              'content': 'Скопировать'
>         }
>         {
>             'href': '#'
>             'content': 'Переместить'
>         }
>         {
>             'separator': true()
>         }
>         {
>             'href': '#'
>             'content': 'Удалить'
>         }
>     ]
> })
> ```

### Options for menu popup

* `id` {string}
* `class` {array} — additional classes
* `attrs` {object} — custom DOM attributes
* `tail` {string} — position of 'tail' widget — left|right|top|bottom
* `static` {boolean} — `true()` to prevent initialisation
* `menu` {array} — array of objects:
    * Object for menu element:
        * `href` {string}
        * `text` {string}
        * `attrs` {object} — custom DOM attributes
        * `class` {array} — additional classes
        * `id` {string}
    * Object for separator:
        * `separator` {boolean} — `true()` to render separator

* `size: m`
* `theme: normal`

```
    nb-popup()
```

### Options for generic popup

* `id` {string}
* `class` {array} — additional classes
* `theme` {string}
  * `blank` — popup without styles
  * `island` — islands styles
* `attrs` {object} — custom DOM attributes, e.g.: `{ 'attr2: 'value2', 'attr2: 'value2' }`
* `titleContent` {xml|string} —  modal's title, can be string or `xml` _xss warning!_
* `content` {xml|string} — modal's content, can be string or `xml` _xss warning!_
* `close`{object|boolean} — with default cloase with `true()` or custom object:
  * `class` {array} — custom classes for close
  * `attrs` {object} — custom attrs for close

### Example of generic popup

```
    nb-popup({
        'id': 'genericPopup'
        'tail': 'top'
        'title': 'Hello, I’m your generic pop-up.'
        'content': '<p>And welcome to nanoislands</p>'
    })
```

### Default menu popup

```
    nb-popup-menu()
```

* `id` {string}
* `class` {array} — additional classes
* `attrs` {object} — custom DOM attributes
* `withoutTail` {boolean}  
* `static` {boolean} — `true()` to prevent initialisation
* `menu` {array} — array of objects:
    * Object for menu element:
        * `href` {string}
        * `text` {string}
        * `attrs` {object} — custom DOM attributes
        * `class` {array} — additional classes
        * `id` {string}
    * Object for separator:
        * `separator` {boolean} — `true()` to render separator

### Menu popup example

```
    nb-popup-menu({
        'id': 'popupMenu'
        'tail': 'left'
        'menu': [
            {
                'href': '#'
                'content': 'Скопировать'
            }
            {
                'href': '#'
                'content': 'Переместить'
            }
            {
                'href': '#'
                'content': 'Удалить'
            }
        ]
    })
```

### Default modal popup

```
    nb-popup-modal()
```

* `data-nb` {object}
    * `modal`: `true()`
    * `width`: `auto`
    * `height`: `auto`
    * `minHeight`: `auto`

### Options for modal popup

* `id` {string}
* `class` {array} — additional classes
* `attrs` {object} — custom DOM attributes
* `titleContent` {xml|string} — modal's title, can be string or `xml` _xss warning!_
* `content` {xml|string} — modal's content, can be string or `xml` _xss warning!_
* `buttons` {xml|array} — popup's buttons:
* `close` {nodeset} — popup's close button:
    * `attrs` {object} — custom DOM attributes for close button
* `data-nb` {object} — popup display paramenters, renteded as `data-nb-*` attributes
    * `modal` {boolean}
    * `width` {string}
    * `height` {string}
    * `minHeight` {string}

### Modal popup example:

```
    nb-popup-modal({
       'id': 'modalPopup'
       'title': 'Some modal popup'
       'content': 'Some text for that popup'
       'data-nb': {
            'width': '300px'
       }
       'close': {
            'class': 'ns-action'
            'attrs': {
                'data-params': '123'
            }
       }
       'buttons': {
            'class': 'ns-subliew-buttons'
            'data': [
            {
               'content': 'Отправить'
               'size': 'm'
               'theme': 'action'
               'class': 'nb-popup__button'
            }
            {
               'content': 'Сохранить'
               'size': 'm'
               'class': 'nb-popup__button'
            }
        ]}

   })



## JSDOC
