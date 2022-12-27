import Head from 'next/head';

const defaultTitle = 'Glow Design Agency';
const separator = '::';

export default function HeadTitle({ title }) {
  const fullTitle = title
    ? title + ' ' + separator + ' ' + defaultTitle
    : defaultTitle;

  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  );
}
