import cx from 'clsx';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import gsap from '../../../dist/gsap';
import { mediaAtom, useMediaAtom } from '../../../lib/agent';
import { addLeadingZero, useIsClient } from '../../../lib/utils';
import Image from '../../Image';
import Layout from '../../Layout';
import Section from '../../Section';
import SliderProgress from '../../SliderProgress';

import { useSetAtom } from 'jotai';
import throttle from 'lodash.throttle';
import DragCursorContainer, { cursorGlobalDisableAtom } from '../../DragCursor';
import casesData from '../Cases/data';

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

// function CaseSlide2({ item, index }) {
//   const [media] = useAtom(mediaAtom);

//   return (
//     <div className="__slide-wrapper pointer-events-none h-full w-full">
//       <div className="__slide relative flex min-h-[456px] items-end overflow-hidden rounded-3xl text-lblue md:min-h-[688px]">
//         <Image
//           className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 md:max-h-full"
//           src={item.image}
//           alt=""
//         />
//         <div
//           className="__slider-item
//             pointer-events-none
//             absolute
//             bottom-0
//             left-0
//             right-0
//             top-0"
//         ></div>
//         <div
//           // className="relative px-6 pt-[193px] pb-12 md:px-[45px] md:pb-[57px] md:pt-[250px]"
//           className="relative px-6 pb-[50px] md:px-[96px] md:pb-[105px] md:pt-[282] xl:px-[104px]"
//         >
//           <div className="mb-[29px] mt-[16px] font-glow text-[26px] font-medium leading-[120%] md:mb-[38px] md:mt-[15px] md:text-[32px]">
//             {item.title}
//           </div>
//           <div className="flex space-x-[52px] pl-[3px] md:space-x-[62px]">
//             <Col className="" title="Industry" items={item.industry} />
//             <Col title="Services" items={item.service} />
//             {media !== 'mobile' && item.company && (
//               <Col title="Company" items={item.company} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function CaseSlide({ item, index, total }) {
  const [media] = useAtom(mediaAtom);

  return (
    <div className="__slide-wrapper pointer-events-none h-full w-full">
      <div className="__slide relative flex min-h-[456px] items-end overflow-hidden rounded-3xl text-black md:min-h-[688px]">
        <Image
          className="pointer-events-none absolute left-0 top-0 h-full w-full origin-[90%_10%] object-cover transition-transform duration-500 group-hover:scale-105 md:max-h-full"
          src={item.image}
          alt=""
        />
        <div
          className="__slider-item2
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            top-0"
        ></div>
        <div
          // className="relative px-6 pt-[193px] pb-12 md:px-[45px] md:pb-[57px] md:pt-[250px]"
          className="relative px-6 pb-[50px] md:px-[96px] md:pb-16 md:pt-[282px] xl:px-12"
        >
          <div className="relative font-glow text-[11px] font-medium uppercase tracking-[2px]">
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
            {addLeadingZero(index + 1)}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
            {addLeadingZero(total)}
          </div>
          <div className="mb-[29px] mt-[16px] font-glow text-[26px] font-medium leading-[120%] md:mb-[38px] md:mt-[15px] md:text-[32px]">
            {item.title2 || item.title}
          </div>
          <div className="flex space-x-[52px] pl-[3px] md:space-x-[62px]">
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

  // useEffect(() => {
  //   if (media === 'mobile') return;

  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       ref.current,
  //       {
  //         opacity: 0,
  //       },
  //       {
  //         opacity: 1,
  //         scrollTrigger: {
  //           trigger: ref.current,
  //           scrub: 1,
  //           start: 'top 85%',
  //           end: 'bottom 85%',
  //         },
  //       }
  //     );
  //   }, ref);

  //   return () => {
  //     ctx.revert();
  //   };
  // }, [media]);

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

function ViewCaseCursor({ x, y }) {
  const prev = useRef({});
  const ref = useRef();
  const rotatedRef = useRef();

  useLayoutEffect(() => {
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
      <Section withLayout={false} className="pb-[80px] md:pb-14 xl:pb-[88px]">
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
                      'cursor-none select-none px-4 md:!w-[90vw] md:pl-4 md:pr-0 xl:!w-[1144px] xl:first:!w-[1184px] xl:first:pl-14',
                      '4xl:first:pl-[120px]'
                    )}
                  >
                    <Link
                      href={item.href}
                      className={cx('group select-none', {
                        'cursor-none': show,
                      })}
                    >
                      <div className={cx('pointer-events-none', {})}>
                        <CaseSlide item={item} index={i} total={cases.length} />
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
                <SwiperSlide className="md:!w-[412px] md:pr-4 xl:pr-14 4xl:pr-[120px]">
                  <EndSlide />
                </SwiperSlide>
                {media !== 'desktop' && (
                  <Layout className="mt-5 md:max-w-[544px]">
                    <SliderProgress />
                  </Layout>
                )}
              </Swiper>
            )}
          </DragCursorContainer>
        </div>
      </Section>
    </div>
  );
}

function EndSlide() {
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
            className="h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
