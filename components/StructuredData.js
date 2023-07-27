import Head from 'next/head';

export default function StructuredData({ id = 'structured-data', data }) {
  return (
    <Head>
      <script
        key={id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data),
        }}
      />
    </Head>
  );
}
