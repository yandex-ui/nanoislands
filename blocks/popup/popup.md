### Popup
There are 2 parts of popup control:
— toggler
— popup

#### Options for popup toggler


<a id="popup-toggler" class="nb link link_wrapper link_pseudo" data-nb="popup-toggler" data-nb-popup-toggler="{id: 'popup1'}" href="#default">
    <span class="link__inner">Default Toggler</span>
</a>

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
    animation: true
}
```

#### Example of generic popup menu

<div>
    <a class="link" data-nb="popup-toggler" data-nb-popup-toggler="{id: 'popup1'}" href="#default">
        <span class="link__inner">
            "Default"
        </span>
    </a>
    <a class="link" data-nb="popup-toggler" data-nb-popup-toggler="{id: 'popup1', how: { at: 'right', my: 'left'}}" href="#left">
        <span class="link__inner">
            "To left"
        </span>
    </a>
    <a class="link" data-nb="popup-toggler" data-nb-popup-toggler="{id: 'popup1', how: { at: 'left', my: 'right'}}" href="#right">
        <span class="link__inner">
            "To right"
        </span>
    </a>
    <a class="link" data-nb="popup-toggler" data-nb-popup-toggler="{id: 'popup1', how: { at: 'top', my: 'bottom'}}" href="#right">
        <span class="link__inner">
            "To top"
        </span>
    </a>
</div>

> <div example="popup1"/>
> 
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

<div>
    <a data-nb="popup-toggler" data-nb-popup-toggler="{id: 'genericPopup'}" href="#right">
        <span class="link__inner">
            "generic popup"
        </span>
    </a>
</div>

<div>
    <a data-nb="popup-toggler" data-nb-popup-toggler="{id: 'genericPopup', how: { animation: false}}" href="#right">
        <span class="link__inner">
            "generic popup without animation"
        </span>
    </a>
</div>

> <div example="genericPopup"/>
>
>```yate
>    nb-popup({
>        'id': 'genericPopup'
>        'title': 'Hello, I’m your generic pop-up.'
>        'content': '<p>And welcome to nanoislands</p>'
>    })
>```

<div>
    <a data-nb="popup-toggler" data-nb-popup-toggler="{id: 'genericPopup2'}" href="#default">
        <span class="link__inner">
            "generic popup  with close"
        </span>
    </a>
</div>

> <div example="genericPopup2"/>
>
>```yate
>    nb-popup({
>        'id': 'genericPopup2'
>        'close': true()
>        'title': 'Hello, I’m your generic pop-up.'
>        'content': '<p>And welcome to nanoislands</p>'
>    })
>```

### Default menu popup
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

<div>
    <a data-nb="popup-toggler" data-nb-popup-toggler="{id: 'popup1'}" href="#default">
        <span class="link__inner">
            "Popup menu"
        </span>
    </a>
</div>

>```yate
>    nb-popup-menu({
>        'id': 'popupMenu'
>        'menu': [
>            {
>                'href': '#'
>                'content': 'Скопировать'
>            }
>            {
>                'href': '#'
>                'content': 'Переместить'
>            }
>            {
>                'href': '#'
>                'content': 'Удалить'
>            }
>        ]
>    })
>```

### Modal popup

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

<div>
    <a data-nb="popup-toggler" data-nb-popup-toggler="{id: 'modal-popup1'}" href="#modal">
        <span class="link__inner">
            "Modal popup"
        </span>
    </a>
</div>

> <div example="popup-modal1"/>
>
>```yate
>    nb-popup-modal({
>       'id': 'popup-modal1'
>       'title': 'Some modal popup'
>       'content': 'Some text for that popup'
>       'data-nb': {
>            'width': '300px'
>       }
>       'close': {
>            'class': 'ns-action'
>            'attrs': {
>                'data-params': '123'
>            }
>       }
>       'buttons': {
>            'class': 'ns-subliew-buttons'
>            'data': [
>            {
>               'content': 'Отправить'
>               'size': 'm'
>               'theme': 'action'
>               'class': 'nb-popup__button'
>            }
>            {
>               'content': 'Сохранить'
>               'size': 'm'
>               'class': 'nb-popup__button'
>            }
>        ]}
>
>   })
>```
## JSDOC
