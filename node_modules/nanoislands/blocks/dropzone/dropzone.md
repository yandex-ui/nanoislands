### Default dropzone
> <div example="dropzone-default"/>
>
> ```yate
> nb-dropzone({
>      'head': 'Upload files'
>      'text': 'To upload, drag files here or '
>      'button' : {
>          'content': 'select files'
>      }
>  })
> ```

* `button`
    * `size` - `s`
    * `type` - `file`
    * `theme` - `pseudo`
    * `class` - `nb-dropzone-button`

### Options

* `id` {string}
* `class` {string} — additional classes['my_class1', 'my_class2'] 
* `type` {string} — `modal` (use with _paranja_)
* `head` {string} — drop zone title
* `text` {string} — text to the left of the "Select file" button
* `button` {nodeset|boolean} — `false()` to render dropzone without 'select file' button; check out _button_ documentation for list of options

