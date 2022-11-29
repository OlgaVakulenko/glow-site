import cx from 'clsx';
import gsap from 'gsap';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSwiper } from 'swiper/react';

export default function SliderProgress({ className = '', mode = 'progress' }) {
  const ref = useRef(null);
  const thumbRef = useRef(null);
  const thumbRef2 = useRef(null);
  const thumbRef3 = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const [realIndex, setRealIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const gsapStub = useRef({ value: 0 });
  const swiper = useSwiper();

  const slidesPerView = useMemo(() => {
    if (!isNaN(swiper?.params.slidesPerView)) {
      return swiper.params.slidesPerView;
    }
    return 1;
  }, [swiper?.params.slidesPerView]);

  const thumbWidth = useMemo(() => {
    if (slidesCount > 0) {
      return 100 / slidesCount;
    }

    return 0;
  }, [slidesCount]);

  useEffect(() => {
    if (thumbRef.current) {
      thumbRef.current.style.width = thumbWidth + '%';
    }

    if (thumbRef2.current) {
      thumbRef2.current.style.width = thumbWidth + '%';
    }

    if (thumbRef3.current) {
      thumbRef3.current.style.width = thumbWidth + '%';
    }
  }, [thumbWidth]);

  const left = useMemo(() => {
    if (slidesCount > 0) {
      const thumbWidth = trackWidth / slidesCount;
      let left;
      if (mode === 'progress') {
        left = (trackWidth - thumbWidth) * progress;
      }
      if (mode === 'realIndex') {
        // console.log(swiper.activeIndex);
        left = thumbWidth * swiper.realIndex;
        // console.log(thumbWidth);
      }
      return left;
    }

    return 0;
  }, [trackWidth, thumbWidth, slidesCount, progress, mode, realIndex]);

  useEffect(() => {
    if (swiper?.params) {
      const count = swiper.params.loop
        ? swiper.params.loopedSlides
        : swiper.slides.length;
      if (swiper.slides) {
        setSlidesCount(count);
      }
    }
  }, [swiper]);

  useEffect(() => {
    if (!swiper) {
      return;
    }
    if (mode === 'progress') {
      const onProgress = (e, p) => {
        const progress = e.progress;
        setProgress(progress);
      };

      swiper.on('progress', onProgress);

      return () => {
        swiper.off('progress', onProgress);
      };
    }

    if (mode === 'realIndex') {
      const onRealIndexChange = (e) => {
        setRealIndex(Math.abs(e.realIndex));
      };

      swiper.on('realIndexChange', onRealIndexChange);

      return () => {
        swiper.off('realIndexChange', onRealIndexChange);
      };
    }
  }, [swiper, mode]);

  useEffect(() => {
    const handleWidth = () => {
      if (ref.current) {
        const w = ref.current.offsetWidth;
        if (w) {
          setTrackWidth(w);
        }
      }
    };

    handleWidth();
    window.addEventListener('resize', handleWidth);

    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  useEffect(() => {
    const am = gsap.to(gsapStub.current, {
      value: left,
      duration: 0.3,
      onUpdate: () => {
        if (thumbRef.current) {
          thumbRef.current.style.left = gsapStub.current.value + 'px';
        }

        if (thumbRef2.current) {
          thumbRef2.current.style.left =
            gsapStub.current.value + trackWidth + 'px';
        }

        if (thumbRef3.current) {
          thumbRef3.current.style.left =
            gsapStub.current.value - trackWidth + 'px';
        }
      },
    });

    return () => {
      am.kill();
    };
  }, [trackWidth, left]);

  return (
    <div
      ref={ref}
      className={cx(
        'relative flex h-[16px] items-center justify-center overflow-hidden',
        className
      )}
    >
      {slidesCount > 0 && (
        <>
          <div className="h-[1px] w-full bg-black opacity-20"></div>
          {/* <div
            ref={thumbRef3}
            className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-2/4 bg-black"
          ></div> */}
          <div
            ref={thumbRef}
            className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-2/4 bg-black"
          ></div>
          {/* <div
            ref={thumbRef2}
            className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-2/4 bg-black"
          ></div> */}
        </>
      )}
    </div>
  );
}
