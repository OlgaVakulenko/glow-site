import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

if (typeof window !== 'undefined') {
  window.tolstoyAppKey = '0634e847-3af8-4889-b83a-68c5c24e0e37';
}

export default function Tolstoy() {
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const pathRef = useRef(router.pathname);
  pathRef.current = router.pathname;

  useEffect(() => {
    if (router.pathname === '/') {
      return () => {
        const el = document.getElementById('tolstoyWidgetElement');
        el?.remove();
      };
    }

    return;
  }, [router.pathname]);

  if (router.pathname !== '/') return null;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://player.gotolstoy.com" />
      </Head>
      <Script
        src="https://widget.gotolstoy.com/widget/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
