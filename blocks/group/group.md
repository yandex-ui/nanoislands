If you need to have groups consisting of any number of buttons and/or inputs in any order, you can mix them with `nb-group-…` global classes to achieve the desired behaviour.

### Group wrapper

* `class` - `['nb-group']`

To make sure your group's items won't wrap you would want to use `.nb-group` class for their wrapper.

### Group items

* `class` - `['nb-group-item']`

This is a class for generic group items, when you don't know their position. Such classes would work only if all the items have the same wrapper and have no other blocks in it.

### Specific group items

* `class` - `['nb-group-start']`
* `class` - `['nb-group-middle']`
* `class` - `['nb-group-end']`

When you have other blocks before or after the grouped items, or you can't have a common wrapper for them, or they're placed not in straight order in the HTML, you could use more specific classes, telling where in the group your block is.

### Complex group items

In some cases you would have the button/input which visuals you'd like to adjust to be nested inside other blocks and at the same time you couldn't tell which item is first and which is last.

In that case you could use complex group items:

* `class` - `['nb-complex-group-item']`
* `class` - `['nb-complex-group-item-subject']`

The `.nb-complex-group-item` class should be placed at the top level items, while the `nb-complex-group-item-subject` one should be placed at the actual inputs/items inside.