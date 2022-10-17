import { useEffect } from 'react';

function scrollbarVisible(element) {
  return element.scrollHeight > element.clientHeight;
}

export default function usePreventScroll(doPrevent = false) {
  useEffect(() => {
    if (scrollbarVisible(document.documentElement)) {
      document.documentElement.classList.toggle('lock-fixed-scroll', doPrevent);
      return () => {
        document.documentElement.classList.toggle(
          'lock-fixed-scroll',
          !doPrevent
        );
      };
    } else {
      document.body.classList.toggle('lock-scroll', doPrevent);
      return () => {
        document.body.classList.toggle('lock-scroll', !doPrevent);
      };
    }
  }, [doPrevent]);
}
