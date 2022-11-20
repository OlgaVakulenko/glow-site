import { atom } from 'jotai';

export const nativeScrollAtom = atom(0);
export const smoothScrollAtom = atom(null);

export const scrollAtom = atom((get) => {
  if (get(smoothScrollAtom) !== null) {
    return get(smoothScrollAtom);
  }

  return get(nativeScrollAtom);
});
