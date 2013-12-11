---
---

## Псевдо-кнопка

    skin: pseudo-button

В отличие от [обычной кнопки](#skin-islands-button), псевдокнопка не имеет «активного» состояния и следующей из него необходимости иметь внутренний элемент, так что псевдокнопку можно сделать и на одном элементе:

> <a class="pseudo-button" href="#x">Псевдокнопка ссылкой</a>
>
> <div class="example:pseudo-button"></div>

Аналогично обычной кнопке, псевдо-кнопка может быть обычного размера, и маленькая — если использовать параметр `small`:

    skin: pseudo-button small

> <div>
>     <button class="small-pseudo-button" type="button">Маленькая псевдокнопка кнопкой</button>
> </div>
>
> <div class="example:small-pseudo-button"></div>
