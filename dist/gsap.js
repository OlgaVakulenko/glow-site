import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollSmoother from './ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default gsap;
export { ScrollSmoother, ScrollTrigger };
