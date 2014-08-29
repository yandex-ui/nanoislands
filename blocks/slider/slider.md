```
    nb-slider()
```

* size: s
* value: 0
* orientation: horiz
* type: range

### Optional attributes
* `'size'` {string} `m / s`
* `'value'` {number}
* `'id'` {string} block@id
* `'class'` {array} `['my_class1', 'my_class2']`
* `'disabled'` {boolean}
* `'content'` {xml|string} — handle's content, can be string or `xml` _xss warning!_

#### Example
<div example="slider-s"/>
>```yate
> nb-slider( {
>    'id': 's2'
>    'size': 's'
>    'handle': {
>        'class': 'js-custom-class'
>    }
>    'value': 20
> })
> ```

<div example="slider-m"/>
> ```yate
> nb-slider({
>      'size': 'm'
>      'class': 'js-super-class'
>      'value': 50
>      'id': 's1'
>  })
> ```

<div example="slider-d"/>
> ```yate
> nb-slider(  {
>    'disabled': true()
> })
> ```

<div example="slider-c"/>
> ```yate
> nb-slider(  {
>     'id': 's3'
>     'size': 's'
>     'content':  nb-icon({
>            'icon': 'volume'
>        })
> })
> ```