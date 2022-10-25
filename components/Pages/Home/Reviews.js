import { useMemo } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../../Image';
import Layout from '../../Layout';
import SliderProgress from '../../SliderProgress';
import Reviews1Avatar from './assets/reviews-1-avatar.png';
import Reviews1Company from './assets/reviews-1-company.svg';

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
  return <Image className="max-w-[64px] ml-[-16px]" src={image} alt="" />;
}

function ClutchRating({ rating = 5 }) {
  const stars = useMemo(() => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarSvg size={12} key={i} />);
    }

    return stars;
  }, [rating]);

  return (
    <div className="flex bg-white items-center rounded-full px-4 py-2 text-[#d05c54]">
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
      <span className="text-black ml-2 font-medium">5.0</span>
    </div>
  );
}

function ReviewSlide({ review }) {
  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center mb-9">
          <div className="flex">
            <div className="bg-black rounded-full p-[18px] max-w-[64px]">
              <Image src={review.companyAvatar} />
            </div>
            <ReviewAvatar image={review.avatar} />
          </div>

          <ClutchRating />
        </div>
        <div className="text-xl pb-9 border-b border-black">{review.text}</div>
        <div className="pt-7 pb-9">
          <div className="text-xl">{review.name}</div>
          <div className="text-base">{review.company}</div>
        </div>
      </div>
    </Layout>
  );
}

export default function Reviews() {
  return (
    <Swiper modules={[Autoplay]} grabCursor={true} loop={true} autoplay={true}>
      {reviews.map((review, i) => (
        <SwiperSlide key={i}>
          <ReviewSlide review={review} />
        </SwiperSlide>
      ))}
      <Layout>
        <SliderProgress mode="realIndex" />
      </Layout>
    </Swiper>
  );
}
