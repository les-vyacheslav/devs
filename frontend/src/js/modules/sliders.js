import Swiper, {Navigation, Pagination, EffectFade, Autoplay, Scrollbar} from 'swiper';

// ----- Title slider ----------------------------------------------------------------

export function swiperTitleSlider() {

    if (!document.querySelector('.title-screen__slider')) return;
    if (!document.querySelector('.title-screen__slider-pagination')) return;
    if (!document.querySelector('.title-screen__slider-prev-button')) return;
    if (!document.querySelector('.title-screen__slider-next-button')) return;

    const titleScreenSlider = new Swiper('.title-screen__slider', {
        modules: [Navigation, Pagination, EffectFade, Autoplay],
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        slidesPerView: 1,
        spaceBetween: 0,
        watchOverflow: true,
        speed: 1500,
        loop: true,
        navigation: {
            nextEl: '.title-screen__slider-next-button',
            prevEl: '.title-screen__slider-prev-button',
        },
        pagination: {
            el: '.title-screen__slider-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return `<div class="` + className + `"><span>`+ ++index +`</span></div>`;
            },
        },
        breakpoints: {
        
        }
    });

    titleScreenSlider.on('slideChangeTransitionStart', function () {
            
        const slides = document.querySelectorAll('.title-screen__slider .swiper-slide');
        const activeSlide = document.querySelector('.title-screen__slider .swiper-slide-active');
        const ativeSlideNumber = activeSlide.getAttribute('data-swiper-slide-index');

        slides.forEach(slide => {

            slide.classList.remove('title-screen__slide_active');

            if (slide.getAttribute('data-swiper-slide-index') === ativeSlideNumber) {

                slide.classList.add('title-screen__slide_active');

            }

        });

    });

}
//------------------------------------------------------------------------------------------- 

// ----- Category title slider --------------------------------------------------------------

export function swiperCategoryTitleSlider() {

    if (!document.querySelector('.category-title-screen__slider')) return;
    if (!document.querySelector('.category-title-screen__slider-pagination')) return;
    if (!document.querySelector('.category-title-screen__slider-prev-button')) return;
    if (!document.querySelector('.category-title-screen__slider-next-button')) return;

    const titleScreenSlider = new Swiper('.category-title-screen__slider', {
        modules: [Navigation, Pagination, EffectFade, Autoplay],
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        slidesPerView: 1,
        spaceBetween: 0,
        watchOverflow: true,
        speed: 1500,
        loop: true,
        navigation: {
            nextEl: '.category-title-screen__slider-next-button',
            prevEl: '.category-title-screen__slider-prev-button',
        },
        pagination: {
            el: '.category-title-screen__slider-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return `<div class="` + className + `"><span>`+ ++index +`</span></div>`;
            },
        },
        breakpoints: {
        
        }
    });

    titleScreenSlider.on('slideChangeTransitionStart', function () {
            
        const slides = document.querySelectorAll('.category-title-screen__slider .swiper-slide');
        const activeSlide = document.querySelector('.category-title-screen__slider .swiper-slide-active');
        const ativeSlideNumber = activeSlide.getAttribute('data-swiper-slide-index');

        slides.forEach(slide => {

            slide.classList.remove('category-title-screen__slide_active');

            if (slide.getAttribute('data-swiper-slide-index') === ativeSlideNumber) {

                slide.classList.add('category-title-screen__slide_active');

            }

        });

    });

}
//------------------------------------------------------------------------------------------- 

// ----- Category cards slider --------------------------------------------------------------

export function swiperCategoryCardsSlider() {

    if (!document.querySelector('.category-catalog__cards')) return;
    if (!document.querySelector('.category-catalog__cards-scrollbar')) return;

    let categoryCardsSlider = null;
    const mediaQueryDesktop = window.matchMedia('(min-width: 768.02px)');

    initDestroySlider();

    window.addEventListener('resize', initDestroySlider);

    function initDestroySlider() {

        if (mediaQueryDesktop.matches) {

            if (categoryCardsSlider) {

                categoryCardsSlider.destroy();
                categoryCardsSlider = null;

            }

        } else {

            if (!categoryCardsSlider) {

                categoryCardsSlider = new Swiper('.category-catalog__cards', {
                    modules: [Navigation, Pagination, Scrollbar],
                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                    slidesPerView: 1.2,
                    spaceBetween: 15,
                    watchOverflow: true,
                    speed: 500,
                    preloadImages: false,
                    grabCursor: true,
                    scrollbar: {
                        el: '.category-catalog__cards-scrollbar',
                        draggable: true,
                    },
                    breakpoints: {
                        481: { 
                            slidesPerView: 2.2,
                        },
                    }
                });

            }

        }
    
    }

}
//-------------------------------------------------------------------------------------------

