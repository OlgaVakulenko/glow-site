import Head from 'next/head';
import Header from './Header';
import Frame1md from './assets/frame-1-md.png';
import Frame1xl from './assets/frame-1-xl.png';
import Frame1 from './assets/frame-1.png';
import Frame35md from './assets/frame-35-md.svg';
import Frame35xl from './assets/frame-35-xl.svg';
import Frame35 from './assets/frame-35.svg';
import Layout from '../../../Layout';
import Objectives from './Objectives';
import RespImage from './RespImage';
import Animated from '../../../Animated';
import UserApps from './ UserApps';
import WelcomeVideo from './WelcomeVideo';
import DesignProcess from './ DesignProcess';
import About from './About';
import ProjectRoadmap from './ProjectRoadmap';
import IntegrationsOverview from './IntegrationsOverview';
import ProjectManagement from './ProjectManagement';
import Reporting from './Reporting';
import Frame42 from './assets/frame-42.svg';
import Frame42md from './assets/frame-42-md.svg';
import Frame42xl from './assets/frame-42-xl.svg';

import Frame43 from './assets/frame-43.svg';
import Frame43md from './assets/frame-43-md.svg';
import Frame43xl from './assets/frame-43-xl.svg';

import Frame44 from './assets/frame-44.svg';
import Frame44md from './assets/frame-44-md.svg';
import Frame44xl from './assets/frame-44-xl.svg';

import Frame45 from './assets/frame-45.svg';
import Frame45md from './assets/frame-45-md.svg';
import Frame45xl from './assets/frame-45-xl.svg';
import IllustrationCard from './IllustrationCard';
import PunchList from './PunchList';
import Calendar from './Calendar';
import RespSVG from './RespSVG';

export default function WelcomeRenovation() {
  return (
    <div>
      <Head>
        <title>
          Case Welcome Renovation - App for a Los Angeles-based renovation
          company
        </title>
        <meta
          name="description"
          content="Explore Case Welcome Renovation - App for a Los Angeles-based renovation
          company"
        ></meta>
      </Head>
      <Header
        type="renovation"
        title="Welcome Renovation: <br /> A new renovation experience in pocket"
        subtitle="Improving customer experience and simplifying project management for an on-demand kitchen and bathroom renovation company."
      />
      <Animated delay={200}>
        <RespImage
          src={Frame1}
          md={Frame1md}
          xl={Frame1xl}
          className="bg-[#7a7b7c] xl:h-[1080px]"
        />
      </Animated>
      <Objectives />
      <WelcomeVideo />
      <UserApps />
      <DesignProcess />
      <About />
      <ProjectRoadmap />
      <IntegrationsOverview />
      <ProjectManagement />
      <Reporting />
      <div className="bg-lightGray">
        <Layout disablePadding>
          <RespSVG
            src="/img/wr/frame-35.svg"
            md="/img/wr/frame-35-md.svg"
            xl="/img/wr/frame-35-xl.svg"
          />
        </Layout>
        <Calendar />
        <PunchList />
        <Layout className="flex flex-col gap-2 bg-lightGray md:gap-8">
          <RespSVG
            src="/img/wr/frame-42.svg"
            md="/img/wr/frame-42-md.svg"
            xl="/img/wr/frame-42-xl.svg"
          />
          <RespSVG
            src="/img/wr/frame-43.svg"
            md="/img/wr/frame-43-md.svg"
            xl="/img/wr/frame-43-xl.svg"
          />
          <RespSVG
            src="/img/wr/frame-44.svg"
            md="/img/wr/frame-44-md.svg"
            xl="/img/wr/frame-44-xl.svg"
          />
          <RespSVG
            src="/img/wr/frame-45.svg"
            md="/img/wr/frame-45-md.svg"
            xl="/img/wr/frame-45-xl.svg"
          />
        </Layout>
      </div>
      <IllustrationCard />
    </div>
  );
}
