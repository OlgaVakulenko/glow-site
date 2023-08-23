import Layout from '../../Layout';
import Ideate from '../../Icons/Ideate';
import Investigate from '../../Icons/Investigate';
import Iterate from '../../Icons/Iterate';
import Animated from '../../Animated';
import { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderProgress from '../../SliderProgress';
import { useMedia, useMediaAtom } from '../../../lib/agent';

const items = [
  {
    icon: Ideate,
    title: 'MVP',
    description:
      'We help visualize even the wildest ideas into doable and elegant design.',
  },
  {
    icon: Investigate,
    title: 'Redesign',
    description:
      'Whether it is a large public platform or a small internal solution, in 1-3 months we will provide a product prototype while implementing even the most complex requests.',
  },
  {
    icon: Iterate,
    title: 'Long-Term',
    description:
      'We integrate into your team to build your business stronger and maximize the potential of your ideas.',
  },
];

function ServiceCard() {
  return <div>card</div>;
}

export default function Services() {
  const media = useMediaAtom();
  const [iconMap, setIconMap] = useState({});
  const { Wrapper, SlideWrapper } = useMemo(() => {
    if (media !== 'mobile') {
      return { Wrapper: 'div', SlideWrapper: 'div' };
    }

    return { Wrapper: Swiper, SlideWrapper: SwiperSlide };
  }, [media]);

  return (
    <div className="">
      <Layout className="mb-[47px] md:grid md:grid-cols-8 md:gap-8 xl:grid-cols-12">
        <div className="mb-[21px] font-glow text-[40px] font-medium leading-[41px] tracking-[-2px] md:col-span-4 md:text-[46px] md:leading-[49px] xl:col-span-7 xl:max-w-[560px] xl:text-heading-h2-2">
          We open to any kind&nbsp;of co-operation
        </div>
        <div className="text-subtitle-m italic md:col-span-4 md:pr-8 xl:col-span-5 xl:text-subtitle-l">
          If you find yourself in one of the situations described below, our
          service is exactly what you need.
        </div>
      </Layout>
      <div className="bg-[#F3F2F4] pb-6 md:mx-4 md:rounded-[32px] md:pb-0 xl:mx-14">
        {/* <Layout> */}
        <div className="pt-4 md:pt-0">
          <Wrapper className="md:grid md:gap-4 md:py-4">
            {items.map((item, index) => (
              <SlideWrapper key={index} className="!h-auto">
                <div className="h-full px-4">
                  <div className="flex h-full flex-col justify-between rounded-3xl bg-white px-6 py-10 md:grid md:grid-flow-col md:grid-cols-24 md:gap-8 md:px-10 md:py-9">
                    <Animated
                      className="md:col-span-6 md:flex md:items-center"
                      onViewChange={(inView) => {
                        setIconMap((map) => ({
                          ...map,
                          [index]: inView,
                        }));
                      }}
                      delay={100}
                    >
                      <item.icon isReady={iconMap[index] === true} />
                    </Animated>
                    <div className="mb-7 mt-9 text-2xl font-medium tracking-[0.48px] md:col-span-5 md:mt-6">
                      {item.title}
                    </div>
                    <div className="mb-[38px] text-body-m2 md:col-span-11 md:mb-1 md:mt-5 md:max-w-[384px] md:pr-5">
                      {item.description}
                    </div>
                    <div className="mt-auto md:col-span-1 md:mt-0 md:flex md:items-center md:justify-center">
                      <button className="w-full rounded-full border border-black py-3 text-xs font-medium uppercase leading-4 tracking-[0.36px] md:w-fit md:p-[19px] ">
                        {media === 'mobile' ? (
                          'More Details'
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M7.44531 1L14.346 8.07107M14.346 8.07107L7.44531 15.1421M14.346 8.07107H0.544631"
                              stroke="#19191B"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </SlideWrapper>
            ))}
            {media === 'mobile' && (
              <Layout className="mt-4">
                <SliderProgress />
              </Layout>
            )}
          </Wrapper>
        </div>
        {/* </Layout> */}
      </div>
    </div>
  );
}
