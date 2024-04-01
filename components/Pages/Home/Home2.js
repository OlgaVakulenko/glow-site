import cx from 'clsx';
import { useEffect, useState } from 'react';
import Animated from '../../Animated';
import IntroSection from '../../IntroSection';
import IntroSection2 from '../../IntroSection2';
import Layout from '../../Layout';
import { PageHeading2 } from '../../PageHeading';
import { Subheading2 } from '../../Typography/Subheading';
import { CasesSlider2, CasesSlider3 } from './CasesSlider';
import LogoCarousel from './LogoCarousel';
import NextStep from './NextStep';
import OurExperience from './OurExperience';
import Reviews from './Reviews2';
import { RollingWords } from './RollingWords';
import Services from './Services';
import Solutions from './Solutions';
import TrialBanner from './TrialBanner';
// import ThreeBG from './ThreeBG';
import dynamic from 'next/dynamic';
import { useMediaAtom, useMediaAtomClient } from '../../../lib/agent';
import CaseCard from './CaseCard';
import cases from '../Cases/data';
import Button2 from '../../Button';
import Link from 'next/link';
import { SkipRenderOnClient } from '../../SkipRender';
import Awards from './Awards';

function IntroSection3() {
  return (
    <Layout className="pt-[144px] md:flex md:items-end md:justify-between md:space-x-10 md:pt-[456px] xl:pt-[470px]">
      <div className="mb-6 font-glow text-heading-2-h4 md:mb-0 md:w-[65%] md:text-heading-h2-hero xl:max-w-[642px]">
        Your Strategic Partner in Design of Successful Digital Products
      </div>
      <div className="leading-8 md:w-[35%] md:pb-2 xl:max-w-[389px]">
        <span className="text-body-m2-2">
          We help startups and scale-ups
          <br className="md:hidden xl:block" /> unicorns to{' '}
          <br className="hidden xl:block" />
        </span>

        <span className="text-body-heading-m text-brand">
          [increase sales by 50%]
        </span>
      </div>
    </Layout>
  );
}

function IntroSection5() {
  return (
    <IntroSection2
      className="!pt-[448px]"
      showBg={false}
      title={
        <>
          Your lead to digital
          <br /> product success
        </>
      }
      subtitle={
        <>
          We help startups, scale-ups and unicorns to improve product metrics
          through design:
          <br />
          <RollingWords
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

  return (
    <div ref={triggerRef}>
      <Layout className="flex flex-col ">
        <div className="relative md:grid md:grid-flow-row md:grid-cols-8 md:gap-8 xl:grid-cols-12 4xl:gap-12">
          <div className="md:col-span-4 lg:col-span-5 xl:col-span-7"></div>
          <Subheading2 className="pointer-events-none relative mb-8 pt-48 md:col-span-4 md:mb-[87px] md:ml-0 md:mr-8 md:pt-[240px] lg:col-span-3 xl:col-span-5 xl:pt-[272px] 4xl:mb-[158px]">
            <div
              ref={ref}
              className="absolute left-8 top-24 w-[134px] md:top-[184px] xl:top-[216px] xl:w-[188px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="178"
                height="189"
                viewBox="0 0 178 189"
                fill="none"
                className="w-full"
              >
                <path
                  opacity="0.1"
                  d="M96.398 189L76.67 122.668L21.5214 164.466L-2.38311e-06 134.481L55.597 94.5L-5.87834e-06 54.5192L21.5214 24.0793L76.67 65.8774L96.398 1.10451e-05L131.37 11.3582L109.4 76.7813L178 75.8726L178 113.127L109.849 112.219L131.37 177.642L96.398 189Z"
                  fill="url(#paint0_linear_5430_3065)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5430_3065"
                    x1="-4.13073e-06"
                    y1="94.5"
                    x2="178"
                    y2="94.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#19191B" />
                    <stop offset="1" stopColor="#19191B" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            Your trusted design team for
            <br />
            <RollingWords
              words={['transportation', 'ai', 'fintech']}
              interval={2200}
            />{' '}
            <div className="inline-flex">challenges.</div>
          </Subheading2>
        </div>

        <PageHeading2 className="mb-8 md:mb-16">
          Simple design
          <br /> for&nbsp;complex products
        </PageHeading2>
      </Layout>
    </div>
  );
}

const items = [
  {
    title: 'Top-Notch Design quality and timely delivery',
    description: 'For full-time engagements',
    icon: ({ isReady }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="60"
          viewBox="0 0 64 60"
          fill="none"
          className="h-[60px] w-[64px]"
        >
          <circle
            cx="56"
            cy="7.99995"
            r="7.99995"
            fill={isReady ? '#19191B' : 'transparent'}
            stroke={isReady ? 'transparent' : '#DADADA'}
            className="transition-colors duration-[2.5s]"
          />
          <circle
            cx="27.8436"
            cy="35.9999"
            r="23.4999"
            stroke="#DADADA"
            className="transition-all duration-[2.5s]"
            style={{
              strokeDashoffset: 150,
              strokeDasharray: isReady ? 300 : 150,
            }}
          />
          <path
            d="M31.8109 30.2339C37.2401 33.9712 41.6652 38.0316 44.4342 41.5624C45.8206 43.3303 46.7735 44.9423 47.2398 46.2966C47.7101 47.6625 47.6539 48.6635 47.199 49.3244C46.744 49.9854 45.829 50.3952 44.3853 50.4435C42.9537 50.4914 41.1077 50.1768 38.9614 49.5129C34.6747 48.187 29.3021 45.5031 23.8728 41.7658C18.4436 38.0286 14.0184 33.9681 11.2495 30.4373C9.86311 28.6694 8.9102 27.0574 8.44387 25.7031C7.97358 24.3372 8.02973 23.3362 8.4847 22.6753C8.93967 22.0143 9.85466 21.6045 11.2984 21.5562C12.7299 21.5083 14.576 21.8229 16.7223 22.4868C21.0089 23.8127 26.3816 26.4966 31.8109 30.2339Z"
            stroke="#DADADA"
            className="transition-all duration-[2.5s]"
            style={{
              strokeDashoffset: 150,
              strokeDasharray: isReady ? 275 : 150,
            }}
          />
          <path
            d="M50.5429 29.9176C51.1316 32.1146 51.1394 34.4501 50.5587 36.7943C49.9778 39.1397 48.8184 41.4508 47.1369 43.5929C45.4554 45.7352 43.2871 47.6632 40.7524 49.263C38.2179 50.8626 35.3705 52.1002 32.3731 52.9034C29.3757 53.7065 26.291 54.0584 23.2962 53.9403C20.3013 53.8223 17.4595 53.2367 14.9321 52.2222C12.4048 51.2078 10.2451 49.786 8.5694 48.0454C6.89444 46.3055 5.7334 44.279 5.14471 42.082"
            stroke="#DADADA"
            className="transition-all duration-[2.5s]"
            style={{
              strokeDashoffset: 100,
              strokeDasharray: isReady ? 170 : 100,
            }}
          />
          <path
            d="M27.7489 12.5002C29.6361 12.5002 31.518 13.1107 33.2853 14.3172C35.0551 15.5254 36.6733 17.3071 38.0337 19.5718C39.3938 21.8358 40.4628 24.5272 41.1713 27.4882C41.8796 30.4487 42.2116 33.6118 42.146 36.7881C42.0803 39.9644 41.6184 43.0839 40.79 45.96C39.9613 48.8366 38.7849 51.404 37.3373 53.5131C35.8895 55.6226 34.2063 57.2216 32.3977 58.2336C30.5924 59.2439 28.6946 59.6518 26.8112 59.4497"
            stroke="#DADADA"
            className="transition-all duration-[2.5s]"
            style={{
              strokeDashoffset: 100,
              strokeDasharray: isReady ? 170 : 100,
            }}
          />
        </svg>
      );
    },
  },
  {
    title: 'Talented SaaS Design and long-term partnership',
    description: 'That recruiting in-house',
    icon: ({ isReady }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          className="h-[60px] w-[60px] duration-1000"
        >
          <circle
            cx="30"
            cy="30"
            r="8"
            fill="currentColor"
            stroke="currentColor"
            className={cx('transition-colors duration-[2.5s]', {
              'fill-[#19191B] stroke-[#19191B]': isReady || true,
              // 'fill-transparent stroke-[#DADADA]': !isReady,
            })}
          />
          <circle
            cx="52"
            cy="8"
            r="7.5"
            fill="currentColor"
            stroke="currentColor"
            className={cx('transition-colors duration-[2.5s]', {
              'fill-transparent stroke-[#DADADA]': isReady || true,
              // 'fill-[#19191B] stroke-[#19191B]': !isReady,
            })}
          />
          <circle
            cx="8"
            cy="30"
            r="7.5"
            stroke={isReady || true ? '#DADADA' : '#19191B'}
            className="transition-colors duration-[2.5s]"
          />
          <circle
            cx="8"
            cy="52"
            r="7.5"
            stroke={isReady || true ? '#DADADA' : '#19191B'}
            className="transition-colors duration-[2.5s]"
          />
          <path
            d="M19 52.5H30M52 19V46.5C52 49.8137 49.3137 52.5 46 52.5H30M30 41.5V52.5"
            stroke="black"
            className={cx('transition-all duration-[2.5s]')}
            style={{
              strokeDasharray: isReady ? 87 : 129,
              strokeDashoffset: 200,
            }}
          />
        </svg>
      );
    },
  },
  {
    title: 'Top Quick Onboarding faster than new hires design',
    description: 'Quality and timely delivery',
    icon: ({ isReady }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="60"
          viewBox="0 0 64 60"
          fill="none"
          className="h-[60px] w-[64px]"
        >
          <g clipPath="url(#clip0_5043_10377)">
            <path
              d="M15 15C13.0302 15 11.0796 15.388 9.25975 16.1418C7.43986 16.8956 5.78628 18.0005 4.3934 19.3934C3.00052 20.7863 1.89563 22.4399 1.14181 24.2598C0.387985 26.0796 -8.27879e-07 28.0302 -6.55671e-07 30C-4.83463e-07 31.9698 0.387986 33.9204 1.14181 35.7403C1.89563 37.5601 3.00052 39.2137 4.3934 40.6066C5.78628 41.9995 7.43987 43.1044 9.25975 43.8582C11.0796 44.612 13.0302 45 15 45L15 30L15 15Z"
              fill="#19191B"
            />
            <path
              d="M47.5 44.5C45.5958 44.5 43.7103 44.1249 41.9511 43.3963C40.1919 42.6676 38.5934 41.5995 37.247 40.253C35.9005 38.9066 34.8324 37.3081 34.1037 35.5489C33.3751 33.7897 33 31.9042 33 30C33 28.0958 33.3751 26.2103 34.1037 24.4511C34.8324 22.6919 35.9005 21.0934 37.247 19.7469C38.5934 18.4005 40.1919 17.3324 41.9511 16.6037C43.7103 15.8751 45.5958 15.5 47.5 15.5"
              stroke="#DADADA"
              className="transition-all duration-[2.5s]"
              style={{
                strokeDashoffset: 100,
                strokeDasharray: isReady ? 146 : 100,
              }}
            />
            <path
              d="M17.2683 15.6785C20.6783 16.2186 23.7837 17.9577 26.0259 20.583C28.2681 23.2083 29.5 26.5475 29.5 30C29.5 33.4525 28.2681 36.7917 26.0259 39.417C23.7837 42.0423 20.6783 43.7814 17.2683 44.3215"
              stroke="#DADADA"
              className="transition-all duration-[2.5s]"
              style={{
                strokeDashoffset: 100,
                strokeDasharray: isReady ? 146 : 100,
              }}
            />
            <path d="M15 58L15 2" stroke="#19191B" />
            <path
              d="M33 30L54 30"
              stroke="#DADADA"
              className="transition-all duration-[2.5s]"
              style={{
                strokeDashoffset: 100,
                strokeDasharray: isReady ? 146 : 100,
              }}
            />
            <circle
              cx="27"
              cy="56"
              r="3.5"
              transform="rotate(-90 27 56)"
              stroke="#DADADA"
              className="transition-all duration-[2.5s]"
              style={{
                strokeDashoffset: 100,
                strokeDasharray: isReady ? 146 : 100,
              }}
            />
            <circle
              cx="27"
              cy="4"
              r="3.5"
              transform="rotate(-90 27 4)"
              stroke="#DADADA"
              className="transition-all duration-[2.5s]"
              style={{
                strokeDashoffset: 100,
                strokeDasharray: isReady ? 146 : 100,
              }}
            />
          </g>
          <defs>
            <clipPath id="clip0_5043_10377">
              <rect
                width="60"
                height="64"
                fill="white"
                transform="translate(0 60) rotate(-90)"
              />
            </clipPath>
          </defs>
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
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          className="h-[56px] w-[56px]"
        >
          <circle
            cx="28"
            cy="28"
            r="27.5"
            stroke="#DADADA"
            className="transition-all duration-[2.5s]"
            style={{
              strokeDashoffset: 500,
              strokeDasharray: isReady ? 675 : 500,
            }}
          />
          <circle
            cx="27.998"
            cy="28"
            r="14.2636"
            stroke="#19191B"
            className="transition-all duration-[2.5s]"
            style={{
              strokeDashoffset: 500,
              strokeDasharray: isReady ? 675 : 500,
            }}
          />
          <path
            d="M35.5625 20.4404L20.4433 35.5597"
            stroke="#19191B"
            className="transition-all duration-[2.5s]"
            style={{
              strokeDashoffset: 100,
              strokeDasharray: isReady ? 130 : 100,
            }}
          />
          <circle
            cx="27.9997"
            cy="28"
            r="6.10909"
            fill="#19191B"
            className={cx('transition-all duration-[2.5s]', {
              'opacity-100': isReady,
              'opacity-0': !isReady,
            })}
            style={
              {
                // strokeDashoffset: 500,
                // strokeDasharray: isReady ? 675 : 500,
              }
            }
          />
          <circle
            cx="27.999"
            cy="28"
            r="20.8818"
            stroke="#DADADA"
            className="transition-all duration-[2.5s]"
            style={{
              strokeDashoffset: 500,
              strokeDasharray: isReady ? 675 : 500,
            }}
          />
        </svg>
      );
    },
  },
];

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
            stroke-width="0.9"
          />
          <path
            d="M35.8481 34.6213C41.9627 38.8303 46.9503 43.4058 50.0741 47.3891C51.6378 49.383 52.718 51.2078 53.2483 52.748C53.7822 54.2985 53.7302 55.4679 53.1887 56.2547C52.6471 57.0414 51.5733 57.5074 49.9344 57.5623C48.3064 57.6167 46.2162 57.2592 43.7954 56.5104C38.9594 55.0145 32.9049 51.9891 26.7902 47.7801C20.6756 43.571 15.6881 38.9956 12.5642 35.0122C11.0006 33.0183 9.92037 31.1935 9.39006 29.6534C8.85619 28.1029 8.90811 26.9335 9.44969 26.1467C9.99128 25.3599 11.0651 24.8939 12.704 24.8391C14.332 24.7846 16.4222 25.1422 18.8429 25.891C23.679 27.3869 29.7335 30.4123 35.8481 34.6213Z"
            stroke="#DADADA"
            stroke-width="0.9"
          />
          <path
            d="M56.9646 34.3299C57.6321 36.821 57.6404 39.4678 56.9829 42.1224C56.3252 44.7781 55.013 47.3923 53.1127 49.8133C51.2122 52.2344 48.763 54.4118 45.9017 56.2178C43.0404 58.0236 39.8266 59.4204 36.444 60.3268C33.0614 61.2331 29.5797 61.6304 26.1989 61.4971C22.8179 61.3638 19.6081 60.7027 16.7517 59.5562C13.8955 58.4097 11.452 56.8018 9.55457 54.8308C7.6578 52.8606 6.34164 50.5642 5.67417 48.0731"
            stroke="#DADADA"
            stroke-width="0.9"
          />
          <path
            d="M31.2117 14.65C33.3599 14.65 35.4989 15.3451 37.5036 16.7137C39.5105 18.0838 41.3414 20.1013 42.8786 22.6601C44.4154 25.2183 45.6219 28.2571 46.4213 31.5978C47.2205 34.9381 47.5949 38.5062 47.5209 42.0887C47.4468 45.6713 46.9259 49.1905 45.991 52.4359C45.056 55.6819 43.7278 58.5816 42.0914 60.9657C40.4548 63.3502 38.5492 65.1622 36.4966 66.3108C34.4469 67.4578 32.2886 67.9226 30.1447 67.6926"
            stroke="#DADADA"
            stroke-width="0.9"
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
            stroke-width="0.9"
          />
          <path
            d="M18.3508 34.4501C18.3508 39.1721 14.5228 43.0001 9.80079 43.0001C5.07875 43.0001 1.25078 39.1721 1.25078 34.4501C1.25078 29.728 5.07875 25.9001 9.80079 25.9001C14.5228 25.9001 18.3508 29.728 18.3508 34.4501Z"
            stroke="#DADADA"
            stroke-width="0.9"
          />
          <path
            d="M18.3508 59.2C18.3508 63.922 14.5228 67.75 9.80079 67.75C5.07875 67.75 1.25078 63.922 1.25078 59.2C1.25078 54.4779 5.07875 50.65 9.80079 50.65C14.5228 50.65 18.3508 54.4779 18.3508 59.2Z"
            stroke="#DADADA"
            stroke-width="0.9"
          />
          <path
            d="M22.1758 59.7626H34.5508M59.3008 22.0751V54.3626C59.3008 57.345 56.8832 59.7626 53.9008 59.7626H34.5508M34.5508 47.3876V59.7626"
            stroke="#19191B"
            stroke-width="0.9"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M57.8613 17.2691C55.6052 17.2691 53.3711 17.7135 51.2867 18.5769C49.2023 19.4403 47.3083 20.7058 45.713 22.3011C44.1176 23.8965 42.8521 25.7904 41.9888 27.8749C41.1254 29.9593 40.681 32.1933 40.681 34.4495C40.681 36.7057 41.1254 38.9397 41.9887 41.0241C42.8521 43.1086 44.1176 45.0025 45.713 46.5978C47.3083 48.1932 49.2023 49.4587 51.2867 50.3221C53.3711 51.1855 55.6052 51.6299 57.8613 51.6299L57.8613 52.5299C55.487 52.5299 53.1359 52.0622 50.9423 51.1536C48.7487 50.2449 46.7555 48.9132 45.0766 47.2342C43.3977 45.5553 42.0659 43.5622 41.1573 41.3685C40.2486 39.1749 39.781 36.8238 39.781 34.4495C39.781 32.0752 40.2486 29.7241 41.1573 27.5304C42.0659 25.3368 43.3977 23.3437 45.0766 21.6648C46.7555 19.9858 48.7487 18.654 50.9423 17.7454C53.1359 16.8368 55.487 16.3691 57.8613 16.3691L57.8613 17.2691Z"
            fill="#DADADA"
          />
          <path
            d="M21.4452 17.0362C25.5914 17.6929 29.3672 19.8074 32.0935 22.9995C34.8197 26.1916 36.3176 30.2517 36.3176 34.4495C36.3176 38.6473 34.8197 42.7074 32.0934 45.8995C29.3672 49.0916 25.5914 51.2061 21.4452 51.8628"
            stroke="#DADADA"
            stroke-width="0.9"
          />
          <path
            d="M18.6816 68.2L18.6816 0.700029"
            stroke="#19191B"
            stroke-width="0.9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.6855 34.9H40.373V34L65.6855 34V34.9Z"
            fill="#DADADA"
          />
          <circle
            cx="33.1476"
            cy="63.3786"
            r="4.37143"
            transform="rotate(-90 33.1476 63.3786)"
            stroke="#DADADA"
            stroke-width="0.9"
          />
          <circle
            cx="33.1476"
            cy="5.52196"
            r="4.37143"
            transform="rotate(-90 33.1476 5.52196)"
            stroke="#DADADA"
            stroke-width="0.9"
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
            stroke-width="0.9"
          />
          <circle
            cx="32.9977"
            cy="32.9994"
            r="16.6336"
            stroke="#19191B"
            stroke-width="0.9"
          />
          <path
            d="M41.7461 24.2531L24.251 41.7482"
            stroke="#19191B"
            stroke-width="0.9"
          />
          <circle cx="33.0027" cy="32.9991" r="7.06909" fill="#19191B" />
          <circle
            cx="32.9977"
            cy="32.9988"
            r="24.2918"
            stroke="#DADADA"
            stroke-width="0.9"
          />
        </svg>
      );
    },
  },
];
function IconsSection() {
  const [map, setMap] = useState({});

  return (
    <div className="pb-5">
      <Layout>
        <div className="flex flex-wrap items-start justify-between gap-10">
          {/* <div className="grid gap-10 md:grid-cols-3 xl:flex xl:justify-between xl:gap-0"> */}
          {items.map((item, index) => (
            <Animated
              key={index}
              className="flex x-920:last:mx-auto x-1400:last:mx-0"
              delay={300 * index}
              onViewChange={(isVisible) => {
                setMap((c) => ({
                  ...c,
                  [index]: isVisible,
                }));
              }}
              // onTransitionEnd={(e) => {
              //   // console.log(e);
              //   setTimeout(() => {
              //     setMap((c) => ({
              //       ...c,
              //       [index]: true,
              //     }));
              //   }, 300);
              // }}
            >
              <div className="mr-8 min-w-[64px] md:mr-4 4xl:mr-6">
                <item.icon isReady={map[index]}></item.icon>
              </div>
              <div>
                <div className="mb-2 text-body-heading-m md:max-w-[184px] xl:max-w-[208px] 4xl:text-[22px] 4xl:leading-[120%]">
                  {item.title}
                </div>
                {/* <div className="text-body-s opacity-50 4xl:text-body-m2">
                  {item.description}
                </div> */}
              </div>
            </Animated>
          ))}
        </div>
      </Layout>
    </div>
  );
}

function IconsSection2() {
  const [map, setMap] = useState({});

  return (
    <div className="pb-5 font-satoshi">
      <Layout>
        <div className="mx-auto grid max-w-[668px] grid-cols-2 flex-wrap items-start justify-between gap-x-20 gap-y-[92px] xl:max-w-full xl:grid-cols-4">
          {/* <div className="grid gap-10 md:grid-cols-3 xl:flex xl:justify-between xl:gap-0"> */}
          {items2.map((item, index) => (
            <Animated
              key={index}
              className="flex xl:items-center"
              delay={300 * index}
              onViewChange={(isVisible) => {
                setMap((c) => ({
                  ...c,
                  [index]: isVisible,
                }));
              }}
              // onTransitionEnd={(e) => {
              //   // console.log(e);
              //   setTimeout(() => {
              //     setMap((c) => ({
              //       ...c,
              //       [index]: true,
              //     }));
              //   }, 300);
              // }}
            >
              <div className="mr-8 min-w-[72px] md:mr-4 4xl:mr-6">
                <item.icon isReady={map[index]}></item.icon>
              </div>
              <div>
                <div className="mb-2 text-body-heading-m md:max-w-[208px] xl:max-w-[208px] 4xl:text-[22px] 4xl:leading-[120%]">
                  {item.title}
                </div>
                {/* <div className="text-body-s opacity-50 4xl:text-body-m2">
                  {item.description}
                </div> */}
              </div>
            </Animated>
          ))}
        </div>
      </Layout>
    </div>
  );
}

const ThreeBG = dynamic(() => import('./ThreeBG'));

function BGWrapper() {
  const media = useMediaAtomClient();
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    try {
      const id = requestIdleCallback(() => {
        setIsIdle(true);
      });

      return () => {
        cancelIdleCallback(id);
      };
    } catch (e) {
      const id = setTimeout(() => {
        setIsIdle(true);
      }, 500);

      return () => {
        clearTimeout(id);
      };
    }
  }, []);

  if (media && media !== 'mobile' && isIdle) {
    return <ThreeBG />;
  }

  return null;
}

function CasesSliderWrapper() {
  const media = useMediaAtom();

  return (
    <Animated delay={600}>
      <SkipRenderOnClient shouldRenderOnClient={() => window.innerWidth < 820}>
        <Layout className="mb-20 md:hidden">
          <div className="mb-8 space-y-14">
            <CaseCard item={cases[0]} />
            <CaseCard item={cases[1]} />
          </div>
          <div>
            <Button2
              as={Link}
              href="/work"
              className="!w-full !border !border-black !bg-white"
            >
              <div className="flex justify-center space-x-2">
                <span>Cases</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4335 8.7381L6.63137 18.5402L5.5 17.4088L15.3036 7.60527L7.90151 7.62145L7.89811 6.02177L18.0388 6L18.0177 16.1414L16.418 16.138L16.4335 8.7381Z"
                    fill="#19191B"
                  />
                </svg>
              </div>
            </Button2>
          </div>
        </Layout>
      </SkipRenderOnClient>
      <SkipRenderOnClient shouldRenderOnClient={() => window.innerWidth >= 820}>
        <div className="hidden md:block">
          <CasesSlider3 />
        </div>
      </SkipRenderOnClient>
    </Animated>
  );
}

export default function Home2() {
  return (
    <div className="relative overflow-hidden">
      <div id="intro-section">
        <IntroSection5 />
        {/* <IntroSection2 /> */}
      </div>
      <div id="logo-carousel" className="relative z-[1]">
        <Animated delay={300}>
          <LogoCarousel />
        </Animated>
      </div>
      <div id="cases-slider" className="relative z-[1]">
        <CasesSlider2 />
        {/* <CasesSliderWrapper /> */}
      </div>
      <IconsSection2 />
      <NextStep />
      <Awards />
      <OurExperience />
      <TrialBanner />
      <Services />
      {/* <Solutions /> */}
      <Reviews />
    </div>
  );
}
