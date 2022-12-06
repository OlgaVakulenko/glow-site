import { useSetAtom } from 'jotai';
import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect, useMemo } from 'react';
import { nativeScrollAtom } from '../atoms/scroll';
import Footer, { ParallaxFooter } from '../components/Footer';
import Header from '../components/Header';
import LoadingProgress from '../components/LoadingProgress';
import DefaultLayout from '../components/Pages/Layouts/DefaultLayout';
import ScrollContainer from '../components/SmoothScroll/ScrollContainer';
import { useKonamiCode, useMedia } from '../lib/agent';
import { useAtomsDebugValue } from 'jotai/devtools';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { atom } from 'jotai';

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

  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Glow Design Agency</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.remove('no-js')
              setTimeout(function() {
                if (!document.documentElement.classList.contains('y')) {
                  // document.documentElement.classList.add('force');
                }
              }, 500);
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
      {/* <Header />
      <ScrollContainer>
        <ParallaxFooter />
      </ScrollContainer> */}
      {/* <Script
        id="help-ukraine-win"
        data-type="one"
        data-position="bottom-right"
        strategy="lazyOnload"
        src="https://helpukrainewinwidget.org/cdn/widget.js"
      /> */}
    </div>
  );
  return;
}

export default MyApp;
