import Layout from '../../../Layout';
import cx from 'clsx';
import Animated from '../../../Animated';

function Col({ className, title, items = [] }) {
  return (
    <div
      className={cx(
        className,
        'text-base leading-[160%] md:text-xl md:leading-[150%]'
      )}
    >
      <div className="mb-3 opacity-30 md:mb-10 text-[#FFFFFF90]">{title}</div>
      <div className="md:grid md:gap-3 text-white">
        {items.map((item, index) => (
          <Animated
            delay={index * 50}
            key={index}
            className="flex min-h-[48px] items-center"
          >
            {item}
          </Animated>
        ))}
      </div>
    </div>
  );
}

const cols = [
  {
    title: 'User Experience ',
    items: ['UX Audit', 'Research', 'Wireframe', 'Prototype', "UI/UX Design", 'App Design'],
  },
  {
    title: 'Visual Design',
    items: ['Art Direction', 'Visual Identity', 'Motion Design'],
  },
  {
    title: 'Digital Branding',
    items: ['Product Identity System', 'Naming', 'Logo', 'Motion Design'],
  },
];

export default function Objectives() {
  return (
    <Layout>
      <div className="py-[50px] md:py-[72px] xl:py-[88px]">
        <Animated className="mb-10 text-white font-satoshi text-[28px] font-medium leading-[36px] md:tracking-[-2px] md:mb-[64px] md:text-[48px] md:leading-[64px] xl:text-[56px]">
          We balance business
          <br className="hidden md:block" /> objectives with customer needs
        </Animated>
        <div className=" flex gap-x-[60px] xs:gap-x-[85px] flex-wrap gap-y-[40px] xs:grid xs:grid-cols-4 md:grid-cols-6 md:gap-x-[0px] xl:gap-x-[40px] md-safe:grid-cols-7.5 xl:grid-cols-12">
          {cols.map((col, index) => (
            <Col
              className="col-span-2 font-normal last:col-span-4 md:col-span-2 md:last:col-span-2 xl:col-span-3 xl:last:col-span-3"
              key={index}
              title={col.title}
              items={col.items}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
