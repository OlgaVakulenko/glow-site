import { Swiper, SwiperSlide } from 'swiper/react';
import cx from 'clsx';
import Image from '../../Image';
import Layout from '../../Layout';
import SliderProgress from '../../SliderProgress';
import { useMediaAtom } from '../../../lib/agent';
import Link from 'next/link';
import { AuthorImage } from '../../Blog/Post/Author';

export default function PostSlider({ posts = [], withLayout = false }) {
  const media = useMediaAtom();

  return (
    <div className="overflow-hidden">
      <Layout>
        <Swiper
          slidesPerView="auto"
          spaceBetween={32}
          className="!overflow-visible"
        >
          {posts.map((post, i) => (
            <SwiperSlide key={i} style={{ width: 'auto' }} className="!h-auto">
              <div
                className={cx('h-full max-w-[528px]', {
                  // 'mx-2 md:mx-5': !withLayout,
                  // 'ml-4 md:ml-12': i === 0 && !withLayout,
                  // 'mr-4 md:mr-12': i === posts.length - 1 && !withLayout,
                  // 'md:!mr-[166px] md:!max-w-[448px] xl:!mr-[190px]':
                  //   post.isFeatured,
                  // 'xl:!mr-[240px]': post.isFeatured && !withLayout,
                })}
              >
                <Link href={`/blog/${post.href}`} className="group h-full">
                  <div className="mb-6 overflow-hidden rounded-3xl">
                    <Image
                      src={post.image}
                      alt=""
                      className="h-[264px] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-between xl:min-h-[188px]">
                    <div className="mb-8 text-body-heading-m">{post.title}</div>
                    <div className="flex">
                      <AuthorImage
                        className="mr-[18px] mt-[2px] h-[40px] w-[40px] rounded-full"
                        name={post.author_name}
                        src={post.author_image}
                      />

                      {/* <img
                  src={post.author_image}
                  alt=""
                  className="mr-[18px] mt-[2px] h-[40px] w-[40px] rounded-full"
                /> */}
                    </div>
                    <div>
                      <div className="text-[16px] leading-[28px]">
                        {post.author_name}
                      </div>
                      <div className="mt-[-5px] text-[14px] leading-[27px] opacity-50">
                        {post.author_position}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
          {media !== 'desktop' && (
            <Layout className="pt-12">
              <SliderProgress />
            </Layout>
          )}
        </Swiper>
      </Layout>
    </div>
  );
}
