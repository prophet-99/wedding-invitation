import 'animate.css';

import './scss/styles.scss';
import HTMLDesktopTemplate from './templates/swiper-desktop.template.html';
import HTMLMobileTemplate from './templates/flipbook-mobile.template.html';
import HTMLLoaderTemplate from './templates/loader.template.html';

import {
  counterListener, mobileListener, hideLoaderListener,
  capturingQueryParam, renderQRCode,
} from './js/listeners';
import flipbookInitializer from './js/flipbook-initializer';
import swiperInitializer from './js/swiper-initializer';

const smallBp = matchMedia('(min-width: 576px)');
const setContentVariable = async (mql) => {
  document.querySelector('.js-main-content').innerHTML = HTMLLoaderTemplate;
  if (mql.matches) { // GREATHER THAN 576px
    const qrCode = await capturingQueryParam();
    hideLoaderListener(() => {
      document.querySelector('.js-main-content').innerHTML = HTMLDesktopTemplate;
      swiperInitializer();
      counterListener('2022-02-05 12:30:00');
      // INSERTING QR CODE IN THE DOM
      renderQRCode(qrCode);
    });
  } else { // LOWER THAN 576px
    const qrCode = await capturingQueryParam();
    hideLoaderListener(() => {
      document.querySelector('.js-main-content').innerHTML = HTMLMobileTemplate;
      flipbookInitializer();
      mobileListener(); // TO RESIZE FIPBOOK
      counterListener('2022-02-05 12:30:00');
      // INSERTING QR CODE IN THE DOM
      renderQRCode(qrCode);
    });
  }
};
setContentVariable(smallBp);
smallBp.addEventListener('change', setContentVariable);
window.addEventListener('resize', () => setContentVariable(smallBp));
