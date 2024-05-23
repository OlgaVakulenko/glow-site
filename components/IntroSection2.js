import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Layout from './Layout';
import cx from 'clsx';
import throttle from 'lodash.throttle';
import gsap from '../dist/gsap';

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function softClamp(x, min, max, stretch = 50, k = 0.01) {
  if (x < min) {
    return min - stretch * Math.log1p(k * (min - x));
  } else if (x > max) {
    return max + stretch * Math.log1p(k * (x - max));
  } else {
    return x;
  }
}

export default function IntroSection({
  title,
  subtitle,
  className,
  animate = false,
}) {
  const ref = useRef(null);
  const refId = useRef(() => Math.random());

  useLayoutEffect(() => {
    refId.current = Math.random();
  });

  useEffect(() => {
    if (!animate) return;

    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      if (!e.currentTarget) return;
      const rect = el.getBoundingClientRect(e);
      let x = softClamp(e.clientX, rect.left + 50, rect.right - 50);
      x = x - rect.left;
      let y = softClamp(e.clientY, rect.top + 50, rect.bottom - 50);
      y = y - rect.top;

      gsap.to(el, {
        duration: 0.5,
        ease: 'power1.out',
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
        'pb-14 pt-[128px] md:flex md:items-end md:justify-between md:pb-12 md:pt-[144px] xl:grid xl:grid-cols-12 xl:gap-8 xl:pb-[32px] xl:pt-[178px]',
        {},
        className
      )}
    >
      <div
        ref={ref}
        className={cx(
          'main-title mb-4 select-none bg-clip-text text-next-heading-4 md:mb-0 md:mr-24 md:min-w-[416px] md:text-next-heading-3 xl:col-span-6 xl:mr-0 xl:text-next-heading-2'
        )}
      >
        {title}
      </div>
      <div className="hidden xl:col-span-1 xl:block"></div>
      <div className="text-next-body-m md:text-next-body-xxl xl:col-span-5">
        {subtitle}
      </div>
    </Layout>
  );
}
