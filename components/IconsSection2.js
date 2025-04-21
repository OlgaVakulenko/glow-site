import { useState } from "react";
import Animated from "./Animated";
import Layout from "./Layout";
import cx from 'clsx';


export default function IconsSection2({ items, sectionClasses, blockClasses, iconClasses, titleClasses }) {
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