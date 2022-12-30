import { useEffect, useRef } from 'react';
import gsap, { ScrollTrigger } from '../dist/gsap';
import cx from 'clsx';

export default function DimSection({ className, children }) {
  const ref = useRef(null);
  console.log('RENDER!!!');
  useEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.fromTo(
        ref.current,
        {
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 90%',
            end: '+=300',
            scrub: true,
          },
          opacity: 1,
          ease: 'none',
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={ref} className={cx('bg-dim', className)}>
      {children}
    </div>
  );
}
