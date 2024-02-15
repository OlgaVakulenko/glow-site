import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import ClientH from './assets/client-h.svg';
import Client1 from './assets/client-1.svg';
import Client2 from './assets/client-2.svg';
import Client3 from './assets/client-3.svg';
import Client4 from './assets/client-4.svg';
import ClientLandflow from './assets/client-lendflow.svg';
import ClientLiquidSpace from './assets/client-liquidspace.svg';
import ClientNissan from './assets/client-nissan.svg';
import ClientRiptide from './assets/client-riptide.svg';
import Layout from '../../Layout';
import { useEffect, useRef } from 'react';
import { useMounted } from '../../Icons/animations';
import cx from 'clsx';
import { useInView, useIsInView } from '../../../lib/utils';

const slides = [
  ClientH,
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
  const moveRef = useRef();

  useEffect(() => {
    if (!inView || !ref.current || !scrollerRef.current) {
      return;
    }
    // return;

    let id = null;
    let scrollLeft = 0;
    let prevTime = 0;
    let f = false;
    const run = (time) => {
      if (!scrollerRef.current) return;
      const t = time != null ? time : 0;
      const delta = t - prevTime;
      prevTime = t;
      const d = delta / 20;
      let prevScrollLeft = scrollLeft;
      scrollLeft = scrollLeft + d;
      if (Number.isNaN(scrollLeft)) {
        console.log(prevScrollLeft, d);
      }
      const needle = scrollerRef.current.offsetWidth / 2 + 96 / 2;
      if (scrollLeft >= needle) {
        scrollLeft = 0;
      }

      // ref.current.scrollLeft = scrollLeft;
      moveRef.current.style.transform = `translateX(-${scrollLeft}px)`;

      id = requestAnimationFrame(run);
    };

    run();

    return () => {
      cancelAnimationFrame(id);
    };
  }, [inView]);

  return (
    <div ref={containerRef}>
      <Layout
        className={cx(
          'mb-6 !px-0 opacity-0 transition-opacity duration-300 md:mb-14 xl:mb-[72px]',
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
              <div
                ref={moveRef}
                className="absolute top-1/2 flex w-full min-w-[5000px] shrink-0"
              >
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
      </Layout>
    </div>
  );
}
