import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { useMediaAtom } from '../../../lib/agent';
import Animated from '../../Animated';
import SlotText from '../../SlotText';
import { Tag } from '../../Tag';
import Layout from '../../Layout';
import OurExperience from '../Home/OurExperience';
import Reviews from '../../Pages/Home/Reviews2';
import { FAQ } from '../../../pages/contact-us';
import Process from '../../Process';
import Box from '../../Box';
import Heading from '../../Heading';
import { getFullTitle } from '../../HeadTitle';
import S3 from './assets/process-s3.svg';
import S2 from './assets/process-s2.svg';
import {
  pageHeaderSubtitle,
  processHeadingTitle,
  graphicBlockItems,
  servicesHeadingTitle,
  iconsSectionItems,
  imageBlogHeadingTitle,
  imageBlockItems,
} from '../../../data/title-page-data';
import frame1_sm from './assets/frame1-sm.png';
import frame2_sm from './assets/frame2-sm.png';
import frame3_sm from './assets/frame3-sm.png';
import frame1_md from './assets/frame1-md.png';
import frame2_md from './assets/frame2-md.png';
import frame3_md from './assets/frame3-md.png';
import frame1_xl from './assets/frame1-xl.png';
import frame2_xl from './assets/frame2-xl.png';
import frame3_xl from './assets/frame3-xl.png';

import ImageBlock from './ImageBlock';
import SingleImageSlider from '../../../components/SimpleImageSlider';
import InlineVideo from '../Cases/InlineVideo';

const GraphicBlock = dynamic(() => import('../../GraphicBlock'), {
  ssr: false,
});
const IconsSection = dynamic(() => import('../../IconsSection'), {
  ssr: false,
});

const imageBlockFrames = [
  '/video/trial/trial_1.mp4',
  '/video/trial/trial_3.mp4',
  '/video/trial/trial_2.mp4',
];

function PageHeading() {
  const title = useMemo(() => {
    return (
      <>
        Try Free 3 Days
        <br />
        Design Trial Period
      </>
    );
  }, []);

  return (
    <Layout className="flex flex-col pt-[192px] md:pt-[268px] xl:pb-8 xl:pt-[296px] ">
      <Tag className="block w-fit !font-normal">
        <SlotText />
      </Tag>
      <div className="pt-[18px] md:flex md:items-end md:justify-between md:pt-[26px] xl:grid xl:grid-cols-12 xl:gap-8 xl:pt-[40px]">
        <Animated
          as="h1"
          className="mb-4 text-next-heading-4 md:mb-0 md:mr-4 md:!min-w-[496px] md:text-next-heading-3 xl:col-span-6 xl:text-[56px] xl:leading-[72px] xl:tracking-[-1px]"
        >
          {title}
        </Animated>
        <div className="hidden xl:col-span-1 xl:block"></div>
        <Animated
          delay={100}
          className="pb-[52px] text-[18px] font-normal leading-[28px] md:pb-0 md:text-next-body-l xl:col-span-5"
        >
          {pageHeaderSubtitle}
        </Animated>
      </div>
    </Layout>
  );
}

function ProcessPicture() {
  return (
    <div className="flex w-full">
      <picture className="flex-grow">
        <source srcSet={S3.src} media="(min-width:1280px)"></source>
        <source srcSet={S2.src} media="(min-width:820px)"></source>
        <img className="w-full" src={S2.src} alt="" />
      </picture>
    </div>
  );
}

export default function Trial() {
  const media = useMediaAtom();
  const mobile = media === 'mobile';

  const ourExperienceTitle = useMemo(() => {
    return (
      <>
        All services for free
        <br /> 3 days design trial
      </>
    );
  }, []);

  return (
    <div className="pb-[52px] md:pb-[72px] xl:pb-[88px]">
      <Head>
        <title>
          {getFullTitle(
            'Risk-Free UX/UI Design Services | Free 3-Day Trial | Glow Team'
          )}
        </title>
        <meta
          name="description"
          content="UX/UI design with Glow Team! Enjoy a free 3-day trial to see how our expert designs elevate your brand. No commitment required."
        ></meta>
        <meta
          name="keywords"
          content="ui ux design services, design services, ux design, design process, ui and ux design, visual design, ux designers, design experts, ux design process, digital product, design principles, best practices, development services, design and development, information architecture, interface design, user interactions, user flow, user behavior, user experience design services, research and analysis"
        />
      </Head>
      <PageHeading />
      <Box>
        <IconsSection
          items={iconsSectionItems}
          sectionClasses="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-10"
          blockClasses="gap-10 md:gap-[80px]"
          titleClasses="font-normal text-[24px] leading-[32px] font-satoshi font-normal ml-6 md:text-[32px] md:leading-[40px] md:tracking-[-1px] md:font-medium "
          iconClasses="w-20 h-20"
          cardView
        />
      </Box>
      <Process
        trial={true}
        headingTitle={processHeadingTitle}
        isColumn
        headingDescriptionClassNames="md:gap-x-8 gap-y-4  md:!text-next-body-m xl:!text-next-body-l overflow-hidden"
      >
        {mobile ? <SingleImageSlider slide={S2.src} /> : <ProcessPicture />}
      </Process>
      <Box className="xl:pb-[48px]">
        <ImageBlock
          headerTitle={imageBlogHeadingTitle}
          items={imageBlockItems}
          frames={imageBlockFrames}
        />
      </Box>
      <Layout>
        <Box className="md:pb-0">
          <Heading
            trial
            title={servicesHeadingTitle}
            descriptionClassNames="!text-next-body-m xl:!text-next-body-l md:!max-w-[448px] xl:!max-w-[528px] md:self-end font-normal"
          />
          <Box className="!pb-0 pt-10 md:pt-14 xl:pt-20">
            <GraphicBlock
              items={graphicBlockItems}
              className="gap-y-[40px] md:!gap-x-8"
              titleClassNames="md:tracking-[0]"
              blockClassNames="xl:max-w-[304px]"
              columnNumber={{ md: 4, xl: 4 }}
              cardView
              trial
            />
          </Box>
        </Box>
      </Layout>
      <Box className="xl:pt-20 md:pt-[56px]">
        <OurExperience
          trial
          title={ourExperienceTitle}
          padding={false}
          titleClassName="!text-next-heading-5"
        />
      </Box>
      <Box>
        <Reviews padding={false} trial />
      </Box>
      <Box>
        <Layout>
          <FAQ padding={false} animate trial />
        </Layout>
      </Box>
    </div>
  );
}
