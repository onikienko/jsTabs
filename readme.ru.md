jsTabs
======
Простые javaScript табы (вкладки). 

- без jQuery
- событие onToggle (после переключения вкладки)
- любое кол-во групп табов на одной странице
- ссылки на табы (example.com/tabs.html#tab2)
- IE 10+

[Demo](http://sbox.pp.ua/jstabs/demo.html)

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
                <div id="tab1">Tab1 content</div>
                <div id="tab2">Tab2 content</div>
            </div>
        </section>

    <!-- конец табов -->
```

javaScript:

```javaScript

    //Инициализизация.'#main_tabs' - id контейнера с табами. Первый таб активный.
    var main_tabs = new Tabs('#main_tabs');

    //Можно переключиться на любой таб
    main_tabs.toggle('#tab2');

    //Можно добавить обработчики событий, которые будут выполняться при переключении табов (сразу после активации таба)
    main_tabs.onToggle(function (tab_name) {
        console.log ('Эта функция запускается после каждого переключения табов');
        console.log ('Сработало при переключении на ' + tab_name);
    });

    //Или задать обработчики для некоторых табов. Для этого надо передать объект {"#tab_name" : handler_function}
     main_tabs.onToggle({
        "#tab1": function (tab_name) {
            console.log('Срабатывает только при переключении на ' + tab_name);
        },
        "#tab2": function (tab_name) {
            console.log('Это обработчик для  ' + tab_name);
        }
     });

     //Можно добавить обработчики при создании табов
     var new_tabs = new Tabs('#tabs_id', function (tab_name) { 
        /*Будет выполняться после каждого переключения табов*/ 
     });

     //Или так
     var another_tabs = new Tabs('#another_tabs_id', {
        "#another_tab2": function () {},
        "#another_tab5": function () {}
     });

```

[Demo](http://sbox.pp.ua/jstabs/demo.html)

[GitHub](https://github.com/onikienko/jsTabs)



