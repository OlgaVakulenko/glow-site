import { addLeadingZero } from '../../../lib/utils';
import Animated from '../../Animated';
import Create from '../../Icons/Create';
import Ideate from '../../Icons/Ideate';
import Investigate from '../../Icons/Investigate';
import Iterate from '../../Icons/Iterate';
import Section from '../../Section';

const stages = [
  {
    title: 'Investigate',
    description: 'By working with transportation related companies we deep.',
    icon: <Investigate />,
  },
  {
    title: 'Ideate',
    description: 'By working with transportation related companies we deep.',
    icon: <Ideate />,
  },
  {
    title: 'Create',
    description: 'By working with transportation related companies we deep.',
    icon: <Create />,
  },
  {
    title: 'Iterate',
    description: 'By working with transportation related companies we deep.',
    icon: <Iterate />,
  },
];

const stats = [
  {
    title: 'average employee experience',
    value: '5+ years',
  },
  {
    title: 'Rating the Clutch',
    value: '5.0',
  },
  {
    title:
      'of clients who have trusted us with their startups lead their markets now',
    value: '90%',
  },
  {
    title:
      'average design partnership for our clients after launching the project',
    value: '1.5 years',
  },
  {
    title: 'Quality guarantee',
    value: '12k',
  },
  {
    title: 'total investments in our clients’ projects',
    value: '$50M',
  },
];

export default function Workflow() {
  return (
    <Section className="pt-16 md:pt-[139px] xl:pt-[176px]">
      <Section.Header>
        <Section.Title>Workflow</Section.Title>
        <Section.Description>
          Our approach allows us to make complex things simple. We will learn
          about your business, study the audience.
        </Section.Description>
      </Section.Header>
      <div className="mt-[64px] flex flex-wrap divide-y divide-black md:mt-[126px] md:divide-x xl:mt-[137px]">
        {stages.map((stage, i) => (
          <div
            key={i}
            className="w-full pt-[49px] pb-[33px] first:border-t first:border-black last:border-t last:border-black md:w-1/2 md:px-[44px] md:pt-[48px] md:pb-[40px] md:odd:!border-l-0 xl:px-[80px] xl:pb-[70px] xl:even:pl-[134px]"
          >
            <Animated className="text-body-heading-s font-medium uppercase">
              <span className="opacity-50">{addLeadingZero(i + 1)} Stage</span>
            </Animated>
            <Animated
              delay={100}
              className="mb-[69px] mt-10 md:mb-[63px] xl:mb-[130px] xl:mt-14"
            >
              {stage.icon}
            </Animated>
            <Animated
              delay={200}
              className="mb-4 text-lg font-medium leading-[27px] xl:text-[20px] xl:leading-[150%]"
            >
              {stage.title}
            </Animated>
            <Animated
              delay={300}
              className="md:max-w-[270px] md:text-[18px] md:leading-[27px] xl:max-w-[353px] xl:text-[20px] xl:leading-[27px]"
            >
              {stage.description}
            </Animated>
          </div>
        ))}
      </div>
      <div className="border-b border-t border-black pt-[56px] md:flex md:items-end md:pt-[96px] md:pb-24 xl:pb-[111px] xl:pt-[106px]">
        <div className="pl-[6px] md:w-5/12 md:pr-[95px] xl:w-[36%] xl:pl-0">
          <Animated className="mb-4 text-center font-glow text-xl font-medium leading-[170%] md:text-left md:text-[22px] md:leading-[40px] md:tracking-[0.02em] xl:text-heading-h4">
            Compact = Efficient&nbsp;
          </Animated>
          <Animated className="text-center text-lg italic leading-[133%] md:text-left md:text-xl md:leading-[27px] xl:max-w-[300px] xl:text-subtitle-m">
            We measure our success with numbers and feelings. But first, let the
            numbers talk:
          </Animated>
        </div>
        <div className="mt-[40px] md:mt-0 md:mb-[-72px] md:flex md:w-7/12 md:flex-wrap xl:mb-[-80px] xl:w-[64%]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="mb-6 md:mb-[72px] md:w-1/2 md:px-[40px] md:odd:pl-0 md:even:pr-0 xl:mb-[80px]"
            >
              <Animated className="mb-2 text-xs font-medium uppercase  md:mb-4 xl:mb-6 xl:max-w-[220px]">
                <span className="opacity-50">{stat.title}</span>
              </Animated>
              <Animated
                delay={150}
                className="mb-2 text-[32px] font-medium leading-[170%] md:mb-0 md:text-[44px] md:leading-[127%] xl:text-[56px] xl:leading-[100%]"
              >
                {stat.value}
              </Animated>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
