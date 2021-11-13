const mobileListener = () => {
  const flipbookContentRef = document.querySelector('.js-flipbook-content');
  const flipbookSize = flipbookContentRef.getBoundingClientRect();
  // eslint-disable-next-line no-undef
  $('.flipbook').turn('size', '200vw', flipbookSize.height);
};

const desktopListener = () => 1;

export {
  mobileListener,
  desktopListener,
};
