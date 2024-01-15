import cx from 'clsx';
import { useEffect, useMemo, useRef } from 'react';
import gsap from '../dist/gsap';
import IntroBg from './IntroBg';
import Layout from './Layout';
import { PageHeading2 } from './PageHeading';
import { Subheading2 } from './Typography/Subheading';
import { useIsClient } from '../lib/utils';

export default function IntroSection({
  title,
  subtitle,
  customSubtitle,
  subtitleEl,
  asteriskVisible = true,
}) {
  const ref = useRef();
  const triggerRef = useRef();
  const isClient = useIsClient();

  useEffect(() => {
    if (!asteriskVisible) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: 70,
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: true,
          start: '10% top',
          end: '80% top',
        },
      });
    }, ref);

    return () => {
      ctx.revert();
    };
  }, [asteriskVisible]);
  const SubtitleElement = useMemo(() => {
    return subtitleEl || Subheading2;
  }, [subtitleEl]);

  const showBg = useMemo(() => {
    if (!isClient) return false;

    if (typeof window === 'undefined') {
      return true;
    }
    return !window.location.search.includes('v1');
  }, [isClient]);

  return (
    <div ref={triggerRef}>
      {showBg && <IntroBg />}
      <Layout className="flex flex-col ">
        <div className="relative md:grid md:grid-flow-row md:grid-cols-8 md:gap-8 xl:grid-cols-12 4xl:gap-12">
          <div className="md:col-span-4 lg:col-span-5 xl:col-span-7"></div>
          {customSubtitle || (
            <SubtitleElement
              className={cx(
                'relative mb-8 pt-48 md:col-span-4 md:mb-[87px] md:ml-0 md:mr-8 md:pt-[240px] lg:col-span-3 xl:col-span-5 xl:pt-[272px] 4xl:mb-[158px]',
                {
                  'pointer-events-none': SubtitleElement === Subheading2,
                }
              )}
            >
              {asteriskVisible && (
                <div
                  ref={ref}
                  className="absolute left-0 top-24 w-[134px] md:top-[184px] xl:top-[216px] xl:w-[188px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="178"
                    height="189"
                    viewBox="0 0 178 189"
                    fill="none"
                    className="w-full"
                  >
                    <path
                      opacity="0.1"
                      d="M96.398 189L76.67 122.668L21.5214 164.466L-2.38311e-06 134.481L55.597 94.5L-5.87834e-06 54.5192L21.5214 24.0793L76.67 65.8774L96.398 1.10451e-05L131.37 11.3582L109.4 76.7813L178 75.8726L178 113.127L109.849 112.219L131.37 177.642L96.398 189Z"
                      fill="url(#paint0_linear_5430_3065)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_5430_3065"
                        x1="-4.13073e-06"
                        y1="94.5"
                        x2="178"
                        y2="94.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#19191B" />
                        <stop offset="1" stopColor="#19191B" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}

              {subtitle}
            </SubtitleElement>
          )}
        </div>

        <PageHeading2 className="mb-8 md:mb-16">{title}</PageHeading2>
      </Layout>
    </div>
  );
}
