/* eslint-disable prettier/prettier */
// import Swiper JS
import Swiper from 'swiper';
// import Swiper JS Modules
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

/* eslint-disable prettier/prettier */
export const useTeamSlider = () => {
  const slider = new Swiper('.team__slider', {
    modules: [Navigation],
    slidesPerView: 1.2,
    spaceBetween: 15,
    breakpoints: {
      420: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      577: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: '.team__button--next',
      prevEl: '.team__button--prev',
    },
    // Add smooth transition
    speed: 500,
  });

  const prevBtn = document.querySelector('.team__button--prev');
  const nextBtn = document.querySelector('.team__button--next');

  prevBtn.addEventListener('click', () => {
    // Hide buttons with animation
    prevBtn.classList.add('team__button--hidden');
    nextBtn.classList.add('team__button--hidden');
    setTimeout(() => {
      prevBtn.classList.remove('team__button--hidden');
      nextBtn.classList.remove('team__button--hidden');
    }, 300);
    // Go to previous slide
    slider.slidePrev();
  });

  nextBtn.addEventListener('click', () => {
    // Hide buttons with animation
    prevBtn.classList.add('team__button--hidden');
    nextBtn.classList.add('team__button--hidden');
    setTimeout(() => {
      prevBtn.classList.remove('team__button--hidden');
      nextBtn.classList.remove('team__button--hidden');
    }, 300);
    // Go to next slide
    slider.slideNext();
  });
};
