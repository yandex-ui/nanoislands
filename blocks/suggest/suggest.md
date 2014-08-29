Suggest element.


### Options
 * `'id'` {string}
 * `'name'` {string}
 * `'attrs'` {object} - attrubutes for suggest node
 * `'attrsInput'` {object} - attrubutes for input node
 * `'disabled'` {boolean}
 * `'source'`: {array} — source data for suggest
 * `'highlight'`: {boolean} — hightlight results or not
 * `'size'` {string}  - input size. `'s'` (no other sizes supported)
 * `'countMax'` {string}  - The number of elements in which the drop-down list appears scroll (default = 10)
 * `'classSuggest'` {string} — additional class for suggest popup
 * `'content'` {string} — initial content og suggest field


### Examples
Простейший саджест с большим количеством вариантов. Введите буквы «Ва»

<div example="suggest"/>                                                         
> ```yate                                                                         
> nb-suggest({
>   'source': '["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4", "Вариант 5", "Вариант 6", "Вариант 7", "Вариант 8", "Вариант 9", "Вариант 10", "Вариант 11", "Вариант 12", "Вариант 13", "Вариант 14", "Вариант 15", "Вариант 16", "Вариант 17", "Вариант 18", "Вариант 19"]'
>   'highlight': true()
>   'size': 's'
> })                                                                           
> ```                                                                             

Саджест с подсветкой, в котором представлена команда разработчиков Диска
<div example="suggestUser"/>                                                         
> ```yate
>nb-suggest({
>     'source': '[{{"value": "Константин Константинович Константинопольский","labelContent": "Константин Константинович Константинопольский konstantin.konstantinopolsky","username": "Константин Константинович Константинопольский","email": "konstantin.konstantinopolsky@yandex-team.ru"}},{{"value": "Константин Васильев","labelContent": "Константин Васильев mctep","username": "Константин Васильев","email": "mctep@yandex-team.ru","userpic": "https://center.yandex-team.ru/api/v1/user/mctep/avatar/54.jpg"}},{{"value": "Евгений Дорошенко","labelContent": "Евгений Дорошенко esdoroshenko","username": "Евгений Дорошенко","email": "esdoroshenko@yandex-team.ru","userpic": "https://center.yandex-team.ru/api/v1/user/esdoroshenko/avatar/54.jpg"}},{{"value": "Вадим Пацев","labelContent": "Вадим Пацев basvasilich","username": "Вадим Пацев","email": "basvasilich@yandex-team.ru","userpic": "https://center.yandex-team.ru/api/v1/user/basvasilich/avatar/54.jpg"}},{{"value": "Светлана Блыщак","labelContent": "Светлана Блыщак sweetlush","username": "Светлана Блыщак","email": "sweetlush@yandex-team.ru","userpic": "https://center.yandex-team.ru/api/v1/user/sweetlush/avatar/54.jpg"}},{{"value": "Яна Недоросткова","labelContent": "Яна Недоросткова yanann11","username": "Яна Недоросткова","email": "yanann11@yandex-team.ru","userpic": "https://center.yandex-team.ru/api/v1/user/yanann11/avatar/54.jpg"}},{{"value": "Азиз Йулдошев","labelContent": "Азиз Йулдошев lapple","username": "Азиз Йулдошев","email": "lapple@yandex-team.ru","userpic": "https://center.yandex-team.ru/api/v1/user/lapple/avatar/54.jpg"}}]'
>     'highlight': true()
>     'type': 'username'
> })
> ```

Саджест, который ходит на сервер за demo/users.json.
<div example="suggestUser2"/> 
> ```yate
>  nb-suggest({
>      'source': './users.json'
>      'type': 'username'
>  })
> ``` 
