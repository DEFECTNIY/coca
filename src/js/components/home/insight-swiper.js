/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useInsightSlider = () => {
  const slider = new Swiper('.insight__slider', {
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
    // Add smooth transition
    speed: 500,
  });

  const prevBtn = document.querySelector('.insight__article-prev');
  const nextBtn = document.querySelector('.insight__article-next');

  prevBtn.addEventListener('click', () => {
    // Hide buttons with animation
    prevBtn.classList.add('insight__article-btn--hidden');
    nextBtn.classList.add('insight__article-btn--hidden');
    setTimeout(() => {
      prevBtn.classList.remove('insight__article-btn--hidden');
      nextBtn.classList.remove('insight__article-btn--hidden');
    }, 300);
    // Go to previous slide
    slider.slidePrev();
  });

  nextBtn.addEventListener('click', () => {
    // Hide buttons with animation
    prevBtn.classList.add('insight__article-btn--hidden');
    nextBtn.classList.add('insight__article-btn--hidden');
    setTimeout(() => {
      prevBtn.classList.remove('insight__article-btn--hidden');
      nextBtn.classList.remove('insight__article-btn--hidden');
    }, 300);
    // Go to next slide
    slider.slideNext();
  });
};
