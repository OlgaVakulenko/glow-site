import cx from 'clsx';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import FooterForm from './Footer/FooterForm';
import Layout from './Layout';
import GlowImg from './Pages/Home/assets/glow555.png';
import Image from './Image';
import CalendlyEmbed from './CalendlyEmbed';
import Button2 from './Button';
import { FAQ } from '../pages/contact-us';
import Animated from './Animated';
import BgSm from './Pages/Home/assets/form-bgg.png';
import BgMd from './Pages/Home/assets/form-bg-md.png';
import BgXl from './Pages/Home/assets/form-bg-xl.png';
import BgDesktop from '../assets/img/bg-form-tab.png';
import FormBg from './Pages/Home/assets/form-bg-2.png';

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
            'mb-[52px] h-[584px]  sm:h-[480px] md:mb-[72px] md:!pb-[48px] xl:mb-[112px] xl:h-[600px] xl:!px-[64px] xl:!py-[72px]':
              _isSubmitted,
          }
        )}
      >
        <Image
          src={FormBg}
          alt=""
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
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
                    <h1 className="pb-8 md:pb-14 x-1280:pb-0">
                      Let’s make <br className="" />
                      your project glow
                    </h1>
                  }
                </div>
              )}
            </div>
            {_isSubmitted ? (
              <div className="mt-[20px] text-subtitle-m xxs:max-w-[250px] xs:max-w-full sm:max-w-[430px] md:text-body-m xl:max-w-full xl:text-body-m">
                Our team will get back to you within 12-24 hours
                <span className="not-italic">🙌</span>
              </div>
            ) : (
              <div className="hidden max-w-[259px] flex-col items-start text-next-heading-7 xl:flex">
                <div>Become a client</div>
                <div>
                  <a href="mailto:hello@glow.team">hello@glow.team</a>
                </div>
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
    </Layout>
  );
}
