'use strict';

define(
    [
      'components/flight/lib/component'
    ],
    function(defineComponent) {
      return defineComponent(navigationScroller);

      function navigationScroller() {
        this.defaultAttrs({
          scrollTime: 500
        });

        this.init = function() {
          this.on('navigationClick', this.scroll);
        };

        this.scroll = function(ev, opts) {
          // this probably bad...
          var position = $(opts.selector).position();

          $.scrollTo({top: position.top - 190, left: 0}, this.attr.scrollTime);
        };

        this.after('initialize', this.init);
      }
    }
);
