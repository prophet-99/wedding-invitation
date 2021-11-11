import './scss/styles.scss';
import HTMLDesktopTemplate from './templates/flipbook-desktop.template.html';
import HTMLMobileTemplate from './templates/flipbook-mobile.template.html';

import { mobileListener } from './js/listeners';
import flipbookInitializer from './js/flipbook-initializer';

const smallBp = matchMedia('(min-width: 576px)');
const setContentVariable = (mql) => {
  if (mql.matches) { // GREATHER THAN 576px
    document.querySelector('.js-main-content').innerHTML = HTMLDesktopTemplate;
  } else { // LOWER THAN 576px
    document.querySelector('.js-main-content').innerHTML = HTMLMobileTemplate;
    flipbookInitializer();
    // RESIZE FIPBOOK
    mobileListener();
  }
};
setContentVariable(smallBp);
smallBp.addEventListener('change', setContentVariable);
window.addEventListener('resize', () => setContentVariable(smallBp));
