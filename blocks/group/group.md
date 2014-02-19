# Groups

If you need to have groups consisting of any number of buttons and/or inputs in any order, you can mix them with `nb-group-…` global classes to achieve the desired behaviour.

## `nb-group-item`

    'class': ['nb-group-item']

This is a class for generic group items, when you don't know their position. Such classes would work only if all the items have the same wrapper and have no other blocks in it.

## `nb-group-start`, `nb-group-middle` and `nb-group-end`

    'class': ['nb-group-start']

    'class': ['nb-group-middle']

    'class': ['nb-group-end']

When you have other blocks before or after the grouped items, or you can't have a common wrapper for them, or they're placed not in straight order in the HTML, you could use more specific classes, telling where in the group your block is.