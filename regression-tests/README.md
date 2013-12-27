Тесты
=====

Запустить тесты можно так:
```sh
cd test
npm install
make test commit="origin/master"
```
На место `commit` подставьте интересующий вас коммит.

В файле `report.html` будет лежать страничка с результатами тестов.
Этот файл получается через yate-преобразование из файла `report.json` на `tools/report.yate`

Для работы тестов нужна бибилотека `imagemagick`. Но в любой момент можно отказаться от этой зависимости,
если написать собственную диффалку картинок на canvas. Те, что я находил не пашут нормально. 

На сервере `ufo.dev.yandex.net` все настроено.
```sh
ssh ufo.dev.yandex.net
mkdir ufo && cd ufo
git clone git@github.yandex-team.ru:UFO/nanoislands.git
cd nanoislands
npm install
git submodule update --init
cd test
npm install
make test commit="origin/master"
```
Теперь можно посмотреть отчет на странице `http://nanoislands.<username>.ufo.dev.yandex.net/test/report.html`

Как это работает
================

Файлы `test/block/**.test.js` представляют собой commonjs модули, в которых описываются тесты:

```js
// test/block/button/button.test.js
module.exports = {
    'Default hovered button': {
        tpl: 'button.yate',
        args: {
            content: 'Button',
            class: '_hover'
        }
    }
}
```

Здесь говорится, запустить шаблон `tpl: 'button.yate'` с аргументами `args: { ... }`.

```
match / content {
    @style="width: 100px; height: 100px"
    nb-button(.args)
}
```

Полученный html будет скриншотится и сравниваться в будущем.

Путь до шаблона рассчитывается относительно самого файла с тестами. В данном случае это будет `test/block/button/button.yate`

Перед началом тестов в директорию `origin` кладется дерево репозитория на момент коммита,
указанного в переменной `commit` (`make test commit="a4b3353"`)

Затем все модули с тестами собираются в большой массив, по которому генерируюются html'ки в директорию `html`.
В это директории получаются файлы `1.html` и `1.origin.html`.
Где `1.html` это страничка полученная из текущего репозитория, а `1.origin.html` полученная из указанного коммита.

Дальше в несколько потоков запускается скриншотилка `tools/screenshot`, которая делает скриншот всех страниц.
Затем через `imagemagic` все скриншоты сравниваются, и запускается генертор отчета. Очень важно, чтобы полученные
скриншоты были одного размера. Для этого необходимо в тестовом шаблоне yate задать жесткие размермеры контейнера:

```
@style="width: 100px; height: 100px"
```

Размер выбирается исходя из ваших пожеланий.

