import { useAtom } from 'jotai';
import { atom, useSetAtom } from 'jotai';
import { useEffect, useMemo, useState } from 'react';

export const mediaAtom = atom('mobile');

export const queries = [
  { id: 'mobile', query: '(max-width: 819px)' },
  { id: 'tablet', query: '(min-width: 820px) and (max-width: 1279px)' },
  { id: 'desktop', query: '(min-width: 1280px)' },
];

export const useMediaAtom = () => {
  const [media] = useAtom(mediaAtom);

  return media;
};

export const useMediaAtomClient = () => {
  const media = useMediaAtom();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? media : null;
};

export const useMedia = () => {
  const set = useSetAtom(mediaAtom);

  useEffect(() => {
    const mediaQueries = queries.map((q) => {
      return window.matchMedia(q.query);
    });

    const onChange = (e) => {
      if (e.matches) {
        const q = queries.find((q) => q.query === e.media);
        if (!q) {
          console.error(e);
          return;
        }
        set(q.id);
      }
    };

    mediaQueries.forEach((q) => {
      try {
        if (q.matches) {
          const { id } = queries.find((query) => {
            let r = query.query === q.media;
            return r;
          });

          set(id);
        }
        q.addEventListener('change', onChange);
      } catch (e) {
        q.addListener(onChange);
        console.error(e);
      }
    });

    return () => {
      mediaQueries.forEach((q) => {
        try {
          q.removeEventListener('change', onChange);
        } catch (e) {
          q.removeListener(onChange);
        }
      });
    };
  }, [set]);
};
