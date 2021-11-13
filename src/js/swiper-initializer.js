import Swiper, { EffectFlip, Navigation } from 'swiper';

const swiperInitializer = () => new Swiper('.js-swiper', {
  effect: 'flip',
  grabCursor: true,
  modules: [EffectFlip, Navigation],
  navigation: {
    nextEl: '.js-control-right',
    prevEl: '.js-control-left',
    disabledClass: 'is-disabled',
  },
});

export default swiperInitializer;
