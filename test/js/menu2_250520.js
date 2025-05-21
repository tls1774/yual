$(document).ready(function(){
    /* 스크롤 여부, 브라우저 넓이 */

    let scrolling //브라우저가 스크롤 된 정도를 저장 
    let win_w //브라우저 넓이 
    let device_status //지금 현재 넓이가 pc인지 / 모바일인지 저장
    
    scroll_chk() //문서가 로딩되었을 때 1번 실행
    $(window).scroll(function(){ //스크롤 할 때 마다 1번씩 실행 
        scroll_chk() //함수의 실행
    })//$(window),scroll

    device_chk() //문서가 로딩되었을 때 1번 실행
    $(window).resize(function(){ //브라우저가 리사이즈 할 때 마다 1번씩 실행 
        device_chk()//함수의 실행
    }) //$(window).resize

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    } //function scroll_chk

    function device_chk(){
        win_w = $(window).width()

        if(win_w > 1024){ //1025 이상 
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }

    /*
        pc버전에서만
        메뉴에 마우스를 오버하면
        >> header .gnb .gnb_wrap ul.depth1 > li
        1.header에 menu_over 클래스 추가 
        2. 오버한 1차메뉴 li에 over 클래스 추가 
        header .gnb .gnb_wrap ul.depth1 > li

        언제 메뉴의 오버상태를 해제 할가나..
        header밖에 나가면 메뉴 사라지게 ...

    */
      
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        //마우스를 오버했을때만 실행 (pc일때만 실행)
        if(device_status == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        }
    })

    $(' header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child > a ').on('focusout', function(){
        if(device_status == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        }
    })


    /*
        모바일에서만 
        메뉴 열기 버튼을 클릭하면 header에 menu_open 클래스 추가
         >> header .gnb .gnb_open
        메뉴 닫기 버튼을 클릭하면 header에 menu_open 클래스 삭제 
         >> header .gnb .gnb_close
    */

         $('header .gnb .gnb_open').on('click' , function(){
            $('header').abbClass('menu_open')
        })
        $('header .gnb .gnb_open').on('click' , function(){
            $('header').removeClass('menu_open')
        })
    

})//$(document).ready

