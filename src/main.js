import './scss/styles.scss';
import HTMLDesktopTemplate from './templates/flipbook-desktop.template.html';
import HTMLMobileTemplate from './templates/flipbook-mobile.template.html';

import { flipbookResponsiveListener } from './js/listeners';
import flipbookInitializer from './js/flipbook-initializer';

const smallBp = matchMedia('(min-width: 576px)');
const setContentVariable = (mql) => {
  if (mql.matches) { // GREATHER THAN 576px
    document.querySelector('.js-main-content').innerHTML = HTMLDesktopTemplate;
    flipbookInitializer('desktop');
  } else { // LOWER THAN 576px
    document.querySelector('.js-main-content').innerHTML = HTMLMobileTemplate;
    flipbookInitializer('mobile');
  }
};
setContentVariable(smallBp);
smallBp.addEventListener('change', setContentVariable);
window.addEventListener('resize', () => setContentVariable(smallBp));
// RESPONSIVE LISTENER
flipbookResponsiveListener();

// const nextPage = () => {
//   $('.flipbook').turn('next');
//   // $('.flipbook').turn('previous');
//   // $('.flipbook').turn('page', 4);
// }
