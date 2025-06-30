
let device_status //pc인지 모바일 구분하는 값
let scrolling //브라우저가 스크롤 된 값
let scroll_prev //이전에 스크롤 된값
let window_w //브라우저의 넓이 값
let mobile_size = 1024 //모바일로 변경되는 사이트
let menu_open //모바일에서 사용할 메뉴가 열렸는지 여부

$(window).scroll(function(){//브라우저가 스크롤 될때마다 1번 실행
    //console.log('브라우저가 스크롤 된다 된다!!!!!!!!')
    scroll_chk()
})
$(window).resize(function(){//리사이즈 될때마다 1번실행
    //console.log('브라우저 크기 변한다!!!!!!!!!!')
    resize_chk() //함수의 실행
})
$(document).ready(function(){//문서가 로딩 되고 단 1번 실행

     /* TOP 버튼을 클릭하면 상단으로 스크롤 */
     $('footer .top').on('click' , function(){
        // console.log('클릭됨 탑탑!!')
        $('html, body').animate({
            scrollTop: 0
        }, 500)
     })   

    //console.log('로딩됐다!!!!!!!!!!!!!!!!')
    resize_chk() //함수의 실행
    scroll_chk()

    /************ 모바일 메뉴 열고 닫기 ********** */
    $('header .gnb .gnb_open').on('click', function(){
        console.log('오픈!')
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    /************ 모바일 2차 메뉴 열고 닫기 ********** 
     * 지금현재 메뉴가 열려있는지 닫혀있는지 구분 (li에 open클래스 있는지 유무)
     * 메뉴가 열려있으면 - li에 open클래스를 삭제, 2차 메뉴 접기
     * 메뉴가 닫혀있으면 - li에 open클래스를 추가, 2차 메뉴 열기
    */
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            //console.log('눌린다 눌린다!!!!!!!!!!!!!')
            e.preventDefault()
            menu_open = $(this).parents('li').hasClass('open') 
            //console.log(menu_open)
            if(menu_open == true){ //메뉴가 열려있으면
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{ //닫혀있으면
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
            }
        } 
    })

})