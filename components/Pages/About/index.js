import cx from 'clsx';
import Image, { Source } from '../../Image';
import Layout from '../../Layout';
import DefaultLayout from '../Layouts/DefaultLayout';
// import Img from './assets/team-cover.png';
import Head from 'next/head';
import Animated from '../../Animated';
import HRule from '../../HRule';
import { getFullDescription, getFullTitle } from '../../HeadTitle';
import BlogPosts from './BlogPosts';
import Founders from './Founders';
import Push from './Push';
import Team from './Team';
import Img from './assets/main-cover-d.jpg';
import ImgMobile from './assets/main-cover-mobile.jpg';
import TrialBanner from '../Home/TrialBanner';
import Awards from '../../Awards';

function IntroSection({ title, subtitle, className, headingClassname }) {
  return (
    <Layout
      className={cx(
        'pb-16 pt-[140px] md:flex md:items-end md:justify-between md:pb-16 md:pt-[268px] xl:grid xl:grid-cols-12 xl:gap-8 xl:pb-[120px] xl:pt-[296px]',
        {},
        className
      )}
    >
      <Animated
        as="h1"
        className={cx(
          'mb-6 md:mb-0 md:mr-24 md:min-w-[416px] text-next-heading-4 md:text-next-heading-3 xl:text-next-heading-0 xl:col-span-6 xl:mr-0',
          headingClassname
        )}
      >
        {title}
      </Animated>
      <div className="hidden xl:col-span-2 xl:block"></div>
      <Animated
        delay={100}
        className="text-[16px] leading-[160%] md:text-next-body-xxl xl:text-next-body-l xl:col-span-4"
      >
        {subtitle}
      </Animated>
    </Layout>
  );
}

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
            Hello! It’s Glow <br />
            Design Agency
          </>
        }
        subtitle={
          <>
            We help startups, scale-ups and unicorns to improve product metrics
            through design: Speed up task completion time
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
      <Layout className="pb-[52px] md:pb-[72px] xl:pb-[88px]">
        <Animated className="-mx-2 md:mx-0">
          <Image
            src={ImgMobile}
            className="aspect-video w-full overflow-hidden rounded-[24px] object-cover object-top  md:h-[473px] md:rounded-[32px] xl:h-[609px] wide:h-[33vw] wide:object-[50%_20%]"
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
      <Layout className="pb-16 pt-[52px] md:pb-16 md:pt-[72px] xl:pb-[120px] xl:pt-[88px]">
        <Vision />
      </Layout>
      <Layout disableOnMobile className="pb-[52px] md:pb-[72px] xl:pb-[88px]">
        <div className="overflow-hidden rounded-[24px] bg-black px-6 py-10 pb-[48px] text-white md:rounded-[32px] md:px-16 md:pb-20 md:pt-16 xl:p-20 xl:pb-[120px]">
          <Founders />
          {/* <div className="mb-14" /> */}
          <Team />
        </div>
      </Layout>
      <Push />
      <Layout className="pb-[52px] pt-14 md:py-[72px] xl:py-[88px]">
        <TrialBanner />
      </Layout>
			<Awards />
      <div className="pt-[52px] md:pt-[72px] xl:pt-[88px]">
        <BlogPosts posts={posts} />
      </div>
    </div>
  );
}

function VisionBlock({ heading, text, className = '' }) {
  return (
    <div
      className={cx(
        'mb-10 last:mb-[0px] md:mb-0 md:w-[448px] xl:w-[528px]',
        className
      )}
    >
      <div className="glow mb-4 flex text-[12px] font-medium uppercase leading-[20px]  tracking-[0.02em] xl:mb-6">
        <h2
          className="glow-border-dark2 rounded-full px-[10px] py-[4px]"
          style={{
            background: 'rgba(0,0,0,0.04)',
          }}
        >
          {heading}
        </h2>
      </div>
      <div className="font-satoshi text-[20px] font-medium  leading-[32px] md:text-[24px] md:leading-[36px] xl:text-next-heading-5">
        {text}
      </div>
    </div>
  );
}

export function Separator({ className, size = 98 }) {
  return (
    <div className={cx(className)}>
      <svg
        width="121"
        height="122"
        viewBox="0 0 121 122"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M120.5 1L0.5 121" stroke="#19191B" />
      </svg>
    </div>
  );
}

function Vision() {
  return (
    <Animated className="relative md:grid md:grid-cols-2 md:gap-10 xl:grid-cols-12">
      <VisionBlock
        heading={'our  mission'}
        text={
          <>
            Simple design for complex <br className="hidden xl:block" />
            products
          </>
        }
        className="md:col-span-1 xl:col-span-5"
      />
      {/** self-end xl:mb-6 xl:-ml-[5.5%] */}
      <Separator className="hidden xl:col-span-2 xl:flex xl:items-end" />
      <VisionBlock
        heading={'our vision'}
        text="To become a leader in enterprise design by creating game-changing products"
        className="md:col-span-1 xl:col-span-5 xl:pl-[38px]"
      />
    </Animated>
  );
}

About.getLayout = function getLayout(page) {
  return <DefaultLayout page={'about'}>{page}</DefaultLayout>;
};
