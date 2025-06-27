$(document).ready(function(){

            /*************************** header 와 메뉴 : 시작 *************************
        * pc인지 모바일인지 구분 - 브라우저 넓이로.. 
        * 스크롤값 계산 
        * 공통사항 : 브라우저가 스크롤되면 OR header에 오버하면 header에 fixed 클래스를 추가
        * PC일때 : 마우스를 오버한 li에만 over 클래스 추가
        * 모바일때 : 메뉴열기를 클릭하면 header에 menu_open 클래스 추가
        *           1차메뉴를 클릭하면 (하위메뉴가 있는 1차메뉴만)  클릭한 li에 open 클래스 추가
        *****/

        const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        el: '.visual .paging', /* 해당 요소의 class명 */
        // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
        //     return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
    },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_wrap button.btn_prev',  
        },
        });
        $('.visual .btn_wrap button.btn_stop').on('click', function(){
            //console.log('일시정지 버튼 클릭')
            visual_swiper.autoplay.stop();  /* 일시정지 기능 */
            $(this).hide() //정지버튼 자신은 숨김
            $('.visual .btn_wrap button.btn_play').show() //재생 나타남
        })
        $('.visual .btn_wrap button.btn_play').on('click', function(){
            //console.log('재생 버튼 클릭')
            visual_swiper.autoplay.start();  /* 재생 기능 */
            $(this).hide() //재생버튼 자신은 숨김
            $('.visual .btn_wrap button.btn_stop').show() //정지버튼이 나타남
        })

        
        



        
})