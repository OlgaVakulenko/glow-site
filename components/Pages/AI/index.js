import cx from 'clsx';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useMemo, useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { themeAtom } from '../../../lib/theme';
import { useMediaAtom } from '../../../lib/agent';
import { getFullTitle } from '../../HeadTitle';
import Layout from '../../Layout';
import Heading from '../../Heading';
import Box from '../../Box';
import AiCard from './AiCard';
import AiHeader from './AiHeader';
import { aiLogoBlockData } from '../../../data/ai-logo-block-data';
import { items } from '../../../data/ai-graphic-data';
import { companiesSectionData } from '../../../data/ai-companies-data';
import GraphicBlock from '../../GraphicBlock';
import { CasesSlider2 } from '../../CasesSlider/CasesSlider';
import Reviews from '../Home/Reviews2';
import TrialBanner from '../Home/TrialBanner';
import { FAQ } from '../../../pages/contact-us';

// const GraphicBlock = dynamic(() => import('../../GraphicBlock'));
// const CasesSlider2 = dynamic(() => import('../../CasesSlider/CasesSlider'));
// const Reviews = dynamic(() => import('../Home/Reviews2'));
// const TrialBanner = dynamic(() => import('../Home/TrialBanner'));
// const FAQ = dynamic(() => import('../../../pages/contact-us').then(mod => mod.FAQ));

function Card({ className, children }) {
  return (
    <div
      className={cx(
        'overflow-hidden rounded-2xl p-2 pb-4 xl:p-12 md:p-8 bg-dark-card',
        className
      )}
    >
      {children}
    </div>
  );
}

function IconCard({ item }) {
  return (
   <div className='relative group ai-logo-border flex items-center justify-center flex-col'>
		<div className="group-hover:text-[#E33230] text-[#6B6B7B] transition-colors duration-300 z-[3]">
			{item.icon}
		</div>
		<div className="z-[3] hidden cursor-default text-next-body-xs opacity-0 group-hover:opacity-80 group-hover:block mt-2 transition-all duration-300">
			{item.title}
		</div>
	 </div>
  );
}

const AIDesign = () => {
  return (
    <div className="grid gap-4 md:grid-cols-4 xl:grid-rows-6 md:grid-row-7 xl:max-h-[684px]">
			<Card className='opacity-80 md:col-span-2 order-1 xl:row-span-3 md:row-span-2'>
				<h3 className="mb-8 text-next-heading-7 md:mb-8 md:text-next-heading-5 xl:mb-[58px] xl:text-next-heading-4 white-gradient-text">
					AI Design Shapes the Future Landscape
				</h3>
				<p className='xl:text-next-body-m text-next-body-s white-gradient-text'>
					The AI industry is a leader in the Web4 revolution. With a proven track record, we navigate the dynamic landscape of artificial intelligence, shaping tomorrow&apos;s technology today.
				</p>
			</Card>
			<Card className='md:col-span-2 !p-0 order-2 md:row-span-3 xl:row-span-4'>
			{/* h-[251px] md:h-[346px] xl:h-[474px] */}
				<AiCard />
			</Card>
			<Card className='md:col-span-2 order-5 md:order-4 grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 !p-0 xl:row-span-3 md:row-span-5 min-h-[420px] xl:min-h-[334px]'>
				{aiLogoBlockData?.map((item, index) => {
					return <IconCard item={item} key={index}/>
				})}
			</Card>
			<Card className='md:col-span-2 xl:col-span-1 md:px-8 xl:pt-9 xl:pb-[30px] md:py-6 p-4 order-3 md:order-4 xl:row-span-2 md:row-span-2'>
				<p className='md:text-next-heading-4 text-next-heading-5 opacity-70 mb-5 xl:mb-8'>$196B+</p>
				<p className='text-next-body-s opacity-80 white-gradient-text'>The estimated value of the global AI market as of 2024.</p>
			</Card>
			<Card className='md:col-span-2 xl:col-span-1 md:px-8 xl:pt-9 xl:pb-[30px] md:py-6 p-4 order-4 md:order-5 xl:row-span-2 md:row-span-2'>
				<p className='md:text-next-heading-4 text-next-heading-5 opacity-70 mb-5 xl:mb-8'>↑13x</p>
				<p className='text-next-body-s opacity-80 white-gradient-text'>The growth of the global AI market in the next 7 years.</p>
			</Card>
		</div>
  );
};

export default function AI() {
	const setTheme = useSetAtom(themeAtom);
	const media = useMediaAtom();

  const filter = media === 'mobile' ? ['/beast', '/cryptogenie'] : [];

	useEffect(() => {
		setTheme('dark');
	}, [setTheme])

	const productsHeadingTitle = useMemo(() => {
		return (
			<>
				<span className='white-gradient-text'>The range of</span> <span className='red-gradient-text'>AI products</span>
				<br className="hidden md:block" /> <span className='white-gradient-text'>we work with</span>
			</>
		)
	}, [])

	const companiesTitle = useMemo(() => {
		return (
			<>
				<span className='white-gradient-text'>Types of</span> <span className='red-gradient-text'> AI companies</span>
				<br className="hidden md:block" /> <span className='white-gradient-text'> collaborate with us</span>
			</>
		)
	}, [])

	const companiesDescription = useMemo(() => {
		return (
			companiesSectionData.map((item, index) => {
				return (
					<div className={cx('flex flex-col items-start justify-start xl:min-w-[632px]', {'xl:mb-20 md:mb-0 mb-14': index === 0})} key={index}>
						<div className={cx(
							'flex case-card-dark rounded-full px-6 py-3 font-inter text-base',
							{	
								'gradient-red-border': item.isBorder,
								'gradient-grey-border': !item.isBorder
							}
							)}>{item.tagIcon}<span className='pl-[10px]'>{item.tagText}</span></div>
						<div className='text-next-heading-5 font-inter md:pt-8 pt-6 pb-4 md:!leading-9 xl:tracking-wide'>{item.title}</div>
						<div className='md:text-next-body-m text-next-body-s opacity-80'>{item.description}</div>
					</div>
				)
			})
		)
	}, [])

  return (
    <div className="pb-[52px] md:pb-[72px] xl:pb-[88px] relative overflow-hidden bg-[#0a0a0b] text-white">
      <Head>
        <title>{getFullTitle('AI')}</title>
        <meta
          name="description"
          content=""
        ></meta>
      </Head>
			<AiHeader />
			<Box className='xl:mb-[90px]'>
				<Layout>
					<AIDesign />
				</Layout>
			</Box>
			<Box>
				<Layout>
					<Heading
						title={productsHeadingTitle}
						description="Our expertise is grounded in transformative experiences backed by industry figures that speak volumes. Unleashing the potential of AI, we craft solutions that transcend expectations."
						descriptionClassNames="md:!text-next-body-m md:!max-w-[413px] xl:!max-w-[528px] md:self-end opacity-80 !self-center"
					/>
						<Box className='!pb-0 xl:!pt-[80px]'>
							<GraphicBlock 
								items={items} 
								className='md:gap-8 xl:!gap-8'
								blockClassNames='md:p-6 md:min-w-[416px]' 
								titleClassNames='!font-inter !font-normal md:tracking-[0.02em] md:!leading-9'
								descriptionClassNames='md:leading-6 text-next-body-s xl:text-next-body-s opacity-80'
							/>
						</Box>
				</Layout>
			</Box>
			<Box>
			<Layout className='xl:!px-0 md:!px-0'>
				<div className='md:px-8 xl:px-16 mb-4 shrink-0 text-next-heading-5 md:mb-14 md:text-next-heading-3 xl:text-next-heading-2 white-gradient-text'>
					Our work
				</div>
				<CasesSlider2 filter={filter} disableOnMobile padding={false} />
			</Layout>
			</Box>
			<Box>
				<Layout>
					<Heading
						title={companiesTitle}
						description={companiesDescription}
						isColumn={media === 'tablet'}
						titleClassNames="md:mb-4 !mb-10"
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
