---
---

## Табы

Табы состоят из враппера:

    skin: tabs

и отдельных пунктов:

    skin: tabs-item

Плюс есть подскин с текущим табом:

    skin: tabs-item_selected

> <div class="tabs">
>     <a class="tabs-item tabs-item_selected">Раз</a
>     ><a href="#x" class="tabs-item">Два</a
>     ><a href="#x" class="tabs-item">Три</a>
> </div>
>
> <div class="example:tabs"></div>

На айтемах нужные размеры задаются в `em`, так что достаточно задавать размер только на родителе:

    skin: tabs small

> <div class="small-tabs">
>     <a class="tabs-item tabs-item_selected">Маленький раз</a
>     ><a href="#x" class="tabs-item">Маленький два</a
>     ><a href="#x" class="tabs-item">Маленький три</a>
> </div>
>
> <div class="example:small-tabs"></div>

Можно использовать табы внутри острова, но сейчас там хардкодно, надо что-то придумать с отступами и всем таким.

> <div class="flying-isle">
>     <div class="island-content">
>         <div class="tabs">
>             <a class="tabs-item tabs-item_selected">Войти</a
>             ><a href="#x" class="tabs-item">Зарегистрироваться</a>
>         </div>
>         blah blah
>     </div>
> </div>
>
> <div class="example:isle-tabs"></div>
