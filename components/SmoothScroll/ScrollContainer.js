import { useCallback, useEffect, useRef, useState } from 'react';
import gsap, { ScrollSmoother, ScrollTrigger } from '../../dist/gsap';
// import gsap from 'gsap';
// import ScrollSmoother from '../../dist/ScrollSmoother';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import { useSetAtom } from 'jotai';
import { smoothScrollAtom } from '../../atoms/scroll';
import { atom } from 'jotai';
import { useRouter } from 'next/router';

// gsap.registerPlugin(ScrollSmoother);

export const ScrollSmootherMounted = atom(false);

export default function ScrollContainer({ children }) {
  const router = useRouter();
  const [isTransition, setIsTransition] = useState(false);
  const setMounted = useSetAtom(ScrollSmootherMounted);
  const updateScrollPosition = useSetAtom(smoothScrollAtom);
  const viewportRef = useRef(null);
  const ref = useRef(null);
  const smootherRef = useRef(null);

  useEffect(() => {
    const onStart = (e) => {
      console.log(...arguments);
      setIsTransition(true);
    };
    const onEnd = (e) => {
      console.log(e);
      setIsTransition(false);
    };

    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onEnd);

    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onEnd);
    };
  }, [router.events]);

  useEffect(() => {
    // if (isTransition) {
    //   return;
    // }

    smootherRef.current = new ScrollSmoother({
      wrapper: viewportRef.current,
      content: ref.current,
      effects: true,
      smoothTouch: 0.1,
      onUpdate: throttle((e) => {
        const scrollTop = Math.round(Math.abs(e.scrollTop()));
        updateScrollPosition(scrollTop);
      }, 100),
      onRefresh: (e) => {
        console.log('refresh smoother');
      },
    });

    setMounted(true);

    return () => {
      setMounted(false);
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
      // smoother.kill();
    };
  }, [updateScrollPosition, setMounted]);

  //scrolltrigger does not sometimes refresh when scrollsmoother is enabled
  useEffect(() => {
    if ('MutationObserver' in window) {
      let height = 0;
      const handleChange = debounce(() => {
        const newHeight = document.body.style.height;
        if (height !== newHeight) {
          ScrollTrigger.refresh();
          console.log('static refresh');
        }
        height = newHeight;
      }, 100);

      const mo = new MutationObserver(handleChange);

      mo.observe(document.body, {
        attributeFilter: ['style'],
        attributes: true,
        childList: false,
        subtree: false,
      });

      return () => {
        mo.disconnect();
      };
    }
  }, []);

  return (
    <div ref={viewportRef}>
      <div ref={ref}>{children}</div>
    </div>
  );
}
