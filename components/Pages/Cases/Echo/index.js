import Head from 'next/head';
import Header from './Header';
import Objectives from './Objectives';
import Layout from '../../../Layout';
import EchoImage from './assets/echo.png';
import EchoImageMd from './assets/echo-md.png';
import EchoImageXl from './assets/echo-xl.png';
import Frame1xl from './assets/frame-1-xl.png';
import Frame1md from './assets/frame-1-md.png';
import Frame1 from './assets/frame-1.png';
import Frame2xl from './assets/frame-2-xl.png';
import Frame2md from './assets/frame-2-md.png';
import Frame2 from './assets/frame-2.png';
import Frame3xl from './assets/frame-3-xl.png';
import Frame3md from './assets/frame-3-md.png';
import Frame3 from './assets/frame-3.png';
import Frame4xl from './assets/frame-4-xl.png';
import Frame4md from './assets/frame-4-md.png';
import Frame4 from './assets/frame-4.png';
import Frame7xl from './assets/frame-7-xl.png';
import Frame7md from './assets/frame-7-md.png';
import Frame7 from './assets/frame-7.png';
import Frame6xl from './assets/frame-6-xl.png';
import Frame6md from './assets/frame-6-md.png';
import Frame6 from './assets/frame-6.png';
import Frame8xl from './assets/frame-8-xl.png';
import Frame8md from './assets/frame-8-md.png';
import Frame8 from './assets/frame-8.png';
import Frame9xl from './assets/frame-9-xl.png';
import Frame9md from './assets/frame-9-md.png';
import Frame9 from './assets/frame-9.png';
import RespImage from '../Renovation/RespImage';
import RespSVG from '../Renovation/RespSVG';
import Animated from '../../../Animated';
import { useSetAtom } from 'jotai/index';
import { themeAtom } from '../../../../lib/theme';
import { useEffect, useRef } from 'react';
import { useHeaderTheme } from '../../../Header';
import { useMediaAtom } from '../../../../lib/agent';

export default function Echo() {
  const ref = useRef(null);
  const setTheme = useSetAtom(themeAtom);
  useHeaderTheme({ ref, theme: 'dark' });

  useEffect(() => {
    setTheme('dark');

    return () => {
      setTheme('light');
    };
  },[setTheme]);

  return (
    <div className="dark-theme bg-[#0a0a0b]">
      <Head>
        <title>Case Echo - AI Meeting Assistant</title>
        <meta
          name="description"
          content="Explore Case Echo - AI Meeting Assistant"
        ></meta>
      </Head>
      <Animated>
        <Header
          type="echo"
          title="Echo - <br /> AI Meeting Assistant"
          subtitle="Echo Assistant is an AI tool that records meetings and offers insights, simplifying your workflow."
        />
      </Animated>
      <Animated>
        <RespImage
          pictureClassname=""
          className="h-full"
          src={EchoImage}
          md={EchoImageMd}
          xl={EchoImageXl}
        />
      </Animated>
      <Animated>
        <Objectives />
      </Animated>
      <Layout className="py-[50px] md:py-[72px] xl:py-[88px]">
        <Animated>
          <RespImage
            pictureClassname=""
            className="h-full rounded-[8px] md:rounded-[24px] "
            src={Frame1}
            md={Frame1md}
            xl={Frame1xl}
          />
        </Animated>
      </Layout>
      <Layout className="py-[50px] md:py-[72px] xl:py-[88px]">
        <Animated>
          <h2 className="mb-10 font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] text-white md:mb-[56px] md:h-[77px] md:text-[56px] md:leading-[64px] xl:mb-20">
            <span className="block">Competitors research</span>
          </h2>
        </Animated>
        <Animated>
          <RespImage
            pictureClassname=""
            className="h-full"
            src={Frame2}
            md={Frame2md}
            xl={Frame2xl}
          />
        </Animated>
      </Layout>
      <Layout className="py-[50px] md:py-[72px] xl:py-[88px]">
        <Animated>
          <h2 className="mb-10 h-[77px] font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] text-white md:mb-[56px] md:text-[56px] md:leading-[64px] xl:mb-20 flex sm:block items-center">
            User Flow
          </h2>
        </Animated>
        <Animated>
          <RespSVG
            className="h-full w-full"
            src="/img/echo/frame-3.svg"
            md="/img/echo/frame-3-md.svg"
            xl="/img/echo/frame-3-xl.svg"
          />
        </Animated>
      </Layout>
      <Layout className="mb-10 pt-[50px] md:mb-[56px] md:pt-[72px] xl:mb-20 xl:pt-[88px]">
        <Animated>
          <h2 className="mb-10 h-[77px] font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] text-white md:mb-[56px] md:text-[56px] md:leading-[64px] flex sm:block items-center">
            Color
          </h2>
        </Animated>
        <div className="flex items-start gap-4 max-sm:flex-col md:gap-12 xl:gap-20 ">
          <Animated className="flex-1 flex">
            <p className="text-4 font-normal leading-[26px] text-white md:text-[20px] md:leading-[32px]">
              The application&#39;s design revolves around muted colors with
              vibrant accents, aiming to focus on the primary content while not
              missing out on essential elements.
            </p>
          </Animated>
          <Animated  className="flex-1 flex">
            <p className="text-4 font-normal leading-[26px] text-white md:text-[20px] md:leading-[32px]">
              This aligns with the core concept of the application – your call
              might be lengthy and comprehensive, but afterward, you&#39;ll
              receive a summary of the most crucial moments.
            </p>
          </Animated>
        </div>
      </Layout>
      <Animated>
        <RespSVG
          className="mb-[50px] h-full w-full md:mb-[72px] xl:mb-[88px]"
          src="/img/echo/frame-4.svg"
          md="/img/echo/frame-4-md.svg"
          xl="/img/echo/frame-4-xl.svg"
        />
      </Animated>
      <Layout className="mb-10 pt-[50px] md:mb-[56px] md:pt-[72px] xl:mb-20 xl:pt-[88px]">
        <Animated>
          <h2 className="mb-10 h-[77px] font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] text-white md:mb-[56px] md:text-[56px] md:leading-[64px] flex sm:block items-center">
            Typography
          </h2>
        </Animated>
        <Animated className="xl:flex items-start justify-between gap-4 max-sm:flex-col md:gap-12 xl:gap-[80px]">
          <p className="xl:flex-1 text-4 font-normal max-sm:mb-4 leading-[26px] text-white max-xl:mb-2 md:text-[20px]  md:leading-[32px] xl:leading-[32px]">
            The choice of the Satoshi font aligns perfectly with our app&#39;s ethos. This restrained yet elegant font ensures readability without distracting from the finer details. Its simplicity underscores usability, enhancing the overall user experience. </p>{" "} <br className="max-md:hidden xl:hidden"/>
          <p className="xl:flex-1 text-4 font-normal leading-[26px] text-white md:text-[20px]  md:leading-[32px] xl:leading-[32px]">
            Its clean lines and balanced proportions not only convey clarity but also elevate the app&#39;s visual appeal, contributing to a seamless interface that resonates with our users.          </p>
        </Animated>
      </Layout>
      <Animated className="pb-[50px] md:pb-[72px] xl:pb-[88px]">
        <RespImage
          className="h-full w-full"
          src={Frame3}
          md={Frame3md}
          xl={Frame3xl}
        />
      </Animated>
      <Layout className="mb-10 pt-[50px] md:mb-[56px] md:pt-[72px] xl:mb-20 xl:pt-[88px]">
        <Animated>
          <h2 className="mb-10 h-[77px] font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] text-white md:mb-[56px] xl:mb-[54px] md:text-[56px] md:leading-[64px] flex sm:block items-center">
            Branding
          </h2>
        </Animated>
        <Animated className="xl:flex items-start justify-between gap-4 max-sm:flex-col md:gap-12 xl:gap-[144px]">
          <p className="xl:w-[49%] text-4 font-normal max-sm:mb-4 leading-[26px] text-white max-xl:mb-2 md:text-[20px]  md:leading-[32px] xl:leading-[32px]">
            Echo&#39;s emblematic logo, an artistic fusion of intersecting circles, ingeniously reflects the application&#39;s core functionality. They symbolize the app&#39;s ability to capture and mirror essential call details seamlessly. </p>{" "} <br className="max-md:hidden xl:hidden"/>
          <p className="xl:w-[40.2%] text-4 font-normal leading-[26px] text-white md:text-[20px]  md:leading-[32px] xl:leading-[32px]">
            Harnessing these striking visual elements, our branding strategy resonates across social media platforms, captivating audiences with its symbolic representation of call echoing.          </p>
        </Animated>
      </Layout>
      <Animated className="pb-[50px] md:pb-[72px] xl:pb-[88px]">
        <RespImage
          className="h-full w-full"
          src={Frame4}
          md={Frame4md}
          xl={Frame4xl}
        />
      </Animated>
      <Layout className="pt-[50px] pb-[30px] md:py-[72px] xl:py-[88px]">
        <div className="mb-10 flex max-md:flex-col items-start justify-between gap-10 md:gap-[56px] xl:gap-[70px]  md:mb-[56px] xl:mb-20">
          <Animated className="xl:flex-1">
            <h2 className="h-[77px] font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] text-white md:text-[56px] md:leading-[64px] flex sm:block items-center">
              Meeting
            </h2>
          </Animated>
          <p className="text-4 max-md:w-full max-xl:w-[74%] xl:flex-1 font-normal leading-[26px] text-white md:text-[20px] md:leading-[32px]">
            After saving the video, you can view it and read the transcription.
            The page also displays highlights created by artificial intelligence
            and important places noted by the manager during the call. This will
            help you process the call as efficiently as possible.
          </p>
        </div>
        <Animated className="mb-6">
          <RespSVG
            className="h-full w-full"
            src="/img/echo/frame-5.svg"
            md="/img/echo/frame-5-md.svg"
            xl="/img/echo/frame-5-xl.svg"
          />
        </Animated>
        <div className="flex flex-col xl:flex-row xl:mx-10 gap-[24px] md:gap-[55px] md:h-[529px] max-xl:pt-[76px] max-md:pt-0 xl:h-[429px] relative">
          <p className="xl:max-w-[29.5%] md:max-w-[48.5%] xl:mt-[170px] text-white text-4 font-normal leading-[26px] md:text-[20px] md:leading-[30px]">
            In the &#39;Soundbites&#39; tab, you can cut out an important part of the
            video. You can edit, delete, or share individual fragments with
            colleagues.
          </p>
          <Animated className="flex max-md:flex-col-reverse gap-[24px] md:gap-[13px] w-full xl:h-full justify-between max-md:static max-xl:absolute bottom-0 ">
            <RespImage
              pictureClassname=" "
              className="max-md:w-[75vw] max-md:h-[30%] w-[400px] h-[257px] xl:mt-[132px] max-md:ml-0  max-xl:ml-[6.2vw] max-md-safe:ml-[4vw] max-xl:w-[400px] max-md-safe:w-[355px] max-md-safe:h-[240px] max-md:mt-0 max-xl:mt-[40px]"
              src={Frame6}
              md={Frame6md}
              xl={Frame6xl}
            />
            <RespImage
              pictureClassname=" "
              className="w-[400px] max-md:ml-auto max-md:h-[36.5%] max-md:w-[75vw] h-[305px] max-md-safe:h-[285px] xl:mt-10 max-md-safe:w-[370px] relative max-xl:top-[-49%] max-md:static max-md-safe:top-[-58%]"
              src={Frame7}
              md={Frame7md}
              xl={Frame7xl}
            />
          </Animated>
        </div>
      </Layout>
      <Layout className="py-[50px] md:py-[72px] xl:py-[88px]">
        <div
          className="mb-10 flex max-md:flex-col items-start justify-between gap-10 md:gap-[70px] md:mb-[56px] xl:mb-20">
          <Animated className="xl:flex-1">
            <h2
              className="h-[77px] w-max font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] text-white md:text-[56px] md:leading-[64px] flex sm:block items-center">
              Past meetings
            </h2>
          </Animated>
          <p className="text-4 max-md:w-full max-xl:w-[57.5%] xl:flex-1 font-normal leading-[26px] text-white md:text-[20px] md:leading-[32px]">
            The meetings library stores all recorded calls. Categories will help you quickly find the call you are interested in. You can also view insights on a block of calls to identify patterns.
          </p>
        </div>
        <Animated>
          <RespSVG
            className="h-full w-full"
            src="/img/echo/frame-8.svg"
            md="/img/echo/frame-8-md.svg"
            xl="/img/echo/frame-8-xl.svg"
          />
        </Animated>
      </Layout>

      <Layout className="mb-10 pt-[50px] md:mb-[56px] md:pt-[72px] xl:mb-20 xl:pt-[88px]">
        <Animated>
          <h2 className="mb-10 h-[77px] font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] text-white md:mb-[56px] md:text-[56px] md:leading-[64px] flex sm:block items-center">
            Templates
          </h2>
        </Animated>
        <Animated className="xl:flex items-start justify-between gap-4 max-sm:flex-col md:gap-12 xl:gap-[144px]">
            <p className=" max-xl:inline xl:w-[49%] text-4 font-normal leading-[26px] text-white md:text-[24px]  xl:text-[20px] md:leading-[38.4px] xl:leading-[32px]">
              In the template library, you can find the template you need by category. The library contains templates for all main types of calls.
            </p>{" "}
            <p className=" xl:w-[40.2%] max-xl:inline text-4 font-normal leading-[26px] text-white md:text-[24px] xl:text-[20px] md:leading-[38.4px] xl:leading-[32px]">
              You can also create a template yourself and also use artificial intelligence to help.
            </p>
          </Animated>
          </Layout>
      <Animated className="pb-[50px] md:pb-[72px] xl:pb-[88px]">
        <RespSVG
          className="h-full w-full"
          src="/img/echo/frame-9.svg"
          md="/img/echo/frame-9-md.svg"
          xl="/img/echo/frame-9-xl.svg"
        />
      </Animated>
      {/*events*/}
      <Layout className="py-[50px] md:py-[72px] xl:py-[88px]">
        <div
          className="mb-10 xl:flex max-md-safe:flex-col items-start justify-between gap-10 md:gap-[70px] xl:gap-[30px] md:mb-[56px] xl:mb-20">
          <Animated className="xl:flex-1">
            <h2
              className="h-[77px] md:mb-[56px] mb-10 xl:mb-0  w-max font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] text-white md:text-[56px] md:leading-[64px] flex sm:block items-center">
              Upcoming meetings
            </h2>
          </Animated>
          <p className="text-4 max-md:w-full max-xl:w-[67%] xl:flex-1 font-normal leading-[26px] text-white md:text-[20px] md:leading-[32px]">
            The Upcoming Appointments feature allows you to view your call schedule in calendar and weekly views. Using the switch, you can enable or disable call recording.          </p>
        </div>
        <Animated>
          <RespSVG
            className="h-full w-full max-w-[93.5%] md:max-w-[780px] xl:max-w-[1020px] mb-6 xl:mb-10 md:mb-8"
            src="/img/echo/frame-10.svg"
            md="/img/echo/frame-10-md.svg"
            xl="/img/echo/frame-10-xl.svg"
          />
        </Animated>
        <Animated>
          <RespSVG
            className="h-full w-full max-w-[93.5%] md:max-w-[780px] xl:max-w-[1020px] ml-auto mb-6 md:mb-[56px]"
            src="/img/echo/frame-11.svg"
            md="/img/echo/frame-11-md.svg"
            xl="/img/echo/frame-11-xl.svg"
          />
        </Animated>
        <div className="md:flex justify-between  md-safe:mr-[90px] md:mr-[70px] xl:mr-[120px] relative">
          <p className="xl:mt-[130px] max-md:text-[#AAAAAA] md:mt-[34px] max-md:mr-0 max-md-safe:mr-6 xl:max-w-[432px] md:max-w-[440px] md-safe:max-w-[509px]   text-white md:text-[20px] text-[14px] leading-[17px] max-md:max-w-[71.8%] max-md:mb-6 font-normal md:leading-[32px]">Calls are categorized by topic. Additionally, you can attach a template with questions to the call, which will be displayed during the call on the right-hand panel.</p>
          <Animated>
            <RespSVG
              className="h-full w-full max-md:w-[58.5%] max-md:mb-6 max-md:ml-auto"
              src="/img/echo/frame-12.svg"
              md="/img/echo/frame-12-xl.svg"
              xl="/img/echo/frame-12-xl.svg"
            />
          </Animated>
          <Animated className="max-xl:absolute max-md:static max-xl:top-[50%] max-xl:left-[12%]">
            <RespSVG
              className="h-full w-full max-md:w-[58.5%] max-md:mr-auto"
              src="/img/echo/frame-13.svg"
              md="/img/echo/frame-13-xl.svg"
              xl="/img/echo/frame-13-xl.svg"
            />
          </Animated>
        </div>
      </Layout>

      <Layout className="mb-10 pt-[50px] md:mb-[56px] md:pt-[72px] xl:mb-20 xl:pt-[88px]">
        <Animated>
          <h2 className="mb-10 h-[77px] font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] text-white md:mb-[56px] md:text-[56px] md:leading-[64px] flex sm:block items-center">
            Current meeting
          </h2>
        </Animated>
        <Animated className="xl:flex items-start justify-between gap-4 max-sm:flex-col md:gap-12 xl:gap-[144px]">
          <p className="xl:w-[49%] text-4 font-normal max-sm:mb-4 leading-[26px] text-white max-xl:mb-2 md:text-[20px]  md:leading-[32px] xl:leading-[32px]">
            When connected to a Google Meet or Zoom call, a panel appears on the right-hand side. Within this panel, you can pause or stop the recording. Additionally, it displays a list of questions from the attached call template.          </p>{" "} <br className="max-md:hidden xl:hidden"/>
          <p className="xl:w-[40.2%] text-4 font-normal leading-[26px] text-white md:text-[20px]  md:leading-[32px] xl:leading-[32px]">
            After a question is asked, the program utilizes artificial intelligence to automatically mark it as already asked.          </p>
        </Animated>
      </Layout>
      <Animated className="pb-[50px] md:pb-[72px] xl:pb-[88px] flex flex-col sm:flex-row justify-center gap-[16px] sm:gap-[24px] mx-[16px] sm:mx-[32px] xl:mx-[64px]">
        <RespImage
          className="h-full w-full"
          src={Frame8}
          md={Frame8md}
          xl={Frame8xl}
        />
        <RespImage
          className="h-full w-full"
          src={Frame9}
          md={Frame9md}
          xl={Frame9xl}
        />
      </Animated>
      <Layout className="py-[50px] md:py-[72px] xl:py-[88px]">
        <div
          className="mb-10 flex max-md:flex-col  items-start justify-between gap-10 md:gap-[70px] xl:gap-[30px] md:mb-[56px] xl:mb-20">
          <Animated className="xl:flex-1">
            <h2
              className="h-[77px]  w-max font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] text-white md:text-[56px] md:leading-[64px] flex sm:block items-center">
              Analytics
            </h2>
          </Animated>
          <p className="text-4 max-md:w-full max-xl:w-[52%] xl:flex-1 font-normal leading-[26px] text-white md:text-[20px] md:leading-[32px]">
            Analytics can help you improve your team&#39;s performance. The dashboard displays key performance indicators and leads to more detailed reports for in-depth analysis.          </p>
        </div>
        <Animated>
          <RespSVG
            className="h-full w-full"
            src="/img/echo/frame-14.svg"
            md="/img/echo/frame-14-md.svg"
            xl="/img/echo/frame-14-xl.svg"
          />
        </Animated>
      </Layout>

    </div>
  );
}
