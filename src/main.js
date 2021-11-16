import './scss/styles.scss';
import HTMLDesktopTemplate from './templates/flipbook-desktop.template.html';
import HTMLMobileTemplate from './templates/flipbook-mobile.template.html';

import { mobileListener } from './js/listeners';
import flipbookInitializer from './js/flipbook-initializer';
import swiperInitializer from './js/swiper-initializer';

const smallBp = matchMedia('(min-width: 576px)');
const setContentVariable = (mql) => {
  if (mql.matches) { // GREATHER THAN 576px
    document.querySelector('.js-main-content').innerHTML = HTMLDesktopTemplate;
    swiperInitializer();
  } else { // LOWER THAN 576px
    document.querySelector('.js-main-content').innerHTML = HTMLMobileTemplate;
    setTimeout(() => {
      flipbookInitializer();
      // RESIZE FIPBOOK
      mobileListener();
    },
    0);
  }
};
setContentVariable(smallBp);
smallBp.addEventListener('change', setContentVariable);
window.addEventListener('resize', () => setContentVariable(smallBp));
