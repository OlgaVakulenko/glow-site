import cx from 'clsx';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import gsap from '../../../dist/gsap';
import { mediaAtom, useMediaAtom } from '../../../lib/agent';
import { addLeadingZero, useLayoutSsrEffect } from '../../../lib/utils';
import Image, { Source, resolve } from '../../Image';
import Layout from '../../Layout';
import Section from '../../Section';
import SliderProgress from '../../SliderProgress';

import { useSetAtom } from 'jotai';
import throttle from 'lodash.throttle';
import DragCursorContainer, { cursorGlobalDisableAtom } from '../../DragCursor';
import casesData from '../Cases/data';
import CaseCard from './CaseCard';
import CaseNavArrow from './CaseNavArrow';
import BLogo from './assets/b-logo.png';

const featured = ['/beast', '/cryptogenie', '/jucr', '/tilt', '/liquidspace'];

const cases = featured.reduce((t, href) => {
  t.push(casesData.find((item) => item.href === href));
  return t;
}, []);

const addCases = casesData
  .filter((c) => {
    return !['/liquidspace', '/jucr', '/beast', '/cryptogenie'].includes(
      c.href
    );
  })
  .slice(0, 3);

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

function CaseSlideMobile() {}

function Tag({ name }) {
  return (
    <div className="glow-border-dark rounded-full bg-black-dim px-[10px] py-[4px] font-inter text-[12px] uppercase leading-[160%] tracking-[0.02em] md:py-[4px]">
      {name}
    </div>
  );
}

export function CaseSlide({ type = 'default', item, index, total }) {
  const [media] = useAtom(mediaAtom);

  return (
    <div className="__slide-wrapper h-full w-full md:pointer-events-none">
      <div className="__slide relative flex min-h-[732px] flex-col overflow-hidden rounded-3xl bg-[#F8F8F8] text-black md:min-h-[480px] md:flex-row md:items-end md:rounded-3xl xl:h-[560px] xl:rounded-[32px]">
        <div
          // className="relative px-6 pt-[193px] pb-12 md:px-[45px] md:pb-[57px] md:pt-[250px]"
          className="relative z-[1] p-6 pb-14 md:mt-0 md:px-[48px] md:pb-[72px] md:pt-[72px] xl:px-12 xl:pb-[114px] xl:pt-[114px]"
        >
          {/* {item.icon && ( */}
          <div className="mb-0 md:mb-10">
            <Image
              src={BLogo}
              alt=""
              className="h-[40px] w-[40px] md:h-[48px] md:w-[48px]"
            />
          </div>
          {/* )} */}
          {/* <div className="relative hidden font-glow text-[11px] font-medium uppercase tracking-[2px] md:block">
            <div className="absolute left-[79px] top-[-18px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
              >
                <path
                  d="M8.12343 16L6.46096 10.3846L1.8136 13.9231L-2.01745e-07 11.3846L4.68514 8L-4.97637e-07 4.61539L1.8136 2.03846L6.46096 5.57692L8.12342 5.98588e-07L11.0705 0.961539L9.21914 6.5L15 6.42308L15 9.57692L9.25693 9.5L11.0705 15.0385L8.12343 16Z"
                  fill="#E33230"
                />
              </svg>
            </div>
            {addLeadingZero(index + 1)}
            {total && (
              <>
                &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
                {addLeadingZero(total)}
              </>
            )}
          </div> */}
          <div className="mb-4 mt-6 font-satoshi text-[28px] font-medium leading-[130%] md:mb-[24px] md:mt-[15px] md:text-[32px] md:leading-[40px] xl:text-[40px] xl:leading-[48px]">
            {item.title2 || item.title}
          </div>
          <div className="mb-6 max-w-[464px] font-inter text-[16px] leading-[160%] xl:text-[18px]">
            {item.description}
          </div>
          <div className="flex flex-wrap gap-2">
            <Tag name="Product Design" />
            <Tag name="UI" />
            <Tag name="UX" />
            <Tag name="Visual identity" />
          </div>

          {/* <div className="flex space-x-[40px] pl-[3px] md:space-x-[62px]">
            <Col className="" title="Industry" items={item.industry} />
            <Col
              className="min-w-[100px]"
              title="Services"
              items={item.service}
            />
            {item.company && <Col title="Company" items={item.company} />}
          </div> */}
        </div>
        {item.imageMobile ? (
          <picture>
            <Source
              image={(type === 'work' && item.imageWork) || item.image}
              media="(min-width: 820px)"
              width="1280"
            />
            <Source image={item.imageMobile} width="480" />
            <img
              className="absolute bottom-0 h-auto min-h-[304px] w-full object-contain transition-transform duration-500 group-hover:scale-105 md:pointer-events-none md:absolute md:left-0 md:top-0 md:max-h-full md:origin-[90%_10%] md:rounded-none md:object-cover"
              src={resolve({ src: item.image.src, width: 1440 })}
              alt=""
            />
          </picture>
        ) : (
          <Image
            className="absolute bottom-0 h-auto min-h-[304px] w-full object-contain transition-transform duration-500 group-hover:scale-105 md:pointer-events-none md:absolute md:left-0 md:top-0 md:max-h-full md:origin-[90%_10%] md:rounded-none md:object-cover"
            src={(type === 'work' && item.imageWork) || item.image}
            alt=""
          />
        )}
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
  const ref = useRef(null);

  return (
    <Link
      ref={ref}
      href={href}
      className={cx(
        'group flex flex-col overflow-hidden pb-10 xl:pb-[120px]',
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
      <h2 className="mb-8 font-glow text-heading-h4 xl:text-heading-h3">
        {title}
      </h2>
      <div>
        Beast is an ambitious carsharing project from Estonia that presents a
        range of exclusive Tesla models.
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
        <div key={i} className="mx-8 flex flex-col xl:mx-[64px]">
          <CaseItem
            imageJsx={caseItem.imageJsx}
            image={caseItem.imageMobile || caseItem.image}
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

function ViewCaseCursor({ x, y }) {
  const prev = useRef({});
  const ref = useRef();
  const rotatedRef = useRef();

  useLayoutSsrEffect(() => {
    if (!ref.current) return;
    if (!rotatedRef.current) return;

    gsap.to(ref.current, {
      x: x - 120,
      y: y - 35,
      duration: 0,
    });

    const rota = prev.current.x < x ? '-20deg' : '-30deg';
    gsap.to(rotatedRef.current, {
      rotate: rota,
      duration: 0.2,
      onComplete: (...args) => {
        if (!rotatedRef.current) return;
        gsap.to(rotatedRef.current, {
          rotate: '-25deg',
          duration: 0.4,
        });
      },
    });

    prev.current.x = x;
    prev.current.y = y;
  }, [x, y]);

  return (
    <div ref={ref} className="pointer-events-none fixed left-0 top-0 ">
      <div
        ref={rotatedRef}
        className="rounded-full bg-brand px-[50px] py-[14px] font-medium  uppercase text-black"
      >
        View Case
      </div>
    </div>
  );
}

export function CasesSlider2() {
  const ref = useRef();
  const [media] = useAtom(mediaAtom);
  const [w, setW] = useState(0);
  const [k, setK] = useState(0);
  const swiperRef = useRef();

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

  return (
    <div ref={ref} className="overflow-hidden">
      <Layout>
        <Section
          withLayout={false}
          className="pb-[80px] md:pb-[120px] xl:pb-[120px]"
        >
          <div key={k}>
            {/* <DragCursorContainer showDefaultCursor cursor={ViewCaseCursor} adhoc> */}
            {/* {({ show, swiperOptions }) => ( */}
            <Swiper
              className="!overflow-visible"
              {...(true
                ? {
                    onSwiper: (swiper) => {
                      swiperRef.current = swiper;
                    },
                    spaceBetween: '24px',
                    // {...swiperOptions}
                    mousewheel: {
                      invert: true,
                      forceToAxis: true,
                      sensitivity: 0.1,
                    },
                    modules: [Mousewheel],
                    breakpoints: {
                      320: {
                        slidesPerView: 1,
                      },
                      820: {
                        slidesPerView: 'auto',
                      },
                    },
                  }
                : {})}
            >
              {cases.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className={cx(
                    'cursor-none select-none md:!w-[90vw] xl:!w-[1200px]'
                    // '4xl:first:pl-[120px]'
                  )}
                >
                  <Link
                    href={item.href}
                    className={cx('group select-none', {
                      // 'cursor-none': show,
                    })}
                  >
                    <div className={cx('md:pointer-events-none', {})}>
                      <CaseSlide item={item} index={i} total={cases.length} />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
              {/* <SwiperSlide className="md:!w-[412px] md:pr-4 xl:pr-16 4xl:pr-[120px]">
                  <EndSlide />
                </SwiperSlide> */}
              <div className="md:mt-[52px] xl:mt-[48px]">
                <div className="hidden items-center space-x-8 md:flex">
                  <div className="flex shrink-0 space-x-4">
                    <CaseNavArrow
                      dir="left"
                      onClick={() => {
                        swiperRef.current.slidePrev();
                      }}
                    />
                    <CaseNavArrow
                      dir="right"
                      onClick={() => {
                        swiperRef.current.slideNext();
                      }}
                    />
                  </div>

                  <div className="w-full">
                    <SliderProgress />
                  </div>
                </div>
              </div>
            </Swiper>
            {/* )} */}
            {/* </DragCursorContainer> */}
          </div>
        </Section>
      </Layout>
    </div>
  );
}

function SliderCounter() {
  const swiper = useSwiper();
  const [currentSlide, setCurrentSlide] = useState(swiper.activeIndex + 1);

  useEffect(() => {
    const handleSliderChange = () => {
      setCurrentSlide(swiper.activeIndex + 1);
    };

    swiper.on('slideChange', handleSliderChange);

    return () => {
      swiper.off('slideChange', handleSliderChange);
    };
  }, [swiper]);

  return (
    <div>
      {addLeadingZero(currentSlide)}/{addLeadingZero(swiper.slides.length - 1)}
    </div>
  );
}

function CasesNavigation() {
  const swiper = useSwiper();

  return (
    <div className="flex space-x-4">
      <CaseNavArrow
        dir="left"
        onClick={() => {
          swiper.slidePrev();
        }}
      />
      <CaseNavArrow
        dir="right"
        onClick={() => {
          swiper.slideNext();
        }}
      />
    </div>
  );
}

export function CasesSlider3() {
  const ref = useRef();
  const [media] = useAtom(mediaAtom);
  const [w, setW] = useState(0);
  const [k, setK] = useState(0);
  const setGlobalDisable = useSetAtom(cursorGlobalDisableAtom);

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

  return (
    <div ref={ref}>
      <Section withLayout={false} className="pb-[80px] md:pb-14 xl:pb-[120px]">
        <div key={k}>
          <DragCursorContainer showDefaultCursor cursor={ViewCaseCursor} adhoc>
            {({ show, swiperOptions }) => (
              <Swiper
                {...swiperOptions}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  820: {
                    slidesPerView: 'auto',
                  },
                }}
              >
                {cases.map((item, i) => (
                  <SwiperSlide
                    key={i}
                    className={cx(
                      'cursor-none select-none px-4 md:!w-[85vw] md:pl-4 md:pr-0 xl:!w-[1160px] xl:first:!w-[1200px] xl:first:pl-16',
                      '4xl:first:pl-[120px]'
                    )}
                  >
                    <Link
                      href={item.href}
                      className={cx('group select-none', {
                        'cursor-none': show,
                      })}
                    >
                      <div className={cx('md:pointer-events-none', {})}>
                        <CaseCard item={item} index={i} total={cases.length} />
                        {/* <CaseSlide item={item} index={i} total={cases.length} /> */}
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
                <SwiperSlide className="md:!w-[412px] md:pr-4 xl:pr-16 4xl:pr-[120px]">
                  <EndSlide />
                </SwiperSlide>
                <div
                  onPointerEnter={() => {
                    setGlobalDisable(true);
                  }}
                  onPointerLeave={() => {
                    setGlobalDisable(false);
                  }}
                >
                  <Layout className="pt-5 md:max-w-[736px] md:pt-8 xl:max-w-full xl:pt-10">
                    <div className="mb-5 flex items-end justify-between">
                      <CasesNavigation />
                      <SliderCounter />
                    </div>
                    <SliderProgress />
                  </Layout>
                </div>
              </Swiper>
            )}
          </DragCursorContainer>
        </div>
      </Section>
    </div>
  );
}

function EndSlide({ className }) {
  const setGlobalCursorDisable = useSetAtom(cursorGlobalDisableAtom);
  const media = useMediaAtom();

  return (
    <div
      onMouseEnter={() => {
        setGlobalCursorDisable(true);
      }}
      onMouseLeave={() => {
        setGlobalCursorDisable(false);
      }}
      className="group flex h-full min-h-[456px] items-center justify-center rounded-3xl transition-all duration-300 md:ml-6 md:flex md:min-h-[688px] md:items-stretch md:rounded-[32px] md:border md:border-black md:hover:border-brand md:hover:bg-brand"
    >
      {media === 'mobile' ? <LastSlide2 /> : <LastSlide />}
      {/* {media !== 'mobile' && (
        <>
          {addCases.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="group hidden h-full w-[332px] overflow-hidden rounded-[32px] md:block"
            >
              <Image
                src={item.image}
                alt=""
                className="h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          ))}
        </>
      )} */}
    </div>
  );
}

function LastSlide2() {
  const media = useMediaAtom();

  return (
    <Layout>
      {media === 'mobile' && (
        <Link
          href={addCases[0].href}
          key={addCases[0].href}
          className="group mb-4 block h-full w-full overflow-hidden rounded-3xl"
        >
          <Image
            src={addCases[0].image}
            alt=""
            className="h-full min-h-[304px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
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
              className="h-[168px] w-[168px]"
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
  );
}

function LastSlide() {
  return (
    <Link
      href="/work"
      className="relative flex w-[322px] items-end justify-center p-[30px]"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-30deg] font-medium uppercase tracking-[0.48px] transition-opacity duration-300 group-hover:opacity-0">
        show more
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="45"
          viewBox="0 0 43 45"
          fill="none"
        >
          <path
            d="M21 1L41.8691 22.3844M41.8691 22.3844L21 43.7688M41.8691 22.3844H0.130864"
            stroke="#19191B"
          />
        </svg>
      </div>
      <div>View all {casesData.length} cases</div>
    </Link>
  );
}
