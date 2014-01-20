---
---

## Centering

    kind: centering

Kind for aligning something to the middle of another element.

The wrapper with `kind: centering` sets the context for the centering.

### Centered elements

To define which elements would be centered, you need to use `-item` element or call it by yourself:

    .menu
      kind: centering (-item '&-item')

or

    .menu-item
      kind: centering-item

### Centering helper

For centering we use the method using inline-blocks, so we need to have a helper element. It is mapped to `:before` by default, but you can override its selector using `-helper` element:

    .menu
      kind: centering (-helper '&-helper')
    
Or you could call it on another selector by hand:

    .menu-helper
      kind: centering-helper
