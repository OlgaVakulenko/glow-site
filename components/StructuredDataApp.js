import Head from 'next/head';

export default function StructuredDataApp({ id = 'structured-data', data }) {
  return (
    <script
      key={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
