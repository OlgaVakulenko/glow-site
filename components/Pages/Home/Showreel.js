import Home1Image from './assets/home-1.png';
import HomeTabletImage from './assets/home-tablet.png';
import HomeDesktopImage from './assets/home-desktop.png';
import { resolve, Source } from '../../Image';
import BigButton from '../../BigButton';
import { forwardRef, useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { atom } from 'jotai';
import gsap from 'gsap';

const HoverCursor = forwardRef(function HoverCursor(props, ref) {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setAppear(true);
  }, []);

  return (
    <div
      ref={ref}
      className={cx(
        {
          ['opacity-100']: appear,
        },
        'pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 transition-opacity duration-500'
      )}
    >
      <BigButton
        hideLink={true}
        className="h-[232px] w-[232px] bg-brand"
        border={false}
      >
        View Showreel
      </BigButton>
    </div>
  );
});

export default function Showreel() {
  const ref = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const isHoverPrefRef = useRef(isHover);
  const isHoverRef = useRef(isHover);
  isHoverRef.current = isHover;

  const handleMouseEnter = (e) => {
    // setIsHover(true);
  };

  const handleMouseLeave = (e) => {
    setIsHover(false);
  };

  const handleMouseMove = (e) => {
    if (!isHover) {
      setIsHover(true);
    }

    gsap.to(cursorRef.current, {
      y: e.nativeEvent.offsetY,
      x: e.nativeEvent.offsetX,
      ease: 'power1.out',
      duration: isHoverRef.current ? 0.2 : 0,
    });
  };

  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.to(cursorRef.current, {
      scale: isHover ? 1 : 0,
      duration: 0.3,
    });
  }, [isHover]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.__image',
        {
          yPercent: -35,
        },
        {
          scrollTrigger: {
            trigger: ref.current,
            scrub: true,
            start: 'top bottom',
            end: 'bottom bottom',
            // markers: true,
          },
          yPercent: 0,
          ease: 'linear',
        }
      );
    }, ref);

    return () => {
      ctx.revert();
    };
  }, [ref]);

  useEffect(() => {
    isHoverPrefRef.current = isHover;
  }, [isHover]);

  return (
    <div ref={ref} className="relative cursor-none overflow-hidden bg-white">
      <picture>
        <Source image={Home1Image} width={400} media="(max-width: 767.5px)" />
        <Source
          image={HomeTabletImage}
          width={1024}
          media="(min-width: 768.5px) and (max-width: 1024.5px)"
        />
        <Source
          image={HomeDesktopImage}
          width={1440}
          media="(min-width: 1025.5px)"
        />
        <img
          className="__image min-h-[47px] w-full object-cover md:min-h-[463px]"
          src={resolve({ src: Home1Image.src, width: 1440 })}
          alt=""
        />
      </picture>
      <div
        className="absolute inset-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      ></div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <HoverCursor ref={cursorRef} />
      </div>
    </div>
  );
}
