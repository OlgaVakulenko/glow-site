import Head from 'next/head';
import DefaultLayout from '../components/Pages/Layouts/DefaultLayout';
import FooterFormWrapper from '../components/FooterFormWrapper';

export default function FormSuccess() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
    </>
  );
}

FormSuccess.getLayout = function (page) {
  return <DefaultLayout footerSuccess>{page}</DefaultLayout>;
};
