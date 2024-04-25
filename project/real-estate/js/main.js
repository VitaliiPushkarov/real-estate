$(function(){
    /* Navigation Logo Scroll Top */
    $('.logo').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            },350);
    });
    new Swiper(".swiper-gallery",{
        slidesPerView: 1,
        spaceBetween: 15, 
        pagination:{
            el: ".swiper-pagination",
            clickable: true,
        },
        preloadImages: true,
        lazy: true,
        loop: true,
    });
    Fancybox.bind('[data-fancybox="images"]',{
        thumbs: false,
        hash: false,
        touch: false,
        animationEffect: "fade",
    });
    Fancybox.bind('[data-fancybox="presentationModal"]',{
        animationEffect: "fade"       
    });
    var num = 0;
    $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navbar').addClass('fixed');
    } else {
        $('.navbar').removeClass('fixed');
    }
    });
    AOS.init({
        duration: 1300,
        delay: 200,
    });
    
    $('#open form').validate();
});

