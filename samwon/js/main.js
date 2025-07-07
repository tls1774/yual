$(document).ready(function(){

    AOS.init({
        offset: 150,
        duration: 500,
        easing: 'ease',
    });

    let progressFillTimer = null;

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
        on: {
        init: function () {
            updateSlideInfo(this);
            animateProgressBar();
            const activeSlide = this.slides[this.activeIndex];
            const txt_Wrap = activeSlide.querySelector('.txt_wrap');
            if (txt_Wrap) txt_Wrap.classList.add('on');
        },
        slideChange: function () {
            updateSlideInfo(this);
            animateProgressBar();
        },
        slideChangeTransitionStart: function () {
            this.slides.forEach(slide => {
            const txt_Wrap = slide.querySelector('.txt_wrap');
            if (txt_Wrap) txt_Wrap.classList.remove('on');
            });
        },
        slideChangeTransitionEnd: function () {
            const activeSlide = this.slides[this.activeIndex];
            const txt_Wrap = activeSlide.querySelector('.txt_wrap');
            if (txt_Wrap) {
            void txt_Wrap.offsetWidth;
            txt_Wrap.classList.add('on');
            }
        }
        }
    });

    function updateSlideInfo(swiper) {
        const totalSlides = swiper.slides.length - (swiper.loopedSlides || 0) * 2;
        const currentSlide = swiper.realIndex + 1;
        document.querySelector('.visual .current-slide').textContent = currentSlide.toString().padStart(2, '0');
        document.querySelector('.visual .total-slide').textContent = totalSlides.toString().padStart(2, '0');
    }

    function animateProgressBar() {
        const progressFill = document.querySelector('.visual .progress-fill');

        // 기존 애니메이션 정지
        if (progressFillTimer) {
        clearTimeout(progressFillTimer);
        progressFillTimer = null;
        }

        // 1) 즉시 리셋
        progressFill.style.transition = 'none';
        progressFill.style.width = '0%';

        // 2) 다음 프레임에 애니메이션 실행
        requestAnimationFrame(() => {
        progressFill.style.transition = 'width 4s linear'; // Swiper autoplay 시간과 맞춤
        progressFill.style.width = '100%';
        });

        // 3) 다음 슬라이드에서 다시 리셋할 수 있도록 타이머 저장
        progressFillTimer = setTimeout(() => {
        progressFill.style.transition = 'none';
        progressFill.style.width = '0%';
        }, 5000); // 4초 후에 다시 초기화
    }

});
