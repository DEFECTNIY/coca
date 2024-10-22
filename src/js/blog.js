/* eslint-disable prettier/prettier */
import '../assets/scss/blogmain.scss';

//components
import { useTheme } from './components/home/theme.js';
import { useBurger } from './components/home/burger.js';
import { useAccordionFooter } from './components/footer.js';
import { useBlogSlider } from './components/blog/blogslider.js';
import { useTabFilter } from './components/blog/blogslider.js';
import { useArticlesSlider } from './components/blog/articlesSlider.js';

useTheme();
useBurger();
useAccordionFooter();
useBlogSlider();
useTabFilter();
useArticlesSlider();
