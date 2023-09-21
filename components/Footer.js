import gsap from 'gsap';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useMediaAtom } from '../lib/agent';
import { useRem } from '../lib/utils';
import FooterLinks from './Footer/FooterLinks';
import { useHeaderTheme } from './Header';
import Layout from './Layout';
import DiscoveryCallButton from './Pages/Contacts/DiscoveryCallButton';
import FillFormButton from './Pages/Contacts/FillFormButton';
import {
  ScrollSmootherEnabled,
  ScrollSmootherMounted,
} from './SmoothScroll/ScrollContainer';

const links = [
  { href: 'https://www.facebook.com/glow.design.agency', label: 'Facebook' },
  { href: 'https://medium.com/glow-team', label: 'Medium' },
  { href: 'https://clutch.co/profile/glow-design-agency', label: 'Clutch' },
  { href: 'https://instagram.com/glow_dsgn', label: 'Instagram' },
  { href: 'https://dribbble.com/glow-team', label: 'Dribbble' },
];

function Footer(props) {
  const { showFormButton = true } = props;

  return (
    <footer className="bg-black py-[30px] pt-[61px] text-lblue md:pt-[160px] xl:pt-[176px]">
      <Layout>
        <div className="max-[1020px]:flex-wrap md:flex md:items-baseline md:justify-around min-[1020px]:justify-between">
          <div className="pb-[66px] text-lg italic leading-[24px] md:w-full md:min-w-[292px] md:text-xl md:leading-[27px] xl:min-w-[initial] xl:max-w-[265px]">
            Contact us to upgrade your product and&nbsp;make it top-tier with
            our design.
          </div>
          <DiscoveryCallButton />
          {showFormButton && <FillFormButton />}
        </div>
        <div className="mb-[38px] mt-[68px] font-glow text-[32px] font-medium leading-[100%] md:mb-[112px] md:mt-[110px] md:pl-2 md:text-[60px] xl:mb-[120px] xl:text-[64px]">
          Let’s make
          <br /> your project glow
        </div>
        <FooterLinks />
      </Layout>
    </footer>
  );
}

export function ParallaxFooter(props) {
  const router = useRouter();
  const [height, setHeight] = useState(null);
  const media = useMediaAtom();
  const [scrollMounted] = useAtom(ScrollSmootherMounted);
  const [scrollEnabled] = useAtom(ScrollSmootherEnabled);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useHeaderTheme({ ref: wrapperRef, theme: 'dark', isFooter: true });

  useEffect(() => {
    const onResize = () => {
      const node = contentRef.current;
      if (!node) return;
      setHeight(node.offsetHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (!scrollMounted) {
      return;
    }

    const ctx = gsap.context(() => {
      const scrub = media === 'mobile' ? 0.5 : true;

      gsap.fromTo(
        '.__content',
        {
          yPercent: () => {
            if (media === 'mobile') {
              return 20;
            }

            return scrollEnabled ? -80 : 20;
          },
        },
        {
          scrollTrigger: {
            trigger: wrapperRef.current,
            scrub: true,
            start: 'top bottom',
            end: (e) => {
              if (wrapperRef.current?.offsetHeight > window.innerHeight) {
                return '75% bottom';
              }
              return 'bottom bottom';
            },
          },
          yPercent: 0,
          ease: 'none',
        }
      );
    }, wrapperRef);

    return () => {
      ctx.revert();
    };
  }, [wrapperRef, scrollMounted, scrollEnabled, media, router.pathname]);

  const rem = useRem();

  return (
    <div
      className="overflow-hidden"
      style={{
        clipPath: 'inset(0px 0px 0px 0px)',
        // transform: 'translate3d(0,0,0)',
      }}
    >
      <div
        ref={wrapperRef}
        className="relative flex min-h-screen w-full items-end overflow-hidden bg-black"
        style={{
          height: height != null ? rem(height) : null,
        }}
      >
        <div ref={contentRef} className="__content fixed bottom-0 w-full">
          <Footer height={height} {...props} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
