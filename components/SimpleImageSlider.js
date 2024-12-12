import React, { useRef, useState, useEffect, useCallback } from 'react';
import cx from 'clsx';
import gsap from '../dist/gsap';

export default function SingleImageSlider({ slide, theme = 'light' }) {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [linePosition, setLinePosition] = useState(0);

  const handleScroll = useCallback(() => {
		if (!containerRef.current) return;
	
		const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
		const maxScroll = scrollWidth - clientWidth;
		const position = (scrollLeft / maxScroll) * (trackWidth - 100);
		setLinePosition(Math.min(position, trackWidth - 100));
	}, [trackWidth]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [trackWidth, handleScroll]);

  useEffect(() => {
    const updateTrackWidth = () => {
      if (containerRef.current) {
        setTrackWidth(containerRef.current.offsetWidth);
      }
    };

    updateTrackWidth();
    window.addEventListener('resize', updateTrackWidth);

    return () => {
      window.removeEventListener('resize', updateTrackWidth);
    };
  }, []);

  useEffect(() => {
    gsap.to(lineRef.current, {
      x: linePosition,
      duration: 0.3,
    });
  }, [linePosition]);

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className='relative w-full overflow-x-auto scroll-c'
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        <img
          src={slide}
          alt="Slide"
          className="max-w-none h-auto my-10"
          style={{
            display: 'block',
          }}
        />
      </div>

      <div className="relative w-full h-[16px] mt-4">
        <div
          className={cx(
            'absolute top-0 left-0 h-[4px] w-[100px]',
            {
              'bg-black': theme === 'light',
              'bg-white': theme === 'dark',
            }
          )}
          ref={lineRef}
        ></div>
				<div
					className={cx(
						'absolute left-0 top-[1.5px] h-[1px] w-full opacity-20',
								{
									'bg-black': theme === 'light',
									'bg-white': theme === 'dark',
								}
							)}
						></div>
      </div>
    </div>
  );
}
