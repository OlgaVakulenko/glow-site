import Image from '../../../Image';
import Layout from '../../../Layout';
import PageHeading from '../../../PageHeading';
import PageSubheading from '../../../PageSubheading';
// import Office from './assets/office.png';
import Office from './assets/main-cover.jpg';
import cx from 'clsx';
import InlineVideo from '../InlineVideo';
import { useMediaAtom } from '../../../../lib/agent';
import Challenge1 from './assets/challenge-f.png';
import Challenge2 from './assets/challenge-s.png';
import Challenge3 from './assets/challenge-t.png';
// import WorkCarousel from './WorkCarousel';
import { useMemo } from 'react';
import UserFlowResearchImg from './assets/userflow-research.png';
import CustomerJourneyMapImg from './assets/customer-journey-map.png';
import UsabilityTestingImg from './assets/usability-testing.png';
import SectionColors from './Colors';
import DesignSystemImg from './assets/design-system.png';
import Graphic1 from './assets/graphic1.png';
import Graphic2 from './assets/graphic2.png';
import Graphic3 from './assets/graphic3.png';
import MobileVersionImg from './assets/mobver-desktop.png';
import ReviewImg from './assets/review.png';
import NextStudy2 from '../NextStudy2';
import Animated from '../../../Animated';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { getFullDescription, getFullTitle } from '../../../HeadTitle';

const WorkCarousel = dynamic(() => import('./WorkCarousel'));

export default function LiquidSpace() {
  return (
    <div>
      <Head>
        <title>
          {getFullTitle(
            'Case LiquidSpace: Innovative Workspace Rental Service'
          )}
        </title>
        <meta
          name="description"
          content={getFullDescription(
            'Explore LiquidSpace by Glow Team, the user-friendly office rental service revolutionizing the hybrid workplace.'
          )}
        />
      </Head>
      <Layout className="pb-10">
        <div className="pt-[144px] md:pt-[194px]">
          <PageSubheading className={'xl:!mr-[79px] xl:max-w-[566px]'}>
            It’s people untethered, workplace without boundaries, productivity
            and collaboration unimpeded by space and convention. It&apos;s more
            than the rise of the hybrid workplace. It&apos;s&nbsp;the dawn of a
            new era.
          </PageSubheading>
        </div>
        <div className="mt-[188px] md:mt-[115px] xl:mt-[185px]">
          <PageHeading>
            LiquidSpace
            <br /> - workspace <br className="xl:hidden" />
            rental service
          </PageHeading>
        </div>
      </Layout>
      <Animated>
        <Image src={Office} alt="" className="w-full" loading="eager" />
      </Animated>
      <SectionBalance />
      <SectionChallenge />
      <WorkCarousel />
      <div className="rounded-2xl bg-[#EFF4F5] md:rounded-3xl xl:rounded-[32px]">
        <UserFlowResearch />
        <CustomerJourneyMap />
        <UsabilityTesting />
      </div>
      <SectionColors />
      <DesignSystem />
      <GraphicElements />
      <FeatureRefinement />
      <MobileVersion />
      <Results />
      <Review />
      <NextStudy2
        title="Fleet manager to control your equipment"
        href="/fleet"
      />
    </div>
  );
}

export function SectionLayout({
  title,
  badge,
  badgeClassname,
  description,
  childrenLayout = true,
  children,
  className,
  xlMarginBottomClass = 'xl:mb-24',
}) {
  const Wrapper = useMemo(() => {
    return childrenLayout ? Layout : 'div';
  }, [childrenLayout]);

  return (
    <section className={className}>
      <Layout
        className={cx(
          'flex flex-col md:mb-[80px] md:flex-row md:justify-between',
          xlMarginBottomClass
        )}
      >
        <Animated className="relative mb-[24px] self-start font-glow text-[32px] font-medium leading-[32px] md:mb-0 md:text-[60px] md:leading-[57px] xl:text-[64px] xl:leading-[64px]">
          {title}
          {badge && (
            <div
              className={cx(
                'absolute -right-[30px] -top-[15px] rounded-full bg-brand px-[6px] font-sans text-xs text-black',
                badgeClassname
              )}
            >
              <span>{badge}</span>
            </div>
          )}
        </Animated>
        <Animated
          delay={100}
          className="mb-8 text-base leading-[22px] md:mb-0 md:max-w-[328px] md:text-2xl md:italic xl:max-w-[528px]"
        >
          {description}
        </Animated>
      </Layout>
      <Wrapper>
        <Animated delay={150}>{children}</Animated>
      </Wrapper>
    </section>
  );
}

function CaseImage({ className, imgClassName, ...props }) {
  return (
    <div
      className={cx(
        'overflow-hidden rounded-2xl md:rounded-3xl xl:rounded-[32px]',
        className
      )}
    >
      <Image {...props} className={cx(imgClassName, 'w-full')} />
    </div>
  );
}

function SectionHeading({ className, children }) {
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

function List({ data }) {
  return (
    <div className="flex md:mb-[60px] xl:mb-20 xl:w-11/12">
      {data.map((column, i) => (
        <Animated
          key={i}
          delay={i * 100}
          className="mr-6 last:mr-0"
          style={{ width: 100 / data.length + '%' }}
        >
          <div className="mb-4 text-xs font-medium uppercase leading-[13px] opacity-50 md:mb-12 md:text-[20px] md:normal-case md:leading-[30px] md:opacity-30">
            {column.title}
          </div>
          <div className="md:leading-[27px]3 text-sm leading-[26px] md:text-[20px]">
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

function SectionBalance() {
  return (
    <Layout className="pb-16 pt-16 md:pb-[100px] md:pt-[100px] xl:pb-[150px]">
      <SectionHeading className="mb-6 md:mb-[60px] xl:mb-16">
        We balance business <br className="hidden xl:block" /> objectives with
        customer needs
      </SectionHeading>
      <List
        data={[
          {
            title: 'User Experience',
            values: ['UX Audit', 'Research', 'Wireframe', 'Prototype'],
          },
          {
            title: (
              <>
                Visual
                <br className="md:hidden" /> Design
              </>
            ),
            values: ['Art Direction', 'Visual Identity', 'Motion Design'],
          },
          {
            title: (
              <>
                Digital
                <br className="md:hidden" /> Branding
              </>
            ),
            values: [
              'Product Identity System',
              'Naming',
              'Logo',
              'Motion Design',
            ],
          },
        ]}
      />
      <CaseVideo src="/video/liquidspace/1_3d.mp4" className="mt-8" />
    </Layout>
  );
}

function CaseVideo({ src, className }) {
  const media = useMediaAtom();
  const autoplay = media === 'mobile' ? false : true;
  const controls = media === 'mobile' ? true : false;

  return (
    <Animated
      className={cx(
        'overflow-hidden rounded-2xl md:rounded-3xl xl:rounded-[32px]',
        className
      )}
    >
      <InlineVideo autoplay={autoplay} controls={controls} src={src} />
    </Animated>
  );
}

function SectionChallenge() {
  const media = useMediaAtom();

  return (
    <div className="mb-16 md:mb-[108px] xl:mb-[150px]">
      <SectionLayout
        title="Challenge"
        description="Our team’s goal was to create an user-friendly office rental service which would help everyone to find and book a workspace in a couple of clicks."
      >
        <Animated className="md:hidden">
          <CaseImage src={Challenge3} />
        </Animated>
        <Animated className="hidden md:flex">
          <CaseImage
            src={Challenge1}
            imgClassName="h-full object-cover"
            className="mr-6 w-1/2"
          />
          <div className="flex w-1/2 flex-col">
            <CaseImage src={Challenge2} className="mb-6" />
            <CaseImage src={Challenge3} />
          </div>
        </Animated>
      </SectionLayout>
    </div>
  );
}

function UserFlowResearch() {
  return (
    <div className="py-16 md:py-[100px] xl:pb-[150px] xl:pt-[120px]">
      <SectionLayout
        badge="UX"
        title={
          <>
            User Flow
            <br /> Research
          </>
        }
        description="In order to look at the interactions from user’s point of view we used User Flo, this resulted in a logical and convenient product."
      >
        <CaseImage src={UserFlowResearchImg} />
        {/* <div className="overflow-hidden rounded-2xl">
          <Image src={UserFlowResearchImg} alt="" />
        </div> */}
      </SectionLayout>
    </div>
  );
}

function CustomerJourneyMap() {
  return (
    <div className="pb-16 pt-8 xl:pb-[150px]">
      <SectionLayout
        badgeClassname="!right-5"
        badge="UX"
        title={
          <>
            Customer <br />
            Journey Map
          </>
        }
        description="We place a great deal of importance on the marketing strategy built via CJM. This allowed seeing the product from a bird’s-eye view and identifying its problems."
      >
        <CaseImage src={CustomerJourneyMapImg} />
        {/* <div className="overflow-hidden rounded-2xl">
          <Image src={CustomerJourneyMapImg} alt="" />
        </div> */}
      </SectionLayout>
    </div>
  );
}

function UsabilityTesting() {
  return (
    <div className="pb-16 pt-8">
      <SectionLayout
        badge="UX"
        title={
          <>
            Usability Testing
            <br />
            by Maze
          </>
        }
        description="To confirm the hypotheses and test the convenience of the service, we used quantitative research, among which was usability testing."
      >
        <CaseImage src={UsabilityTestingImg} />
        {/* <div className="overflow-hidden rounded-2xl">
          <Image src={UsabilityTestingImg} alt="" />
        </div> */}
      </SectionLayout>
    </div>
  );
}

function DesignSystem() {
  return (
    <SectionLayout
      className="pb-16 md:pb-[100px] xl:pb-[150px]"
      title={
        <>
          Design
          <br /> System
        </>
      }
      description="In order to speed up the process and reduce the cost of development of new versions of the product, we have created a design system, thanks to which the interfaces are designed logically and decorated in the same style."
      xlMarginBottomClass="xl:mb-16"
    >
      <CaseImage src={DesignSystemImg} />
      {/* <div className="overflow-hidden rounded-2xl">
        <Image src={DesignSystemImg} alt="" />
      </div> */}
    </SectionLayout>
  );
}

function GraphicElements() {
  return (
    <SectionLayout
      className="pb-16 md:pb-[100px] xl:pb-[150px]"
      title={
        <>
          Graphic
          <br /> Elements
        </>
      }
      description="In order to increase the user’s interest and diversify the content, we have created a number of illustrations that are used everywhere: from personal page to emails."
      xlMarginBottomClass="xl:mb-12"
    >
      <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6 xl:gap-8">
        <CaseImage
          src={Graphic1}
          className="mb-4 md:col-span-1 md:row-span-2 md:mb-0"
          imgClassName="h-full object-cover"
        />
        <CaseImage
          src={Graphic2}
          className="mb-4 md:col-span-1 md:row-span-1 md:mb-0"
          imgClassName="h-full object-cover"
        />
        <CaseImage
          src={Graphic3}
          className="md:col-span-1 md:row-span-1"
          imgClassName="h-full object-cover"
        />
      </div>
    </SectionLayout>
  );
}

function FeatureRefinement() {
  return (
    <SectionLayout
      className="pb-16 md:pb-[100px] xl:pb-[150px]"
      title={
        <>
          Feature
          <br /> refinement
        </>
      }
      description="Our team worked on improving the usability of existing features and making the user experience as convenient as possible."
      xlMarginBottomClass="xl:mb-20"
    >
      <CaseVideo src="/video/liquidspace/2_3d.mp4" className="mt-8" />
    </SectionLayout>
  );
}

function MobileVersion() {
  return (
    <SectionLayout
      className="pb-16 md:pb-[100px] xl:pb-[150px]"
      title={
        <>
          Mobile
          <br />
          Version
        </>
      }
      description="Our team worked on improving the usability of existing features and making the user experience as convenient as possible."
      xlMarginBottomClass="xl:mb-[120px]"
    >
      <CaseImage src={MobileVersionImg} />
    </SectionLayout>
  );
}

function Results() {
  return (
    <SectionLayout
      title="Results"
      description="We are committed to the efficiency of the developed product and are always invested in it going into the world and changing it for the better. Needless to say, we are always professional and positive in our communications and feedback gathering."
      xlMarginBottomClass="xl:mb-12"
    />
  );
}

function Review() {
  return (
    <Animated>
      <Layout className="mt-2 pb-16">
        <div className="border-t border-black pt-10 md:flex md:pt-12">
          <div className="mb-10">
            <div className="mb-6 w-[112px] overflow-hidden rounded-[10px] md:mb-8 md:mr-[90px] md:w-[198px] xl:w-[288px]">
              <Image src={ReviewImg} alt="" />
            </div>
            <div className="mb-2 text-xl font-medium leading-[30px]">
              Eric Zellhart
            </div>
            <div className="text-base leading-[22px]">
              VP of Product at LiquidSpace
            </div>
          </div>
          <div className="md:pt-[60px] xl:flex">
            <div>
              <div className="mb-6 text-xl font-medium leading-[30px] md:mb-10">
                Review
              </div>
              <div className="font-glow text-[22px] font-medium leading-[36px] xl:max-w-[40vw]">
                Glow Design is very receptive to feedback and process
                improvements so the client has been able to work effectively and
                effectively. They are also great communicators and provide good
                suggestions for improvement.
              </div>
            </div>
            <div className="hidden xl:ml-8 xl:block">
              <svg
                width="321"
                height="208"
                viewBox="0 0 321 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1045_25762)">
                  <path
                    d="M-1.58025 208C-1.58025 208.873 -0.872746 209.58 0 209.58C0.872746 209.58 1.58025 208.873 1.58025 208C1.58025 207.127 0.872746 206.42 0 206.42C-0.872746 206.42 -1.58025 207.127 -1.58025 208ZM225.37 94.5771L225.645 94.6883L225.37 94.5771ZM53.5185 8.669L53.6474 8.93579L53.5185 8.669ZM116.333 121.304L116.428 121.023L116.333 121.304ZM0.0342225 208.294C38.2775 203.847 87.5379 193.049 130.802 174.573C174.052 156.102 211.377 129.928 225.645 94.6883L225.096 94.4659C210.919 129.48 173.782 155.573 130.569 174.028C87.3695 192.477 38.167 203.264 -0.0342225 207.706L0.0342225 208.294ZM225.645 94.6883C234.57 72.6441 231.253 54.7426 220.472 40.6792C209.708 26.6371 191.529 16.4535 170.785 9.75199C150.035 3.04855 126.682 -0.182232 105.528 -0.293327C84.3812 -0.404379 65.3933 2.60165 53.3896 8.40222L53.6474 8.93579C65.532 3.19278 84.4141 0.188395 105.524 0.299258C126.627 0.410077 149.918 3.63355 170.603 10.3159C191.294 17.0002 209.342 27.1338 220.002 41.0397C230.645 54.9243 233.948 72.6016 225.096 94.4659L225.645 94.6883ZM53.3896 8.40222C35.4322 17.0798 29.2026 38.0319 38.4297 60.446C47.6568 82.8601 72.3319 106.771 116.239 121.585L116.428 121.023C72.6311 106.247 48.121 82.4308 38.9777 60.2204C29.8344 38.01 36.0493 17.4398 53.6474 8.93579L53.3896 8.40222ZM116.239 121.585C186.483 145.285 265.723 131.461 296.572 121.586L296.391 121.022C265.61 130.875 186.509 144.668 116.428 121.023L116.239 121.585Z"
                    fill="black"
                  />
                  <circle cx="312.778" cy="114.037" r="8" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_1045_25762">
                    <rect width="320.778" height="208" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </Layout>
    </Animated>
  );
}
