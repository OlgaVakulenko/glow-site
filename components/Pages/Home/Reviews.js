import { useMemo } from 'react';
import Image from '../../Image';
import Layout from '../../Layout';
import Reviews1Avatar from './assets/reviews-1-avatar.png';
import Reviews1Company from './assets/reviews-1-company.svg';
import Star from './assets/star.svg';

const reviews = [
  {
    avatar: Reviews1Avatar,
    companyAvatar: Reviews1Company,
    name: 'Darrell Steward',
    company: 'Founder Cryptogenie',
    text: 'Impressing the internal staff, the team delivered a navigable, intuitive, and dependable solution that positively',
    rating: 5,
    link: '#',
  },
];

function ReviewAvatar({ image }) {
  return <Image className="max-w-[64px] ml-[-16px]" src={image} />;
}

function ClutchRating({ rating = 5 }) {
  const stars = useMemo(() => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={Star.src} />);
    }
    console.log('stars', stars, rating);

    return stars;
  }, [rating]);
  console.log(stars);
  return (
    <div className="bg-white rounded-full px-4 py-2">
      <svg
        width="100%"
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
    </div>
  );
}

export default function Reviews() {
  return (
    <Layout>
      {reviews.map((review, i) => (
        <div key={i}>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="bg-black rounded-full p-[18px] max-w-[64px]">
                  <Image src={review.companyAvatar} />
                </div>
                <ReviewAvatar image={review.avatar} />
              </div>

              <ClutchRating />
            </div>
          </div>
        </div>
      ))}
    </Layout>
  );
}
