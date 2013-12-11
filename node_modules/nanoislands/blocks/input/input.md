# Input

HTML input element.

## Yate

```
nb-input(options)
```

### Options
 * `'attrs'` {object} - attrubutes for input node
 * `'content'` {string} - `value` of the input
 * `'disabled'` {boolean}
 * `'size'` {string}  - input size. `'s'` (no other sizes supported)

### Examples

```
nb-input({
    'size': 's'
    'attrs': {
        'placeholder': 'Введите пароль'
        'type': 'password'
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
### Input methods

input — nb block
```
    input.trigger('disable');
    input.trigger('enable');

    /* @param params — {
     *     value: '..'
     * }
     */
    input.trigger('changeValue', params);
```