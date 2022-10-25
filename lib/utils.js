import { useEffect } from 'react';

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
