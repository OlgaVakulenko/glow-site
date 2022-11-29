import { useEffect, useRef, useState } from 'react';

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
          console.log(callbackRef.current);
          callbackRef.current(isIntersecting);
        }
        // setIsInView(isIntersecting);
      });

      io.observe(ref.current);

      return () => {
        io.disconnect();
      };
    }
  }, [ref]);

  // return isInView;
};
