import { useState, useMemo, useRef } from 'react';
import cx from 'clsx';
import { useMediaAtom } from '../lib/agent';
import Animated from './Animated';

export default function GraphicBlock({ items, className, blockClassNames, descriptionClassNames, titleClassNames }) {
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
    <div className={cx('grid gap-14 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-20', className)}>
      {items.map((item, index) => {
        const columnIndex = index % postsInColumnCount;
        const delay = (columnIndex + 1) * 50;

        return (
          <Animated
            key={index}
            className={blockClassNames}
            delay={delay}
            onViewChange={(isVisible) => handleViewChange(index, isVisible)}
          >
            <div className="mb-[38px] h-20 w-20 md:mb-[40px]">
              <item.icon isReady={map[index]} />
            </div>
            <div className={cx('mb-[14px] text-next-heading-6 md:mb-4 md:leading-[28px] xl:text-next-heading-6', titleClassNames)}>
              {item.title}
            </div>
            <div className={cx('text-next-body-m md:leading-6 md:tracking-normal', descriptionClassNames)}>
              {item.description}
            </div>
          </Animated>
        );
      })}
    </div>
  );
}
