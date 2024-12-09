import cx from 'clsx';
import {atom, useAtom} from 'jotai';
import Head from 'next/head';
import {useEffect, useMemo, useRef, useState} from 'react';
import Animated from '../../Animated';
import Layout from '../../Layout';
import RespImage from "../Cases/Invoice/RespImage";

import Frame1 from "../LendFlow/assets/frame-1.png";
import Frame1md from "../LendFlow/assets/frame-1-md.png";
import Frame1xl from "../LendFlow/assets/frame-1-xl.png";
import Innovate0xl from "../LendFlow/assets/innovate-0-xl.png";
import Innovate0md from "../LendFlow/assets/innovate-0-md.svg";
import Innovate1xl from "../LendFlow/assets/innovate-1-xl.png";
import Innovate2md from "../LendFlow/assets/innovate-2-md.svg";
import Innovate2xl from "../LendFlow/assets/innovate-2-xl.png";
import Innovate1 from "../LendFlow/assets/innovate-1.png";
import Innovate2 from "../LendFlow/assets/innovate-2.svg";
import Innovate3 from "../LendFlow/assets/innovate-3.png";
import Innovate3md from "../LendFlow/assets/innovate-3-md.svg";
import Innovate3xl from "../LendFlow/assets/innovate-3-xl.png";
import Process1 from "./assets/process-1.svg";
import Process1md from "./assets/process-1-md.svg";
import Process1xl from "./assets/process-1-xl.png";
import LogoXl from "../LendFlow/assets/logo-xl.png";
import LogoBigXl from "../LendFlow/assets/logo-big-xl.png";
import Product from "./assets/product.png";
import Productmd from "./assets/product-md.png";
import Productxl from "./assets/product-xl.png";
import Product0 from "./assets/product0.svg";
import Product0md from "./assets/product0-md.svg";
import Product0xl from "./assets/product0-xl.png";
import Product1md from "./assets/product1-md.svg";
import Product1xl from "./assets/product1-xl.png";
import Screen1 from "./assets/screen1.png";
import Screen1md from "./assets/screen1-md.png";
import Screen1xl from "./assets/screen1.svg";
import Screen2 from "./assets/screen2.png";
import Screen2md from "./assets/screen2-md.png";
import Screen2xl from "./assets/screen2-xl.svg";
import Screen3 from "./assets/screen3.png";
import Screen3md from "./assets/screen3-md.png";
import Screen3xl from "./assets/screen3-xl.svg";
import Activity1 from "./assets/activity1.png";
import Activity1md from "./assets/activity1-md.png";
import Activity1xl from "./assets/activity1-xl.svg";
import Activity2 from "./assets/activity2.png";
import Activity2md from "./assets/activity2-md.png";
import Activity2xl from "./assets/activity2-xl.svg";
import Branding1 from "./assets/branding1.png";
import Branding1md from "./assets/branding1-md.png";
import Branding1xl from "./assets/branding1-xl.png";
import Branding2 from "./assets/branding2.png";
import Branding2md from "./assets/branding2-md.png";
import Branding2xl from "./assets/branding2-xl.png";
import Widget from "./assets/widget.png";
import Widgetmd from "./assets/widget-md.png";
import Widgetxl from "./assets/widget-xl.svg";
import Pic0 from "./assets/pic0.png";
import Pic0md from "./assets/pic0-md.png";
import Pic0xl from "./assets/pic0-xl.png";
import Pic1 from "./assets/pic1.png";
import Pic1md from "./assets/pic1-md.png";
import Pic1xl from "./assets/pic1-xl.png";
import Pic2 from "./assets/pic2.png";
import Pic2md from "./assets/pic2-md.png";
import Pic2xl from "./assets/pic2-xl.png";
import Solution from "./assets/solution.png";
import Solutionmd from "./assets/solution-md.png";
import Solutionxl from "./assets/solution-xl.png";
import Image from "../../Image";
import TextBlock from "./TextBlock";
import NextCase from "./NextCase";
import nextCaseIcon from "./assets/nexCase-icon.png";
import InnovateSolutionTextBlock from "./InnovateSolution";
import SectionIntro from "./Intro";
import IntroSection2 from "../../IntroSection2";


export default function LendFlow() {
    const ref = useRef();

    return (
        <Layout disablePadding={true}>
            <Head>
                <title
                    className="text-5xl font-bold">{`Glow Team Portfolio: Showcasing Our Innovative Design Projects`}</title>
                <meta
                    name="description"
                    content="Explore Glow Team's diverse portfolio of design and development projects, highlighting our commitment to creative solutions and client success."
                ></meta>
            </Head>
            <div>
                <Animated>
                    <SectionIntro
                        className="!pt-[140px] md:!pt-[270px] xl:!pt-[176px]"
                        title={
                            <>
                                Lendflow:
                                <br/>
                                design ecosystem <br className="block xl:hidden"/> for a <br
                                className="hidden md:hidden xl:inline"/>
                                fintech startup
                            </>
                        }
                        subtitle="Lendflow provides the tools to create and integrate credit products, from application to underwriting."
                    />
                </Animated>
            </div>
            <Animated>
                <RespImage
                    src={Frame1xl}
                    md={Frame1md}
                    xl={Frame1xl}
                    className="bg-[#7a7b7c]"
                />
            </Animated>
            <SectionBalance/>
            <SectionInnovate/>
            <SectionTransforming/>
            <Animated>
                <RespImage
                    src={Process1}
                    md={Process1md}
                    xl={Process1xl}
                    className="bg-[#FFFFFF] md:ml-[101px] xl:ml-[140px] mb-[95px] md:mb-[143px] xl:mb-[150px] px-[12px] md:px-0 w-auto h-auto md:w-[819px] xl:w-[1160px]"/>

            </Animated>
            <SectionToolsHeader/>
            <SectionTools/>
            <NextCase
                icon={<Image src={nextCaseIcon} className="w-[68px] h-[68px] md:mb-0 mb-6 mr-8" alt="icon"/>}
                title={
                    <>
                        FleetChaser: efficient fleet management platform
                    </>}
                link="/fleet"
            />
        </Layout>
    );
}

function SectionBalance() {
    return (
        <div
        >
            <Animated>
                <div
                    className="pb-[35px] ml-3 md:ml-0 pt-[112px] md:pb-[60px] md:pt-[145px] xl:pb-[50px] xl:pt-[150px] mx-0 font-inter">
                    <SectionFullCycle
                        className="mb-6 md:mb-[10px] md:ml-8 xl:ml-[66px] xl:mb-16 md:text-next-heading-3 leading-[36px] md:leading-[56px] xl:leading-[64px] text-[28px] md:text-[48px] xl:text-[56px] tracking-[-1px] md:tracking-[-2px] xl:tracking-[-2px] text-next-heading-5">
                        <div style={{fontFeatureSettings: "normal"}}> The full cycle of product design:
                            <br className="hidden md:inline"/> from concept to launch and growth
                        </div>
                    </SectionFullCycle>
                    <SectionFullCycleList
                        data={[
                            {
                                title: 'Investigate',
                                values: ['User Interviews', 'CJM', 'Competitor Analysis', 'Wireframes'],
                            },
                            {
                                title: 'Create',
                                values: ['UI UX Design', 'UI UX Audit', 'Design System', 'Marketing Materials'],
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
        <div className="mb-[87px] md:mb-[53px] xl:mb-[100px] md:mt-[30px] xl:mt-[66px]">
            <div className="px-[12px] md:pl-[33px] xl:pl-[65px]">
                <Animated>
                    <RespImage
                        src={Innovate0xl}
                        md={Innovate0md}
                        xl={Innovate0xl}
                        className="bg-[#FFFFFF] mb-5 xl:h-auto xl:w-auto w-auto h-auto md:h-[559px] md:w-[960px] md:mb-[25px] xl:mb-[36px]"
                    />
                    <div
                        className="bg-[#FFFFFF] flex flex-col items-center box-sizing-border md:hidden xl:hidden ">
                        <div className="flex flex-row gap-[0_36px] box-sizing-border">
                            <Image src={Innovate1}
                                   className="rounded-[30px] relative flex flex-col justify-center items-center"
                                   alt="Innovate"/>

                            <Image src={Innovate3}
                                   className="rounded-[30px] bg-[#F4F5F6] relative " alt="Innovate"/>
                        </div>
                        <Image src={Innovate2}
                               className="rounded-[30px] flex mt-3 box-sizing-border" alt="Innovate"/>
                    </div>
                    <Animated>
                        <div
                            className="bg-[#FFFFFF] flex flex-col items-center box-sizing-border hidden md:inline xl:inline ">
                            <div className="md:block xl:hidden">
                                <div className="flex flex-row md:gap-[0_24px] xl:gap-[0_36px] box-sizing-border ">
                                    <Image src={Innovate1xl}
                                           className="rounded-[30px] relative flex flex-col justify-center items-center md:w-[260px] md:h-[400px]"
                                           alt="Innovate"/>
                                    <Image src={Innovate2md}
                                           className="rounded-[30px] flex md:w-[392px] md:h-[400px] box-sizing-border"
                                           alt="Innovate"/>

                                    <Image src={Innovate3md}
                                           className="rounded-[30px] bg-[#F4F5F6] relative md:w-[260px] md:h-[400px]"
                                           alt="Innovate"/>
                                </div>
                            </div>
                            <div className="md:hidden xl:block">
                                <div className="flex flex-row md:gap-[0_24px] xl:gap-[0_36px] box-sizing-border ">
                                    <Image src={Innovate1xl}
                                           className="rounded-[30px] relative flex flex-col justify-center items-center md:w-[260px] md:h-[400px] xl:w-[364px] xl:h-[513px]"
                                           alt="Innovate"/>
                                    <Image src={Innovate2xl}
                                           className="rounded-[30px] flex xl:w-[546px] xl:h-[513px] box-sizing-border"
                                           alt="Innovate"/>
                                    <Image src={Innovate3xl}
                                           className="rounded-[30px] bg-[#F4F5F6] relative xl:w-[330px] xl:h-[513px]"
                                           alt="Innovate"/>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </Animated>
            </div>
        </div>
    );
}

function SectionFullCycle({className, children}) {
    return (
        <Animated
            className={cx(
                className,
                'font-glow text-[32px] font-medium leading-[32px] md:text-[64px] md:leading-[57px]'
            )}
        >
            {children}
        </Animated>
    );
}

function SectionFullCycleList({data}) {
    return (
        <div className="flex flex-wrap md:mb-[60px] mt-[47px] md:mt-0 ml-0 md:ml-0 xl:mb-11 xl:min-w-[1440px] md:min-w-[1024px] xl:flex-nowrap">
            {data.map((column, i) => (
                <Animated
                    key={i}
                    delay={i * 100}
                    className="w-[calc(50%-10px)] mb-[57px] md:mb-0 items-start md:w-[261px] xl:w-[335px]"
                >
                    <div
                        className="font-medium leading-[13px] md:ml-8 xl:ml-[65px] opacity-50 md:mb-[54px] md:mt-[58px] xl:mb-12 xl:mt-0 text-[16px] md:text-[20px] md:normal-case leading-[25.6px] md:leading-[30px] md:opacity-30">
                        {column.title}
                    </div>
                    <div className="font-normal mt-[28px] md:ml-[30px] xl:ml-[65px] md:mt-0 leading-[25.6px] md:leading-[27px] leading-[36px] md:text-[20px] xl:pl-[1px]">
                        {column.values.map((value, k) => (
                            <Animated
                                delay={i * k * 50}
                                key={k}
                                className="md:mb-[34px] mt-5 md:mt-0 last:md:mb-0"
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
            <Layout disableOnMobile={true}
                className="pl-[10px] md:px-[104px] xl:px-[130px] xl:pt-[49px] xl:pl-[141px] md:pt-[90px]">
                <div className="flex justify-center items-center">
                    <div style={{fontFeatureSettings: "normal"}}
                         className="mb-[110px] font-satoshi text-black text-[38px] tracking-tight font-bold leading-[45.6px] md:mb-[55px] md:text-[56px] xl:text-[80px]
                     md:leading-[67.2px] xl:leading-[96px] tracking-[-1.5px] md:tracking-[-2px] xl:tracking-[-3px] xl:mb-[78px] ">
                        Lendflow is transforming the credit industry
                        <Image src={LogoXl}
                               className="inline-block mx-2 xl:mx-5 md:ml-3 md:mr-4 h-[34px] w-[34px] md:h-[50px] md:w-[50px] xl:w-[71px] xl:h-fit xl:pb-[8px] "
                               alt="Logo"/>
                        by enabling every company to provide <span
                        style={{color: '#12B75C'}}>seamless</span> financial<span
                        style={{color: '#12B75C'}}> experiences</span><br/>to their customers.
                    </div>
                </div>
            </Layout>
        </Animated>
    );
}

function SectionToolsHeader() {
    return (
        <Animated>
            <div
                //TODO: move below style to separate file - "Dots"
                style={{
                    backgroundImage: "radial-gradient(#070919 0%, transparent 0%),radial-gradient(#1A1C2B 15%, transparent 12%)",
                    backgroundColor: "#070919",
                    backgroundSize: "19px 19px",

                }
                }
                 className="overflow-hidden pl-0 pr-0 ml-0 mr-0 max-w-full xl:rounded-t-[60px] md:rounded-t-[40px] rounded-t-[20px] bg-[#070919]  py-10 pb-[50px] text-white md:pb-20 md:pt-16 xl:p-20 flex flex-col items-center w-full"
            >
                <div className="bg-transparent  flex flex-col items-center w-full">
                    <div
                        className="flex items-center justify-center md:w-11/12   mt-[48px] md:ml-[2px] xl:ml-[0px] md:mt-[135px] xl:mt-[199px] xl:mb-[20px]">
                        <Image alt="logo" src={LogoBigXl}
                               className="w-[50px] h-[50px] xl:w-[114px] xl:h-[114px] md:w-[80px] md:h-[80px] "/>
                    </div>
                    <Layout
                        className="pt-[40px] xl:pb-0 md:pb-0 px-[25px] xl:pt-[61px] md:px-[50px]  md:pt-[56px] ">
                        <div
                            //TODO: move below style to separate file - "Glow spot behind a text"
                            style={{
                                background: 'radial-gradient(ellipse at center, rgba(0, 255, 114, 0.15) 50%, transparent 60%)',
                                backgroundSize: '100% 100%',
                                backgroundRepeat: 'no-repeat',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text'
                            }}
                            className="flex justify-center items-center md:mx-[21px] xl:ml-[15px] xl:mr-[30px] xl:w-[1120px]">
                            <div style={{fontFeatureSettings: "normal"}}
                                 className="text-center font-satoshi tracking-tight font-medium text-white forced-colors:accent-white tracking-[-1.5px] xl:tracking-[-3px] leading-[45.6px] md:mb-7 text-[38px] md:text-[56px] xl:text-[80px]
  md:leading-[67.2px] xl:leading-[96px]">
                                Lendflow provides the tools you need to <span
                                style={{color: '#00FF72'}}>build and embed</span> credit products.
                            </div>
                        </div>
                    </Layout>
                </div>
            </div>
        </Animated>
    );
}

function SectionTools() {
    return (
        <Layout disablePadding={true} disableOnMobile={true}
            className="overflow-hidden xl:rounded-b-[60px] md:rounded-b-[60px] rounded-b-[20px] ml-0 mr-0 max-w-full bg-[#070919] pb-[48px] text-white  md:pb-[90px] pt-[46px] md:pt-16  xl:pb-[120px] flex flex-col items-center w-full">
            <Animated>
                <div
                    className="flex flex-col md:flex-row max-w-full max-h-full md:pt-[14px] xl:pt-[84px] md:gap-6 xl:gap-9">
                    <div className="flex-shrink md:pl-4 xl:pl-0 mb-6 md:mb-0">
                        <RespImage
                            src={Product0xl}
                            md={Product0md}
                            xl={Product0xl}
                            className="object-contain w-auto h-auto md:w-[468px] md:h-[499px] xl:w-[638px] xl:h-[700px] md:rounded-[22px] object-cover"
                        />
                    </div>
                    <div className="flex-shrink">
                        <RespImage
                            src={Product1xl}
                            md={Product1md}
                            xl={Product1xl}
                            className="object-contain w-auto h-auto md:w-[468px] md:h-[499px] xl:w-[638px] xl:h-[700px] md:rounded-[22px] object-cover"
                        />
                    </div>
                </div>
            </Animated>

            <Animated>
                <RespImage
                    src={Productxl}
                    md={Productmd}
                    xl={Productxl}
                    className="bg-transparent w-auto h-auto md:w-auto md:h-auto xl:w-auto xl:h-auto md:ml-4 xl:ml-0 mt-5 xl:mt-9 xl:mb-[64px] md:mt-6 md:mb-[50px]"
                />
            </Animated>
            <div className="md:ml-5 xl:ml-0">
                <TextBlock
                    topic="Orchestration"
                    topicClassName="w-[137px]"
                    boxClassName="md:w-[500px] w-[300px] xl:w-[583px]"
                    subBoxClassName="xl:w-[500px] md:w-[500px] md:pr-[34px] xl:pr-[5px]"
                    title={
                        <>
                            Automated <span
                            style={{color: '#00FF72'}}> credit </span><span
                            style={{color: '#00FF72'}}>decisioning</span> platform
                        </>
                    }
                    subtitle={
                        <>
                            Typically, processing borrower applications takes a lot of time. With the Data Orchestration
                            feature, you can process such requests in minutes using a simple credit workflow builder.
                        </>
                    }
                />
            </div>
            {/* The code below draws the gradient behind the image */}
            <div className="flex w-full md:mt-[24px] md:ml-[64px] xl:mt-[0px] xl:ml-[158px]" style={{zIndex:2}}>
                <Animated>
                    <RespImage
                        src={Screen1}
                        md={Screen1md}
                        xl={Screen1xl}
                        className="bg-transparent xl:w-[1285px] xl:h-fit xl:pt-[45px] md:w-[960px]"
                    />
                </Animated>
            </div>
            <div style={{
                position: 'relative',
                width: "2000px", // Increase width
                height: "170px", // Increase height
                top: "-400px", // Adjust this value to position below the image
                left: "-171.6px",
                gap: '0px',
                opacity: 0.64,
                transform: 'rotate(-1.42deg)',
                zIndex: 1
            }}>
                <div style={{
                    position: 'relative',
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100%",
                    opacity: 0.34,
                    background: 'radial-gradient(circle at center, rgba(0, 255, 114, 0.5) 80%, rgba(255, 0, 0, 0) 100%,transparent 60%)',
                    borderRadius: '50%',
                    boxShadow: '0 0 0px rgba(0, 255, 114, 0.15), 0 0 0px rgba(0, 255, 114, 0.013), 0 0 0px rgba(0, 255, 114, 0.12), 100px 0 800px rgba(0, 255, 114, 0.6), 0 0 180px rgba(0, 255, 114, 0.9)',
                    zIndex: 0
                }}></div>
            </div>
            {/* end*/}

            <div
                //!-107px
                className="md:ml-5 xl:ml-1 xl:mt-[-107px] md:mt-[-112px]">
                <TextBlock
                    topic="Activity"
                    topicClassName="w-[97px]"
                    boxClassName="md:w-[550px] w-[300px] xl:w-[700px]"
                    subBoxClassName="md:w-[520px] xl:w-[510px] md:pr-[40px] xl:pl-[26px] xl:pr-0"
                    title={
                        <>
                            CRM for <span style={{color: '#00FF72'}}>swift, transparent</span><br/> deal
                            communication
                        </>
                    }
                    subtitle={
                        <>
                            Managing each transaction necessitates direct communication among various
                            participants.
                            We&#39;ve
                            developed a straightforward yet robust CRM system that facilitates tracking
                            communication
                            across
                            phone calls, emails, and SMS messages.
                        </>
                    }
                />
            </div>

            <Layout disablePadding={true}
                    className="flex flex-col xl:mt-[46px] xl:ml-[136px] md:ml-[33px] md:mt-[25px] md:flex-row xl:pl-0 xl:pr-0 xl:mr-0 xl:ml-0 xl:mx-0 xl:px-0 max-w-full max-h-full  ">

                <div className="mb-6 md:mb-0 md:mr-2 ">
                    <Animated>
                        <RespImage
                            src={Activity1}
                            md={Activity1md}
                            xl={Activity1xl}
                            className="object-contain cover rounded-b-[30px] md:w-[340px] md:h-[400px] xl:w-auto xl:h-[515px]"
                        />
                    </Animated>
                </div>
                <div
                    className="md:ml-6  ">
                    <Animated>
                        <RespImage
                            src={Activity2}
                            md={Activity2md}
                            xl={Activity2xl}
                            className="object-contain  cover md:w-[588px] md:h-[400px] xl:w-[864px] xl:h-[515px]"
                        />
                    </Animated>
                </div>
            </Layout>

            <div className="xl:mt-[70px] md:mt-[57px] md:ml-5 xl:ml-1">
                <TextBlock
                    topic="Scorecards"
                    topicClassName="w-[122px]"
                    boxClassName="md:w-[500px] w-[300px] xl:w-[650px]"
                    subBoxClassName="xl:w-[500px] md:w-[490px] w-[300px] xl:pl-[52px] xl:pr-[0px] md:pl-[0px] md:pr-[35px]"
                    title={
                        <>
                            Smart scoring <span
                            style={{color: '#00FF72'}}>system for<br/> improved</span> decision-making
                        </>
                    }
                    subtitle={
                        <>
                            Create custom applicant scoring system to quickly evaluate and rank credit
                            applicants based
                            on weighted data points.
                        </>
                    }
                />
            </div>
            <div className="flex w-full md:mt-[24px] md:ml-[64px] xl:rounded-[20px] md:rounded-[22px] xl:mt-[43px] xl:ml-[158px]">
                <Animated>
                    <RespImage
                        src={Screen3xl}
                        md={Screen3xl}
                        xl={Screen3xl}
                        className="bg-transparent xl:w-[1285px] xl:h-[809px]"
                    />
                </Animated>
            </div>
            <div className="xl:mt-[64px] md:mt-[57px] xl:ml-1 md:ml-5">
                <TextBlock
                    topic="Branding"
                    topicClassName="w-[107px]"
                    boxClassName="md:w-[200px] w-[300px] xl:w-[650px]"
                    subBoxClassName="md:w-[510px] xl:w-[510px] w-[300px] xl:pl-[45px] xl:pr-[0px] md:pl-[0px] md:pr-[40px]"
                    title={
                        <>
                            Preview and customize your <span style={{color: '#00FF72'}}>branded
                            email</span>
                        </>
                    }
                    subtitle={
                        <>
                            Customize your emails and personalize your brand&#39;s look and feel by engaging
                            directly with
                            your customers through tailored communication.
                        </>
                    }
                />
            </div>

            <Layout disablePadding={true}
                    className="flex flex-col xl:ml-[131px] md:ml-[32px] md:mt-[4px] xl:mt-[24px] md:flex-row xl:pl-0 xl:pr-0 xl:mr-0 xl:ml-0 xl:mx-0 xl:px-0 max-w-full max-h-full">
                <div className="mb-6 md:mb-0 md:mr-6">
                    <Animated>
                        <RespImage
                            src={Branding1}
                            md={Branding1md}
                            xl={Branding1xl}
                            className="object-contain cover md:w-[528px] md:h-[400px] xl:w-[752px] xl:h-[522px] xl:rounded-[30px] md:rounded-[22px]"
                        />
                    </Animated>
                </div>
                <div className="md:ml-0 xl:ml-0">
                    <Animated>
                        <RespImage
                            src={Branding2}
                            md={Branding2md}
                            xl={Branding2xl}
                            className="object-contain cover md:w-[412px] md:h-[400px] md:pl-[5px]  xl:w-[536px] xl:h-[522px] xl:rounded-[30px] md:rounded-[22px] xl:pl-[8px] "
                        />
                    </Animated>
                </div>
            </Layout>
            <div className="xl:mt-[62px] xl:ml-[1px] md:ml-[22px] md:mt-[57px]">
                <TextBlock
                    topic="Businesses"
                    topicClassName="w-[122px]"
                    boxClassName="md:w-[600px] w-[300px]"
                    subBoxClassName="md:w-[460px] mx-[24px]"
                    title={
                        <>
                            Manage <span style={{color: '#00FF72'}}>businesses</span> and relations
                            between<br/> companies
                            and
                            owners
                        </>
                    }
                    subtitle={
                        <>
                            Store all information about the borrower&#39;s business in one easily accessible place:
                            deals,
                            documents, metrics. Manage relationships between the business and owners, customers,
                            vendors.
                        </>
                    }
                />
            </div>

            <div className="flex w-full xl:mt-[44px] xl:ml-[159px] md:mt-[25px] md:ml-[65px]">
                <Animated>
                    <RespImage
                        src={Screen2xl}
                        md={Screen2xl}
                        xl={Screen2xl}
                        className="bg-transparent xl:w-[1285px] xl:h-[840px] xl:rounded-[30px] md:rounded-[22px] md:w-[960px] md:h-[627px]"
                    />
                </Animated>
            </div>
            <div className="xl:ml-1 xl:mt-[64px] md:ml-[24px] md:mt-[56px]">
                <TextBlock
                    topic="Widget"
                    topicClassName="w-[95px]"
                    boxClassName="md:w-[500px] w-[300px]"
                    subBoxClassName="xl:w-[510px] md:w-[510px] w-[300px] md:pr-[39px] xl:pr-[40px]"
                    title={
                        <>
                            Embedded application <span style={{color: '#00FF72'}}><br/>widget</span>
                        </>
                    }
                    subtitle={
                        <>
                            Create a white-labeled application for various credit products. Completing a loan
                            application is
                            a complex process, but the Lendflow form is optimized to deliver a high conversion
                            rate.
                        </>
                    }
                />
            </div>
            <Layout disableOnMobile={true} className="xl:mt-[20px] xl:ml-[100px] md:mt-[2px] md:ml-[35px]">
                <Animated>
                    <RespImage
                        src={Widget}
                        md={Widgetxl}
                        xl={Widgetxl}
                        className="bg-transparent md:pb-0 pb-5 md:px-[50px] xl:px-0 mt-5 xl:w-[1120px] xl:h-[569px] md:w-max md:h-[404px]"
                    />
                </Animated>
            </Layout>
            <Animated>
                <Layout
                    className="flex xl:hidden md:hidden xl:my-[30px] xl:pl-0 xl:pr-0 xl:mr-0 xl:ml-0 xl:mx-0 xl:px-0 mb:pl-0 mb:pr-0 max-w-full mt-[70px] max-h-full ">
                    <div className="flex-shrink mr-0 md:mr-6">
                        <InnovateSolutionTextBlock
                            boxClassName="xl:w-[600px] md:w-[400px] w-200"
                            subBoxClassName="xl:w-[450px] md:w-[380px] w-100 px-[20px] md:px-0"
                            title={
                                <>
                                    An <span
                                    style={{color: '#00FF72'}}>innovative</span> solution<br/>
                                    for <span style={{color: '#00FF72'}}> efficient </span>
                                    operations
                                </>
                            }
                            subtitle={
                                <>
                                    Universal widget, which unlocks new possibilities for
                                    integration and
                                    usage
                                    across a variety of systems. With its adaptive design, our
                                    widget easily
                                    integrates into any company&#39;s interfaces. </>
                            }
                        />
                    </div>
                </Layout>

                <Layout disablePadding={true}
                        className="flex xl:pl-0 xl:pr-0 xl:mr-0 xl:ml-0 xl:mx-0 xl:px-0 max-w-full max-h-full xl:my-[160px] md:my-[144px] mb-[150px]">
                    <div className="flex-shrink xl:mr-[47px] xl:ml-[65px] md:ml-[19px] md:mr-[45px] hidden xl:flex md:flex mt-1">
                        <InnovateSolutionTextBlock
                            boxClassName="xl:w-[600px] md:w-[400px]"
                            subBoxClassName="xl:w-[480px] md:w-[450px] md:pr-[40px]"
                            title={
                                <>
                                    An <span
                                    style={{color: '#00FF72'}}>innovative</span> solution<br/>
                                    for <span style={{color: '#00FF72'}}> efficient </span>
                                    operations
                                </>
                            }
                            subtitle={
                                <>
                                    Universal widget, which unlocks new possibilities for
                                    integration and
                                    usage
                                    across a variety of systems. With its adaptive design, our
                                    widget easily
                                    integrates into any company&#39;s interfaces. </>
                            }
                        />
                    </div>
                    <div className="relative flex-col xl:mr-[60px] xl:ml-0 md:mr-0 md:ml-10 w-full justify-center mt-0">
                        <RespImage
                            src={Solution}
                            md={Solutionmd}
                            xl={Solutionxl}
                            className="bg-transparent object-contain w-full md:mt-0 mt-10"
                        />
                    </div>
                </Layout>
            </Animated>

            <Layout disableOnMobile={true} disablePadding={true}
                    className="flex flex-col mt-[30px] xl:mt-[-15px] xl:rounded-[30px] md:rounded-[22px] md:mt-[5px] xl:ml-[130px] md:ml-[22px]  md:flex-row xl:pl-0 xl:pr-0 xl:mr-0  xl:mx-0 xl:px-0 max-w-full max-h-full">
                <div className="mb-6 md:mb-0 xl:mr-[35px]">
                    <Animated>
                        <RespImage
                            src={Pic1}
                            md={Pic1md}
                            xl={Pic1xl}
                            className="object-contain md:w-[638px] md:h-[510px] xl:w-[638px] xl:h-[700px] cover"
                        />
                    </Animated>
                </div>
                <div className="xl:mr-0 md:mr-7">
                    <Animated>
                        <RespImage
                            src={Pic2}
                            md={Pic2md}
                            xl={Pic2xl}
                            className="object-contain md:w-[646px] md:h-[510px] xl:w-[638px] xl:h-[700px] cover"
                        />
                    </Animated>
                </div>
            </Layout>
            <div className="w-full xl:ml-[130px] xl:mt-[35px] xl:rounded-[30px] md:rounded-[22px]  md:ml-[70px] md:mt-[25px] aspect-auto">
                <Animated>
                    <RespImage
                        src={Pic0}
                        md={Pic0md}
                        xl={Pic0xl}
                        className="bg-transparent md:w-[960px] md:h-[715px] xl:w-[1312px] xl:h-[996px]"
                    />
                </Animated>
            </div>
        </Layout>
    );
}

