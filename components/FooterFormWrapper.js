import { useState } from 'react';
import FooterForm from './Footer/FooterForm';
import Layout from './Layout';
import SlotsLeftButton from './Pages/Trial/SlotsLeftButton';
import cx from 'clsx';
import { useRouter } from 'next/router';

const footerStyle = 'default';
export default function FooterFormWrapper({ isSubmitted: showSuccess }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const _isSubmitted = isSubmitted || showSuccess;

  return (
    <Layout disableOnMobile={true} className="grow">
      <div
        className={cx(
          'bg-black px-4 py-10 text-lblue md:rounded-3xl md:px-12 md:pb-20 md:pt-16 xl:rounded-[32px] xl:p-20',
          {
            '4xl:px-24 4xl:py-[120px]': footerStyle === 'default',
            'xl:pt-14': footerStyle === 'trial',
            'h-full !pb-8 md:!pb-20 xl:!p-20': _isSubmitted,
          }
        )}
      >
        <div
          className={cx('xl:grid xl:grid-flow-row xl:grid-cols-12 xl:gap-8', {
            'flex h-full flex-col justify-between': _isSubmitted,
          })}
        >
          <div
            className={cx(' md:max-w-[528px] xl:col-span-6 4xl:max-w-full', {
              'mb-12 md:mb-[54px]': footerStyle !== 'trial',
            })}
          >
            <div className="font-glow text-heading-h3 font-medium md:text-[54px] md:leading-[56px]  xl:text-heading-h1-2  4xl:text-[92px] 4xl:leading-[92px]">
              {_isSubmitted ? (
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
                    <h1>
                      Let’s make <br className="hidden md:block" />
                      your project glow
                    </h1>
                  )}
                </div>
              )}
            </div>
            {_isSubmitted ? (
              <div className="mt-6 text-subtitle-m italic opacity-50 md:text-body-m xl:text-body-m">
                Our team will get back to you within 12-24 hours{' '}
                <span className="not-italic">🙌</span>
              </div>
            ) : null}
          </div>
          {
            <div
              className={cx('xl:col-span-6', {
                'self-end': footerStyle === 'trial',
              })}
            >
              <FooterForm
                // hideToggles={hideToggles}
                isSubmitted={_isSubmitted}
                setIsSubmitted={() => {
                  // setIsSubmitted(true);
                  router.push('/form-success');
                }}
                footerStyle={footerStyle}
              />
            </div>
          }
        </div>
      </div>
    </Layout>
  );
}
