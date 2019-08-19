jQuery(function ($) {
    "use strict";

    const bakery = window.bakery || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    bakery.typedJS = function() {
        // TypedJS
        let typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            loop: true,
            showCursor: false,
            startDelay: 1000,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 500,
        });
    };


    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        bakery.typedJS();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });
    $(window).on('resize', function() {
    });
});