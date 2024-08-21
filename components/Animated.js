import React, { useContext, useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import InViewport from './InViewport';

const isClient = typeof window !== 'undefined';

const AnimatedContext = React.createContext(null);

export function AnimatedGroup({ children, ...rest }) {
  const [isInViewport, setIsInViewport] = useState(false);

  return (
    <InViewport
      {...rest}
      onViewChange={(inViewport) => {
        if (inViewport) {
          setIsInViewport(inViewport);
        }
      }}
    >
      <AnimatedContext.Provider value={{ inViewport: isInViewport }}>
        {children}
      </AnimatedContext.Provider>
    </InViewport>
  );
}

export default function Animated({
  as: Component = 'div',
  className,
  animate = 'fade-up',
  children,
  delay = 0,
  onViewChange = () => {},
  immediate = false,
  ...rest
}) {
  const groupCtx = useContext(AnimatedContext);
  const ref = useRef(null);
  const [inViewport, setInViewport] = useState(immediate);

  useEffect(() => {
    if (immediate) {
      setInViewport(true);
      onViewChange(true);
      return;
    }

    const handleInView = () => {
      if (delay > 0) {
        setTimeout(() => {
          setInViewport(true);
          onViewChange(true);
        }, delay);
      } else {
        setInViewport(true);
        onViewChange(true);
      }
    };

    if (groupCtx !== null) {
      if (groupCtx.inViewport) {
        setInViewport(true);
        onViewChange(true);
      }
    } else if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              handleInView();
              observer.unobserve(ref.current);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [immediate, groupCtx, delay, onViewChange]);

  return (
    <Component
      ref={ref}
      {...rest}
      className={cx(className, animate, 'to-animate', {
        immediate: immediate,
        'in-viewport': inViewport,
      })}
    >
      {children}
    </Component>
  );
}
