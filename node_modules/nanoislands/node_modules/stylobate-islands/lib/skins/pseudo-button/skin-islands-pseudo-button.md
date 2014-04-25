---
---

## Псевдо-кнопка

    skin: pseudo-button

В отличие от [обычной кнопки](#skin-islands-button), псевдокнопка не имеет «активного» состояния и следующей из него необходимости иметь внутренний элемент, так что псевдокнопку можно сделать и на одном элементе:

> <a class="pseudo-button" href="#x">Псевдокнопка ссылкой</a>
>
> <div class="example:pseudo-button"></div>

Аналогично обычной кнопке, псевдокнопка может быть обычного размера, и маленькая — если использовать параметр `small`:

    skin: pseudo-button small

> <div>
>     <button class="small-pseudo-button" type="button">Маленькая псевдокнопка кнопкой</button>
> </div>
>
> <div class="example:small-pseudo-button"></div>

### Инвертированная псевдокнопка {#inverted-pseudo-button}

Так как псевдокнопка не имеет фона, то если понадобится использовать её на тёмном фоне, то нужно будет воспользоваться модификатором `_inverted`:

    skin: pseudo-button _inverted

> <div style="background: #000; padding: 20px;">
>     <button class="inverted-pseudo-button" type="button">Инвертированная псевдокнопка</button>
> </div>
>
> <div class="example:inverted-pseudo-button"></div>

Такой модификатор можно добавить и к уже имеющейся кнопке, или вызвав только подскин, или используя соответствующий синтаксис:

    skin: pseudo-button_inverted

    skin: pseudo-button_ _inverted

> <div style="background: #000; padding: 20px;">
>     <a class="pseudo-button pseudo-button_inverted" href="#x">Инвертированная псевдокнопка</a>
> </div>
>
> <div class="example:pseudo-button_inverted"></div>

### Настраиваемая прозрачность границ {#pseudo-button-border-alpha}

Основная задача псевдокнопки — быть кнопкой, но при этом и не притягивать к себе внимание. В некоторых случаях обычная псевдокнопка может оказаться или слишком бледной, или слишком яркой, в этом случае можно исправить это, воспользовавшись параметром `border-alpha`, изменив значение полупрозрачности границы.

    skin: pseudo-button (border-alpha 0.15)

Это будет работать и для обычной псевдокнопки:

> <div>
>     <button class="dimmed-pseudo-button" type="button">Чуть приглушенная псевдокнопка</button>
> </div>
>
> <div class="example:dimmed-pseudo-button"></div>

И для инвертированной:

> <div style="background: #000; padding: 20px;">
>     <button class="brighten-inverted-pseudo-button" type="button">Яркая инвертированная псевдокнопка</button>
> </div>
>
> <div class="example:brighten-inverted-pseudo-button"></div>
