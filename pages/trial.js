import Animated from '../components/Animated';
import AnimatedButton from '../components/AnimatedButton';
import FooterForm from '../components/Footer/FooterForm';
import Layout, { Layout2 } from '../components/Layout';
import PageHeading, { PageHeading2 } from '../components/PageHeading';
import Business from '../components/Pages/Trial/Business';
import Info from '../components/Pages/Trial/Info';
import Showcase from '../components/Pages/Trial/Showcase';
import Steps from '../components/Pages/Trial/Steps';
import { Subheading2 } from '../components/Typography/Subheading';
import DefaultLayout from '../components/Pages/Layouts/DefaultLayout';
import SlotsLeftButton from '../components/Pages/Trial/SlotsLeftButton';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Trial() {
  const router = useRouter();

  return (
    <main className="pt-[135px] md:pt-[168px] xl:pt-[224px]">
      <Head>
        <title>First 3 trial days for free! by Glow Team</title>
      </Head>
      <Layout className="pb-12 md:grid md:grid-flow-col md:grid-cols-8 md:gap-6">
        <div className="pb-10 md:col-span-4">
          <SlotsLeftButton className="mb-9 md:mb-[59px] xl:mb-[54px]" />
          <Animated immediate>
            <PageHeading2 className="mb-5 md:mb-6 xl:mb-5" animate={false}>
              First 3 trial
              <br className="hidden md:block" /> days for free!
            </PageHeading2>
          </Animated>
          <Animated delay={100} immediate>
            <Subheading2
              mdClassName="md:text-subtitle-m"
              xlClassName="xl:text-subtitle-m xl:max-w-[410px]"
            >
              Check how our design matches your vision with a&nbsp;2&#8209;week
              trial period
            </Subheading2>
          </Animated>
        </div>
        <Animated delay={200} immediate className="text-black md:col-span-4">
          <FooterForm
            footerStyle="trial"
            hideToggles={true}
            theme="default"
            disablePadding={true}
            useGrid={false}
            btnClassName="md:min-w-[170px]"
            gapSize="10"
            setIsSubmitted={() => {
              router.push('/form-success');
            }}
          />
        </Animated>
      </Layout>
      <Steps />
      <Business />
      <Showcase />
      <Info />
    </main>
  );
}

Trial.getLayout = function (page) {
  return (
    <DefaultLayout
      footerProps={{
        footerStyle: 'trial',
        hideToggles: true,
      }}
    >
      {page}
    </DefaultLayout>
  );
};
