import Layout from '../../Layout';
import { useMediaAtom } from '../../../lib/agent';
import { useEffect, useRef, useState } from 'react';
import gsap from '../../../dist/gsap';
import cx from 'clsx';

export default function Push() {
  const [activated, setActivated] = useState(false);
  const media = useMediaAtom();
  const ref = useRef();
  const descRef = useRef();
  const lettersRef = useRef();

  useEffect(() => {
    if (media === 'mobile' || activated) return;

    const cxt = gsap.context(() => {
      gsap.set('.letter', { opacity: 0 });
      gsap.set('.letter-desc', { opacity: 0, translateY: 12 });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 50%',
          end: 'bottom 50%',
          // markers: true,
          onToggle: (e) => {
            if (e.isActive) {
              gsap
                .to(window, {
                  scrollTo: {
                    y: descRef.current,
                    offsetY: 100,
                  },
                })
                .then(() => {
                  gsap.to('.letter', {
                    opacity: 1,
                    duration: 1,
                    stagger: 0.7,
                    onComplete: () => {
                      setActivated(true);
                    },
                  });

                  gsap.to('.letter-desc', {
                    opacity: 1,
                    translateY: 0,
                    duration: 1,
                    stagger: 0.7,
                  });
                });
            }
          },
        },
      });
    });

    return () => {
      cxt.revert();
    };
  }, [media, activated]);

  return (
    <div ref={ref}>
      <Layout className="pb-12 pt-[52px] md:pb-[72px] md:pt-[72px] xl:py-[88px]">
        <div
          ref={descRef}
          className="mb-11 font-satoshi text-[20px] font-medium leading-[32px] md:mb-14 md:text-[24px] md:leading-[160%] xl:mb-20 xl:text-next-heading-5"
        >
          We push for innovation in product design. Digital transformation
          knocks in the door of every industry, and we provide services that
          will help you be ahead of time with product design decisions that
          last.
        </div>
        <div
          ref={lettersRef}
          className="md:grid md:grid-cols-8 md:gap-6 xl:grid-cols-12 xl:gap-8"
        >
          <Letter
            width="24%"
            letter={
              <svg
                className="h-[98px] w-[76px] md:h-[204px] md:w-[159px] xl:h-[270px] xl:w-[210px]"
                viewBox="0 0 76 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 98V0H40.3546C47.6687 0 53.981 1.43555 59.2917 4.30664C64.6341 7.14583 68.7523 11.1175 71.6461 16.2217C74.5399 21.2939 75.9868 27.1956 75.9868 33.9268C75.9868 40.6898 74.5081 46.6074 71.5507 51.6797C68.6251 56.7201 64.4433 60.6279 59.0055 63.4033C53.5676 66.1787 47.1122 67.5664 39.6391 67.5664H14.7394V48.9043H35.2506C38.8123 48.9043 41.7856 48.2822 44.1706 47.0381C46.5875 45.7939 48.416 44.0553 49.6562 41.8223C50.8964 39.5573 51.5165 36.9255 51.5165 33.9268C51.5165 30.8962 50.8964 28.2803 49.6562 26.0791C48.416 23.846 46.5875 22.1234 44.1706 20.9111C41.7538 19.6989 38.7805 19.0928 35.2506 19.0928H23.6117V98H0Z"
                  fill="#19191B"
                />
              </svg>
            }
            title="Perfection"
            description={`We don’t settle with just "ok". We exceed expectations and bring everything to 110%. Even if something is already in action, we try to improve it. There is nothing perfect but we aim for perfection.`}
          />
          <Letter
            index={1}
            width="25%"
            letter={
              <svg
                className="h-[98px] w-[83px] md:h-[204px] md:w-[172px] xl:h-[270px] xl:w-[228px]"
                viewBox="0 0 83 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.983 0H82.5V62.4195C82.5 69.6332 80.7703 75.9177 77.311 81.2729C73.8517 86.5966 69.0277 90.7232 62.839 93.6528C56.6503 96.5509 49.4619 98 41.2738 98C32.9905 98 25.7545 96.5509 19.5658 93.6528C13.3771 90.7232 8.56895 86.5966 5.14137 81.2729C1.71379 75.9177 0 69.6332 0 62.4195V0H23.5646V60.3877C23.5646 63.7268 24.2946 66.7036 25.7545 69.3182C27.2461 71.9328 29.3249 73.9804 31.9908 75.4609C34.6567 76.9415 37.751 77.6818 41.2738 77.6818C44.7966 77.6818 47.8751 76.9415 50.5092 75.4609C53.1751 73.9804 55.2539 71.9328 56.7455 69.3182C58.2372 66.7036 58.983 63.7268 58.983 60.3877V0Z"
                  fill="#19191B"
                />
              </svg>
            }
            title="Unity"
            description={`Glow is a small and cozy family. Our strength is in our unity. Here you can be yourself. Show your strong sides and others will cover your weaknesses. Together we are more than just one.`}
          />
          <Letter
            index={2}
            width="25%"
            letter={
              <svg
                className="h-[98px] w-[78px] md:h-[204px] md:w-[162px] xl:h-[270px] xl:w-[214px]"
                viewBox="0 0 78 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.1297 29.9315C53.8202 26.5125 52.4429 23.8551 49.998 21.9591C47.584 20.032 44.1332 19.0685 39.6456 19.0685C36.6745 19.0685 34.1986 19.457 32.2178 20.2341C30.2371 21.0111 28.7516 22.0834 27.7612 23.451C26.7708 24.7875 26.2602 26.326 26.2292 28.0666C26.1673 29.4964 26.4459 30.7552 27.0648 31.843C27.7148 32.9309 28.6432 33.8944 29.8502 34.7336C31.0882 35.5417 32.5737 36.2566 34.3069 36.8782C36.04 37.4998 37.9898 38.0438 40.1562 38.51L48.3267 40.3749C53.031 41.4006 57.1781 42.7682 60.7682 44.4776C64.3892 46.1871 67.4222 48.223 69.8672 50.5852C72.3431 52.9473 74.2155 55.667 75.4844 58.7441C76.7533 61.8211 77.4033 65.2712 77.4342 69.0942C77.4033 75.124 75.8867 80.2991 72.8847 84.6194C69.8827 88.9397 65.5653 92.2499 59.9326 94.55C54.3308 96.85 47.5685 98 39.6456 98C31.6917 98 24.7591 96.8034 18.8479 94.4101C12.9366 92.0168 8.34073 88.3803 5.06015 83.5005C1.77956 78.6207 0.0928467 72.451 0 64.9914H22.0047C22.1904 68.0685 23.0105 70.6327 24.4651 72.6841C25.9197 74.7355 27.9159 76.2896 30.4537 77.3463C33.0225 78.4031 35.9936 78.9315 39.367 78.9315C42.4619 78.9315 45.0926 78.5119 47.259 77.6727C49.4564 76.8335 51.1431 75.6679 52.3192 74.176C53.4952 72.6841 54.0987 70.9746 54.1297 69.0476C54.0987 67.2448 53.5416 65.7063 52.4584 64.432C51.3752 63.1265 49.704 62.0076 47.4447 61.0752C45.2164 60.1116 42.3691 59.2258 38.9028 58.4177L28.9682 56.0866C20.7358 54.1906 14.252 51.1291 9.5168 46.902C4.78162 42.6438 2.42949 36.8938 2.46044 29.6518C2.42949 23.7463 4.00789 18.5712 7.19563 14.1265C10.3834 9.68189 14.7936 6.2163 20.4263 3.72978C26.059 1.24326 32.4809 0 39.692 0C47.0578 0 53.4488 1.2588 58.8648 3.7764C64.3119 6.26293 68.5364 9.7596 71.5384 14.2664C74.5405 18.7732 76.0724 23.9949 76.1343 29.9315H54.1297Z"
                  fill="#19191B"
                />
              </svg>
            }
            title="Simplicity"
            description={`We work with complicated products, but we aim to make them simple. Simple how? Simple with right priorities: focus on the main and discard the rest. 20% of effort bring 80% of the result.`}
          />
          <Letter
            index={3}
            width="26%"
            letter={
              <svg
                className="h-[98px] w-[86px] md:h-[204px] md:w-[179px] xl:h-[270px] xl:w-[237px]"
                viewBox="0 0 86 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 98V0H23.6356V39.334H62.1687V0H85.7566V98H62.1687V58.6182H23.6356V98H0Z"
                  fill="#19191B"
                />
              </svg>
            }
            title="Honesty"
            description={`Every product is designed for people. And honesty is crucial in relationships. That is why we are always honest with people, and design we are working on. Even if it drives us out of the comfort zone.`}
          />
        </div>
      </Layout>
    </div>
  );
}

function Letter({ letter, title, description, index = 0 }) {
  const media = useMediaAtom();
  const delay = index * 50;

  return (
    <div className="mb-[38px] flex justify-between gap-4 last:mb-0 md:col-span-2 md:flex-col md:justify-start md:space-x-0 xl:col-span-3">
      <div
        delay={delay}
        className={cx(
          'letter relative flex max-h-[105px] w-full max-w-[110px] md:mb-[57px] md:max-h-[204px] md:w-full md:max-w-[230px] xl:mb-[56px] xl:max-h-[270px] xl:max-w-full'
          // { 'py-[9px]': index !== 2 }
        )}
      >
        {letter}
      </div>
      <div className="letter-desc mt-[-6px] w-full md:mt-0 md:w-full">
        <div
          delay={50 + delay}
          className="mb-2 font-satoshi text-[24px] font-medium leading-[32px] md:mb-4 xl:mb-6 xl:text-next-heading-5"
        >
          {title}
        </div>
        <div
          delay={100 + delay}
          className="text-[16px] leading-[26px] md:w-full md:max-w-full xl:text-next-body-m"
        >
          {description}
        </div>
      </div>
    </div>
  );
}
