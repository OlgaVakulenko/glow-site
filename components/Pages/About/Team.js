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
      <SectionLink
        title="Our team"
        buttonLabel="Career"
        href="https://jobs.dou.ua/companies/glow/vacancies/"
        linkProps={{
          target: '_blank',
        }}
        description="Our talented and diverse team works together for one purpose—to unlock the potential of those around us."
        showButtonOnMobile={true}
      />
      <div className="pt-[60px]">
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
      className="group flex w-[208px] flex-col md:w-full xl:max-w-full"
    >
      <div className="relative mb-6 w-full max-w-[208px] overflow-hidden rounded-3xl pb-[100%] md:max-w-full">
        <Image
          src={image}
          alt=""
          className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={[[208, 1280], [350]]}
        />
      </div>

      <div className="mb-[6px] text-body-heading-m">{name}</div>
      <div className="text-body-s">{position}</div>
    </Wrapper>
  );
}

function ProfileLayout({ profiles: _profiles }) {
  const media = useMediaAtom();

  const profiles = useMemo(() => {
    if (media === 'mobile') return _profiles;
    const p = [..._profiles, ..._profiles.slice(0, 4)];
    p.splice(4, 0, null);
    p.splice(11, 0, null);
    p.splice(12, 0, null);
    return p;
  }, [_profiles, media]);

  if (media === 'mobile') {
    return (
      <Swiper slidesPerView={'auto'}>
        {profiles.map((profile, i) => (
          <SwiperSlide key={i} style={{ width: 'auto' }}>
            <div
              className={cx('px-2', {
                'pl-4': i === 0,
                'pr-4': i === profiles.length - 1,
              })}
            >
              <Profile {...profile} animated={false} />
            </div>
          </SwiperSlide>
        ))}
        <Layout className="pt-7">
          <SliderProgress />
        </Layout>
      </Swiper>
    );
  }

  return (
    <Layout>
      <div className="-mb-12 -mr-8 flex flex-wrap xl:-mb-[72px] xl:-mr-[29px]">
        {profiles.map((profile, i) => (
          <div
            key={i}
            className="mb-12 mr-8 w-[208px] md:w-[calc(25%-32px)] xl:mb-[72px] xl:mr-[29px] xl:w-[calc(25%-29px)]"
          >
            {profile && <Profile {...profile} index={i} />}
          </div>
        ))}
      </div>
    </Layout>
  );
}
