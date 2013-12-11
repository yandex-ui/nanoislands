---
---

## Юзерпик

Стандартный круглый (в нормальных браузерах) юзерпик.

    skin: userpic

Картинка задаётся через инлайновый стиль `style="background-image:url('foo.png')"`.

Для раскладки исопользуется тип `icon` с нужным размером, например, `(size 42px)`

> <div class="userpic" style="background-image: url('http://im3-tub-ru.yandex.net/i?id=37564715-37-72.gif')"></div>
>
> <div class="example:userpic"></div>

Можно применять и к ссылкам, есть дополнительный скин-модификатор для ховера, его можно применить через соответствующий параметр:

    skin: userpic_ (_hover '&:hover')

> <a class="userpic" href="#x" style="background-image: url('http://im3-tub-ru.yandex.net/i?id=37564715-37-72.gif')"></a>
>
> <div class="example:userpic_link"></div>

Ну и пример «из шапки» — с юзернеймом и [иконкой нотификации](#notification).

> <div>
>     <a class="user" href="#x">
>         <span class="user-pic" style="background-image: url('http://im3-tub-ru.yandex.net/i?id=37564715-37-72.gif')">
>             <span class="icon_notification">7</span>
>         </span>
>         <span class="user-name">Inky</span>
>     </a>
> </div>
>
> <div class="example:user"></div>
