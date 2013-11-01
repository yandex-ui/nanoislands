## Yate
### Default button

    nb-button()

* size — m
* theme — normal

### Optional attributes
* size: s / m / l
* theme: normal / action (yellow) / dark / pseudo
* id: ...
* class: ['my_class1', 'my_class2'] — additional classes
* disabled: true() — disabled button
* icon: ... — link to icon
* content: ... — content of button
* attrs: {
   'type': 'submit',
   'attr2: 'value2'
} — custom DOM attributes for button
* static: true() — block without nanoblocks functionality (JavaScript API)
* type: 'file' — attach button. This is not DOM type aka `<input type=""/>`, this is instance type.
* multiple: true() — multiple attach button **aandrosov: i think we should delete this option and use attrs instead**
* href: '...' — button with `<a href=''>`


#### Example

Action buttom, size L with custom classes

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

## JS

### Initialization

Initialize nb block on DOM node:

    nb.block(node);

Initialize all nb blocks with class '_init' within DOM node

    nb.init(node);

### Button methods

button — nb block

    button.trigger('disable');
    button.trigger('enable');
    button.trigger('destroy');

    /* @param params — {
     *     text: '..'
     * }
     */
    button.trigger('textChange', params);





