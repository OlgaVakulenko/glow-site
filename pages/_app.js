import { atom, useSetAtom } from 'jotai';
import { useAtomsDebugValue } from 'jotai/devtools';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useRef } from 'react';
import { nativeScrollAtom } from '../atoms/scroll';
import Analytics from '../components/Analytics';
import GTag from '../components/Analytics/GTag';
import LoadingProgress from '../components/LoadingProgress';
import DefaultLayout from '../components/Pages/Layouts/DefaultLayout';
import useScrollRestoration from '../components/SmoothScroll/useScrollRestoration';
import Tolstoy from '../components/Widgets/Tolstoy';
import { useMedia } from '../lib/agent';
import '../styles/globals.css';
// import '../styles/globals2.css';
// import '../components/Pages/Cases/Cryprogenie/global.css';
// import '../components/Pages/Cases/Cryprogenie/styles.css';
// import '../styles/cryptogenie.css';

const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

export const routerHistory = atom([]);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const setRouterHistory = useSetAtom(routerHistory);
  const updateValue = useSetAtom(nativeScrollAtom);

  const getLayout = useMemo(() => {
    return (
      Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)
    );
  }, [Component]);

  useEffect(() => {
    const onScroll = () => {
      updateValue(window.scrollY);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [updateValue]);

  useMedia();

  useEffect(() => {
    const onRouteChange = (url) => {
      setRouterHistory((h) => [...h, url]);
    };

    router.events.on('routeChangeComplete', onRouteChange);

    return () => {
      router.events.off('routeChangeComplete', onRouteChange);
    };
  }, [router.events, setRouterHistory]);

  const errorsRef = useRef([]);
  useEffect(() => {
    const onError = (e) => {
      errorsRef.current.push({
        url: window.location.href,
        message: e?.message,
        filename: e?.filename,
        ua: window?.navigator?.userAgent,
      });
    };

    const onUnload = () => {
      if ('sendBeacon' in window?.navigator) {
        if (!errorsRef.current.length) return;
        const fd = new FormData();
        fd.append('err', JSON.stringify(errorsRef.current));
        errorsRef.current = [];
        window.navigator.sendBeacon('/err.php', fd);
      }
    };

    document.addEventListener('visibilitychange', onUnload);
    window.addEventListener('error', onError);

    return () => {
      document.removeEventListener('visibilitychange', onUnload);
      window.removeEventListener('error', onError);
    };
  }, []);

  useEffect(() => {
    if (router.isReady) {
      document.documentElement.classList.add('hydrated');
    }
  }, [router.isReady]);

  // useScrollRestoration(router);

  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Glow Design Agency</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.className = 'js'
          `,
          }}
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function updateScreenHeight() {
              document.documentElement.style.setProperty('--vh', window.innerHeight / 100 + 'px');
              document.documentElement.style.setProperty('--lvh', document.documentElement.clientHeight / 100 + 'px');
            }
            updateScreenHeight();
            window.addEventListener('resize', updateScreenHeight);
            window.addEventListener('orientationchange', updateScreenHeight);
          `,
          }}
        />
      </Head>
      <LoadingProgress />

      <DebugAtoms />
      {getLayout(<Component {...pageProps} />)}
      {/** analytics */}
      <Analytics />

      {/** widgets */}
      <Tolstoy />
    </div>
  );
}

export default MyApp;
