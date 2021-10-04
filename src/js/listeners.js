export const flipbookResponsiveListener = () => {
  const smallBp = matchMedia('(min-width: 576px)');
  // *SET VARIABLES
  const setContentVariable = (mql) => {
    console.log(mql.matches)
    if (mql.matches){ // GREATHER THAN 576px
      // *RESIZE HERO SECTION
      const mainContainer = document.querySelector('.js-main-content').getBoundingClientRect();
      const firstPageRef = document.querySelector('.page-wrapper[page="1"]').getBoundingClientRect();
      document.querySelector(':root').style.setProperty(
        '--width-hero-section',
        `${mainContainer.width - firstPageRef.width}px`,
      );
      // *RESIZE FIPBOOK
      const flipbookContentRef = document.querySelector('.js-flipbook-content');
      flipbookContentRef.classList.remove('is-mobile');
      const flipbookSize = flipbookContentRef.getBoundingClientRect();
      $('.flipbook').turn('size', flipbookSize.width, flipbookSize.height);
    } else{ //LOWER THAN 576px
      // *RESIZE FIPBOOK
      const flipbookContentRef = document.querySelector('.js-flipbook-content');
      flipbookContentRef.classList.add('is-mobile');
      const flipbookSize = flipbookContentRef.getBoundingClientRect();
      $('.flipbook').turn('size', '200vw', flipbookSize.height);
    }
  };
  setContentVariable(smallBp);
  smallBp.addEventListener('change', setContentVariable)
  window.addEventListener('resize', () => setContentVariable(smallBp));
};
