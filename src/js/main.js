import '../assets/scss/main.scss';

// component
import { useTheme } from './components/home/theme.js';
import { useBurger } from './components/home/burger.js';
import { useInsightSlider } from './components/home/insight-swiper.js';
import { usePartnersSlider } from './components/home/partners-slider.js';
import { useTestimonialsSlider } from './components/home/testimonials-slider.js';

useTheme();
useBurger();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
