//اسلایدر محصولات
$(".ModuleProduct1").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    rtl:true,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
// blog slider
$(".Moduleblogs").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    rtl:true,
    autoplay: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
// product detailes pagee
$(".psp_slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    rtl:true,
    autoplay: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1,
      
        }
    }
});

