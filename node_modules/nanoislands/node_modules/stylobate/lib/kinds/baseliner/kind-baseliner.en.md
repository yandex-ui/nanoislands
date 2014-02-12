---
---

## Baseliner

Kind for aligning at font's baseline for those blocks where it won't work from the box (like those with `overflow: hidden`).

The base kind just gives the inline-block behaviour with the vertical-align:

    kind: baseliner

The content you want to align, you'll need to place into `-content` element:

    kind: baseliner (-content '&-content')

By default the `-helper` element is created using `:before`, but you could change this:

    kind: baseliner (-helper '&-helper') (-content '&-content')
