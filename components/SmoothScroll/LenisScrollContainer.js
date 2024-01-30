// import Lenis from '@studio-freight/lenis';
import { useEffect, useRef } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import gsap from '../../dist/gsap';

export default function LenisScrollContainer({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis ref={lenisRef} root>
      {children}
    </ReactLenis>
  );
}
