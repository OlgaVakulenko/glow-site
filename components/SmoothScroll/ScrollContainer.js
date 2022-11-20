import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollSmoother from '../../dist/ScrollSmoother';
import throttle from 'lodash.throttle';
import { useSetAtom } from 'jotai';
import { smoothScrollAtom } from '../../atoms/scroll';
import { atom } from 'jotai';

gsap.registerPlugin(ScrollSmoother);

export const ScrollSmootherMounted = atom(false);

export default function ScrollContainer({ children }) {
  const setMounted = useSetAtom(ScrollSmootherMounted);
  const updateScrollPosition = useSetAtom(smoothScrollAtom);
  const viewportRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    // setMounted(true);
    // return;
    // return;
    const smoother = new ScrollSmoother({
      wrapper: viewportRef.current,
      content: ref.current,
      effects: true,
      onUpdate: throttle((e) => {
        const scrollTop = Math.round(Math.abs(e.scrollTop()));
        updateScrollPosition(scrollTop);
      }, 100),
    });

    setMounted(true);

    return () => {
      setMounted(false);
      smoother.kill();
    };
  }, [updateScrollPosition, setMounted]);

  return (
    <div ref={viewportRef}>
      <div ref={ref}>{children}</div>
    </div>
  );
}
