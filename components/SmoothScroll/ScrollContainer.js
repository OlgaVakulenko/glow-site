import { getGPUTier } from 'detect-gpu';
import { atom, useSetAtom } from 'jotai';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import { useEffect, useMemo, useRef, useState } from 'react';
import { smoothScrollAtom } from '../../atoms/scroll';
import { ScrollSmoother, ScrollTrigger } from '../../dist/gsap';
import { useMediaAtom } from '../../lib/agent';

export const ScrollSmootherMounted = atom(false);
export const ScrollSmootherEnabled = atom(false);

if (typeof window !== 'undefined') {
  window.ScrollTrigger = ScrollTrigger;
}

export default function ScrollContainer({ children }) {
  const [disabled, setDisabled] = useState(false);
  const media = useMediaAtom();
  const setMounted = useSetAtom(ScrollSmootherMounted);
  const setEnabled = useSetAtom(ScrollSmootherEnabled);
  const updateScrollPosition = useSetAtom(smoothScrollAtom);
  const viewportRef = useRef(null);
  const ref = useRef(null);
  const smootherRef = useRef(null);
  const [isResize, setIsResize] = useState(false);
  const isMobile = media === 'mobile';

  useEffect(() => {
    const onResize = debounce(() => {
      setIsResize(true);
    }, 500);

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (media === 'mobile' || disabled) {
      setMounted(true);
      return () => {
        // setMounted(false);
      };
    }
    smootherRef.current = new ScrollSmoother({
      wrapper: viewportRef.current,
      content: ref.current,
      effects: true,
      smoothTouch: 0.1,
      onUpdate: throttle((e) => {
        const scrollTop = Math.round(Math.abs(e.scrollTop()));
        updateScrollPosition(scrollTop);
      }, 100),
    });

    setMounted(true);
    setEnabled(true);

    return () => {
      // setMounted(false);
      setEnabled(false);
      if (smootherRef.current) {
        smootherRef.current.kill();
        ScrollTrigger.refresh();
      }
    };
  }, [isMobile, updateScrollPosition, setMounted, disabled]);

  //scrolltrigger sometimes does not refresh when scrollsmoother is enabled
  useEffect(() => {
    if ('MutationObserver' in window) {
      let height = 0;
      const handleChange = debounce(() => {
        const newHeight = document.body.style.height;
        if (height !== newHeight) {
          ScrollTrigger.refresh();
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
    key += disabled ? 'disabled' : 'not-disabled';

    return key;
  }, [isMobile, disabled, isResize]);

  const Wrapper = useMemo(() => {
    const wrapper = ({ children }) => <div key={key}>{children}</div>;
    wrapper.displayName = 'Wrapper';
    return wrapper;
  }, [key]);

  useEffect(() => {
    let mounted = true;
    getGPUTier().then((tier) => {
      if (!mounted) return;

      if (tier?.tier <= 1) {
        setDisabled(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div ref={viewportRef}>
      <div ref={ref}>
        <Wrapper>{children}</Wrapper>
      </div>
    </div>
  );
}
