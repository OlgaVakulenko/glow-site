import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function Line({ children, className = '' }) {
  return (
    <div className={'inline-block w-full border' + ' ' + className}>
      {children}
    </div>
  );
}

const useIsInViewport = (ref) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (ref.current) {
      if (!'IntersectionObserver' in window) {
        setIsInView(true);
        return;
      }
      const io = new IntersectionObserver(([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsInView(isIntersecting);
      });

      io.observe(ref.current);

      return () => {
        io.disconnect();
      };
    }
  }, [ref]);

  return isInView;
};

export default function Marquee({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const refId = useRef(null);
  const refPrevTime = useRef(null);

  useEffect(() => {
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
      console.log('cancel animation frame');
      cancelAnimationFrame(refId.current);
    };
  }, [inView]);

  // console.log(refPrevTime.current);

  return (
    <div className="overflow-hidden">
      <div ref={ref} className="box-content overflow-hidden whitespace-nowrap">
        <Line>{children}</Line>
        <Line className="border-red-500">{children}</Line>
      </div>
    </div>
  );
}
