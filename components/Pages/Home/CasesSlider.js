import Image from '../../Image';
import Layout from '../../Layout';
import Section from '../../Section';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectCreative } from 'swiper';
import cx from 'clsx';
import BeastImage from './assets/slider-beast.png';

import 'swiper/css';
import 'swiper/css/effect-creative';
import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { addLeadingZero } from '../../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    title: 'Beast Tesla Rent',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    image: BeastImage,
  },
  {
    title: 'Beast Tesla Rent',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    image: BeastImage,
  },
  {
    title: 'Beast Tesla Rent',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    image: BeastImage,
  },
  {
    title: 'Beast Tesla Rent',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    image: BeastImage,
  },
  {
    title: 'Beast Tesla Rent',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    image: BeastImage,
  },
];

function Col({ title, items, className = '' }) {
  return (
    <div className={className}>
      <div className="mb-4 text-xs uppercase leading-[13px]">{title}</div>
      <div className="text-sm leading-[26px]">
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
}

function CaseSlide({ item, index }) {
  return (
    <Layout className="__slide-wrapper">
      <div className="__slide relative flex h-[456px] overflow-hidden rounded-2xl text-lblue">
        <Image
          className="__slider-item absolute top-0 left-0 max-h-[456px] object-cover"
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
        <div className="relative px-6 pt-[193px] pb-[48px]">
          <div className="relative inline-block font-glow text-[11px] tracking-[2px]">
            {addLeadingZero(index + 1)}&nbsp;&nbsp;-&nbsp;&nbsp;
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
          <div className="mb-[23px] mt-[16px] font-glow text-[26px] font-medium">
            {item.title}
          </div>
          <div className="flex">
            <Col
              className="mr-11 last:mr-0"
              title="Industry"
              items={item.industry}
            />
            <Col title="Service" items={item.service} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

function NavigationProgress({ className = '' }) {
  const ref = useRef(null);
  const thumbRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiper = useSwiper();

  const thumbWidth = useMemo(() => {
    if (slidesCount > 0) {
      return 100 / slidesCount;
    }

    return 0;
  }, [slidesCount]);

  const left = useMemo(() => {
    if (slidesCount > 0) {
      const thumbWidth = trackWidth / slidesCount;
      const left = (trackWidth - thumbWidth) * progress;

      return left;
    }

    return 0;
  }, [trackWidth, slidesCount, progress]);

  useEffect(() => {
    if (swiper.slides) {
      setSlidesCount(swiper.slides.length);
    }

    const onProgress = (e, p) => {
      const progress = e.progress;
      setProgress(progress);
    };

    swiper.on('progress', onProgress);

    return () => {
      swiper.off('progress', onProgress);
    };
  }, [swiper]);

  useEffect(() => {
    const handleWidth = () => {
      if (ref.current) {
        const w = ref.current.offsetWidth;
        if (w) {
          setTrackWidth(w);
        }
      }
    };

    handleWidth();
    window.addEventListener('resize', handleWidth);

    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cx(
        'relative flex h-[16px] items-center justify-center',
        className
      )}
    >
      {slidesCount > 0 && (
        <>
          <div className="h-[1px] w-full bg-black opacity-20"></div>
          <div
            ref={thumbRef}
            style={{
              left: left,
              width: `${thumbWidth}%`,
            }}
            className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-2/4 bg-black"
          ></div>
        </>
      )}
    </div>
  );
}

export default function CasesSlider() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scroller = {
        trigger: '.__slide',
        start: 'top bottom',
        end: '+=500',
        scrub: true,
        markers: true,
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
      console.log('reverting');
    };
  }, []);

  return (
    <div ref={ref}>
      <Section withLayout={false} className="bg-white pb-[80px]">
        <Swiper
          grabCursor={true}
          effect={'creative'}
          watchSlidesProgress={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-20%', 0, -1],
              opacity: 0,
              scale: 0.95,
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          modules={[EffectCreative]}
        >
          {cases.map((item, i) => (
            <SwiperSlide key={i}>
              <CaseSlide item={item} index={i} />
            </SwiperSlide>
          ))}
          <Layout>
            <NavigationProgress className="mt-6" />
          </Layout>
        </Swiper>
      </Section>
    </div>
  );
}

export function CasesSlider2() {
  return (
    <Section withLayout={false} className="bg-white">
      {cases.map((item, i) => (
        // <Layout key={i}>
        <div
          key={i}
          ref={ref}
          className="ref relative flex h-[456px] overflow-hidden rounded-2xl text-lblue"
        >
          <Image
            className="__slider-item absolute top-0 left-0 max-h-[456px] object-cover"
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
          <div className="relative px-6 pt-[193px] pb-[48px]">
            <div className="font-glow text-[11px] tracking-[2px]">
              {addLeadingZero(i + 1)}&nbsp;&nbsp;-&nbsp;&nbsp;
              {addLeadingZero(cases.length)}
            </div>
            <div className="mb-[23px] mt-[16px] font-glow text-[26px] font-medium">
              {item.title}
            </div>
            <div className="flex">
              <Col
                className="mr-11 last:mr-0"
                title="Industry"
                items={item.industry}
              />
              <Col title="Service" items={item.service} />
            </div>
          </div>
        </div>
        // </Layout>
      ))}
    </Section>
  );
}
