import { useEffect, useMemo, useRef, useState } from 'react';
import { useLayoutSsrEffect } from '../lib/utils';

export default function InViewport({
  as = 'div',
  children,
  onViewChange,
  ...props
}) {
  const ref = useRef();
  const [inViewport, setInViewport] = useState(false);
  const onViewChangeRef = useRef(onViewChange);

  useLayoutSsrEffect(() => {
    onViewChangeRef.current = onViewChange;
  }, [onViewChange]);

  useEffect(() => {
    if (!'IntersectionObserver' in window) {
      return;
    }

    if (!ref.current) {
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInViewport(entry.isIntersecting);
        if (onViewChangeRef.current) {
          onViewChangeRef.current(entry.isIntersecting);
        }
      });
    });

    io.observe(ref.current);

    return () => {
      io.disconnect();
    };
  }, []);

  const childrenComponent = useMemo(() => {
    return typeof children === 'function' ? children : () => children;
  }, [children]);

  const Component = useMemo(() => {
    return as;
  }, [as]);

  return (
    <Component ref={ref} {...props}>
      {childrenComponent(inViewport)}
    </Component>
  );
}
