import { atom } from 'jotai';

export const nativeScrollAtom = atom(0);
export const smoothScrollAtom = atom(null);

export const scrollAtom = atom((get) => {
  if (get(smoothScrollAtom) !== null) {
    return get(smoothScrollAtom);
  }

  return get(nativeScrollAtom);
});

export const scrollIsTopAtom = atom((get) => {
  const scrollTop = get(scrollAtom);
  return scrollTop < 100;
});

let prevScrollTop = 0;
export const scrollDirectionAtom = atom((get) => {
  const scrollTop = get(scrollAtom);
  const isForward = scrollTop > prevScrollTop;
  prevScrollTop = scrollTop;
  return isForward ? 'forward' : 'backward';
});
