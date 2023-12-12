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
      <Layout className="pt-36">
        <div
          ref={descRef}
          className="mb-[140px] text-[32px] font-medium leading-[40px] md:mb-[128px] md:text-[36px] md:leading-[48px] xl:mb-[117px]"
        >
          <h2>
            We push for innovation in product design. Digital transformation
            knocks in the door of every industry, and we provide services that
            will help you be ahead of time with product design decisions that
            last.
          </h2>
        </div>
        <div
          ref={lettersRef}
          className="-mb-12 md:grid md:grid-cols-8 md:gap-8 xl:grid-cols-12"
        >
          <Letter
            width="24%"
            letter={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                fill="none"
              >
                <path
                  d="M47.2289 87.3983C78.9398 87.3983 98 72.0223 98 44.9471C98 18.039 78.9398 4 47.2289 4H0V124H31.8795V87.3983H47.2289ZM47.0602 30.5738C59.7108 30.5738 66.2892 35.922 66.2892 45.2813C66.2892 54.4735 59.7108 60.8245 47.0602 60.8245H31.8795V30.5738H47.0602Z"
                  fill="#19191B"
                />
              </svg>
            }
            title="Perfection"
            description={`We always aim to create the best. We don’t settle with just "ok" or "nice". We exceed expectations and bring everything to 110%. Even if something is already in action, we try to improve it. There is nothing perfect but we still aim for perfection.`}
          />
          <Letter
            index={1}
            width="25%"
            letter={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                fill="none"
              >
                <path
                  d="M102 4H71.0562V75.2142C71.0562 87.4925 66.6356 96.3329 51.0819 96.3329C35.3644 96.3329 30.9438 87.4925 30.9438 75.2142V4H0V74.7231C0 103.209 17.6822 124 51.0819 124C84.1541 124 102 103.209 102 74.7231V4Z"
                  fill="#19191B"
                />
              </svg>
            }
            title="Unity"
            description={`Glow is a small and cozy family where we look after one another. Our strength is in our unity. Here you can be yourself. Show your strong sides and others will cover your weaknesses. Together we are more than just one.`}
          />
          <Letter
            index={2}
            width="25%"
            letter={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                fill="none"
              >
                <path
                  d="M108 85.4491C108 67.3867 96.2496 56.4451 74.1312 52.1031L50.112 47.4138C43.5456 46.1981 38.016 42.8982 38.016 37.3406C38.016 30.5672 43.8912 25.3569 53.568 25.3569C64.4544 25.3569 72.0576 32.6513 72.9216 43.9403H105.926C104.026 17.0204 82.7712 0 53.2224 0C25.4016 0 5.0112 16.3256 5.0112 39.5984C5.0112 59.7449 18.144 71.3813 38.016 75.2022L60.6528 79.5441C67.9104 80.9335 73.2672 84.9281 73.2672 90.3121C73.2672 98.1275 65.8368 102.469 54.6048 102.469C41.1264 102.469 33.3504 95.0014 33.0048 83.1913H0C2.2464 110.806 22.9824 128 55.296 128C87.6096 128 108 111.153 108 85.4491Z"
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
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                fill="none"
              >
                <path
                  d="M31.7449 124V76.0334H76.2551V124H108V4H76.2551V48.624H31.7449V4H0V124H31.7449Z"
                  fill="#19191B"
                />
              </svg>
            }
            title="Honesty"
            description={`Every product is designed for people. And honesty is one of the most important treats of relations between people. That is why we are always honest, even if it drives us out of the comfort zone. We are honest with each other, with our clients, and with the product, we are working on.`}
          />
        </div>
      </Layout>
    </div>
  );
}

function Letter({ letter, title, description, width, index = 0 }) {
  const media = useMediaAtom();
  const delay = index * 50;

  return (
    <div className="mb-12 flex justify-between space-x-4 md:col-span-2 md:flex-col md:justify-start md:space-x-0 xl:col-span-3">
      <div
        delay={delay}
        className={cx(
          'letter relative max-h-[128px] w-1/2 max-w-[128px] md:mb-[57px] md:max-h-full md:w-full md:max-w-full xl:mb-[80px]'
          // { 'py-[9px]': index !== 2 }
        )}
      >
        {letter}
      </div>
      <div className="letter-desc mt-[-6px] w-full md:mt-0 md:w-full">
        <div delay={50 + delay} className="mb-4 text-body-heading-m">
          {title}
        </div>
        <div
          delay={100 + delay}
          className="text-body-s md:w-full md:max-w-full"
        >
          {description}
        </div>
      </div>
    </div>
  );
}
