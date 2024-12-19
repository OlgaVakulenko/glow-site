import cx from 'clsx';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useMemo, useEffect, useRef } from 'react';
import { useSetAtom } from 'jotai';
import { themeAtom } from '../../../lib/theme';
import { useMediaAtom } from '../../../lib/agent';
import { getFullTitle } from '../../HeadTitle';
import { useHeaderTheme } from '../../Header';
import Animated from '../../Animated';
import Layout from '../../Layout';
import Heading from '../../Heading';
import Box from '../../Box';
import AiCard from './AiCard';
import AiHeader from './AiHeader/AiHeader';
import { aiLogoBlockData } from '../../../data/ai-logo-block-data';
import { items } from '../../../data/ai-graphic-data';
import { companiesSectionData } from '../../../data/ai-companies-data';
import { CasesSlider2 } from '../../CasesSlider/CasesSlider';
import { aiFaqItems } from '../../../data/ai-faq-items';
import { iconsSectionItems } from '../../../data/ai-icons-section-data';

const GraphicBlock = dynamic(() => import('../../GraphicBlock'));
const IconsSection = dynamic(() => import('../../IconsSection'));
const Reviews = dynamic(() => import('../Home/Reviews2'));
const TrialBanner = dynamic(() => import('../Home/TrialBanner'));
const FAQ = dynamic(() =>
  import('../../../pages/contact-us').then((mod) => mod.FAQ)
);

function Card({ className, children }) {
  return (
    <div
      className={cx(
        'dark-card overflow-hidden rounded-2xl p-4 md:p-8 xl:p-12',
        className
      )}
    >
      {children}
    </div>
  );
}

function IconCard({ item }) {
  return (
    <div className="ai-logo-border group relative flex flex-col items-center justify-center">
      <div className="duration-900 z-[3] transform transition-all group-hover:translate-y-[-8px]">
        <span className="block group-hover:hidden">{item.icon}</span>
        <span className="hidden opacity-0 transition-opacity duration-1000 group-hover:block group-hover:opacity-100">
          {item.hoverIcon}
        </span>
      </div>
      <div className="z-[3] cursor-default text-[0px] opacity-0 transition-opacity duration-1000 group-hover:text-next-body-xs group-hover:opacity-80">
        {item.title}
      </div>
    </div>
  );
}

const AIDesign = () => {
  return (
    <div className="md:grid-row-7 grid gap-4 md:h-[708px] md:grid-cols-4 xl:max-h-[684px] xl:grid-rows-6">
      <Card className="card-underlay relative order-1 md:col-span-2 md:row-span-2 md:min-h-[272px] xl:row-span-3">
        <h2 className="ai-design-card-title mb-6 text-next-heading-6 md:text-next-heading-5 md-safe:mb-8 xl:mb-[58px] xl:text-next-heading-4">
          AI Design Shapes the Future Landscape
        </h2>
        <p className="ai-design-card-description text-next-body-s xl:text-next-body-m">
          The AI industry is a leader in the Web4 revolution. With a proven
          track record, we navigate the dynamic landscape of artificial
          intelligence, shaping tomorrow&apos;s technology today.
        </p>
      </Card>
      <Card className="ai-card glow-border-light3 order-2 min-h-[251px] min-w-[343px] !p-0 md:col-span-2 md:row-span-3 md-safe:min-h-[346px] md-safe:min-w-[472px] xl:row-span-4 xl:h-[474px] xl:min-w-[647px]">
        <AiCard />
      </Card>
      <Card className="order-5 grid h-[420px] grid-cols-2 grid-rows-3 !border-[0.5px] !p-0 md:order-4 md:col-span-2 md:row-span-5 xl:row-span-3 xl:h-[334px] xl:grid-cols-3 xl:grid-rows-2">
        {aiLogoBlockData?.map((item, index) => {
          return <IconCard item={item} key={index} />;
        })}
      </Card>
      <Card className="order-3 self-end p-4 md:order-4 md:col-span-2 md:row-span-2 md:!px-8 md:py-6 xl:col-span-1 xl:row-span-2 xl:h-[194px] xl:w-[316px] xl:pb-[30px] xl:pt-9">
        <p className="design-number-card-title mb-5 text-next-heading-5 md:text-next-heading-4 xl:mb-8">
          $196B+
        </p>
        <p className="design-number-card-description text-next-body-s">
          The estimated value of the
          <br className="hidden xl:block" /> global AI market{' '}
          <br className="hidden md:block xl:hidden" /> as of 2024.
        </p>
      </Card>
      <Card className="order-4 self-end p-4 md:order-5 md:col-span-2 md:row-span-2 md:!px-8 md:py-6 xl:col-span-1 xl:row-span-2 xl:h-[194px] xl:w-[316px] xl:pb-[30px] xl:pt-9">
        <p className="design-number-card-title mb-5 text-next-heading-5 md:text-next-heading-4 xl:mb-8">
          ↑13x
        </p>
        <p className="design-number-card-description text-next-body-s">
          The growth of the global AI market in the next{' '}
          <br className="hidden md:block xl:hidden" />7 years.
        </p>
      </Card>
    </div>
  );
};

export default function AI() {
  const ref = useRef(null);
  const setTheme = useSetAtom(themeAtom);
  const media = useMediaAtom();

  const filter = media === 'mobile' ? ['/beast', '/cryptogenie'] : [];

  useHeaderTheme({ ref, theme: 'dark' });
  useEffect(() => {
    setTheme('dark');

    return () => {
      setTheme('light');
    };
  }, [setTheme]);

  const productsHeadingTitle = useMemo(() => {
    return (
      <>
        The range of<span className="ai-text"> AI products</span>
        <br className="hidden md:block" /> we work with
      </>
    );
  }, []);

  const companiesTitle = useMemo(() => {
    return (
      <>
        Types of<span className="ai-text"> AI companies</span>
        <br className="hidden md:block" /> collaborate with us
      </>
    );
  }, []);

  const companiesDescription = useMemo(() => {
    return companiesSectionData.map((item, index) => {
      return (
        <Animated
          delay={100 * (index + 1)}
          className={cx(
            'flex flex-col items-start justify-start text-[#FFFFFFCC] md-safe:min-w-[450px] xl:min-w-[632px]',
            { 'mb-14 md:mb-0 xl:mb-[120px]': index === 0 }
          )}
          key={index}
        >
          <div
            className={cx(
              'bg-dark-tag gradient-red-border flex h-[44px] items-center rounded-full py-3 font-inter text-sm',
              // 'gradient-grey-border': !item.isBorder,
              { 'w-[149px] pl-4': index === 0, 'w-[242px] pl-8': index === 1 }
            )}
          >
            <span className="absolute z-10"> {item.tagIcon}</span>
            <span className="overtext ml-8 w-full">{item.tagText}</span>
          </div>
          <h3 className="white-gradient-text pb-4 pt-6 !font-inter text-next-heading-6 md:pt-8 md:text-next-heading-5 md:!leading-9 xl:tracking-normal">
            {item.title}
          </h3>
          <div className="text-next-body-s md:text-next-body-m">
            {item.description}
          </div>
        </Animated>
      );
    });
  }, []);

  const reviewsTitle = useMemo(() => {
    return (
      <>
        Discover our <br />
        <span className="ai-text-header"> customers&apos;</span> testimonials
      </>
    );
  }, []);

  return (
    <div className="dark-theme relative overflow-hidden bg-[#0a0a0b] pb-[52px] text-white md:pb-[72px] xl:pb-[88px]">
      <Head>
        <title>{getFullTitle('AI Design Agency')}</title>
        <meta
          name="description"
          content="We specialize in blending cutting-edge artificial intelligence with creative design to transform your business. Explore our services and see how we can elevate your brand today."
        ></meta>
      </Head>
      <AiHeader />
      <Box className="md:!pt-0">
        <Layout>
          <AIDesign />
        </Layout>
      </Box>
      <Box>
        <Layout>
          <Heading
            animate
            title={productsHeadingTitle}
            titleClassNames="white-gradient-text xl:pl-3"
            classNames="mb-16 md:mb-0"
            description="Our expertise is grounded in transformative experiences backed by industry figures that speak volumes. Unleashing the potential of AI, we craft solutions that transcend expectations."
            descriptionClassNames="md:!text-next-body-m md:!max-w-[413px] xl:!max-w-[534px] md:self-end text-[#ffffffcc] !self-center"
          />
          <Box className="!pt-0 pb-7 md:!pb-0 md:!pt-14 xl:!pt-[80px]">
            <GraphicBlock
              items={items}
              className="gap-[72px] md:gap-8 xl:!gap-8"
              blockClassNames="md:p-6 xl:w-[416px] md-safe:w-[464px] md:min-h-[340px]"
              titleClassNames="!font-inter !font-normal md:!leading-9"
              descriptionClassNames="text-next-body-s xl:text-next-body-s text-[#ffffffcc]"
            />
          </Box>
        </Layout>
      </Box>
      <Box>
        <Layout>
          <Animated as="h2" className="our-work-text mb-10 shrink-0 text-next-heading-5 md:mb-14 md:text-next-heading-3 xl:mb-20 xl:text-next-heading-2">
            Our work
          </Animated>
        </Layout>
        <CasesSlider2 filter={filter} disableOnMobile padding={false} />
      </Box>
      <Box>
        <Layout>
          <Heading
            animate
            title={companiesTitle}
            description={companiesDescription}
            isColumn={media === 'tablet'}
            titleClassNames="md:!mb-3 !mb-10 white-gradient-text"
            descriptionClassNames="md:!text-next-body-m xl:!max-w-[625px] md:self-end opacity-80 !self-center md:gap-x-[60px]"
          />
        </Layout>
      </Box>
      <Box className="grid gap-16 xl:gap-[120px]">
        <Layout>
          <TrialBanner />
        </Layout>
      </Box>
      <Box>
        <Layout>
          <Animated
            delay={100}
            as="h2"
            className="white-gradient-text mb-4 shrink-0 text-next-heading-5 md:mb-14 md:text-next-heading-3 xl:text-next-heading-2"
          >
            Why choose <span className="ai-text">Glow Team</span>
          </Animated>
        </Layout>
        <IconsSection
          items={iconsSectionItems}
          sectionClasses="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:mt-20 md:mt-14 mt-10 md:gap-x-8 gap-y-11"
          blockClasses="gap-6"
          titleClasses="text-body-heading-m2 font-satoshi font-normal"
          iconClasses="w-[72px] h-[72px] xl:w-20 xl:h-20 "
        />
      </Box>
      <Box>
        <Reviews title={reviewsTitle} padding={false} animate />
      </Box>
      <Box>
        <Layout>
          <FAQ padding={false} items={aiFaqItems} animate />
        </Layout>
      </Box>
    </div>
  );
}
