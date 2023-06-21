import cx from 'clsx';
import { useHeaderTheme } from '../../Header';
import Layout from '../../Layout';
import PageHeading from '../../PageHeading';
import PageSubheading from '../../PageSubheading';
import DefaultLayout from '../Layouts/DefaultLayout';
import Image, { Source } from '../../Image';
// import Img from './assets/team-cover.png';
import ImgMobile from './assets/main-cover-mobile.jpg';
import Img from './assets/main-cover-d.jpg';
import DimSection from '../../DimSection';
import Founders from './Founders';
import HRule from '../../HRule';
import Team from './Team';
import Push from './Push';
import Logos from './Logos';
import BlogPosts from './BlogPosts';
import Animated from '../../Animated';
import { useEffect, useRef } from 'react';

export default function About({ posts }) {
  return (
    <div>
      <Layout className="pt-48 pb-14 md:pt-[241px] xl:pt-[216px]">
        <div className="mb-[75px] md:mb-[93px] xl:mb-[100px]">
          <PageSubheading>
            Love for digital product and deep expertise of the team
          </PageSubheading>
        </div>

        <PageHeading>
          Hello it’s
          <br /> Glow Design <br className="md:hidden" /> Agency
        </PageHeading>
      </Layout>
      <Animated>
        <Image
          src={ImgMobile}
          className="w-full object-contain md:h-[463px] md:object-cover xl:h-[664px] wide:h-[33vw] wide:object-[50%_20%]"
          alt=""
          loading="eager"
          sources={[
            <Source
              key={1}
              image={ImgMobile}
              width={768}
              media="(max-width: 768px)"
            />,
            <Source
              key={2}
              image={Img}
              width={1140}
              media="(min-width: 769px)"
            />,
          ]}
        />
      </Animated>
      <Layout className="pt-16 pb-24 md:pt-[111px] md:pb-[137px] xl:pt-[103px] xl:pb-[136px]">
        <Vision />
      </Layout>
      <DimSection className="pt-[80px] md:pt-[137px]">
        <Founders />
        <HRule className="mb-14" />
        <Team />
        <Push />
        <Logos />
        <HRule className="mb-14" />
        <BlogPosts posts={posts} />
      </DimSection>
    </div>
  );
}

function VisionBlock({ heading, text, className = '' }) {
  return (
    <div className={cx('mb-[79px] last:mb-[0px] md:mb-0 md:w-1/2', className)}>
      <div className="mb-8 text-body-heading-s uppercase opacity-50">
        {heading}
      </div>
      <div className="text-[32px] font-medium leading-[40px] xl:text-[36px] xl:leading-[48px]">
        {text}
      </div>
    </div>
  );
}

export function Separator({ className, size = 98 }) {
  return (
    <svg
      className={cx(className)}
      width={size}
      height={size}
      viewBox="0 0 98 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M97.0845 0.833479L0.917969 97" stroke="black" />
    </svg>
  );
}

function Vision() {
  return (
    <Animated className="relative md:flex xl:justify-between">
      <VisionBlock
        heading={'our  mission'}
        text={
          <>
            Simple design for complex <br className="hidden md:block" />
            products
          </>
        }
        className="md:pr-10 xl:pr-0"
      />
      {/** self-end xl:mb-6 xl:-ml-[5.5%] */}
      <Separator className="absolute top-[60%] left-[46.5%] hidden -translate-x-1/2 -translate-y-1/2 xl:block" />
      <VisionBlock
        heading={'our vision'}
        text="To become leader in enterprise design by creating game changing products"
        className="md:pl-10 xl:pl-40"
      />
    </Animated>
  );
}

About.getLayout = function getLayout(page) {
  return <DefaultLayout page={'about'}>{page}</DefaultLayout>;
};
