import gsap from 'gsap';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { useMediaAtom } from '../lib/agent';
import BigButton from './BigButton';
import FooterLinks from './Footer/FooterLinks';
import { useHeaderTheme } from './Header';
import Layout from './Layout';
import LocalTime from './LocalTime';
import RollingText from './RollingText';
import { ScrollSmootherMounted } from './SmoothScroll/ScrollContainer';
import Weather from './Weather';

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
        <div className="md:flex md:items-baseline md:justify-between">
          <div className="pb-[66px] text-lg italic leading-[24px] md:w-full md:min-w-[292px] md:text-xl md:leading-[27px] xl:min-w-[initial] xl:max-w-[265px]">
            Contact us to upgrade your product and&nbsp;make it top-tier with
            our design.
          </div>
          {/* <div className="mb-14 flex flex-col"> */}
          <BigButton
            variant="footer"
            className="mb-4 md:mr-[37px] md:ml-[63px] xl:ml-auto"
          >
            Discovery Call
          </BigButton>
          {showFormButton && (
            <BigButton href="/form" variant="footer" className="">
              Fill out the form
            </BigButton>
          )}
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
  const media = useMediaAtom();
  const [scrollMounted] = useAtom(ScrollSmootherMounted);
  const wrapperRef = useRef(null);

  useHeaderTheme({ ref: wrapperRef, theme: 'dark' });

  useEffect(() => {
    // return;

    if (!scrollMounted) {
      return;
    }

    const ctx = gsap.context(() => {
      const scrub = media === 'mobile' ? 0.5 : true;
      console.log('scrub', scrub);
      gsap.fromTo(
        '.__content',
        {
          yPercent: -80,
        },
        {
          scrollTrigger: {
            trigger: wrapperRef.current,
            scrub,
            start: 'top bottom',
            end: (e) => {
              if (wrapperRef.current?.offsetHeight > window.innerHeight) {
                return '75% bottom';
              }
              return 'bottom bottom';
            },
          },
          yPercent: 0,
          opacity: 1,
          ease: 'none',
        }
      );
    }, wrapperRef);

    return () => {
      ctx.revert();
    };
  }, [wrapperRef, scrollMounted, media]);

  return (
    <div
      ref={wrapperRef}
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-black"
    >
      <div className="__content absolute bottom-0 w-full">
        <Footer {...props} />
      </div>
    </div>
  );
}

export default Footer;
