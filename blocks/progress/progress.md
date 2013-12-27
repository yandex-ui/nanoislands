## Yate

### Default progress indicator

    nb-progress()
    
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

Progress indicator with progressbar and ticking percentage, initialised at 0%:

```
    nb-progress({
        'id': 'progress2'
    })

```

Same thing, but in title mode and starting at 30%:

```

    nb-progress({
        'id': 'progress1'
        'start': '30'
        'type': 'title'
        'title': 'Король_Лев_5_rutracker.org'
    })

```

## JS

### Initialisation

Initialize nb block on DOM node:
```

    nb.block(node);

```

Initialize all nb blocks with class '_init' within DOM node

```

    nb.init(node);

```

### Methods


```
    /**
     * Изменяет значение прогресс бара
     * @param {String} Новое значение.
     */

    progressBar.update();

    /**
     * Меняет значение на единицу
     */
    progressBar.tick();
```