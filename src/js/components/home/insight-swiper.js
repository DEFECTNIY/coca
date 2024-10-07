/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Navigation],
    navigation: {
      prevEl: '.insight__article-prev',
      nextEl: '.insight__article-next',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
