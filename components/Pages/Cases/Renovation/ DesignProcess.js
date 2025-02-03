import Layout from '../../../Layout';
import Animated from '../../../Animated';
import RespImage from './RespImage';
import Frame7md from './assets/frame-7-md.png';
import Frame7xl from './assets/frame-7-xl.png';
import Frame7 from './assets/frame-7.png';
import Frame8md from './assets/frame-8-md.svg';
import Frame8xl from './assets/frame-8-xl.svg';
import Frame8 from './assets/framee-8.svg';
import Frame9md from './assets/frame-9-md.svg';
import Frame9xl from './assets/frame-9-xl.svg';
import Frame9 from './assets/frame-9.svg';
import Frame10md from './assets/frame-10-md.svg';
import Frame10xl from './assets/frame-10-xl.svg';
import Frame10 from './assets/frame-10.svg';
import Image from 'next/image';
import RespSVG from './RespSVG';

function TitleSection({ className, children }) {
  return (
    <Animated
      as="h2"
      className={`font-satoshi text-[32px] font-medium leading-[40px] tracking-[-1px] text-white md:text-[48px] md:leading-[64px] xl:text-[56px] xl:leading-[72px]  ${className}`}
    >
      {children}
    </Animated>
  );
}

function TitleDesc({ className, children }) {
  return (
    <Animated
      as="p"
      className={`text-[16px] font-normal leading-6 text-white md:text-[20px] md:leading-8 ${className}`}
    >
      {children}
    </Animated>
  );
}

export default function DesignProcess() {
  return (
    <div className="bg-lightGray">
      <Layout
        disablePadding
        className="overflow-hidden rounded-[32px] bg-charcoal-black md:rounded-[56px]"
      >
        <Layout className="overflow-hidden mb-[16px] sm:mb-[0px]">
          <div className="pb-10 pt-[72px] md:pb-[64px] md:pt-[96px] xl:pb-[120px] xl:pt-[120px]">
            <div className="mb-[40px] flex flex-col  justify-start md:mb-[48px] xl:mb-[96px]">
              <div className="mb-8 w-fit rounded-[32px] bg-light-green px-4 py-2 font-inter text-[12px] font-medium uppercase leading-[24px] tracking-[0.02em] text-lightGray md:mb-[34px]">
                The process
              </div>
              <div className="flex w-full flex-col justify-between md:gap-y-6 xl:flex-row xl:gap-x-[96px]">
                <TitleSection className="md:w-[94%] xl:w-[56%]">
                  {
                    'Before starting the project, we by creating a roadmap for our design process'
                  }
                </TitleSection>
                <TitleDesc className="xl:w-[39%]">
                  We worked in two-week sprints and kept in touch with the
                  client throughout the project, both by texting in slack and
                  via video calls twice a week to discuss progress. This way we
                  ensured that we stayed on the same page with the client and
                  that the design process ran smoothly.
                </TitleDesc>
              </div>
            </div>
            <RespImage
              pictureClassname=""
              className="hidden h-full md:block md:max-h-[392px] xl:max-h-[536px]"
              src={Frame7}
              md={Frame7md}
              xl={Frame7xl}
            />

            <div className="relative z-[9] w-screen overflow-scroll md:hidden">
              <div className="center-block fix-width scroll-inner">
                <RespImage
                  className="!w-auto max-h-[294px] pb-10 pr-[33px] xs:max-h-initial md:max-h-[392px] md:pb-0 xl:max-h-[536px]"
                  src={Frame7md}
                  md={Frame7md}
                  xl={Frame7xl}
                />
              </div>
            </div>
          </div>
        </Layout>
        <Layout className="bg-charcoal-black xl:!pr-[56px]">
          <div className="mb-4 flex flex-col gap-y-8 rounded-[24px] bg-light-black pb-0 pt-8 md:flex-row md:justify-between md:gap-x-[50px] md:rounded-[40px] md:py-10 md:pl-8 md:pr-0 x-920:gap-x-[88px] xl:mb-8 xl:gap-x-[123px] xl:py-[80px] xl:pl-[72px]">
            <div className="flex flex-col items-start justify-between px-4 md:w-[46%] md:px-0 x-920:w-[39%] xl:w-[34.2%]">
              <TitleSection className="mb-6 md:mb-0 xl:pt-4">
                {'Customer'} <br /> {'journey map'}
              </TitleSection>
              <div>
                <TitleDesc className="mb-4">
                  To understand the challenges facing both categories of users
                  during a renovation project, as well as their goals and pains,
                  we created a detailed journey map for each category.
                </TitleDesc>
                <TitleDesc className="">
                  We then highlighted opportunities to improve the user
                  experience at each step of the journey.
                </TitleDesc>
              </div>
            </div>
            <div className="pl-4 md:max-h-[646px] md:w-[48%] md:pl-0 x-920:w-[57.5%] xl:max-h-[760px] xl:w-[64%]">
              <RespSVG
                className="h-full w-full rounded-br-[24px] md:rounded-br-[40px]"
                src="/img/wr/frame-8.svg"
                md="/img/wr/frame-8-md.svg"
                xl="/img/wr/frame-8-xl.svg"
              />
            </div>
          </div>
        </Layout>
        <Layout className="bg-charcoal-black xl:!pr-[56px]">
          <div className="mb-4 flex flex-col gap-y-8 rounded-[24px] bg-light-black pb-0 pt-8 md:flex-row md:justify-between md:gap-x-[20px] md:rounded-[40px] md:py-10 md:pl-8 md:pr-0 x-920:gap-x-[72px] xl:mb-8 xl:gap-x-[144px] xl:py-[56px] xl:pl-[72px]">
            <div className="flex flex-col items-start justify-between px-4 md:w-[49%] md:px-0 x-920:w-[39%] xl:w-[34.6%]">
              <TitleSection className="mb-6 md:mb-0 xl:pt-4">
                {'Feature prioritization matrix'}
              </TitleSection>
              <div className="xl:pb-10">
                <TitleDesc className="mb-4">
                  Based on CJM, we made a list of features that could be present
                  in the apps. Then we gathered stakeholders and prioritized
                  these features based on the resources spent on development and
                  the impact on the user experience.
                </TitleDesc>
                <TitleDesc className="">
                  This allowed us to highlight the most important features that
                  would make it into the first version.
                </TitleDesc>
              </div>
            </div>
            <div className="pl-4 md:max-h-[666px] md:w-[49%] md:pl-0  x-920:w-[65.5%] xl:max-h-[808px] xl:w-[62.7%]">
              <RespSVG
                className="h-full w-full rounded-br-[24px] md:rounded-br-[40px]"
                src="/img/wr/frame-9.svg"
                md="/img/wr/frame-9-md.svg"
                xl="/img/wr/frame-9-xl.svg"
              />
            </div>
          </div>
        </Layout>
        <Layout className="mb-5 bg-charcoal-black md:mb-8 xl:mb-[64px] xl:!pr-[56px]">
          <div className="rounded-[24px] bg-light-black py-8 pl-4 md:rounded-[40px] md:px-[32px] md:py-[40px] xl:px-[72px] xl:pb-[64px] xl:pt-[96px]">
            <div className="mb-8 flex flex-col items-start justify-between pr-4 md:flex-row md:pr-0 xl:mb-4">
              <TitleSection className="md:md-0 mb-6 md:w-[32%] x-920:w-[33%] xl:w-[33.5%]">
                {'Application map'}
              </TitleSection>
              <TitleDesc className="md:w-[53%] x-920:w-[47%] xl:w-[46.5%]">
                Next, we had to decide on the structure of the application. For
                this purpose, we grouped the main functionality and top-priority
                features into categories, which became sections of the main
                navigation. We also defined the main actions to be performed by
                the user in each section.
              </TitleDesc>
            </div>
            <div className="md:max-h-[666px] xl:max-h-[616px]">
              <RespSVG
                className="h-full w-full rounded-br-[24px] md:rounded-br-[40px]"
                src="/img/wr/frame-10.svg"
                md="/img/wr/frame-10-md.svg"
                xl="/img/wr/frame-10-xl.svg"
              />
            </div>
          </div>
        </Layout>
      </Layout>
    </div>
  );
}
