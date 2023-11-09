import cx from 'clsx';
import { useEffect, useRef } from 'react';
import gsap from '../dist/gsap';
import { useMediaAtom } from '../lib/agent';
import Animated from './Animated';

export default function PageHeading({ className, children }) {
  return (
    <div
      className={cx(
        'font-glow text-[40px] font-medium leading-10 tracking-[-1px] md:text-[80px] md:leading-[81px] xl:text-[100px] xl:leading-[90px]',
        className
      )}
    >
      <Animated immediate as="h1">
        {children}
      </Animated>
    </div>
  );
}

export function PageHeading2({ animate = true, className, children }) {
  const media = useMediaAtom();
  const ref = useRef();

  useEffect(() => {
    if (!animate) return;
    if (media === 'mobile') return;
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: -50,
        scrollTrigger: {
          trigger: ref.current,
          scrub: true,
          start: 'bottom 50%',
          end: 'bottom top',
        },
      });
    });

    return () => ctx.revert();
  }, [media, animate]);

  return (
    <div
      ref={ref}
      className={cx(
        'font-glow text-[40px] font-medium leading-10 tracking-[-1px] md:text-[64px] md:leading-[59px] xl:text-[72px] xl:leading-[67px] xl:tracking-[-2px] 4xl:text-[92px] 4xl:leading-[92px]',
        className
      )}
    >
      <Animated immediate as="h1">
        {children}
      </Animated>
    </div>
  );
}
