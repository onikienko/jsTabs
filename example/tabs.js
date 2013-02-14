/**
 * jsTabs. No jQuery. Do not work with IE
 *
 * https://github.com/onikienko/jsTabs
 * @version 0.1
 *
 * @param {string} tabs_id   ID of Tabs container 
 * @constructor
 */
function Tabs(tabs_id) {
    this.html = document.querySelector('#' + tabs_id);
    this.nav = this.html.querySelector('.tabs_nav');
    this.nav_links = this.nav.querySelectorAll('li a');
    this.nav_links_array = [];
    this.content = this.html.querySelectorAll('.tabs_content div');
    this.window_hash = window.location.hash;
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
    toggle: function (active) {
        [].forEach.call(this.content, function (el) {
            el.style.display =  ('#' + el.id === active) ? 'block' : 'none';
        });
        [].forEach.call(this.nav_links, function (el) {
            if (el.hash === active) {
                el.parentNode.classList.add('active');
            } else {
                el.parentNode.classList.remove('active');
            }
        });
    },
    events: function () {
        var self = this;
        self.nav.onclick = function (e) {
            var hash = e.target.hash;
            if (hash && self.nav_links_array.indexOf(hash) !== -1 && !e.target.parentElement.classList.contains('active')) {
                self.toggle(hash);
            }
            return false;
        };
    },
    activate: function () {
        var hash;
        this.findHashList();
        if (!this.window_hash || this.nav_links_array.indexOf(this.window_hash) === -1) {
            hash = this.nav_links[0].hash;
        } else {
            hash = this.window_hash;
        }
        this.toggle(hash);
        this.events();
    }
};