$(document).ready(function(){
   
    /*      ###########            Visual swiper 연결 : 시작       ##########          */
    const visual_swiper = new Swiper('.swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap button.btn-next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap button.btn-prev',  
        },
    });
    // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    // visual_swiper.autoplay.start();  /* 재생 기능 */

    $('.visual .ctrl_wrap button.btn-stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        // console.log('정지버튼클릭')
        $(this).hide()
        $('.visual .ctrl_wrap button.btn-play').show()
    })
    $('.visual .ctrl_wrap button.btn-play').on('click', function(){
        // console.log('재생버튼')
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap button.btn-stop').show()
    })
    /*      ###########       Visual swiper 연결 : 끝      ##########     */

    /*      ###########      news swiper 연결 : 시작      ##########     */

    const news_swiper = new Swiper('.swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    /*      ###########      news swiper 연결 : 끝       ##########     */

    /*      ###########      biz의 list에 마우스 오버 이벤트 : 시작    ##########    */
    $('.biz .list ul li').on('mouseenter' , function(){
        $('.biz .list ul li').removeClass('on')
        $(this).addClass('on')
    })

    /*      ###########      biz의 list에 마우스 오버 이벤트 : 끝    ##########    */
})