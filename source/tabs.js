/**
 * jsTabs. No jQuery. Do not work with IE
 * https://github.com/onikienko/jsTabs
 * @version 0.2.2
 *
 * @param {string} tabs_id   ID of Tabs container with #
 * @constructor
 */
function Tabs(tabs_id) {
    this.html = document.querySelector(tabs_id);
    this.nav_links = this.html.querySelectorAll('.tabs_nav li a');
    var self = this;
    this.nav_links_array = (function () {
        var arr = [];
        [].forEach.call(self.nav_links, function (el) {
            arr.push(el.hash);
        });
        return arr;
    }());
    this.activate_();
}
Tabs.prototype = {
    toggle: function (tab_name) {
        if (tab_name && tab_name.indexOf(this.nav_links_array)) {
            [].forEach.call(this.html.querySelectorAll('.tabs_content div'), function (el) {
                el.style.display = ('#' + el.id === tab_name) ? 'block' : 'none';
            });
            [].forEach.call(this.nav_links, function (el) {
                if (el.hash === tab_name) {
                    el.parentNode.classList.add('active');
                } else {
                    el.parentNode.classList.remove('active');
                }
            });
        }
    },
    events_: function () {
        var self = this;
        self.html.querySelector('.tabs_nav').addEventListener('click',  function (e) {
            var hash = e.target.hash;
            if (hash && self.nav_links_array.indexOf(hash) !== -1 && !e.target.parentElement.classList.contains('active')) {
                self.toggle(hash);
            }
            e.preventDefault();
        }, false);
    },
    activate_: function () {
        if (this.nav_links_array.length > 0) {
            var hash = window.location.hash;
            if (!hash || this.nav_links_array.indexOf(hash) === -1) {
                hash = this.nav_links[0].hash;
            }
            this.toggle(hash);
            this.events_();
        }
    }
};