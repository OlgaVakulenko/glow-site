import cx from 'clsx';
import { useEffect, useRef, useState } from 'react';

function Line({ children, className = '' }) {
  return (
    <div
      className={
        'min-w-full flex-shrink-0 flex-grow-0 basis-auto' + ' ' + className
      }
    >
      {children}
    </div>
  );
}

const useSafeEffect = (cb, deps) => {
  useEffect(() => {
    try {
      return cb();
    } catch (e) {
      console.log(e);
    }
  }, deps);
};

export default function Marquee({ children, debug = false }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const refId = useRef(null);
  const refPrevTime = useRef(null);

  useSafeEffect(() => {
    if (!inView) return;

    const animate = (time) => {
      if (ref.current) {
        const delta = time - refPrevTime.current;
        const scrollBy = Math.round(delta * 0.1);

        let scrollLeft = ref.current.scrollLeft + scrollBy;

        if (scrollLeft + ref.current.clientWidth >= ref.current.scrollWidth) {
          scrollLeft = 0;
        }

        ref.current.scrollLeft = scrollLeft;
      }

      refId.current = requestAnimationFrame(animate);
      refPrevTime.current = time;
    };

    requestAnimationFrame(animate);

    return () => {
      // console.log('cancel animation frame');
      cancelAnimationFrame(refId.current);
    };
  }, [inView]);

  // console.log(refPrevTime.current);

  return (
    <div className="overflow-hidden">
      <div
        ref={ref}
        className="box-content flex overflow-hidden whitespace-nowrap"
      >
        <Line>{children}</Line>
        <Line
          className={cx({
            ['border border-red-500']: debug,
          })}
        >
          {children}
        </Line>
      </div>
    </div>
  );
}
