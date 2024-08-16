import Link from 'next/link';
import dynamic from 'next/dynamic';
import Animated from '../../Animated';
import Button2 from '../../Button';
import Image from '../../Image';
import IntroSection2 from '../../IntroSection2';
import Layout from '../../Layout';
import { SkipRenderOnClient } from '../../SkipRender';
import casesData from '../Cases/data';
import Awards from './Awards';
import { CaseSlide, CasesSlider2 } from '../../CasesSlider/CasesSlider';
import LogoCarousel from './LogoCarousel';
import NextStep from './NextStep';
import OurExperience from './OurExperience';
import Reviews from './Reviews2';
import Services from './Services';
import TrialBanner from './TrialBanner';
import TypedWords from './TypedWords';
import CardBg from './assets/card-bg.png';
import HomeIntroSection from '../../HomeIntroSection';
import { iconsSectionItems } from '../../../data/home-icons-section-data';
// import AwardsRibbon from '../../AwardsRibbon';

const AwardsRibbon = dynamic(() => import('../../AwardsRibbon'), { ssr: false });
const IconsSection = dynamic(() => import('../../IconsSection'));

function IntroSection5() {
  return (
    <HomeIntroSection
      animate
      className="!pt-[232px] md:!pt-[384px] xl:!pt-[401px]"
      showBg={false}
      title={
        <>
          Your strategic partner in&nbsp;design of&nbsp;successful
          digital&nbsp;products
        </>
      }
      subtitle={
        <>
          We help startups, scale-ups and unicorns to improve product metrics
          through design:
          <br />
          <TypedWords
            words={[
              'Increase conversion rate',
              'Speed up task completion time',
              'Reduce number of errors',
              'Boost sales and revenue',
            ]}
            interval={2200}
          />
        </>
      }
    />
  );
}

export default function Home2() {
  return (
    <div className="relative overflow-hidden">
			<AwardsRibbon />
      <div id="intro-section">
        <IntroSection5 />
        {/* <IntroSection2 /> */}
      </div>
      <div id="logo-carousel" className="relative z-[1] mb-[120px]">
        <Animated delay={300}>
          <LogoCarousel />
        </Animated>
      </div>
      <div id="cases-slider" className="relative z-[1]">
        <SkipRenderOnClient
          shouldRenderOnClient={() => window.innerWidth < 820}
        >
          <Layout className="mb-[100px] grid gap-8 md:hidden">
            {casesData
              .filter((d) => {
                return ['/beast', '/cryptogenie', '/jucr'].includes(d.href);
              })
              .sort((a, b) => {
                const keys = ['/beast', '/cryptogenie', '/jucr'];
                const orderMap = new Map(
                  keys.map((key, index) => [key, index])
                );
                return (
                  (orderMap.get(a.href) || 0) - (orderMap.get(b.href) || 0)
                );
              })
              .map((item, index) => (
                <Link href={item.href} key={index}>
                  <CaseSlide item={item} />
                </Link>
              ))}
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl px-6 py-[100px]">
              <Image
                src={CardBg}
                alt=""
                className="absolute inset-0 h-full w-full"
              />
              <div className="relative mb-10 text-center font-satoshi text-[40px] font-medium leading-[120%] tracking-[-1px]">
                We have lots of amazing projects for you
              </div>
              <Button2
                as={Link}
                href="/work"
                className="relative !bg-black !text-white"
              >
                Show more cases
              </Button2>
            </div>
          </Layout>
        </SkipRenderOnClient>
        <SkipRenderOnClient
          shouldRenderOnClient={() => window.innerWidth >= 820}
        >
          <div className="hidden md:block">
            <CasesSlider2 />
          </div>
        </SkipRenderOnClient>
      </div>
			<div className="pb-[100px] font-satoshi md:pb-5">
				<IconsSection 
					items={iconsSectionItems} 
					blockClasses='xl:items-start'
					iconClasses='4xl:mr-6 mr-8 md:mr-4 min-w-[72px]'
					titleClasses='4xl:text-[22px] 4xl:leading-[120%] mb-2 md:max-w-[208px] xl:max-w-[208px] text-body-heading-m'
					sectionClasses='flex flex-col gap-10 md:mx-auto md:grid md:max-w-[668px] md:grid-cols-2 md:flex-wrap md:items-start md:justify-between md:gap-x-20 md:gap-y-[92px] xl:max-w-full xl:grid-cols-4'
				/>
			</div>
      <NextStep />
      <Awards />
      <OurExperience />
      <Layout className="mb-[100px] font-inter md:mb-[144px] xl:mb-[176px]">
        <TrialBanner />
      </Layout>
      <Services />
      <Reviews />
    </div>
  );
}
