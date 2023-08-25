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
import Layout from '../../Layout';

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
  return (
    <div className="mb-6 md:mb-14 xl:mb-[72px]">
      <Swiper
        loop={true}
        // freeMode={true}
        modules={[FreeMode, Autoplay]}
        slidesPerView={'auto'}
        spaceBetween={32}
        speed={2000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          // pauseOnMouseEnter: true,
        }}
      >
        {[...slides, ...slides].map((image, index) => (
          <SwiperSlide key={index} className="!h-auto !w-fit">
            <Layout className="flex h-full items-center justify-center opacity-40">
              <img src={image.src} alt="" />
            </Layout>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
