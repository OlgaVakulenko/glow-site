import throttle from 'lodash.throttle';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ScrollTrigger } from '../dist/gsap';
import Bowser from 'bowser';

export const isClient = typeof window !== 'undefined';

export const useLayoutSsrEffect = (cb, deps) => {
  const effect = isClient ? useLayoutEffect : useEffect;

  effect(cb, deps);
};

export const addLeadingZero = (number) => {
  if (number < 10) {
    return '0' + number;
  }

  return number;
};

export const useSafeEffect = (cb, deps) => {
  useEffect(() => {
    try {
      return cb();
    } catch (e) {
      console.error(e);
    }
  }, deps);
};

export const useBodyLock = () => {
  const lock = () => {
    document.body.classList.add('scroll-lock');
  };
  const release = () => {
    document.body.classList.remove('scroll-lock');
  };

  return {
    lock,
    release,
  };
};

export const useHeight = (ref, defaultHeight) => {
  const [height, setHeight] = useState(defaultHeight);

  useEffect(() => {
    const onResize = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [ref]);
};

export const useInView = (ref, callback) => {
  // const [isInView, setIsInView] = useState(false);
  const callbackRef = useRef(null);
  callbackRef.current = callback;

  useEffect(() => {
    if (ref.current) {
      if (!'IntersectionObserver' in window) {
        if (callbackRef.current) {
          callbackRef.current(isIntersecting);
        }
        return;
      }
      const io = new IntersectionObserver(([entry]) => {
        const isIntersecting = entry.isIntersecting;
        if (callbackRef.current) {
          callbackRef.current(isIntersecting);
        }
      });

      io.observe(ref.current);

      return () => {
        io.disconnect();
      };
    }
  }, [ref]);

  // return isInView;
};

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useLayoutSsrEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

export const useScrollDirection = (initialValue = 'forward') => {
  const [direction, setDirection] = useState(initialValue);
  useEffect(() => {
    let prevScrollTop = 0;
    const handleScroll = throttle(() => {
      const scrollTop = Math.round(window.scrollY);
      if (scrollTop === prevScrollTop) return;
      const isForward = scrollTop > 112 && scrollTop >= prevScrollTop;
      prevScrollTop = scrollTop;
      setDirection(isForward ? 'forward' : 'backward');
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return direction;
};

export const useMountedRef = (defaultValue) => {
  const [updated, setUpdated] = useState(0);
  const ref = useRef(defaultValue);
  const setter = useCallback((el) => {
    if (el !== ref.current) {
      ref.current = el;
      setUpdated((x) => x + 1);
    }
  }, []);

  return [ref, setter, updated];
};

export const createHeaderScrollTrigger = ({ ref, onEnter, onLeave }) => {
  return ScrollTrigger.create({
    trigger: ref.current,
    start: 'top top+=69',
    end: 'bottom top',
    refreshPriority: -10,
    onEnter,
    onLeave,
    onEnterBack: onEnter,
    onLeaveBack: onLeave,
  });
};

export const range = (n1, n2) => {
  let start = n1;
  let end = n2;
  if (n2 == null) {
    start = 0;
    end = n1;
  }

  const arr = [];
  for (let i = start; i < end; i++) {
    arr.push(i);
  }

  return arr;
};

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

let parser;
if (isClient) {
  parser = Bowser.getParser(window.navigator.userAgent);
}

export const isBrowser = (browser) => {
  if (!isClient) return true;
  return parser.getBrowser()?.name === browser;
};

export const useIsBrowser = (browser, version) => {
  const isClient = useIsClient();
  const satisfies = useMemo(() => {
    if (!isClient) return true;

    return parser.satisfies({
      [browser]: version,
    });
  }, [isClient, browser, version]);

  return satisfies;
};
