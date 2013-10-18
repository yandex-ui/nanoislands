# Input

HTML input element.

## Yate

```
nb-input(options)
```

### Options
 * `'attrs'` {object} - attrubutes for input node
 * `'disabled'` {boolean}
 * `'size'` {string}  - input size. `'s'` (no other sizes supported)


## Проблемы

Есть проблемка с заданием ширины инпута
Сейчас делают вот так

```
.b-intruder__search-filter-input
  margin-right: 8px

  .nb-input__input
    width: 400px

.b-intruder__search
  .nb-input
    padding-right: 8px

    .nb-input__input
      width: 400px
```

это неправильно, потому что мы лезим в потроха блока

Придумали с Антоном варианты:
  1. через `attrs.style` делаем `width:400px`
  2. добавить свойство `width` у блока, которое будет влиять на инпунт
  3. добавить собственный класс блоку, а у input сделать `width: 100%`
