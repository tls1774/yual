$(document).ready(function(){
  var window_w

  function device_chk(){
      window_w = $(window).scrollTop();
  }
  
  device_chk();

  $(window).scroll(function(){
      device_chk();
      if (window_w > 0) {
          $('.scroll_inner').addClass('off');
          $('.scroll_inner').html("<p>Thank You!<br>Keep going</p>");
      }
      if (window_w >= 1400) {
          $('.gnb ul li').removeClass('on');
          $('.gnb ul .gnb3').addClass('on');
      }
      if (window_w >= 450 && window_w < 1400) {
          $('.gnb ul li').removeClass('on');
          $('.gnb ul .gnb2').addClass('on');
          
      }
      if (window_w < 450) {
          $('.gnb ul li').removeClass('on');
          $('.gnb ul .gnb1').addClass('on');
      }
      if (window_w <= 0) {
          $('.about .inner ul li').removeClass('animation');
          $('.skill .progress').removeClass('on');
          $('.page .inner > a').removeClass('on');
          $('.about').removeClass('on');
      }
      if (window_w > 600 && window_w < 1100) {
          $('.about .inner ul li').addClass('animation');
          $('.skill .progress').addClass('on');
          $('.about').addClass('on');
      }
      if (window_w > 1600) {
          $('.page .inner .content1').addClass('on');
      }
      if (window_w > 2050) {
          $('.page .inner .content2').addClass('on');
      }
      if (window_w > 2500) {
          $('.page .inner .content3').addClass('on');
      }
  })
  $('.gnb .gnb1').on('click', function(){
      $('html, body').animate({
          scrollTop: 0
      }, 500)
  })
  $('.gnb .gnb2').on('click', function(){
      $('html, body').animate({
          scrollTop: 850
      }, 500)
  })
  $('.gnb .gnb3').on('click', function(){
      $('html, body').animate({
          scrollTop: 1770
      }, 500)
  })
  console.log("%c Hello, World ! ", "background-color:#212121; color: #fff; font-weight:bold; font-size:120%; padding: 4px;")
})