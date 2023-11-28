import throttle from 'lodash.throttle';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import gsap, { ScrollTrigger } from '../dist/gsap';
// import Bowser from 'bowser';
import { useSetAtom } from 'jotai';
import { openAtom } from '../components/Header';
import { useMediaAtom } from './agent';
import debounce from 'lodash.debounce';

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

export function useIsInView(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    if (!'IntersectionObserver' in window) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
      });
    });

    io.observe(ref.current);

    return () => {
      io.disconnect();
    };
  }, [ref]);

  return inView;
}

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

// let parser;
// if (isClient) {
//   parser = Bowser.getParser(window.navigator.userAgent);
// }

// export const isBrowser = (browser) => {
//   if (!isClient) return true;
//   return parser.getBrowser()?.name === browser;
// };

// export const useIsBrowser = (browser, version) => {
//   const isClient = useIsClient();
//   const satisfies = useMemo(() => {
//     if (!isClient) return true;

//     return parser.satisfies({
//       [browser]: version,
//     });
//   }, [isClient, browser, version]);

//   return satisfies;
// };

let scrollbarInit = false;
export const setScrollbarWidth = () => {
  if (scrollbarInit) return;

  const div = document.createElement('div');
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.appendChild(div);

  const width = div.offsetWidth - div.clientWidth;
  console.log(width);

  document.body.removeChild(div);

  scrollbarInit = true;
};

const idleCallback = (cb) => {
  if (window?.requestIdleCallback) {
    const n = window.requestIdleCallback(cb);

    return () => window.cancelIdleCallback(n);
  }

  if (window?.requestAnimationFrame) {
    const n = window.requestAnimationFrame(cb);

    return () => window.cancelAnimationFrame(n);
  }

  const n = setTimeout(cb, 0);

  return () => clearTimeout(n);
};

let t0 = null;
export default function useIdle() {
  console.log('needle.isIdle first render');
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    return idleCallback(() => setIsIdle(true));
  }, []);

  useEffect(() => {
    if (isIdle) {
      //second render
      console.log('needle.isIdle second render', window.performance.now() - t0);
    } else {
      t0 = window.performance.now();
      //first render
    }
  }, [isIdle]);

  return isIdle;
}

export function getAbsoluteUrl() {
  if (isClient) {
    return window.location.href;
  }

  return '';
}

export function useHandleFooterFormClick() {
  const media = useMediaAtom();
  const setIsOpen = useSetAtom(openAtom);
  const handleFooterFormClick = useCallback(
    (e) => {
      e?.preventDefault();

      setIsOpen(false);
      const offset = {
        mobile: 16,
        tablet: 16,
        desktop: 56,
      };

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: '#footer',
          offsetY: offset[media] || 0,
        },
      });
    },
    [setIsOpen, media]
  );

  return handleFooterFormClick;
}

export function useInnerWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 250);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

export function useRem() {
  const rem = useCallback((px) => {
    return px / 16 + 'rem';
  }, []);

  return rem;
}

export function useRefValue(value) {
  const ref = useRef(value);

  useLayoutEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}
