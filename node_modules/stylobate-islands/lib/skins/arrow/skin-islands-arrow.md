---
---

## Стрелка

Фирменная стрелка Яндекса, по умолчанию может использоваться для названия сервиса:

    skin: arrow

> <div>
>     <div class="service-arrow">
>         Фотки
>     </div>
> </div>
>
> <div class="example:service-arrow"></div>

Если необходимо сделать стрелку-ссылку, это легко сделать, используя [скин ссылки](#skin-islands-link):

> <div>
>     <a class="link-arrow" href="#x">
>         Фотки
>     </a>
> </div>
>
> <div class="example:link-arrow"></div> 

Если же нужна поисковая стрелка, нужно использовать параметр `search` для правильных отступов (+ нужно поправить выравнивание поля внутри):

    skin: arrow search

> <div>
>     <div class="search-arrow">
>         <label class="field">
>             <a class="field-label" href="#x">
>                 Маркет
>             </a>
>             <span class="field-content">
>                 <input class="input-controller" type="text" value="Окна">
>                 <span class="input-view">&nbsp;</span>
>             </span>
>         </label>
>         <button class="button" type="button">
>             <span class="button-content">Найти</span>
>         </button>
>     </div>
> </div>
>
> <div class="example:search-arrow"></div>

Такая стрелка не тянется, так как там внутри просто обычные инлайн-блоки, ну а если надо сделать её тянущейся, нужно использовать `kind: shrink` с дополнительным враппером:

> <div class="search">
>     <button class="button search-right" type="button" tabindex="2">
>         <span class="button-content">Найти</span>
>     </button>
>     <div class="search-content">
>         <label class="search-field field">
>             <a class="field-label" href="#x">
>                 Маркет
>             </a>
>             <span class="field-content">
>                 <input class="input-controller" type="text" value="Окна" tabindex="1">
>                 <span class="input-view">&nbsp;</span>
>             </span>
>         </label>
>     </div>
> </div>
>
> <div class="example:search"></div>

По умолчанию хвостик делается с помощью псевдоэлемента, если же нужно его отделить, можно использовать параметр `no-elements` на «теле» и `tail` на хвостике (и в этом случае хвостик будет отображаться и в IE).

    skin: arrow no-elements

    skin: arrow tail

Либо можно использовать специальный параметр-элемент, создав хвостик из вызова скина:

    skin: arrow red 11*rem (-helper '& > .arrow-tail')

Кроме того, можно настраивать как цвет, так и высоту стрелки, передавая параметры соответствующих типов:

> <div>
>     <div class="custom-arrow">
>         <div class="arrow-tail"></div>
>         Компания
>     </div>
> </div>
>
> <div class="example:custom-arrow"></div>
