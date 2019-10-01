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

    bakery.testimonialSlider = function() {
        if( $('.testimonial__slider') ) {
            $('.testimonial__slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                prevArrow: '<div class="prev"><i class="icon flaticon-left-arrow"></i></div>',
                nextArrow: '<div class="next"><i class="icon flaticon-right-arrow"></i></div>'
            });
            $('.testimonial__slider').slickAnimation();
        }
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        bakery.typedJS();
        bakery.isotope();
        bakery.fancyBox();
        bakery.testimonialSlider();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });
    $(window).on('resize', function() {
    });
});