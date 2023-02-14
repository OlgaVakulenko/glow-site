import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

if (typeof window !== 'undefined') {
  window.tolstoyAppKey = '0634e847-3af8-4889-b83a-68c5c24e0e37';
  // window.tolstoySettings = {
  //   alwaysShow: true,
  //   loadHidden: true,
  //   stopPreviewLoop: true,
  //   noCloseOption: true,
  // };
}

export default function Tolstoy() {
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const pathRef = useRef(router.pathname);
  pathRef.current = router.pathname;

  // useEffect(() => {
  //   return;
  //   const onReady = (e) => {
  //     console.log('ready');
  //     setReady(true);
  //   };

  //   const onOpen = (e) => {
  //     console.log('widget opened', e);
  //   };

  //   window.addEventListener('tolstoyWidgetReady', onReady);
  //   window.addEventListener('onWidgetOpen', onReady);
  //   window.addEventListener('tolstoyWidgetOpen', onReady);

  //   return () => {
  //     window.removeEventListener('tolstoyWidgetReady', onReady);
  //     window.removeEventListener('onWidgetOpen', onReady);
  //     window.removeEventListener('tolstoyWidgetOpen', onReady);
  //   };
  // }, []);

  useEffect(() => {
    if (router.pathname === '/') {
      return () => {
        const el = document.getElementById('tolstoyWidgetElement');
        el?.remove();
      };
    }

    return;
    // if (!ready) return;

    // if (router.pathname === '/') {
    //   setTimeout(() => {
    //     if (router.pathname === '/') {
    //       window?.tolstoyWidget?.show();
    //     }
    //   }, 1000);

    //   return () => {
    //     window?.tolstoyWidget?.hide();
    //   };
    // }
  }, [router.pathname]);

  if (router.pathname !== '/') return null;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://player.gotolstoy.com" />
      </Head>
      {/* <Script src="https://widget.gotolstoy.com/widget/widget.js" strategy='lazyOnload' /> */}
    </>
  );
}
