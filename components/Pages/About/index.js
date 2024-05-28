import cx from 'clsx';
import Image, { Source } from '../../Image';
import Layout from '../../Layout';
import DefaultLayout from '../Layouts/DefaultLayout';
// import Img from './assets/team-cover.png';
import Head from 'next/head';
import Animated from '../../Animated';
import HRule from '../../HRule';
import { getFullDescription, getFullTitle } from '../../HeadTitle';
import IntroSection2 from '../../IntroSection2';
import BlogPosts from './BlogPosts';
import Founders from './Founders';
import Logos from './Logos';
import Push from './Push';
import Team from './Team';
import Img from './assets/main-cover-d.jpg';
import ImgMobile from './assets/main-cover-mobile.jpg';
import TrialBanner from '../Home/TrialBanner';

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
      <IntroSection2
        title={
          <>
            Hello it’s Glow <br />
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
      <Layout>
        <Animated>
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
      <Layout className="py-10 md:py-16 xl:py-20">
        <Vision />
      </Layout>
      <Layout disableOnMobile>
        <div className="overflow-hidden rounded-[24px] bg-black px-6 py-10 pb-[56px] text-white md:rounded-[32px] md:px-16 md:pb-20 md:pt-16 xl:p-20 xl:pb-[120px]">
          <Founders />
          {/* <div className="mb-14" /> */}
          <Team />
        </div>
      </Layout>
      <Push />
      <Layout className="pt-14 md:pt-16 xl:pt-[120px]">
        <TrialBanner />
      </Layout>
      <Logos />
      <BlogPosts posts={posts} />
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
      <div className="glow mb-4 flex text-[12px] font-medium uppercase leading-[160%] xl:mb-6">
        <h2
          className="glow-border-dark2 rounded-full px-[10px] py-[4px]"
          style={{
            background: 'rgba(0,0,0,0.04)',
          }}
        >
          {heading}
        </h2>
      </div>
      <div className="font-satoshi text-[20px] font-medium leading-[32px] md:text-[24px] md:leading-[36px] xl:text-[32px] xl:leading-[40px]">
        {text}
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
            Simple design for complex <br className="hidden xl:block" />
            products
          </>
        }
        className="md:col-span-4 xl:col-span-5"
      />
      {/** self-end xl:mb-6 xl:-ml-[5.5%] */}
      <Separator className="hidden pb-6 xl:col-span-2 xl:flex xl:items-end" />
      <VisionBlock
        heading={'our vision'}
        text="To become leader in enterprise design by creating game-changing products"
        className="md:col-span-4 xl:col-span-5"
      />
    </Animated>
  );
}

About.getLayout = function getLayout(page) {
  return <DefaultLayout page={'about'}>{page}</DefaultLayout>;
};
