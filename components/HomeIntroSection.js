import cx from 'clsx';
import { useEffect, useRef } from 'react';
import gsap from '../dist/gsap';
import { useLayoutSsrEffect } from '../lib/utils';
import Layout from './Layout';
import Animated from './Animated';
import RespImage from './Pages/Cases/Renovation/RespImage';
import Frame35 from '../assets/frame-32.svg';
import Frame35md from '../assets/frame-32.svg';
import Frame35xl from '../assets/frame-32.svg';

function softClamp(x, min, max, stretch = 50, k = 0.01) {
  if (x < min) {
    return min - stretch * Math.log1p(k * (min - x));
  } else if (x > max) {
    return max + stretch * Math.log1p(k * (x - max));
  } else {
    return x;
  }
}

export default function HomeIntroSection({
  title,
  subtitle,
  className,
  headingClassname,
  animate = false,
}) {
  const ref = useRef(null);
  const refId = useRef(() => Math.random());

  useLayoutSsrEffect(() => {
    refId.current = Math.random();
  });

  useEffect(() => {
    if (!animate) return;

    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      if (!e.currentTarget) return;
      const rect = el.getBoundingClientRect(e);
      let x = softClamp(e.clientX, rect.left + 100, rect.right - 100);
      x = x - rect.left;
      let y = softClamp(e.clientY, rect.top + 100, rect.bottom - 100);
      y = y - rect.top;

      gsap.to(el, {
        duration: 5,
        ease: 'power3.out',
        css: {
          '--x': x + 'px',
          '--y': y + 'px',
        },
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [animate]);

  return (
    <Layout
      className={cx(
        'pb-14 pt-[128px] md:flex md:items-end md:justify-between md:pb-12 md:pt-[144px] xl:grid xl:grid-cols-12 xl:gap-8 xl:pb-0 xl:pt-[178px]',
        {},
        className
      )}
    >
      <RespImage src={Frame35} md={Frame35md} xl={Frame35xl} />
      <Animated className="xl:col-span-7">
        <h1
          ref={ref}
          className={cx(
            'main-title mb-[25px] select-none bg-clip-text text-next-heading-4 md:mb-0 md:min-w-[496px] md:max-w-[496px] md:text-next-heading-3 xl:mr-0 xl:max-w-full xl:pb-[74px] xl:text-next-heading-0',
            headingClassname,
            {
              animate: animate,
            }
          )}
        >
          {title}
        </h1>
      </Animated>
      <div className="hidden xl:col-span-1 xl:block"></div>
      <Animated
        delay={100}
        className="text-[16px] leading-[160%] md:max-w-[372px] md:pb-[1px] md:text-[18px] md:leading-[160%] xl:col-span-4 xl:max-w-full xl:pb-[74px] xl:text-[20px]"
      >
        {subtitle}
      </Animated>
    </Layout>
  );
}
