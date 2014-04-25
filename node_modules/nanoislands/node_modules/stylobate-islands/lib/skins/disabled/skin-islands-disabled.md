---
---

## disabled

    skin: disabled

Используется для визуального отключения какого-либо блока.

> <a class="button is-disabled">
>     <span class="button-content">Отключённая кнопка</span>
> </a>
>
> <div class="example:disabled"></div>

По умолчанию добавляет `pointer-events: none`, так что отпадает необходимость сбрасывать стили состояний. Если зачем-то нужно ловить ивенты на таком элементе, нужно использовать параметр `with-events`.
