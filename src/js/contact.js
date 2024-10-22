/* eslint-disable prettier/prettier */
import '/scss/contact-hero.scss';

//components
import { useTheme } from './components/home/theme.js';
import { useBurger } from './components/home/burger.js';
import { useAccordionFooter } from './components/footer.js';
import { useTestInputMask } from '../js/components/contact/phone.js';
import { usePartnersSlider } from './components/home/partners-slider.js';

useTheme();
useBurger();
useAccordionFooter();
useTestInputMask();
usePartnersSlider();
