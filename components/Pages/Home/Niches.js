import Section from '../../Section';
import cx from 'clsx';

const items = [
  {
    title: 'Carsharing',
    count: 12,
    description:
      'By working with transportation related companies we deep dive into the subject of your product. ',
  },
  {
    title: 'Fintech',
    count: 3,
    description:
      'By working with transportation related companies we deep dive into the subject of your product. ',
  },
  {
    title: 'Edtech',
    count: 4,
    description:
      'By working with transportation related companies we deep dive into the subject of your product. ',
  },
];

function Badge({ children, className = '' }) {
  return (
    <div
      className={cx(
        'rounded-full bg-brand px-[6.5px] text-xs leading-[18px] text-white',
        className
      )}
    >
      {children}
    </div>
  );
}

export default function Niches() {
  return (
    <Section className="bg-white">
      <div className="py-[64px]">
        <Section.Title>Our niches</Section.Title>
        <Section.Description>
          With a niche set of services, we have a great understanding of where,
          how and with whom we provide the best results.
        </Section.Description>
      </div>
      <ul className="divide-y divide-black">
        {items.map((item, i) => (
          <li key={i} className="block pb-10 pt-12 first:pt-0">
            <div className="mb-[38px]">
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
            <div className="mb-4 flex items-center text-xl font-medium leading-[30px]">
              <span>{item.title}</span>
              <Badge className="ml-2">{item.count}</Badge>
            </div>
            <div>{item.description}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
