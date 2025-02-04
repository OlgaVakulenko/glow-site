import cx from 'clsx';
import { atom, useAtom } from 'jotai';
import Head from 'next/head';
import { useEffect, useMemo, useRef, useState } from 'react';
import Animated from '../../Animated';
import Layout from '../../Layout';
import RespImage from '../Cases/Invoice/RespImage';

import Pic0 from './assets/pic0.png';
import Pic0md from './assets/pic0-md.png';
import Solutionxl from './assets/solution-xl.png';
// import Image from "../../Image";
import TextBlock from './TextBlock';
import NextCase from './NextCase';
import nextCaseIcon from './assets/nexCase-icon.png';
import InnovateSolutionTextBlock from './InnovateSolution';
import SectionIntro from './Intro';
import Image from 'next/image';
import { resolve, Source } from '../../Image';

import Frame1xl from '../LendFlow/assets/frame-1-xl.svg';
import { mediaAtom } from '../../../lib/agent';
import RespSVG from '../Cases/Renovation/RespSVG';
import Logo1 from "../../../assets/img/lend/Logos.png"
import Logo2 from "../../../assets/img/lend/Card.png"
import Logo3 from "../../../assets/img/lend/Logo3.png"
import Card1 from "../../../assets/img/lend/card1.png"

export default function LendFlow() {
  return (
    <Layout disablePadding={true}>
      <Head>
        <title className="text-5xl font-bold">{`Glow Team Portfolio: Showcasing Our Innovative Design Projects`}</title>
        <meta
          name="description"
          content="Explore Glow Team's diverse portfolio of design and development projects, highlighting our commitment to creative solutions and client success."
        ></meta>
      </Head>
      <div>
        <Animated>
          <SectionIntro
            className="pt-[140px] md:pt-[268px] xl:pt-[175px] "
            title={
              <>
                Lendflow:
                <br />
                design ecosystem <br className="block xl:hidden" /> for a{' '}
                <br className="hidden md:hidden xl:inline" />
                fintech startup
              </>
            }
            subtitle="Lendflow provides the tools to create and integrate credit products, from application to underwriting."
          />
        </Animated>
      </div>
      <Animated>
        <Image
          src="/img/lendFlow/frame-1-xl.svg"
          priority
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
          alt="Lendflow design ecosystem"
          unoptimized
        />
      </Animated>
      <SectionBalance />
      <SectionInnovate />
      <SectionTransforming />
      <Animated>
        <div className="h-[169px] flex justify-center mb-[104px] md:mb-[123px] md:ml-[101px] md:w-[80vw] md-safe:w-[819px] xl:mb-[150px] xl:ml-[140px] xl:w-[1160px]">
          <Image
            src="/img/lendFlow/process-1-md.svg"
            width={0}
            height={0}
            objectfit="contain"
            className='max-md:hidden'
            style={{ width: '100%', height: '100%' }}
          />
          <RespSVG
            src="/img/lendFlow/process.svg"
            md="/img/lendFlow/process.svg"
            xl="/img/lendFlow/process.svg"
            alt="Logo"
            className='md:hidden'
          />
        </div>
      </Animated>
      <SectionToolsHeader />
      <SectionTools />
      <NextCase
        icon={
          <Image
            src={nextCaseIcon}
            className="mb-8 mr-8 h-[68px] w-[68px] md:mb-0"
            alt="icon"
          />
        }
        title={<>FleetChaser: efficient fleet management platform</>}
        link="/fleet"
      />
    </Layout>
  );
}

function SectionBalance() {
  return (
    <div>
      <Animated>
        <div className="mx-4 pb-[35px] pt-[104px] font-inter md:mx-0 md:pb-[32px] md:pt-[144px] xl:pb-[50px] xl:pt-[150px]">
          <SectionFullCycle className="mb-6 text-[28px] leading-[36px] tracking-[-1px] md:mb-[8px] md:ml-8 md:text-[48px] md:text-next-heading-3 md:leading-[56px] md:tracking-[-2px] xl:mb-16 xl:ml-[64px] xl:text-[56px] xl:leading-[64px] xl:tracking-[-2px]">
            <div style={{ fontFeatureSettings: 'normal' }}>
              {' '}
              The full cycle of product design:
              <br className="hidden md:inline" /> from concept to launch and
              growth
            </div>
          </SectionFullCycle>
          <SectionFullCycleList
            data={[
              {
                title: 'Investigate',
                values: [
                  'User Interviews',
                  'CJM',
                  'Competitor Analysis',
                  'Wireframes',
                ],
              },
              {
                title: 'Create',
                values: [
                  'UI UX Design',
                  'UI UX Audit',
                  'Design System',
                  'Marketing Materials',
                ],
              },
              {
                title: 'Iterate',
                values: [
                  'Usability Testings',
                  'Naming',
                  'Constant Improvements',
                ],
              },
            ]}
          />
        </div>
      </Animated>
    </div>
  );
}

function SectionInnovate() {
  return (
    <div className="mb-5 mt-[56px] md:mb-[52px] md:mt-[39px] xl:mb-[100px] xl:mt-[100px]">
      <div className="px-3 md:px-[32px] xl:px-[64px]">
        <Animated>
          <div className="mb-5 md:mb-[25px] md:h-auto md:w-full xl:mb-[36px]  xl:h-auto xl:w-[1312px]">
            <Image
              src="/img/lendFlow/innovate-0-xl.svg"
              width={0}
              height={0}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          {/*Mobile layout*/}
          <div className="flex  w-full flex-col gap-[20px] items-center bg-[#FFFFFF] md:hidden xl:hidden ">
            <div className=" flex w-full flex-row gap-[0_16px]">
              {/*<Image*/}
              {/*  src="/img/lendFlow/innovate-1-xl.svg"*/}
              {/*  width={0}*/}
              {/*  height={0}*/}
              {/*  className="flex w-auto flex-1 flex-col items-center justify-center md:rounded-[22px] xl:rounded-[30px]"*/}
              {/*  alt="Innovate"*/}
              {/*/>*/}
              <div className="w-full flex-1">
                <RespImage
                  src={Logo1}
                  md={Logo1}
                  className=" w-full"
                  xl={Logo1}
                />
              </div>
              <div className="w-full flex-1">
                <RespImage
                  src={Logo2}
                  md={Logo2}
                  className="w-full flex-1"
                  xl={Logo2}
                />
              </div>

              {/*<Image*/}
              {/*  src="/img/lendFlow/innovate-3-xl.svg"*/}
              {/*  width={0}*/}
              {/*  height={0}*/}
              {/*  className="bg-[#F4F5F6] w-auto flex-1 md:rounded-[22px] xl:rounded-[30px] "*/}
              {/*  alt="Innovate"*/}
              {/*/>*/}
            </div>
            <div className="w-full mb-[100px]">
              <RespImage
                src={Logo3}
                md={Logo3}
                className="w-full"
                xl={Logo3}
              />
            </div>
            {/*<Image*/}
            {/*  src="/img/lendFlow/innovate-2-xl.svg"*/}
            {/*  width={0}*/}
            {/*  height={0}*/}
            {/*  className="box-sizing-border mt-5 flex md:rounded-[22px] xl:rounded-[30px]"*/}
            {/*  alt="Innovate"*/}
            {/*/>*/}
          </div>

          <Animated>
            <div className="box-sizing-border hidden flex-col items-center bg-[#FFFFFF] md:inline xl:inline ">
              {/*Tablet layout*/}
              <div className="md:block xl:hidden">
                <div className="box-sizing-border flex flex-row md:gap-[0_20px] xl:gap-[0_36px] ">
                  <div className="relative flex flex-col items-center justify-center md:h-[400px] md:w-[260px] md:rounded-[22px] xl:rounded-[30px]">
                    <Image
                      src="/img/lendFlow/innovate-1-md.svg"
                      width={0}
                      height={0}
                      style={{ width: '100%', height: '100%' }} // optional
                    />
                  </div>
                  <div className="relative flex flex-col items-center justify-center md:h-[400px] md:w-[402px] md:rounded-[25px] xl:rounded-[30px]">
                    <Image
                      src="/img/lendFlow/innovate-2-md.svg"
                      width={0}
                      height={0}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <div className="relative bg-[#F4F5F6] md:h-[400px] md:w-[260px] md:rounded-[22px] xl:rounded-[30px]">
                    <Image
                      src="/img/lendFlow/innovate-3-md.svg"
                      width={0}
                      height={0}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
              {/*Desktop layout*/}
              <div className="md:hidden xl:block">
                <div className="box-sizing-border flex flex-row md:gap-[0_24px] xl:gap-[0_36px] ">
                  <div className="relative flex flex-col items-center justify-center md:rounded-[22px] xl:rounded-[30px] ">
                    <Image
                      src="/img/lendFlow/innovate-1-xl.svg"
                      width={0}
                      height={0}
                      objectfit="scale-down"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <div className="box-sizing-border flex md:rounded-[22px] xl:h-[513px] xl:w-[546px] xl:rounded-[30px]">
                    <Image
                      src="/img/lendFlow/innovate-2-xl.svg"
                      width={0}
                      height={0}
                      objectfit="cover"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <div className="relative bg-[#F4F5F6] md:rounded-[22px] xl:h-[513px] xl:w-[330px] xl:rounded-[30px]">
                    <Image
                      src="/img/lendFlow/innovate-3-xl.svg"
                      width={0}
                      height={0}
                      objectfit="contain"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Animated>
        </Animated>
      </div>
    </div>
  );
}

function SectionFullCycle({ className, children }) {
  return (
    <Animated
      className={cx(
        className,
        'font-glow font-medium leading-[32px] md:text-[64px] md:leading-[56px]'
      )}
    >
      {children}
    </Animated>
  );
}

function SectionFullCycleList({ data }) {
  return (
    // xl:mb-11
    <div className="ml-0 mt-[50px] grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-0 md:mb-[60px] md:ml-0 md:mt-0 xl:mb-0 xl:min-w-[100%] xl:flex-nowrap">
      {data.map((column, i) => (
        <Animated
          key={i}
          delay={i * 100}
          className={cx(
            'mb-[22px] items-start sm:col-span-1 sm:w-[calc(50%-5px)] md:mb-0 md:w-[261px] xl:w-[335px]',
            { 'col-span-2': i === 2 }
          )}
        >
          <div className="text-[16px]  font-normal leading-[25.6px] opacity-50 md:mb-[42px] md:ml-8 md:mt-[64px] md:text-[20px] md:normal-case md:leading-[30px] md:opacity-30 xl:mb-[42px] xl:ml-[64px] xl:mt-0">
            {column.title}
          </div>

          <div className="mt-[22px] font-normal leading-[25.6px]  md:ml-[32px] md:mt-0 md:text-[20px] md:leading-[24px] xl:ml-[64px] xl:pl-[1px]">
            {column.values.map((value, k) => (
              <Animated
                delay={i * k * 50}
                key={k}
                className="xl: mt-[22px] md:mb-[44px] md:mt-0 last:md:mb-0 xl:mb-[44px]"
              >
                {value}
              </Animated>
            ))}
          </div>
        </Animated>
      ))}
    </div>
  );
}

function SectionTransforming() {
  return (
    <Animated>
      <Layout className="md:px-[102px] md:pt-[90px] xl:px-[130px] xl:pl-[141px] xl:pt-[49px]">
        <div className="flex items-center justify-center">
          <div
            style={{ fontFeatureSettings: 'normal' }}
            className="mb-[64px] font-satoshi text-[38px] font-bold leading-[45px] tracking-tight text-black md:mb-[55px] md:text-[56px] md:leading-[67.2px]
                     md:tracking-[-2px] xl:mb-[78px] xl:text-[80px] xl:leading-[96px] xl:tracking-[-3px] "
          >
            Lendflow is transforming the credit industry
            <span className="md:hidden"> </span>
            <Image
              src="/img/lendFlow/logo-xl.svg"
              width={0}
              height={0}
              className="inline-block h-[34px] w-[34px] md:ml-3 md:mr-4 md:h-[50px] md:w-[50px] xl:mx-5 xl:h-fit xl:w-[71px] xl:pb-[8px] "
              alt="Logo"
            />
            <span className="md:hidden"> </span>by enabling every company to
            provide <span style={{ color: '#12B75C' }}>seamless</span> financial
            <span style={{ color: '#12B75C' }}> experiences</span>
            <br />
            to their customers.
          </div>
        </div>
      </Layout>
    </Animated>
  );
}

function SectionToolsHeader() {
  const [screenSize, setScreenSize] = useState('unknown');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScreenSize('sm');
      } else if (window.innerWidth <= 1024) {
        setScreenSize('md');
      } else if (window.innerWidth < 1280) {
        setScreenSize('lg');
      } else {
        setScreenSize('xl');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Animated>
      <div
        //TODO: move below style to separate file - "Dots"
        style={{
          backgroundImage:
            'radial-gradient(#070919 0%, transparent 0%),radial-gradient(#1A1C2B 15%, transparent 12%)',
          backgroundColor: '#070919',
          backgroundSize:
            screenSize === 'sm'
              ? '5px 5px'
              : screenSize === 'md'
              ? '13px 13px'
              : '19px 19px',
        }}
        className="ml-0 mr-0 flex w-full max-w-full flex-col items-center  overflow-hidden rounded-t-[20px] bg-[#070919] py-10 pl-0  pr-0  text-white  md:h-[645px] md:rounded-t-[40px]  md:pb-[0px] md:pt-16 xl:h-[970px] xl:rounded-t-[60px] xl:p-20 xl:pb-[48px]"
      >
        <div className="flex  w-full flex-col items-center bg-transparent">
          <div className="mt-[50px] flex items-center justify-center md:ml-[15px] md:mt-[138px] md:w-11/12 xl:mb-[-50px] xl:ml-[0px] xl:mt-[199px]">
            <Image
              alt="logo"
              src="/img/lendFlow/logo-big-xl.svg"
              width={0}
              height={0}
              className="h-[50px] w-[50px] md:h-[80px] md:w-[80px] xl:h-[114px] xl:w-[114px] "
            />
          </div>
          <Layout className="px-[16px] pt-[30px] md:px-[50px] md:pb-0 md:pl-[28px] md:pt-[54px]  xl:pb-0 xl:pt-[59px] ">
            {/* The code below draws the gradient behind the image */}
            <div
              className="flex w-full md:ml-[19px] md:mt-[2px] xl:ml-[14px] xl:mt-[70px]"
              style={{ zIndex: 2 }}
            >
              <div className="flex items-center justify-center md:ml-[15px] xl:ml-[30px] xl:mr-[30px] xl:w-[1120px]">
                <div
                  style={{ fontFeatureSettings: 'normal' }}
                  className="text-center font-satoshi text-[38px] font-medium leading-[45px] tracking-[-1.5px]  text-white md:mb-7 md:text-[56px] md:leading-[67px] xl:text-[80px]
                            xl:leading-[96px] forced-colors:accent-white"
                >
                  Lendflow provides the tools you{' '}
                  <br className="hidden md:inline xl:hidden" />
                  need <br className="sm:hidden"/>to{' '}
                  <span className="pl-[-5px]" style={{ color: '#00FF72' }}>
                    build and embed
                  </span>{' '}
                  credit products.
                </div>
              </div>
            </div>
            <div
              style={{
                position: 'relative',
                top: screenSize === 'md' ? '-150px' : '-200px', // Adjust this value to position below the image
                left:
                  screenSize === 'sm'
                    ? '200px'
                    : screenSize === 'md'
                    ? '300px'
                    : '330px',
                width: '547px',
                height: '31px',
                backgroundColor: '#00FF72',
                filter: screenSize === 'md' ? 'blur(88.8px)' : 'blur(125px)',
                transform: 'matrix(1, -0.03, -0.26, -0.97, 0, 0)',
              }}
            />
            {/*end*/}
          </Layout>
        </div>
      </div>
    </Animated>
  );
}

function SectionTools() {
  const [media] = useAtom(mediaAtom);

  return (
    <Layout
      disablePadding={true}
      className="ml-0 mr-0 flex w-full max-w-full flex-col items-center overflow-hidden rounded-b-[20px] bg-[#070919] px-4 pb-[48px]  text-white md:rounded-b-[60px]  md:px-[32px] xl:px-0 md:pb-[90px] md:pt-16 xl:mt-[-200px] xl:rounded-b-[60px] xl:pb-[120px]"
    >
      <Animated>
        <div className="flex max-h-full w-full max-w-full flex-col md:flex-row gap md:gap-[24px] md:pt-[14px] xl:ml-0 xl:gap-9 xl:pt-[174px]">
          <div className="mb-6 flex-shrink md:mb-0 md:pl-0 xl:pl-0 flex-1">
            <div className=" md:h-[499px] md:rounded-[22px] xl:h-[700px]">
              {/*<Image*/}
              {/*  src="/img/lendFlow/product0-xl.svg"*/}
              {/*  width={0}*/}
              {/*  height={0}*/}
              {/*  objectfit="contain"*/}
              {/*  style={{ width: '100%', height: '100%' }}*/}
              {/*/>*/}
              <RespSVG
                src="/img/lendFlow/Font.svg"
                md="/img/lendFlow/product0-xl.svg"
                xl="/img/lendFlow/product0-xl.svg"
                className="h-full"

              />
            </div>
          </div>
          <div className="flex-shrink flex-1">
            <div className="md:h-[499px] md:rounded-[22px] xl:h-[700px]">
              {/*<Image*/}
              {/*  src="/img/lendFlow/product1-xl.svg"*/}
              {/*  width={0}*/}
              {/*  height={0}*/}
              {/*  objectfit="contain"*/}
              {/*  style={{ width: '100%', height: '100%' }}*/}
              {/*/>*/}
              <RespSVG
                src="/img/lendFlow/product1-xl.svg"
                md="/img/lendFlow/product1-xl.svg"
                xl="/img/lendFlow/product1-xl.svg"
                className="h-full"

              />
            </div>
          </div>
        </div>
      </Animated>
      <Animated>
        <div className="mt-5 mb-[100px] bg-transparent md:mb-[50px] md:mt-6 md:h-[auto] md:w-[960px] xl:mb-[64px] xl:ml-0 xl:mt-9 xl:h-auto xl:w-[1312px]">
          <Image
            src="/img/lendFlow/product-xl.svg"
            width={0}
            height={0}
            objectfit="contain"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </Animated>
      <div className="md:ml-4 md:mt-[-5px] xl:ml-0 xl:mt-0">
        <TextBlock
          topic="Orchestration"
          topicClassName="w-[137px]"
          boxClassName="md:w-[500px] w-[300px] xl:w-[583px] "
          subBoxClassName="xl:w-[500px] md:w-[500px] md:pr-0 xl:pr-[5px]"
          title={
            <>
              Automated <span style={{ color: '#00FF72' }}> credit </span>
              <span style={{ color: '#00FF72' }}>decisioning</span> platform
            </>
          }
          subtitle={
            <>
              Typically, processing borrower applications takes a lot of time.
              With the Data Orchestration feature, you can process such requests
              in minutes using a simple credit workflow builder.
            </>
          }
        />
      </div>
      {/* The code below draws the gradient behind the image */}
      <div
        className="flex w-full md:mt-[24px] xl:ml-[158px] xl:mt-[0px]"
        style={{ zIndex: 2 }}
      >
        <Animated>
          <div className="bg-transparent md:w-[960px] xl:h-fit xl:w-[1285px] xl:pt-[45px]">
            <Image
              src="/img/lendFlow/screen1.svg"
              width={0}
              height={0}
              objectfit="contain"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Animated>
      </div>
      <div
        style={{
          position: 'relative',
          top: '-350px', // Adjust this value to position below the image
          left: '100px',
          width: '1716px',
          height: '74px',
          background: '#00FF72',
          filter: 'blur(175px)',
          transform: 'matrix(1, -0.02, -0.27, -0.96, 0, 0)',
        }}
      />
      {/* end*/}

      <div
        //!
        className="md:ml-4 md:mt-[-16px] xl:ml-[2px] xl:mt-[-12px]"
      >
        <TextBlock
          topic="Activity"
          topicClassName="w-[88px]"
          boxClassName="md:w-[550px]  w-[300px] xl:w-[700px] md:pl-[10px] p-0"
          subBoxClassName="w-[306px]  md:w-[525px] xl:w-[484px] md:pr-[20px] xl:pl-0 xl:pr-0 md:pl-[20px]"
          title={
            <>
              CRM for{' '}
              <span style={{ color: '#00FF72' }}>swift, transparent</span>
              <br /> deal communication
            </>
          }
          subtitle={
            <>
              Managing each transaction necessitates direct communication among
              various participants. We&#39;ve developed a straightforward yet
              robust CRM system that facilitates tracking communication across
              phone calls, emails, and SMS messages.
            </>
          }
        />
      </div>

      {/* The code below draws the gradient behind the image */}
      <div
        style={{ zIndex: 2 }}
        className="flex max-h-full max-w-full flex-col md:ml-3  md:mt-[24px] md:flex-row xl:mx-0 xl:ml-0 xl:mr-0 xl:mt-[44px] xl:px-0 xl:pl-0 xl:pr-0  "
      >
        <div className="mb-6 md:mb-0 md:mr-2 ">
          <Animated>
            <div
              className="cover bg-transparent md:h-[400px] md:w-[340px] md:rounded-[22px] xl:h-[522px] xl:w-auto xl:rounded-[30px]"
              style={{
                borderRadius: '18px', // Set the desired border radius for all breakpoints
                '@media (minWidth: 768px)': { borderRadius: '22px' }, // Adjust for md breakpoint
                ' @media (minWidth: 1280px)': { borderRadius: '30px' }, // Adjust for xl breakpoint
              }}
            >
              <RespSVG
                xl='/img/lendFlow/activity1-md.svg'
                md='/img/lendFlow/activity1-md.svg'
                src="/img/lendFlow/Contacts.svg"
                className="block xl:hidden"
              />
              <Image
                src="/img/lendFlow/activity1-xl.svg"
                className="hidden xl:block"
                width={0}
                height={0}
                objectfit="contain"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Animated>
        </div>
        <div className="md:ml-6">
          <Animated>
            <div
              className="cover md:h-[400px] md:w-[588px] xl:h-[522px] xl:w-[864px]"
              style={{
                borderRadius: '18px', // Set the desired border radius for all breakpoints
                '@media (minWidth: 768px)': { borderRadius: '22px' }, // Adjust for md breakpoint
                ' @media (minWidth: 1280px)': { borderRadius: '30px' }, // Adjust for xl breakpoint
              }}
            >

              <RespSVG
                xl='/img/lendFlow/activity2-md.svg'
                md='/img/lendFlow/activity2-md.svg'
                src="/img/lendFlow/Activity.svg"
                className="block xl:hidden"
              />
              <Image
                src="/img/lendFlow/activity2-xl.svg"
                className="hidden xl:block"
                width={0}
                height={0}
                objectfit="contain"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Animated>
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          top: '-350px', // Adjust this value to position below the image
          left: media === 'tablet' ? '-50px' : '-250px',
          width: '496px',
          height: media === 'tablet' ? '36px' : '188px',
          background: 'rgba(0, 255, 114, 0.4)',
          filter: 'blur(175px)',
          transform:
            media === 'tablet'
              ? 'matrix(1, -0.02, -0.27, -0.96, 0, 0)'
              : 'matrix(0.93, 0.38, 0.15, -0.99, 0, 0)',
        }}
      />
      {/* end*/}

      <div className="flex flex-col justify-center mt-[-100px] md:ml-[15px] md:mt-[21px] xl:ml-[2px] xl:mt-[-125px]">
        <TextBlock
          topic="Scorecards"
          topicClassName="w-[122px]"
          boxClassName="md:w-[550px] w-[300px] xl:w-[650px] md:pl-[10px]"
          subBoxClassName="xl:w-[475px] md:w-[500px] w-[300px] xl:pl-0 xl:pr-[0px] md:pl-[20px] md:pr-[20px]"
          title={
            <>
              Smart scoring{' '}
              <span style={{ color: '#00FF72' }}>
                system for
                <br /> improved
              </span>{' '}
              decision-making
            </>
          }
          subtitle={
            <>
              Create custom applicant scoring system to quickly evaluate and
              rank credit applicants based on weighted data points.
            </>
          }
        />
      </div>
      {/* The code below draws the gradient behind the image */}
      <div
        style={{ zIndex: 2 }}
        className="flex w-full md:mt-[24px] md:rounded-[22px] xl:ml-[158px] xl:mt-[43px] xl:rounded-[20px]"
      >
        <Animated>
          <div
            className="bg-transparent md:w-[960px] xl:h-[809px] xl:w-[1285px]"
            style={{
              borderRadius: '18px', // Set the desired border radius for all breakpoints
              '@media (minWidth: 768px)': { borderRadius: '22px' }, // Adjust for md breakpoint
              '@media (minWidth: 1280px)': { borderRadius: '30px' }, // Adjust for xl breakpoint
            }}
          >
            <Image
              src="/img/lendFlow/screen3-xl.svg"
              width={0}
              height={0}
              objectfit="contain"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Animated>
      </div>
      <div
        style={{
          position: 'relative',
          top: media === 'tablet' ? '-250px' : '-450px', // Adjust this value to position below the image
          left: '500px',
          width: '780px',
          height: '158px',
          background: 'rgba(0, 255, 114, 0.4)',
          filter: 'blur(175px)',
          transform: 'matrix(0.93, 0.37, 0.16, -0.99, 0, 0)',
        }}
      />
      {/* end*/}

      <div className="mt-[-80px] md:ml-5 md:mt-[-100px] xl:ml-[2px] xl:mt-[-94px]">
        <TextBlock
          topic="Branding"
          topicClassName="w-[107px]"
          boxClassName="md:w-[550px] w-[300px] xl:w-[650px] md:pl-[10px]"
          subBoxClassName="md:w-[550px] max-sm:mb-[30px] xl:w-[484px] w-[300px] xl:pl-0 xl:pr-[0px] md:pl-[10px] md:pr-[0px]"
          title={
            <>
              Preview and customize your{' '}
              <span style={{ color: '#00FF72' }}>branded email</span>
            </>
          }
          subtitle={
            <>
              Customize your emails and personalize your brand&#39;s look and
              feel by engaging directly with your customers through tailored
              communication.
            </>
          }
        />
      </div>

      {/* The code below draws the gradient behind the image */}
      <div
        style={{ zIndex: 2 }}
        className="flex w-full md:ml-[0px] md:mt-[20px] md:rounded-[22px] xl:ml-[-132px] xl:mt-[0px] xl:rounded-[20px] "
      >
        <Layout
          disablePadding={true}
          className="flex max-h-full max-w-full flex-col md:mt-[4px] md:flex-row xl:mx-0 xl:ml-[131px] xl:mr-0 xl:mt-[24px] xl:px-0 xl:pl-0 xl:pr-0"
        >
          <div className="mb-6 md:mb-0 md:mr-6">
            <Animated>
              <div
                className=" cover md:h-[400px] md:w-[528px] md:rounded-[22px] xl:h-[522px] xl:w-[752px] xl:rounded-[30px]"
                style={{
                  borderRadius: '18px', // Set the desired border radius for all breakpoints
                  '@media (minWidth: 768px)': { borderRadius: '22px' }, // Adjust for md breakpoint
                  '@media (minWidth: 1280px)': { borderRadius: '30px' }, // Adjust for xl breakpoint
                }}
              >
                <Image
                  src="/img/lendFlow/branding1-md.svg"
                  className="sm:block hidden xl:hidden"
                  width={0}
                  height={0}
                  objectfit="contain"
                  style={{ width: '100%', height: '100%' }}
                />
                <Image
                  src="/img/lendFlow/act.svg"
                  className="block sm:hidden"
                  width={0}
                  height={0}
                  objectfit="contain"
                  style={{ width: '100%', height: '100%' }}
                />
                <Image
                  src="/img/lendFlow/branding1-xl.svg"
                  className="hidden xl:block"
                  width={0}
                  height={0}
                  objectfit="contain"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </Animated>
          </div>
          <div className="md:ml-0 xl:ml-0">
            <Animated>
              <div
                className="cover md:h-[400px] md:w-[412px] md:rounded-[22px]  md:pl-[5px] xl:h-[522px] xl:w-[536px] xl:rounded-[30px] xl:pl-[8px]"
                style={{
                  borderRadius: '18px', // Set the desired border radius for all breakpoints
                  '@media (minWidth: 768px)': { borderRadius: '22px' }, // Adjust for md breakpoint
                  '@media (minWidth: 1280px)': { borderRadius: '30px' }, // Adjust for xl breakpoint
                }}
              >
                <Image
                  src="/img/lendFlow/branding2-md.svg"
                  className="sm:block hidden xl:hidden"
                  width={0}
                  height={0}
                  objectfit="contain"
                  style={{ width: '100%', height: '100%' }}
                />
                <Image
                  src="/img/lendFlow/con.svg"
                  className="block sm:hidden"
                  width={0}
                  height={0}
                  objectfit="contain"
                  style={{ width: '100%', height: '100%' }}
                />
                <Image
                  src="/img/lendFlow/branding2-xl.svg"
                  className="hidden xl:block"
                  width={0}
                  height={0}
                  objectfit="contain"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </Animated>
          </div>
        </Layout>
      </div>
      <div
        style={{
          position: 'relative',
          top: media === 'tablet' ? '-230px' : '-350px', // Adjust this value to position below the image
          left: '0px',
          width: '540px',
          height: media === 'tablet' ? '40px' : '125px',
          background: 'rgba(0, 255, 114, 0.4)',
          filter: 'blur(175px)',
          transform: 'matrix(0.93, 0.36, 0.16, -0.99, 0, 0)',
        }}
      />
      {/* end*/}

      <div className="flex flex-col justify-center mt-[-45px]  max-sm:mb-[-20px] md:ml-[14px] md:mt-[17px] xl:ml-[1px] xl:mt-[-64px]">
        <TextBlock
          topic="Businesses"
          topicClassName="w-[122px]"
          boxClassName="md:w-[600px] w-[300px] md:ml-[-0px] max-md:px-0"
          subBoxClassName="md:w-[460px] md:mx-[24px] max-md:w-[314px]"
          title={
            <>
              Manage <span style={{ color: '#00FF72' }}>businesses</span> and
              relations between
              <br /> companies and owners
            </>
          }
          subtitle={
            <>
              Store all information about the borrower&#39;s business in one
              easily accessible place: deals, documents, metrics. Manage
              relationships between the business and owners, customers, vendors.
            </>
          }
        />
      </div>

      {/* The code below draws the gradient behind the image */}
      <div
        style={{ zIndex: 2 }}
        className="flex w-full md:mt-[24px] md:rounded-[22px] xl:ml-[-132px] xl:mt-[0px] xl:rounded-[20px]"
      >
        <div className="flex w-full md:ml-[0px] md:mt-[0px] xl:ml-[145px] xl:mt-[46px]">
          <Animated>
            <div
              className="cover bg-transparent md:h-[627px] md:w-[960px] md:rounded-[22px] xl:h-[840px] xl:w-[1285px] xl:rounded-[30px]"
              style={{
                borderRadius: '18px', // Set the desired border radius for all breakpoints
                '@media (minWidth: 768px)': { borderRadius: '22px' }, // Adjust for md breakpoint
                '@media (minWidth: 1280px)': { borderRadius: '30px' }, // Adjust for xl breakpoint
              }}
            >
              <Image
                src="/img/lendFlow/screen2-xl.svg"
                width={0}
                height={0}
                objectfit="contain"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Animated>
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          top: media === 'tablet' ? '-400px' : '-430px', // Adjust this value to position below the image
          left: '50px',
          width: media === 'tablet' ? '1213px' : '1882px',
          height: media === 'tablet' ? '72px' : '111px',
          background: 'rgba(0, 255, 114, 0.4)',
          filter: 'blur(175px)',
          transform: 'matrix(0.89, 0.46, 0.09, -1, 0, 0)',
        }}
      />
      {/*end*/}

      <div className="mt-[-15px] md:ml-[15px] md:mt-[-14px] xl:ml-[2px] xl:mt-[-46px]">
        <TextBlock
          topic="Widget"
          topicClassName="w-[95px]"
          boxClassName="md:w-[500px] xl:w-[583px] w-[300px] xl:pl-0 md:pl-[35px]"
          subBoxClassName="xl:w-[510px] md:w-[510px] w-[300px] xl:ml-[0px]"
          title={
            <>
              Embedded application{' '}
              <span style={{ color: '#00FF72' }}>
                <br />
                widget
              </span>
            </>
          }
          subtitle={
            <>
              Create a white-labeled application for various credit products.
              Completing a loan application is a complex process, but the
              Lendflow form is optimized to deliver a high conversion rate.
            </>
          }
        />
      </div>
      {/* The code below draws the gradient behind the image */}
      <div
        style={{ zIndex: 2 }}
        className="flex w-full md:ml-[64px] md:mt-[24px] md:rounded-[22px] xl:ml-[-5px] xl:mt-[4px] xl:rounded-[20px]"
      >
        <Layout
          disableOnMobile={true}
          className="mt-[-40px] md:ml-[5px] md:mt-[-20px] xl:ml-[100px] xl:mt-[20px]"
        >
          <Animated>
            <div
              className="cover mt-5 bg-transparent pb-5 md:h-[404px] md:w-max md:px-[50px] md:pb-0 xl:h-[569px] xl:w-[1120px] xl:px-0"
              style={{
                borderRadius: '18px', // Set the desired border radius for all breakpoints
                '@media (minWidth: 768px)': { borderRadius: '22px' }, // Adjust for md breakpoint
                '@media (minWidth: 1280px)': { borderRadius: '30px' }, // Adjust for xl breakpoint
              }}
            >
              {/*<RespSVG*/}
              {/*  src="/img/lendFlow/card1.svg"*/}
              {/*  md="/img/lendFlow/card1.svg"*/}
              {/*  xl="/img/lendFlow/card1.svg"*/}
              {/*  className="sm:hidden w-full"*/}
              {/*/>*/}
              {/*<RespSVG*/}
              {/*  src="/img/lendFlow/card2.svg"*/}
              {/*  md="/img/lendFlow/card2.svg"*/}
              {/*  xl="/img/lendFlow/card2.svg"*/}
              {/*  className="sm:hidden w-full"*/}
              {/*/>*/}
              {/*<RespSVG*/}
              {/*  src="/img/lendFlow/card3.svg"*/}
              {/*  md="/img/lendFlow/card3.svg"*/}
              {/*  xl="/img/lendFlow/card3.svg"*/}
              {/*  className="sm:hidden w-full"*/}
              {/*/>*/}
              <Image
                src="/img/lendFlow/widget-xl.svg"
                width={0}
                height={0}
                objectfit="contain"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Animated>
        </Layout>
      </div>
      <div
        style={{
          position: 'relative',
          top: media === 'tablet' ? '-300px' : '-500px', // Adjust this value to position below the image
          left: media === 'tablet' ? '-10px' : '-50px',
          width: media === 'tablet' ? '662px' : '928px',
          height: media === 'tablet' ? '36px' : '75px',
          background: 'rgba(0, 255, 114, 0.5)',
          filter: 'blur(175px)',
          transform: 'matrix(1, -0.02, -0.17, -0.99, 0, 0)',
        }}
      />
      {/* end*/}

      <Animated>
        <Layout className="mb:pl-0 mb:pr-0 mt-[20px] flex max-h-full max-w-full md:hidden xl:mx-0 xl:my-[30px] xl:ml-0 xl:mr-0 xl:hidden xl:px-0 xl:pl-0 xl:pr-0 ">
          <div className="mr-0 flex-shrink md:mr-6">
            <InnovateSolutionTextBlock
              boxClassName="xl:w-[600px] md:w-[400px] w-200"
              subBoxClassName="xl:w-[450px] md:w-[380px] w-100 px-[20px] md:px-0"
              title={
                <>
                  An <span style={{ color: '#00FF72' }}>innovative</span>{' '}
                  solution
                  <br />
                  for <span style={{ color: '#00FF72' }}> efficient </span>
                  operations
                </>
              }
              subtitle={
                <>
                  Universal widget, which unlocks new possibilities for
                  integration and usage across a variety of systems. With its
                  adaptive design, our widget easily integrates into any
                  company&#39;s interfaces.{' '}
                </>
              }
            />
          </div>
        </Layout>

        <Layout
          disablePadding={true}
          className="mb-[150px] flex max-h-full max-w-full md:my-[10px] md:ml-0 md:mt-[105px] xl:mx-0 xl:my-[80px] xl:ml-0 xl:mr-0 xl:px-0 xl:pl-0 xl:pr-0"
        >
          <div className="mt-1 hidden flex-shrink md:ml-[30px] md:mr-[45px] md:flex xl:ml-[65px] xl:mr-[47px] xl:flex">
            <InnovateSolutionTextBlock
              boxClassName="xl:w-[600px] md:w-[400px]"
              subBoxClassName="xl:w-[480px] md:w-[433px] md:pr-[40px] "
              title={
                <>
                  An <span style={{ color: '#00FF72' }}>innovative</span>{' '}
                  solution
                  <br />
                  for <span style={{ color: '#00FF72' }}> efficient </span>
                  operations
                </>
              }
              subtitle={
                <>
                  Universal widget, which unlocks new possibilities for
                  integration and usage across a variety of systems. With its
                  adaptive design, our widget easily integrates into any
                  company&#39;s interfaces.{' '}
                </>
              }
            />
          </div>
          <div className="relative mt-0 w-full flex-col justify-center md:ml-10 md:mr-5 xl:ml-0 xl:mr-[60px]">
            <div
              className="cover mt-10 w-full bg-transparent object-contain md:mt-0"
              style={{
                borderRadius: '18px', // Set the desired border radius for all breakpoints
                '@media (minWidth: 768px)': { borderRadius: '22px' }, // Adjust for md breakpoint
                '@media (minWidth: 1280px)': { borderRadius: '30px' }, // Adjust for xl breakpoint
              }}
            >
              <Image
                src={Solutionxl}
                width={0}
                height={0}
                objectfit="contain"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </Layout>
      </Animated>

      <div className="flex max-h-full w-full max-w-full flex-col md:mt-[157px] md:flex-row md:gap-[24px]  md:pt-[14px]  xl:mt-[66px] xl:gap-[35px] xl:px-[64px]   ">
        <div className="mb-6 md:mb-0 flex-1">
          <Animated>
            <div
              className="cover h-full xl:ml-[0px]"
              style={{
                borderRadius: '18px', // Set the desired border radius for all breakpoints
                '@media (minWidth: 768px)': { borderRadius: '22px' }, // Adjust for md breakpoint
                '@media (minWidth: 1280px)': { borderRadius: '30px' }, // Adjust for xl breakpoint
              }}
            >
              <Image
                src="/img/lendFlow/pic1-xl.svg"
                width={0}
                height={0}
                objectfit="contain"
                style={{ width: '100%', height: '100%' }}
                className="max-md:hidden"
              />
              <Image
                src="/img/lendFlow/Logo.svg"
                width={0}
                height={0}
                // objectfit="contain"
                style={{ width: '100%', height: '100%' }}
                className="md:hidden"
              />
            </div>
          </Animated>
        </div>
        <div className="flex-1">
          <Animated>
            <div
              className="cover h-full md:ml-[0px]"
              style={{
                borderRadius: '18px', // Set the desired border radius for all breakpoints
                '@media (minWidth: 768px)': { borderRadius: '22px' }, // Adjust for md breakpoint
                '@media (minWidth: 1280px)': { borderRadius: '30px' }, // Adjust for xl breakpoint
              }}
            >
              <Image
                src="/img/lendFlow/pic2-xl.svg"
                width={0}
                height={0}
                objectfit="contain"
                style={{ width: '100%', height: '100%' }}
                className="max-md:hidden"

              />
              <Image
                src="/img/lendFlow/App.svg"
                width={0}
                height={0}
                // objectfit="contain"
                style={{ width: '100%', height: '100%' }}
                className="md:hidden"
              />
            </div>
          </Animated>
        </div>
      </div>
      <div className="w-full md:mt-[24px] md:rounded-[22px]   xl:mt-[35px] xl:rounded-[30px] xl:px-[64px]">
        <Animated>
          <div
            className="cover h-full bg-transparent"
            style={{
              borderRadius: '22px', // Set the desired border radius for all breakpoints
              '@media (minWidth: 768px)': { borderRadius: '22px' }, // Adjust for md breakpoint
              '@media (minWidth: 1280px)': { borderRadius: '30px' }, // Adjust for xl breakpoint
            }}
          >
            <Image
              src="/img/lendFlow/pic0-md.svg"
              className="block xl:hidden"
              width={0}
              height={0}
              objectfit="contain"
              style={{ width: '100%', height: '100%' }}
            />
            <Image
              src="/img/lendFlow/pic0-xl.svg"
              className="hidden xl:block"
              width={0}
              height={0}
              objectfit="contain"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Animated>
      </div>
    </Layout>
  );
}
