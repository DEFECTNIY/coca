/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 22,
    breakpoints: {},
  });
};
