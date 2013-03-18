'use strict';

define(
    [
      'components/flight/lib/component'
    ],
    function(defineComponent) {
      return defineComponent(pageHeight);

      function pageHeight() {
        console.log('wtf');
        this.defaultAttrs({
          'section': '.section'
        });

        this.after('initialize', function() {
          var height = window.innerHeight;
          $('.b-section').css({'min-height': height});
        });
      }
    }
);
