import { Swiper, SwiperSlide } from 'swiper/react';
import { addLeadingZero, useRem } from '../../../lib/utils';
import SliderProgress from '../../SliderProgress';
import cx from 'clsx';
import 'swiper/css';
import Layout from '../../Layout';
import { useMediaAtom } from '../../../lib/agent';
import { atom } from 'jotai';
import { useAtom } from 'jotai';
import { forwardRef, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useSetAtom } from 'jotai';
import Animated from '../../Animated';

const steps = [
  {
    title: 'Discovery Call',
    description:
      'We get in touch with your team and gather all the information necessary to dive into your product.',
  },
  {
    title: 'Design',
    description:
      'With all the data gathered, we develop a personalized design that will complement your product and make it shine and glow.',
  },
  {
    title: 'Work Presentation',
    description:
      'You receive the result of our work during a presentation call, where we not only show you the new design, but also explain our decisions and how they will improve the product.',
  },
  {
    title: 'Partnership',
    description:
      'After the end of the trial period, we can form a long-term partnership to bring your product to its full potential.',
  },
];

function StepContainer({ className, children }) {
  return (
    <div className={cx('bg-[#F3F2F4] md:rounded-[32px]', className)}>
      {children}
    </div>
  );
}

const titleHeightAtom = atom([]);
const Step = forwardRef(({ title, description, index, className }, ref) => {
  const elRef = useRef();
  const [h, setH] = useAtom(titleHeightAtom);
  const refH = useRef(h);

  useLayoutEffect(() => {
    refH.current = h;
  }, [h]);

  useEffect(() => {
    const handleResize = () => {
      if (!elRef.current) return;
      const elHeight = elRef.current.offsetHeight;
      setH((heights) => [...heights, elHeight]);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setH]);

  const rem = useRem();

  const maxH = useMemo(() => {
    return Math.max(...h);
  }, [h]);

  return (
    <div
      ref={ref}
      className={cx(
        'h-full rounded-2xl bg-white px-6 pb-8 pt-6 md:h-auto',
        className
      )}
      style={{
        boxShadow:
          '0px 0.27173px 0.40759px 0px rgba(0, 0, 0, 0.02), 0px 0.75129px 1.12694px 0px rgba(0, 0, 0, 0.03), 0px 1.80882px 2.71324px 0px rgba(0, 0, 0, 0.03), 0px 6px 9px 0px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="mb-10 text-body-heading-m text-brand">
        {addLeadingZero(index + 1)}
      </div>
      <div
        className="mb-4 text-[22px] font-medium leading-8 tracking-[0.44px] md:flex md:items-end xl:min-h-full"
        style={{
          minHeight: rem(maxH),
        }}
      >
        <div ref={elRef}>{title}</div>
      </div>
      <div className="text-body-s" style={{ textWrap: 'balance' }}>
        {description}
      </div>
    </div>
  );
});

export default function Steps() {
  const setHeight = useSetAtom(titleHeightAtom);

  const media = useMediaAtom();

  useEffect(() => {
    const handleResize = () => {
      setHeight([]);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Animated className="pb-[77px] md:pb-[120px] xl:pb-[107px]">
      <div className="bg-[#F3F2F4] pb-20 pt-20 md:mx-4 md:rounded-[32px] md:pb-6 md:pt-8 xl:pb-8 xl:pt-10">
        <div className="px-4 md:px-6 xl:px-8">
          <h3 className="mb-6 font-glow text-heading-h3 xl:mb-8">
            Step-by-step process for trial period
          </h3>
        </div>
        {media === 'mobile' ? (
          <Swiper slidesPerView={1.3} spaceBetween={8}>
            {steps.map((step, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <StepContainer
                  className={cx(
                    'h-full',
                    i === 0 && 'ml-4',
                    i === steps.length - 1 && 'mr-4'
                  )}
                >
                  <Step
                    index={i}
                    title={step.title}
                    description={step.description}
                  />
                </StepContainer>
              </SwiperSlide>
            ))}
            <Layout className="pt-4">
              <SliderProgress />
            </Layout>
          </Swiper>
        ) : (
          // <Layout>
          <StepContainer className="flex md:space-x-2 md:px-6 xl:space-x-8 xl:px-8">
            {steps.map((step, i) => (
              <Animated
                as={Step}
                index={i}
                title={step.title}
                description={step.description}
                className="grow basis-0"
                key={i}
                delay={100 * i}
              ></Animated>
            ))}
          </StepContainer>
          // </Layout>
        )}
      </div>
    </Animated>
  );
}
