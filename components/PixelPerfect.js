import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useMedia } from '../lib/agent';
import ServicesMobile from '../pp/services-mobile.png';
import ServicesMd from '../pp/services-md.png';
import ServicesXl from '../pp/services-xl.png';
import { useEffect, useState } from 'react';

export default function PixelPerfect() {
  const params = useSearchParams();
  const media = useMedia();
  const active = params.has('pp');
  const [opacity, setOpacity] = useState(50);

  useEffect(() => {
    if (!active) return;
    let prevY = 0;
    const handleScroll = (ev) => {
      if (ev.altKey) {
        ev.preventDefault();
        console.log(ev);
        const val = ev.deltaY < 0 ? 20 : -20;
        setOpacity((o) => {
          return Math.max(0, Math.min(100, (o += val)));
        });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [active]);

  if (!active) return null;

  console.log(opacity);

  const img =
    media === 'mobile'
      ? ServicesMobile
      : media === 'md'
      ? ServicesMd
      : ServicesXl;

  return (
    <div
      id="pp-container"
      className="pointer-events-none absolute left-0 top-0 z-[9999] w-full"
      style={{
        opacity: opacity / 100,
      }}
    >
      <img src={img.src} alt="" className="h-full w-full" />
      {/* <Image src={img} alt="" /> */}
    </div>
  );
}
