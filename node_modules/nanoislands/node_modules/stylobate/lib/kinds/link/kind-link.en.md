---
---

## Links

    kind: link

This is a default kind for links. By default such links have an underline, colored in blue and become red on hover. You can configure all of this using params.

### Underline

To remove an underline from link just pass an empty `_underline` modifier:

    kind: link (_underline '')

And if you'll need to underline a link only in some condition, pass the corresponding selector to this modifier:

    kind: link (_underline '&:hover')

### Hover

By default links become red on hover, you can remove this behaviour by passing empty selector to the `_hover` modifier:

    kind: link (_hover '')

### Changing the color

To change the color of the link you can just pass this color as a param:

    kind: link #22C

This would change the color of the link, while if you'd want to change the color on hover, you need to pass that color inside the `_hover` modifier after the selector:

    kind: link #22C (_hover '&:hover' #D00) 

### Pseudo-link

To make a dotted pseudo-link, you can pass `_pseudo` modifier to this kind:

    kind: link _pseudo

### Complex links

Sometimes you could want to add underline only to some inner element, like when adding some icons. In that case you can use the `_underline` or `_pseudo` modifiers on the inner element:

    kind: link (_underline '&-inner')

    kind: link (_pseudo '&-inner')
