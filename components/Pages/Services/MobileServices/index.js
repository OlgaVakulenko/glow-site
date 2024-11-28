import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import IntroSection2 from '../../../IntroSection2';
import Layout from '../../../../components/Layout';
import Reviews from '../../../../components/Pages/Home/Reviews2';
import TrialBanner from '../../../../components/Pages/Home/TrialBanner';
import Process from '../Process';
import Box from '../../../Box';
import Heading from '../../../Heading';
import Slider from '../Slider';
import { getFullTitle } from '../../../../components/HeadTitle';
import S1 from '../assets/ui-ux-s1.svg';
import S2 from '../assets/ui-ux-s2.svg';
import S3 from '../assets/ui-ux-s3.svg';
import { items } from '../../../../data/mobile-services-graphic-data';

const GraphicBlock = dynamic(() => import('../../../GraphicBlock'), {
  ssr: false,
});

function PageHeading() {
  const title = useMemo(() => {
    return (
      <>
        Mobile application
        <br />
        design services
      </>
    );
  }, []);

  return (
    <IntroSection2
      className="!pt-[192px] md:!pb-0 md:!pt-[271px] xl:!pb-8 xl:!pt-[300px]"
      bodyClassName="md:!text-next-body-l"
      headingClassname="md:!min-w-[496px] md:mr-4"
      title={title}
      subtitle="Developing a quality mobile application becomes a key element of successful interaction between a company and its audience."
    />
  );
}

function ProcessPicture() {
  return (
    <div className="mt-10 flex w-full rounded-[32px] bg-[rgba(25,25,27,0.03)] px-6 py-8 md:mt-14 md:px-8 md:py-14 xl:mt-20 xl:px-16 xl:py-[88px]">
      <picture className="flex-grow">
        <source srcSet={S3.src} media="(min-width:1280px)"></source>
        <source srcSet={S2.src} media="(min-width:820px)"></source>
        <source srcSet={S1.src}></source>
        <img className="w-full" src={S1.src} alt="" />
      </picture>
    </div>
  );
}

export default function MobileServices() {
  const processHeadingTitle = useMemo(() => {
    return (
      <>
        The importance of professional <br className="hidden xl:block" /> design{' '}
        <br className="hidden md:block xl:hidden" />
        in app development
      </>
    );
  }, []);

  const processHeadingDescription = useMemo(() => {
    return (
      <>
        <div className="md:max-w-[464px] xl:max-w-[596px]">
          We can offer you a design that achieves business goals and solves user
          problems. It means you get a double plus for your business! Android?
          iOS? We can design for both native and custom apps. Our mobile app
          design services combine creativity and functionality to make your app
          stand out.
        </div>
        <div className="md:max-w-[464px] xl:max-w-[596px]">
          Working with mobile app designs requires meticulous and careful work.
          Glow team will deliver the perfect result with clear processes and
          transparent communication. Starting a project with us is simple. Our
          streamlined approach ensures great results every time you want
          something perfect.
        </div>
      </>
    );
  }, []);

  const servicesHeadingTitle = useMemo(() => {
    return (
      <>
        Mobile app designs
        <br className="hidden md:block xl:hidden" /> tailored
        <br className="hidden xl:block" /> to your
        <br className="hidden md:block xl:hidden" /> business needs
      </>
    );
  }, []);

  return (
    <div className="pb-[52px] md:pb-[72px] xl:pb-[88px]">
      <Head>
        <title>{getFullTitle('Mobile App Design Services')}</title>
        <meta
          name="description"
          content="Explore top-tier mobile app design services. Hire custom app designers for iOS and Android to deliver UX/UI solutions that elevate your app."
        ></meta>
        <meta
          name="keywords"
          content="ui ux design services, design services, ux design, design process, ui and ux design, visual design, ux designers, design experts, ux design process, digital product, design principles, best practices, development services, design and development, information architecture, interface design, user interactions, user flow, user behavior, user experience design services, research and analysis"
        />
      </Head>
      <PageHeading />
      <Box>
        <Slider mobileURLs={['/beast', '/jucr']} />
      </Box>
      <Process
        layoutClassNames="!px-2 md:!px-8 xl:!px-16"
        headingClassNames="pl-4 md:pl-0"
        headingTitle={processHeadingTitle}
        headingDescription={processHeadingDescription}
        isColumn
        headingDescriptionClassNames="md:gap-x-8 gap-y-4 md:!text-next-body-m xl:!text-next-body-l"
      >
        <ProcessPicture />
      </Process>
      <Layout>
        <Box>
          <Heading
            title={servicesHeadingTitle}
            description="Your brand is unique, and so should your app designs. We provide tailored design solutions to meet your business needs, ensuring your digital presence connects with your audience and delivers results."
            titleClassNames="!mb-6 md:!mb-0"
            descriptionClassNames="!text-next-body-m xl:!text-next-body-l md:!max-w-[448px] xl:!max-w-[528px] md:self-end font-normal"
          />
          <Box className="!pb-0 pt-10 md:pt-14 xl:pt-20">
            <GraphicBlock
              items={items}
              className="md:!gap-x-8 md:gap-y-[60px]"
              descriptionClassNames="md:pr-12 md:leading-[28px] xl:pr-3"
              titleClassNames="md:tracking-[0]"
              blockClassNames="xl:min-w-[422px]"
            />
          </Box>
        </Box>
        <Box className="grid gap-16 xl:gap-[120px]">
          <TrialBanner />
        </Box>
      </Layout>
      <Box>
        <Reviews padding={false} />
      </Box>
    </div>
  );
}
