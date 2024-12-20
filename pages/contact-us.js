import { useCallback, useState } from 'react';
import cx from 'clsx';
import { useAtom } from 'jotai';
import { themeAtom } from '../lib/theme';
import FooterFormWrapper from '../components/FooterFormWrapper';
import Layout from '../components/Layout';
import DefaultLayout from '../components/Pages/Layouts/DefaultLayout';
import Head from 'next/head';
import { getFullTitle } from '../components/HeadTitle';
import FaqItem from '../components/ContactUs/FaqItem';
import Animated from '../components/Animated';
import { faqItems } from '../data/faq-items';
import CalendlyEmbed from '../components/CalendlyEmbed';

export function FAQ({ padding, items = faqItems, animate = false, trial }) {
  const [theme] = useAtom(themeAtom);
  const TitleTag = animate ? Animated : 'h2';
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = useCallback(
    (index) => {
      setOpenIndex(index === openIndex ? null : index);
    },
    [openIndex]
  );

  return (
    <div
      className={cx({
        '"mb-12 xl:mb-[88px]" md:mb-[72px]': padding == null,
      })}
    >
      <TitleTag className={cx("mb-10 text-next-heading-5 md:mb-14 xl:mb-20 xl:text-next-heading-2", {"md:text-next-heading-2": trial, "md:text-next-heading-3": !trial })}>
        <span className={cx({ 'white-gradient-text': theme === 'dark' })}>
          FAQ
        </span>{' '}
        {/*<span className={cx({ 'ai-text': theme === 'dark' })}>questions</span>*/}
      </TitleTag>
      <div>
        {items.map((item, idx) => (
          <Animated key={idx} delay={100 * idx}>
            <FaqItem
              key={idx}
              question={item.q}
              answer={item.a}
              setOpenState={() => handleOpen(idx)}
              isOpen={openIndex === idx}
              className={cx({
                'next-to-open': openIndex !== null && idx === openIndex + 1,
              })}
            />
          </Animated>
        ))}
      </div>
    </div>
  );
}

export default function ContactUs() {
  return (
    <div className="pt-[88px] xl:pt-[112px]">
      <Head>
        <title>{getFullTitle('Contact')}</title>
        <meta
          name="description"
          content={`Have questions or need design solutions? Contact Glow Team's experts for creative and innovative design services.`}
        ></meta>
      </Head>
      <div className="mb-[52px] md:mb-[72px] xl:mb-[88px]">
        <FooterFormWrapper />
      </div>
      <Layout>
        <FAQ />
      </Layout>
    </div>
  );
}

ContactUs.getLayout = function getLayout(page) {
  return (
    <DefaultLayout footerProps={{ showForm: false }}>{page}</DefaultLayout>
  );
};
