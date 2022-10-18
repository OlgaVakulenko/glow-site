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
