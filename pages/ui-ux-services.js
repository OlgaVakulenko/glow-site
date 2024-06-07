import Head from 'next/head';
import { useMemo } from 'react';
import IntroSection2 from '../components/IntroSection2';
import Layout from '../components/Layout';
import Logos from '../components/Pages/About/Logos';
import Reviews from '../components/Pages/Home/Reviews2';
import TrialBanner from '../components/Pages/Home/TrialBanner';
import GraphicBlock from '../components/Pages/Services/GraphicBlock';
import Process from '../components/Pages/Services/Process';
import Box from '../components/Pages/Services/Box';
import Heading from '../components/Pages/Services/Heading';
import Slider from '../components/Pages/Services/Slider';
import { getFullTitle } from '../components/HeadTitle';
import S1 from '../components/Pages/Services/assets/ui-ux-s1.svg';
import S2 from '../components/Pages/Services/assets/ui-ux-s2.svg';
import S3 from '../components/Pages/Services/assets/ui-ux-s3.svg';
import { items } from '../data/ui-ux-services-graphic-data';

function PageHeading() {
  const title = useMemo(() => {
    return (
      <>
				UI & UX Design Services:{' '}
        <br className="hidden xl:block" />Boost Your Product Now
      </>
    );
  }, []);
	
  return (
    <IntroSection2
      className="!pt-[192px] md:!pt-[271px] xl:!pt-[300px]"
			bodyClassName="md:!text-next-body-l"
			headingClassname='md:!min-w-[432px]'
      title={title}
      subtitle="A great interface converts visitors into loyal customers. Achieve your product goals and business objectives with our UI & UX design services."
    />
  );
}

function ProcessPicture() {
	return (
		<div className='bg-[rgba(25,25,27,0.03)] rounded-[32px] xl:py-[88px] xl:px-16 md:py-14 md:px-8 py-8 px-6 mt-10 w-full md:mt-14 xl:mt-20 flex'>
			<picture className="flex-grow">
				<source srcSet={S3.src} media="(min-width:1280px)"></source>
				<source srcSet={S2.src} media="(min-width:820px)"></source>
				<source srcSet={S1.src}></source>
				<img className="w-full" src={S1.src} alt="" />
			</picture>
		</div>
	)
}

export default function UiUxServices() {
	const processHeadingTitle = useMemo(() => {
		return (
			<>
				The Importance 
				<br className="md:hidden" /> of UX Design
				<br /> in Today&apos;s Digital Landscape
			</>
		)
	}, [])
	
	const processHeadingDescription = useMemo(() => {
		return (
			<>
				<div className='md:max-w-[596px]'>
					The digital world depends on a seamless user experience (UX). Our UI/UX design services enhance digital platforms by combining aesthetic appeal with intuitive functionality. Start your project effortlessly with us. 
				</div>
				<div className='md:max-w-[596px]'>
					Our clear design services&apos; processes ensure transparency and excellent results every step of the way. You will end up with a fantastic project, allowing you to shine at the top of the search results. Let&apos;s make your product glow!
				</div>
			</>
		)
	}, [])

	const servicesHeadingTitle = useMemo(() => {
		return (
			<>
				Design Services
				<br className="hidden md:block xl:hidden" /> Tailored
				<br className="md:hidden xl:block" /> to Your
				<br className="hidden md:block xl:hidden" /> Business Needs
			</>
		)
	}, [])

  return (
    <div className="pb-[52px] md:pb-[72px] xl:pb-[88px]">
      <Head>
        <title>{getFullTitle('UI & UX Design Services')}</title>
        <meta
          name="description"
          content="Transform your digital presence with our UI and UX design services, tailored to meet your business goals and enhance user experience."
        ></meta>
				<meta 
					name="keywords" 
					content="ui ux design services, design services, ux design, design process, ui and ux design, visual design, ux designers, design experts, ux design process, digital product, design principles, best practices, development services, design and development, information architecture, interface design, user interactions, user flow, user behavior, user experience design services, research and analysis" 
				/>
      </Head>
      <PageHeading />
			<Box>
        <Slider />
      </Box>
      <Process 
				headingTitle={processHeadingTitle}
				headingDescription={processHeadingDescription}
				isColumn
				headingDescriptionClassNames="md:gap-x-8 gap-y-4 md:!text-next-body-m xl:!text-next-body-l"
			>
				<ProcessPicture />
			</Process>
			<Box>
				<Layout>
					<Heading
						title={servicesHeadingTitle}
						description="Our design services are tailored to meet the unique requirements of your business. That's why Glow can ensure that every aspect meets your goals and resonates with your audience."
						descriptionClassNames="md:!text-next-body-m xl:!text-next-body-l md:!max-w-[448px] xl:max-w-[528px] md:self-end"
					/>
						<Box className='!pb-0'>
							<GraphicBlock items={items} className='md:!gap-x-20'/>
						</Box>
				</Layout>
      </Box>
			<Box className="grid gap-16 xl:gap-[120px]">
        <Layout>
          <TrialBanner />
        </Layout>
        <Logos padding={false} />
      </Box>
			<Box>
        <Reviews padding={false} />
      </Box>
    </div>
  );
}
