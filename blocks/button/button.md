## Yate
### Default button

    nb-button()

* size — m
* theme — normal

### Optional attributes
* `'size'` {string} `'s' / 'm' / 'l'`
* `'theme'` {string} `'normal' / 'action' (yellow) / 'dark' / 'pseudo' / 'promo' (big yellow)`
* `'id'` {string} ...
* `'name'` {string} ...
* `'class'` {array} `['my_class1', 'my_class2']` — additional classes
* `'disabled'` {boolean} — disabled button
* `'icon'` {string} ... — link to icon
* `'content'` {string} ... — content of button
* `'attrs'` {object} `{'type': 'submit', 'attr2: 'value2' }` — custom DOM attributes for button
* `'static'` {boolean} — block without nanoblocks functionality (JavaScript API)
* `'type'` {string} `'file'` — attach button. This is not DOM type aka `<input type=""/>`, this is instance type.
* `'href'` {string} — button with `<a href=''>`


#### Example

Action buttom, size L with custom classes

```

    nb-button({
        'size': 'l'
        'theme': 'action'
        'id': 'id1'
        'class': [
            'my_class1'
            'my_class2'
        ]
        'content': 'Hello World'
        'attrs': {
            'name': 'my_name'
         }
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

### Button methods

button — nb block

```

    /**
    * Set text of the button
    * @param text {String} — text for the button
    * @fires 'nb-button_text-setted'
    * @returns {nb.block}
    */
   button.setText('Button');

   /**
    * Get text of the button
    * @returns {String} — text of the button
    */
   button.getText();

   /**
    * Set href of the link button
    * @param href {String} — link for the link button
    * @fires 'nb-button_href-setted'
    * @returns {nb.block}
    */
   button.setUrl('http://ya.ru');

   /**
    * Get href of the link button
    * @returns {String} — href of the link button
    */
   button.getUrl();

   /**
    * Disables the button
    * @fires 'nb-button_disabled'
    * @returns {nb.block}
    */
   button.disable();

   /**
     * Enables the button
     * @fires 'nb-button_enabled'
     * @returns {nb.block}
     */
   button.enable();


   /**
    * Return state of the button
    * @returns {Boolean}
    */
   button.isEnabled();

   /**
    * Focus the button
    * @fires 'nb-button_focused'
    * @returns {nb.block}
    */
   button.focus();

   /**
    * Blur the button
    * @fires 'nb-button_blured'
    * @returns {nb.block}
    */
   button.blur();

    /**
     * Destroy the button
     * @fires 'nb-button_destroyed'
     */
   button.destroy();

```



