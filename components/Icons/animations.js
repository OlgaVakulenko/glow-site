import cx from 'clsx';
import { useEffect, useState } from 'react';

export const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

export const circleProps = (options) => {
  const { isMounted, isReady = true } = options || {};

  const isActive = isMounted && isReady;

  const delay = options?.delay || 0;

  return {
    className: cx('svg-circle', isActive && 'active'),
    style: {
      '--anim-delay': delay,
    },
  };
};

export const lineProps = (options = {}) => {
  const {
    isReady = true,
    array = 200,
    offset = 200 * 1.25,
    to = 200 * 2,
    duration = '2s',
    delay = 0,
  } = options;

  return {
    className: cx('svg-line-anim', isReady && 'ready'),
    style: {
      '--dash-array': array,
      '--dash-offset': offset,
      '--dash-to': to,
      '--anim-delay': delay,
      '--anim-duration': duration,
    },
  };
};
