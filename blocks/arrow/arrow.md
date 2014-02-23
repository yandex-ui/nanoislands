### Default arrow

```
nb-arrow()
```

* search: 'true'
* buttonContent: 'Найти'

### Options

* search: true() — display search form
* href: ... — URL for service arrow link
* action: ... — action URL for search form
* text: ... — text for service arrow or link rendered before search input
* buttonContent: ... — text for form field's 'submit' button
* inputTabindex
* buttonTabindex 
* value: ... — placeholder for search field
* requests: ... — info about unber of request with this search field

### Examples

No inputs, with name of service:

```
nb-arrow({
    'search': 'false'
    'href': '#'
    'text': 'Диск'
})
```

Arrow with search form, no placeholder text:

```
nb-arrow({
    'search': 'true'
})
```

Arrow with search form, prefilled and with requests info:

```
nb-arrow({
    'search': 'true'
    'requests': '8 млн ответов'
    'value': 'жираф'
})
```

Arrow with search form and namelink enabled:

```
nb-arrow({
    'search': 'true'
    'href': '#'
    'text': 'Диск'
})
```