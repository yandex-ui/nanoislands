---
---

## Иконки

### Крестик удаления/закрытия {#icon_remove}

Используется для закрытия попапов, очищения текстовых полей ввода и т.д.

> <span class="icon_remove"> </span>
>
> <div class="example:icon_remove"></div>

Любую иконку можно сделать «активной» — добавить курсор и ховер с опасити, используя параметр `with-hover`

> <span class="active-icon_remove"> </span>
>
> <div class="example:active-icon_remove"></div>

### Нотификация {#icon_notification}

Иконка-баджик нотификации, с циферками.

> <span class="icon_notification">7</span>
> <span class="icon_notification">42</span>
> <span class="icon_notification">99+</span>
>
> <div class="example:icon_notification"></div>

### Стрелочка {#icon_arrow}

    skin: icon_arrow

Иконка для стрелочки. Принимает большое число опциональных параметров:

- Размер: либо одно число, либо именованный параметр `size`; по умолчанию — `6px`.
- Толщина: именованный праметр `width`; по умолчанию — `2px`.
- Цвет: по умолчанию наследует цвет текста.
- Направление: одно из ключевых слов `top`, `right`, `bottom`, `left`; по умолчанию — `bottom`.
- Модификатор направления: можно задать дополнительные направления параметром-элементом `-direction`, например `(-direction '&:hover' right)`.
- Стандартный транзишн: чтобы включить транзишн для смены направления достаточно использовать параметр `with-transition`.
- Смещение иконки по X и Y: именованные параметры `offset-x` и `offset-y`, например `(offset-y -6px)`

> <span class="icon_arrow"></span>
> <span class="icon_another-arrow"></span>
> <span class="icon_another-arrow_offset"></span>
>
> <div class="example:icon_arrow"></div>

### Дропдаун {#icon_dropdown}

Частный случай стрелочки, используется в дропдаунах.

> Текст <span class="icon_dropdown"></span>,
> <a class="complex-link"><span class="link-inner">Дропдаун</span> <span class="icon_dropdown"></span></a>
>
> <div class="example:icon_dropdown"></div>

### Галочка {#icon_check}

Иконка с галочкой — для чекбоксов и аналогичных мест.

> <span class="icon_check"> </span>
>
> Тест на границы: <span class="bounding-box"><span class="icon_check"> </span></span>
>
> <div class="example:icon_check"></div>
