
```
    nb-island()
```

### Options

* `padding` {string} — s / m / l
* `type` {string} — inline / fly
* `content` {xml|string} — island's content, can be string or `xml` _xss warning!_

### Examples

Basic island:

> <div example="island-simple"/>
> ```yate
> nb-island({
>   'content': 'Island'
>   'attrs': {
>       'style': 'height: 100px; width: 200px'
>    }
> })
> ```

Flying island with an M-sized padding:

> <div example="island-fly"/>
> ```yate
> nb-island({
>     'content': 'Fly island'
>     'type': 'fly'
>     'padding': 'm'
>     'attrs': {
>        'style': 'height: 100px; width: 200px'
>     }
> })
> ```

Inline island with an L-sized padding:

> <div example="island-padding"/>
> ```yate
> nb-island({
>   'content': 'Inline island with padding '
>   'padding': 'l'
>   'type':  'inline'
> })
> ```