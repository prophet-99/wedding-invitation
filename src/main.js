import flipbookInitializer from './js/flipbook.js';
import { flipbookResponsiveListener } from './js/listeners.js';

flipbookInitializer();
flipbookResponsiveListener();

const nextPage = () => {
  $('.flipbook').turn('next');
  // $('.flipbook').turn('previous');
  // $('.flipbook').turn('page', 4);
}
