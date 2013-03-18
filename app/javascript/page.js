'use strict';

define(

  [
    'app/javascript/page_height',
    'app/javascript/navigation',
    'app/javascript/navigation_scroller'
  ],

  function(
    PageHeight,
    Navigation,
    NavigationScroller
  ) {

    function initialize() {
      PageHeight.attachTo(document);
      Navigation.attachTo('.b-nav a');
      NavigationScroller.attachTo(document);
    }

    return initialize;
  }
);
