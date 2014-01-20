---
---

## Groups

“Group” is a several elements combined visually into one. Such elements often go one after another without any gaps, like an input with button etc.

Base `group` kind does almost nothing except for the nonwrapping behaviour:

    kind: group

### Elements of the group

Elements could be divided into two types: abstract `group-item` and specific `group-start`, `group-middle` and `group-end`.

Abstract `group-item`, are the shortcuts for the specific ones using the defaulted CSS-selectors `:first-child` and `:last-child`. They could be used if the content of the group is unified:

    kind: group-item

If the visual order would be different from their order and nesting in DOM, it would be better to use specific ones:

    kind: group-start

    kind: group-middle

    kind: group-end

Those elements could be easily configured: by default those elements don't have border-radius between them and they're also overlap each other by one pixel. To disable the removal of radiuses you can use `no-radius` param, to disable the overlap, you can use the `no-margin` one.

More that that, if the visual side of the element is actually inside it, you could use the specific selector to say where the radiuses should be removed (and you can mark this way more than one element):

    kind: group-item '& > .complex-button-inner, & > .complex-button-inner:before'
