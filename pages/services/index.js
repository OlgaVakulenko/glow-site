import Head from 'next/head';
import { useMemo } from 'react';
import IntroSection2 from '../../components/IntroSection2';
import Layout from '../../components/Layout';
import Animated from '../../components/Animated';
import OurExperience from '../../components/Pages/Home/OurExperience';
import Reviews from '../../components/Pages/Home/Reviews2';
import TrialBanner from '../../components/Pages/Home/TrialBanner';
import Approach from '../../components/Pages/Services/Approach';
import Process from '../../components/Pages/Services/Process';
import ServicesSelector from '../../components/Pages/Services/ServiceSelector';
import Box from '../../components/Box';
import Slider from '../../components/Pages/Services/Slider';
import { FAQ } from '../contact-us';
import { getFullTitle } from '../../components/HeadTitle';
import S1 from '../../components/Pages/Services/assets/s1.svg';
import S2 from '../../components/Pages/Services/assets/s2.svg';
import S3 from '../../components/Pages/Services/assets/s3.svg';
import Awards from '../../components/Awards';
  
function Heading() {
  const title = useMemo(() => {
    return (
      <>
        Glow design process
        <br className="hidden xl:block" /> &{' '}
        <span className="hidden xl:inline">&nbsp;</span>the list of&nbsp;our
        services
      </>
    );
  }, []);

  return (
    <IntroSection2
      className="!pt-[192px] md:!pt-[271px] xl:!pt-[300px]"
      title={title}
      subtitle="We put Human Centered Design in the core of our work to provide solutions that satisfy both business and users."
    />
  );
}

function ProcessPicture() {
	return (
		<Animated as='picture' delay={250}>
			<source srcSet={S3.src} media="(min-width:1280px)"></source>
			<source srcSet={S2.src} media="(min-width:820px)"></source>
			<source srcSet={S1.src}></source>
			<img className="mt-10 w-full md:mt-14 xl:mt-20" src={S1.src} alt="" />
		</Animated>
	)
}

export default function Services() {
	const processHeadingTitle = useMemo(() => {
		return (
			<>
				This is how <br className="hidden md:block xl:hidden" /> we do it
			</>
		)
	},[])
	
	const processHeadingDescription = "Custom software development helps you create great and super stable products by applying our workflow."

  return (
    <div className="pb-[52px] md:pb-[72px] xl:pb-[88px]">
      <Head>
        <title>{getFullTitle('Our Design Services')}</title>
        <meta
          name="description"
          content="Explore Glow Team's array of product design services, including UI/UX design, branding, and more. Dedicated to delivering high-quality solutions for business."
        ></meta>
      </Head>
      <Heading />
      <ServicesSelector />
      <Process 
				layoutClassNames="md:mt-[72px] xl:mt-[88px]"
				headingTitle={processHeadingTitle}
				headingDescription={processHeadingDescription}
			>
				<ProcessPicture />
			</Process>
      <Box>
        <OurExperience padding={false} />
      </Box>
      <Box>
        <Slider />
      </Box>

      <Box>
        <Approach />
      </Box>
      <Layout className='py-[52px] md:py-[72px] xl:py-[88px]'>
        <TrialBanner />
      </Layout>
			<Awards />
      <Box>
        <Reviews padding={false} animate />
      </Box>
      <Box>
        <Layout>
          <FAQ padding={false} animate />
        </Layout>
      </Box>
    </div>
  );
}
