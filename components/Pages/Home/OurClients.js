import cx from 'clsx';
import { useAtom } from 'jotai';
import { useEffect, useMemo, useRef } from 'react';
import gsap from '../../../dist/gsap';
import { mediaAtom } from '../../../lib/agent';
import Animated from '../../Animated';
import Go from '../../Go';
import Image from '../../Image';
import Layout from '../../Layout';
import Section from '../../Section';
import SectionLink from '../../SectionLink';
import Client1 from './assets/client-1.svg';
import Client2 from './assets/client-2.svg';
import Client3 from './assets/client-3.svg';
import Client4 from './assets/client-4.svg';
import ClientLandflow from './assets/client-lendflow.svg';
import ClientLiquidSpace from './assets/client-liquidspace.svg';
import Noise from './assets/noise.png';

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

export default function OurClients() {
  const [media] = useAtom(mediaAtom);

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
      <Layout></Layout>
      <div className="mb-[56px] mt-[59px] md:mt-[64px] md:mb-[152px] xl:mt-[80px]">
        <Layout className="md:-mb-4 md:flex md:flex-wrap md:justify-around xl:justify-between">
          {media === 'mobile'
            ? chunk(clients, 3).map((chunk, i) => (
                <div
                  key={i}
                  className={cx(
                    'mb-7 flex justify-center md:w-full md:justify-between',
                    {
                      ['px-3']: i > 0,
                    }
                  )}
                >
                  {chunk.map((client, k) => (
                    <Animated
                      delay={k * 100}
                      key={client.src + k}
                      className={cx(
                        'mr-4 flex items-center justify-center last:mr-0',
                        {
                          'mt-1': i === 0 && k === 2,
                          'mt-[2px]': i === 1 && k === 2,
                          'w-[105px]': i === 1 && k === 1,
                        }
                      )}
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
                  className="md:mr-4 md:mb-4 md:flex md:items-center md:justify-center last:md:mr-0"
                >
                  <img className="w-full" src={client.src} alt="" />
                </Animated>
              ))}
        </Layout>
      </div>
      <div className="mb-[80px] flex items-center justify-center md:hidden">
        <Go />
      </div>
      <Illustration />
    </Section>
  );
}

function Illustration() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: ref.current,
        start: 'top 25%',
        end: 'bottom 25%',
        scrub: true,
        pin: true,
      };

      gsap.fromTo(
        '.__word',
        {
          y: '100%',
        },
        {
          y: '0%',
          scrollTrigger: trigger,
          stagger: 0.3,
        }
      );
    }, ref);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Layout>
      <div ref={ref} className="md:flex md:justify-center">
        <div className="relative mx-[20px] mb-[40px] flex items-center justify-center pb-[90%] md:static md:mb-0 md:mr-0 md:w-1/2 md:max-w-[448px] md:justify-end md:pb-0 xl:max-w-[534px]">
          <div className="md:relative md:h-auto md:w-full md:max-w-[448px] md:pb-[100%] xl:max-w-[534px]">
            <Image className="absolute inset-0" src={Noise} alt="" />
            <Ill2 />
          </div>
        </div>

        <div className="md:flex md:justify-center ">
          <div className="md:flex md:items-center md:justify-start md:pl-[32px] md:pr-[81px] xl:pl-[136px]">
            <div className="__text text-center text-lg italic leading-[133%] md:max-w-[328px] md:text-left md:text-xl md:leading-[27px] xl:text-[22px] xl:leading-[28px]">
              <RevealTextAnimation>
                We’ve built long-lasting partnerships with the most ambitious
                brands across the globe
              </RevealTextAnimation>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function RevealTextAnimation({ children }) {
  const words = useMemo(() => {
    return children.split(' ');
  }, [children]);

  return (
    <div className="flex flex-wrap justify-center md:justify-start">
      {words.map((w, i) => (
        <div key={i} className="overflow-hidden">
          <span className="__word inline-block translate-y-full whitespace-pre">
            {w}{' '}
          </span>
        </div>
      ))}
    </div>
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
    </svg>
  );
}
