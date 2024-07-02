import cx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import { useMemo } from 'react';
import IntroSection2 from '../components/IntroSection2';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import GraphicBlock from '../components/GraphicBlock';
import Box from '../components/Box';
import Logos from '../components/Pages/About/Logos';
import { CasesSlider2 } from '../components/CasesSlider/CasesSlider';
import OurExperience from '../components/Pages/Home/OurExperience';
import Reviews from '../components/Pages/Home/Reviews2';
import TrialBanner from '../components/Pages/Home/TrialBanner';
import Process from '../components/Pages/Services/Process';
import ServicesSelector from '../components/Pages/Services/ServiceSelector';
import { useMediaAtom } from '../lib/agent';
import { FAQ } from './contact-us';
import { getFullTitle } from '../components/HeadTitle';
import { items } from '../data/ai-graphic-data';
import SliderContext from '../components/CasesSlider/SliderContext';
import { companiesSectionData } from '../data/ai-companies-data';

export default function AI() {
	const media = useMediaAtom();
  const filter = media === 'mobile' ? ['/beast', '/cryptogenie'] : [];

	const productsHeadingTitle = useMemo(() => {
		return (
			<>
				The range of <span className='inline-block bg-gradient-red-text text-transparent bg-clip-text'>AI products</span>
				<br className="hidden md:block" />we work with
			</>
		)
	}, [])

	const companiesTitle = useMemo(() => {
		return (
			<>
				Types of <span className='inline-block bg-gradient-red-text text-transparent bg-clip-text'>AI companies</span>
				<br className="hidden md:block" />collaborate with us
			</>
		)
	}, [])

	const companiesDescription = useMemo(() => {
		return (
			companiesSectionData.map((item, index) => {
				return (
					<div className='flex xl:flex-col items-start justify-start xl:mb-20 xl:min-w-[632px]' key={index}>
						<div className={cx(
							'flex case-card-dark rounded-full px-6 py-3 font-inter text-[14px] leading-[24px] tracking-[0.02em]',
							{	
								'gradient-red-border': item.isBorder,
								'gradient-grey-border': !item.isBorder
							}
							)}>{item.tagIcon}<span className='pl-[10px]'>{item.tagText}</span></div>
						<div className='text-next-heading-5 font-inter pt-8 pb-4'>{item.title}</div>
						<div className='text-next-body-m opacity-80'>{item.description}</div>
					</div>
				)
			})
		)
	}, [])

  return (
    <div className="pb-[52px] md:pb-[72px] xl:pb-[88px] bg-[#0a0a0b] text-white">
      <Head>
        <title>{getFullTitle('AI')}</title>
        <meta
          name="description"
          content=""
        ></meta>
      </Head>
      <Heading />
			<Box>
				<Layout>
					<Heading
						title={productsHeadingTitle}
						classNames="px-3"
						description="Our expertise is grounded in transformative experiences backed by industry figures that speak volumes. Unleashing the potential of AI, we craft solutions that transcend expectations."
						descriptionClassNames="md:!text-next-body-m md:!max-w-[413px] xl:!max-w-[528px] md:self-end opacity-80 !self-center"
					/>
						<Box className='!pb-0 xl:!py-[80px]'>
							<GraphicBlock 
								items={items} 
								className='md:gap-8 xl:!gap-8'
								blockClassNames='p-6 min-w-[416px]' 
								titleClassNames='!font-inter !font-normal md:tracking-[0.02em] md:!leading-9'
								descriptionClassNames='md:leading-6 text-next-body-s xl:text-next-body-s opacity-80'
							/>
						</Box>
				</Layout>
			</Box>
			<Box>
			<Layout className='xl:!px-0 md:!px-0'>
				<div className='md:px-8 xl:px-16 mb-4 shrink-0 text-next-heading-5 md:mb-12 md:text-next-heading-3 xl:text-next-heading-2 !leading-normal'>
					Our work
				</div>
				<SliderContext.Provider 
					value={{ 
						cardClassName: 'case-card-dark',
						progressBarTheme: 'dark',
						progressBarMode: 'realIndex',
						slideWidth: 'xl:!w-[1312px] md:!w-[904px]',
						progressBarLayoutClass: 'xl:mt-[88px]', 
					}}
				>
					<CasesSlider2 filter={filter} disableOnMobile padding={false} />
				</SliderContext.Provider>
			</Layout>
			</Box>
			<Box>
				<Layout>
					<Heading
						title={companiesTitle}
						classNames="px-3"
						description={companiesDescription}
						isColumn={media === ''}
						descriptionClassNames="md:!text-next-body-m md:!max-w-[413px] xl:!max-w-[528px] md:self-end opacity-80 !self-center"
					/>
				</Layout>
			</Box>
      <Box className="grid gap-16 xl:gap-[120px]">
        <Layout>
          <TrialBanner />
        </Layout>
      </Box>
      <Box>
        <Reviews padding={false} />
      </Box>
      <Box>
        <Layout>
          <FAQ padding={false} />
        </Layout>
      </Box>
    </div>
  );
}
