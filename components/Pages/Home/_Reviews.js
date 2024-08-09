import cx from 'clsx';
import dynamic from 'next/dynamic';
import React, { useEffect, useMemo } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaAtom } from '../../../lib/agent';
import { themeAtom } from '../../../lib/theme';
import { useIsClient } from '../../../lib/utils';
import DragCursorContainer from '../../DragCursor';
import Layout from '../../Layout';
import { useAtom } from 'jotai';

const SliderProgress = dynamic(() => import('../../SliderProgress'), {
  ssr: false,
});

const reviews = [
  {
    avatar: '/reviews/r_3.png',
    companyAvatar: '/reviews/rc_3.svg',
    name: 'Micha Mazaheri',
    company: 'Co-Founder, Electric Beast O\u00dc',
    text: (
      <>
        Glow Design Agency designed an app for a&nbsp;self-service car rental
        app. They provided a&nbsp;competitor&apos;s analysis, wireframes, and UI
        concepts for all screens. During the final stages, they presented
        a&nbsp;prototype.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_2.png?v=1',
    companyAvatar: '/reviews/rc_2.svg',
    name: 'Vitaly Babiy',
    company: 'Founder, FleetChaser',
    text: (
      <>
        Glow Design Agency offered frontend design services to a&nbsp;GPS
        tracking software company to elevate and unify the existing site. They
        continue to assist with design needs on an ad hoc&nbsp;basis.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_1.png',
    companyAvatar: '/reviews/rc_1.svg',
    name: 'Eric Zellhart',
    company: 'VP Product, LiquidSpace',
    text: (
      <>
        Glow Design provided UI/UX design for a&nbsp;office space provider and
        has since expanded their role to include design updates for the
        site&apos;s front- and backend as well as social media visuals and
        animations.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_10.png',
    companyAvatar: '/reviews/rc_10.svg',
    name: 'Max Grollmann',
    company: 'Managing Director',
    text: (
      <>
        Glow Design Agency provided UI and UX design services for e-cars
        charging market company. They were tasked with designing the UX and UI
        of the app&apos;s prototype.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_5.png',
    companyAvatar: '/reviews/rc_5.svg',
    name: 'Jon Fry',
    company: 'Founder, FinTech Company',
    text: (
      <>
        The team was organized and communicative throughout the process,
        breaking down complex industry concepts and translating them into
        a&nbsp;sleek and useable UI.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_6.png',
    companyAvatar: '/reviews/rc_6.svg',
    name: 'Scott Kuchinski',
    company: 'Product Manager, IT Company',
    text: (
      <>
        Glow Design Agency handled frontend development for a&nbsp;learning
        management system company. They provided several UI design options for
        implementation into the client&apos;s web application.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_7.png',
    companyAvatar: '/reviews/rc_7.svg',
    name: 'Vinicius Rodrigues',
    company: 'CTO, E-Commerce Platform',
    text: (
      <>
        Glow was hired by an e-commerce platform for their UI/UX design
        services. They redesigned website and provided support. After the new
        website was launched, the client saw a significant increase in
        conversions.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_9.png?v=1',
    companyAvatar: '/reviews/rc_9.svg',
    name: 'Jacob Berg',
    company: 'CTO, Social Curator',
    text: (
      <>
        Glow provides ongoing web design for a social media services firm. The
        team provided layout prototypes, an admin dashboard. The team
        communicated effectively despite having different timezones.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_8.png',
    companyAvatar: '/reviews/rc_8.svg',
    name: 'Sinthuja Nagalingam',
    company: 'CEO at Tilt',
    text: (
      <>
        An online education company hired Glow Design Agency to create the
        designs for a new website and the first version of its platform. The
        team was responsive to feedback, which was a significant part of why
        they quickly moved forward.
      </>
    ),
    rating: 5,
    link: '#',
  },
  {
    avatar: '/reviews/r_4.png',
    companyAvatar: '/reviews/rc_4.svg',
    name: 'Tim Bogza',
    company: 'CEO & Founder, Digital Agency',
    text: (
      <>
        Glow Design Agency designed the UX/UI of a digital agency&apos;s new
        SaaS. A team of two worked to design a platform that automates the RFP
        process. While the product is still in development, Glow has delivered
        promising work.
      </>
    ),
    rating: 5,
    link: '#',
  },
];

function StarSvg({ size = 11 }) {
  return (
    <svg
      width={size}
      height={size - 1}
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.62915 0.171387L6.75172 3.6263H10.3844L7.44551 5.76156L8.56808 9.21647L5.62915 7.08122L2.69022 9.21647L3.81279 5.76156L0.873868 3.6263H4.50658L5.62915 0.171387Z"
        fill="#E33230"
      />
    </svg>
  );
}

function ReviewAvatar({ image }) {
  return <img className="ml-[-16px] max-w-[64px]" src={image} alt="" />;
}

export function ClutchRating({ rating = 5, className = '' }) {
	const [theme] = useAtom(themeAtom);
	const dark = theme === 'dark';

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
        'flex items-center rounded-full px-4 py-2 pl-2 text-[#d05c54]',
				{'bg-white': !dark, 'bg-transparent border border-[#ffffff26]': dark}
      )}
    >
      <svg
				className={cx({'text-[#19191B]': !dark, 'text-white': dark})}
        width="21"
        height="24"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3946 17.0594C15.1962 18.1417 13.6138 18.7417 11.8773 18.7417C8.04941 18.7417 5.23831 15.9176 5.23831 12.0402C5.23831 8.16273 7.95997 5.45752 11.8773 5.45752C13.5835 5.45752 15.1962 6.02842 16.4249 7.11078L17.2601 7.83236L20.9711 4.10561L20.0423 3.26377C17.8587 1.2829 14.9595 0.171509 11.876 0.171509C4.99614 0.171509 0 5.15894 0 12.0111C0 18.8343 5.11585 24 11.876 24C15.0173 24 17.9467 22.8886 20.1029 20.876L21 20.0341L17.2312 16.3102L16.3946 17.0594Z"
          fill="currentColor"
        />
        <path
          d="M11.6961 8.10339C12.7515 8.10339 13.7636 8.52458 14.5099 9.27429C15.2561 10.024 15.6754 11.0408 15.6754 12.1011C15.6754 13.1613 15.2561 14.1782 14.5099 14.9279C13.7636 15.6776 12.7515 16.0988 11.6961 16.0988C10.6407 16.0988 9.62857 15.6776 8.8823 14.9279C8.13604 14.1782 7.7168 13.1613 7.7168 12.1011C7.7168 11.0408 8.13604 10.024 8.8823 9.27429C9.62857 8.52458 10.6407 8.10339 11.6961 8.10339Z"
          fill="#E33230"
        />
      </svg>

      {/* <svg
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
      </svg> */}
      {stars}
      <span className={cx ("ml-[6px] text-[14px] leading-[17px]", {'text-black': !dark, 'text-white': dark})}>
        5.0
      </span>
    </div>
  );
}

function ReviewSlide({ review }) {
	const [theme] = useAtom(themeAtom);

  return (
    <Layout className="h-full">
      <div className="flex h-full flex-col">
        <div className="mb-9 flex items-center justify-between md:mb-10">
          <div className="flex">
            <div className="relative z-[1] h-[64px] w-[64px] rounded-full bg-black">
              <div className="absolute left-1/2 top-1/2 w-full max-w-[55px] -translate-x-1/2 -translate-y-1/2">
                <img src={review.companyAvatar} alt="" className={cx("mx-auto", {})} />
              </div>
            </div>
            <ReviewAvatar image={review.avatar} />
          </div>

          <ClutchRating className={cx("md:hidden", {'': theme === 'dark'})} />
        </div>
        <div className="grow border-b border-black pb-[43px] text-body-m md:pb-6 md:text-body-l xl:pb-11">
          {review.text}
        </div>
        <div className="pb-9 pt-7 md:flex md:items-center md:justify-between md:pb-16">
          <div>
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
  const media = useMediaAtom();
  const isClient = useIsClient();
  // const [media] = useAtom(mediaAtom);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <DragCursorContainer>
      <Swiper
        // freeMode={{
        //   enabled: true,
        //   sticky: true,
        //   // momentum: false,
        //   minimumVelocity: 1500,
        // }}
        // mousewheel={true}
        speed={500}
        // grabCursor={true}
        autoplay={{
          stopOnLastSlide: true,
        }}
        slidesPerView={'auto'}
        touchStartPreventDefault={false}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          965: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 'auto',
          },
          // 1500: {
          //   slidesPerView: 3.3,
          // },
        }}
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i} className="!h-auto xl:max-w-[560px]">
            <ReviewSlide review={review} />
          </SwiperSlide>
        ))}
        <Layout>
          {media === 'mobile' && isClient && (
            <SliderProgress mode="realIndex" />
          )}
        </Layout>
      </Swiper>
    </DragCursorContainer>
  );
}
