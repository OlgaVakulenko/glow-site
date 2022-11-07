import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import { EffectCreative } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mediaAtom, useMedia } from '../../../lib/agent';
import { addLeadingZero } from '../../../lib/utils';
import Image from '../../Image';
import Layout from '../../Layout';
import Section from '../../Section';
import SliderProgress from '../../SliderProgress';
import BeastImage from './assets/slider-beast.png';
import CaseDesktop from './assets/case-desktop-1.png';
import cx from 'clsx';

gsap.registerPlugin(ScrollTrigger);

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
    <div className="">
      <div className="__slide relative flex h-[456px] overflow-hidden rounded-2xl text-lblue md:h-[688px] md:items-end md:rounded-[32px]">
        <Image
          className="__slider-item absolute top-0 left-0 h-full max-h-[456px] w-full object-cover md:max-h-full"
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
        <div className="relative px-6 pt-[193px] pb-12 md:px-[45px] md:pb-[57px] md:pt-[250px]">
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

export default function CasesSlider() {
  const ref = useRef();
  const [media] = useAtom(mediaAtom);

  useEffect(() => {
    // if (media === 'desktop') {
    //   return;
    // }

    const ctx = gsap.context(() => {
      const scroller = {
        trigger: '.__slide',
        start: 'top 90%',
        end: '+=400',
        scrub: true,
        // markers: true,
      };

      gsap.to('.__slide', {
        scrollTrigger: scroller,
        borderRadius: 0,
      });

      gsap.to('.__slide-wrapper', {
        paddingLeft: 0,
        paddingRight: 0,
        scrollTrigger: scroller,
      });
    }, ref);

    return () => {
      ctx.revert();
      // console.log('reverting');
    };
  }, [media]);

  return (
    <div ref={ref}>
      <Section
        withLayout={false}
        className="pb-[80px] md:pb-[72px] xl:pb-[80px]"
      >
        <Swiper
          slidesPerView={1}
          speed={500}
          breakpoints={{
            1280: {
              slidesPerView: 1.2,
              // spaceBetween: 100,
            },
          }}
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              // shadow: true,
              translate: ['-20%', 0, -150],
              opacity: 0,
              // scale: 0.95,
            },
            next: {
              opacity: 1,
              translate: ['100%', 0, 0],
            },
            // prev: {
            //   shadow: true,
            //   translate: [0, 0, -400],
            // },
            // next: {
            //   translate: ['100%', 0, 0],
            // },
          }}
          modules={[EffectCreative]}
        >
          {cases.map((item, i) => (
            <SwiperSlide
              key={i}
              // className="__slide-wrapper lsat:pr-[16px] pr-[16px] pl-[16px] md:px-[48px] xl:pr-0 xl:pl-[32px]
              className="__slide-wrapper pr-[16px] pl-[16px] last:pr-[16px] md:px-[48px] xl:pr-0 xl:pl-[32px] 

              "
              // first:xl:pl-[56px] last:xl:pr-[32px]
              // "
            >
              <CaseSlide item={item} index={i} />
            </SwiperSlide>
          ))}
          {media !== 'desktop' && (
            <Layout>
              <SliderProgress className="mt-6" />
            </Layout>
          )}
        </Swiper>
      </Section>
    </div>
  );
}
