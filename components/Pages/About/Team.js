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
import React from 'react';

export default function Team() {
  return (
    <Section withLayout={false}>
      <SectionLink
        title="Our team"
        buttonLabel="Career"
        href="#"
        description="Our talented and diverse team works together for one purpose—to unlock the potential of those around us."
        showButtonOnMobile={true}
      />
      <div className="pt-[60px]">
        <ProfileLayout profiles={profiles} />
      </div>
    </Section>
  );
}

function Profile({ image, name, position }) {
  return (
    <div className="flex w-[208px] flex-col md:w-full xl:max-w-full">
      <div className="relative mb-8 w-full max-w-[208px] overflow-hidden rounded-3xl pb-[100%] xl:max-w-full">
        <Image src={image} alt="" className="absolute inset-0 object-cover" />
      </div>

      <div className="mb-2 text-body-heading-m">{name}</div>
      <div className="text-body-s">{position}</div>
    </div>
  );
}

function ProfileLayout({ profiles }) {
  const media = useMediaAtom();

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
              <Profile {...profile} />
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
      <div className="-mr-8 -mb-12 flex flex-wrap md:justify-center xl:-mb-[72px] xl:-mr-[29px]">
        {profiles.map((profile, i) => (
          <div
            key={i}
            className="mr-8 mb-12 w-[208px] md:w-[calc(25%-32px)] xl:mr-[29px] xl:mb-[72px] xl:w-[calc(25%-29px)]"
          >
            <Profile {...profile} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
