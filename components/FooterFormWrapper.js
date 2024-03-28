import cx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FooterForm from './Footer/FooterForm';
import Layout from './Layout';
import GlowImg from './Pages/Home/assets/glow555.png';
import Image from './Image';

const footerStyle = 'default';
export default function FooterFormWrapper({ isSubmitted: showSuccess }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const _isSubmitted = isSubmitted || showSuccess;

  return (
    <Layout disableOnMobile={true} className="grow px-2">
      <div
        className={cx(
          'relative overflow-hidden rounded-3xl bg-black p-6 text-white md:rounded-[32px] md:p-12 xl:p-20 xl:px-16 xl:py-[72px]',
          {
            '4xl:px-24 4xl:py-[120px]': footerStyle === 'default',
            'xl:pt-14': footerStyle === 'trial',
            'h-full !pb-8 md:!pb-20 xl:!p-20': _isSubmitted,
          }
        )}
      >
        <Image
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block md:rotate-180 xl:bottom-0 xl:left-0 xl:rotate-0"
          src={GlowImg}
          alt=""
        />
        <div
          className={cx(
            'relative xl:grid xl:grid-flow-row xl:grid-cols-12 xl:gap-8',
            {
              'flex h-full flex-col justify-between': _isSubmitted,
            }
          )}
        >
          <div
            className={cx(' md:max-w-[600px] xl:col-span-6 4xl:max-w-full', {
              'mb-8 md:mb-[56px]': footerStyle !== 'trial',
            })}
          >
            <div className="font-glow text-[40px] font-medium leading-[48px] md:text-[56px] md:leading-[64px] xl:text-[72px] xl:leading-[72px]">
              {_isSubmitted ? (
                <div>
                  <div>Let’s get to work together</div>
                </div>
              ) : (
                <div>
                  {
                    <h1>
                      Let’s make <br className="hidden md:block" />
                      your project glow
                    </h1>
                  }
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
