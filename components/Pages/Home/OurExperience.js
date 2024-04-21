import Animated, { AnimatedGroup } from '../../Animated';
import Layout from '../../Layout';
import cx from 'clsx';

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
      <div className="mb-10 mr-[72px] flex-shrink-0 md:mb-[53px] xl:mr-[256px]">
        <div className="w-full  font-satoshi text-[24px] font-medium leading-[32px] md:max-w-[248px] xl:max-w-[304px] xl:text-[32px] xl:leading-[40px] 4xl:max-w-[383px]">
          We balance business objectives with customer needs
        </div>
      </div>
      <AnimatedGroup className="grid w-full gap-x-6 gap-y-10 md:col-span-5 md:flex md:justify-between xl:col-span-8 xl:flex xl:space-x-[112px]">
        {items.map((item, index1) => (
          <div key={index1} className="last:min-w-[200px]">
            <Animated
              delay={100 * index1}
              className="mb-6 flex text-body-heading-s uppercase"
            >
              <span className="shrink-0 rounded-full border border-checkbox-light bg-dim-gray px-[10px] py-[4px] font-inter tracking-[0.02em] text-black">
                {item.title}
              </span>
            </Animated>
            <div className="grid gap-3 px-1 xl:gap-4">
              {item.categories.map((category, index2) => (
                <Animated
                  delay={100 * (index1 + index2)}
                  key={index2}
                  className="font-inter text-[16px] leading-[160%] xl:text-[18px]"
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
