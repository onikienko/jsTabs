jsTabs
======
Простые javaScript табы jQuery.

Данное решение я использую только в расширениях Google Chrome. Отсюда минусы:

- Не работает в IE
- Нельзя делать ссылки на табы в пределах одной страницы (только из внешней страницы)

Использование
-------------
В html файле:

```html
<!-- подключение -->
    <link rel="stylesheet" type="text/css" href="tabs.css">
    <script type="text/javascript" src="tabs.js"></script>

    <!-- начало табов -->

        <section id="main_tabs">
            <ul class="tabs_nav">
                <li><a href="#tab1">Tab 1</a></li>
                <li><a href="#tab2">Tab 2</a></li>
            </ul>

            <div class="tabs_content">
                <div id="tab">Tab1 content</div>
                <div id="tab">Tab2 content</div>
            </div>
        </section>

    <!-- конец табов -->
```

Инициализировать табы для такого html нужно так:

```javaScript
var main_tabs = new Tabs('#main_tabs');  //'main_tabs' - your Tabs container id's
    main_tabs.toggle('#tab2'); //make tab2 active (first tab by default)
```

[demo](http://sbox.pp.ua/jstabs/demo.html)

[GitHub](https://github.com/onikienko/jsTabs)



