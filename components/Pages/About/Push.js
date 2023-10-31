import Layout from '../../Layout';
import { useMediaAtom } from '../../../lib/agent';
import { useEffect, useRef, useState } from 'react';
import gsap from '../../../dist/gsap';
import PushImage from './assets/push.png';
import Image from '../../Image';

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
          className="mb-[140px] text-[32px] font-medium leading-[40px] md:mb-[128px] md:mb-[200px] md:text-[44px] md:leading-[56px] xl:mb-[117px] xl:text-[48px]"
        >
          <h2 className="md:ml-[25.4%] md:max-w-[64%]">
            We push the transportation industry innovation through product
            design. Digital&nbsp;transformation knocks in the door of every
            industry and we provide the services that will help you to be ahead
            of time with product design decision that last.
          </h2>
        </div>
        <Image src={PushImage} alt="" className="w-full" />
        <div className="mt-[135px] grid gap-12 rounded-[32px] bg-brand px-6 py-10 md:flex md:gap-16 md:px-12 md:py-16 xl:gap-36 xl:px-20">
          <PushItem
            title="Perfection"
            subtitle="By working with transportation related companies we deep"
          />
          <PushItem
            title="Unity"
            subtitle="By working with transportation related companies we deep"
          />
          <PushItem
            title="Simplicity"
            subtitle="By working with transportation related companies we deep"
          />
          <PushItem
            title="Honesty"
            subtitle="By working with transportation related companies we deep"
          />
        </div>
      </Layout>
    </div>
  );
}

function PushItem({ title, subtitle }) {
  return (
    <div>
      <div className="mb-6 text-body-heading-m">{title}</div>
      <div className="text-body-s">{subtitle}</div>
    </div>
  );
}

function Letter({ letter, title, description, width, index = 0 }) {
  const media = useMediaAtom();
  const delay = index * 50;

  return (
    <div
      className="mb-12 flex justify-between md:flex-col md:px-8"
      style={{
        width: media !== 'mobile' ? width : null,
      }}
    >
      <div
        delay={delay}
        className="letter relative w-1/2  md:mb-[104px] md:w-full xl:mb-[120px]"
      >
        {letter}
      </div>
      <div className="letter-desc w-1/2 md:w-full">
        <div delay={50 + delay} className="mb-4 text-body-heading-m">
          {title}
        </div>
        <div
          delay={100 + delay}
          className="max-w-[167px] text-body-s opacity-50 md:max-w-[200px]"
        >
          {description}
        </div>
      </div>
    </div>
  );
}
