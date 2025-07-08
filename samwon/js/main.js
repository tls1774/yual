$(document).ready(function(){

    AOS.init({
        offset: 150,
        duration: 500,
        easing: 'ease',
    });

    const visual_swiper = new Swiper('.visual .swiper', {
        autoplay: {  
        delay: 5000,
        disableOnInteraction: true,
        },
        effect: "fade",
        loop: true,
        navigation: {  
        nextEl: '.visual .ctrl_wrap button.btn_next',
        prevEl: '.visual .ctrl_wrap button.btn_prev',
        },
    });

});
