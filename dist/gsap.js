import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollSmoother from './ScrollSmoother';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
// import { isBrowser } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

export default gsap;
export { ScrollSmoother, ScrollTrigger };
