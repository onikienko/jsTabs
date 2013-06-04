jsTabs
======
Simple javaScript Tabs with no jQuery.

I use it only for Google Chrome extensions.

- Don't work in IE

[Русская документация] (https://github.com/onikienko/jsTabs/blob/master/readme.ru.md)

Usage
-----
HTML:

```html

    <link rel="stylesheet" type="text/css" href="tabs.css">
    <script type="text/javascript" src="tabs.js"></script>

    <!-- Tabs begin -->

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

    <!-- Tabs end -->

```

javaScript:

```javaScript

    //Init. '#main_tabs' is your Tabs container id's. The first tab will be activated.
    var main_tabs = new Tabs('#main_tabs');

    //make tab2 active
    main_tabs.toggle('#tab2');

    //Add onToggle event handlers
    main_tabs.onToggle(function (tab_name) {
        console.log ('It fires on every tab');
        console.log ('Fired on ' + tab_name);
    });

    //Or bind handlers only for some tabs
     main_tabs.onToggle({
        "#tab1": function (tab_name) {
            console.log('On ' + tab_name);
        }
     });

     //You may bind onToggle event handlers during Tabs init
     var new_tabs = new Tabs('#tabs_id', function (tab_name) { });

     //Or
     var another_tabs = new Tabs('#another_tabs_id', {
        "#another_tab2": function () {},
        "#another_tab5": function () {}
     });

```

[demo](http://sbox.pp.ua/jstabs/demo.html)

[Русская документация] (https://github.com/onikienko/jsTabs/blob/master/readme.ru.md)

[GitHub](https://github.com/onikienko/jsTabs)
