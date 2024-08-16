'use client';
import { atom, useSetAtom } from 'jotai';
import debounce from 'lodash.debounce';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ScrollSmoother, ScrollTrigger } from '../../dist/gsap';
import { useMediaAtom } from '../../lib/agent';
import { useLayoutSsrEffect } from '../../lib/utils';

export const ScrollSmootherMounted = atom(false);
export const ScrollSmootherEnabled = atom(false);

if (typeof window !== 'undefined') {
  window.ScrollTrigger = ScrollTrigger;
}

export default function ScrollContainer({ children }) {
  const [smootherEnabled, setSmootherEnabled] = useState(false);
  const media = useMediaAtom();
  const setMounted = useSetAtom(ScrollSmootherMounted);
  const setEnabled = useSetAtom(ScrollSmootherEnabled);
  const viewportRef = useRef(null);
  const ref = useRef(null);
  const smootherRef = useRef(null);
  const [isResize, setIsResize] = useState(false);
  const isMobile = media === 'mobile';
  const isMobileRef = useRef(isMobile);

  useLayoutSsrEffect(() => {
    isMobileRef.current = isMobile;
  }, [isMobile]);

  useEffect(() => {
    let prevWidth = window.innerWidth;
    const onResize = debounce(() => {
      if (prevWidth !== window.innerWidth) {
        setIsResize(true);
        window.removeEventListener('resize', onResize);
      }
    }, 500);

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    const enableScrollSmoother = () => {
      if (media === 'mobile' || !smootherEnabled) {
        setMounted(true);
        return () => {};
      }

      // smooth initialization ScrollSmoother
      smootherRef.current = new ScrollSmoother({
        wrapper: viewportRef.current,
        content: ref.current,
        effects: false,
        smooth: 1.3,
      });

      setMounted(true);
      setEnabled(true);

      // updating ScrollTrigger
      ScrollTrigger.refresh(true);
    };

    // deffered ScrollSmoother for avoiding abrupt rerender
    if (document.readyState === 'complete') {
      requestAnimationFrame(() => setSmootherEnabled(true));
    } else {
      window.addEventListener('load', () => {
        requestAnimationFrame(() => setSmootherEnabled(true));
      });
    }

    return () => {
      setEnabled(false);
      if (smootherRef.current) {
        smootherRef.current.kill();
        ScrollTrigger.refresh();
      }
      window.removeEventListener('load', enableScrollSmoother);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, smootherEnabled]);

  // scrolltrigger sometimes does not refresh when scrollsmoother is enabled
  useEffect(() => {
    if ('MutationObserver' in window) {
      let height = 0;
      const handleChange = debounce(() => {
        const newHeight = document.body.style.height;
        if (height !== newHeight) {
          ScrollTrigger.refresh(true); 
        }
        height = newHeight;
      }, 100);

      const mo = new MutationObserver(handleChange);

      mo.observe(document.body, {
        attributeFilter: ['style'],
        attributes: true,
        childList: false,
        subtree: false,
      });

      return () => {
        mo.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (smootherRef.current) {
      window.__scrollTo = (...args) => {
        smootherRef.current.scrollTo(args);
      };

      return () => {
        delete window.__scrollTo;
      };
    }
  }, [isMobile]);

  const key = useMemo(() => {
    let key = 'default';
    if (isResize) {
      key = isMobile ? 'mobile' : 'desktop';
    }
    key += smootherEnabled ? 'enabled' : 'disabled';
    return key;
  }, [isMobile, smootherEnabled, isResize]);

  const Wrapper = useMemo(() => {
    const wrapper = ({ children }) => <div key={key}>{children}</div>;
    wrapper.displayName = 'Wrapper';
    return wrapper;
  }, [key]);

  return (
    <div ref={viewportRef}>
      <div ref={ref}>
        <Wrapper>{children}</Wrapper>
      </div>
    </div>
  );
}
