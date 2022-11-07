import Home1Image from './assets/home-1.png';
import HomeTabletImage from './assets/home-tablet.png';
import HomeDesktopImage from './assets/home-desktop.png';
import { resolve, Source } from '../../Image';
import BigButton from '../../BigButton';
import { useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { atom } from 'jotai';

function HoverCursor({ x = 0, y = 0 }) {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setAppear(true);
  }, []);

  return (
    <div
      className={cx(
        {
          ['opacity-100']: appear,
        },
        'pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 transition-opacity duration-500'
      )}
      style={{
        top: y,
        left: x,
      }}
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
}

export default function Showreel() {
  const ref = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [xy, setXy] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleMouseMove = (e) => {
    // console.log(e);
    setXy({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY - 150,
    });
  };

  return (
    <div
      // ref={ref}
      className="relative cursor-none"
    >
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
          className="min-h-[408px] w-full object-cover md:min-h-[463px]"
          src={resolve({ src: Home1Image.src, width: 1440 })}
          alt=""
        />
      </picture>
      <div
        ref={ref}
        className="absolute inset-0 bottom-[-150px] top-[-116px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      ></div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {isHover && !(xy.x === 0 && xy.y === 0) && (
          <HoverCursor x={xy.x} y={xy.y} />
        )}
      </div>
    </div>
  );
}
