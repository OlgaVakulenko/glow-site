import { atom, useSetAtom } from 'jotai';
import { useEffect, useMemo } from 'react';

export const mediaAtom = atom('mobile');

const queries = [
  { id: 'tablet', query: '(min-width: 1024px)' },
  { id: 'desktop', query: '(min-width: 1440px)' },
];

export const useMedia = () => {
  const set = useSetAtom(mediaAtom);

  useEffect(() => {
    const onResize = () => {
      //bug
      const { id = 'mobile' } =
        queries.find(({ query }) => {
          let res = window.matchMedia(query).matches;
          // console.log(query, res);
          return res;
        }) || {};
      set(id);
    };
    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [set]);
};

export const useSupports = (api, defaultValue = true) => {
  const isSupported = useMemo(() => {
    if (typeof window !== 'undefined') {
      return api in window;
    }

    return defaultValue;
  }, []);

  return isSupported;
};
