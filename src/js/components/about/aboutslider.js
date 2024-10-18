/* eslint-disable prettier/prettier */
// import Swiper JS
import Swiper from 'swiper';
// import Swiper JS Modules
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

export const useAboutSlider = () => {
  const slider = new Swiper('.about__slider', {
    // Swiper to use modules
    modules: [Navigation],
    // Configure Swiper
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      381: {
        slidesPerView: 'auto',
        spaceBetween: 15,
        loop: true,
      },

      992: {
        slidesPerView: 'auto',
        spaceBetween: 15,
        loop: true,
      },

      1201: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.about__btn--next',
      prevEl: '.about__btn--prev',
    },
    // Add smooth transition
    speed: 500,
  });

  const nextBtn = document.querySelector('.about__btn--next');
  const prevBtn = document.querySelector('.about__btn--prev');

  nextBtn.addEventListener('click', () => {
    // Hide buttons with animation
    nextBtn.classList.add('about__btn--hidden');
    prevBtn.classList.add('about__btn--hidden');
    setTimeout(() => {
      nextBtn.classList.remove('about__btn--hidden');
      prevBtn.classList.remove('about__btn--hidden');
    }, 300);
    // Go to next slide
    slider.slideNext();
  });

  prevBtn.addEventListener('click', () => {
    // Hide buttons with animation
    nextBtn.classList.add('about__btn--hidden');
    prevBtn.classList.add('about__btn--hidden');
    setTimeout(() => {
      nextBtn.classList.remove('about__btn--hidden');
      prevBtn.classList.remove('about__btn--hidden');
    }, 300);
    // Go to previous slide
    slider.slidePrev();
  });
};

