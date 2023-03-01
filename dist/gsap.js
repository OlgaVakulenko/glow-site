import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollSmoother from './ScrollSmoother';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { isBrowser, isClient } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

if (isClient && isBrowser('Safari')) {
  console.log('ScrollTrigger.normalizeScroll');
  ScrollTrigger.normalizeScroll(true);
}

export default gsap;
export { ScrollSmoother, ScrollTrigger };
