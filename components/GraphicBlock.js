import { useState } from 'react';
import cx from 'clsx';
import Animated from './Animated';

export default function GraphicBlock({ items, className, blockClassNames, descriptionClassNames, titleClassNames }) {
	const [map, setMap] = useState();

  return (
    <div className={cx('grid gap-14 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-20', className)}>
      {items.map((item, index) => (
				<Animated
				key={index}
				className={blockClassNames}
				delay={300 * index}
				onViewChange={(isVisible) => {
					setMap((c) => ({
						...c,
						[index]: isVisible,
					}));
				}}
			>
				<div className="mb-[38px] h-20 w-20 md:mb-[40px]">
				<item.icon isReady={map?.[index]}></item.icon>
        </div>
        <div className={cx('mb-[14px] text-next-heading-6 md:mb-4 md:leading-[28px] xl:text-next-heading-6', titleClassNames)}>
          {item.title}
        </div>
        <div className={cx('text-next-body-m md:leading-6 md:tracking-normal', descriptionClassNames)}>
          {item.description}
        </div>
      </Animated>
        ))}
    </div>
  );
}