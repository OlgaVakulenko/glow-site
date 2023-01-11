import Script from 'next/script';
import { useEffect } from 'react';

export default function GTag() {
  return (
    <>
      <Script
        onReady={() => {
          console.log('gtag ready');
        }}
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5NP2XWNRBX"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5NP2XWNRBX');
        `}
      </Script>
    </>
  );
}
