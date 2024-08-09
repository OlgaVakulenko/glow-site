import { useState } from 'react';
import cx from 'clsx';
import Layout from './Layout';
import Animated from './Animated';

export default function IconsSection({ items, sectionClasses, blockClasses, iconClasses, titleClasses }) {
  const [map, setMap] = useState();

  return (
      <Layout>
        <div className={cx(sectionClasses)}>
          {items.map((item, index) => (
            <Animated
              key={index}
              className={cx("flex items-center", blockClasses)}
              delay={300 * index}
              onViewChange={(isVisible) => {
                setMap((c) => ({
                  ...c,
                  [index]: isVisible,
                }));
              }}
            >
              <div className={iconClasses}>
                <item.icon isReady={map?.[index]}></item.icon>
              </div>
              <div>
                <div className={titleClasses}>
                  {item.title}
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </Layout>
  );
}