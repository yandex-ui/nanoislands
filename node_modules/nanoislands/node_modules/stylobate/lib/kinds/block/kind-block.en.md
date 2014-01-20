---
---

## Block

    kind: block

The standard kind for any simple block. Makes block to have `display: block` and relative positioning.

### Modifying positioning

By default `kind-block` have relative positioning. In rare cases when you'll need to have it strictly static, you can use the `static` param:

    kind: block static

### Inline-blocks

By default `kind-block` have `display: block`, in case you'll need an element to be in inline context, use `inline` param:

    kind: block inline

This would give the block `display: inline-block` and some default vertical alignment.

#### Vertical alignment of inline blocks

By default inline blocks have `vertical-align: top`, in case you'll need to change this, you can use one of the following params:

    kind: block inline baseline
    
    kind: block inline middle

    kind: block inline bottom
