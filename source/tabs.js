/**
 * jsTabs. No jQuery. Do not work with IE
 * https://github.com/onikienko/jsTabs
 * @version 0.2
 *
 * @param {string} tabs_id   ID of Tabs container 
 * @constructor
 */
function Tabs(tabs_id) {
    this.html = document.querySelector(tabs_id);
    this.nav_links = this.html.querySelectorAll('.tabs_nav li a');
    this.nav_links_array = [];
    this.activate();
}
Tabs.prototype = {
    findHashList: function () {
        var i,
            length;
        for (i = 0, length = this.nav_links.length; i < length; i++) {
            this.nav_links_array[i] = this.nav_links[i].hash;
        }
    },
    toggle: function (tab_name) {
        if (tab_name.indexOf(this.nav_links_array)) {
            [].forEach.call(this.html.querySelectorAll('.tabs_content div'), function (el) {
                el.style.display =  ('#' + el.id === tab_name) ? 'block' : 'none';
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
    events: function () {
        var self = this;
        self.html.querySelector('.tabs_nav').onclick = function (e) {
            var hash = e.target.hash;
            if (hash && self.nav_links_array.indexOf(hash) !== -1 && !e.target.parentElement.classList.contains('active')) {
                self.toggle(hash);
            }
            return false;
        };
    },
    activate: function () {
        var hash = window.location.hash;
        this.findHashList();
        if (!hash || this.nav_links_array.indexOf(hash) === -1) {
            hash = this.nav_links[0].hash;
        }
        this.toggle(hash);
        this.events();
    }
};