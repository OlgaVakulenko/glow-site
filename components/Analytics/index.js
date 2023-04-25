import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import Amplitude from './Amplitude';
// import FacebookPixel from './FacebookPixel';
import GTag from './GTag';
import Hotjar from './Hotjar';
import Linkedin from './Linkedin';
import MixPanel from './MixPanel';

export const pageview = (url) => {
  window?.gtag?.('config', 'G-5NP2XWNRBX', {
    page_path: url,
  });

  if ('fbq' in window) {
    window.fbq('track', 'PageView');
  } else {
    console.log('no fbq');
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
      {/* <Amplitude /> */}
      <Hotjar />
      <GTag />
      {/* <FacebookPixel /> */}
      <MixPanel />
      <Linkedin />
    </>
  );
}
