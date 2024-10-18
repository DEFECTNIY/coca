/* eslint-disable prettier/prettier */
import '../assets/scss/about.scss';

//components
import { useTheme } from './components/home/theme.js';
import { useBurger } from './components/home/burger.js';
import { useAccordionFooter } from './components/footer.js';
import { useTextAnimation } from './components/about/textanimation.js';
import { useAboutSlider } from './components/about/aboutslider.js';
import { useTeamSlider } from './components/about/teamslider.js';

useTheme();
useBurger();
useAccordionFooter();
useTextAnimation();
useAboutSlider();
useTeamSlider();
