import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import GTag from './GTag';
import Hotjar from './Hotjar';
import Leadfeed from './Leadfeed';
import Linkedin from './Linkedin';

export const pageview = (url) => {
  window?.gtag?.('config', 'G-5NP2XWNRBX', {
    page_path: url,
  });

  if ('fbq' in window) {
    window.fbq('track', 'PageView');
  } else {
    // console.log('no fbq');
  }
};

export const event = ({ action, category, label, value }) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value,
  });

  window.fbq?.('track', action, {
    content_category: category,
    content_type: label,
    value,
  });
};

export default function Analytics() {
  const router = useRouter();

  useEffect(() => {
    const onRouterChange = (url) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', onRouterChange);
    router.events.on('hashChangeComplete', onRouterChange);

    return () => {
      router.events.off('routeChangeComplete', onRouterChange);
      router.events.off('hashChangeComplete', onRouterChange);
    };
  }, [router.events]);

  return (
    <>
      <Hotjar />
      <GTag ids={['G-5NP2XWNRBX']} />
      <Script id="ga-2">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MW59PP8');`}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MW59PP8"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Linkedin />
      <Leadfeed />
    </>
  );
}
