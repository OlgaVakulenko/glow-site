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
import Innovate1xl from "../LendFlow/assets/innovate-1-xl.png";
import Innovate2xl from "../LendFlow/assets/innovate-2-xl.png";
import Innovate1 from "../LendFlow/assets/innovate-1.png";
import Innovate2 from "../LendFlow/assets/innovate-2.png";
import Innovate3 from "../LendFlow/assets/innovate-3.png";
import Innovate3xl from "../LendFlow/assets/innovate-3-xl.png";
import Process1 from "./assets/process-1.png";
import Process1md from "./assets/process-1-md.png";
import Process1xl from "./assets/process-1-xl.png";
import LogoXl from "../LendFlow/assets/logo-xl.png";
import LogoBigXl from "../LendFlow/assets/logo-big-xl.png";
import Productmd from "./assets/product-md.png";
import Productxl from "./assets/product-xl.svg";
import Product0 from "./assets/product0.png";
import Product0md from "./assets/product0-md.png";
import Product0xl from "./assets/product0-xl.png";
import Product1md from "./assets/product1-md.png";
import Product1xl from "./assets/product1-xl.png";
import Screen1 from "./assets/screen1.png";
import Screen1md from "./assets/screen1-md.png";
import Screen1xl from "./assets/screen1-xl.png";
import Screen2 from "./assets/screen2.png";
import Screen2md from "./assets/screen2-md.png";
import Screen2xl from "./assets/screen2-xl.png";
import Screen3 from "./assets/screen3.png";
import Screen3md from "./assets/screen3-md.png";
import Screen3xl from "./assets/screen3-xl.png";
import Activity1 from "./assets/activity1.png";
import Activity1md from "./assets/activity1-md.png";
import Activity1xl from "./assets/activity1-xl.png";
import Activity2 from "./assets/activity2.png";
import Activity2md from "./assets/activity2-md.png";
import Activity2xl from "./assets/activity2-xl.png";
import Branding1 from "./assets/branding1.png";
import Branding1md from "./assets/branding1-md.png";
import Branding1xl from "./assets/branding1-xl.png";
import Branding2 from "./assets/branding2.png";
import Branding2md from "./assets/branding2-md.png";
import Branding2xl from "./assets/branding2-xl.png";
import Widget from "./assets/widget.png";
import Widgetmd from "./assets/widget-md.png";
import Widgetxl from "./assets/widget-xl.png";
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
        <Layout disablePadding={true} >
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
                        className="!pt-[172px] md:!pt-[268px] xl:!pt-[176px]"
                        title={
                            <>
                                Lendflow:
                                <br/>
                                design ecosystem for a<br/>
                                fintech startup
                            </>
                        }
                        subtitle="Lendflow provides the tools to create and integrate credit products, from application to underwriting."
                    />
                </Animated>
            </div>
            <Animated>
                <RespImage
                    src={Frame1}
                    md={Frame1md}
                    xl={Frame1xl}
                    className="bg-[#7a7b7c]"
                />
            </Animated>
            <SectionBalance/>
            <SectionInnovate/>
            <SectionTransforming/>
            <SectionToolsHeader/>
            <SectionTools/>
            <NextCase
                icon={<Image src={nextCaseIcon} className="w-[68px] h-[68px] md:mb-0 mb-7 mr-10" alt="icon"/>}
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
        <Layout
            disablePadding={true}
        >
            <Animated>
                <Layout
                    className="pb-16 pt-[100px] md:pb-[60px] md:pt-[100px] xl:pb-[50px] xl:pt-[150px] mx-0 font-inter">
                    <SectionFullCycle
                        className="mb-6 md:mb-[10px] xl:mb-16 md:text-next-heading-3 leading-[36px] md:leading-[45px] xl:leading-[64px] xl:text-[56px] xl:tracking-[-2px] text-next-heading-5">
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
                </Layout>
            </Animated>
        </Layout>
    );
}

function SectionInnovate() {
    return (
        <div className="mb-5 md:mb-[50px] xl:mb-[100px] xl:mt-[66px]">
            <SectionInnovateLayout>
                <Animated>
                    <RespImage
                        src={Innovate0xl}
                        md={Innovate0xl}
                        xl={Innovate0xl}
                        className="bg-[#FFFFFF] mb-5 md:mb-[20px] xl:mb-[36px]"
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
                               className="rounded-[30px] flex mt-5 box-sizing-border" alt="Innovate"/>
                    </div>
                    <Animated>
                        <div
                            className="bg-[#FFFFFF] flex flex-col items-center box-sizing-border hidden md:inline xl:inline ">
                            <div className="flex flex-row gap-[0_36px] box-sizing-border">
                                <Image src={Innovate1xl}
                                       className="rounded-[30px] relative flex flex-col justify-center items-center md:w-[260px] md:h-[400px] xl:w-[364px] xl:h-[513px]"
                                       alt="Innovate"/>
                                <Image src={Innovate2xl}
                                       className="rounded-[30px] flex md:w-[392px] md:h-[400px] xl:w-[546px] xl:h-[513px] box-sizing-border"
                                       alt="Innovate"/>
                                <Image src={Innovate3xl}
                                       className="rounded-[30px] bg-[#F4F5F6] relative md:w-[260px] md:h-[400px] xl:w-[330px] xl:h-[513px]"
                                       alt="Innovate"/>
                            </div>
                        </div>
                    </Animated>
                </Animated>
            </SectionInnovateLayout>
        </div>
    );
}

function SectionInnovateLayout({
                                   childrenLayout = true,
                                   children,
                                   className
                               }) {
    const Wrapper = useMemo(() => {
        return childrenLayout ? Layout : 'div';
    }, [childrenLayout]);

    return (
        <section className={className}>
            <Wrapper>
                <Animated delay={150}>{children}</Animated>
            </Wrapper>
        </section>
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
    <div className="flex md:mb-[60px] xl:mb-10 xl:min-w-[1440px] xl:flex-nowrap">
        {data.map((column, i) => (
            <Animated
                key={i}
                delay={i * 100}
                className="flex flex-col items-start"
                style={{ width: '335px' }}
            >
                <div
                    className=" text-xs font-medium uppercase leading-[13px] opacity-50 md:mb-12 md:text-[20px] md:normal-case md:leading-[30px] md:opacity-30  ">
                    {column.title}
                </div>
                <div className="font-normal md:leading-[27px]3 text-sm leading-[36px] md:text-[20px] xl:pl-[1px]">
                    {column.values.map((value, k) => (
                        <Animated
                            delay={i * k * 50}
                            key={k}
                            className="md:mb-6 last:md:mb-0"
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
            <Layout
                className="pb-[100px]  md:pb-[150px] md:px-[100px] xl:px-[130px] xl:pt-[48px] xl:pl-[140px] md:pt-[72px]">
                <div className="flex justify-center items-center">
                    <div style={{fontFeatureSettings: "normal"}}
                         className="mb-11 font-satoshi text-black text-[38px] tracking-tight font-bold leading-[45px] md:mb-14 md:text-[56px] xl:text-[80px]
                     md:leading-[67px] xl:leading-[96px] xl:tracking-[-3px] xl:mb-20 ">
                        Lendflow is transforming the credit industry
                        <Image src={LogoXl}
                               className="inline-block mr-5 ml-5 h-[71px] w-[71px] md:h-[50px] md:w-[50px] xl:w-[71px] xl:h-fit xl:pb-[8px] "
                               alt="Logo"/>
                        by enabling every company to provide <span
                        style={{color: '#12B75C'}}>seamless</span> financial<span
                        style={{color: '#12B75C'}}> experiences</span><br/>to their customers.
                    </div>

                </div>
                <Animated>
                    <RespImage
                        src={Process1}
                        md={Process1md}
                        xl={Process1xl}
                        className="bg-[#FFFFFF] xl:w-[1160px] "/>
                </Animated>
            </Layout>
        </Animated>

    );
}

function SectionToolsHeader() {
    return (
        <Animated>
            <div style={{
                backgroundImage: `radial-gradient(circle at center, rgba(7, 9, 25, 0.15) 0, rgba(255, 255, 255, 0.08) 1px, #070919 0.5px, #070919 2px)`,
                backgroundSize: '13px 13px',
                backgroundRepeat: 'repeat',
                zIndex: 2,
            }}
                 className="overflow-hidden pl-0 pr-0 ml-0 mr-0 max-w-full xl:rounded-t-[60px] md:rounded-t-[40px] rounded-t-[20px] bg-[#070919]  py-10 pb-[48px] text-white md:pb-20 md:pt-16 xl:p-20 flex flex-col items-center w-full"
            >
                <div className="bg-[#070919]  flex flex-col items-center w-full"
                     style={{

                         backgroundImage: `radial-gradient(circle at center, rgba(7, 9, 25, 0.15) 0, rgba(255, 255, 255, 0.08) 1px, #070919 0.5px, #070919 2px)`,
                         backgroundSize: '13px 13px',
                         backgroundRepeat: 'repeat',
                         zIndex: 2,
                     }}>
                    <div
                        className="flex items-center justify-center md:w-11/12 mt-[50px] md:mt-[120px] xl:mt-[200px] xl:mb-[20px]">
                        <Image alt="logo" src={LogoBigXl}
                               className="w-[50px] h-[50px] xl:w-[114px] xl:h-[114px] md:w-[80px] md:h-[80px] "/>
                    </div>
                    <Layout
                        className="pt-[30px] xl:pb-0 md:pb-0 px-[25px] md:px-[50px]  md:pt-[60px] ">
                        <div className="flex justify-center items-center xl:ml-[30px] xl:mr-[30px] xl:w-[1120px]">
                            <div style={{fontFeatureSettings: "normal"}}
                                 className="text-center font-satoshi tracking-tight font-medium text-white forced-colors:accent-white leading-[45px] md:mb-7 text-[38px] md:text-[56px] xl:text-[80px]
  md:leading-[67px] xl:leading-[96px]">
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
        <Layout
            className="overflow-hidden xl:rounded-b-[60px] md:rounded-b-[40px] rounded-b-[20px] ml-0 mr-0 max-w-full  bg-[#070919]  py-10 pb-[48px] text-white  md:pb-20 md:pt-16 xl:p-20 xl:pb-[120px] flex flex-col items-center w-full">
            <Animated>
                <Layout disablePadding={true}
                        className="flex flex-col md:flex-row md:pl-0 md:pr-0 md:mr-0 md:ml-0 md:mx-0 md:px-0 max-w-full max-h-full xl:pt-[66px]">
                    <div className="flex-shrink mb-6 md:mb-0 ">
                        <RespImage
                            src={Product0}
                            md={Product0md}
                            xl={Product0xl}
                            className="object-contain object-fit: cover"
                        />
                    </div>
                    <div className="flex-shrink md:ml-9">
                        <RespImage
                            src={Product1md}
                            md={Product1md}
                            xl={Product1xl}
                            className="object-contain object-fit: cover"
                        />
                    </div>
                </Layout>
            </Animated>

            <div className="md:w-full xl:mt-4 aspect-auto md:mx-6 xl:mx-6">
                <Animated>
                    <RespImage
                        src={Productxl}
                        md={Productmd}
                        xl={Productxl}
                        className="bg-transparent mt-5 xl:mt-5 xl:mb-16 md:mt-6 mb:mb-12"
                    />
                </Animated>
            </div>
            <TextBlock
                topic="Orchestration"
                topicClassName="w-[137px]"
                boxClassName="md:w-[500px] w-[300px] xl:w-[583px]"
                subBoxClassName="xl:w-[500px] "
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
            <div className="flex w-full">
                <div className="flex-shrink-0 w-full  ">
                    <div className="relative">
                        <Animated>
                            <RespImage
                                src={Screen1}
                                md={Screen1md}
                                xl={Screen1xl}
                                className="bg-transparent"
                            />
                        </Animated>
                    </div>
                </div>
            </div>
            <TextBlock
                topic="Activity"
                topicClassName="w-[97px]"
                boxClassName="md:w-[500px] w-[300px]"
                subBoxClassName="md:w-[490px] w-[320px] mx-28"
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

            <Layout disablePadding={true}
                    className="flex flex-col md:flex-row xl:pl-0 xl:pr-0 xl:mr-0 xl:ml-0 xl:mx-0 xl:px-0 max-w-full max-h-full  ">

                <div className="mb-6 md:mb-0 md:mr-6 ">
                    <Animated>
                        <RespImage
                            src={Activity1}
                            md={Activity1md}
                            xl={Activity1xl}
                            className="object-contain cover md:w-[340px] md:h-[400px] xl:w-auto xl:h-[515px]"
                        />
                    </Animated>
                </div>
                <div
                    className="md:ml-6">
                    <Animated>
                        <RespImage
                            src={Activity2}
                            md={Activity2md}
                            xl={Activity2xl}
                            className="object-contain cover md:w-[588px] md:h-[400px] xl:w-auto xl:h-[515px]"
                        />
                    </Animated>
                </div>
            </Layout>

            <TextBlock
                topic="Scorecards"
                topicClassName="w-[122px]"
                boxClassName="md:w-[500px] w-[300px]"
                subBoxClassName="md:w-[470px] w-[300px] mx-24"
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
            <div className="flex w-full"> {/* Fixed height for all images */}
                <div className="flex-shrink-0 w-full mr-6">
                    <div className="relative">
                        <Animated>
                            <RespImage
                                src={Screen3}
                                md={Screen3md}
                                xl={Screen3xl}
                                className="bg-transparent"
                            />
                        </Animated>
                    </div>
                </div>
            </div>
            <TextBlock
                topic="Branding"
                topicClassName="w-[107px]"
                subBoxClassName="md:w-[500px] w-[300px] mx-24"
                title={
                    <>
                        Preview and customize <br/>your <span style={{color: '#00FF72'}}>branded
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

            <Layout disablePadding={true}
                    className="flex flex-col md:flex-row xl:pl-0 xl:pr-0 xl:mr-0 xl:ml-0 xl:mx-0 xl:px-0 max-w-full max-h-full">
                <div className="mb-6 md:mb-0 md:mr-6">
                    <Animated>
                        <RespImage
                            src={Branding1}
                            md={Branding1md}
                            xl={Branding1xl}
                            className="object-contain cover md:w-[528px] md:h-[400px] xl:w-auto xl:h-[515px]"
                        />
                    </Animated>
                </div>
                <div className="md:ml-6">
                    <Animated>
                        <RespImage
                            src={Branding2}
                            md={Branding2md}
                            xl={Branding2xl}
                            className="object-contain cover md:w-[400px] md:h-[400px] xl:w-auto xl:h-[515px]"
                        />
                    </Animated>
                </div>
            </Layout>
            <TextBlock
                topic="Businesses"
                topicClassName="w-[122px]"
                boxClassName="md:w-[500px] w-[300px]"
                subBoxClassName="md:w-[550px]"
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
            <div className="flex w-full">
                <div className="flex-shrink-0 w-full mr-6">
                    <div className="relative">
                        <Animated>
                            <RespImage
                                src={Screen2}
                                md={Screen2md}
                                xl={Screen2xl}
                                className="bg-transparent"
                            />
                        </Animated>
                    </div>
                </div>
            </div>
            <TextBlock
                topic="Widget"
                topicClassName="w-[95px]"
                boxClassName="md:w-[500px] w-[300px]"
                subBoxClassName="md:w-[550px] w-[300px] mx-24"
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

            <Layout disableOnMobile={true}>
                <Animated>
                    <RespImage
                        src={Widget}
                        md={Widgetmd}
                        xl={Widgetxl}
                        className="bg-transparent md:pb-0 pb-5 md:px-[50px] xl:px-0 mt-5"
                    />
                </Animated>
            </Layout>
            <Animated>
                <Layout
                    className="flex xl:hidden md:hidden xl:pl-0 xl:pr-0 xl:mr-0 xl:ml-0 xl:mx-0 xl:px-0 mb:pl-0 mb:pr-0 max-w-full mt-[70px] max-h-full ">
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
                        className="flex  xl:pl-0 xl:pr-0 xl:mr-0 xl:ml-0 xl:mx-0 xl:px-0  max-w-full max-h-full xl:my-[150px] md:my-[100px] mb-[150px]">
                    <div className="flex-shrink mr-[60px] hidden xl:flex md:flex">
                        <InnovateSolutionTextBlock
                            boxClassName="xl:w-[600px] md:w-[400px]"
                            subBoxClassName="xl:w-[450px] md:w-[380px]"
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
                    <div className="relative flex-col w-full justify-center">
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
                    className="flex flex-col md:flex-row xl:pl-0 xl:pr-0 xl:mr-0 xl:ml-0 xl:mx-0 xl:px-0 max-w-full max-h-full">
                <div className="mb-6 md:mb-0 md:mr-6">
                    <Animated>
                        <RespImage
                            src={Pic1}
                            md={Pic1md}
                            xl={Pic1xl}
                            className="object-contain md:w-[638px] md:h-[510px] xl:w-auto xl:h-auto cover"
                        />
                    </Animated>
                </div>
                <div className="md:ml-6">
                    <Animated>
                        <RespImage
                            src={Pic2}
                            md={Pic2md}
                            xl={Pic2xl}
                            className="object-contain md:w-[646px] md:h-[510px] xl:w-auto xl:h-auto cover"
                        />
                    </Animated>
                </div>
            </Layout>
            <div className="w-full mt-4 aspect-auto">
                <Animated>
                    <RespImage
                        src={Pic0}
                        md={Pic0md}
                        xl={Pic0xl}
                        className="bg-transparent"
                    />
                </Animated>
            </div>
        </Layout>
    );
}

