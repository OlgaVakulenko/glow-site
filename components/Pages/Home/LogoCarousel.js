import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import Client1 from './assets/client-1.svg';
import Client2 from './assets/client-2.svg';
import Client3 from './assets/client-3.svg';
import Client4 from './assets/client-4.svg';
import ClientLandflow from './assets/client-lendflow.svg';
import ClientLiquidSpace from './assets/client-liquidspace.svg';
import ClientNissan from './assets/client-nissan.svg';
import ClientRiptide from './assets/client-riptide.svg';
import Layout, { Layout2 } from '../../Layout';
import { useEffect, useRef } from 'react';
import { useMounted } from '../../Icons/animations';
import cx from 'clsx';
import { useInView, useIsInView } from '../../../lib/utils';

const slides = [
  Client1,
  Client2,
  Client3,
  Client4,
  ClientLandflow,
  ClientNissan,
  ClientRiptide,
  // ClientLiquidSpace,
];

export default function LogoCarousel() {
  const mounted = useMounted();
  const containerRef = useRef();
  const inView = useIsInView(containerRef);
  const ref = useRef();
  const scrollerRef = useRef();

  useEffect(() => {
    if (!inView || !ref.current || !scrollerRef.current) {
      return;
    }
    // return;

    let id = null;
    let prevTime = 0;
    const run = (time) => {
      const delta = time - prevTime;
      prevTime = time;

      let scrollLeft = ref.current.scrollLeft + ~~(delta / 5);

      // console.log(delta / 5);
      const needle = scrollerRef.current.offsetWidth / 2 + 96 / 2;
      if (scrollLeft >= needle) {
        // console.log('CURRENT', scrollLeft);
        // console.log('needle', needle);
        scrollLeft = 0;
      }

      ref.current.scrollLeft = scrollLeft;

      id = requestAnimationFrame(run);
    };

    run();

    return () => {
      cancelAnimationFrame(id);
    };
  }, [inView]);

  return (
    <div ref={containerRef}>
      <Layout2
        className={cx(
          'mb-6 opacity-0 transition-opacity duration-300 md:mb-14 xl:mb-[72px]',
          {
            '!opacity-100': mounted,
          }
        )}
      >
        <div className="icons-slider-r">
          <div className="icons-slider-l relative">
            <div
              ref={ref}
              className="relative flex h-20 justify-between overflow-hidden"
            >
              <div className="absolute top-1/2 flex w-full min-w-[5000px] shrink-0 -translate-y-1/2">
                <div ref={scrollerRef} className="flex">
                  {[...slides, ...slides].map((image, index) => (
                    <div key={index} className="ml-24 shrink-0 first:ml-0">
                      <div className="flex h-full items-center  justify-center opacity-40">
                        <img className="w-full" src={image.src} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout2>
    </div>
  );
}
