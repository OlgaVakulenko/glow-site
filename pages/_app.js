import { useSetAtom } from 'jotai';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { scrollAtom } from '../atoms/scroll';
import '../styles/globals.css';

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
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
