import { useMemo } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../../Image';
import Layout from '../../Layout';
import SliderProgress from '../../SliderProgress';
import Reviews1Avatar from './assets/reviews-1-avatar.png';
import Reviews1Company from './assets/reviews-1-company.svg';
import cx from 'clsx';
import { useAtom } from 'jotai';
import { mediaAtom } from '../../../lib/agent';

const reviews = [
  {
    avatar: Reviews1Avatar,
    companyAvatar: Reviews1Company,
    name: 'Darrell Steward',
    company: 'Founder Cryptogenie',
    text: '#1 Impressing the internal staff, the team delivered a navigable, intuitive, and dependable solution that positively',
    rating: 5,
    link: '#',
  },
  {
    avatar: Reviews1Avatar,
    companyAvatar: Reviews1Company,
    name: 'Darrell Steward',
    company: 'Founder Cryptogenie',
    text: '#2 Impressing the internal staff, the team delivered a navigable, intuitive, and dependable solution that positively',
    rating: 5,
    link: '#',
  },
  {
    avatar: Reviews1Avatar,
    companyAvatar: Reviews1Company,
    name: 'Darrell Steward',
    company: 'Founder Cryptogenie',
    text: '#3 Impressing the internal staff, the team delivered a navigable, intuitive, and dependable solution that positively',
    rating: 5,
    link: '#',
  },
  {
    avatar: Reviews1Avatar,
    companyAvatar: Reviews1Company,
    name: 'Darrell Steward',
    company: 'Founder Cryptogenie',
    text: '#4 Impressing the internal staff, the team delivered a navigable, intuitive, and dependable solution that positively',
    rating: 5,
    link: '#',
  },
  {
    avatar: Reviews1Avatar,
    companyAvatar: Reviews1Company,
    name: 'Darrell Steward',
    company: 'Founder Cryptogenie',
    text: '#5 Impressing the internal staff, the team delivered a navigable, intuitive, and dependable solution that positively',
    rating: 5,
    link: '#',
  },
];

function StarSvg({ size = 12 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>
  );
}

function ReviewAvatar({ image }) {
  return <Image className="ml-[-16px] max-w-[64px]" src={image} alt="" />;
}

function ClutchRating({ rating = 5, className = '' }) {
  const stars = useMemo(() => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarSvg size={12} key={i} />);
    }

    return stars;
  }, [rating]);

  return (
    <div
      className={cx(
        className,
        'flex items-center rounded-full bg-white px-4 py-2 text-[#d05c54]'
      )}
    >
      <svg
        className="-mr-1"
        width="32px"
        height="24px"
        viewBox="0 0 105 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M82 83.5C76 88.3 67.6 91.9 59.2 91.9C40 91.9 26.8 77.5 26.8 58.3C26.8 39.1 40 25.9 59.2 25.9C67.6 25.9 76 28.3 82 34.3L85.6 37.9L104.8 19.9L100 16.3C89.2 6.69999 74.8 0.700012 59.2 0.700012C25.6 0.700012 0.399994 25.9 0.399994 59.5C0.399994 93.1 25.6 118.3 59.2 118.3C74.8 118.3 89.2 112.3 100 102.7L104.8 99.1L85.6 79.9L82 83.5Z"
          fill="#17313B"
        />
        <path
          d="M58 78.7C68.6039 78.7 77.2 70.1039 77.2 59.5C77.2 48.8961 68.6039 40.3 58 40.3C47.3961 40.3 38.8 48.8961 38.8 59.5C38.8 70.1039 47.3961 78.7 58 78.7Z"
          fill="#EF4335"
        />
      </svg>
      {stars}
      <span className="ml-2 font-medium text-black">5.0</span>
    </div>
  );
}

function ReviewSlide({ review }) {
  return (
    <Layout>
      <div>
        <div className="mb-9 flex items-center justify-between md:mb-10">
          <div className="flex">
            <div className="max-w-[64px] rounded-full bg-black p-[18px]">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0175 5.52943C19.0025 4.06548 16.5534 3.32254 14.0647 3.42032C11.576 3.5181 9.19266 4.45091 7.29878 6.06844C5.40489 7.68598 4.11073 9.89402 3.62484 12.3368C3.13894 14.7796 3.4896 17.3148 4.62032 19.5339C5.75104 21.7531 7.59597 23.527 9.85781 24.5697C12.1197 25.6124 14.6667 25.8633 17.0885 25.2819C19.5103 24.7004 21.6658 23.3206 23.2078 21.3647C24.3943 19.8595 25.1643 18.0808 25.4562 16.2059H22.4213C22.1628 17.4065 21.633 18.5403 20.8634 19.5165C19.7366 20.9458 18.1614 21.9542 16.3916 22.379C14.6218 22.8039 12.7605 22.6206 11.1076 21.8586C9.45475 21.0966 8.10653 19.8004 7.28024 18.1787C6.45394 16.557 6.19769 14.7043 6.55277 12.9192C6.90784 11.1341 7.85357 9.52052 9.23757 8.33848C10.6216 7.15643 12.3632 6.47476 14.1819 6.40331C16.0005 6.33185 17.7903 6.87477 19.2628 7.94458L17.2574 10.7048C16.4049 10.0854 15.3687 9.77107 14.3158 9.81244C13.2629 9.85381 12.2546 10.2485 11.4533 10.9328C10.6521 11.6171 10.1045 12.5513 9.89897 13.5848C9.6934 14.6183 9.84176 15.6909 10.3201 16.6297C10.7985 17.5686 11.5791 18.3191 12.536 18.7603C13.4929 19.2014 14.5705 19.3075 15.5951 19.0616C16.6197 18.8156 17.5317 18.2318 18.1841 17.4043C18.4726 17.0383 18.7029 16.6341 18.87 16.2059H14.5V12.7941H29.0006C29.0006 12.7941 28.9998 13.8801 28.8993 16.2059C28.7988 18.5317 27.549 21.3687 25.8871 23.4769C23.8707 26.0346 21.0519 27.839 17.885 28.5994C14.718 29.3597 11.3872 29.0316 8.42944 27.6681C5.47165 26.3045 3.05906 23.9848 1.58042 21.0829C0.101789 18.1809 -0.356772 14.8656 0.278631 11.6712C0.914034 8.4768 2.60639 5.58935 5.08301 3.47412C7.55963 1.35888 10.6763 0.139054 13.9307 0.011185C17.1852 -0.116684 20.3879 0.854856 23.0229 2.76926L21.0175 5.52943Z"
                  fill="white"
                />
              </svg>
            </div>
            <ReviewAvatar image={review.avatar} />
          </div>

          <ClutchRating className="md:hidden" />
        </div>
        <div className="border-b border-black pb-[43px] text-body-m md:pb-6 md:text-body-l xl:pb-11">
          {review.text}
        </div>
        <div className="md:flex md:items-center md:justify-between">
          <div className="pt-7 pb-9 md:pb-16">
            <div className="mb-2 text-body-m">{review.name}</div>
            <div className="text-body-s">{review.company}</div>
          </div>
          <ClutchRating className="hidden md:flex" />
        </div>
      </div>
    </Layout>
  );
}

export default function Reviews() {
  const [media] = useAtom(mediaAtom);

  return (
    <Swiper
      modules={[Autoplay]}
      grabCursor={true}
      autoplay={true}
      // loopedSlides={3}
      slidesPerView={'auto'}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        965: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 2.7,
        },
        1500: {
          slidesPerView: 3.5,
        },
      }}
    >
      {reviews.map((review, i) => (
        <SwiperSlide key={i}>
          <ReviewSlide review={review} />
        </SwiperSlide>
      ))}
      <Layout>
        {media === 'mobile' && <SliderProgress mode="realIndex" />}
      </Layout>
    </Swiper>
  );
}
