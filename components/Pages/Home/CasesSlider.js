// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap, { ScrollTrigger } from '../../../dist/gsap';
import { useAtom } from 'jotai';
import { useCallback, useEffect, useRef, useState } from 'react';
import { EffectCreative } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { mediaAtom, useMedia, useMediaAtom } from '../../../lib/agent';
import { addLeadingZero, useIsClient } from '../../../lib/utils';
import Image from '../../Image';
import Layout from '../../Layout';
import Section from '../../Section';
import SliderProgress from '../../SliderProgress';
import BeastImage from './assets/slider-beast.png';
import CaseDesktop from './assets/case-desktop-1.png';
import cx from 'clsx';
import Link from 'next/link';
import throttle from 'lodash.throttle';
import { Swiper, SwiperSlide } from 'swiper/react';
import Case1Image from '../Cases/assets/case_1.png';
import Case2Image from '../Cases/assets/case_2.png';
import Case3Image from '../Cases/assets/case_3.png';
import Case4Image from '../Cases/assets/case_4.png';
// import CryptogenieImage from '../Cases/assets/'
import Animated from '../../Animated';

// gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    title: 'Beast Tesla Rent',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: Case1Image,
  },
  {
    title: (
      <>
        CryptoGenie is a tool for
        <br className="hidden md:block" /> predicting the relevant trends
      </>
    ),
    href: '/cryptogenie',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: Case2Image,
    imageJsx: (props) => (
      <picture>
        <source
          srcset="
      /img/cg/cg-cover-mobile-w366.webp,
      /img/cg/cg-cover-mobile-w732.webp 2x
    "
          media="(max-width: 767.5px)"
          type="image/webp"
        />
        <source
          srcset="
      /img/cg/cg-cover-mobile-w366.png,
      /img/cg/cg-cover-mobile-w732.png 2x
    "
          media="(max-width: 767.5px)"
        />
        <source
          srcset="/img/cg/cg-cover-w1140.webp, /img/cg/cg-cover-w2280.webp 2x"
          media="(min-width: 768.5px)"
          type="image/webp"
        />
        <source
          srcset="/img/cg/cg-cover-w1140.png, /img/cg/cg-cover-w2280.png 2x"
          media="(min-width: 768.5px)"
        />
        <img {...props} src="/img/cg/cg-cover-w1440.png" />
      </picture>
    ),
  },
  {
    title: 'Beast Tesla Rent',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: Case3Image,
  },
  {
    title: (
      <>
        CryptoGenie is a tool for
        <br className="hidden md:block" /> predicting the relevant trends
      </>
    ),
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: Case4Image,
  },
  // {
  //   title: 'Beast Tesla Rent',
  //   industry: ['Car Rent'],
  //   service: ['User Experience', 'User Interface', 'Branding'],
  //   company: ['Funding 30M'],
  //   image: CaseDesktop,
  // },
  // {
  //   title: 'Beast Tesla Rent',
  //   industry: ['Car Rent'],
  //   service: ['User Experience', 'User Interface', 'Branding'],
  //   company: ['Funding 30M'],
  //   image: CaseDesktop,
  // },
];

function Col2({ title, items, className = '' }) {
  return (
    <div className={cx(className)}>
      <div className="mb-[21px] text-xs font-medium uppercase leading-[110%] opacity-50">
        {title}
      </div>
      <div className="text-sm leading-[186%]">
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
}

function Col({ title, items, className = '' }) {
  return (
    <div className={cx(className)}>
      <div className="mb-[21px] text-xs font-medium uppercase leading-[110%]">
        {title}
      </div>
      <div className="text-sm leading-[186%]">
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
}

function CaseSlide({ item, index }) {
  const [media] = useAtom(mediaAtom);

  return (
    <div className="__slide-wrapper h-full w-full">
      <div className="__slide relative flex h-full items-end overflow-hidden text-lblue">
        <Image
          className="__slider-item absolute top-0 left-0 h-full w-full object-cover md:max-h-full"
          src={item.image}
          alt=""
        />
        <div
          className="__slider-item
            absolute
            top-0
            right-0
            bottom-0
            left-0"
        ></div>
        <div
          // className="relative px-6 pt-[193px] pb-12 md:px-[45px] md:pb-[57px] md:pt-[250px]"
          className="relative px-[40px] pt-[209px] pb-[64px] md:px-[96px] md:pb-[105px] md:pt-[282] xl:px-[104px]"
        >
          <div className="relative inline-block pl-[3px] font-glow text-[11px] tracking-[2px]">
            {addLeadingZero(index + 1)}
            &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
            {addLeadingZero(cases.length)}
            <div className="absolute top-[-20px] right-[-30px]">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.12343 16L6.46096 10.3846L1.8136 13.9231L-2.01745e-07 11.3846L4.68514 8L-4.97637e-07 4.61539L1.8136 2.03846L6.46096 5.57692L8.12342 5.98588e-07L11.0705 0.961539L9.21914 6.5L15 6.42308L15 9.57692L9.25693 9.5L11.0705 15.0385L8.12343 16Z"
                  fill="#E33230"
                />
              </svg>
            </div>
          </div>
          <div className="mb-8 mt-[20px] font-glow text-[26px] font-medium leading-[120%] md:mb-[38px] md:mt-[15px] md:text-[32px]">
            {item.title}
          </div>
          <div className="flex space-x-[56px] pl-[3px] md:space-x-[96px]">
            <Col className="" title="Industry" items={item.industry} />
            <Col title="Service" items={item.service} />
            {media !== 'mobile' && item.company && (
              <Col title="Company" items={item.company} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseItem({
  image,
  imageJsx: ImageJsx,
  title,
  columns = [],
  className = '',
  href = '#',
}) {
  const media = useMediaAtom();
  const ref = useRef(null);

  useEffect(() => {
    if (media === 'mobile') return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ref.current,
            scrub: true,
            start: 'top 85%',
            end: 'bottom 85%',
          },
        }
      );
    }, ref);

    return () => {
      ctx.revert();
    };
  }, [media]);

  return (
    <Link
      ref={ref}
      href={href}
      className={cx('group flex flex-col pb-10 xl:pb-[88px]', className)}
    >
      <div
        className="mb-8 overflow-hidden rounded-3xl group-hover:rounded-none"
        style={{
          transition: 'border-radius .5s',
        }}
      >
        {ImageJsx ? (
          <ImageJsx className="min-h-[304px] object-cover transition-transform duration-500 group-hover:scale-105 xl:min-h-[392px]" />
        ) : (
          <Image
            src={image}
            alt=""
            className="min-h-[304px] object-cover transition-transform duration-500 group-hover:scale-105 xl:min-h-[392px]"
          />
        )}
      </div>
      <div className="mb-8 font-glow text-heading-h4 xl:text-heading-h3">
        {title}
      </div>
      <div className="-mr-10 flex">
        {columns.map((col, i) => (
          <Col2 key={i} title={col.title} items={col.items} className="mr-10" />
        ))}
      </div>
    </Link>
  );
}

function CasesRow({ cases, className = '' }) {
  return (
    <div className={className}>
      {cases.map((caseItem, i) => (
        <div key={i} className="mx-8 flex flex-col xl:mx-[56px]">
          <CaseItem
            imageJsx={caseItem.imageJsx}
            image={caseItem.image}
            title={caseItem.title}
            href={caseItem.href || '#'}
            columns={[
              {
                title: 'industry',
                items: caseItem.industry,
              },
              {
                title: 'service',
                items: caseItem.service,
              },
              {
                title: 'company',
                items: caseItem.company,
              },
            ]}
          />
        </div>
      ))}
    </div>
  );

  return;
  // ));
}

export function CasesSlider3() {
  const isClient = useIsClient();
  const [media] = useAtom(mediaAtom);

  if (media === 'mobile' && isClient) {
    return (
      <div className="pb-16">
        <Swiper>
          {cases.map((caseItem, i) => (
            <SwiperSlide key={i}>
              <Layout>
                <CaseItem
                  imageJsx={caseItem.imageJsx}
                  image={caseItem.image}
                  title={caseItem.title}
                  href={caseItem.href || '#'}
                  columns={[
                    {
                      title: 'industry',
                      items: caseItem.industry,
                    },
                    {
                      title: 'service',
                      items: caseItem.service,
                    },
                    {
                      title: 'company',
                      items: caseItem.company,
                    },
                  ]}
                />
              </Layout>
            </SwiperSlide>
          ))}
          <Layout>
            <SliderProgress />
          </Layout>
        </Swiper>
      </div>
    );
  }
  const c1 = cases.filter((_, i) => i % 2 === 0);
  const c2 = cases.filter((_, i) => i % 2 !== 0);

  // console.log('c1', c1);
  // console.log('c2', c2);

  return (
    <Layout className="mb-[56px] ">
      <div className="-mx-8 flex pb-[64px] xl:-mx-[56px]">
        <CasesRow cases={c1} />
        <CasesRow cases={c2} className="pt-[113px]" />
      </div>
      <div className="border-b border-black"></div>
      {/* <div className="-mx-8 flex flex-wrap pb-[113px] xl:-mx-[56px]">

      </div> */}
    </Layout>
  );
}

export function CasesSlider2() {
  const ref = useRef();
  const scrollerRef = useRef();
  const [media] = useAtom(mediaAtom);

  useEffect(() => {
    const firstAnimationDurationPx = 600;
    const clipPathSize =
      {
        mobile: 16,
        tablet: 48,
      }[media] || 56;

    const gapSize =
      {
        mobile: 16,
        tablet: 48,
      }[media] || 32 / 2;

    const borderRadiusSize =
      {
        mobile: '16px',
      }[media] || '32px';

    const ctx = gsap.context(() => {
      const x = media === 'desktop' ? -94.5 : -100;

      gsap.to('.__slide-wrapper', {
        xPercent: x * (cases.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.h-scroller',
          pin: true,
          scrub: 1,
          start: `center+=1 center`,
          end: () => {
            if (media === 'desktop') {
              // return '+=' + scrollerRef.current.offsetWidth * 0.6;
            }
            return '+=' + scrollerRef.current.offsetWidth;
          },
        },
      });

      if (media === 'desktop') {
        gsap.to('.h-scroller', {
          scrollTrigger: {
            trigger: '.h-scroller',
            // pin: true,
            scrub: true,
            start: 'center center',
            end: `center+=${firstAnimationDurationPx} center`,
          },
          width: '90%',
          // onUpdate: (e) => {
          //   console.log(e);
          // },
        });
      }

      gsap.fromTo(
        '.__slide-wrapper',
        {
          height: '100vh',
          // width: '100%',
        },
        {
          scrollTrigger: {
            trigger: '.h-scroller',
            pin: true,
            scrub: true,
            start: 'center center',
            end: `center+=${firstAnimationDurationPx} center`,
          },
          // width: '50%',
          height: () => {
            if (media === 'mobile') {
              return 456 + clipPathSize * 2;
            }

            return 688 + clipPathSize * 2;
          },
          clipPath: (index, s, nodes) => {
            let top = clipPathSize;
            let right = clipPathSize;
            let bottom = clipPathSize;
            let left = clipPathSize;

            if (index !== 0 && index !== nodes.length - 1) {
              left = 0;
            }

            if (index === nodes.length - 2) {
              right = 0;
            }

            // if (index === 0 || index === nodes.length - 1) {
            //   left = clipPathSize;
            //   right = clipPathSize;
            // }

            // if (index === 1) {
            //   left = 0;
            // }

            // if (index === nodes.length - 2) {
            //   right = 0;
            // }
            // if (index === 1) {
            //   left = 0;
            // }
            // if (index === nodes.length - 2) {
            //   right = 0;
            // }

            // if (index === 0) {
            //   left = clipPathSize;
            // }

            // if (index === nodes.length - 1) {
            //   left = clipPathSize;
            // }

            return `
            inset(${top}px ${right}px ${bottom}px ${left}px round ${borderRadiusSize})
            `;
          },
        }
      );
    }, ref);
    // console.log('+=' + ref.current.offsetWidth);
    return () => {
      ctx.revert();
    };
  }, [media]);

  // console.log('media call', media);

  return (
    <div ref={ref}>
      <Section
        withLayout={false}
        className="__pin-trigger relative overflow-hidden pb-[80px] md:pb-[72px] xl:pb-[80px]"
      >
        <div
          ref={scrollerRef}
          className="h-scroller"
          style={{
            width: cases.length * 100 + '%',
          }}
        >
          {/* <div
            className="__trigger z-[-1] flex h-full flex-nowrap"
            style={{
              width: '500%',
            }}
          > */}
          {/* {['first', 'second'].map((l) => {
            return (
              <div key={l} className="__slide-wrapper h-full w-full">
                {l}
              </div>
            );
          })} */}
          {cases.map((item, i) => (
            <CaseSlide key={i} item={item} index={i} />
          ))}
          {/* wtf  */}
          {/* {media !== 'desktop' && (
            <Layout className="__slider-progress">
              <SliderProgress className="mt-6" />
            </Layout>
          )} */}
          {/* </div> */}
        </div>
      </Section>
    </div>
  );
}
