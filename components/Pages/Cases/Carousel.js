import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderProgress from './SliderProgress';
import { useMediaAtom } from '../../../lib/agent';

export default function Carousel({ activeMedia = null, slides = [], ...rest }) {
  const media = useMediaAtom();

  if (activeMedia) {
    if (!activeMedia.includes(media)) {
      return null;
    }
  }

  return (
    <Swiper slidesPerView={1} grabCursor={true} spaceBetween={20} {...rest}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
      <SliderProgress />
    </Swiper>
  );
}
