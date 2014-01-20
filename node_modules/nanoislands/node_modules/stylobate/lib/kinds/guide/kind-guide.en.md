---
---

## Guides

    kind: guide

This kind extend the `fill` one, makeing the block unclickable. To define the inner clickable elements, you'll need to define them using the param element:

    kind: guide (-item '&-item')

_It seems this won't work for now for some reason_

### Params for the used method

By default everythign is done using `visibility` property, if you'll need to use this kind inside another block with visibility, you could use the `visible` param, doing so would do the trick using the `pointer-events` property.

    kind: guide visible
