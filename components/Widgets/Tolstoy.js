import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

if (typeof window !== 'undefined') {
  window.tolstoyAppKey = '0634e847-3af8-4889-b83a-68c5c24e0e37';
  window.tolstoySettings = {
    alwaysShow: false,
    loadHidden: true,
    stopPreviewLoop: true,
    noCloseOption: true,
  };

  // const l = console.log;

  // console.log = (...args) => {
  //   if (args[0]) {
  //     l(args[0]);
  //   }
  //   l(...args);
  // };
}

export default function Tolstoy() {
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const pathRef = useRef(router.pathname);
  pathRef.current = router.pathname;

  useEffect(() => {
    const onReady = (e) => {
      setReady(true);
    };

    window.addEventListener('tolstoyWidgetReady', onReady);

    return () => {
      window.removeEventListener('tolstoyWidgetReady', onReady);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;

    if (router.pathname === '/') {
      setTimeout(() => {
        if (router.pathname === '/') {
          window?.tolstoyWidget?.show();
        }
      }, 1000);

      return () => {
        window?.tolstoyWidget?.hide();
      };
    }
  }, [router.pathname, ready]);

  if (router.pathname !== '/') return null;

  return <Script src="https://widget.gotolstoy.com/widget/widget.js" />;
}
