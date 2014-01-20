---
---

## Content

    kind: content 1em

Kind for “smart” content paddings. Accepts one to four units as params (like `padding` or `margin`), then creates paddings for the sides, but in a way the both and bottom paddings would be collapsing, so they would be overlapped by inner elements' margins.

### Elements for collapsing helpers

By default the collapsing paddings are created using the pseudos (except IE where the ordinal non-collapsing paddings are used), if you'd want to use it on the actual other elements, use the proper `-before` or `-after` elements:

    kind: content 1em (-after '&-helper')

### Limiting sides

If you don'w want a collapsing padding from any side, you can override the element to the empty one, in this case this side would get its padding.

    kind: content 1em (-before '')

