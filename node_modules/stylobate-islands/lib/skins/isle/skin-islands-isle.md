---
---

## Острова

Стандартный блок, отличается белым фоном и тонкой тенюшкой.

    skin: isle

> <div class="isle" style="width: 200px; height: 100px;"></div>
>
> <div class="example:isle"></div>

Летающий блок создан для модальных окон, выпадающих списков и прочих элементов верхнего слоя, в остальных случаях следует обходиться обычным островом.

    skin: isle fly

> <div class="flying-isle" style="width: 200px; height: 100px;"></div>
>
> <div class="example:flying-isle"></div>

Для отступов контента можно использовать специальный параметр:

    skin: isle (-content '&-content')

> <div class="island">
>     <div class="island-content">
>         <p>Hello, there!</p>
>         <p>I'm a normal island.</p>
>     </div>
> </div>
>
> <div class="example:island"></div>

Этот параметр также можно настроить, задав маленький отступы параметром `small`:

    skin: isle (-content '&' small)

> <div class="islet">And I'm a small one!</div>
>
> <div class="example:islet"></div>

Также в этом примере можно увидеть, что подскин контента можно применять прямо к самому блоку.
