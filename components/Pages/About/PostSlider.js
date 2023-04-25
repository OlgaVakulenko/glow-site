import { Swiper, SwiperSlide } from 'swiper/react';
import cx from 'clsx';
import Image from '../../Image';
import Layout from '../../Layout';
import SliderProgress from '../../SliderProgress';
import { useMediaAtom } from '../../../lib/agent';

export default function PostSlider({ posts = [], withLayout = false }) {
  const media = useMediaAtom();

  return (
    <Swiper slidesPerView="auto" spaceBetween={withLayout ? 40 : 0}>
      {posts.map((post, i) => (
        <SwiperSlide key={i} style={{ width: 'auto' }}>
          <div
            className={cx('max-w-[304px]', {
              'mx-2 md:mx-5': !withLayout,
              'ml-4 md:ml-12': i === 0 && !withLayout,
              'mr-4 md:mr-12': i === posts.length - 1 && !withLayout,
              'md:!mr-[166px] md:!max-w-[448px] xl:!mr-[190px]':
                post.isFeatured,
              'xl:!mr-[240px]': post.isFeatured && !withLayout,
            })}
          >
            <Image
              src={post.image}
              alt=""
              className="mb-6 h-[264px] rounded-2xl object-cover"
            />
            <div className="mb-8 text-body-heading-m">{post.title}</div>
            <div className="flex">
              <Image
                src={post.authorAvatar}
                alt=""
                className="mr-[18px] mt-[2px] h-[40px] w-[40px]"
              />
              <div>
                <div className="text-[16px] leading-[28px]">
                  {post.authorName}
                </div>
                <div className="mt-[-5px] text-[14px] leading-[27px] opacity-50">
                  {post.authorPosition}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {media !== 'desktop' && (
        <Layout className="pt-12">
          <SliderProgress />
        </Layout>
      )}
    </Swiper>
  );
}
