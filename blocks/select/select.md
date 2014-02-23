```
    nb-select()
```

* size: m
* theme: normal
* direction: bottom

### Optional attributes
* `'size'` {string} `m / s`
* `'theme'` {string} `normal / action (yellow) / dark / pseudo`
* `'id'` {string} block@id and select@name
* `'name'` {string}
* `'direction'` {string} bottom / top — open default direction
* `'class'` {array} `['my_class1', 'my_class2']`
* `'disabled'` {boolean}
* `'tabindex'` {string} — tabindex
* `'maxHeight'` {Number|String} number of visible items or string value of the max-height like '10em'
* `'within'` {string} '...' - id attr of the container where listing tries to fit in (window default)
* `'appendto'` {string} — selector where show be placed select dropdown
* `'items'` {array}  - each object in array could have text, value and selected fields
    * `'text'` {string} text of option
    * `'value'` {string} value of option
    * `'icon'` {string} 'three-dots'
    * `'selected'` {boolean}
    * `'separator'` {boolean}
    * `'group'` {array} - group of options, array of items in `optgroup`

#### Example

```
nb-select( {
  'size': 's'
  'id': 'select1'
  'class': 'my-sp-class'
  'attrs': {
        'name': 'my-name'
   }
  'theme': 'dark'
  'items': [
      {
          'text': 'Карта'
          'value': 'option1'
          'selected': 'true'
      }
      {
          'text': 'Спутник'
          'value': 'option2'
      }
      {
          'text': 'Гибрид'
          'value': 'option3'
      }
      {
          'text': 'Ещё'
          'value': 'option4'
          'icon': 'three-dots'
      }
        'text': 'Группа'
        'group': [
              {
                  'text': 'Супер Карта'
                  'value': 'option4'
              }
              {
                  'text': 'Супер Спутник'
                  'value': 'option5'
              }
              {
                  'text': 'Супер Гибрид'
                  'value': 'option6'
              }
        ]
    }
  ]
})
```
