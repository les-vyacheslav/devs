import {scrollLocker} from "./modules/scroll-locker.js";
import {headerScrollObserver} from "./modules/scroll-observer.js";
import {burger} from "./modules/burger.js";
import {popupsMaker} from "./modules/popups-maker.js";
import {labelLinksMaker} from "./modules/label-links.js";
//import {phoneMask} from "./modules/masks.js";
import {clickScroller} from "./modules/click-scroller.js";
import {clickAnimator} from "./modules/click-animation.js";
 

//----- Scroll locking ----------------------------------------------------------------------

new scrollLocker({
    lockingElementClassName: '.observing', 
    lockedClassName: '.observing_locked',
    intersectingClassName: '.observing_shown', 
    unlockDelay: 1000,
}).init();

//-------------------------------------------------------------------------------------------

//----- Header scroll -----------------------------------------------------------------------

new headerScrollObserver({
    elementClassName: '.header',
    scrolledClassName: '.header_scroll',
}).init();

//-------------------------------------------------------------------------------------------

// ----- Burger -----------------------------------------------------------------------------
  
new burger({
    buttonClassName: '.burger',
    activeButtonClassName: '.burger_active',
    menuClassName: '.menu__body',
    activeMenuClassName: '.menu__body_active',
    menuLinkClassName: '.menu__link',
    lockPaddingElementClassName: '.lock-padding',
    showHideTime: 300,
}).init();

//-------------------------------------------------------------------------------------------

// ----- Popups -----------------------------------------------------------------------------

popupsMaker.init();

//-------------------------------------------------------------------------------------------

// ----- Phone mask -------------------------------------------------------------------------

//phoneMask('.form__input_phone-mask');

//------------------------------------------------------------------------------------------- 

//----- Click scroller ----------------------------------------------------------------------

/* 
new clickScroller({
    linkAttributeName: 'data-goto',
    headerClassName: '.header__wrapper',
    maxHeaderHeight: 50,
    lockedSections: [
        {
            sectionClassName: '.observing', 
            lockedClassName: '.observing_locked', 
            unlockDelay: 1000,
        },
    ],
}).init(); 
*/

//-------------------------------------------------------------------------------------------

//----- Click animation ---------------------------------------------------------------------

new clickAnimator([
    {
        clickableElementClassName: '.start-page__google',
        clickedElementClassName: '.start-page__google_clicked',
    },
    /* {
        clickableElementClassName: '.burger',
        clickedElementClassName: '.burger_clicked',
    },
    {
        clickableElementClassName: '.header__link',
        clickedElementClassName: '.header__link_clicked',
    },
    {
        clickableElementClassName: '.footer__link',
        clickedElementClassName: '.footer__link_clicked',
    },
    {
        clickableElementClassName: '.title-screen__slider-button',
        clickedElementClassName: '.title-screen__slider-button_clicked',
    },
    {
        clickableElementClassName: '.category-title-screen__slider-button',
        clickedElementClassName: '.category-title-screen__slider-button_clicked',
    },
    {
        clickableElementClassName: '.button',
        clickedElementClassName: '.button_clicked',
    },
    {
        clickableElementClassName: '.popup__close',
        clickedElementClassName: '.popup__close_clicked',
    }, */
]).init();

//-------------------------------------------------------------------------------------------
