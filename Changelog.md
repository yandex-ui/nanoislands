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
