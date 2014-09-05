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

### Yate examples

#### Default
<div example="selects-simple"/>
>```yate
> nb-select({
>     'items': [
>         {
>            'icon': 'twitter'
>            'text': 'Twitter'
>            'value': 'option0'
>            'selected': 'true'
>         }
>         {
>            'icon': 'vk'
>            'text': 'VK'
>            'value': 'option1'
>         }
>         {
>            'text': 'Ещё'
>            'value': 'option4'
>            'icon': 'three-dots'
>         }
>     ]
> })
> " Текст рядом с селектами"
>
>
>```

#### Sizes
`m` / `s`
> <div example="selects-size"/>
>
> ```yate
>    nb-select({
>        'size': 'm'
>        'items': [
>            {
>               'icon': 'twitter'
>               'text': 'Twitter'
>               'value': 'option0'
>               'selected': 'true'
>            }
>            {
>               'icon': 'vk'
>               'text': 'VK'
>               'value': 'option1'
>            }
>            {
>               'text': 'Ещё'
>               'value': 'option4'
>               'icon': 'three-dots'
>            }
>        ]
>    })
>    ' '
>    nb-select({
>        'size': 's'
>        'items': [
>            {
>               'icon': 'twitter'
>               'text': 'Twitter'
>               'value': 'option0'
>               'selected': 'true'
>            }
>            {
>               'icon': 'vk'
>               'text': 'VK'
>               'value': 'option1'
>            }
>            {
>               'text': 'Ещё'
>               'value': 'option4'
>               'icon': 'three-dots'
>            }
>        ]
>    })
>    " Текст рядом с селектами"
> ````

#### Themes
`normal / pseudo / dark / action (yellow)`
> <div example="selects-theme"/>
>
> ```yate
>  nb-select({
>      'size': 'm'
>      'id': 'select1'
>      'attrs': {
>      'name': 'myname'
>      }
>      'class': 'my-test-class'
>      'items': [
>          {
>              'text': 'Карта'
>              'value': 'option1'
>          }
>          {
>              'text': 'Спутник'
>              'value': 'option2'
>          }
>          {
>              'text': 'Гибрид'
>              'value': 'option3'
>          }
>      ]
>  })
>  ' '
>  nb-select( {
>    'size': 'm'
>    'id': 'select3'
>    'class': 'my-test-class'
>    'theme': 'pseudo'
>    'items': [
>        {
>            'text': 'Карта'
>            'value': 'option1'
>            'selected': 'true'
>        }
>        {
>            'text': 'Спутник'
>            'value': 'option2'
>        }
>        {
>            'text': 'Гибрид'
>            'value': 'option3'
>        }
>    ]
>  })
>  ' '
>  nb-select( {
>    'size': 'm'
>    'id': 'select4'
>    'class': 'my-test-class'
>    'theme': 'dark'
>    'items': [
>        {
>            'text': 'Карта'
>            'value': 'option1'
>            'selected': 'true'
>        }
>        {
>            'text': 'Спутник'
>            'value': 'option2'
>        }
>        {
>            'text': 'Гибрид'
>            'value': 'option3'
>        }
>    ]
>  })
>  ' '
>  nb-select( {
>    'size': 'm'
>    'id': 'select5'
>    'class': 'my-test-class'
>    'theme': 'action'
>    'attrs': {
>      'style': 'width: 120px'
>    }
>    'items': [
>        {
>            'text': 'Народная карта'
>            'value': 'option0'
>            'selected': 'true'
>        }
>        {
>            'text': 'Карта'
>            'value': 'option1'
>        }
>    ]
>  })
> ```

#### Disabled

> <div example="selects-disabled"/>
>
>```yate
> nb-select({
>     'disabled': true()
>     'items': [
>         {
>            'icon': 'twitter'
>            'text': 'Twitter'
>            'value': 'option0'
>            'selected': 'true'
>         }
>         {
>            'icon': 'vk'
>            'text': 'VK'
>            'value': 'option1'
>         }
>         {
>            'text': 'Ещё'
>            'value': 'option4'
>            'icon': 'three-dots'
>         }
>     ]
> })
> " Текст рядом с селектами"
>
>
>```

#### Direction
> <div example="selects-direction"/>
>
>```yate
> nb-select({
>     'direction': 'top'
>     'items': [
>         {
>            'icon': 'twitter'
>            'text': 'Twitter'
>            'value': 'option0'
>            'selected': 'true'
>         }
>         {
>            'icon': 'vk'
>            'text': 'VK'
>            'value': 'option1'
>         }
>         {
>            'text': 'Ещё'
>            'value': 'option4'
>            'icon': 'three-dots'
>         }
>     ]
> })
>
>
>```

#### maxHeight
{Number|String} number of visible items or string value of the max-height like '10em'

> <div example="selects-mh"/>
>
>```yate
> nb-select({
>     'maxHeight': 3
>     'items': [
>         {
>            'icon': 'twitter'
>            'text': 'Twitter'
>            'value': 'option0'
>            'selected': 'true'
>         }
>         {
>            'icon': 'vk'
>            'text': 'VK'
>            'value': 'option1'
>         }
>         {
>            'icon': 'vk'
>            'text': 'VK'
>            'value': 'option1'
>         }
>         {
>            'text': 'Ещё'
>            'value': 'option4'
>            'icon': 'three-dots'
>         }
>     ]
> })
>```

#### Group
> <div example="selects-group"/>
>
>```yate
>    nb-select( {
>        'id': 'select-gropu1'
>        'class': 'my-test-class'
>        'items': [
>            {
>                'text': 'Карта'
>                'value': 'option1'
>                'selected': 'true'
>            }
>            {
>                'text': 'Спутник'
>                'value': 'option2'
>            }
>            {
>                'text': 'Гибрид'
>                'value': 'option3'
>            }
>
>            {
>                'text': 'Группа'
>                'group': [
>                      {
>                          'text': 'Супер Карта'
>                          'value': 'option4'
>                      }
>                      {
>                          'text': 'Супер Спутник'
>                          'value': 'option5'
>                      }
>                      {
>                          'text': 'Супер Гибрид'
>                          'value': 'option6'
>                      }
>                ]
>            }
>        ]
>    })
>```
