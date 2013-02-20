jsTabs
======
Simple javaScript Tabs with no jQuery.

I use it only in Google Chrome extensions.

- Don't work in IE

Usage
-----
In your html file:

```html
<!--  -->
    <link rel="stylesheet" type="text/css" href="tabs.css">
    <script type="text/javascript" src="tabs.js"></script>

    <!-- Tabs begin -->

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
    <!-- Tabs end -->
```

Init Tabs:

```javaScript
var main_tabs = new Tabs('#main_tabs');  //'main_tabs' - your Tabs container id's
    main_tabs.toggle('#tab2'); //make tab2 active (first tab by default)
```

[demo](http://sbox.pp.ua/jstabs/demo.html)

[GitHub](https://github.com/onikienko/jsTabs)