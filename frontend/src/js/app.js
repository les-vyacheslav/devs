//import {phoneMask} from "./modules/masks.js";
import {clickAnimator} from "./modules/click-animation.js";
 

// ----- Phone mask -------------------------------------------------------------------------

//phoneMask('.form__input_phone-mask');

//------------------------------------------------------------------------------------------- 

//----- Click animation ---------------------------------------------------------------------

new clickAnimator([
    {
        clickableElementClassName: '.page__google',
        clickedElementClassName: '.page__google_clicked',
    },
    {
        clickableElementClassName: '.page__text-link',
        clickedElementClassName: '.page__text-link_clicked',
    },
    {
        clickableElementClassName: '.page__agreement-link',
        clickedElementClassName: '.page__agreement-link_clicked',
    },
    {
        clickableElementClassName: '.page__button',
        clickedElementClassName: '.page__button_clicked',
    },
]).init();

//-------------------------------------------------------------------------------------------
