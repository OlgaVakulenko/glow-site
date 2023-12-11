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
import IntroSection from '../../IntroSection';
import Sphere2Image from './assets/sphere2.png';
import Head from 'next/head';
import { getFullDescription, getFullTitle } from '../../HeadTitle';

export default function About({ posts }) {
  return (
    <div>
      <Head>
        <title>{getFullTitle('About Us')}</title>
        <meta
          name="description"
          content={getFullDescription(
            `Discover the passion and expertise behind Glow Design Agency. With a mission to simplify complex product designs and a vision to lead in enterprise design.`
          )}
        />
      </Head>
      <IntroSection
        title={
          <>
            Hello it’s
            <br className="hidden md:block" /> Glow <br className="md:hidden" />
            Design <br className="hidden md:hidden" /> Agency
          </>
        }
        subtitle={
          <>
            Love for digital product and
            <br /> deep expertise of the team
          </>
        }
      />
      {/* <Layout className="pt-48 pb-14 md:pt-[241px] xl:pt-[216px]">
        <div className="mb-[75px] md:mb-[93px] xl:mb-[100px]">
          <PageSubheading>
            Love for digital product and deep expertise of the team
          </PageSubheading>
        </div>

        <PageHeading>

        </PageHeading>
      </Layout> */}
      <Layout>
        <Animated>
          <Image
            src={ImgMobile}
            className="w-full overflow-hidden rounded-[32px] object-contain md:h-[463px] md:object-cover xl:h-[664px] wide:h-[33vw] wide:object-[50%_20%]"
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
      </Layout>
      <Layout className="pb-24 pt-16 md:pb-[137px] md:pt-[111px] xl:pb-[136px] xl:pt-[103px]">
        <Vision />
      </Layout>
      <DimSection className="pt-[80px] md:pt-[160px]">
        <Founders />
        <div className="mb-14" />
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
    <div
      className={cx(
        'mb-[79px] last:mb-[0px] md:mb-0 md:w-[448px] xl:w-[528px]',
        className
      )}
    >
      <div className="mb-8 text-body-heading-s uppercase opacity-50">
        {heading}
      </div>
      <div className="text-[32px] font-medium leading-[40px] xl:text-[36px] xl:leading-[48px]">
        <h3>{text}</h3>
      </div>
    </div>
  );
}

export function Separator({ className, size = 98 }) {
  return (
    <div className={cx(className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 98 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M97.0845 0.833479L0.917969 97" stroke="black" />
      </svg>
    </div>
  );
}

function Vision() {
  return (
    <Animated className="relative md:grid md:grid-cols-8 md:gap-8 xl:grid-cols-12">
      <VisionBlock
        heading={'our  mission'}
        text={
          <>
            Simple design for complex <br className="hidden md:block" />
            products
          </>
        }
        className="md:col-span-4 xl:col-span-5"
      />
      {/** self-end xl:mb-6 xl:-ml-[5.5%] */}
      <Separator className="hidden pb-6 xl:col-span-2 xl:flex xl:items-end" />
      <VisionBlock
        heading={'our vision'}
        text="To become leader in enterprise design by creating game changing products"
        className="md:col-span-4 xl:col-span-5"
      />
    </Animated>
  );
}

About.getLayout = function getLayout(page) {
  return <DefaultLayout page={'about'}>{page}</DefaultLayout>;
};
