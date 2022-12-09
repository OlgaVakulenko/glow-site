import Go from '../../Go';
import Layout from '../../Layout';
// import Marquee from '../../Marquee';
import Section from '../../Section';
// import ReactMarquee from 'react-fast-marquee';
import cx from 'clsx';

import Image from '../../Image';
import Client1 from './assets/client-1.svg';
import Client2 from './assets/client-2.svg';
import Client3 from './assets/client-3.svg';
import Client4 from './assets/client-4.svg';
import Client5 from './assets/client-5.svg';
import ClientLandflow from './assets/client-lendflow.svg';
import ClientLiquidSpace from './assets/client-liquidspace.svg';
import Noise from './assets/noise.png';
import SectionLink from '../../SectionLink';
import { useEffect, useMemo, useState } from 'react';
import { atom } from 'jotai';
import { useSetAtom } from 'jotai';
import { useAtom } from 'jotai';
import { mediaAtom } from '../../../lib/agent';
import Animated from '../../Animated';

const clients = [
  Client1,
  Client2,
  Client3,
  ClientLandflow,
  Client4,
  // Client5,
  ClientLiquidSpace,
];

const chunk = (arr, per) => {
  return arr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / per);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
};
// const result =
// const marqueeMounted = atom(false);

export default function OurClients() {
  const [media] = useAtom(mediaAtom);
  // const setMarqueeMounted = useSetAtom(marqueeMounted);

  useEffect(() => {
    // setMarqueeMounted(true);
  }, []);

  return (
    <Section
      withLayout={false}
      className="pt-[56px] pb-[56px] md:pt-[84px] md:pb-[160px] xl:pb-[152px] xl:pt-[56px]"
    >
      <SectionLink
        buttonLabel={'ABOUT US'}
        href="#"
        title="Our clients"
        description={
          <>
            Our approach is to integrate in our client’s team and&nbsp;always
            keep in touch; we support our partners even after our work is done.
          </>
        }
      />
      <Layout>
        {/* <Section.Title>Our clients</Section.Title>
        <Section.Description>
          Our approach is to integrate in our client’s team and always keep in
          touch; we support our partners even after our work is done.
        </Section.Description> */}
      </Layout>
      <div className="mb-[56px] mt-[59px] md:mt-[64px] md:mb-[152px] xl:mt-[80px]">
        <Layout className="md:-mr-4 md:-mb-4 md:flex md:flex-wrap md:justify-around xl:justify-between">
          {media === 'mobile'
            ? chunk(clients, 3).map((chunk, i) => (
                <div
                  key={i}
                  className={cx(
                    'mb-7 -mr-4 flex justify-center md:w-full md:justify-between',
                    {
                      ['px-5']: i > 0,
                    }
                  )}
                >
                  {chunk.map((client, i) => (
                    <Animated
                      delay={i * 100}
                      key={client.src + i}
                      className={cx('mr-4', {})}
                    >
                      <img className="w-full" src={client.src} alt="" />
                    </Animated>
                  ))}
                </div>
              ))
            : clients.map((client, i) => (
                <Animated
                  key={client.src + i}
                  delay={i * 100}
                  className="md:mr-4 md:mb-4 md:flex md:items-center md:justify-center"
                >
                  <img className="w-full" src={client.src} alt="" />
                </Animated>
              ))}
        </Layout>
      </div>
      <div className="mb-[80px] flex items-center justify-center md:hidden">
        <Go />
      </div>
      <Layout>
        <div className="md:flex md:justify-center">
          <div className="relative mx-[36px] mb-[40px] flex items-center justify-center pb-[100%] md:static md:mb-0 md:mr-0 md:w-1/2 md:max-w-[448px] md:justify-end md:pb-0">
            <div className="md:relative md:h-auto md:w-full md:max-w-[448px] md:pb-[100%] xl:max-w-[534px]">
              {true && <Ill2 />}
              {false && (
                <svg
                  className="absolute inset-0"
                  width="100%"
                  viewBox="0 0 304 304"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M200.928 152C200.928 177.869 179.864 198.844 153.876 198.844C127.888 198.844 106.824 177.869 106.824 152C106.824 126.131 127.888 105.156 153.876 105.156C179.864 105.156 200.928 126.131 200.928 152Z"
                    stroke="#19191B"
                  />
                  <path
                    opacity="0.166667"
                    d="M224.338 152C224.338 193.916 216.196 231.839 203.055 259.264C189.896 286.726 171.815 303.5 152.005 303.5C132.195 303.5 114.114 286.726 100.955 259.264C87.8138 231.839 79.6719 193.916 79.6719 152C79.6719 110.085 87.8138 72.1616 100.955 44.7362C114.114 17.2746 132.195 0.500488 152.005 0.500488C171.815 0.500488 189.896 17.2746 203.055 44.7362C216.196 72.1616 224.338 110.085 224.338 152Z"
                    stroke="#19191B"
                  >
                    {/* <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-0.5s"
                    dur="10s"
                    values="1 1; -1 1"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.64 0 0.36 1"
                  /> */}
                  </path>
                  <path
                    opacity="0.333333"
                    d="M240.161 152C240.161 193.901 230.253 231.811 214.259 259.228C198.259 286.658 176.228 303.5 151.995 303.5C127.762 303.5 105.73 286.658 89.7298 259.228C73.7363 231.811 63.8281 193.901 63.8281 152C63.8281 110.099 73.7363 72.1895 89.7298 44.7721C105.73 17.3424 127.762 0.500488 151.995 0.500488C176.228 0.500488 198.259 17.3424 214.259 44.7721C230.253 72.1895 240.161 110.099 240.161 152Z"
                    stroke="#19191B"
                  >
                    {/* <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-1.0s"
                    dur="10s"
                    values="1 1; -1 1"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.64 0 0.36 1"
                  /> */}
                  </path>
                  <path
                    opacity="0.5"
                    d="M256 152C256 193.886 244.327 231.784 225.48 259.197C206.632 286.612 180.645 303.5 152 303.5C123.355 303.5 97.3673 286.612 78.5193 259.197C59.6728 231.784 48 193.886 48 152C48 110.115 59.6728 72.2165 78.5193 44.8034C97.3673 17.3882 123.355 0.500488 152 0.500488C180.645 0.500488 206.632 17.3882 225.48 44.8034C244.327 72.2165 256 110.115 256 152Z"
                    stroke="#19191B"
                  >
                    {/* <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-1.5s"
                    dur="10s"
                    values="1 1; -1 1"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.64 0 0.36 1"
                  /> */}
                  </path>
                  <path
                    opacity="0.666667"
                    d="M271.838 152C271.838 235.786 218.084 303.5 152.005 303.5C85.9256 303.5 32.1719 235.786 32.1719 152C32.1719 68.214 85.9256 0.500488 152.005 0.500488C218.084 0.500488 271.838 68.214 271.838 152Z"
                    stroke="#19191B"
                  >
                    {/* <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-2.0s"
                    dur="10s"
                    values="1 1; -1 1"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.64 0 0.36 1"
                  /> */}
                  </path>
                  <path
                    opacity="0.833333"
                    d="M287.661 152C287.661 235.724 226.871 303.5 151.995 303.5C77.1184 303.5 16.3281 235.724 16.3281 152C16.3281 68.2761 77.1184 0.500488 151.995 0.500488C226.871 0.500488 287.661 68.2761 287.661 152Z"
                    stroke="#19191B"
                  >
                    {/* <animateTransform
                    attributeName="transform"
                    type="scale"
                    begin="-2.5s"
                    dur="10s"
                    values="1 1; -1 1"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.64 0 0.36 1"
                  /> */}
                  </path>
                  <path
                    d="M303.5 152C303.5 235.671 235.671 303.5 152 303.5C68.3288 303.5 0.5 235.671 0.5 152C0.5 68.329 68.3288 0.500244 152 0.500244C235.671 0.500244 303.5 68.329 303.5 152Z"
                    stroke="#19191B"
                  >
                    {/* {/* <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-3.0s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                /> */}
                  </path>
                  <circle
                    cx="181.905"
                    cy="115.454"
                    r="6.2295"
                    fill="#19191B"
                    stroke="#19191B"
                  />
                </svg>
              )}

              <Image className="absolute inset-0" src={Noise} alt="" />
            </div>
          </div>

          <div className="md:flex md:justify-center ">
            <div className="md:flex md:items-center md:justify-start md:pl-[32px] md:pr-[81px] xl:pl-[136px]">
              <Animated delay={200}>
                <div className="text-center text-lg italic leading-[133%] md:max-w-[328px] md:text-left md:text-xl md:leading-[27px] xl:text-[22px] xl:leading-[28px]">
                  We’ve built long-lasting partnerships with the&nbsp;most
                  ambitious brands across the globe
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </Layout>
    </Section>
  );
}

function Line({ step = 0.5, currentIndex, total }) {
  const duration = total * step;

  return (
    <path
      opacity="0.5"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M152 1.16944e-07C152.002 1.16944e-07 152.004 0 152.006 0C235.95 0 304 68.0526 304 152C304 235.947 235.95 304 152.006 304C152.004 304 152.002 304 152 304V303C152.002 303 152.004 303 152.006 303C235.397 303 303 235.395 303 152C303 68.6049 235.397 1 152.006 1C152.004 1 152.002 1 152 1V1.16944e-07Z"
      fill="#19191B"
      className="origin-center"
    >
      <animateTransform
        attributeName="transform"
        type="scale"
        begin={`-${currentIndex * step + step}s`}
        dur={`${duration}s`}
        values="1 1; -1 1"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.64 0 0.36 1"
      />
      <animate
        attributeName="opacity"
        values="0;0.5;0"
        begin={`-${currentIndex * step + step}s`}
        dur={`${duration / 2}s`}
        repeatCount="indefinite"
      />
    </path>
  );
}

function Ill2() {
  const num = 16;
  const step = 0.8;
  const range = useMemo(() => {
    const r = [];
    for (let i = 0; i < num; i++) {
      r.push(i);
    }
    return r;
  }, [num]);

  return (
    <svg
      className="absolute inset-0"
      width="100%"
      viewBox="0 0 304 304"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M200.928 151.999C200.928 177.869 179.864 198.844 153.876 198.844C127.888 198.844 106.824 177.869 106.824 151.999C106.824 126.13 127.888 105.155 153.876 105.155C179.864 105.155 200.928 126.13 200.928 151.999Z"
        stroke="#19191B"
      />
      <path
        d="M0.5 152C0.5 235.671 68.3288 303.5 152 303.5C235.671 303.5 303.5 235.671 303.5 152C303.5 68.3288 235.671 0.5 152 0.5C68.3288 0.5 0.5 68.3288 0.5 152Z"
        stroke="#19191B"
      />
      {range.map((index) => (
        <Line
          key={index}
          step={step}
          currentIndex={index}
          total={range.length}
        />
      ))}
      <circle
        cx="181.905"
        cy="115.453"
        r="6.2295"
        fill="#19191B"
        stroke="#19191B"
      />
    </svg>
  );
}

function Illustration() {
  return (
    <svg
      className="absolute inset-0"
      width="100%"
      viewBox="0 0 304 304"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M200.928 152C200.928 177.869 179.864 198.844 153.876 198.844C127.888 198.844 106.824 177.869 106.824 152C106.824 126.131 127.888 105.156 153.876 105.156C179.864 105.156 200.928 126.131 200.928 152Z"
        stroke="#19191B"
      ></path>
      <path
        d="M303.5 152C303.5 235.671 235.671 303.5 152 303.5C68.3288 303.5 0.5 235.671 0.5 152C0.5 68.3292 68.3288 0.500488 152 0.500488C235.671 0.500488 303.5 68.3292 303.5 152Z"
        stroke="#19191B"
      >
        {/* <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.5s"
          dur="10s"
          values="1 1; -1 1"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.64 0 0.36 1"
        /> */}
      </path>
      <path
        opacity="0.833333"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152 0.000488398C151.998 0.000488398 151.996 0.000488281 151.995 0.000488281C76.7919 0.000488281 15.8281 68.0531 15.8281 152C15.8281 235.947 76.7919 304 151.995 304C151.996 304 151.998 304 152 304V303C151.998 303 151.996 303 151.995 303C77.4448 303 16.8281 235.501 16.8281 152C16.8281 68.4991 77.4448 1.00049 151.995 1.00049C151.996 1.00049 151.998 1.00049 152 1.00049V0.000488398Z"
        fill="#19191B"
        style={{ transformOrigin: 'center' }}
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-3.0s"
          dur="10s"
          values="1 1; -1 1"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.64 0 0.36 1"
        />
      </path>
      <path
        opacity="0.666667"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152 0.000488411C85.5441 0.00391536 31.6719 68.0552 31.6719 152C31.6719 235.945 85.5441 303.997 152 304V303C86.3016 302.997 32.6719 235.623 32.6719 152C32.6719 68.3771 86.3016 1.00392 152 1.00049V0.000488411Z"
        fill="#19191B"
        style={{ transformOrigin: 'center' }}
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-3.5s"
          dur="10s"
          values="1 1; -1 1"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.64 0 0.36 1"
        />
      </path>
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152 0.000488281C152 0.000488281 152 0.000488281 152 0.000488281C94.2862 0.000488281 47.5 68.0531 47.5 152C47.5 235.947 94.2862 304 152 304V303C123.567 303 97.7166 286.238 78.9313 258.914C60.1491 231.594 48.5 193.798 48.5 152C48.5 110.203 60.1491 72.4063 78.9313 45.0867C97.7166 17.7627 123.567 1.00049 152 1.00049C152 1.00049 152 1.00049 152 1.00049V0.000488281Z"
        fill="#19191B"
        style={{ transformOrigin: 'center' }}
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-4.0s"
          dur="10s"
          values="1 1; -1 1"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.64 0 0.36 1"
        />
      </path>
      <path
        opacity="0.333333"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152 0.000488554C151.998 0.000488372 151.996 0.000488281 151.995 0.000488281C103.025 0.000488281 63.3281 68.0531 63.3281 152C63.3281 235.947 103.025 304 151.995 304C151.996 304 151.998 304 152 304V303C151.998 303 151.996 303 151.995 303C128.013 303 106.118 286.329 90.1617 258.976C74.2202 231.648 64.3281 193.829 64.3281 152C64.3281 110.172 74.2202 72.3523 90.1617 45.0241C106.118 17.6712 128.013 1.00049 151.995 1.00049C151.996 1.00049 151.998 1.00049 152 1.00049V0.000488554Z"
        fill="#19191B"
        style={{ transformOrigin: 'center' }}
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-4.5s"
          dur="10s"
          values="1 1; -1 1"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.64 0 0.36 1"
        />
      </path>
      <path
        opacity="0.166667"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152 0.000488646C111.778 0.0062451 79.1719 68.0566 79.1719 152C79.1719 235.944 111.778 303.994 152 304V303C132.495 302.997 114.542 286.463 101.406 259.048C88.3036 231.704 80.1719 193.858 80.1719 152C80.1719 110.143 88.3036 72.2965 101.406 44.9523C114.542 17.5379 132.495 1.00337 152 1.00049V0.000488646Z"
        fill="#19191B"
        style={{ transformOrigin: 'center' }}
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-5.0s"
          dur="10s"
          values="1 1; -1 1"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.64 0 0.36 1"
        />
      </path>
      <path
        d="M0.5 152C0.5 235.671 68.3288 303.5 152 303.5C235.671 303.5 303.5 235.671 303.5 152C303.5 68.3292 235.671 0.500488 152 0.500488C68.3288 0.500488 0.5 68.3292 0.5 152Z"
        stroke="#19191B"
      />
      <path
        opacity="0.833333"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152 0.000488398C152.001 0.000488398 152.003 0.000488281 152.005 0.000488281C227.208 0.000488281 288.171 68.0531 288.171 152C288.171 235.947 227.208 304 152.005 304C152.003 304 152.001 304 152 304V303C152.001 303 152.003 303 152.005 303C226.555 303 287.171 235.501 287.171 152C287.171 68.4991 226.555 1.00049 152.005 1.00049C152.003 1.00049 152.001 1.00049 152 1.00049V0.000488398Z"
        fill="#19191B"
        style={{ transformOrigin: 'center' }}
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.5s"
          dur="10s"
          values="1 1; -1 1"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.64 0 0.36 1"
        />
      </path>

      <path
        opacity="0.666667"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152 0.000488411C218.455 0.00391536 272.328 68.0552 272.328 152C272.328 235.945 218.455 303.997 152 304V303C217.698 302.997 271.328 235.623 271.328 152C271.328 68.3771 217.698 1.00392 152 1.00049V0.000488411Z"
        fill="#19191B"
        style={{ transformOrigin: 'center' }}
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-1.0s"
          dur="10s"
          values="1 1; -1 1"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.64 0 0.36 1"
        />
      </path>
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152 0.000488281C152 0.000488281 152 0.000488281 152 0.000488281C209.713 0.000488281 256.5 68.0531 256.5 152C256.5 235.947 209.713 304 152 304V303C180.432 303 206.283 286.238 225.068 258.914C243.85 231.594 255.5 193.798 255.5 152C255.5 110.203 243.85 72.4063 225.068 45.0867C206.283 17.7627 180.432 1.00049 152 1.00049C152 1.00049 152 1.00049 152 1.00049V0.000488281Z"
        fill="#19191B"
        style={{ transformOrigin: 'center' }}
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-1.5s"
          dur="10s"
          values="1 1; -1 1"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.64 0 0.36 1"
        />
      </path>
      <path
        opacity="0.333333"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152 0.000488554C152.001 0.000488372 152.003 0.000488281 152.005 0.000488281C200.974 0.000488281 240.671 68.0531 240.671 152C240.671 235.947 200.974 304 152.005 304C152.003 304 152.001 304 152 304V303C152.001 303 152.003 303 152.005 303C175.986 303 197.882 286.329 213.838 258.976C229.779 231.648 239.671 193.829 239.671 152C239.671 110.172 229.779 72.3523 213.838 45.0241C197.882 17.6712 175.986 1.00049 152.005 1.00049C152.003 1.00049 152.001 1.00049 152 1.00049V0.000488554Z"
        fill="#19191B"
        style={{ transformOrigin: 'center' }}
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-2.0s"
          dur="10s"
          values="1 1; -1 1"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.64 0 0.36 1"
        />
      </path>
      <path
        opacity="0.166667"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152 0.000488646C192.222 0.0062451 224.828 68.0566 224.828 152C224.828 235.944 192.222 303.994 152 304V303C171.505 302.997 189.457 286.463 202.593 259.048C215.696 231.704 223.828 193.858 223.828 152C223.828 110.143 215.696 72.2965 202.593 44.9523C189.457 17.5379 171.505 1.00337 152 1.00049V0.000488646Z"
        fill="#19191B"
        style={{ transformOrigin: 'center' }}
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-2.5s"
          dur="10s"
          values="1 1; -1 1"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.64 0 0.36 1"
        />
      </path>
      <circle
        cx="181.905"
        cy="115.454"
        r="6.2295"
        fill="#19191B"
        stroke="#19191B"
      />
    </svg>
  );
}
