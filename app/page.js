'use strict';

define(

  [
    'app/navigation',
    'app/navigation_scroller'
  ],

  function(
    Navigation,
    NavigationScroller
  ) {

    function initialize() {
      Navigation.attachTo('.nav a');
      NavigationScroller.attachTo(document);
    }

    return initialize;
  }
);
