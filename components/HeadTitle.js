import Head from 'next/head';

const defaultTitle = 'Glow Design Agency';
const separator = '::';

function replaceNbsps(str) {
  var re = new RegExp(String.fromCharCode(160), 'g');
  return str.replace(re, ' ');
}

export function getFullTitle(title) {
  const fullTitle = title
    ? title + ' ' + separator + ' ' + defaultTitle
    : defaultTitle;

  return replaceNbsps(fullTitle);
}

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
