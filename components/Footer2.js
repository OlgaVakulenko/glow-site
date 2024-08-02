'use client';
import cx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
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
    <span className={cx ("glow-border-light mx-auto block min-h-[28px] w-fit rounded-full px-[12px] py-[2px] text-next-tag", {'slot-text-dark': theme === 'dark'})}>
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
        '!mt-0 flex h-screenx flex-col !pt-[120px] font-inter': isSubmitted,
				'bg-[#0a0a0b]': dark
      })}
    >
      {isSubmitted ? (
        <FooterFormWrapper isSubmitted={isSubmitted} />
      ) : (
        showForm && (
          <Layout disableOnMobile={true} className="px-2">
            <div className="text-inter dark-outline relative overflow-hidden rounded-3xl bg-black px-6 py-[138px] md:rounded-[32px] md:py-[134px] xl:py-[142px] xl:pb-[124px] xl:pt-[128px]">
              <Image
                src={dark ? '/img/form-bg-dark.png' : FormBG}
                alt=""
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              />
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
                <h3 className="mb-8 text-center text-next-heading-4 text-white md:mb-8 md:text-next-heading-3 xl:mb-8 xl:text-[72px] xl:leading-[72px]">
                  Let’s make
                  <br /> your project glow
                </h3>
                <div className="mb-10 text-[16px] leading-[24px] text-white md:mb-10 md:text-next-body-s xl:mb-10 xl:text-[18px]">
                  Our team will get back to you within 24 hours 🙌
                </div>
                <div className=" text-center">
                  <Button2
                    // color="white"
                    as={Link}
                    href="/contact-us"
                    className={cx("!bg-white !text-black md:w-auto", {'w-full font-medium': !dark, 'w-auto font-normal': dark})}
                    compact
                  >
                    Book a free call
                  </Button2>
                </div>
              </div>
            </div>
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
