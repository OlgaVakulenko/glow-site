import cx from 'clsx';
import { useEffect, useRef } from 'react';
import gsap from '../dist/gsap';
import { useLayoutSsrEffect } from '../lib/utils';
import Layout from './Layout';
import Animated from './Animated';

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
  headingClassname,
	bodyClassName,
}) {
  return (
    <Layout
      className={cx(
        'pb-14 pt-[128px] md:flex md:items-end md:justify-between md:pb-12 md:pt-[144px] xl:grid xl:grid-cols-12 xl:gap-8 xl:pb-[32px] xl:pt-[178px]',
        {},
        className
      )}
    >
      <Animated
        as="h1"
        className={cx(
          'mb-4 text-next-heading-4 md:mb-0 md:mr-24 md:min-w-[416px] md:text-next-heading-3 xl:col-span-6 xl:mr-0 xl:text-next-heading-2',
          headingClassname
        )}
      >
        {title}
      </Animated>
      <div className="hidden xl:col-span-1 xl:block"></div>
      <Animated
        delay={100}
        className={cx(
          'text-next-body-m md:text-next-body-xxl xl:col-span-5',
          bodyClassName
        )}
      >
        {subtitle}
      </Animated>
    </Layout>
  );
}
