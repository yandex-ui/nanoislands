---
---

## Чекбоксы

    skin: checkbox


И чекбоксы, и радиокнопки по умолчанию масштабируются под размер шрифта.

> <div>
>     <label class="toggler">
>         <input class="toggler-controller" type="checkbox" checked="checked">
>         <span class="checkbox toggler-view"><span class="checkbox-icon"> </span></span
>         >Чекбокс
>     </label>
> </div>
> <div class="secondary">
>     <label class="toggler">
>         <input class="toggler-controller" type="checkbox">
>         <span class="checkbox toggler-view"><span class="checkbox-icon"> </span></span
>         >Чекбокс
>     </label>
> </div>
>
> <div class="example:checkbox"></div>

Если же надо сделать чекбокс определённого (не зависимого от размера шрифта) размера, вне контекста, можно сделать так:

> <h2>
>     <label class="toggler">
>         <input class="toggler-controller" type="checkbox" checked="checked">
>         <span class="normal-checkbox toggler-view"><span class="checkbox-icon"> </span></span
>         >Обычный чекбокс
>     </label><br/>
>     <label class="toggler">
>         <input class="toggler-controller" type="radio" name="radio2">
>         <span class="small-radio toggler-view"><span class="radio-icon"> </span></span
>         >маленький радиобатон
>     </label>
> </h2>
>
> <div class="example:sized-checkbox"></div>

Нужно отметить, что из-за того, что имя внутреннего элемента отличается от родителя (`small-radio` и `radio-icon`) нужно при вызове явно прокидывать имя внутреннего элемента, не опираясь на дефолт.
