import { useEffect, useRef } from 'react';
import gsap from '../dist/gsap';

export default function Asterisk({ triggerRef }) {
  const ref = useRef();

  useEffect(() => {
    if (!triggerRef.current) return;
    // return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: 70,
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: true,
          start: '100% center',
          end: '150% center',
          // markers: true,
        },
      });
    }, ref);

    return () => {
      ctx.revert();
    };
  }, [triggerRef]);

  return (
    <div
      ref={ref}
      className="absolute left-8 top-24 w-[134px] md:top-[184px] xl:top-[216px] xl:w-[188px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="178"
        height="189"
        viewBox="0 0 178 189"
        fill="none"
        className="w-full"
      >
        <path
          opacity="0.1"
          d="M96.398 189L76.67 122.668L21.5214 164.466L-2.38311e-06 134.481L55.597 94.5L-5.87834e-06 54.5192L21.5214 24.0793L76.67 65.8774L96.398 1.10451e-05L131.37 11.3582L109.4 76.7813L178 75.8726L178 113.127L109.849 112.219L131.37 177.642L96.398 189Z"
          fill="url(#paint0_linear_5430_3065)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5430_3065"
            x1="-4.13073e-06"
            y1="94.5"
            x2="178"
            y2="94.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#19191B" />
            <stop offset="1" stopColor="#19191B" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
