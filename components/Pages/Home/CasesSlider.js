import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import gsap from '../../../dist/gsap';
import cx from 'clsx';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mediaAtom, useMediaAtom } from '../../../lib/agent';
import { addLeadingZero, useIsClient } from '../../../lib/utils';
import Image from '../../Image';
import Layout from '../../Layout';
import Section from '../../Section';
import SliderProgress from '../../SliderProgress';
import Case1Img from '../Home/assets/case-temp-1.png';
import Case2Img from '../Home/assets/case-temp-2.png';
import Case3Img from '../Home/assets/case-temp-3.png';

import CaseImg from '../Home/assets/case-img.png';
import casesData from '../Cases/data';
import DragCursorContainer from '../../DragCursor';
import throttle from 'lodash.throttle';

const cases = casesData.filter((c) =>
  ['/liquidspace', '/jucr', '/beast', '/cryptogenie'].includes(c.href)
);

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

export function Col({ title, items, className = '' }) {
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
      <div className="__slide relative flex min-h-[456px] items-end overflow-hidden rounded-3xl text-lblue md:min-h-[688px]">
        <Image
          className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 md:max-h-full"
          src={item.image}
          alt=""
        />
        <div
          className="__slider-item
            absolute
            bottom-0
            left-0
            right-0
            top-0"
        ></div>
        <div
          className="__slider-item2
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
            top-0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-20"
        ></div>
        <div
          // className="relative px-6 pt-[193px] pb-12 md:px-[45px] md:pb-[57px] md:pt-[250px]"
          className="relative px-6 pb-[50px] md:px-[96px] md:pb-[105px] md:pt-[282] xl:px-[104px]"
        >
          {/* <div className="relative inline-block pl-[3px] font-glow text-[11px] tracking-[2px]">
            {addLeadingZero(index + 1)}
            &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
            {addLeadingZero(cases.length)}
            <div className="absolute right-[-30px] top-[-20px]">
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
          </div> */}
          <div className="mb-[29px] mt-[16px] font-glow text-[26px] font-medium leading-[120%] md:mb-[38px] md:mt-[15px] md:text-[32px]">
            {item.title}
          </div>
          <div className="flex space-x-[52px] pl-[3px] md:space-x-[96px]">
            <Col className="" title="Industry" items={item.industry} />
            <Col title="Services" items={item.service} />
            {media !== 'mobile' && item.company && (
              <Col title="Company" items={item.company} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseItem({
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
            scrub: 1,
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
      className={cx(
        'group flex flex-col overflow-hidden pb-10 xl:pb-[88px]',
        className
      )}
    >
      <div
        className="mb-8 overflow-hidden rounded-3xl"
        style={{
          clipPath: 'content-box',
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
      <div className="-mr-10 flex md:-mr-16 xl:-mr-24">
        {columns.map((col, i) => (
          <Col2
            key={i}
            title={col.title}
            items={col.items}
            className="mr-10 md:mr-16 xl:mr-24"
          />
        ))}
      </div>
    </Link>
  );
}

export function CasesRow({ cases, className = '' }) {
  return (
    <div className={cx('w-1/2', className)}>
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
                title: 'services',
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
}

export default function CasesSlider3() {
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
                      title: 'services',
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

  return (
    <Layout className="mb-[56px] ">
      <div className="flex md:-mx-8 xl:-mx-[56px]">
        <CasesRow cases={c1} />
        <CasesRow cases={c2} className="pt-[113px]" />
      </div>
      {/** TODO add after "our projects" link is back */}
      {/* <div className="border-b border-black"></div> */}
    </Layout>
  );
}

export function CasesSlider2() {
  const ref = useRef();
  const scrollerRef = useRef();
  const [media] = useAtom(mediaAtom);
  const [w, setW] = useState(0);
  const [k, setK] = useState(0);

  useEffect(() => {
    const onResize = throttle(() => {
      setW(window.innerWidth > 1800);
    }, 100);

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    setK((k) => k + 1);
  }, [media, w]);

  // useEffect(() => {
  //   const firstAnimationDurationPx = 600;
  //   const clipPathSize =
  //     {
  //       mobile: 16,
  //       tablet: 48,
  //     }[media] || 56;

  //   const gapSize =
  //     {
  //       mobile: 16,
  //       tablet: 48,
  //     }[media] || 32 / 2;

  //   const borderRadiusSize =
  //     {
  //       mobile: '16px',
  //     }[media] || '32px';

  //   const ctx = gsap.context(() => {
  //     const x = media === 'desktop' ? -94.5 : -100;

  //     gsap.to('.__slide-wrapper', {
  //       xPercent: x * (cases.length - 1),
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: '.h-scroller',
  //         pin: true,
  //         scrub: 1,
  //         start: `center+=1 center`,
  //         end: () => {
  //           if (media === 'desktop') {
  //             // return '+=' + scrollerRef.current.offsetWidth * 0.6;
  //           }
  //           return '+=' + scrollerRef.current.offsetWidth;
  //         },
  //       },
  //     });

  //     if (media === 'desktop') {
  //       gsap.to('.h-scroller', {
  //         scrollTrigger: {
  //           trigger: '.h-scroller',
  //           scrub: true,
  //           start: 'center center',
  //           end: `center+=${firstAnimationDurationPx} center`,
  //         },
  //         width: '90%',
  //       });
  //     }

  //     gsap.fromTo(
  //       '.__slide-wrapper',
  //       {
  //         height: '100vh',
  //         // width: '100%',
  //       },
  //       {
  //         scrollTrigger: {
  //           trigger: '.h-scroller',
  //           pin: true,
  //           scrub: true,
  //           start: 'center center',
  //           end: `center+=${firstAnimationDurationPx} center`,
  //         },
  //         // width: '50%',
  //         height: () => {
  //           if (media === 'mobile') {
  //             return 456 + clipPathSize * 2;
  //           }

  //           return 688 + clipPathSize * 2;
  //         },
  //         clipPath: (index, s, nodes) => {
  //           let top = clipPathSize;
  //           let right = clipPathSize;
  //           let bottom = clipPathSize;
  //           let left = clipPathSize;

  //           if (index !== 0 && index !== nodes.length - 1) {
  //             left = 0;
  //           }

  //           if (index === nodes.length - 2) {
  //             right = 0;
  //           }

  //           return `
  //           inset(${top}px ${right}px ${bottom}px ${left}px round ${borderRadiusSize})
  //           `;
  //         },
  //       }
  //     );
  //   }, ref);

  //   return () => {
  //     ctx.revert();
  //   };
  // }, [media]);

  return (
    <div ref={ref}>
      <Section withLayout={false} className="pb-[80px] md:pb-14 xl:pb-[88px]">
        <div key={k}>
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              820: {
                slidesPerView: 'auto',
              },
              1800: {
                slidesPerView: 'auto',
                centeredSlides: true,
              },
            }}
          >
            {cases.map((item, i) => (
              <SwiperSlide
                key={i}
                className={cx(
                  'px-4 md:!w-[90vw] md:pl-4 md:pr-0 xl:!w-[80vw] xl:first:pl-14',
                  {
                    // 'wide:!w-[1440px]': true,
                    'layout-no-p:!w-[1568px] layout-no-p:first:pl-0': true,
                  }
                )}
              >
                <Link href={item.href} className="group">
                  <div className={cx('', {})}>
                    <CaseSlide item={item} index={i} />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            <SwiperSlide className="md:!w-[736px] xl:!w-[778px] xl:pr-14">
              <div className="flex h-full min-h-[456px] items-center justify-center rounded-3xl md:grid md:min-h-[688px] md:w-fit md:grid-cols-2 md:gap-6 md:pl-6">
                {media !== 'mobile' && (
                  <>
                    <div className="w-[332px]">
                      <Image src={Case1Img} alt="" />
                    </div>
                    <div className="w-[332px]">
                      <Image src={Case2Img} alt="" />
                    </div>
                    <div className="w-[332px]">
                      <Image src={Case3Img} alt="" />
                    </div>
                  </>
                )}

                <Layout>
                  {media === 'mobile' && (
                    <Image className="mb-4" src={CaseImg} alt="" />
                  )}
                  <Link
                    href="/work"
                    className="group md:flex md:flex-col md:items-center md:justify-center"
                  >
                    <div className="glow-border-black relative flex h-[163px] w-full items-center justify-center rounded-3xl md:h-[168px] md:w-[168px] md:rounded-full">
                      <div className="absolute-center opacity-0 transition-opacity group-hover:md:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="168"
                          height="168"
                          viewBox="0 0 168 168"
                          fill="none"
                        >
                          <circle cx="84" cy="84" r="84" fill="#E33230" />
                          <path
                            d="M84 77L90.9007 84.0711M90.9007 84.0711L84 91.1421M90.9007 84.0711H77.0993"
                            stroke="#19191B"
                          />
                        </svg>
                      </div>

                      <div className="absolute-center rotate-[-30deg] whitespace-nowrap font-medium uppercase transition-opacity group-hover:md:opacity-0">
                        show more
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <div>view all {casesData.length} cases</div>
                    </div>
                  </Link>
                </Layout>
              </div>
            </SwiperSlide>
            {media !== 'desktop' && (
              <Layout className="mt-5 md:max-w-[544px]">
                <SliderProgress />
              </Layout>
            )}
          </Swiper>
        </div>
      </Section>
    </div>
  );
}
