$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2600,

    autoplaySpeed: 1200,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
        1200: {
            items: 1,
        },
    },
});

$(document).ready(function() {
    $(".counter").counterUp({
        delay: 30,
        time: 1900,
    });
});

AOS.init();