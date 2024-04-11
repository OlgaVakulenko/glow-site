import cx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import Animated from '../../Animated';
import Fintech from '../../Icons/Fintech';
import Healthcare from '../../Icons/Healthcare';
import { Transportation2 } from '../../Icons/Transportation';
import Layout from '../../Layout';
import SphereNew from './assets/sphere-new2.png';
import gsap from '../../../dist/gsap';
import Image from '../../Image';
import { useMedia, useMediaAtom } from '../../../lib/agent';
import { useRouter } from 'next/router';

const items = [
  {
    icon: Transportation2,
    title: 'Transportation',
    description: `Be it a carsharing app or an internal service for a logistics company – the key to happy users is in comfortable UX that is easy to navigate.`,
  },
  {
    icon: Fintech,
    title: 'Fintech',
    description: `To ensure user satisfaction, the UI of fintech products must be user-friendly yet informative, and we can help with that!`,
  },
  {
    icon: Healthcare,
    title: 'AI tech',
    description: `We specialize in designing AI-powered applications, combining cutting-edge technology with intuitive design for enhanced user experiences`,
  },
];

export default function NextStep() {
  //@TODO remove this
  const router = useRouter();
  const media = useMediaAtom();
  const rootRef = useRef();
  const sphereRef = useRef();
  const [iconMap, setIconMap] = useState({});

  useEffect(() => {
    return;
    if (media === 'mobile') {
      return;
    }

    const withOpacity =
      router.query?.o === '1'
        ? {
            from: { opacity: 0 },
            to: { opacity: 1 },
          }
        : { from: {}, to: {} };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sphereRef.current,
        {
          y: 180,
        },
        {
          y: -25,
          scrollTrigger: {
            trigger: sphereRef.current,
            scrub: true,
            start: '10% 100%',
            end: 'bottom 20%',
            // markers: true,
          },
        }
      );

      gsap.fromTo(
        '.__item',
        { y: 150, ...withOpacity.from },
        {
          y: 0,
          ...withOpacity.to,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sphereRef.current,
            scrub: true,
            start: 'top 80%',
            end: 'bottom 20%',
            // markers: true,
          },
        }
      );
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, [media, router.query]);

  return (
    <div ref={rootRef}>
      <Layout className="relative pt-[86px] md:pt-[120px] xl:pt-[176px]">
        <div
          ref={sphereRef}
          className="pointer-events-none absolute left-1/2 top-[-1%] w-[200%] max-w-[480px] -translate-x-1/2 scale-150 md:top-[-10%] md:max-w-[890px] xl:top-[-5%]"
        >
          <Image src={SphereNew} alt="" />
        </div>
        <div className="pb-[100px] md:pb-[140px] xl:pb-[176px]">
          <Animated
            as="h2"
            className="mb-[86px] text-center font-satoshi text-[53px] font-medium leading-[120%] tracking-[-1px] md:mb-[136px] md:text-[96px] md:leading-[106px] md:tracking-[-3px] xl:mb-[144px] xl:text-[112px] xl:leading-[120px]"
          >
            The next step of
            <br className="hidden md:block" /> your{' '}
            <br className="hidden xl:hidden" />
            digital product
            <br className="hidden md:block" /> starts here
          </Animated>
          <div className="flex flex-col gap-12 pt-[100px] font-satoshi md:grid md:grid-cols-3 md:gap-16 md:pt-0">
            {items.map((item, index) => (
              <div
                key={index}
                className={cx('__item', {
                  // 'xl:col-span-4': index === 0,
                  // 'xl:col-span-5': index === 1,
                  // 'xl:!col-span-3': index === 2,
                  // 'md:!col-span-2 md:!pt-[149px] xl:!pt-[91px]': index === 2,
                  // 'md:!pt-[296px] xl:!pt-[271px]': index === 1,
                  // 'md:order-1': index === 2,
                })}
              >
                <Animated
                  onViewChange={(inView) => {
                    setIconMap((map) => ({
                      ...map,
                      [index]: inView,
                    }));
                  }}
                  className="mb-6 h-[72px] w-[72px] md:mb-8 md:h-[80px] md:w-[80px] xl:mb-10 xl:h-[96px] xl:w-[96px] 4xl:mb-9"
                >
                  <item.icon isReady={iconMap[index] === true} />
                </Animated>
                <Animated
                  as="h3"
                  delay={100}
                  className="mb-4 text-[24px] font-medium leading-[32px] md:text-[28px] md:leading-[36px] xl:text-[32px] xl:leading-[40px]"
                >
                  {item.title}
                </Animated>
                <Animated
                  delay={200}
                  className="font-inter text-[16px] leading-[160%] xl:text-[18px]"
                >
                  {item.description}
                </Animated>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
