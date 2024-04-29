import Link from 'next/link';
import Button2 from '../components/Button';
import Layout from '../components/Layout';
import DefaultLayout from '../components/Pages/Layouts/DefaultLayout';
import Head from 'next/head';
import { getFullTitle } from '../components/HeadTitle';

export default function Page404() {
  return (
    <>
      <Head>
        <title>{getFullTitle('404 - Page not found')}</title>
      </Head>
      <Layout className="min-h-[calc(100vh-168px)] pt-[126px] md:min-h-[calc(100vh-144px)] md:pt-[212px] xl:pt-[272px]">
        <div className="md:flex md:items-start md:justify-between">
          <div className="mb-8 w-full md:order-1 md:ml-[85px] md:max-w-[352px] xl:ml-0 xl:max-w-[34%]">
            <img className="h-full w-full" src="/img/404.svg" alt="" />
            {/* <Icon /> */}
          </div>
          <div className="md:max-w-[555px] xl:max-w-[640px]">
            <h1 className="mb-6 font-glow text-[32px] font-medium leading-[38px] tracking-[-1px] md:text-5xl md:leading-[57px] xl:text-heading-h2-2">
              We can’t find the page you’re looking for.
            </h1>
            <h2 className="mb-8 text-body-m2 md:text-body-l xl:mb-10">
              Page not found. It may have been moved, renamed, or temporarily
              unavailable.
            </h2>
            <Button2
              flavor="secondary"
              as={Link}
              href="/"
              compact
              className="mb-8 w-full text-center md:w-auto"
            >
              Back to home
            </Button2>
          </div>
        </div>
      </Layout>
    </>
  );
}

Page404.getLayout = function getLayout(page) {
  return (
    <DefaultLayout
      footerProps={{
        showForm: false,
      }}
    >
      {page}
    </DefaultLayout>
  );
};
