### Default loader
> <div example="loader-m"/>
>
> ```yate
>     nb-loader()
> ```

* `size`: `m`

### Options

* `color` {string} — spinner color, black by default, `while` is the only alternate option
* `size` {string} — spinner size — s / m / l

### Examples

Small loader:
> <div example="loader-s"/>
>
> ```yate
>     nb-loader({
>         'size': 's'
>     })
> ```

White medium loader on white background:
> <div example="loader-w"/>
>
> ```yate
>     nb-loader({
>         'color': 'white'
>     })
> ```
