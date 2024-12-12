import { useState } from 'react';
import cx from 'clsx';
import Layout from './Layout';
import Animated from './Animated';

export default function IconsSection({
  items,
  sectionClasses,
  blockClasses,
  iconClasses,
  titleClasses,
  cardView,
}) {
  const [map, setMap] = useState();

  return (
    <Layout>
      <div className={cx(sectionClasses)}>
        {items.map((item, index) => (
          <Animated
            key={index}
            className={cx('flex', blockClasses, {
              'rounded-[32px] bg-dim-gray p-6': cardView,
              'flex-col': item.description,
            })}
            delay={300 * index}
            onViewChange={(isVisible) => {
              setMap((c) => ({
                ...c,
                [index]: isVisible,
              }));
            }}
          >
            <div className="flex items-center">
              <div className={iconClasses}>
                <item.icon isReady={map?.[index]}></item.icon>
              </div>
              <div>
                <div className={titleClasses}>{item.title}</div>
              </div>
            </div>
            {item.description && (
              <p className="md:text-next-body-m">{item.description}</p>
            )}
          </Animated>
        ))}
      </div>
    </Layout>
  );
}
