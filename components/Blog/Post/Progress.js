import cx from 'clsx';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import gsap from '../../../dist/gsap';
import { progressAtom, progressNodeYAtom } from '../PostPage';

export default function Progress({ minutes }) {
  const rootRef = useRef();
  const handleRef = useRef();
  const thumbRef = useRef();
  const [progress] = useAtom(progressAtom);
  const setProgressNodeY = useSetAtom(progressNodeYAtom);

  useEffect(() => {
    const p = Math.max(0, Math.min(100, progress));

    const ctx = gsap.context(() => {
      gsap.to(handleRef.current, {
        width: p + '%',
        duration: 0.5,
      });
      gsap.to(thumbRef.current, {
        left: p + '%',
        duration: 0.5,
      });
    });

    return () => {
      ctx.clear();
    };
  }, [progress]);

  useEffect(() => {
    const rect = rootRef.current.getBoundingClientRect();

    setProgressNodeY(rect.y);
  }, [setProgressNodeY]);

  return (
    <div ref={rootRef} className="progress-node mb-9">
      <div className="relative">
        <div className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-lred"></div>
        <div
          ref={handleRef}
          className={cx(
            'absolute top-1/2 left-0 h-[1px] -translate-y-1/2 bg-brand'
          )}
        ></div>
        <div
          ref={thumbRef}
          className={cx(
            'absolute top-1/2 left-0 flex h-[17px] w-[17px] -translate-y-1/2 -translate-x-1/2 items-center justify-center bg-white'
          )}
        >
          <div className="h-[9px] w-[9px] rounded-full bg-brand"></div>
        </div>
      </div>
      <div className="pt-[11px] text-center text-sm leading-[27px] opacity-50">
        {minutes}
      </div>
    </div>
  );
}
