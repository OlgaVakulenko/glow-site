import React, { useContext, useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { useRouter } from 'next/router';
import InViewport from './InViewport';

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

if (isClient) {
  // console.log('FIRST CODE CHECK', performance.now() - window.__t0);
  window.__app_mounted = true;
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

let run = false;

export function AnimatedFix() {
  const router = useRouter();

  useEffect(() => {
    const onComplete = () => {
      document.documentElement.classList.remove('ready');
    };

    router.events.on('routeChangeStart', onComplete);

    return () => {
      router.events.off('routeChangeStart', onComplete);
    };
  }, [router.events]);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          setTimeout(function() {
            document.documentElement.classList.add("ready");
          }, 20000);
      `,
      }}
    />
  );
}

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
      <AnimatedContext.Provider
        value={{
          inViewport: isInViewport,
        }}
      >
        {children}
      </AnimatedContext.Provider>
    </InViewport>
  );
}

export default function Animated({
  as = 'div',
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
  const onViewChangeRef = useRef(null);
  onViewChangeRef.current = onViewChange;
  const delayRef = useRef(0);
  delayRef.current = delay;
  const [inViewport, setInViewport] = useState(false);
  const Component = as;
  const enabled = true;

  useEffect(() => {
    if (groupCtx !== null) {
      return;
    }

    if (!run) {
      run = true;
    }
    if (immediate) {
      if (delayRef.current > 0) {
        setTimeout(() => {
          setInViewport(true);
          if (onViewChangeRef.current) {
            onViewChangeRef.current(true);
          }
        }, delayRef.current);
      } else {
        setInViewport(true);
        if (onViewChangeRef.current) {
          onViewChangeRef.current(true);
        }
      }
      return;
    }

    if (ref.current) {
      return onInView(ref.current, () => {
        if (delayRef.current > 0) {
          setTimeout(() => {
            setInViewport(true);
            if (onViewChangeRef.current) {
              onViewChangeRef.current(true);
            }
          }, delayRef.current);
        } else {
          setInViewport(true);
          if (onViewChangeRef.current) {
            onViewChangeRef.current(true);
          }
        }
      });
    }
  }, [immediate, groupCtx]);

  useEffect(() => {
    if (groupCtx === null) {
      return;
    }

    const delay = delayRef.current;
    const update = () => {
      setInViewport(groupCtx.inViewport);
    };

    if (delay === 0) {
      update();
    } else {
      setTimeout(update, delay);
    }
  }, [groupCtx]);

  let _inViewport = inViewport;

  return (
    <Component
      ref={ref}
      {...rest}
      className={cx(className, animate, 'to-animate', {
        immediate: immediate,
        'in-viewport': isClient
          ? window?.__mobile_in_viewport || _inViewport
          : _inViewport,
      })}
    >
      {children}
    </Component>
  );
}
