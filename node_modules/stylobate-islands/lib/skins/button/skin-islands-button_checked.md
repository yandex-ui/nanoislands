---
---

## Зажатая кнопка

Иногда может возникнуть необходимость сделать «нажатое» состояние кнопки, например, если она выступает в качестве импровизированного (или даже настоящего) чекбокса.

Для этого есть специальный подскин — `skin-islands-button_checked`, который можно применить там, где хочется сделать постоянное вжатое состояние:

    skin: button_checked

Имея такой отдельный скин можно его использовать для того, чтобы сделать кнопку зажимабельной через js:

> <div>
>     <button class="button toggle-button" type="button">
>         <span class="button-content">Раз</span>
>     </button>
>     <button class="button toggle-button is-checked" type="button">
>         <span class="button-content">Два</span>
>     </button>
>     <button class="button toggle-button is-checked" type="button">
>         <span class="button-content">Три</span>
>     </button>
> </div>
>
> <div class="example:toggle-button"></div>

И работать оно будет для любых типов кнопок:

> <div>
>     <button class="super-button toggle-button is-checked" type="button">
>         <span class="button-content">Супер</span>
>     </button>
>     <button class="button toggle-button is-checked is-disabled" type="button" disabled="disabled">
>         <span class="button-content">Не отключишь</span>
>     </button>
>     <button class="pseudo-button toggle-button" type="button">
>         <span class="button-content">Псевдо</span>
>     </button>
> </div>

Чуть сложнее (но всё ещё достаточно просто) сделать с помощью этого скина зажатую кнопку только на CSS:

> <label class="toggler">
>     <input class="toggler-controller" type="checkbox">
>     <span class="button toggler-view">
>         <span class="button-content">Раз</span>
>     </span>
> </label>
> <label class="toggler">
>     <input class="toggler-controller" type="checkbox" checked="checked">
>     <span class="button toggler-view">
>         <span class="button-content">Два</span>
>     </span>
> </label>
> <label class="toggler">
>     <input class="toggler-controller" type="checkbox" checked="checked">
>     <span class="button toggler-view">
>         <span class="button-content">Три</span>
>     </span>
> </label>
>
> <div class="example:toggler"></div>

И то же самое, только с радиобатонами вместо чекбоксов, и используя другой тип кнопок:

> <label class="toggler">
>     <input class="toggler-controller" type="radio" name="toggler1" checked="checked">
>     <span class="pseudo-button toggler-view">
>         <span class="button-content">Раз</span>
>     </span>
> </label>
> <label class="toggler">
>     <input class="toggler-controller" type="radio" name="toggler1">
>     <span class="pseudo-button toggler-view">
>         <span class="button-content">Два</span>
>     </span>
> </label>
> <label class="toggler">
>     <input class="toggler-controller" type="radio" name="toggler1">
>     <span class="pseudo-button toggler-view">
>         <span class="button-content">Три</span>
>     </span>
> </label>

Видно, что для CSS-only варианта приходится использовать чуть более сложную html-структуру, но зато всё это дело получается очень гибким и это хороший пример того, как можно сверстать один и тот же блок на разной HTML-структуре и логике, но используя один скин.
