'use client';
import cx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useIsClient } from '../lib/utils';
import { useAtom } from 'jotai';
import { themeAtom } from '../lib/theme';
import Button2 from './Button';
import FooterLinks from './Footer/FooterLinks';
import FooterFormWrapper from './FooterFormWrapper';
import Image, { Source, resolve } from './Image';
import Layout from './Layout';
import GlwEffectM from './Pages/Home/assets/glw-eff-m.png';
import GlwEffect from './Pages/Home/assets/glw-eff.png';
import FormBG from './Pages/Home/assets/form-bg.png';
import Animated from './Animated';
import CalendlyEmbed from './CalendlyEmbed';
import { FAQ } from '../pages/contact-us';
import RespImage from './Pages/Cases/Renovation/RespImage';
import BgXl from './Pages/Home/assets/form-bg-xl.png';
import BgMd from './Pages/Home/assets/form-bg-md.png';
import BgSm from './Pages/Home/assets/form-bgg.png';

function SlotText() {
  const isClient = useIsClient();
  const [theme] = useAtom(themeAtom);
  const [month] = useState(() => {
    const date = new Date();
    const month = date.toLocaleString('en', { month: 'long' });

    return month;
  });

  if (!isClient) return null;

  return (
    <span
      className={cx(
        'glow-border-light mx-auto block min-h-[28px] w-fit rounded-full px-[12px] py-[2px] text-next-tag',
        { 'slot-text-dark': theme === 'dark' }
      )}
    >
      2 slots available in {month}
    </span>
  );
}

export default function Footer2({
  footerSuccess: isSubmitted,
  footerStyle = 'default',
  hideToggles = false,
  showForm = true,
}) {
  const router = useRouter();
  const [theme] = useAtom(themeAtom);
  const dark = theme === 'dark';

  const setIsSubmitted = useCallback(() => {
    const u = footerStyle === 'trial' ? '/form-success3' : 'form-success';

    router.push(u);
  }, [router, footerStyle]);

  return (
    <footer
      id="footer"
      className={cx('', {
        'bg-[#0a0a0b]': dark,
        '!mt-0 flex h-screenx flex-col !pt-[88px] font-inter xl:!pt-[112px]':
          isSubmitted,
      })}
    >
      {isSubmitted ? (
        <div className="">
          <FooterFormWrapper isSubmitted={isSubmitted} />
          <Layout>
            <FAQ />
          </Layout>
        </div>
      ) : (
        showForm && (
          <Layout disableOnMobile={true} className="px-2">
            <Animated
              className={cx(
                'text-inter relative rounded-3xl px-6 md:rounded-[32px] md:py-[134px] xl:py-[142px] xl:pb-[124px] xl:pt-[128px]',
                { 'footer-dark dark-outline': dark, "py-[106px]" : router.pathname !== '/trial', "py-[82px]" : router.pathname === '/trial',  }
              )}
            >
              <Image
                src={dark ? '/img/footer/form-bg-dark.png' : FormBG}
                alt=""
                className="pointer-events-none absolute inset-0 z-0 h-full w-full rounded-3xl md:rounded-[32px]"
              />
              {/*<RespImage*/}
              {/*    src={BgSm}*/}
              {/*    md={BgMd}*/}
              {/*    xl={BgXl}*/}
              {/*    className="pointer-events-none absolute inset-0 z-0 h-full w-full"*/}
              {/*/>*/}

              {/* <picture>
                <Source
                  image={GlwEffect}
                  width="1280"
                  media="(min-width: 820px)"
                />
                <Source image={GlwEffectM} width="480" />

                <img
                  className="absolute inset-0 z-0 h-full w-full"
                  src={resolve({ src: GlwEffect.src })}
                  alt=""
                />
              </picture> */}
              <div className="relative z-[1] text-center">
                <div className="mb-[40px] text-[12px] uppercase leading-[24px] tracking-[0.02em] text-white md:mb-10 xl:mb-10">
                  <SlotText />
                </div>
                <div className="mb-8 text-center text-next-heading-4 text-white md:mb-8 md:text-next-heading-3 xl:mb-8 xl:text-[72px] xl:leading-[72px]">
                  {router.pathname === '/trial' ? (
                    <>
                      Ready to start
                      <br /> your free 3 days
                      <br /> design trial?
                    </>
                  ) : (
                    <>
                      Let’s make
                      <br /> your project glow
                    </>
                  )}
                </div>
                <div className="mb-10 text-[16px] leading-[24px] text-lblue md:mb-10 md:text-next-body-s xl:mb-10 xl:text-[18px]">
                  Our team will get back to you within 24 hours 🙌
                </div>
                <div className=" mx-auto flex max-w-[400px] flex-col gap-4 text-center md:block">
                  <CalendlyEmbed
                    classNames="w-full md:w-[160px] xl:w-[180px] mr-[12px]"
                    text={
                      <Button2
                        color="white"
                        className="w-full !bg-[#FFFFFF29] !px-5 !py-3 font-inter font-light normal-case !tracking-[0.01em] text-white"
                        compact
                      >
                        Book a free call
                      </Button2>
                    }
                  />
                  <Button2
                    // color="white"
                    as={Link}
                    href="/contact-us"
                    className={cx(
                      '!bg-white !text-black md:w-[160px] xl:w-[180px]',
                      {
                        'w-full font-medium': !dark,
                        'w-auto font-normal': dark,
                      }
                    )}
                    compact
                  >
                    Get a quote
                  </Button2>
                </div>
              </div>
            </Animated>
          </Layout>
        )
      )}
      <Layout>
        <div className="px-1 pt-6 md:px-0 md:py-[28px]">
          <FooterLinks className="!text-black" />
        </div>
      </Layout>
    </footer>
  );
}
