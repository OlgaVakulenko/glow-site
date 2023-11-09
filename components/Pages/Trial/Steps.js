import { Swiper, SwiperSlide } from 'swiper/react';
import { addLeadingZero } from '../../../lib/utils';
import SliderProgress from '../../SliderProgress';
import cx from 'clsx';
import 'swiper/css';
import Layout from '../../Layout';
import { useMediaAtom } from '../../../lib/agent';

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
    <div
      className={cx('rounded-3xl bg-[#F3F2F4] md:rounded-[32px]', className)}
    >
      {children}
    </div>
  );
}

function Step({ title, description, index, className }) {
  return (
    <div className={cx('px-6 py-10 md:py-16 xl:px-0', className)}>
      <div className="mb-10 text-body-heading-m opacity-50">
        {addLeadingZero(index + 1)}
      </div>
      <div className="mb-4 text-[22px] font-medium leading-8 tracking-[0.44px]">
        {title}
      </div>
      <div className="text-body-s" style={{ textWrap: 'balance' }}>
        {description}
      </div>
    </div>
  );
}

export default function Steps() {
  const media = useMediaAtom();

  return (
    <div className="pb-[77px]">
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
        <Layout>
          <StepContainer className="flex xl:space-x-16 xl:px-12">
            {steps.map((step, i) => (
              <Step
                key={i}
                index={i}
                title={step.title}
                description={step.description}
                className="grow basis-0"
              />
            ))}
          </StepContainer>
        </Layout>
      )}
    </div>
  );
}
