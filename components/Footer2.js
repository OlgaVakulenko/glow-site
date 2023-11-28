import { useCallback, useState } from 'react';
import FooterForm from './Footer/FooterForm';
import FooterLinks from './Footer/FooterLinks';
import Layout from './Layout';
import cx from 'clsx';
import { useRouter } from 'next/router';
import SlotsLeftButton from './Pages/Trial/SlotsLeftButton';

export default function Footer2({
  footerSuccess: isSubmitted,
  footerStyle = 'default',
  hideToggles = false,
}) {
  const router = useRouter();

  const setIsSubmitted = useCallback(() => {
    router.push('/form-success');
  }, [router]);

  return (
    <footer
      id="footer"
      className={cx('md:mt-8', {
        '!mt-0 flex h-screenx flex-col !pt-[120px]': isSubmitted,
      })}
    >
      <Layout disableOnMobile={true} className="grow">
        <div
          className={cx(
            'bg-black px-4 pb-[48px] pt-[44px] text-lblue md:rounded-3xl md:px-12 md:pb-20 md:pt-16 xl:rounded-[32px] xl:p-20',
            {
              '4xl:px-24 4xl:py-[120px]': footerStyle === 'default',
              'xl:pt-14': footerStyle === 'trial',
              'h-full !pb-8 md:!pb-20 xl:!p-20': isSubmitted,
            }
          )}
        >
          <div
            className={cx('xl:grid xl:grid-flow-row xl:grid-cols-12 xl:gap-8', {
              'flex h-full flex-col justify-between': isSubmitted,
            })}
          >
            <div
              className={cx(' md:max-w-[528px] xl:col-span-6 4xl:max-w-full', {
                'mb-8 md:mb-[54px]': footerStyle !== 'trial',
              })}
            >
              <div className="font-glow text-[32px] leading-[32px] md:text-[54px] md:leading-[56px]  xl:text-heading-h1-2  4xl:text-[92px] 4xl:leading-[92px]">
                {isSubmitted ? (
                  <div>
                    <div>Let’s get to work together</div>
                  </div>
                ) : (
                  <div>
                    {footerStyle === 'trial' && (
                      <div>
                        <SlotsLeftButton
                          type="footer"
                          className="mb-8 mt-5 md:mb-9 md:mt-0"
                        />
                      </div>
                    )}
                    {footerStyle === 'trial' ? (
                      <>
                        Let’s talk
                        <br className="hidden xl:block" /> about you
                      </>
                    ) : (
                      <>
                        Let’s make <br className="hidden md:block" />
                        your project glow
                      </>
                    )}
                  </div>
                )}
              </div>
              {isSubmitted ? (
                <div className="mt-6 text-subtitle-m italic opacity-50 md:text-body-m xl:text-body-m">
                  Our team will get back to you within 12-24 hours{' '}
                  <span className="not-italic">🙌</span>
                </div>
              ) : null}
            </div>
            <div
              className={cx('xl:col-span-6', {
                'self-end': footerStyle === 'trial',
              })}
            >
              <FooterForm
                hideToggles={hideToggles}
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
                footerStyle={footerStyle}
              />
            </div>
          </div>
        </div>
      </Layout>
      <Layout>
        <div className="py-6">
          <FooterLinks className="!text-black" />
        </div>
      </Layout>
    </footer>
  );
}
