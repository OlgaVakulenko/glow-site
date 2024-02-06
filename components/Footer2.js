import { useCallback, useState } from 'react';
import FooterForm from './Footer/FooterForm';
import FooterLinks from './Footer/FooterLinks';
import Layout from './Layout';
import cx from 'clsx';
import { useRouter } from 'next/router';
import SlotsLeftButton from './Pages/Trial/SlotsLeftButton';
import Link from 'next/link';
import Button2 from './Button2';
import FooterFormWrapper from './FooterFormWrapper';
import Image, { Source, resolve } from './Image';
import GlwEffect from './Pages/Home/assets/glw-eff.png';
import GlwEffectM from './Pages/Home/assets/glw-eff-m.png';
import { useIsClient } from '../lib/utils';

function SlotText() {
  const isClient = useIsClient();
  const [month] = useState(() => {
    const date = new Date();
    const month = date.toLocaleString('en', { month: 'long' });

    return month;
  });

  if (!isClient) return null;

  return <span>2 slots available in {month}</span>;
}

export default function Footer2({
  footerSuccess: isSubmitted,
  footerStyle = 'default',
  hideToggles = false,
  showForm = true,
}) {
  const router = useRouter();

  const setIsSubmitted = useCallback(() => {
    const u = footerStyle === 'trial' ? '/form-success3' : 'form-success';

    router.push(u);
  }, [router, footerStyle]);

  return (
    <footer
      id="footer"
      className={cx('md:mt-8', {
        '!mt-0 flex h-screenx flex-col !pt-[120px]': isSubmitted,
      })}
    >
      {isSubmitted ? (
        <FooterFormWrapper isSubmitted={isSubmitted} />
      ) : (
        showForm && (
          <Layout disableOnMobile={true}>
            <div className="noise-bg2 relative overflow-hidden bg-black px-4 py-[121px] md:rounded-[32px] md:py-20 xl:py-[142px] xl:pb-[128px] xl:pt-[131px]">
              <picture>
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
              </picture>
              <div className="relative z-[1] text-center">
                <div className="mb-6 text-button-m2 uppercase text-brand md:mb-8 md:text-button-l xl:mb-[29px]">
                  <SlotText />
                </div>
                <div className="mb-4 text-center font-glow text-heading-h3 font-medium text-white md:text-heading-h2-2 xl:text-heading-h1-2">
                  Let’s make
                  <br /> your project glow
                </div>
                <div className="mb-10 text-body-xs text-white md:mb-14 md:text-body-m2">
                  Our team will get back to you
                  <br className="md:hidden" /> within 24 hours 🙌
                </div>
                <div className=" text-center">
                  <Button2 color="white" as={Link} href="/contact-us">
                    Book a free call
                  </Button2>
                </div>
              </div>
            </div>
          </Layout>
        )
      )}
      <Layout>
        <div className="py-6 md:py-11">
          <FooterLinks className="!text-black" />
        </div>
      </Layout>
    </footer>
  );
}
