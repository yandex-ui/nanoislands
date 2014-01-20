---
---

## Button

_(write there something about extending pill)_

    kind: button

The default kind for buttons. Gives all the necessary styles for the button, including all the needed resets.

### Disabling reset

When applied to the element that won't be **ever** a `<button>` tag, you could use the `no-reset` param to give the button all the layout styles it need, but without all the resets.

    kind: button no-reset

### Vertical alignment

By default buttons have `vertical-align: baseline`, you can override that using one of the special params:

    kind: button middle
    
    kind: button top

    kind: button bottom

