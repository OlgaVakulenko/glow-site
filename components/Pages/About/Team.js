import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useMediaAtom } from '../../../lib/agent';
import cx from 'clsx';
import Image from '../../Image';
import Layout from '../../Layout';
import Section from '../../Section';
import SectionLink from '../../SectionLink';
import profiles from './data';
import SliderProgress from '../../SliderProgress';
import React, { useMemo } from 'react';
import Animated from '../../Animated';

export default function Team() {
  return (
    <Section withLayout={false}>
      {/* <SectionLink
        theme="dark"
        title="Our team"
        buttonLabel="Career"
        href="https://jobs.dou.ua/companies/glow/vacancies/"
        linkProps={{
          target: '_blank',
        }}
        description="Our talented and diverse team works together for one purpose—to unlock the potential of those around us."
        showButtonOnMobile={true}
        withLayout={false}
      /> */}
      <div className="pt-[56px] md:pt-[88px]">
        <ProfileLayout profiles={profiles} />
      </div>
    </Section>
  );
}

function Profile({ image, name, position, animated = true, index = 0 }) {
  const Wrapper = useMemo(() => {
    return animated ? Animated : 'div';
  }, [animated]);

  return (
    <Wrapper
      delay={index * 50}
      className="group flex w-[255px] flex-col md:w-full xl:max-w-full"
    >
      <div className="relative mb-6 max-h-[264px] w-full max-w-[254px] overflow-hidden rounded-[20px] pb-[264px] md:max-w-full">
        <Image
          src={image}
          alt=""
          className="absolute inset-0 h-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={[[208, 1280], [350]]}
        />
      </div>

      <div className="mb-2 text-[18px] font-medium leading-[26px] xl:text-next-heading-7">
        {name}
      </div>
      <div className="text-base leading-none opacity-80 xl:text-next-body-s">
        {position}
      </div>
    </Wrapper>
  );
}

function ProfileLayout({ profiles: _profiles }) {
  const media = useMediaAtom();

  const profiles = useMemo(() => {
    return _profiles;
    // if (media === 'mobile') return _profiles;
    // const p = [..._profiles];
    // p.splice(4, 0, null);
    // p.splice(11, 0, null);
    // p.splice(12, 0, null);
    // p.splice(13, 0, null);
    // return p;
  }, [_profiles, media]);

  if (media === 'mobile') {
    return (
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={32}
        style={{
          overflow: 'visible',
        }}
      >
        {profiles.map((profile, i) => (
          <SwiperSlide key={i} style={{ width: 'auto' }}>
            <div
              className={cx('', {
                // 'pl-4': i === 0,
                // 'pr-4': i === profiles.length - 1,
              })}
            >
              <Profile {...profile} animated={false} />
            </div>
          </SwiperSlide>
        ))}
        {/* <Layout className="pt-10"> */}
        <div className="pt-10">
          <SliderProgress theme="dark" />
        </div>
        {/* </Layout> */}
      </Swiper>
    );
  }

  return (
    // <Layout>
    <div className="-mb-12 -mr-8 flex flex-wrap md:m-0 md:grid md:grid-cols-9 md:gap-8 md:gap-y-20 xl:grid-cols-12">
      {profiles.map((profile, i) => (
        <div
          key={i}
          className="mb-12 mr-8 w-[208px] md:col-span-3 md:m-0 md:w-full xl:col-span-3"
        >
          {profile && <Profile {...profile} index={i} />}
        </div>
      ))}
    </div>
    // </Layout>
  );
}
