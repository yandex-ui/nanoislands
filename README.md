# Library for Yandex corporate style [![NPM version](https://badge.fury.io/js/nanoislands.png)](http://badge.fury.io/js/nanoislands) [![Build Status](https://travis-ci.org/yandex-ui/nanoislands.png?branch=master)](https://travis-ci.org/yandex-ui/nanoislands)
##Demo
[http://yandex-ui.github.io/nanoislands/](http://yandex-ui.github.io/nanoislands/)

## Tests

```

npm test

```

## Build package

```

vim Changelog.md
vim package.json
git commit -a -m 'v...'
git tag 'v...'
git push origin master
git push origin 'v...'
make publish

```

## Documentation
* [Button](https://github.com/yandex-ui/nanoislands/blob/master/blocks/button/button.md)
* [Checkbox](https://github.com/yandex-ui/nanoislands/blob/master/blocks/checkbox/checkbox.md)
* [Input](https://github.com/yandex-ui/nanoislands/blob/master/blocks/input/input.md)
* [Suggest](https://github.com/yandex-ui/nanoislands/blob/master/blocks/suggest/suggest.md)
* [Select](https://github.com/yandex-ui/nanoislands/blob/master/blocks/select/select.md)
* [Toggler](https://github.com/yandex-ui/nanoislands/blob/master/blocks/toggler/toggler.md)
* [Progress](https://github.com/yandex-ui/nanoislands/blob/master/blocks/progress/progress.md)
* [Popup](https://github.com/yandex-ui/nanoislands/blob/master/blocks/popup/popup.md)
* [Slider](https://github.com/yandex-ui/nanoislands/blob/master/blocks/slider/slider.md)
* [Groups](https://github.com/yandex-ui/nanoislands/blob/master/blocks/group/group.md)
* [Gaps](https://github.com/yandex-ui/nanoislands/blob/master/blocks/gap/gap.md)

### React intergation example

```
<!DOCTYPE html>
<html>
    <head>
        <link type="text/css" rel="stylesheet" href="../nanoislands.css" />

        <script src="../libs/react-with-addons.js"></script>

        <script src="../libs/jquery.min.js"></script>
        <script src="../libs/jquery-ui/jquery-ui.custom.js"></script>
        <script src="../ni.min.js"></script>

        <script>
            $(function () {
                var element = React.render(React.createElement(Island, {
                    type: "checkbox",
                    options: { content: "123", disabled: true },
                    on: {
                        "nb-checked": function () { console.log("checked") },
                        "nb-unchecked": function () { console.log("unchecked") }
                    }
                }), document.body);

                element.block.enable();
            });
        </script>
    </head>
    <body>

    </body>
</html>
```

#### [Changelog](Changelog.md)
