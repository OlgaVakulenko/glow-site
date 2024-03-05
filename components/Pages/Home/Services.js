import Layout from '../../Layout';
import Ideate from '../../Icons/Ideate';
import Investigate from '../../Icons/Investigate';
import Iterate from '../../Icons/Iterate';
import Animated from '../../Animated';
import React, { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderProgress from '../../SliderProgress';
import { useMedia, useMediaAtom } from '../../../lib/agent';
import InViewport from '../../InViewport';
import Link from 'next/link';
import LinkArrowCircle from '../../LinkArrowCircle';
import cx from 'clsx';

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
    description: (
      <>
        Whether it is a large public platform or a small internal solution, in
        1-3 months we will provide a&nbsp;product prototype while implementing
        even the&nbsp;most complex requests.
      </>
    ),
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
  const { Wrapper, SlideWrapper, WrapperInner } = useMemo(() => {
    if (media !== 'mobile') {
      return { Wrapper: 'div', SlideWrapper: 'div', WrapperInner: 'div' };
    }

    return {
      Wrapper: Swiper,
      SlideWrapper: SwiperSlide,
      WrapperInner: React.Fragment,
    };
  }, [media]);

  return (
    <div className="">
      <Layout className="mb-[47px] md:mb-[64px] md:grid md:grid-cols-8 md:gap-8 xl:mb-[80px] xl:grid-cols-12">
        <Animated
          as="h2"
          className="mb-[21px] font-satoshi font-medium md:col-span-4 md:mb-0 md:text-[48px] md:leading-[56px] md:tracking-[-2px] xl:col-span-7 xl:max-w-[560px] xl:text-[56px] xl:text-heading-h2-2 xl:leading-[64px]"
        >
          We open to any <br /> kind of co-operation
        </Animated>
        <div className="hidden 4xl:col-span-1 4xl:block"></div>
        {/* <Animated
          delay={100}
          className="text-subtitle-m italic   md:col-span-4 md:pr-8 xl:col-span-5 xl:text-subtitle-l 4xl:col-span-4 4xl:text-[26px]"
        >
          Whatever you may need a designer&apos;s help with – we can do&nbsp;it.
          The most common cases are given below.
        </Animated> */}
      </Layout>
      <Layout disableOnMobile>
        <div className="pb-6 md:rounded-[32px] md:pb-0">
          {/* <Layout> */}
          <div className="">
            <Wrapper className=" md:flex md:justify-between md:gap-16 md:overflow-hidden md:rounded-3xl md:bg-white xl:gap-20">
              {items.map((item, index) => (
                <SlideWrapper key={index} className="!h-auto md:w-full">
                  <div className="group h-full">
                    <div className="h-full px-4 md:px-0">
                      <div className="flex h-full flex-col rounded-3xl bg-white px-6 py-10 pb-[70px] md:flex md:justify-start md:rounded-none md:px-0 md:py-9 md:pb-[68px] xl:pb-[75px] 4xl:pb-[93px]">
                        <InViewport
                          className="md:col-span-6 md:flex md:h-[80px] md:w-[80px] md:items-center"
                          onViewChange={(inView) => {
                            setIconMap((map) => ({
                              ...map,
                              [index]: inView,
                            }));
                          }}
                          delay={100}
                        >
                          <item.icon
                            className={cx({
                              // '':
                              //   index < items.length - 1,
                              // '': index === items.length - 1,
                            })}
                            isReady={iconMap[index] === true}
                          />
                        </InViewport>
                        <div>
                          <h3 className="mb-7 mt-8 font-satoshi text-2xl font-medium tracking-[0.48px] md:col-span-5 md:mb-5 md:mt-8 md:text-[28px] md:leading-[36px] xl:mt-10 xl:text-[32px] xl:leading-[40px]">
                            {item.title}
                          </h3>
                          <div
                            className={cx(
                              ' font-inter md:col-span-11 md:text-[18px] md:leading-[160%]',
                              {
                                'mb-[38px] md:mb-1': false, //turn on later on
                              }
                            )}
                          >
                            {item.description}
                          </div>
                        </div>

                        {/* <div className="mt-auto md:col-span-1 md:mt-0 md:flex md:items-center md:justify-center">
                          <button className="w-full rounded-full border border-black py-3 text-xs font-medium uppercase leading-4 tracking-[0.36px] md:w-fit md:border-none md:p-0">
                            {media === 'mobile' ? (
                              'More Details'
                            ) : (
                              <LinkArrowCircle />
                            )}
                          </button>
                        </div> */}
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
      </Layout>
    </div>
  );
}
