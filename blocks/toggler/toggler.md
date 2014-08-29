## Yate

### Default toggler

* leftText — On
* rightText — Off
* size — s

### Optional settings
* `'id'` {string}
* `'name'` {string}
* `'disabled'` {boolean}
* `'checked'` {boolean}
* `'leftText'` {string} 'On'
* `'rightText'` {string} 'Off'

### Example

<div example="toggler-s"/> 
> ```yate
> nb-toggler({
>     'leftText': 'On'
>     'rightText': 'Off'
> })
> ```

<div example="toggler-m"/> 

> ```yate
> nb-toggler({
>     'leftText': 'On'
>     'rightText': 'Off'
>     'size': 'm'
>     'checked': true()
> })
> ```

<div example="toggler-xs"/> 

> ```yate
>  nb-toggler({
>      'leftText': 'On'
>      'rightText': 'Off'
>      'size': 'xs'
>  })
> ```

<div example="toggler-d"/> 

> ```yate
>  nb-toggler({
>          'leftText': 'On'
>          'rightText': 'Off'
>          'size': 'm'
>          'disabled': true()
> })
> ```