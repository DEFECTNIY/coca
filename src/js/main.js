import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '/scss/main.scss';

// components
import { useTheme } from './components/home/theme.js';
import { useBurger } from './components/home/burger.js';
import { useAccordionFooter } from './components/footer.js';
import { useInsightSlider } from './components/home/insight-swiper.js';
import { usePartnersSlider } from './components/home/partners-slider.js';
import { useTestimonialsSlider } from './components/home/testimonials-slider.js';

useTheme();
useBurger();
useAccordionFooter();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
