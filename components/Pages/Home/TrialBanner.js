import Image from '../../Image';
import Layout from '../../Layout';
import Bg from './assets/trial-bg.png';
import Logo from './assets/trial-logo.png';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from '../../../dist/gsap';
import RollingText from '../../RollingText';
import SphereBg from './assets/sphere-bg.png';

export default function TrialBanner() {
  const wrapperRef = useRef();
  const targetRef = useRef();

  useEffect(() => {
    if (!targetRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targetRef.current,
        { y: 140 },
        {
          y: -50,
          scrollTrigger: {
            trigger: wrapperRef.current,
            scrub: true,
            start: 'top 100%',
            end: 'bottom 0%',
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Layout className="pb-24 md:pb-[136px] layout-no-p:pb-[160px]">
      <Link href="/trial">
        <div
          ref={wrapperRef}
          className="relative overflow-hidden rounded-3xl px-6 py-10 md:flex md:min-h-[328px] md:px-12 md:py-14 xl:py-16 layout-no-p:min-h-[463px] layout-no-p:px-24 layout-no-p:py-20"
        >
          <div className="absolute inset-0 md:hidden">
            <Image className="h-full w-full object-cover" src={Bg} alt="" />
          </div>
          <Image
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
            src={SphereBg}
            alt=""
          />
          <div
            ref={targetRef}
            className="absolute bottom-0 left-[-6rem] right-[-5.5rem] top-[-14%] md:left-[9%] md:right-[-25%] md:top-[-114%] xl:top-[-120%] layout-no-p:top-[-75%] 2k:top-[-95%]"
          >
            <Image src={Logo} alt="" className="2k:w-[70%]" />
          </div>
          <div className="relative flex w-full items-center">
            <div className="w-full items-center justify-between md:flex md:h-full">
              <div className="mb-3 pt-[138px] font-glow text-[46px] font-medium leading-[49px] tracking-[-2px] text-lblue text-white md:mb-0 md:max-w-[307px] md:pt-0 xl:pt-[3%] xl:text-heading-h2-2">
                Free 3 day’s design trial
              </div>
              <div className="md:max-w-[413px] md:self-end md:pb-4 md:pr-10 xl:max-w-[450px]">
                <div className="mb-[41px] text-xl italic leading-[27px] text-lblue opacity-50 md:mb-8 md:text-subtitle-l layout-no-p:mb-12 layout-no-p:text-[26px]">
                  Check out how we make ideas glow click-by-click.
                </div>
                <button
                  tabIndex="-1"
                  className="rolling-text-group flex w-full justify-center overflow-hidden whitespace-pre-wrap rounded-full bg-brand py-4 text-xs font-medium uppercase leading-4 tracking-[0.36px] text-black md:w-fit md:px-[34px] layout-no-p:py-[18px] layout-no-p:text-sm layout-no-p:tracking-[0.42px]"
                >
                  <RollingText height={19} text="Free 3 day’s trial" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Layout>
  );
}
