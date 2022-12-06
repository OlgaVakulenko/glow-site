// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap, { ScrollTrigger } from '../../../dist/gsap';
import { useAtom } from 'jotai';
import { useCallback, useEffect, useRef, useState } from 'react';
import { EffectCreative } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { mediaAtom, useMedia } from '../../../lib/agent';
import { addLeadingZero } from '../../../lib/utils';
import Image from '../../Image';
import Layout from '../../Layout';
import Section from '../../Section';
import SliderProgress from '../../SliderProgress';
import BeastImage from './assets/slider-beast.png';
import CaseDesktop from './assets/case-desktop-1.png';
import cx from 'clsx';
import Link from 'next/link';
import throttle from 'lodash.throttle';

// gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    title: 'Beast Tesla Rent',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: CaseDesktop,
  },
  {
    title: 'Beast Tesla Rent',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: CaseDesktop,
  },
  {
    title: 'Beast Tesla Rent',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: CaseDesktop,
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
  // console.log(media);

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
          // scroller: '.h-scroller',
          // pinType: 'fixed',
          trigger: '.h-scroller',
          pin: true,
          scrub: 1,

          // markers: true,
          // snap: {
          //   snapTo: 1 / (cases.length - 1),
          //   inertia: false,
          //   duration: { min: 0.3, max: 1 },
          // },
          // snap: 1 / (cases.length - 1),
          start: `center+=1 center`,
          // refreshPriority: 1,
          end: () => {
            if (media === 'desktop') {
              // return '+=' + scrollerRef.current.offsetWidth * 0.6;
            }
            //scroll speed
            return '+=' + scrollerRef.current.offsetWidth;
          },
          // invalidateOnRefresh: true,
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

// export default function CasesSlider() {
//   const ref = useRef();
//   const sliderRef = useRef(null);
//   const [media] = useAtom(mediaAtom);
//   const [init, setInit] = useState(false);
//   const swiperRef = useRef(null);

//   const onUpdate = useCallback(
//     throttle((e) => {
//       if (media !== 'desktop') return;
//       const v = gsap.utils.interpolate(1, 1.1, e.progress);
//       swiperRef.current.params.slidesPerView = v;
//       swiperRef.current.update();
//       // console.log(swiperRef.current);
//     }, 10),
//     [media]
//   );

//   const toggleTouchMove = useCallback((bool) => {
//     if (bool) {
//       swiperRef.current.enable();
//     } else {
//       swiperRef.current.disable();
//     }
//     // swiperRef.current.params.allowTouchMove = bool;
//     // swiperRef.current.update();
//   }, []);

//   useEffect(() => {
//     if (!init) return;

//     const ctx = gsap.context(() => {
//       const pinScroller = {
//         trigger: '.__pin-trigger',
//         start: 'top 150px',
//         end: '+=1500',
//         scrub: true,
//         pin: '.__pin',
//         // markers: true,
//       };

//       // gsap.to('.__slide', {
//       //   scrollTrigger: pinScroller,
//       // });

//       const scroller = {
//         trigger: '.__slide',
//         start: 'top 90%',
//         end: '+=400',
//         scrub: true,
//         // pin: true,
//         // markers: true,
//       };

//       // const scroller2 = {
//       //   trigger: '.__slide',
//       //   start: 'top 40%',
//       //   end: '+=400',
//       //   scrub: true,
//       //   markers: true,
//       // };

//       // gsap.to('.__slide', {
//       //   scrollTrigger: scroller2,
//       //   height: '100vh',
//       // });
//       const clipPathSize =
//         {
//           mobile: 16,
//           tablet: 48,
//         }[media] || 56;

//       const gapSize =
//         {
//           mobile: 16,
//           table: 48,
//         }[media] || 32 / 2;

//       const borderRadiusSize =
//         {
//           mobile: '16px',
//         }[media] || '32px';

//       gsap.fromTo(
//         '.__slider-progress',
//         {
//           opacity: 0,
//         },
//         {
//           scrollTrigger: {
//             trigger: '.__trigger',
//             start: '50% 50%',
//             end: 'bottom 70%',
//             scrub: true,
//             // markers: true,
//           },
//           ease: 'power2.in',
//           opacity: 1,
//         }
//       );

//       gsap.to('.__slide', {
//         scrollTrigger: {
//           trigger: '.__trigger',
//           start: '50% 50%',
//           end: 'bottom 70%',
//           scrub: true,
//           pin: true,
//           onUpdate: onUpdate,
//           onLeave: (inst) => {
//             // setAllowTouchMove(true);
//             // console.log(
//             //   'inst.params.allowTouchMove',
//             //   swiperRef.current.params.allowTouchMove
//             // );
//             toggleTouchMove(true);
//             // console.log(
//             //   'inst.params.allowTouchMove',
//             //   swiperRef.current.params.allowTouchMove
//             // );
//           },
//           onEnterBack: () => {
//             // setAllowTouchMove(false);
//             toggleTouchMove(false);
//           },
//         },
//         // 'clip-path': ,
//         clipPath: (index, s, nodes) => {
//           if (media !== 'desktop') {
//             return `
//             inset(${clipPathSize}px
//               ${clipPathSize}px
//               ${clipPathSize}px
//               ${clipPathSize}px
//               round
//               ${borderRadiusSize}
//               ${borderRadiusSize}
//               ${borderRadiusSize}
//               ${borderRadiusSize})
//               `;
//           }

//           if (index === 0) {
//             return `
//             inset(${clipPathSize}px
//               ${gapSize}px
//               ${clipPathSize}px
//               ${clipPathSize}px
//               round
//               ${borderRadiusSize}
//               ${borderRadiusSize}
//               ${borderRadiusSize}
//               ${borderRadiusSize})
//               `;
//           }

//           if (index === nodes.length - 1) {
//             return `
//             inset(${clipPathSize}px
//               ${clipPathSize}px
//               ${clipPathSize}px
//               ${gapSize}px
//               round
//               ${borderRadiusSize}
//               ${borderRadiusSize}
//               ${borderRadiusSize}
//               ${borderRadiusSize})
//               `;
//           }

//           return `
//             inset(${clipPathSize}px
//               ${gapSize}px
//               ${clipPathSize}px
//               ${gapSize}px
//               round
//               ${borderRadiusSize}
//               ${borderRadiusSize}
//               ${borderRadiusSize}
//               ${borderRadiusSize})
//             `;

//           return `
//           inset(${clipPathSize}
//             0
//             ${clipPathSize}
//             ${clipPathSize}
//             round
//             ${borderRadiusSize}
//             ${borderRadiusSize}
//             ${borderRadiusSize}
//             ${borderRadiusSize})
//             `;
//         },
//       });

//       // gsap.to('.__slide', {
//       //   scrollTrigger: scroller,
//       //   borderRadius: 32, //16 - md:32
//       // });

//       // gsap.from('.__slide-wrapper', {
//       //   // scale: 1.1,
//       //   // paddingLeft: 0,
//       //   // paddingRight: 0,
//       //   scrollTrigger: scroller,
//       // });
//     }, ref);

//     return () => {
//       ctx.revert();
//       // console.log('reverting');
//     };
//   }, [media, init, onUpdate, toggleTouchMove]);

//   return (
//     <div ref={ref}>
//       <Section
//         withLayout={false}
//         className="__pin-trigger relative pb-[80px] md:pb-[72px] xl:pb-[80px]"
//       >
//         <div className="__trigger">
//           <Swiper
//             onInit={(e) => {
//               setInit(true);
//               swiperRef.current = e;
//               swiperRef.current.disable();
//             }}
//             slidesPerView={1}
//             speed={500}
//             // breakpoints={{
//             //   1280: {
//             //     slidesPerView: 1.2,
//             //   },
//             // }}
//             grabCursor={true}
//             effect={'creative'}
//             creativeEffect={{
//               prev: {
//                 // shadow: true,
//                 translate: ['-20%', 0, -150],
//                 opacity: 0,
//                 // scale: 0.95,
//               },
//               next: {
//                 opacity: 1,
//                 translate: ['100%', 0, 0],
//               },
//               // prev: {
//               //   shadow: true,
//               //   translate: [0, 0, -400],
//               // },
//               // next: {
//               //   translate: ['100%', 0, 0],
//               // },
//             }}
//             modules={[EffectCreative]}
//           >
//             {cases.map((item, i) => (
//               <SwiperSlide
//                 key={i}
//                 // className="__slide-wrapper lsat:pr-[16px] pr-[16px] pl-[16px] md:px-[48px] xl:pr-0 xl:pl-[32px]
//                 // className="__slide-wrapper pr-[16px] pl-[16px] last:pr-[16px] md:px-[48px] xl:pr-0 xl:pl-[32px]"
//                 className="__slide-wrapper "
//                 // first:xl:pl-[56px] last:xl:pr-[32px]
//                 // "
//               >
//                 {/* <Link href="#"> */}
//                 <CaseSlide item={item} index={i} />
//                 {/* </Link> */}
//               </SwiperSlide>
//             ))}
//             {media !== 'desktop' && (
//               <Layout className="__slider-progress">
//                 <SliderProgress className="mt-6" />
//               </Layout>
//             )}
//           </Swiper>
//         </div>
//       </Section>
//     </div>
//   );
// }
