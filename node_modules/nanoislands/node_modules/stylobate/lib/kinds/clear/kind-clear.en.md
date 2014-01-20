---
---

## Clearfix

    kind: clear

This kind is used for a clearfix. We use [microclearfix](http://nicolasgallagher.com/micro-clearfix-hack/), so by default we have clearing elements both at the top and at the bottom.

### Clearfix elements

By default the block is cleared using pseudos, if you'll want to have the clearfix at another element, you could override its selector using `-before` and `-after` elements:

    kind: clear (-after '& > .clearfix')

### Clearfix from one side

If you need to use clearfix only at one side, you need to disable it from another by overriding `-before` or `-after` element:

    kind: clear (-before '')

    kind: clear (-after '')

