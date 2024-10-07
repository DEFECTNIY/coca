/* eslint-disable prettier/prettier */
import '../assets/scss/pricing.scss';

//components
import { useTheme } from './components/home/theme.js';
import { useBurger } from './components/home/burger.js';
import { useAccordionFooter } from './components/footer.js';
import { usePriceSwitcher } from './components/pricing/pricing-switcher.js';

useTheme();
useBurger();
usePriceSwitcher();
useAccordionFooter();
