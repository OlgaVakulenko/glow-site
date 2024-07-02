import Link from 'next/link';
import { useState } from 'react';
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

const items2 = [
  {
    title: 'Top-notch design & timely delivery',
    description: 'For full-time engagements',
    icon: ({ isReady }) => {
      return (
        <svg
          width="72"
          height="69"
          viewBox="0 0 72 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="63" cy="9.69997" r="8.99996" fill="#19191B" />
          <circle
            cx="31.3182"
            cy="41.1999"
            r="26.5499"
            stroke="#DADADA"
            strokeWidth="0.9"
          />
          <path
            d="M35.8481 34.6213C41.9627 38.8303 46.9503 43.4058 50.0741 47.3891C51.6378 49.383 52.718 51.2078 53.2483 52.748C53.7822 54.2985 53.7302 55.4679 53.1887 56.2547C52.6471 57.0414 51.5733 57.5074 49.9344 57.5623C48.3064 57.6167 46.2162 57.2592 43.7954 56.5104C38.9594 55.0145 32.9049 51.9891 26.7902 47.7801C20.6756 43.571 15.6881 38.9956 12.5642 35.0122C11.0006 33.0183 9.92037 31.1935 9.39006 29.6534C8.85619 28.1029 8.90811 26.9335 9.44969 26.1467C9.99128 25.3599 11.0651 24.8939 12.704 24.8391C14.332 24.7846 16.4222 25.1422 18.8429 25.891C23.679 27.3869 29.7335 30.4123 35.8481 34.6213Z"
            stroke="#DADADA"
            strokeWidth="0.9"
          />
          <path
            d="M56.9646 34.3299C57.6321 36.821 57.6404 39.4678 56.9829 42.1224C56.3252 44.7781 55.013 47.3923 53.1127 49.8133C51.2122 52.2344 48.763 54.4118 45.9017 56.2178C43.0404 58.0236 39.8266 59.4204 36.444 60.3268C33.0614 61.2331 29.5797 61.6304 26.1989 61.4971C22.8179 61.3638 19.6081 60.7027 16.7517 59.5562C13.8955 58.4097 11.452 56.8018 9.55457 54.8308C7.6578 52.8606 6.34164 50.5642 5.67417 48.0731"
            stroke="#DADADA"
            strokeWidth="0.9"
          />
          <path
            d="M31.2117 14.65C33.3599 14.65 35.4989 15.3451 37.5036 16.7137C39.5105 18.0838 41.3414 20.1013 42.8786 22.6601C44.4154 25.2183 45.6219 28.2571 46.4213 31.5978C47.2205 34.9381 47.5949 38.5062 47.5209 42.0887C47.4468 45.6713 46.9259 49.1905 45.991 52.4359C45.056 55.6819 43.7278 58.5816 42.0914 60.9657C40.4548 63.3502 38.5492 65.1622 36.4966 66.3108C34.4469 67.4578 32.2886 67.9226 30.1447 67.6926"
            stroke="#DADADA"
            strokeWidth="0.9"
          />
        </svg>
      );
    },
  },
  {
    title: 'Long-term partnership',
    description: 'That recruiting in-house',
    icon: ({ isReady }) => {
      return (
        <svg
          width="69"
          height="69"
          viewBox="0 0 69 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="34.5469"
            cy="34.4501"
            rx="9.00001"
            ry="9.00001"
            fill="#19191B"
          />
          <path
            d="M67.8547 9.70002C67.8547 14.4221 64.0267 18.25 59.3047 18.25C54.5827 18.25 50.7547 14.4221 50.7547 9.70002C50.7547 4.97798 54.5827 1.15001 59.3047 1.15001C64.0267 1.15001 67.8547 4.97798 67.8547 9.70002Z"
            stroke="#DADADA"
            strokeWidth="0.9"
          />
          <path
            d="M18.3508 34.4501C18.3508 39.1721 14.5228 43.0001 9.80079 43.0001C5.07875 43.0001 1.25078 39.1721 1.25078 34.4501C1.25078 29.728 5.07875 25.9001 9.80079 25.9001C14.5228 25.9001 18.3508 29.728 18.3508 34.4501Z"
            stroke="#DADADA"
            strokeWidth="0.9"
          />
          <path
            d="M18.3508 59.2C18.3508 63.922 14.5228 67.75 9.80079 67.75C5.07875 67.75 1.25078 63.922 1.25078 59.2C1.25078 54.4779 5.07875 50.65 9.80079 50.65C14.5228 50.65 18.3508 54.4779 18.3508 59.2Z"
            stroke="#DADADA"
            strokeWidth="0.9"
          />
          <path
            d="M22.1758 59.7626H34.5508M59.3008 22.0751V54.3626C59.3008 57.345 56.8832 59.7626 53.9008 59.7626H34.5508M34.5508 47.3876V59.7626"
            stroke="#19191B"
            strokeWidth="0.9"
          />
        </svg>
      );
    },
  },
  {
    title: (
      <div>
        Quick onboarding
        <br /> faster than new hires
      </div>
    ),
    description: 'Quality and timely delivery',
    icon: ({ isReady }) => {
      return (
        <svg
          width="66"
          height="69"
          viewBox="0 0 66 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6819 16.3702C16.3076 16.3702 13.9565 16.8378 11.7629 17.7465C9.56925 18.6551 7.57609 19.9869 5.89717 21.6658C4.21826 23.3447 2.88647 25.3379 1.97785 27.5315C1.06922 29.7251 0.601562 32.0762 0.601562 34.4505C0.601562 36.8249 1.06922 39.176 1.97785 41.3696C2.88647 43.5632 4.21826 45.5564 5.89718 47.2353C7.57609 48.9142 9.56925 50.246 11.7629 51.1546C13.9565 52.0632 16.3076 52.5309 18.6819 52.5309L18.6819 34.4505L18.6819 16.3702Z"
            fill="#19191B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M57.8613 17.2691C55.6052 17.2691 53.3711 17.7135 51.2867 18.5769C49.2023 19.4403 47.3083 20.7058 45.713 22.3011C44.1176 23.8965 42.8521 25.7904 41.9888 27.8749C41.1254 29.9593 40.681 32.1933 40.681 34.4495C40.681 36.7057 41.1254 38.9397 41.9887 41.0241C42.8521 43.1086 44.1176 45.0025 45.713 46.5978C47.3083 48.1932 49.2023 49.4587 51.2867 50.3221C53.3711 51.1855 55.6052 51.6299 57.8613 51.6299L57.8613 52.5299C55.487 52.5299 53.1359 52.0622 50.9423 51.1536C48.7487 50.2449 46.7555 48.9132 45.0766 47.2342C43.3977 45.5553 42.0659 43.5622 41.1573 41.3685C40.2486 39.1749 39.781 36.8238 39.781 34.4495C39.781 32.0752 40.2486 29.7241 41.1573 27.5304C42.0659 25.3368 43.3977 23.3437 45.0766 21.6648C46.7555 19.9858 48.7487 18.654 50.9423 17.7454C53.1359 16.8368 55.487 16.3691 57.8613 16.3691L57.8613 17.2691Z"
            fill="#DADADA"
          />
          <path
            d="M21.4452 17.0362C25.5914 17.6929 29.3672 19.8074 32.0935 22.9995C34.8197 26.1916 36.3176 30.2517 36.3176 34.4495C36.3176 38.6473 34.8197 42.7074 32.0934 45.8995C29.3672 49.0916 25.5914 51.2061 21.4452 51.8628"
            stroke="#DADADA"
            strokeWidth="0.9"
          />
          <path
            d="M18.6816 68.2L18.6816 0.700029"
            stroke="#19191B"
            strokeWidth="0.9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M65.6855 34.9H40.373V34L65.6855 34V34.9Z"
            fill="#DADADA"
          />
          <circle
            cx="33.1476"
            cy="63.3786"
            r="4.37143"
            transform="rotate(-90 33.1476 63.3786)"
            stroke="#DADADA"
            strokeWidth="0.9"
          />
          <circle
            cx="33.1476"
            cy="5.52196"
            r="4.37143"
            transform="rotate(-90 33.1476 5.52196)"
            stroke="#DADADA"
            strokeWidth="0.9"
          />
        </svg>
      );
    },
  },
  {
    title: (
      <div>
        3-Day Free Trial
        <br /> and fixed monthly rate
      </div>
    ),
    description: 'and fixed monthly rate',
    icon: ({ isReady }) => {
      return (
        <svg
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="32.9996"
            cy="32.9999"
            r="31.95"
            stroke="#DADADA"
            strokeWidth="0.9"
          />
          <circle
            cx="32.9977"
            cy="32.9994"
            r="16.6336"
            stroke="#19191B"
            strokeWidth="0.9"
          />
          <path
            d="M41.7461 24.2531L24.251 41.7482"
            stroke="#19191B"
            strokeWidth="0.9"
          />
          <circle cx="33.0027" cy="32.9991" r="7.06909" fill="#19191B" />
          <circle
            cx="32.9977"
            cy="32.9988"
            r="24.2918"
            stroke="#DADADA"
            strokeWidth="0.9"
          />
        </svg>
      );
    },
  },
];

function IconsSection() {
  const [map, setMap] = useState({});

  return (
    <div className="pb-[100px] font-satoshi md:pb-5">
      <Layout>
        <div className="flex flex-col gap-10 md:mx-auto md:grid md:max-w-[668px] md:grid-cols-2 md:flex-wrap md:items-start md:justify-between md:gap-x-20 md:gap-y-[92px] xl:max-w-full xl:grid-cols-4">
          {/* <div className="grid gap-10 md:grid-cols-3 xl:flex xl:justify-between xl:gap-0"> */}
          {items2.map((item, index) => (
            <Animated
              key={index}
              className="flex items-center xl:items-start"
              delay={300 * index}
              onViewChange={(isVisible) => {
                setMap((c) => ({
                  ...c,
                  [index]: isVisible,
                }));
              }}
            >
              <div className="4xl:mr-6 mr-8 min-w-[72px] md:mr-4">
                <item.icon isReady={map[index]}></item.icon>
              </div>
              <div>
                <div className="4xl:text-[22px] 4xl:leading-[120%] mb-2 text-body-heading-m md:max-w-[208px] xl:max-w-[208px]">
                  {item.title}
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </Layout>
    </div>
  );
}

export default function Home2() {
  return (
    <div className="relative overflow-hidden">
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
      <IconsSection />
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
