import flipbookInitializer from './js/flipbook-initializer.js';
import flipbookDesktopTemplate from './js/flipbook-desktop-template.js';
import flipbookMobileTemplate from './js/flipbook-mobile-template.js';
import { flipbookResponsiveListener } from './js/listeners.js';

const smallBp = matchMedia('(min-width: 576px)');
const setContentVariable = (mql) => { 
  if (mql.matches){ // GREATHER THAN 576px
    document.querySelector('.js-main-content').innerHTML = flipbookDesktopTemplate();
    flipbookInitializer('desktop');
  } else{ //LOWER THAN 576px
    document.querySelector('.js-main-content').innerHTML = flipbookMobileTemplate();
    flipbookInitializer('mobile');
  }
};
setContentVariable(smallBp);
smallBp.addEventListener('change', setContentVariable)
window.addEventListener('resize', () => setContentVariable(smallBp));
// RESPONSIVE LISTENER
flipbookResponsiveListener();

const nextPage = () => {
  $('.flipbook').turn('next');
  // $('.flipbook').turn('previous');
  // $('.flipbook').turn('page', 4);
}
