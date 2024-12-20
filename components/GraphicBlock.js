import { useState, useMemo, useRef } from 'react';
import cx from 'clsx';
import { useMediaAtom } from '../lib/agent';
import Animated from './Animated';

export default function GraphicBlock({
  items,
  className,
  blockClassNames,
  descriptionClassNames,
  titleClassNames,
  columnNumber,
  cardView,
  trial,
}) {
  const [map, setMap] = useState({});
  const media = useMediaAtom();
  const mapRef = useRef({});

  const postsInColumnCount = useMemo(() => {
    switch (media) {
      case 'desktop':
        return 3;
      case 'tablet':
        return 2;
      case 'mobile':
        return 1;
      default:
        return 1;
    }
  }, [media]);

  const handleViewChange = (index, isVisible) => {
    if (mapRef.current[index] !== isVisible) {
      mapRef.current[index] = isVisible;
      setMap({ ...mapRef.current });
    }
  };

  return (
    <div
      className={cx(
        `grid gap-14 md:grid-cols-${columnNumber?.md || 2} xl:grid-cols-${
          columnNumber?.xl || 3
        } xl:gap-y-20`,
        className
      )}
    >
      {items.map((item, index) => {
        const columnIndex = index % postsInColumnCount;
        const delay = (columnIndex + 1) * 50;

        return (
          <Animated
            key={index}
            className={cx(blockClassNames, {
              'rounded-[32px] bg-dim-gray p-6': cardView,
            })}
            delay={delay}
            onViewChange={(isVisible) => handleViewChange(index, isVisible)}
          >
            <div className={cx("h-20 w-20 md:mb-[40px]", {"mb-[38px]" :!trial, "mb-[40px]": trial} )}>
              <item.icon isReady={map[index]} />
            </div>
            <h3
              className={cx(
                'text-next-heading-6 md:mb-4 md:leading-[28px] xl:text-next-heading-6', {"mb-[14px]": !trial, "mb-[16px]": trial},
                titleClassNames
              )}
            >
              {item.title}
            </h3>
            <div
              className={cx(
                'md:leading-6 md:tracking-normal',
                {"md:text-[16px] xl:text-next-body-m font-normal xl:leading-[28px] md:font-normal": trial},
                {"text-next-body-m": !trial},
                descriptionClassNames
              )}
            >
              {item.description}
            </div>
          </Animated>
        );
      })}
    </div>
  );
}
