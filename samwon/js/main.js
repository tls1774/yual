$(document).ready(function(){

    AOS.init({
        offset: 150,
        duration: 1000,
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
    /*********************  lang_open ****************** */
    
        $('.lang_open').click(function(e){
          e.stopPropagation();
          $('.box').toggleClass('active'); // hide 대신 active 토글
        });
      
        $('.box .item').click(function(e){
          e.preventDefault();
          var selected = $(this).text();
          $('.lang_open span').text(selected);
          $('.box').removeClass('active');
        });
      
        $(document).click(function(){
          $('.box').removeClass('active');
        });

    /*************** family site 열고닫기 ****************/

        $('.family_site .family_open').on('click', function () {
            // console.log('!!!!!!!!!!')
            $('.family_site ul').addClass('on');
            $('.family_open').addClass('hide');
            $('.family_close').removeClass('hide');
        });
    
        $('.family_site .family_close').on('click', function () {
            $('.family_site ul').removeClass('on');
            $('.family_close').addClass('hide');
            $('.family_open').removeClass('hide');
        });


});
