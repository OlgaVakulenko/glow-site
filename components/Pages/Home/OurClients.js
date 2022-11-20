import Go from '../../Go';
import Layout from '../../Layout';
import Marquee from '../../Marquee';
import Section from '../../Section';
import ReactMarquee from 'react-fast-marquee';

import Image from '../../Image';
import Client1 from './assets/client-1.svg';
import Client2 from './assets/client-2.svg';
import Client3 from './assets/client-3.svg';
import Client4 from './assets/client-4.svg';
import Client5 from './assets/client-5.svg';
import Noise from './assets/noise.png';
import SectionLink from '../../SectionLink';
import { useEffect, useState } from 'react';
import { atom } from 'jotai';
import { useSetAtom } from 'jotai';

const clients = [Client1, Client2, Client3, Client4, Client5];

// const marqueeMounted = atom(false);

export default function OurClients() {
  // const setMarqueeMounted = useSetAtom(marqueeMounted);

  useEffect(() => {
    // setMarqueeMounted(true);
  }, []);

  return (
    <Section
      withLayout={false}
      className="pt-[56px] pb-[56px] md:pt-[84px] md:pb-[160px] xl:pb-[120px] xl:pt-[56px]"
    >
      <SectionLink
        // href="#"
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
        <ReactMarquee
          className="flex h-[37px] justify-between"
          gradient={false}
        >
          {[...clients, ...clients].map((client, i) => (
            <img
              className="pr-9 md:pr-[66px] xl:pr-[150px]"
              key={client.src + i}
              src={client.src}
              alt=""
            />
          ))}
        </ReactMarquee>
      </div>
      <div className="mb-[80px] flex items-center justify-center md:hidden">
        <Go />
      </div>
      <div className="md:flex">
        <div className="relative mx-[36px] mb-[40px] flex items-center justify-center pb-[100%] md:static md:mb-0 md:mr-0 md:ml-auto md:w-1/2 md:max-w-[448px] md:justify-end md:pb-0">
          <div className="md:relative md:h-auto md:w-full md:max-w-[448px] md:pb-[100%] xl:max-w-[534px]">
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
              />
              <path
                opacity="0.333333"
                d="M240.161 152C240.161 193.901 230.253 231.811 214.259 259.228C198.259 286.658 176.228 303.5 151.995 303.5C127.762 303.5 105.73 286.658 89.7298 259.228C73.7363 231.811 63.8281 193.901 63.8281 152C63.8281 110.099 73.7363 72.1895 89.7298 44.7721C105.73 17.3424 127.762 0.500488 151.995 0.500488C176.228 0.500488 198.259 17.3424 214.259 44.7721C230.253 72.1895 240.161 110.099 240.161 152Z"
                stroke="#19191B"
              />
              <path
                opacity="0.5"
                d="M256 152C256 193.886 244.327 231.784 225.48 259.197C206.632 286.612 180.645 303.5 152 303.5C123.355 303.5 97.3673 286.612 78.5193 259.197C59.6728 231.784 48 193.886 48 152C48 110.115 59.6728 72.2165 78.5193 44.8034C97.3673 17.3882 123.355 0.500488 152 0.500488C180.645 0.500488 206.632 17.3882 225.48 44.8034C244.327 72.2165 256 110.115 256 152Z"
                stroke="#19191B"
              />
              <path
                opacity="0.666667"
                d="M271.838 152C271.838 235.786 218.084 303.5 152.005 303.5C85.9256 303.5 32.1719 235.786 32.1719 152C32.1719 68.214 85.9256 0.500488 152.005 0.500488C218.084 0.500488 271.838 68.214 271.838 152Z"
                stroke="#19191B"
              />
              <path
                opacity="0.833333"
                d="M287.661 152C287.661 235.724 226.871 303.5 151.995 303.5C77.1184 303.5 16.3281 235.724 16.3281 152C16.3281 68.2761 77.1184 0.500488 151.995 0.500488C226.871 0.500488 287.661 68.2761 287.661 152Z"
                stroke="#19191B"
              />
              <path
                d="M303.5 152C303.5 235.671 235.671 303.5 152 303.5C68.3288 303.5 0.5 235.671 0.5 152C0.5 68.329 68.3288 0.500244 152 0.500244C235.671 0.500244 303.5 68.329 303.5 152Z"
                stroke="#19191B"
              />
              <circle
                cx="181.905"
                cy="115.454"
                r="6.2295"
                fill="#19191B"
                stroke="#19191B"
              />
            </svg>
            <Image className="absolute inset-0" src={Noise} alt="" />
          </div>
        </div>
        <Layout className="md:flex md:w-2/5 md:items-center md:justify-start md:pl-[32px] md:pr-[81px] xl:w-6/12  xl:pl-[136px]">
          <div className="text-center text-lg italic leading-[133%] md:max-w-[328px] md:text-left md:text-xl md:leading-[27px] xl:text-[22px] xl:leading-[28px]">
            We’ve built long-lasting partnerships with the&nbsp;most ambitious
            brands across the globe
          </div>
        </Layout>
      </div>
    </Section>
  );
}
