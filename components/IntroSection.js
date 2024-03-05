import cx from 'clsx';
import { useEffect, useMemo, useRef } from 'react';
import gsap from '../dist/gsap';
import IntroBg from './IntroBg';
import Layout from './Layout';
import { PageHeading2 } from './PageHeading';
import { Subheading2 } from './Typography/Subheading';
import { useIsClient } from '../lib/utils';

export default function IntroSection({
  showBg = true,
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

  return (
    <div ref={triggerRef}>
      {showBg && <IntroBg />}
      <Layout className="flex items-end justify-between pt-[448px]">
        <PageHeading2 className="shrink-0">{title}</PageHeading2>

        <div className="max-w-[372px] pb-[2px] font-inter text-[18px] leading-[160%]">
          We help startups, scale-ups and unicorns to improve product metrics
          through design: Speed up task completion time
        </div>
      </Layout>
    </div>
  );
}
