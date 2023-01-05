import { useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import css from './legacy.module.scss';

export default function LegacyCaseContainer({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    // return;
    const node = ref.current;
    if (!node) return;

    const elements = Array.from(node.querySelectorAll('.wow'));
    if (!'IntersectionObserver' in window) {
      elements.forEach((element) => {
        element.classList.add('in-viewport');
      });

      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewport');
          io.unobserve(entry.target);
        }
      });
    });

    elements.forEach((element) => {
      io.observe(element);
    });

    return () => {
      io.disconnect();
    };
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div ref={ref} className={cx(css.legacyRoot)}>
      {children}
    </div>
  );
}
