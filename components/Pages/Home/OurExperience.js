import Animated, { AnimatedGroup } from '../../Animated';
import Layout from '../../Layout';
import cx from 'clsx';
import { Tag } from '../../Tag';

const items = [
  {
    title: 'Areas',
    categories: ['Product design', 'Web app', 'Mobile app', 'SAAS'],
  },
  {
    title: 'Product Design',
    categories: [
      'UI design',
      'UX design',
      'Design system',
      'Motion design',
      'Illustration',
    ],
  },
  {
    title: 'Discovery',
    categories: [
      'UI UX audit',
      'Competitor analysis',
      'User interviews',
      'Customer journey map',
      'Usability testing',
    ],
  },
];

export default function OurExperience({ padding }) {
  return (
    <Layout
      className={cx(
        'flex flex-col md:flex-row',
        {
          'pb-[100px] pt-[100px] md:pb-[184px] md:pt-[104px] xl:pt-[120px]':
            padding == null,
        },
        padding
      )}
    >
      <div className="mb-[72px] flex-shrink-0 md:mb-[53px] md:mr-[72px] xl:mr-8">
        <h2 className="w-full font-satoshi text-next-heading-7 font-medium md:max-w-[248px] md:text-next-heading-6 xl:min-w-[415px] xl:max-w-[304px] xl:text-next-heading-5">
          We balance <br className="hidden xl:block" /> business objectives
          with&nbsp;customer needs
        </h2>
      </div>
      <AnimatedGroup className="grid w-full gap-x-6 gap-y-10 md:col-span-5 md:flex md:justify-between md:gap-10 xl:col-span-8 xl:flex xl:gap-24">
        {items.map((item, index1) => (
          <div key={index1} className="md:min-w-[29%] xl:min-w-[26%]">
            <Animated
              delay={100 * index1}
              className="mb-6 flex text-body-heading-s uppercase"
            >
              <Tag>{item.title}</Tag>
              {/* <span className="shrink-0 rounded-full border border-checkbox-light bg-dim-gray px-[12px] py-[1px] text-next-tag text-black">
              </span> */}
            </Animated>
            <div className="grid gap-3 px-1 xl:gap-[17px]">
              {item.categories.map((category, index2) => (
                <Animated
                  delay={100 * (index1 + index2)}
                  key={index2}
                  className="text-next-body-s xl:text-[18px] xl:leading-[160%]"
                >
                  {category}
                </Animated>
              ))}
            </div>
          </div>
        ))}
      </AnimatedGroup>
    </Layout>
  );
}
