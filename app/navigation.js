'use strict';

define(
    [
      'components/flight/lib/component'
    ],
    function(defineComponent) {
      return defineComponent(navigation);

      function navigation() {
        this.defaultAttrs({
        });

        this.interceptClicks = function() {
          this.on('click', this.clicker);
        };

        this.clicker = function(ev) {
          ev.preventDefault();

          this.trigger('navigationClick', {selector: ev.target.getAttribute('href')});
        };

        this.after('initialize', function() {
          this.interceptClicks();
        });
      }
    }
);
