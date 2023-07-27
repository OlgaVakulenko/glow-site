import Script from 'next/script';

export default function GTag({ ids }) {
  return (
    <>
      <Script
        onReady={() => {
          console.log('gtag ready');
        }}
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`}
      />
      <Script id={`google-analytics`}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          ${ids
            .map((id) => {
              return `gtag('config', '${id}');`;
            })
            .join('')}
        `}
      </Script>
    </>
  );
}
