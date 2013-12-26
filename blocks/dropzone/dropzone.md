## Yate

### Default dropzone

    nb-dropzone()

* 'button' : {  
    'size': 's'  
    'type': 'file'  
    'theme': 'pseudo'  
    'class': 'nb-dropzone__button'
} — default options for "Select file" button

### Options

* type: modal — render
* class: ['foo' 'bar' 'baz'] — (optional) additional classes
* head: ... — drop zone title
* text: ... — text to the left of the "Select file" button
* button: false — render dropzone without 'select file' button

NB: See 'button' documentation for the list of the corresponding options.

### Example

Drop zone with all elements possible text:

```
    nb-dropzone({
       'head': 'Upload files'
       'text': 'To upload, drag files here or'
       'button' : {
           'size': 's'
           'content': 'select files'
           'type': 'file'
           'theme': 'pseudo'
           'class': 'nb-dropzone__button'
       }
    })
```

Minimal dropzone:

```
    nb-dropzone({
        'text': 'Drop files here to upload them'
        'button': 'false'
    })
```

No-affordance dropzone — just empty rectangle (don't do this!):

```
    nb-dropzone({
        'button': 'false'
    })
```

### Initialization

Initialize nb block on DOM node:
```

    nb.block(node);

```

Initialize all nb blocks with class '_init' within DOM node

```

    nb.init(node);

```

### Dropzone methods

None declared.