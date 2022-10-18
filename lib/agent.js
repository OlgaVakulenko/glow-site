import { atom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

export const mediaAtom = atom('mobile');

const queries = [
  { id: 'tablet', query: '(min-width: 793px)' },
  { id: 'desktop', query: '(min-width: 1100px)' },
];

export const useMedia = () => {
  const set = useSetAtom(mediaAtom);

  useEffect(() => {
    const onResize = () => {
      //bug
      const { id = 'mobile' } =
        queries.find(({ query }) => {
          let res = window.matchMedia(query).matches;
          console.log(query, res);
          return res;
        }) || {};
      console.log(id);
      set(id);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [set]);
};
