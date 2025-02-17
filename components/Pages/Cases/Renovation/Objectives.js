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
    title: 'Investigate',
    items: ['Research', 'CJM', 'Application Map', 'Wireframes'],
  },
  {
    title: 'Visual Design',
    items: ['UI Design', 'Icons and Illustrations', 'UI Kit'],
  },
];

export default function Objectives({wr = false}) {
  return (
    <Layout>
      <div className="py-[72px] md:py-[96px] xl:py-[150px]">
        <Animated className="mb-[38px] font-satoshi text-[32px] font-medium leading-[40px] tracking-[-0.01em] md:mb-[64px] md:text-[48px] md:leading-[64px] xl:text-[56px] xl:leading-[72px]">
          We developed an app for a
          <br className="hidden md:block" /> Los Angeles-based renovation
          company
        </Animated>
        <div className={cx("xl:gax-x-4 flex gap-x-[85px] gap-y-[38px] xs:grid xs:grid-cols-7 md:grid-cols-5 md:gap-x-[80px] md-safe:grid-cols-6 xl:grid-cols-12", {"max-xs:gap-x-[50px]": wr })  }>
          {cols.map((col, index) => (
            <Col
              className={cx("col-span-2 font-normal  last:col-span-4 md:col-span-2 md:last:col-span-2 xl:col-span-3 xl:last:col-span-3", {"max-xs:flex-1": wr })}
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
