import Head from 'next/head';
import Animated from '../../../Animated';
import RespImage from '../Renovation/RespImage';
import Layout from '../../../Layout';
import RespSVG from '../Renovation/RespSVG';
import Image from 'next/image';
import Frame4 from './assets/frame-4.png';
import Frame5 from './assets/frame-5.png';
import Frame6 from './assets/frame-6.png';
import Frame7 from './assets/frame-7.png';
import Frame8 from './assets/frame-8.png';
import Frame9 from './assets/frame-9.png';
import Frame20xl from './assets/frame-20-xl.png';
import Frame20md from './assets/frame-20-md.png';
import Frame21 from './assets/frame-21.png';
import Frame10 from './assets/frame10.png';


export default function AiProductivity() {
  return (
    <>
      <Head>
        <title>Case Ai - Your Digital Ally for Seamless Productivity</title>
        <meta
          name="description"
          content="Case Ai - Your Digital Ally for Seamless Productivity"
        ></meta>
      </Head>
      <Layout disablePadding className="mb-[96px] xl:mb-[132px]">
        <Animated>
          <video
            autoPlay
            loop
            muted
            preload
            controls={false}
            playsInline
            src="/video/ai/video-1.mp4"
            className="hidden object-fill xl:block xl:max-h-[800px]"
          />
          <video
            autoPlay
            loop
            muted
            preload
            controls={false}
            playsInline
            src="/video/ai/video-1-tablet.mp4"
            className="object-fill max-md:hidden md:max-h-[569px] xl:hidden"
          />
          <video
            autoPlay
            loop
            muted
            preload
            controls={false}
            playsInline
            src="/video/ai/video-1-phone.mp4"
            className="object-fill md:hidden"
          />
        </Animated>
      </Layout>
      <Layout>
        <Animated>
          <div className="mb-8 md:mb-[48px] xl:mb-[77px]">
            <div className="mb-4">
              <RespSVG
                src="/img/aiCase/frameee-2.svg"
                className=""
                md="/img/aiCase/frame-2-xl.svg"
                xl="/img/aiCase/frame-2-xl.svg"
              />
            </div>
            <div className=" items-start justify-between gap-[90px] md:flex">
              <h2 className="mb-[20px] font-sf text-[32px] font-semibold leading-[32px] tracking-[-2px] md:mb-0 md:max-w-[45.8%] md:text-[36px] md:leading-[36px] md:tracking-[-3px] xl:max-w-[40.3%] xl:text-[48px] xl:leading-[48px] xl:tracking-[-4px]">
                From scheduling <br className="sm:hidden" /> and inquiries to{' '}
                <span className="text-light-red">brainstorming</span> and
                problem&#8209;solving
              </h2>
              <p className="text-[12px] font-normal  leading-[17px] text-[#6F6F6F] md:max-w-[50%] md:text-[14px] md:leading-[20px] xl:max-w-[46.4%] xl:text-[16px] xl:leading-[24px]">
                Step into the future of conversational AI with our advanced
                chatbot assistant, engineered to transform how you engage with
                technology. Designed with a perfect blend of functionality and
                aesthetics, this AI-powered assistant is not just about
                delivering answers—it’s about understanding your needs,
                anticipating your next steps, and integrating seamlessly into
                your daily tasks.
              </p>
            </div>
          </div>
        </Animated>
        <Animated>
          <div className="mb-[96px] w-full sm:mb-[96px] xl:mb-[132px]">
            <RespSVG
              src="/img/aiCase/frame-grid-xl.png"
              className="hidden w-full sm:block"
              md="/img/aiCase/frame-grid-md.png"
              xl="/img/aiCase/frame-grid-xl.png"
            />
            <div className={'flex flex-col gap-[12px] sm:hidden'}>
              <RespSVG
                src="/img/aiCase/frame-grid-sm-1.svg"
                className="w-full"
              />
              <RespSVG
                src="/img/aiCase/frame-grid-sm-2.svg"
                className="w-full"
              />
              <RespSVG
                src="/img/aiCase/frame-grid-sm-3.png"
                className="w-full"
              />
              <RespSVG
                src="/img/aiCase/frame-grid-sm-4.png"
                className="w-full"
              />
              <RespSVG
                src="/img/aiCase/frame-grid-sm-5.png"
                className="w-full"
              />
              <RespSVG
                src="/img/aiCase/frame-grid-sm-6.png"
                className="w-full"
              />
            </div>
          </div>
        </Animated>
        <Animated>
          <div className="mb-[96px] xl:mb-[132px]">
            {/*TODO: Fix svg size or use svg for each photo*/}
            {/*<RespSVG*/}
            {/*  src="/img/aiCase/frame-3-xl.svg"*/}
            {/*  className="hidden w-full sm:block"*/}
            {/*  md="/img/aiCase/frame-3-xl.svg"*/}
            {/*  xl="/img/aiCase/frame-3-xl.svg"*/}
            {/*/>*/}
            {/*<Animated>*/}
            {/*  <div className="mb-3">*/}
            {/*    <RespImage*/}
            {/*      src={Frame4}*/}
            {/*      className="w-full sm:hidden"*/}
            {/*      md={Frame4}*/}
            {/*      xl={Frame4}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</Animated>*/}
            {/*<Animated>*/}
            {/*  <div className="mb-3">*/}
            {/*    <RespImage*/}
            {/*      src={Frame5}*/}
            {/*      className="w-full sm:hidden"*/}
            {/*      md={Frame5}*/}
            {/*      xl={Frame5}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</Animated>*/}
            {/*<Animated>*/}
            {/*  <div className="mb-3 h-[151px] object-cover xs:h-auto">*/}
            {/*    <RespImage*/}
            {/*      src={Frame6}*/}
            {/*      className=" h-[151px] w-full object-contain xs:h-auto sm:hidden"*/}
            {/*      md={Frame6}*/}
            {/*      xl={Frame6}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</Animated>*/}
            {/*<Animated>*/}
            {/*  <div className="mb-3">*/}
            {/*    <RespImage*/}
            {/*      src={Frame7}*/}
            {/*      className="w-full sm:hidden"*/}
            {/*      md={Frame7}*/}
            {/*      xl={Frame7}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</Animated>*/}
            {/*<Animated>*/}
            {/*  <div className="mb-3">*/}
            {/*    <RespImage*/}
            {/*      src={Frame8}*/}
            {/*      className="w-full sm:hidden"*/}
            {/*      md={Frame8}*/}
            {/*      xl={Frame8}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</Animated>*/}
            {/*<Animated>*/}
            {/*  <div>*/}
            {/*    <RespImage*/}
            {/*      src={Frame9}*/}
            {/*      className="w-full sm:hidden"*/}
            {/*      md={Frame9}*/}
            {/*      xl={Frame9}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</Animated>*/}
          </div>
        </Animated>
      </Layout>
      <Layout disablePadding>
        <Animated>
          <div className="relative mb-[96px] h-[812px] w-full xs:h-auto xl:mb-[132px] ">
            {/*<RespSVG*/}
            {/*  src="/img/aiCase/framee-10-xl.svg"*/}
            {/*  className="hidden h-full w-full md:block"*/}
            {/*  md="/img/aiCase/framee-10-xl.svg"*/}
            {/*  xl="/img/aiCase/framee-10-xl.svg"*/}
            {/*/>*/}
            <RespImage
              src={Frame10}
              className="hidden h-full w-full md:block"
              md={Frame10}
              xl={Frame10}
            />
            <Image
              src="/img/aiCase/frame-9-md.svg"
              className="hidden h-auto w-full xs:block md:hidden"
              width={0}
              height={0}
              alt=""
            />
            <RespSVG
              src="/img/aiCase/frame-9.svg"
              className="h-full w-full object-cover object-top xs:hidden"
              md="/img/aiCase/frame-9-md.svg"
              xl="/img/aiCase/frame-9-xl.svg"
            />
            <RespSVG
              src="/img/aiCase/frame-10.png"
              className="absolute-center !left-[56%] !top-[66%] max-sm:w-[288px] xs:hidden"
              md="/img/aiCase/frame-10.svg"
              xl="/img/aiCase/frame-10.svg"
            />
          </div>
        </Animated>
      </Layout>
      <Layout>
        <Animated>
          <div className="mb-8 md:mb-[99px] xl:mb-[80px]">
            <div className="mb-4">
              <RespSVG
                src="/img/aiCase/frame-12.svg"
                className=""
                md="/img/aiCase/frame-12-md.svg"
                xl="/img/aiCase/frame-12-xl.svg"
              />
            </div>
            <div className=" items-start justify-between md:flex md:gap-[40px] xl:gap-[90px]">
              <h2 className="mb-[20px] font-sf text-[32px] font-semibold leading-[32px] tracking-[-2px] md:mb-0 md:max-w-[53.8%] md:text-[36px] md:leading-[36px] md:tracking-[-3px] xl:max-w-[43.3%] xl:text-[48px] xl:leading-[48px] xl:tracking-[-4px]">
                Your{' '}
                <span className="text-light-red">
                  All-in-One <br className="sm:hidden" />
                  AI
                </span>
                <br className="hidden xl:block" />{' '}
                <span className="md:text-light-red">Assistant</span>:
                <br className="md:hidden" /> A Personal Guide,{' '}
                <br className="sm:hidden" /> Creative Partner,{' '}
                <br className="md:hidden" />
                and Smart Strategist
              </h2>
              <p className="text-[12px] leading-[17px] text-[#6F6F6F] md:max-w-[50%] md:text-[14px] md:leading-[20px] xl:max-w-[46.4%] xl:text-[16px] xl:leading-[24px]">
                This assistant helps with choosing interior designs, writing
                essays, crafting social media posts, analyzing competitors, and
                even performing calculations. It analyzes images to suggest
                design ideas, generates well-researched essays, creates engaging
                posts based on trends, and provides accurate calculations, all
                tailored to your needs.
              </p>
            </div>
          </div>
        </Animated>
        <Animated>
          <div className="mb-[96px] w-full xl:mb-[132px]">
            <RespSVG
              src="/img/aiCase/frame-13.svg"
              className="w-full"
              md="/img/aiCase/frame-13-md.svg"
              xl="/img/aiCase/framee-13-xl.png"
            />
          </div>
        </Animated>
      </Layout>
      <Layout>
        <Animated>
          <div className="mb-8 md:mb-[100px] xl:mb-[115px]">
            <div className="mb-4">
              <RespSVG
                src="/img/aiCase/frame-14.svg"
                className=""
                md="/img/aiCase/frame-14-md.svg"
                xl="/img/aiCase/frame-14-xl.svg"
              />
            </div>
            <div className=" items-start justify-between md:flex md:gap-[30px] xl:gap-[90px]">
              <h2 className="mb-[20px] font-sf text-[32px] font-semibold leading-[32px] tracking-[-2px] md:mb-0 md:max-w-[45.8%] md:text-[36px] md:leading-[36px] md:tracking-[-3px] xl:max-w-[44.3%] xl:text-[48px] xl:leading-[52.8px] xl:tracking-[-4px]">
                Interactive{' '}
                <span className="md:text-light-red">Intelligence</span>:
                <br className="hidden sm:block md:hidden" /> Real-Time{' '}
                <span className="text-light-red md:text-black">Engagement</span>{' '}
                <br className="hidden sm:block md:hidden" />
                Through Dynamic Visual Feedback
              </h2>
              <p className="text-[12px] font-normal  leading-[17px] text-[#6F6F6F] md:max-w-[50.5%] md:text-[14px] md:leading-[20px] xl:max-w-[46.4%] xl:text-[16px] xl:leading-[24px]">
                This animation highlights the AI&#39;s engagement, with
                real-time visual feedback. As the AI speaks, the pulsing motion
                of the sphere conveys intelligence and responsiveness, turning
                the conversation into a more interactive and visually engaging
                experience.
              </p>
            </div>
          </div>
        </Animated>
        <div className="mb-[96px] w-full xl:mb-[132px]">
          <Animated>
            <video
              autoPlay
              loop
              muted
              preload
              playsInline
              controls={false}
              src="/video/ai/desktoptablet.mp4"
              className="md:max-h-[930px] xl:max-h-[1271px] md:block hidden"
            />
            <video
              autoPlay
              loop
              muted
              playsInline
              preload
              controls={false}
              src="/video/ai/mobile.mp4"
              className="md:max-h-[930px] xl:max-h-[1271px] md:hidden"
            />
          </Animated>
        </div>
      </Layout>
      <Layout>
        <div className="mb-[48px] w-full md:mb-[96px] xl:mb-[132px]">
          <Animated>
            <RespSVG
              src="/img/aiCase/frame-0.png"
              className="w-full"
              md="/img/aiCase/frame-0-md.svg"
              xl="/img/aiCase/frame-0-xl.png"
            />
          </Animated>
        </div>
      </Layout>
      <Layout>
        <div className="mb-[96px] grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-2 md:gap-x-[13px] md:gap-y-3 xl:mb-[132px] xl:gap-x-[16.5px] xl:gap-y-4">
          <Animated>
            <div className="h-[172px] xs:h-[220px] sm:h-[260px] md:h-[317px] xl:h-[433px]">
              {/*<video*/}
              {/*  autoPlay*/}
              {/*  loop*/}
              {/*  muted*/}
              {/*  poster="/img/aiCase/poster1.png"*/}
              {/*  preload="auto"*/}
              {/*  playsInline*/}
              {/*  controls={false}*/}
              {/*  className="h-full w-full rounded-[12px] object-cover object-[30%]  md:rounded-[32px] xl:rounded-[48px]"*/}
              {/*>*/}
              {/*  <source src="/video/ai/video-4.mp4" type="video/mp4" />*/}
              {/*</video>*/}
              <RespSVG
                src="/img/aiCase/card1.png"
                className="h-full w-full  rounded-[12px]  md:rounded-[32px] xl:rounded-[48px]"
                md="/img/aiCase/card1.png"
                xl="/img/aiCase/card1.png"
              />
            </div>
          </Animated>
          <Animated>
            <div className="h-[172px] xs:h-[220px] sm:h-[260px] md:h-[317px] xl:h-[433px]">
              <RespSVG
                src="/img/aiCase/card2.png"
                className="h-full w-full  rounded-[12px]  md:rounded-[32px] xl:rounded-[48px]"
                md="/img/aiCase/card2.png"
                xl="/img/aiCase/card2.png"
              />
            </div>
          </Animated>
          <Animated>
            <div className="h-[172px] xs:h-[220px] sm:h-[260px] md:h-[317px] xl:h-[433px]">
              <RespSVG
                src="/img/aiCase/card3.png"
                className="h-full w-full  rounded-[12px]  md:rounded-[32px] xl:rounded-[48px]"
                md="/img/aiCase/card3.png"
                xl="/img/aiCase/card3.png"
              />
            </div>
          </Animated>
          <Animated>
            <div className="h-[172px] xs:h-[220px] sm:h-[260px] md:h-[317px] xl:h-[433px]">
              <RespSVG
                src="/img/aiCase/card4.png"
                className="h-full w-full  rounded-[12px]  md:rounded-[32px] xl:rounded-[48px]"
                md="/img/aiCase/card4.png"
                xl="/img/aiCase/card4.png"
              />
            </div>
          </Animated>
          <Animated>
            <div className="h-[172px] xs:h-[220px] sm:h-[260px] md:h-[317px] xl:h-[433px]">
              <RespSVG
                src="/img/aiCase/card5.png"
                className="h-full w-full  rounded-[12px]  md:rounded-[32px] xl:rounded-[48px]"
                md="/img/aiCase/card5.png"
                xl="/img/aiCase/card5.png"
              />
            </div>
          </Animated>
          <Animated>
            <div className="h-[172px] xs:h-[220px] sm:h-[260px] md:h-[317px] xl:h-[433px]">
              <RespSVG
                src="/img/aiCase/card6.png"
                className="h-full w-full  rounded-[12px]  md:rounded-[32px] xl:rounded-[48px]"
                md="/img/aiCase/card6.png"
                xl="/img/aiCase/card6.png"
              />
            </div>
          </Animated>
        </div>
        <Animated>
          <div className="mb-8 hidden md:mb-[61px] md:block xl:mb-[66px]">
            <div className="mb-4 xl:mb-[26px]">
              <RespSVG
                src="/img/aiCase/frame-15-xl.svg"
                className=""
                md="/img/aiCase/frame-15-xl.svg"
                xl="/img/aiCase/frame-15-xl.svg"
              />
            </div>
            <div className=" items-start justify-between gap-[50px] md:flex">
              <h2 className="mb-[20px] font-sf text-[32px] font-semibold leading-[32px] tracking-[-2px] md:mb-0 md:max-w-[45.8%] md:text-[36px] md:leading-[36px] md:tracking-[-3px] xl:max-w-[40.3%] xl:text-[48px] xl:leading-[48px] xl:tracking-[-4px]">
                Key Phases of the <br className="" />
                Design Process: From <br className="" />{' '}
                <span className="text-light-red">Research to Testing</span>
              </h2>
              <p className="text-[12px] font-normal  leading-[17px] text-[#6F6F6F] md:max-w-[50%] md:text-[14px] md:leading-[20px] xl:max-w-[46.4%] xl:text-[16px] xl:leading-[24px]">
                The design process involves understanding the problem and
                audience through research, creating personas, and mapping the
                user journey. Wireframes and design systems are developed to
                define structure and consistency, while visual concepts
                establish style. Testing then refines the design to ensure it
                meets user needs and functions smoothly.
              </p>
            </div>
          </div>
        </Animated>
        <Animated>
          <div className="mb-[48.5px] hidden w-full rounded-[32px] border border-[#E8E8E8] p-[50px_32px_49.5px_32px] md:block xl:mb-[64px] xl:rounded-[48px]  xl:p-[68px_109px_70px_108px]">
            <RespSVG
              src="/img/aiCase/frame-16.svg"
              className="w-full"
              md="/img/aiCase/frame-16.svg"
              xl="/img/aiCase/frame-16-xl.svg"
            />
          </div>
        </Animated>
        <Animated>
          <div className="mb-[96px] hidden w-full md:block xl:mb-[132px]">
            <RespSVG
              src="/img/aiCase/framee-18-xl.png"
              className="w-full"
              md="/img/aiCase/framee-18-md.svg"
              xl="/img/aiCase/framee-18-xl.png"
            />
          </div>
        </Animated>
        <Animated>
          <div className="mb-8 md:mb-[49px] xl:mb-[64px]">
            <div className="mb-4 xl:mb-[29px]">
              <RespSVG
                src="/img/aiCase/frame-19.svg"
                className=""
                md="/img/aiCase/frame-19-md.svg"
                xl="/img/aiCase/frame-19-xl.svg"
              />
            </div>
            <div className=" items-start justify-between gap-[50px] md:flex">
              <h2 className="mb-[20px] font-sf text-[32px] font-semibold leading-[32px] tracking-[-2px] md:mb-0 md:max-w-[45.8%] md:text-[36px] md:leading-[36px] md:tracking-[-3px] xl:max-w-[40.3%] xl:text-[48px] xl:leading-[48px] xl:tracking-[-4px]">
                Visual <span className="text-light-red">Identity</span>
              </h2>
              <p className="hidden text-[12px] font-normal leading-[17px] text-[#6F6F6F] md:mt-[-4px]  md:block md:max-w-[50.5%] md:text-[14px] md:leading-[20px] xl:mt-0 xl:max-w-[46%] xl:text-[16px] xl:leading-[24px]">
                A visual identity is the cohesive and strategic use of visual
                elements that define and communicate a brand’s personality,
                values, and purpose. It includes the logo as the central symbol,
                complemented by a consistent color palette, carefully chosen
                typography, and imagery that reflects the brand’s character.
              </p>
              <p className="mx-[-4px] text-[12px] font-normal leading-[17px]  text-[#6F6F6F] md:hidden md:max-w-[50.5%] md:text-[14px] md:leading-[20px] xl:max-w-[46%] xl:text-[16px] xl:leading-[24px]">
                This animation highlights the AI&#39;s engagement, with
                real-time visual feedback. As the AI speaks, the pulsing motion
                of the sphere conveys intelligence and responsiveness, turning
                the conversation into a more interactive and visually engaging
                experience.
              </p>
            </div>
          </div>
        </Animated>
        <Animated>
          <div className="mb-3 w-full sm:hidden">
            <RespSVG
              src="/img/aiCase/frame-23.svg"
              className="w-full"
              md="/img/aiCase/frame-23.svg"
              xl="/img/aiCase/frame-23.svg"
            />
          </div>
        </Animated>
        <Animated>
          <div className="mb-3 hidden w-full sm:block md:mb-[96px] xl:mb-[132px]">
            <RespSVG
              src="/img/aiCase/framee-20-xl.svg"
              className="w-full"
              md="/img/aiCase/framee-20-md.svg"
              xl="/img/aiCase/framee-20-xl.svg"
            />
          </div>
        </Animated>
        <Animated>
          <div className="mb-3 w-full sm:hidden ">
            <RespImage
              src={Frame21}
              className="hidden w-full md:block"
              md={Frame20md}
              xl={Frame20xl}
            />
            <RespSVG
              src="/img/aiCase/framee-21.svg"
              className="w-full md:hidden"
              md="/img/aiCase/framee-21.svg"
              xl="/img/aiCase/framee-21.svg"
            />
          </div>
        </Animated>

        <Animated>
          <div className="mb-3  w-full sm:hidden">
            <RespSVG
              src="/img/aiCase/framee-22.svg"
              className="w-full"
              md="/img/aiCase/framee-22.svg"
              xl="/img/aiCase/framee-22.svg"
            />
          </div>
        </Animated>
        <Animated>
          <div
            className="mb-[59px] h-[491px] xs:h-[515px] sm:h-[500px] md:mb-[72px] md:h-[491px] xl:mb-[88px] xl:h-[671px]">
            <video
              autoPlay
              loop
              muted
              preload
              playsInline
              controls={false}
              src="/video/ai/lastdesk.mp4"
              className="h-full w-full md:block hidden rounded-[35px] object-cover [object-position:35%] md:rounded-[32px] md:object-top xl:rounded-[48px]"
            ></video>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload
              controls={false}
              src="/video/ai/last.mp4"
              className="h-full w-full md:hidden rounded-[35px] object-cover [object-position:35%] md:rounded-[32px] md:object-top xl:rounded-[48px]"
            ></video>
          </div>
        </Animated>
      </Layout>
    </>
  );
}
