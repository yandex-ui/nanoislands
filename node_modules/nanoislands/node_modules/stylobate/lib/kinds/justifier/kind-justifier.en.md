---
---

## Full-width justify

    kind: justifier

This kind is used in those cases you'd need to align some UI blocks justified on each line (even single).

### Helper

To redefining the helper (`::after` by default), you could use the `-helper` element.

    kind: justifier (-helper '&-helper')

### Обнуление последней строчки

Sometimes you'd need to remove the gap from the last line, in this case you could use the hacky `_no-last-line` param that would nulify the font-size and line-height on the block:

    kind: justifier _no-last-line
