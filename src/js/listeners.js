const mobileListener = () => {
  const flipbookContentRef = document.querySelector('.js-flipbook-content');
  flipbookContentRef.classList.add('is-mobile');
  const flipbookSize = flipbookContentRef.getBoundingClientRect();
  // eslint-disable-next-line no-undef
  $('.flipbook').turn('size', '200vw', flipbookSize.height);
};

const desktopListener = () => 1;

export {
  mobileListener,
  desktopListener,
};
