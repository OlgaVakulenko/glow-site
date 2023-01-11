import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderProgress from './SliderProgress';

export default function Carousel({ slides = [], ...rest }) {
  return (
    <Swiper slidesPerView={1} grabCursor={true} spaceBetween={20} {...rest}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
      <SliderProgress />
    </Swiper>
  );
}
