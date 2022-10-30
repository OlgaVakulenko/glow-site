import cx from 'clsx';
import Link from 'next/link';
import Layout from '../../Layout';
import Section from '../../Section';
import NichesAnimation from './NichesAnimation';

const items = [
  {
    title: 'Carsharing',
    count: 12,
    description:
      'Be it a carsharing app or an internal service for a logistics company – the key to happy users is in comfortable UX that is easy to navigate.',
  },
  {
    title: 'Fintech',
    count: 3,
    description:
      'Who said that fintech must be dull? This is an important and well organized field but not everything connected to finances should resemble a spreadsheet.',
  },
  {
    title: 'Healthcare',
    count: 4,
    description:
      'The users of a healthcare service may not be that good with modern technology so the UX must be as user friendly as possible.',
  },
];

function Badge({ children, className = '' }) {
  const padding = children > 9 ? 'px-[6.5px]' : 'px-[8.5px]';

  return (
    <div
      className={cx(
        'rounded-full bg-brand text-xs leading-[18px] text-white',
        padding,
        className
      )}
    >
      {children}
    </div>
  );
}

const Arrow = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
      className="group/arrow transition-colors group-hover:fill-black"
    >
      <circle cx="28" cy="28.0005" r="27.5" stroke="currentColor" />
      <path
        className="transition-transform group-hover/arrow:translate-x-[2px]"
        d="M28 21.0005L35.0711 28.0716M35.0711 28.0716L28 35.1426M35.0711 28.0716H20.9289"
        stroke="currentColor"
      />
    </svg>
  );
};

export default function Niches() {
  return (
    <Section withLayout={false}>
      <Layout>
        <Section.Header className="py-[64px]">
          <Section.Title>Niches that we&nbsp;fit</Section.Title>
          <Section.Description>
            Experience matters. Over the years we dived into the nuances of a
            number of industries and we will be happy to make a design that
            works for your project specifically.
          </Section.Description>
        </Section.Header>
      </Layout>
      <NichesAnimation />
      <Layout className="lg:mt-[120px]">
        <ul className="divide-y divide-black">
          {items.map((item, i) => (
            <li key={i} className="pb-10 pt-12 ">
              <Link
                href="#"
                className="group block first:pt-0 lg:flex lg:items-start lg:justify-between"
              >
                <div className="mb-[38px] lg:w-full lg:max-w-[25%]">
                  <svg
                    width="80"
                    height="76"
                    viewBox="0 0 80 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M80 34.3858L51.9231 42.6981L69.6154 65.9349L56.9231 75.0029L40 51.5772L23.0769 75.0029L10.1923 65.9349L27.8846 42.6981L4.07853e-06 34.3858L4.8077 19.6503L32.5 28.9072L32.1154 0.00292624L47.8846 0.00292487L47.5 28.7183L75.1923 19.6503L80 34.3858Z"
                      fill="url(#paint0_linear_2113_604)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2113_604"
                        x1="26.9812"
                        y1="-118.075"
                        x2="51.1291"
                        y2="75.0263"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#19191B" />
                        <stop offset="1" stopColor="#19191B" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="mb-4 flex items-center text-xl font-medium leading-[30px] lg:w-full lg:max-w-[25%] lg:items-start">
                  <span className="pt-5">{item.title}</span>
                  <Badge className="ml-2">{item.count}</Badge>
                </div>
                <div className="lg:w-full lg:max-w-[25%]">
                  {item.description}
                </div>
                <div className="transition-colors group-hover:text-white">
                  <Arrow />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </Section>
  );
}
