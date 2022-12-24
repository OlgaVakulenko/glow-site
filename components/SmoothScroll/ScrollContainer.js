import { useCallback, useEffect, useRef, useState } from 'react';
import gsap, { ScrollSmoother, ScrollTrigger } from '../../dist/gsap';
import Link from 'next/link';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import { useSetAtom } from 'jotai';
import { smoothScrollAtom } from '../../atoms/scroll';
import { atom } from 'jotai';
import { useRouter } from 'next/router';

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
    smootherRef.current = new ScrollSmoother({
      wrapper: viewportRef.current,
      content: ref.current,
      effects: true,
      smoothTouch: 0.1,
      onUpdate: throttle((e) => {
        const scrollTop = Math.round(Math.abs(e.scrollTop()));
        updateScrollPosition(scrollTop);
      }, 100),
    });

    setMounted(true);

    return () => {
      setMounted(false);
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
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

  // const defaultPropsRef = useRef(Link.defaultProps);
  // const hasRun = useRef(false);
  // if (!hasRun.current) {
  //   Link.defaultProps = { ...Link.defaultProps, scroll: false };
  //   hasRun.current = true;
  // }

  // useEffect(() => {
  //   const defaultProps = defaultPropsRef.current;

  //   return () => {
  //     Link.defaultProps = defaultProps;
  //   };
  // }, []);

  useEffect(() => {
    window.__scrollTo = (...args) => {
      console.log('$scrollTo call');
      smootherRef.current.scrollTo(args);
    };

    return () => {
      window.__scrollTo = undefined;
    };
    return;
    const scrollTo = window.scrollTo;
    window.scrollTo = function (...args) {
      console.log('native function call', this.caller);
      if (typeof args[0] === 'number' && typeof args[1] === 'number') {
        //x, y options
        smootherRef.current.scrollTo(args[1]);
        return;
      } else {
        if (typeof args[0] === 'object') {
          const { top = 0 } = args;
          smootherRef.current.scrollTo(top);
        }
        return;
      }

      //call native function with invalid arguments to trigger appropriate error
      return scrollTo(args);
    };

    return () => {
      window.scrollTo = scrollTo;
    };
  }, []);
  // const scrollPositions = useRef([]);
  // const
  useEffect(() => {
    return;
    let scrollTo = 0;
    // const onStart = () => {
    //   // scrollPositions.current.push(window.scrollY);
    //   // setScrollPositions((sc) => [...sc, window.scrollY]);
    // };

    const onComplete = () => {
      if (smootherRef.current) {
        smootherRef.current.scrollTo(scrollTo);
        scrollTo = 0;
      }
    };

    // router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onComplete);

    // router.beforePopState((obj) => {
    //   if (obj.as !== router.asPath) {
    //     scrollTo = scrollPositions.current[scrollPositions.current.length - 1];
    //     scrollPositions.current.pop();
    //   }

    //   return true;
    // });

    return () => {
      // router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onComplete);
      // router.beforePopState(() => true);
    };
  }, [router.events]);

  return (
    <div ref={viewportRef}>
      <div ref={ref}>{children}</div>
    </div>
  );
}
