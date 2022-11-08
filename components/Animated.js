import { useEffect, useRef, useState } from 'react';
import cx from 'clsx';

const globalOn = false;

const isClient = typeof window !== 'undefined';

let queue = [];
const io =
  isClient && 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          queue = queue.filter((row) => {
            if (entry.target === row.el) {
              row.cb && row.cb();
              io.unobserve(row.el);
              return false;
            }

            return true;
          });
        });
      })
    : null;

if (isClient) {
  document.documentElement.classList.add('y');
}

const onInView = (el, cb) => {
  if (io) {
    if (queue.find((r) => r.el === el)) {
      return;
    }
    queue.push({
      el,
      cb,
    });
    io.observe(el);

    return () => {
      io.unobserve(el);
      queue = queue.filter((r) => r.el !== el);
    };
  } else {
    cb();
  }
};

export default function Animated({
  as = 'div',
  className,
  animate = 'fade-up',
  children,
  delay = 0,
  ...rest
}) {
  const ref = useRef(null);
  const delayRef = useRef(0);
  delayRef.current = delay;
  const [inViewport, setInViewport] = useState(false);
  const Component = as;
  const enabled = isClient ? window.location.search.indexOf('a=') >= 0 : true;

  useEffect(() => {
    if (!enabled) {
      return;
    }
    if (ref.current) {
      return onInView(ref.current, () => {
        if (delayRef.current > 0) {
          setTimeout(() => {
            setInViewport(true);
          }, delayRef.current);
        } else {
          setInViewport(true);
        }
      });
    }
  }, []);

  return (
    <Component
      ref={ref}
      {...rest}
      className={cx(className, animate, 'to-animate', {
        'in-viewport': inViewport,
      })}
    >
      {children}
    </Component>
  );
}
