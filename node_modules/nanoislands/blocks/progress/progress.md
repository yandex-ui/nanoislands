###Default progress
> <div example="progress"/>
>
> ```yate
>     nb-progress()
> ```

Progress indicator with progressbar and ticking percentage, initialised at 0%:

* `bar`: `true()`
* `start`: `0`
* `type`: `percentage`
* `title`: ` `

### Options

* `bar` {boolean} — `false()` to display percentage text only
* `title` {string} — text to be displayed in a progress-bar instead of a percentage ticker
* `start` {number} — start value
* `type` {string} — `title` to display title instead of pecentage

### Examples

Same thing, but in title mode and starting at 30%:

> <div example="progress-title"/>
>
> ```yate
>     nb-progress({
>         'id': 'progress1'
>         'start': '30'
>         'type': 'title'
>         'title': 'Король_Лев_5_rutracker.org'
>     })
> ```

