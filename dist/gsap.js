import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import ScrollSmoother from './ScrollSmoother';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default gsap;
export { ScrollTrigger };
