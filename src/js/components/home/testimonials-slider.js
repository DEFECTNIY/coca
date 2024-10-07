/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 22,
    breakpoints: {},
  });
};
