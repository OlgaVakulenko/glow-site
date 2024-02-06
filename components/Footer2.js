import cx from 'clsx';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import FooterForm from './Footer/FooterForm';
import FooterLinks from './Footer/FooterLinks';
import Layout from './Layout';
import SlotsLeftButton from './Pages/Trial/SlotsLeftButton';
import Button2 from './Button2';
import Link from 'next/link';
import FooterFormWrapper from './FooterFormWrapper';
import GlwEffect from './Pages/Home/assets/glw-eff.png';
import Image from './Image';

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
            <div className="noise-bg2 relative overflow-hidden bg-black px-4 py-[204px] md:rounded-[32px] md:py-[164px] xl:py-[142px]">
              <Image
                className="absolute inset-0 h-full w-full"
                src={GlwEffect}
                alt=""
              />
              <h2 className="mb-10 text-center font-glow text-5xl font-medium leading-none tracking-[-2px] text-white md:mb-14 md:text-[99px] md:leading-[100px] md:tracking-[-3px] xl:text-[112px] xl:leading-[106px]">
                Let’s make
                <br /> your project
                <br className="md:hidden" /> glow
              </h2>
              <div className="text-center">
                <Button2 as={Link} href="/contact-us">
                  Book free call
                </Button2>
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
