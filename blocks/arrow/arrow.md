### Default arrow

> <div example="arrow-default">
> </div>
>
> ```yate
> nb-arrow()
> ```

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

### Yate examples

Name of service:

> <div example="arrow-service">
> </div>
>
> ```yate
> nb-arrow({
>     'search': 'false'
>     'text': Disk'
> })
> ```


Name of service with link:

> <div example="arrow-service-link">
> </div>
>
> ```yate
> nb-arrow({
>     'search': 'false'
>     'href': '#'
>     'text': Disk'
> })
> ```

Arrow with search form, prefilled and with requests info:

> <div example="arrow-search-requests">
> </div>
>
> ```yate
> nb-arrow({
>      'requests': '8 results'
>      'attrs': {
>        'action': '/search.php'
>      }
>      'buttonContent': 'I\'m feeling lucky'
>      'value': 'Dog'
> })
> ```

Arrow with search form and namelink enabled:

> <div  example="arrow-search-service">
> </div>
>
> ```yate
> nb-arrow({
>     'href': '#'
>     'text': Disk'
> })
> ```

