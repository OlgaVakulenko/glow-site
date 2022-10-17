import { useSetAtom } from 'jotai';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { scrollAtom } from '../atoms/scroll';
import LoadingProgress from '../components/LoadingProgress';
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const updateValue = useSetAtom(scrollAtom);
  console.log('rendering app');
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

  return (
    <div>
      <LoadingProgress />
      <Component {...pageProps} />
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
