<<<<<<< Updated upstream
=======
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
        clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
        //     return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
    },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },

        });
      
        /********************** header fixed  *********************/   

        scroll_chk() //문서가 로딩되었을때 1번 실행
        $(window).scroll(function(){ //스크롤 할때마다 1번씩 실행
            scroll_chk() //함수의 실행
        })//$(window).scroll

        device_chk() // 문서가 로딩되었을때 1번 실행
        $(window).resize(function(){ //브라우저가 리사이즈 할때마다 1번씩 실행
            device_chk() //함수의 실행
        })//$(window).resize

        function scroll_chk(){
            scrolling = $(window).scrollTop()
            //console.log(scrolling)
            if(scrolling > 0){
                $('header').addClass('fixed')
            }else{
                $('header').removeClass('fixed')
            }
        }//function scroll_chk

        function device_chk(){
            win_w = $(window).width()
            
            if(win_w > 1024){ //1025 이상
                device_status = 'pc'
            }else{
                device_status = 'mobile'
            }
            //console.log(device_status)
        }


        /*
            pc버전에서만 
            메뉴에 마우스를 오버하면 
            >> header .gnb .gnb_wrap ul.depth1 > li 
            1. header에 menu_over 클래스 추가
            2. 오버한 1차메뉴 li에 over 클래스 추가
            header .gnb .gnb_wrap ul.depth1 > li

            header 밖에 나가면 메뉴 사라지게
        */

        
        $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
            //마우스를 오버했을때만 실행 (pc일때만 실행)
            if(device_status == 'pc'){
                // console.log('오버했다!!')
                $('header').addClass('menu_over')
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
                $(this).addClass('over')
            }//if
        })
        $('header').on('mouseleave', function(){
            if(device_status == 'pc'){
                $('header').removeClass('menu_over')
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            }
        })

        $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child > a').on('focusout', function(){
            if(device_status == 'pc'){
                $('header').removeClass('menu_over')
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            }
        })
        

})
        //함수의 선언 
        function resize_chk(){
            window_w = $(window).width()
            //console.log(window_w)
            if(window_w > mobile_size){ //1024보다 크면
                device_status = 'pc'
            }else{ //같거나 작으면
                device_status = 'mobile'
            }
            //console.log(device_status)
        }
        function scroll_chk(){
            scroll_prev = scrolling //스크롤값을 다시 계산하기 전에 이전값을 prev에 저장
            scrolling = $(window).scrollTop()
            // console.log(scroll_prev, scrolling)
            if(scrolling > 0){ //조금이라도 스크롤 됐으면
                $('header').addClass('fixed')
                if(scrolling > scroll_prev){
                    //console.log('내려가는 중!!!!!!!!!!!!!!')
                    $('header').addClass('gnb_up')
                }else{
                    //console.log('올라가는 중!!!!!!!!!!!!!!')
                    $('header').removeClass('gnb_up')
                }
            }else{ //0일때
                $('header').removeClass('fixed')
            }
        }

>>>>>>> Stashed changes
