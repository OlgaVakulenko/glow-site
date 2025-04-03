import Head from 'next/head';
import Header from './Header';
import Objectives from './Objectives';
import Layout from '../../../Layout';
import Frame1xl from './assets/frame-1-xl.png';
import Frame1md from './assets/frame-1-md.png';
import Frame2xl from './assets/frame-2-xl.png';
import Frame2md from './assets/frame-2-md.png';
import Frame2 from './assets/frame-2.png';
import Frame7xl from './assets/frame-7-xl.png';
import Frame7md from './assets/frame-7-md.png';
import Frame7 from './assets/frame-7.png';
import Frame6xl from './assets/frame-6-xl.png';
import Frame6md from './assets/frame-6-md.png';
import Frame6 from './assets/frame-6.png';
import Last from './assets/lastt.png';
import LastMd from './assets/lastt-md.png';
import LastXl from './assets/lastt-xl.png';
import RespImage from '../Renovation/RespImage';
import RespSVG from '../Renovation/RespSVG';
import Animated from '../../../Animated';
import { useSetAtom } from 'jotai/index';
import { themeAtom } from '../../../../lib/theme';
import { useEffect, useRef } from 'react';
import { useHeaderTheme } from '../../../Header';

export default function Echo() {
  const ref = useRef(null);
  const setTheme = useSetAtom(themeAtom);
  useHeaderTheme({ ref, theme: 'dark' });

  useEffect(() => {
    setTheme('dark');

    return () => {
      setTheme('light');
    };
  }, [setTheme]);

  return (
    <div className="dark-theme bg-[#000000]">
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
      <Layout disablePadding>
        <Animated className="pb-[50px] md:pb-[72px] xl:pb-[88px]">
          <video
            src="/video/echo/titlee.mp4"
            preload
            controls={false}
            autoPlay
            playsInline
            loop
            muted
            className=" object-fill max-xl:max-h-[798px] max-sm:h-auto md:hidden"
          />
          <video
            src="/video/echo/titlee.mp4"
            preload
            controls={false}
            autoPlay
            playsInline
            loop
            muted
            className=" object-fillmax-xl:max-h-[798px] max-md:hidden max-sm:h-auto max-xs:h-[278px]"
          />
        </Animated>
      </Layout>
      <Animated>
        <Objectives />
      </Animated>
      <Layout className="py-[50px] md:py-[72px] xl:py-[88px]">
        <Animated>
          <RespImage
            pictureClassname=""
            className="h-full rounded-[8px] md:rounded-[24px] "
            src={Frame1md}
            md={Frame1md}
            xl={Frame1xl}
          />
        </Animated>
      </Layout>
      <Layout className="py-[50px] md:py-[72px] xl:py-[88px]">
        <Animated>
          <h2 className="mb-10 font-satoshi text-[40px] font-normal leading-[48px] tracking-[-2px] text-white md:mb-[56px] md:h-[77px] md:text-[56px] md:leading-[64px] xl:mb-20">
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
          <h2 className="mb-10 flex h-[77px] items-center font-satoshi text-[40px] font-normal leading-[48px] tracking-[-2px] text-white sm:block md:mb-[56px] md:text-[56px] md:leading-[64px] xl:mb-20">
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
          <h2 className="mb-10 flex h-[77px] items-center font-satoshi text-[40px] font-normal leading-[48px] tracking-[-2px] text-white sm:block md:mb-[56px] md:text-[56px] md:leading-[64px]">
            Color
          </h2>
        </Animated>
        <div className="flex items-start gap-4 max-sm:flex-col md:gap-12 xl:gap-20 ">
          <Animated className="flex flex-1">
            <p className="text-4 leading-[26px] text-white md:text-[20px] md:leading-[32px]">
              The application&#39;s design revolves around muted colors with
              vibrant accents, aiming to focus on the primary content while not
              missing out on essential elements.
            </p>
          </Animated>
          <Animated className="flex flex-1">
            <p className="text-4 leading-[26px] text-white md:text-[20px] md:leading-[32px]">
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
          <h2 className="mb-10 flex h-[77px] items-center font-satoshi text-[40px] font-normal leading-[48px] tracking-[-2px] text-white sm:block md:mb-[56px] md:text-[56px] md:leading-[64px]">
            Typography
          </h2>
        </Animated>
        <Animated className="items-start justify-between gap-4 max-sm:flex-col md:gap-12 xl:flex xl:gap-[80px]">
          <p className="text-4 leading-[26px] text-white max-xl:mb-2 max-sm:mb-4 md:text-[20px] md:leading-[32px]  xl:flex-1 xl:leading-[32px]">
            The choice of the Satoshi font aligns perfectly with our app&#39;s
            ethos. This restrained yet elegant font ensures readability without
            distracting from the finer details. Its simplicity underscores
            usability, enhancing the overall user experience.{' '}
          </p>{' '}
          <br className="max-md:hidden xl:hidden" />
          <p className="text-4 leading-[26px] text-white md:text-[20px] md:leading-[32px]  xl:flex-1 xl:leading-[32px]">
            Its clean lines and balanced proportions not only convey clarity but
            also elevate the app&#39;s visual appeal, contributing to a seamless
            interface that resonates with our users.{' '}
          </p>
        </Animated>
      </Layout>
      <Layout>
        <Animated className="pb-[50px] md:pb-[72px] xl:pb-[88px]">
          {/*<RespImage*/}
          {/*  className="h-full w-full"*/}
          {/*  src={Frame3}*/}
          {/*  md={Frame3md}*/}
          {/*  xl={Frame3xl}*/}
          {/*/>*/}
          <video
            src="/video/echo/Typography.mp4"
            preload
            controls={false}
            autoPlay
            playsInline
            loop
            muted
            className="max-xl:mx-auto max-xl:w-[800px] max-xs:h-[142px] md:h-[332px] xl:h-[432px]"
          />
          <div className="flex justify-between max-sm:flex-col max-sm:gap-6">
            <div className="flex flex-col items-center">
              <p className="mb-[8px] font-satoshi text-[16px] font-light leading-[24px] tracking-[0.16em]  text-[#AAAAAA] md:text-[20px] md:leading-[30px]">
                !@£$%^&*()
              </p>
              <p className=" font-satoshi  text-[16px] font-light leading-[24px] tracking-[0.16em]  text-[#AAAAAA] md:text-[20px]  md:leading-[30px]">
                1234567890
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className=" mb-[8px]  font-satoshi text-[16px] font-light uppercase  leading-[24px] tracking-[0.16em]  text-[#AAAAAA] md:text-[20px] md:leading-[30px]">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className=" font-satoshi text-[16px] font-light leading-[24px] tracking-[0.32em] text-[#AAAAAA]   md:text-[20px] md:leading-[30px]">
                abcdefghijklmnopqrstuvwxyz
              </p>
            </div>
          </div>
        </Animated>
      </Layout>
      <Layout className="mb-10 pt-[50px] md:mb-[56px] md:pt-[72px] xl:mb-20 xl:pt-[88px]">
        <Animated>
          <h2 className="mb-10 flex h-[77px] items-center font-satoshi text-[40px] font-normal leading-[48px] tracking-[-2px] text-white sm:block md:mb-[56px] md:text-[56px] md:leading-[64px] xl:mb-[54px]">
            Branding
          </h2>
        </Animated>
        <Animated className="items-start justify-between gap-4 max-sm:flex-col md:gap-12 xl:flex xl:gap-[144px]">
          <p className="text-4 leading-[26px] text-white max-xl:mb-2 max-sm:mb-4 md:text-[20px] md:leading-[32px]  xl:w-[49%] xl:leading-[32px]">
            Echo&#39;s emblematic logo, an artistic fusion of intersecting
            circles, ingeniously reflects the application&#39;s core
            functionality. They symbolize the app&#39;s ability to capture and
            mirror essential call details seamlessly.{' '}
          </p>{' '}
          <br className="max-md:hidden xl:hidden" />
          <p className="text-4 leading-[26px] text-white md:text-[20px] md:leading-[32px]  xl:w-[40.2%] xl:leading-[32px]">
            Harnessing these striking visual elements, our branding strategy
            resonates across social media platforms, captivating audiences with
            its symbolic representation of call echoing.{' '}
          </p>
        </Animated>
      </Layout>
      <Layout disablePadding>
        <Animated className="pb-[50px] md:pb-[72px] xl:pb-[88px]">
          <video
            src="/video/echo/Brandin.mp4"
            preload
            controls={false}
            autoPlay
            playsInline
            loop
            muted
            className="max-xl:max-h-[798px] max-sm:h-auto max-xs:h-[433px] md:hidden"
          />
          <video
            src="/video/echo/Brandinn.mp4"
            preload
            controls={false}
            autoPlay
            playsInline
            loop
            muted
            className="max-xl:max-h-[798px] max-md:hidden max-sm:h-auto max-xs:h-[278px]"
          />
        </Animated>
      </Layout>
      <Layout className="pb-[30px] pt-[50px] md:py-[72px] xl:py-[88px]">
        <div className="mb-10 flex items-start justify-between gap-10 max-md:flex-col md:mb-[56px] md:gap-[56px]  xl:mb-20 xl:gap-[70px]">
          <Animated className="xl:flex-1">
            <h2 className="flex h-[77px] items-center font-satoshi text-[40px] font-normal leading-[48px] tracking-[-2px] text-white sm:block md:text-[56px] md:leading-[64px]">
              Meeting
            </h2>
          </Animated>
          <p className="text-4 leading-[26px] text-white max-xl:w-[74%] max-md:w-full md:text-[20px] md:leading-[32px] xl:flex-1">
            After saving the video, you can view it and read the transcription.
            The page also displays highlights created by artificial intelligence
            and important places noted by the manager during the call. This will
            help you process the call as efficiently as possible.
          </p>
        </div>
        <Animated className="mb-6">
          <RespSVG
            className="h-full w-full"
            src="/img/echo/frame-5.png"
            md="/img/echo/frame-5.png"
            xl="/img/echo/frame-5.png"
          />
        </Animated>
        <div className="relative flex flex-col gap-[24px] max-xl:pt-[76px] max-md:pt-0 md:h-[529px] md:gap-[55px] xl:mx-10 xl:h-[429px] xl:flex-row">
          <p className="text-4 leading-[26px] text-white md:max-w-[48.5%] md:text-[20px] md:leading-[30px] xl:mt-[170px] xl:max-w-[29.5%]">
            In the &#39;Soundbites&#39; tab, you can cut out an important part
            of the video. You can edit, delete, or share individual fragments
            with colleagues.
          </p>
          <Animated className="bottom-0 flex w-full justify-between gap-[24px] max-xl:absolute max-md:static max-md:flex-col-reverse md:gap-[13px] xl:h-full ">
            <RespImage
              pictureClassname=" "
              className="h-[257px] w-[400px] max-xl:ml-[6.2vw] max-xl:mt-[40px] max-xl:w-[400px] max-md-safe:ml-[4vw]  max-md-safe:h-[240px] max-md-safe:w-[355px] max-md:ml-0 max-md:mt-0 max-md:h-[30%] max-md:w-[75vw] xl:mt-[132px]"
              src={Frame6}
              md={Frame6md}
              xl={Frame6xl}
            />
            <RespImage
              pictureClassname=" "
              className="relative h-[305px] w-[400px] max-xl:top-[-49%] max-md-safe:top-[-58%] max-md-safe:h-[285px] max-md-safe:w-[370px] max-md:static max-md:ml-auto max-md:h-[36.5%] max-md:w-[75vw] xl:mt-10"
              src={Frame7}
              md={Frame7md}
              xl={Frame7xl}
            />
          </Animated>
        </div>
      </Layout>
      <Layout className="py-[50px] md:py-[72px] xl:py-[88px]">
        <div className="mb-10 flex items-start justify-between gap-10 max-md:flex-col md:mb-[56px] md:gap-[70px] xl:mb-20">
          <Animated className="xl:flex-1">
            <h2 className="flex h-[77px] w-max items-center font-satoshi text-[40px] font-normal leading-[48px] tracking-[-2px] text-white sm:block md:text-[56px] md:leading-[64px]">
              Past meetings
            </h2>
          </Animated>
          <p className="text-4 leading-[26px] text-white max-xl:w-[57.5%] max-md:w-full md:text-[20px] md:leading-[32px] xl:flex-1">
            The meetings library stores all recorded calls. Categories will help
            you quickly find the call you are interested in. You can also view
            insights on a block of calls to identify patterns.
          </p>
        </div>
        <Animated className="mr-[-16px]">
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
          <h2 className="mb-10 flex h-[77px] items-center font-satoshi text-[40px] font-normal leading-[48px] tracking-[-2px] text-white sm:block md:mb-[56px] md:text-[56px] md:leading-[64px]">
            Templates
          </h2>
        </Animated>
        <Animated className="items-start justify-between gap-4 max-sm:flex-col md:gap-12 xl:flex xl:gap-[144px]">
          <p className=" text-4 leading-[26px] text-white max-xl:inline md:text-[24px] md:leading-[38.4px]  xl:w-[49%] xl:text-[20px] xl:leading-[32px]">
            In the template library, you can find the template you need by
            category. The library contains templates for all main types of
            calls.
          </p>{' '}
          <p className=" text-4 leading-[26px] text-white max-xl:inline md:text-[24px] md:leading-[38.4px] xl:w-[40.2%] xl:text-[20px] xl:leading-[32px]">
            You can also create a template yourself and also use artificial
            intelligence to help.
          </p>
        </Animated>
      </Layout>
      <Layout className="pb-[50px] md:pb-[72px] xl:pb-[88px]">
        <Animated className="mx-[-4rem]">
          <RespSVG
            className="h-full w-full"
            src="/img/echo/frame-9.svg"
            md="/img/echo/frame-9-md.svg"
            xl="/img/echo/frame-9-xl.svg"
          />
        </Animated>
      </Layout>
      {/*events*/}
      <Layout className="py-[50px] md:py-[72px] xl:py-[88px]">
        <div className="mb-10 items-start justify-between gap-10 max-md-safe:flex-col md:mb-[56px] md:gap-[70px] xl:mb-20 xl:flex xl:gap-[30px]">
          <Animated className="xl:flex-1">
            <h2 className="mb-10 flex h-[77px] w-max  items-center font-satoshi text-[40px] font-normal leading-[48px] tracking-[-2px] text-white sm:block md:mb-[56px] md:text-[56px] md:leading-[64px] xl:mb-0">
              Upcoming meetings
            </h2>
          </Animated>
          <p className="text-4 leading-[26px] text-white max-xl:w-[67%] max-md:w-full md:text-[20px] md:leading-[32px] xl:flex-1">
            The Upcoming Appointments feature allows you to view your call
            schedule in calendar and weekly views. Using the switch, you can
            enable or disable call recording.{' '}
          </p>
        </div>
        <Animated>
          <RespSVG
            className="mb-6 h-full w-full max-w-[93.5%] md:mb-8 md:max-w-[780px] xl:mb-10 xl:max-w-[1020px]"
            src="/img/echo/frame-10.svg"
            md="/img/echo/frame-10-md.svg"
            xl="/img/echo/frame-10-xl.svg"
          />
        </Animated>
        <Animated>
          <RespSVG
            className="mb-6 ml-auto h-full w-full max-w-[93.5%] md:mb-[56px] md:max-w-[780px] xl:max-w-[1020px]"
            src="/img/echo/frame-11.svg"
            md="/img/echo/frame-11-md.svg"
            xl="/img/echo/frame-11-xl.svg"
          />
        </Animated>
        <div className="relative justify-between  md:mr-[70px] md:flex md-safe:mr-[90px] xl:mr-[120px]">
          <p className="text-[14px] leading-[17px] text-white max-md-safe:mr-6 max-md:mb-6 max-md:mr-0 max-md:max-w-[71.8%]   max-md:text-[#AAAAAA] md:mt-[34px] md:max-w-[440px] md:text-[20px] md:leading-[32px] md-safe:max-w-[509px] xl:mt-[130px] xl:max-w-[432px]">
            Calls are categorized by topic. Additionally, you can attach a
            template with questions to the call, which will be displayed during
            the call on the right-hand panel.
          </p>
          <Animated>
            <RespSVG
              className="h-full w-full max-md:mb-6 max-md:ml-auto max-md:w-[58.5%]"
              src="/img/echo/frame-12.svg"
              md="/img/echo/frame-12-xl.svg"
              xl="/img/echo/frame-12-xl.svg"
            />
          </Animated>
          <Animated className="max-xl:absolute max-xl:left-[12%] max-xl:top-[50%] max-md:static">
            <RespSVG
              className="h-full w-full max-md:mr-auto max-md:w-[58.5%]"
              src="/img/echo/frame-13.svg"
              md="/img/echo/frame-13-xl.svg"
              xl="/img/echo/frame-13-xl.svg"
            />
          </Animated>
        </div>
      </Layout>

      <Layout className="mb-10 pt-[50px] md:mb-[56px] md:pt-[72px] xl:mb-20 xl:pt-[88px]">
        <Animated>
          <h2 className="mb-10 flex h-[77px] items-center font-satoshi text-[40px] font-normal leading-[48px] tracking-[-2px] text-white sm:block md:mb-[56px] md:text-[56px] md:leading-[64px]">
            Current meeting
          </h2>
        </Animated>
        <Animated className="items-start justify-between gap-4 max-sm:flex-col md:gap-12 xl:flex xl:gap-[144px]">
          <p className="text-4 leading-[26px] text-white max-xl:mb-2 max-sm:mb-4 md:text-[20px] md:leading-[32px]  xl:w-[49%] xl:leading-[32px]">
            When connected to a Google Meet or Zoom call, a panel appears on the
            right-hand side. Within this panel, you can pause or stop the
            recording. Additionally, it displays a list of questions from the
            attached call template.{' '}
          </p>{' '}
          <br className="max-md:hidden xl:hidden" />
          <p className="text-4 leading-[26px] text-white md:text-[20px] md:leading-[32px]  xl:w-[40.2%] xl:leading-[32px]">
            After a question is asked, the program utilizes artificial
            intelligence to automatically mark it as already asked.{' '}
          </p>
        </Animated>
      </Layout>
      <Layout disablePadding>
        <Animated className="mx-[16px] flex flex-col justify-center gap-[16px] pb-[50px] sm:mx-[32px] sm:gap-[24px] md:flex-row md:pb-[72px] xl:mx-[64px] xl:pb-[88px]">
          {/*<RespImage*/}
          {/*  className="h-full w-full"*/}
          {/*  src={Frame8}*/}
          {/*  md={Frame8md}*/}
          {/*  xl={Frame8xl}*/}
          {/*/>*/}
          {/*<RespImage*/}
          {/*  className="h-full w-full"*/}
          {/*  src={Frame9}*/}
          {/*  md={Frame9md}*/}
          {/*  xl={Frame9xl}*/}
          {/*/>*/}
          <div className="flex-1">
            <video
              src="/video/echo/met.mp4"
              preload
              controls={false}
              autoPlay
              playsInline
              loop
              muted
              className="h-full w-auto"
            />
          </div>
          <div className="w-auto flex-1">
            <RespImage src={Last} md={LastMd} xl={LastXl} />
          </div>
        </Animated>
      </Layout>
      <Layout className="pb-[100px] pt-[50px] md:pb-[144px] md:pt-[72px] xl:pb-[176px] xl:pt-[88px]">
        <div className="mb-10 flex items-start  justify-between gap-10 max-md:flex-col md:mb-[56px] md:gap-[70px] xl:mb-20 xl:gap-[30px]">
          <Animated className="xl:flex-1">
            <h2 className="flex  h-[77px] w-max items-center font-satoshi text-[40px] font-normal leading-[48px] tracking-[-2px] text-white sm:block md:text-[56px] md:leading-[64px]">
              Analytics
            </h2>
          </Animated>
          <p className="text-4 leading-[26px] text-white max-xl:w-[52%] max-md:w-full md:text-[20px] md:leading-[32px] xl:flex-1">
            Analytics can help you improve your team&#39;s performance. The
            dashboard displays key performance indicators and leads to more
            detailed reports for in-depth analysis.{' '}
          </p>
        </div>
        <Animated>
          <RespSVG
            className="h-full w-full"
            src="/img/echo/frame-14-xl.png"
            md="/img/echo/frame-14-xl.png"
            xl="/img/echo/frame-14-xl.png"
          />
        </Animated>
      </Layout>
    </div>
  );
}
