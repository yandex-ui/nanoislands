##### 0.6.3 — path

###### Fixes
* fix #478 — popup#setContent fixes for nb-popup-menu

##### 0.6.2 — path

###### Fixes
* fix #477 — ошибка при выборе элемента саджеста

##### 0.6.1 — path

###### Fixes
* fix #476 — В случае сложного инпута в nb-suggest, саджест не совпадает с ним по ширине и высоте.
* fix #466 — Примеры popup противоречат его документации

##### 0.6.0 — "Catspaw"
* [Suggest] — `attrsInput` -> `input.attrs`
* [Suggest] — #474 Пробрасывать поля hint и error из nb-suggest во вложенный инпут

###### Fixes
* fix #475 — Не работает ::-ms-clear в ИЕ для инпута
* fix #471 — У radio button событие nb-changed срабатывает только один раз

##### 0.5.3 — patch

###### Fixes
* fix #470 — Возможность ограничивать высоту попапа
* fix #468 — Добавить иконки android и apple
* fix #467 — Поддержать свойства appendTo и/или class в error у блока input
* fix #461 — Input – при вызове hideError() теряется фокус с инпута
* fix #463 — Не забирать пустой gif с yandex.st
* fix #458 — Input — nb-changed — коллбек не получает блок при пользовательском вводе


##### 0.5.2 — patch

* update es-shim

##### 0.5.1 — patch

* [Popup] popup without animation

###### Fixes
* [Popup] click on scroll shouldn't close popup
* fix #379 — Trigger `nb-closed` on nb-popup closed by pressing escape button
* fix #456 — Не открывается модальный попап на демостраничке
* fix #452 — Не очищается очередь анимации попапов

##### 0.5.0 — "The Doomsday Machine"

###### Breaking changes
* [Popup] Now 'nb-opened' and 'nb-closed' event fires after animation. Also 'nb-open-started' and 'nb-close-started' events has been added.

###### Fixes
* fix #449 — [Input] destroy снимает все обработчики "keydown" c "document"
* fix #454 — при нажатии на popup-toggler до загрузки страницы получаем ошибку

##### 0.4.32 — patch
Update es5-shim to v4.0.x

###### Fixes
* fix #447 — Квадратные кнопки
* fix #446 — Нужна возможность прокинуть класс в item у select-а
* fix #444 — [Bug] JsError in popup when used #open method  bug
* fix #441 — Проблема инициализации arrow
* fix #442 — Пропускаем неопределённые блоки при обработке события

##### 0.4.31 — patch
moved yate to dependencies since it is used in docs
 
##### 0.4.30 — patch

###### Fixes
* #274 — Input – при вызове showError() теряется фокус с инпута 
* #393 — Option to show reset only when there is something to clear 

##### 0.4.29 — patch

###### Fixes
* #428 — При выборе опции в nb-select контрол подставляет неверный текст, если есть 2 опции с одним и тем же текстом bug
* #422 — Нет АПИ для дизейбла popup-toggler
* #418 — Аргументы обработчика nb-input
 
##### 0.4.27  — patch
* new documentation in /docs/

###### Fixes
* #423 — Нет крестика у немодального попапа
* #427 — Возвращаем класс _nb-is-hidden после destroy  

##### 0.4.26  — patch

###### Fixes
* fix #426 — Supporting inputs in ie8 — workaround for the missing oninput event  
* fix #424 — XSS in multiline input   
* fix #421 — Синхронизировать фон для автозаполненного сложного поля для ввода  
* fix #419 — Модальный попап закрывается при клике на скроллбар  

##### 0.4.25  — patch

###### Fixes
* fix #414 — [Input] Fixes sticked letters together  .

##### 0.4.24  — patch

###### Fixes
* fix #375 — [Popup] Nb-popup without tail.
* fix #410 — [Input] Hint не учитывает наличия leftContent и отображается поверх.

##### 0.4.23  — patch

###### Fixes
* fix #400 — Incorrect position of popup's arrow on extreme positions
* fix #395 — Error popup opened with showError on an input receives focus

##### 0.4.22  — patch
* Some additional header flexibility

##### 0.4.21  — patch

###### Fixes
* fix #392 — [Input] Order of reset and right part of an input
* fix #391 — [Select] Отображения иконки в поле nb-select
* fix #390 — [Input] Second argument for inputs' nb-changed question
* fix #389 — [Popup-menu] Horizontal padding inconsistent.
* fix #388 — [Toggler] XS size for inputs and togglers enhancement
* fix #386 — [Icon] Rename icon view-tile to view-tiles

##### 0.4.20  — patch

###### Fixes
* fix #384 — Yet another icons addition
* fix #383 — Update to latest es5-shim because of warning

##### 0.4.19  — patch

###### Fixes
* fix #380 — При попытке управления попапом с клавиатуры ошибка в консоли
* fix #378 — Некорректное отображение саджеста с пользователями
* fix #374 — Content field for slider

##### 0.4.17  — patch

###### Fixes
* fix #376 — Не тригерится submit по enter-у в инпуте внутри формы
* fix #373 — Add some new icons
* fix #372 — Active sub-option isn't selected

##### 0.4.16  — patch

###### Fixes
* fix #369 — Дважды тригерится focusin на инпуте 

##### 0.4.15 — patch

###### Fixes
* fix #366 — IE9 - при зажатии кнопки мыши на инпуте фокус смещается на другой элемент
* fix #365 — Не всплывают события focusin/focusout у инпута
* fix #364 — Ложная фокусировка на программно отключенном селекте

##### 0.4.14 — patch
* fix #362 — Importing nanoislands.styl throws when project already has stylobate or stylobate-islands
  * If you use nanoislands.styl file for custom build, 
    you should import stylobate and stylodate-islands files before it. 
    Like this:
    
    ```css
    @import "path_to_stylobate"
    rem = rem_px
    @import "path_to_stylobate-islands"
    set-skin-namespace('islands')
    ```
    
###### Fixes
* fix #363 — Отключенный селект ловит фокус(IE, FF)
* fix #359 — Проблемы с несколькими инпутами в одном попапе (IE9)

##### 0.4.13 — patch
* stylus, stylobate, stylobate-islands update

###### Fixes
* fix #361 — Уметь добавлять несколько классов кнопке закрытия попапа

##### 0.4.12 — patch
* tabindex attribute have been added

##### Fixes
* fix #358 — ns-select. Fix XSS in #_setText() 
* fix #355 — Неверно работает клавиатурная навигация по элементам
* fix #352 — При скролле дропдаун в открытом модальном попапе не сохраняет положение относительно вьюпорта
* fix #351 — Срабатывает навигация по табу для отключенного селекта - 2

##### 0.4.11 — patch

###### Fixes
* fix #349 — [Bug] nb-select don't open, when used the modal popup closing

##### 0.4.10 — patch

###### Fixes
* fix #346 — [Chromium] Bug with content spacing in nb-select dropdown bug
* fix #345 — [Opera 12.16] Bug selects view bug

##### 0.4.8 — patch

##### Fixes
* fix #343 — Fix a small pseudo select
* fix #342 — При попытке сериализовать пустой селект получаю &nbsp;
* fix #341 — Срабатывает навигация по табу для отключенного селекта

##### 0.4.7 — patch

###### Fixes
* fix calculation of position for popups tail
* fix #338 — [IE9] Checkboxes and selects arrows is broken

##### 0.4.6 — patch

###### Fixes
* fix #337 — nb-radio-button потерялся размер small bug
* fix #336 — Fix small select size

##### 0.4.5 — patch

###### Fixes
* fix #332 — Попап содержит отступы для внутрилежащего контента
* fix #330 — Бордер на img без src

##### 0.4.3 — patch
* Support server-side rendering in yate externals

###### Fixes
* fix #327 — Кастомные иконки
* fix #326 — Метод open для nb-popup-modal выбрасывает ошибку...

##### 0.4.1 — patch

###### Fixes
* fix #324 — Add opportunity to change frame collision of the popup enhancement
* fix #323 — Выравнивание контента по центру в кнопках-ссылках
* fix #322 — Для чекбоксов не применяется размер "s" bug
* fix #321 — Лишнее срабатывание событий для input bug
* fix #320 — Рамка вокруг иконок в кнопках

##### 0.4.0 — "The Apple"
* CSS class naming has been changed.
* All private css classes and yate functions has been prefixed with `_`, fix #313 — Разделить классы блоков на публичные и приватные

###### API changes
* Gaps API has been changed
* [Icon] now accepts only object, fix #273 — nb-icon size couldn't be set
* [Button] setText -> setContent, fix #284 — Close XSS in button#setText
* [Popup]
  * popup.open() don't close already opened popup
  * popup.setContent() and popup.getContent()
* [Popup toggler] toggler.toggle() added

###### Fixes
fix #313 — Разделить классы блоков на публичные и приватные
fix #284 — Close XSS in button#setText
fix #273 — nb-icon size couldn't be set
fix #317 — Add opportunity to change content of popup (tooltip)
fix #316 — Исправление повторного позиционирования открытого попапа

##### 0.3.17 — patch

###### Fixes
fix #300 — Input – При изменении фокуса с помощью "Tab" не исчезает выделение
fix #297 — [IE] Vertical align: middle for .nb-checkbox__input and .nb-checkbox__label

##### 0.3.16 — patch
stylobate-islands update to 0.26.x
yate update to  0.0.70

###### Fixes
fix #295 — Add the ability to separate content in selects, as in the popups.
fix #263 — Псевдо-кнопка должна быть видна на тёмном фоне


##### 0.3.15 — patch
stylobate-islands update to 0.25.1
stylobate update to 0.23.2

###### Fixes
Autoclose option for the modal popup
fix #286 — Bug to the group's view of the select dropdown

##### 0.3.13 — patch

###### Fixes
fix build

##### 0.3.12 — patch

###### Fixes
fix #281 — Клик на открытый селект должен его закрывать
fix #279 — Reset input clear button in IE10

##### 0.3.11 — patch

###### Fixes
* fix #272 — Too small popup's close link
* fix #275 — Input – Нужны события ввода текста
* fix #277 — Событие внутри nb-popup-menu
* Refactored nb-arrow to use stylobate
* fix focus/blur for complex input
* Run tests under Karma
* MIT License

###### 0.3.10 — patch

###### Fixes
* nb-select: Fix adding selected item to source
* nb-select: Fix double "source-changed" event on addToSource
* gray color for togglers text

##### 0.3.9 — patch
* Added opportunity apply to suggest a custom input field.

###### Fixes
* nb-select js error in ie8 on disable/enable fixed
* nb-select #setState escapes text twice
* nb-select must save state after #removeFromSource()

##### 0.3.8 — patch
##### Fixes
* enable/disable must affect <select> node
* fix XSS in nb-suggest #_setText()
* fix XSS in nb-suggest #setSource()

##### 0.3.7 — patch
###### Fixes
* Shift the method 'getYateModuleName' to a nb.Block instance.
* [Input] Input.blur doesn't work
* [Button] Fix disabled state for pseudo and file buttons

##### 0.3.6 — patch
###### Fixes
* [Checkbox] Emulates "change" event for IE<9
* [Select] IE<9 must degrade to native contol

##### 0.3.5 — patch
###### Fixes
* [Checkbox] fix checkbox empty string value rendering
* adds opacity IE fallback

##### 0.3.4 — patch
###### Fixes
* [Checkbox] Checkbox without `@attr` now returns "on" for #getValue()
* [Input] Input doesn't trigger events on #setValue() if new value is the same

##### 0.3.2 — patch
* [Popup] refactor — isOpen() method
* [Input] error optional params

###### Fixes
* Input Error fixes
* add !important to prevent style override
* IE < 8 doesn't support node.hasAttribute method. Use $(node).prop

##### 0.3.1 — patch
* [nb-gap](https://github.com/yandex-ui/nanoislands/blob/master/blocks/gap/gap.md) added
* not minimazed libs/jqery-ui.cudstom.js

###### Fixes
* fix #203 — Не всегда с первого раза переключается чекбокс в ИЕ9


##### 0.3.0 — "Mirror, Mirror"
* add nb-nodeset-to-xml helper

###### Fixes
* fix #220
* nb-input must fire nb-changed event on setValue
* fix #217
* Added pointer-events: none for .is-disabled
* fix #214

###### API changes
* Added group classes
* [Input]
  * `placeholder` renamed to `hint`


##### 0.2.6 — patch

###### Fixes
* setMaxheight before the menu is displayed first time
* fix meta X-UA-Compatible
* nb-select is hidden in IE8 fixed

##### 0.2.5 — patch

###### Fixes
* jquery form serialize checkbox bug fix
* Now radio checkboxes with the same name behave correctly

##### 0.2.4 — patch

###### Fixes
* fix #206 — Ломается выпадушка селекта после повторной инициализации

##### 0.2.3 — patch

###### Fixes
* Fixed conflict with nib

##### 0.2.2 — "The Changeling"

###### Fixes
* select duplicate title fixed
* disabled select don't open now
* fix #202 — Двойной сlick на checkbox'e
* Popup closing on mobile fixed
* fix #198 — Popup's nb-closed event not working


###### API changes
* [Input]
  * `placeholder` field and methods



##### 0.2.1

###### Fixes
* fix #183 — Complex textarea inputs
* fix #189 — Uncaught SyntaxError: Invalid regular expression: /\s+/: Stack overflow
* fix #28 — The Input field view is incorrect (reset: true, size: ’s’)

###### API changes
* [Input]
  * `reset` field and method
  * `leftContent` and `rightContent` filds
  * complex `multiline` input
* [Checkbox]
  * Type `button`



##### 0.2.0
* **unify jquery-ui files' name**
    * /libs/jquery-ui/jquery-ui.custom.css
    * /libs/jquery-ui/jquery-ui.custom.js

###### Fixes
* #175 — Popup doesn't hide when click out of the toggler for the second time
* #178 — Размер опций селекта с темой `pseudo` должен соответствовать настройке селекта `size`

###### API changes
*  [Popup]
  * New JS API methods

##### 0.1.35

###### Fixes
* #171 — Select: Неправильный id у ноды select
* #172 — При вызове enable/disable селекта, мы должны вызывать enable/disable jUI-автокомплита

###### API changes
*  [Select]
  * Select options group
  * Селект с иконками в опциях

##### 0.1.34
* stylobate "0.22.x"

##### 0.1.33

* stylobate "0.21.x"
* stylobate-islands "0.21.x"
* stylus "0.42.x"
* **All event has been renamed for unification.** Check documentation.

###### Fixes
* fix #133 — Возможность вывода ошибки.
* fix #161 — Для nb-button с иконкой надо иметь возможность задать иконку как текст
* fix #160 — Унификация событий
* Toggler focus/blur fixes
* checkbox.getValue() should return empty string for inpt without value

###### API changes
* !!All event was renamed for unification!! Check documentation
* #163 Событие change в блок input

##### 0.1.32

* update jQuery UI to v1.10.4
* getType() method in all controls

###### Fixes
* fix #85 — Нужна возможность добавить scroll для списка элементов в select-е
* fix #87 — Autofocus for first menu item in popup-menu
* fix #152 — Выбор пункта в select'e генерирует клик на выпадушке
* fix #150 — Restored the broken width for the wide selects
* fix #151 — z-index for close button in modal popup
* fix #148 — How do I determine block type?

###### API changes
* [Checkbox]
  * tabindex param
  * value param
  * toggle() method
* [Select]
  * maxHeight param

##### 0.1.31

###### Fixes
* fix #136 — We need to add method of the nb-select for updating position of the select's dropdown.
* fix #142 — Select does not aligns with text baseline
* fix #141 —  Fixed the size of the dropdowns for small selects and pseudo-selects
* fix #139 — jQuery UI slider's events in nb-slider

###### API changes
* [Select]
  * added open()
  * added close()
  * added render()
* [Slider]
  *  jQuery UI slider's events


##### 0.1.30
###### Fixes
* fix #132
* fix #128
* fix #127
* fix #130
* fix #131
* Select's dropdown z-index bug fixed

###### API changes
* [Select]
  * setName()
  * `nb-select_source-changed` event renamed to `nb-select_source-set`
* [Progress] JS API
* [Slider] `nb-slider_changed` event renamed to `nb-slider_value-set`
* [Input]
  * type multiline
  * ghost mode

##### 0.1.29
###### Fixes
* Change container of the select's dropdown.
* set nb.button disabled on init
* nb.checkbox must fires block events when change state
* Parameters which used with html() in internal realisation now have "content" postfix
* Fixed nb-slider's text is broken in FF

###### API changes
* [All] All "-getted" events renamed to "-get". Check documentation.
* [Toggler] JS API refactoring. Check documentation
* [Input] destroy() setName()
* [Select] Added:
    * getName()
    * addToSource()
    * removeFromSource()
* [Popup] .title -> .titleContent
* [Checkbox] .text -> .content
* [Suggest] in source item .label -> labelContent
* [Slider] Yate, JS API + docs

##### 0.1.28

* fix for #83 — name attr
* nb.select return common js Array
* fix for #86 nb-select text bug
* nb-checkbox use $.fn.prop

##### 0.1.27

* fix #81 — Блоку Select нельзя задать ширину
* [API: Select] nb.select methods getSource and setSource have to operate the same data

##### 0.1.26

* Unittests suit
* es5-shim added
* JShint + jscs + codestyle fixes
* [API: Select]
    * API fixes
    * getSource, setSource methods
    * item.selected has boolean type
    * docs
    * fix #75 — nb.select Одинаковые @id и @name - это плохо
    * fix #54 — nb.select Empty select block if no selected items in options
    * fix #73 — nb-checkbox никак нельзя найти через nb.find()
* [API: Input]
    * get proper this.value and this.text on init
    * fix #76 nb.input.getValue() returns this.value, not input.value
* Arrow Fix background for Firefox
* Externals declaration moved to nanoislands.yate
* merged external.yate and blocks.yate

##### 0.1.25

* [API: Checkbox] events, methods, docs
* [API: Input] refactoring: events, methods, docs
* [API: Select] refactoring: events, methods, docs
* .mod attr with roundremoved

##### 0.1.24

* [API: Button] Skin for promo button — 'theme': 'promo'
* 'make publish' for npm build in development

##### 0.1.22

* adds nb-select_changed event

##### 0.1.21

* Replaced menu-separators with s-i
* Updates for the newest s-i
* Using stylobate-islands skin for suggests
* Using stylobate-islands skin for dropdowns
* Using stylobate-islands skin for select
* Fix for suggest width bug
* [API: Button] Events and methods have been refactored
* [API: Toggler] Events and methods have been refactored
* [API: Select] Events and methods have been refactored
* Add toggler's doc

##### 0.1.20
 * [API: Suggest] Events and methods have been refactored
 * Disable/Enable events added to slider
 * Position popup off its base positioning property
 * Attrs.title added to file input

##### 0.1.19
 * Upload, attention icons
 * Droppable added in jQuery UI build

##### 0.1.18
 * Stylobate-islands update. v0.16.9

##### 0.1.17
 * Reposition fixed popup on window resize
 * Fixed js for popups in IE8

##### 0.1.16
 * Add .close method to suggest
 * Added static param to nb-input options
 * Fixed checkboxes in IE8

##### 0.1.15
* Stylobate update. IE8 input fixes.

##### 0.1.14
* IE8 js fixes. Bind polyfill added
* Removed global img reset
* Global classes for block margins

##### 0.1.13

* Simple and complex inputs
* Stylobate update

##### 0.1.12
* nb-button-old removed
* nanoisnands.yate.js was removed because this file usless. We can't compile project's yate and NI's yate separately.
* /blocks/nanoisnands.yate was moved to /nanoislands.yate
* print icon

##### 0.1.11
* Fix color for links in popup-menu
* Fix whitespace in radio-button block

##### 0.1.10
* added separator in popup
* recalculate fixed popups offsets

##### 0.1.9
* disabled checkbox

##### 0.1.8

* Fix <input type="search"/> appearence
* Now additional mods for popup will be added to the wrapper
* position for tooltip fix
* fixes to paranja

##### 0.1.7
* Add collision detection to selects

##### 0.1.6
* Removed console.log in input-group

##### 0.1.5
* New icons
* Update stylobate

##### 0.1.4
* Fixes for toggler

##### 0.1.3
* Toggler added

##### 0.1.2
* [API: Button yate] New nb-button(object) instead nb-button-old(nodeset)
* [Visual] Add dark button skin

##### 0.1.1
* [API: Popup yate] Now you can add attr to title/content/buttons. Example: "buttons": { "data": [...] , "class": "..." }

##### 0.1.0
* More or less stable version. Trying to start versioning process.
