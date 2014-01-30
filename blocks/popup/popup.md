## Yate

### Default generic popup

```
    nb-popup()
```

### Options for generic popup

* `id` {string}
* `class` {array} — additional classes
* `attrs` {object} — custom DOM attributes, e.g.: `{ 'attr2: 'value2', 'attr2: 'value2' }`
* `tail` {string} — position of 'tail' widget — left|right|top|bottom
* `titleContent` {xml|string} —  modal's title, can be string or `xml` _xss warning!_
* `content` {xml|string} — modal's content, can be string or `xml` _xss warning!_

### Example of generic popup

```
    nb-popup({
        'id': 'genericPopup'
        'tail': 'top'
        'title': 'Hello, I'm your generic pop-up.'
        'content': '<p>And welcome to nanoislands</p>'
    })
```

### Default menu popup

```
    nb-popup-menu()
```

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

```

## JS

### Initialisation

Initialize nb block on DOM node:
```

    nb.block(node);

```

Initialize all nb blocks with class '_init' within DOM node

```

    nb.init(node);

```

### Methods

`popup` — `popup`, `popup-modal` or `popup-menu`

```

    /*
    * Displays popup element.
    * @fires 'nb-showed'
    */
    popup.open();

    /*
    * Hides popup element.
    * @fires 'nb-hidden'
    */
    popup.close();

``` 


