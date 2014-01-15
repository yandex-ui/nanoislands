---
---

## Меню

«Меню» — вертикальный список с различными пунктами. 

    skin: menu

Сам скин меню по умолчанию не имеет стилей и является просто враппером для внутренних элементов, которые будут вызваны по умолчанию.

Опционально можно использовать параметр `padded`, это добавит соответствующие отступы сверху и снизу:

    skin: menu padded

Дополнительным параметром можно передать размер, пока доступно два варианта: по-умолчанию и маленький — `small`:

    skin: menu padded small

### Пункт меню

Основным действующим лицом меню является его пункт: — `menu-item`, его можно использовать и без враппера — это нормально:

    skin: menu-item

По умолчанию такой пункт обладает некоторой раскладкой и подсвечивается по наведению:

> <div class="menu flying-isle" style="width: 200px;">
>     <a class="menu-item" href="#x">Foo foo foo</a>
>     <a class="menu-item" href="#x">Bar bar</a>
>     <a class="menu-item" href="#x">Baz baz baz baz</a>
> </div>
>
> <div class="example:menu-item"></div>

И пример маленьких пунктов меню и без враппера с паддингами:

> <div class="flying-isle" style="display: inline-block;">
>     <a class="small-menu-item" href="#x">Foo foo foo</a>
>     <a class="small-menu-item" href="#x">Bar bar</a>
>     <a class="small-menu-item" href="#x">Baz baz baz baz</a>
> </div>
>
> <div class="example:small-menu-item"></div>

Если нужно убрать ховер с пункта меню, можно использовать параметр `no-hover`:

    skin: menu-item no-hover

По умолчанию ховер применяется на `&:hover`, если нужно поменять селектор, достаточно переопределить его для соответствующего элемента:

    skin: menu-item (_hover '&_hover_yes')

### Группы пунктов меню

Пунты меню можно разделять по группам, для этого используется элемент `menu-group`:

    skin: menu-group

Две подряд идущих друг за другом группы будут разделены полоской, если есть параметр `padded`, то и отступами.

> <div class="menu flying-isle" style="width: 200px;">
>     <div class="menu-group">
>         <a class="menu-item" href="#x">Foo foo foo</a>
>         <a class="menu-item" href="#x">Bar bar</a>
>     </div>
>     <div class="menu-group">
>         <a class="menu-item" href="#x">Baz</a>
>         <a class="menu-item" href="#x">Raz raz raz raz</a>
>     </div>
> </div>
> 
> <br/>
> 
> <div class="flying-isle" style="display: inline-block;">
>     <div class="small-menu-group">
>         <a class="small-menu-item" href="#x">Foo foo foo</a>
>         <a class="small-menu-item" href="#x">Bar bar</a>
>     </div>
>     <div class="small-menu-group">
>         <a class="small-menu-item" href="#x">Baz</a>
>         <a class="small-menu-item" href="#x">Raz raz raz raz</a>
>     </div>
> </div>
>
> <div class="example:menu-group"></div>

### Разделитель

Для создания разделителя между пунктами меню можно использовать не только группы, но и отдельный элемент-разделитель.

    skin: menu-separator

Аналогично остальным элементам меню, разделитель может принимать как параметр `padded`, так и `small`

> <div class="menu flying-isle" style="width: 200px;">
>     <a class="menu-item" href="#x">Foo foo foo</a>
>     <a class="menu-item" href="#x">Bar bar</a>
>     <span class="menu-separator"></span>
>     <a class="menu-item" href="#x">Baz</a>
> </div>
>
> <div class="example:menu-separator"></div>

### Выбранный пункт меню

Пункт меню может быть «выбранным», в этом случае внутри него появляется галочка:

    skin: menu-item_checked

> <div class="menu flying-isle" style="width: 200px;">
>     <a class="menu-item" href="#x">Foo foo foo</a>
>     <a class="menu-item is-checked" href="#x">Bar bar</a>
>     <a class="menu-item" href="#x">Baz baz baz baz</a>
> </div>
>
> <div class="example:menu-item_checked"></div>

### Обрезание в многоточие

Если внутри пункта меню может быть много контента, нужно использовать параметр `ellipsis`. Он не стоит по умолчанию, так как включает `overflow: hidden`, что не всегда может быть нужно.

    skin: menu-item ellipsis

> <div class="flying-isle" style="width: 200px;">
>     <a class="shrinked-menu-item" href="#x">Foo foo foo foo foo foo foo</a>
>     <a class="shrinked-menu-item" href="#x">Baz baz baz baz</a>
> </div>
>
> <div class="example:menu-item_ellipsis"></div>
