---
---

## Инпуты

Простейший инпут можно сделать на одном элементе:

    skin: input

> <input class="input" type="text" value="Буквы" />
>
> <div class="example:input"></div>

Он может быть маленьким — с параметром `small`

    skin: input small

> <input class="small-input" type="text" value="Буквы" />
>
> <div class="example:small-input"></div>

Текстария — визуально тот же инпут, так что можно использовать те же скины и классы:

> <textarea class="small-input" rows="8" cols="20">
> Some text inside
> </textarea>

### Сложные инпуты {#fields}

Если же нужно что-то сложнее (нужно вставлять сущности внутрь, типа крестика и подобных штук) лучше использовать «составной» инпут.

Обычный скин инпута, на самом деле, составной: это объединение двух подскинов — `skin-islands-input-box` и `skin-islands-input-view`. Ну и ещё есть один подскин — для фокуса, чтобы можно было его перенести на нужный блок — `skin-islands-input_focus`.

    skin: input-box

    skin: input-view no-focus

    skin: input-focus

В минимальном обрамлении он выглядит аналогично обычному инпуту, но html-структура у него должна быть посложнее:

> <label class="field">
>     <span class="field-content">
>         <input class="input-controller" type="text" value="Буквы" />
>         <span class="input-view"> </span>
>     </span>
> </label>
>
> <div class="example:field"></div>

Но если нужно будет добавить любые контролы внутрь, это становится очень легко сделать:

> <label class="field">
>     <span class="field-left">
>         Prefix:
>     </span>
>     <span class="field-right">
>         …postfix
>     </span>
>     <span class="field-content">
>         <input class="input-controller" type="text" value="Буквы" />
>         <span class="input-view"> </span>
>     </span>
> </label>

Конечно же, и у сложного инпута есть параметр `small`:

> <label class="small-field">
>     <span class="field-left">
>         Prefix:
>     </span>
>     <span class="field-right">
>         …postfix
>     </span>
>     <span class="field-content">
>         <input class="input-controller" type="text" value="Буквы" />
>         <span class="input-view"> </span>
>     </span>
> </label>
>
> <div class="example:small-field"></div>

Такой инпут легко растягивать на всю ширину:

> <div>
>     <label class="field" style="width:100%">
>         <span class="field-left">
>             Prefix:
>         </span>
>         <span class="field-right">
>             …postfix
>         </span>
>         <span class="field-content">
>             <input class="input-controller" type="text" value="Буквы" />
>             <span class="input-view"> </span>
>         </span>
>     </label>
> </div>

#### Группировка {#field-group}

Для такого инпута хорошо работает группировка с кнопками:

> <div class="group">
>     <button class="button group-item" type="button">
>         <span class="button-content">–</span>
>     </button
>     ><input class="input group-item" type="text" style="width:100px"
>     /><button class="button group-item" type="button">
>         <span class="button-content">⟷</span>
>     </button
>     ><input class="input group-item" type="text" style="width:100px"
>     /><button class="button group-item" type="button">
>         <span class="button-content">+</span>
>     </button>
> </div>

#### Имя сервиса внутри инпута {#field-label}

Специально для использования внутри инпута есть скин для «меток», обычно они используются для имени сервиса внутри инпута:

    skin: input-label

> <label class="field">
>     <a class="field-label" href="#x">
>         Маркет
>     </a>
>     <span class="field-content">
>         <input class="input-controller" type="text" value="Буквы" />
>         <span class="input-view"> </span>
>     </span>
> </label>
>
> <div class="example:field-label"></div>


#### Плейсхолдеры {#field-placeholder}

Для сложного инпута очень просто добавить кастомный плейсхолдер:

    skin: input-placeholder (-inner '&-inner') 

В коде сложного инпута он должен идти строго в самом начале контента.

> <label class="field js-with-placeholder">
>     <span class="field-content">
>         <span class="field-placeholder"><span class="field-placeholder-inner">Буквы</span></span>
>         <input class="input-controller" type="text" value="" />
>         <span class="input-view"> </span>
>     </span>
> </label>
>
> <div class="example:field-placeholder"></div>

Для маленького плейсхолдера нужно передать дополнительный параметр `small`:

    skin: input-placeholder small (-inner '&-inner') 

> <label class="small-field js-with-placeholder">
>     <span class="field-content">
>         <span class="small-field-placeholder"><span class="small-field-placeholder-inner">Буквы</span></span>
>         <input class="input-controller" type="text" value="" />
>         <span class="input-view"> </span>
>     </span>
> </label>
>
> <div class="example:field-placeholder"></div>

Довольно просто сделать плесхолдер-подсказку, если использовать дополнительный элемент `-ghost`, в который дублировать значение инпута — это позволит расположить плейсхолдер ровно после вбитого текста:

    skin: input-placeholder (-inner '&-inner')  (-ghost '&-ghost') 

> <label class="field js-with-placeholder-ghost">
>     <span class="field-content">
>         <span class="field-placeholder"><span class="field-placeholder-inner"><span class="field-placeholder-ghost"></span> — 163 тыс. ответов</span></span>
>         <input class="input-controller" type="text" value="Трампампам" />
>         <span class="input-view"> </span>
>     </span>
> </label>

Его же можно использовать для подсказки строчного «автокомплита» (в примере работает только со словом «Абракадабра», не исчезает по блюру и т.д.):

> <label class="field js-with-placeholder-autocomplete">
>     <span class="field-content">
>         <span class="field-placeholder"><span class="field-placeholder-inner"><span class="field-placeholder-ghost"></span><span class="field-placeholder-content"></span></span></span>
>         <input class="input-controller" type="text" value="Абрака" />
>         <span class="input-view"> </span>
>     </span>
> </label>

И, конечно, всё это будет работать и с контролами по краям, а длинные тексты будут обрезаться в многоточие:

> <label class="field js-with-placeholder">
>     <a class="field-label" href="#x">
>         Маркет
>     </a>
>     <span class="field-reset"></span>
>     <span class="field-content">
>         <span class="field-placeholder"><span class="field-placeholder-inner">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dignissimos, ab quisquam veniam beatae necessitatibus soluta rem maiores minima sequi ex possimus adipisci non rerum culpa. Odit, repellat perferendis esse.</span></span>
>         <input class="input-controller" type="text" value="" />
>         <span class="input-view"> </span>
>     </span>
> </label>


#### Автоувеличивающийся инпут {#resizing-field}

Со сложным инпутом становится просто сделать автоувеличивающийся по ширине инпут:

> <label class="field">
>     <span class="field-content">
>         <input class="input-controller js-autosize" type="text" value="Буквы" />
>         <span class="input-view"> </span>
>     </span>
> </label>

#### Автоувеличивающаяся текстария {#complex-textarea}

Аналогично, если использовать сложный инпут + текстарию, то довольно просто сделать автоувеличивающуюся по контенту текстарию с дополнительными внутренними элементами вроде иконки очистки:

> <label class="field">
>     <span class="field-reset"></span>
>     <span class="field-content">
>         <textarea class="input-controller js-autosize" cols="20" rows="8" />
>         <span class="input-view"> </span>
>     </span>
> </label>
>
> <div class="example:field-reset"></div>


### Инпут с ошибкой {#input-error}

Если нужно отобразить состояние неверно заполненного инпута, можно воспользоваться скином `input_error`

    skin: input_error

> <div>
>     <input class="input is-wrong" type="text" value="Буквы" />
>
>     <span class="dropdown dropdown_to_right">
>         <span class="dropdown-tail"></span>
>         <span class="dropdown-content text">
>             Тут что-то не так заполнено!
>         </span>
>     </span>
> </div>
>
> <div class="example:input_error"></div>

### Центрированный инпут {#centered-input}

Чтобы центрировать контент инпута достаточно добавить параметр `centered`:

    skin: input centered

> <input class="centered-input" type="text" value="Буквы" />
>
> <div class="example:centered-input"></div>

Для сложных инпутов с плейсхолдерами пока простого пути нет, нужно просто прокинуть `text-align: center` куда нужно. Когда будет полноценный отдельный скин для сложных инпутов, станет попроще.
