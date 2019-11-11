$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.home-slider-container', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 3000,
        },
        effect: "fade"
    })

    // Gallery init
    lightGallery(document.getElementById('galler'), {
        thumbnail:true
    });

    // Publications gallery
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 15,
        slidesPerView: 6,
        // loop: true,
        // freeMode: true,
        // loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        // loop:true,
        // loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });  
});