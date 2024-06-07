import { Swiper, SwiperSlide } from 'swiper/react';
import cx from 'clsx';
import Image from '../../Image';
import Layout from '../../Layout';
import SliderProgress from '../../SliderProgress';
import { useMediaAtom } from '../../../lib/agent';
import Link from 'next/link';
import { AuthorImage } from '../../Blog/Post/Author';
import CaseNavArrow from '../Home/CaseNavArrow';
import { useRef } from 'react';
import Button2 from '../../Button';

export default function PostSlider({ posts = [], withLayout = false }) {
  const swiperRef = useRef();

  return (
    <div className="overflow-hidden">
      <Layout>
        <Swiper
          slidesPerView="1.13"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            820: {
              slidesPerView: 'auto',
              spaceBetween: 32,
            },
          }}
          spaceBetween={24}
          className="!overflow-visible"
        >
          {posts.map((post, i) => (
            <SwiperSlide key={i} className="!h-auto md:!w-auto">
              <div
                className={cx('h-full max-w-[528px] md:w-[528px]', {
                  // 'mx-2 md:mx-5': !withLayout,
                  // 'ml-4 md:ml-12': i === 0 && !withLayout,
                  // 'mr-4 md:mr-12': i === posts.length - 1 && !withLayout,
                  // 'md:!mr-[166px] md:!max-w-[448px] xl:!mr-[190px]':
                  //   post.isFeatured,
                  // 'xl:!mr-[240px]': post.isFeatured && !withLayout,
                })}
              >
                <Link
                  href={`/blog/${post.href}`}
                  className="group block h-full"
                >
                  <div className="mb-4 overflow-hidden rounded-[17px]">
                    <Image
                      src={post.image}
                      alt=""
                      className="h-[164px] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105 md:h-[264px]"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <h3 className="mb-6 font-satoshi text-[20px] font-medium leading-[32px] md:mb-8">
                      {post.title}
                    </h3>
                    <div className="flex items-center">
                      <div className="flex">
                        <AuthorImage
                          className="mr-3 h-[48px] w-[48px] rounded-full"
                          name={post.author_name}
                          src={post.author_image}
                        />
                      </div>
                      <div>
                        <div className="text-[16px] font-medium leading-[26px] tracking-[-0.01em]">
                          {post.author_name}
                        </div>
                        <div className="text-[14px] leading-[22px] tracking-[-0.01em] opacity-50">
                          {post.author_position}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
          {
            <div className="md:mt-[34px] xl:mt-[55px]">
              <div className="items-center md:flex md:space-x-6">
                <div className="hidden shrink-0 md:flex md:space-x-4">
                  <CaseNavArrow
                    dir="left"
                    onClick={() => {
                      swiperRef.current.slidePrev();
                    }}
                  />
                  <CaseNavArrow
                    dir="right"
                    onClick={() => {
                      swiperRef.current.slideNext();
                    }}
                  />
                </div>

                <div className="mt-10 md:mt-0 md:w-full">
                  <SliderProgress />
                </div>

                <Button2
                  as={Link}
                  href="/blog"
                  compact
                  className="mt-9 w-full !bg-black text-center !text-white md:mt-0 md:w-auto md:shrink-0"
                >
                  Read blog
                </Button2>
              </div>
            </div>
          }
        </Swiper>
      </Layout>
    </div>
  );
}
