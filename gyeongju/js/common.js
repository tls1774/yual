$(document).ready(function(){
    // console.log("알랄라")


    /************ 모바일 메뉴 열고 닫기 ********** */
    $('header .header_body .gnb .gnb_open').on('click', function(){
        $('.header_body').addClass('menu_open')
    })
    $('header .header_body .gnb .gnb_close').on('click', function(){
        $('.header_body').removeClass('menu_open')
    })

    /************ 모바일 2차 메뉴 열고 닫기 ********** 
     * 지금현재 메뉴가 열려있는지 닫혀있는지 구분 (li에 open클래스 있는지 유무)
     * 메뉴가 열려있으면 - li에 open클래스를 삭제, 2차 메뉴 접기
     * 메뉴가 닫혀있으면 - li에 open클래스를 추가, 2차 메뉴 열기
    */
    $('header .header_body .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            //console.log('눌린다 눌린다!!!!!!!!!!!!!')
            e.preventDefault()
            menu_open = $(this).parents('li').hasClass('open') 
            //console.log(menu_open)
            if(menu_open == true){ //메뉴가 열려있으면
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{ //닫혀있으면
                $('header .header_body .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .header_body .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
            }
        } 
    })
})