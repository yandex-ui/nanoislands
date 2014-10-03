You have to explicitly pass icon name to nb-icon()

* `size` — `m`

### Options

* `id` {string}
* `class` {array} — additional classes ['my_class1', 'my_class2']
* `icon` {string} — icon name (_TODO: List available icon names with descriptions)
* `size` {string} — icon size, `s` or `m`

### Examples

Small icon:
> <div example="icons-s"/>
>
>```yate
>    nb-icon({
>        'icon': 'link'
>        'size': 's'
>    })>
>    nb-icon({
>        'icon': 'link-white'
>        'size': 's'
>    })
>```

Medium-sized icon:
> <div example="icons-m"/>
>
>```yate
>    nb-icon({
>        'icon': 'link-white'
>        'size': 'm'
>    })
>    nb-icon({
>        'icon': 'link'
>    })
>```
