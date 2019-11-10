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
    lightGallery(document.getElementById('gallery'), {
        thumbnail:true
    }); 
});