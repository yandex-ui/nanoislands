---
---

## Fill

    kind: fill

Kind for “filling” elements using absolute positioned other ones.

### Sides params

This kind can accept up to four numeric params (like `padding` or `margin`), for corresponding sides (props `top`, `right`, `bottom` и `left`):

    kind: fill 10px 20px 30px 40px

You can use shorthands just like for `padding`:

    kind: fill 10px 20px

Negative values are accepted too, of course:

    kind: fill -1px

### Background param

You can pass a color or url string as a param. The color passed this wat would become the element's background:

    kind fill red

String would be wrapped with `url()` and would get the default bg styles:

    kind fill 'pattern.png'

_(we need to have there an option to write `url()`, otherwise we would have troubles with resolvers)_

Colors and images could be combined:

    kind fill -1px rgba(0,0,0, 0.5) 'pattern.png'

#### Params for the repeating of the bg image

By default the image won't be repeated, you can override it using the appropriate extra params:

    kind fill 'pattern.png' repeat

    kind fill 'pattern.png' repeat-x
    
    kind fill 'pattern.png' repeat-y
