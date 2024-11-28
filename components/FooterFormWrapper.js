import cx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FooterForm from './Footer/FooterForm';
import Layout from './Layout';
import GlowImg from './Pages/Home/assets/glow555.png';
import Image from './Image';
import CalendlyEmbed from './CalendlyEmbed';
import Button2 from './Button';

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
            'relative xl:grid xl:grid-flow-row xl:grid-cols-24 xl:gap-8',
            {
              'flex h-full flex-col justify-between': _isSubmitted,
            }
          )}
        >
          <div
            className={cx(
              ' 4xl:max-w-full h-full md:max-w-[600px] xl:col-span-12 xl:max-w-full',
              {
                'flex h-full flex-col justify-between': !_isSubmitted,
              }
              // {
              //   'mb-8 md:mb-[56px]': footerStyle !== 'trial',
              // }
            )}
          >
            <div className="text-next-heading-4 md:text-next-heading-2 xl:text-next-heading-0">
              {_isSubmitted ? (
                <div>
                  <div>Let’s get to work together</div>
                </div>
              ) : (
                <div>
                  {
                    <h1 className="pb-14 x-1280:pb-0">
                      Let’s make <br className="hidden md:block" />
                      your project glow
                    </h1>
                  }
                </div>
              )}
            </div>
            {_isSubmitted ? (
              <div className="mt-6 text-subtitle-m opacity-50 md:text-body-m xl:text-body-m">
                Our team will get back to you within 12-24 hours{' '}
                <span className="not-italic">🙌</span>
              </div>
            ) : (
              <div className="hidden max-w-[259px] flex-col items-start gap-8 x-1280:flex">
                <span className="font-satoshi text-[20px] font-medium leading-6">
                  Always busy and want to book an exact time to call?
                </span>
                <CalendlyEmbed
                  text={
                    <Button2
                      flavor="secondary"
                      color="white"
                      className="mt-8 w-[180px] shrink-0 border-0 !bg-[#ffffff30] font-normal md:mt-0"
                      compact
                    >
                      Book a free call
                    </Button2>
                  }
                />
              </div>
            )}
          </div>
          {
            <div
              className={cx('xl:col-span-11 xl:col-start-[14]', {
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
      {!_isSubmitted ? (
        <div
          className={cx(
            'relative mt-2.5 items-center justify-between overflow-hidden rounded-3xl bg-black p-6 text-white sm:flex md:rounded-[32px] md:p-12 xl:p-20 xl:px-16 xl:py-[72px] x-1280:hidden',
            {
              '4xl:px-24 4xl:py-[120px]': footerStyle === 'default',
              'xl:pt-14': footerStyle === 'trial',
              'h-full !pb-8 md:!pb-20 xl:!p-20': _isSubmitted,
            }
          )}
        >
          <p className="mb-6 mr-[72px] max-w-full font-satoshi text-base font-normal leading-6 xs:mr-0 sm:mb-0 sm:max-w-60 md:max-w-64 md:text-[20px] md:font-medium">
            Always busy and want to book an exact time to call?
          </p>
          <CalendlyEmbed
            classNames="sm:w-auto w-full"
            text={
              <Button2
                flavor="secondary"
                color="white"
                className="w-full shrink-0 border-0 !bg-[#ffffff30] font-normal sm:w-[160px]"
                compact
              >
                Book a free call
              </Button2>
            }
          />
        </div>
      ) : null}
    </Layout>
  );
}
