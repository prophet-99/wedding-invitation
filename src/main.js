import './scss/styles.scss';
import HTMLDesktopTemplate from './templates/swiper-desktop.template.html';
import HTMLMobileTemplate from './templates/flipbook-mobile.template.html';
import HTMLLoaderTemplate from './templates/loader.template.html';

import { counterListener, mobileListener } from './js/listeners';
import flipbookInitializer from './js/flipbook-initializer';
import swiperInitializer from './js/swiper-initializer';

const smallBp = matchMedia('(min-width: 576px)');
const setContentVariable = (mql) => {
  if (mql.matches) { // GREATHER THAN 576px
    document.querySelector('.js-main-content').innerHTML = HTMLLoaderTemplate;
    swiperInitializer();
    counterListener('2022-02-05 12:30:00');
  } else { // LOWER THAN 576px
    document.querySelector('.js-main-content').innerHTML = HTMLMobileTemplate;
    setTimeout(() => {
      flipbookInitializer();
      mobileListener(); // TO RESIZE FIPBOOK
      counterListener('2022-02-05 12:30:00');
    },
    0);
  }
};
setContentVariable(smallBp);
smallBp.addEventListener('change', setContentVariable);
window.addEventListener('resize', () => setContentVariable(smallBp));
