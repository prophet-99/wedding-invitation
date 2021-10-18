const flipbookInitializer = (device) => {
  // eslint-disable-next-line no-undef
  $('.flipbook').turn({
    gradients: true,
    when: {
      start: (event, pageObj) => {
        if (device === 'desktop') {
          const { page } = pageObj;
          if (page === 2) event.preventDefault();
        }
      },
      turning: (event, page) => {
        if (page === 1) {
          document.querySelector('.js-main-content').classList.remove('is-active');
          document.querySelector('.js-hero-section').classList.remove('is-active');
        }
        if (page === 2) {
          document.querySelector('.js-main-content').classList.add('is-active');
          document.querySelector('.js-hero-section').classList.add('is-active');
        }
      },
    },
  });
};

export default flipbookInitializer;
