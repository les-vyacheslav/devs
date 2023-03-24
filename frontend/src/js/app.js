//import {phoneMask} from "./modules/masks.js";
import {clickAnimator} from "./modules/click-animation.js";
 

// ----- Phone mask -------------------------------------------------------------------------

//phoneMask('.form__input_phone-mask');

//------------------------------------------------------------------------------------------- 

//----- Click animation ---------------------------------------------------------------------

new clickAnimator([
    {
        clickableElementClassName: '.start-page__google',
        clickedElementClassName: '.start-page__google_clicked',
    },
    {
        clickableElementClassName: '.start-page__text-link',
        clickedElementClassName: '.start-page__text-link_clicked',
    },
    {
        clickableElementClassName: '.new-account__agreement-link',
        clickedElementClassName: '.new-account__agreement-link_clicked',
    },
    {
        clickableElementClassName: '.start-page__form-button',
        clickedElementClassName: '.start-page__form-button_clicked',
    },
]).init();

//-------------------------------------------------------------------------------------------
