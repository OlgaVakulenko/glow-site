import { useEffect, useRef } from 'react';
import css from './legacy.module.scss';

export default function LegacyCaseContainer({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    return;
    const node = ref.current;
    if (!node) return;

    const elements = Array.from(node.querySelectorAll('.wow'));
    elements.forEach((element) => {
      element.style.visibility = 'visible';
    });
  }, []);

  return (
    <div ref={ref} className={css.legacyRoot}>
      {children}
    </div>
  );
}
