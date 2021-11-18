import 'animate.css';

import './scss/styles.scss';
import HTMLDesktopTemplate from './templates/swiper-desktop.template.html';
import HTMLMobileTemplate from './templates/flipbook-mobile.template.html';
import HTMLLoaderTemplate from './templates/loader.template.html';

import { counterListener, mobileListener, hideLoaderListener } from './js/listeners';
import flipbookInitializer from './js/flipbook-initializer';
import swiperInitializer from './js/swiper-initializer';

const smallBp = matchMedia('(min-width: 576px)');
const setContentVariable = (mql) => {
  document.querySelector('.js-main-content').innerHTML = HTMLLoaderTemplate;
  if (mql.matches) { // GREATHER THAN 576px
    // TODO: TO SIMULATE LOADING - IN THE FUTURE FUNCTION WITH CALLBACK
    setTimeout(() => {
      hideLoaderListener(() => {
        document.querySelector('.js-main-content').innerHTML = HTMLDesktopTemplate;
        swiperInitializer();
        counterListener('2022-02-05 12:30:00');
      });
    }, 2000);
  } else { // LOWER THAN 576px
    // TODO: TO SIMULATE LOADING - IN THE FUTURE FUNCTION WITH CALLBACK
    setTimeout(() => {
      hideLoaderListener(() => {
        document.querySelector('.js-main-content').innerHTML = HTMLMobileTemplate;
        flipbookInitializer();
        mobileListener(); // TO RESIZE FIPBOOK
        counterListener('2022-02-05 12:30:00');
      });
    }, 2000);
  }
};
setContentVariable(smallBp);
smallBp.addEventListener('change', setContentVariable);
window.addEventListener('resize', () => setContentVariable(smallBp));
