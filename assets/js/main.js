jQuery(function ($) {
    "use strict";

    const bakery = window.bakery || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    bakery.typedJS = function() {
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

    bakery.isotope = function() {
        if( $('.demo__grid').length ) {
            // Using Isotope
            const $grid = $('.demo__grid').isotope({
                itemSelector: '.box-demo',
                layoutMode: 'fitRows',
            });

            $('.demo__filter .button-group').on('click', 'button', function() {
                let filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            $('.button-group > .button-item').on('click', function() {
                $('.button-group > .button-item').removeClass('active');
                $(this).addClass('active');
            });

            // Using Hover Direction
            $('.demo__grid > .box-demo').each(function() {
                $(this).hoverdir({
                    hoverDelay: 50,
                    inverse : true
                })
            });
        }
    };

    bakery.fancyBox = function() {
        $('[data-fancybox="gallery"]').fancybox({
            loop: true,
            protect: true, // Bảo vệ hình ảnh khi nhấp chuột phải
            buttons: [
                "zoom",
                "fullScreen",
                "share",
                "thumbs",
                "close"
            ]
        });
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        bakery.typedJS();
        bakery.isotope();
        bakery.fancyBox();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });
    $(window).on('resize', function() {
    });
});