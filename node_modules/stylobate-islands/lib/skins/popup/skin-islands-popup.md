---
---

## Попапы

Хотя скин попапа — по сути скин летающего острова, есть соответствующий алиас:

    skin: popup

Кроме того, существует несколько скинов-помощников: `-content` для стилей контента, `-close` для закрывающего крестика и `-overlay` для затемняющего слоя поверх контента.

Если нужен обычный попап/дропдаун, который планируется позиционировать вручную или и вовсе класть куда-то статично, как остров, достаточно будет чего-то такого:

> <div class="popup" style="width: 300px;">
>     <div class="popup-content text">
>         Большое мороженное с орехами и карамелью в вафельном рожке
>     </div>
>     <div class="popup-close"></div>
> </div>
>
> <div class="example:popup"></div>

Как видно в styl-исходнике выше, у попапа могут быть два элемента: контент и кнопка закрыти. Если они не нужны, можно опустить соответствующие вызовы стилей.

Элемент контента задаёт внутренние отступы у блока, поэтому если хочется, можно или перенести их напрямую к блоку попапа — если не задавать соответствующий селектор, либо использовать параметр `small` для уменьшения соответствующих отступов:

> <div class="small-popup" style="width: 240px;">
>     Большое мороженное с орехами и карамелью в вафельном рожке
> </div>
>
> <div class="example:small-popup"></div>

Если же нужен модальный попап, лучше воспользоваться соответствующими типами семейства `modal`:

> <p>
>     <button class="small-button" type="button" data-modal="Popup2">
>         <span class="button-content">А теперь что?</span>
>     </button>
> </p>
>
> <p>
>     <button class="small-button" type="button" data-modal="Popup1">
>         <span class="button-content">Что там?</span>
>     </button>
> </p>
>
> <div class="example:modal"></div>

<div class="modal-wrap is-hidden" id="Popup1">
    <div class="modal" style="width: 300px;">
        <div class="modal-content text">
            <h3>Подарок</h3>
            <p>Большое мороженное с орехами и карамелью в вафельном рожке</p>
        </div>
        <div class="modal-close"></div>
    </div>
</div>
<div class="modal-wrap is-hidden" id="Popup2">
    <div class="modal-overlay"></div>
    <div class="modal" style="width: 300px;">
        <div class="modal-content text">
            <h3>Вам письмо:</h3>
            <p>Дорогой друг, спешу тебе напомнить, что ты занимал у меня много денег и до сих пор не отдал. Даю тебе еще неделю, твои дети у меня.</p>
        </div>
        <div class="modal-close"></div>
    </div>
</div>

### Попап с хвостиком

Для попапа с хвостиком («дропдауна») нужно передать соответствующий параметр при создании попапа:

    skin: popup (-tail '&-tail')

Пока что подразумевается, что стили для хвостиков с конкретных сторон зашиваются в модификатор на самом попапе, в будущем (когда Стайлус получит одну новую фичу), возможно, можно будет это поменять.

> <div class="dropdown dropdown_to_bottom">
>     <div class="dropdown-tail"></div>
>     <div class="dropdown-content text">
>         Попап выпал вниз
>     </div>
> </div>
>
> <div class="example:dropdown"></div>

> <div class="dropdown dropdown_to_left">
>     <div class="dropdown-tail"></div>
>     <div class="dropdown-content text">
>         Попап выпал влево
>     </div>
> </div>

> <div class="dropdown dropdown_to_top">
>     <div class="dropdown-tail"></div>
>     <div class="dropdown-content text">
>         Попап выпал вверх
>     </div>
> </div>

> <div class="dropdown dropdown_to_right">
>     <div class="dropdown-tail"></div>
>     <div class="dropdown-content text">
>         Попап выпал вправо
>     </div>
> </div>
>
>     .dropdown
>       kind: modal
>       skin: popup \
>         (-content '&-content' small) \
>         (-tail '&-tail')
> {:.styl}

По умолчанию хвостик позиционируется по центру соответствующей стороны, если надо это поменять, достаточно задать соответствующие инлайновые стили блоку хвостика:

> <div class="dropdown dropdown_to_bottom">
>     <div class="dropdown-tail" style="left: 11px"></div>
>     <div class="dropdown-content text">
>         Попап выпал вниз
>     </div>
> </div>

Надо отметить, что сейчас хвостик позиционируется относительно своего центра, поэтому если нужно прижать его к краю, то нужно задавать соответствующую величину не меньше 11 пикселей.

Если нужно позиционировать хвостик справа или снизу, нужно не забыть переопределять `top: auto` или `left: auto`.

Пока инлайновые стили надо задавать так, но потом, возможно, этот момент можно будет как-то упростить/поправить, скорее всего появятся соответствующие модификаторы, или что-то ещё типа того.
