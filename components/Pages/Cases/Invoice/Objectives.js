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
      <div className="mb-3 opacity-30 md:mb-10">{title}</div>
      <div className="md:grid md:gap-3">
        {items.map((item, index) => (
          <Animated delay={index * 50} key={index} className="flex min-h-[48px] items-center">
            {item}
          </Animated>
        ))}
      </div>
    </div>
  );
}

const cols = [
  {
    title: 'User Experience',
    items: [
      'UX Audit',
      'Research',
      'Wireframe',
      'Prototype',
      'UI/UX Design',
      'Prototype',
    ],
  },
  {
    title: 'Visual Design',
    items: ['Art Direction', 'Visual Identity', 'Motion Design'],
  },
  {
    title: 'User Experience',
    items: ['Product Identity System', 'Naming', 'Logo', 'Motion Design'],
  },
];

export default function Objectives() {
  return (
    <Layout>
      <div className="py-[96px] md:py-[100px] xl:py-[150px]">
        <Animated className="mb-[38px] font-satoshi text-[28px] font-medium leading-[36px] md:mb-[96px] md:text-[48px] md:leading-[56px] xl:mb-[64px] xl:text-[56px] xl:leading-[64px]">
          We balance business <br className="hidden md:block" /> objectives with
          customer needs
        </Animated>
        <div className="grid grid-cols-4 gap-x-4 gap-y-[38px] md:grid-cols-8 xl:grid-cols-12">
          {cols.map((col, index) => (
            <Col
              className="col-span-2 last:col-span-4 md:col-span-2 md:last:col-span-2 xl:col-span-3 xl:last:col-span-3"
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
