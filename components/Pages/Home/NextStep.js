import Layout from '../../Layout';
import { Transportation2 } from '../../Icons/Transportation';
import Healthcare from '../../Icons/Healthcare';
import Fintech from '../../Icons/Fintech';
import { useState } from 'react';
import Animated from '../../Animated';
import cx from 'clsx';
// import Sphere from './assets/sphere-tablet.png';
import Sphere from './assets/sphere-solid.png';
import SphereMobile from './assets/sphere-solid-mobile.png';

import Image from '../../Image';

const items = [
  {
    icon: Transportation2,
    title: 'Transportation',
    description:
      'Be it a carsharing app or an internal service for a logistics company – the key to happy users is in comfortable UX that is easy to navigate.',
  },
  {
    icon: Healthcare,
    title: 'AI tech',
    description:
      'To ensure user satisfaction, the UI of fintech products must be user-friendly yet informative, and we can help with that!',
  },
  {
    icon: Fintech,
    title: 'Fintech',
    description:
      'We specialize in designing AI-powered applications, combining cutting-edge technology with intuitive design for enhanced user experiences',
  },
];

export default function NextStep() {
  const [iconMap, setIconMap] = useState({});

  return (
    <Layout className="relative overflow-hidden pt-[100px] md:pt-[120px]">
      <div className="pointer-events-none absolute -top-12 left-1/2 z-[-1] w-[200%] max-w-[780px] -translate-x-1/2 opacity-90 md:top-20 md:max-w-[970px] md:opacity-90 xl:opacity-95">
        <picture>
          <source srcSet={Sphere.src} media="(min-width: 820px)" />
          <source srcSet={SphereMobile.src} />
          <img className="w-full" src={Sphere.src} />
        </picture>
      </div>
      <div className="border-b pb-[50px] md:pb-[78px] xl:pb-[104px]">
        <h3 className="mb-[60px] text-center font-glow text-5xl font-medium tracking-[-3px] md:mb-[66px] md:text-[99px] md:leading-[100px] xl:mb-0 xl:text-[112px] xl:leading-[106px]">
          The next step of <br className="hidden md:block xl:hidden" /> your{' '}
          <br className="hidden xl:block" />
          digital product
          <br className="mb:block hidden" /> starts
          <br className="hidden xl:block" /> here
        </h3>
        <div className="grid gap-y-14 md:flex md:justify-between">
          {items.map((item, index) => (
            <div
              key={index}
              className={cx('md:last:pt-[76px]', {
                'md:!pt-[356px] xl:!pt-[371px]': index === 2,
                'md:order-2 md:!pt-[189px] xl:!pt-[91px]': index === 1,
                'md:order-1': index === 2,
              })}
            >
              <Animated
                onViewChange={(inView) => {
                  setIconMap((map) => ({
                    ...map,
                    [index]: inView,
                  }));
                }}
                className="mb-12 md:mb-9 xl:mb-6"
              >
                <item.icon isReady={iconMap[index] === true} />
              </Animated>
              <Animated
                delay={100}
                className="mb-4 text-2xl font-medium tracking-[0.48px]"
              >
                {item.title}
              </Animated>
              <Animated
                delay={200}
                className="text-lg leading-[26px] md:max-w-[280px]"
              >
                {item.description}
              </Animated>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
