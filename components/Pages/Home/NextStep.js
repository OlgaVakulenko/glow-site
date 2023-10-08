import cx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import Animated from '../../Animated';
import Fintech from '../../Icons/Fintech';
import Healthcare from '../../Icons/Healthcare';
import { Transportation2 } from '../../Icons/Transportation';
import Layout from '../../Layout';
import SphereNew from './assets/sphere-new.png';
import gsap from '../../../dist/gsap';
import Image from '../../Image';
import { useMedia, useMediaAtom } from '../../../lib/agent';
import { useRouter } from 'next/router';

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
  //@TODO remove this
  const router = useRouter();
  const media = useMediaAtom();
  const rootRef = useRef();
  const sphereRef = useRef();
  const [iconMap, setIconMap] = useState({});

  useEffect(() => {
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
      <Layout className="relative overflow-hidden pt-[100px] md:pt-[120px]">
        <div
          ref={sphereRef}
          className="pointer-events-none absolute left-1/2 top-0 w-[200%] max-w-[480px] -translate-x-1/2 opacity-90 md:-top-8 md:max-w-[890px] md:opacity-100 xl:opacity-95 4xl:top-0"
        >
          <Image src={SphereNew} alt="" />
        </div>
        <div className="border-b pb-[75px] md:pb-[113px] 4xl:pb-[139px]">
          <Animated
            as="h3"
            className="mb-[60px] text-center font-glow text-5xl font-medium tracking-[-3px] md:mb-[66px] md:text-[99px] md:leading-[100px] xl:mb-0 xl:text-[112px] xl:leading-[106px]"
          >
            The next step of <br className="hidden md:block xl:hidden" /> your{' '}
            <br className="hidden xl:block" />
            digital product
            <br className="mb:block hidden" /> starts
            <br className="hidden xl:block 4xl:hidden" /> here
          </Animated>
          <div className="grid gap-y-20 md:flex md:justify-between xl:-mt-10 4xl:mt-8">
            {items.map((item, index) => (
              <div
                key={index}
                className={cx('__item md:last:pt-[76px]', {
                  'md:!pt-[296px] xl:!pt-[271px]': index === 2,
                  'md:order-2 md:!pt-[149px] xl:!pt-[91px]': index === 1,
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
                  className="mb-8 md:mb-9 xl:mb-6 4xl:mb-9"
                >
                  <item.icon isReady={iconMap[index] === true} />
                </Animated>
                <Animated
                  delay={100}
                  className="mb-4 text-2xl font-medium tracking-[0.48px] 4xl:text-3xl"
                >
                  {item.title}
                </Animated>
                <Animated
                  delay={200}
                  className="text-lg leading-[26px] md:max-w-[280px] xl:max-w-[328px] 4xl:max-w-[384px] 4xl:text-body-l"
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
