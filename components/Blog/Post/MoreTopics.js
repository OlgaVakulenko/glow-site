import { useEffect, useMemo, useRef, useState } from 'react';
import { useMediaAtom } from '../../../lib/agent';
import Card from '../Card';
import { SkipRenderOnClient } from '../../SkipRender';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SliderProgress from '../../SliderProgress';
import CaseNavArrow from '../../Pages/Home/CaseNavArrow';
import { addLeadingZero } from '../../../lib/utils';

export default function MoreTopics({ posts }) {
  const media = useMediaAtom();
  const [slideIndex, setSlideIndex] = useState(0);

  const _posts = useMemo(() => {
    if (media === 'desktop') {
      return posts.slice(0, 3);
    }

    return posts;
  }, [posts, media]);

  const swiperRef = useRef();

  useEffect(() => {
    if (!swiperRef.current) return;

    const handleSlideChange = (e) => {
      setSlideIndex(e.activeIndex);
    };

    swiperRef.current.on('slideChange', handleSlideChange);

    return () => {
      swiperRef.current.off('slideChange', handleSlideChange);
    };
  }, []);

  const cards = useMemo(() => {
    return _posts.map((post, i) => (
      <Card key={i} post={post} flavor="read-more" />
    ));
  }, [_posts]);

  return (
    <div>
      <h4 className="mb-[50px] text-[40px] font-medium leading-[48px] tracking-[-2px] md:mb-10 md:text-[56px] md:leading-[56px] md:tracking-[-2px] xl:mb-12">
        More topics
      </h4>
      <SkipRenderOnClient shouldRenderOnClient={() => window.innerWidth < 820}>
        <div className="md:hidden">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="!overflow-visible"
            spaceBetween="16px"
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i}>{card}</SwiperSlide>
            ))}
            <div className="mb-5 mt-10  flex items-end justify-between">
              <div className="flex gap-4">
                <CaseNavArrow
                  dir="left"
                  onClick={() => {
                    swiperRef.current?.slidePrev();
                  }}
                />
                <CaseNavArrow
                  dir="right"
                  onClick={() => {
                    swiperRef.current?.slideNext();
                  }}
                />
              </div>
              <div className="text-[18px] leading-[26px]">
                {addLeadingZero(slideIndex + 1)}/{addLeadingZero(_posts.length)}
              </div>
            </div>

            <SliderProgress />
          </Swiper>
        </div>
      </SkipRenderOnClient>
      <SkipRenderOnClient shouldRenderOnClient={() => window.innerWidth >= 820}>
        <div className="hidden md:grid md:grid-cols-2 md:gap-7 xl:grid-cols-3">
          {cards}
        </div>
      </SkipRenderOnClient>
    </div>
  );
}
