import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { range } from '../../../lib/utils';
import cx from 'clsx';

export default function SliderProgress() {
  const [ready, setReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiper = useSwiper();

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    const onChange = (event) => {
      setActiveIndex(event.activeIndex);
    };

    swiper.on('activeIndexChange', onChange);

    return () => {
      swiper.off('activeIndexChange', onChange);
    };
  }, [swiper]);

  const l = swiper.slides.length;

  return (
    <div className="mt-10 flex justify-center">
      {range(l).map((slide) => (
        <div
          key={slide}
          className={cx(
            'mr-2 h-[2px] w-[30px] bg-black transition-colors duration-500',
            {
              '!bg-brand': activeIndex === slide,
            }
          )}
        ></div>
      ))}
    </div>
  );
}
