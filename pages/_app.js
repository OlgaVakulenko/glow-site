import { useSetAtom } from 'jotai';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { scrollAtom } from '../atoms/scroll';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoadingProgress from '../components/LoadingProgress';
import { useMedia } from '../lib/agent';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const updateValue = useSetAtom(scrollAtom);

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

  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Glow Design Agency</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (window.location.search.indexOf('a=') > -1) {
              document.documentElement.classList.remove('no-js')
              setTimeout(function() {
                if (!document.documentElement.classList.contains('y')) {
                  // document.documentElement.classList.add('force');
                }
              }, 500);
            }
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
            }
            updateScreenHeight();
            window.addEventListener('resize', updateScreenHeight);
            window.addEventListener('orientationchange', updateScreenHeight);
          `,
          }}
        />
      </Head>
      <LoadingProgress />
      <Header />
      <Component {...pageProps} />
      <Footer />
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

class ErrorBoundary extends React.Component {
  state = { hasError: '' };
  render() {
    return this.props.children;
  }
}
ErrorBoundary.getDerivedStateFromError = (error) => ({
  hasError: error.toString(),
});

export default MyApp;
