import * as client from '@amplitude/analytics-browser';
import { pageViewTrackingPlugin } from '@amplitude/plugin-page-view-tracking-browser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const { add, init, track } = client;

add(pageViewTrackingPlugin(client, {}));

export default function Amplitude() {
  const router = useRouter();

  useEffect(() => {
    init('c6007e78bafa68a94bbe14b311963574', undefined, {
      logLevel: 'Debug',
    });
  }, []);

  useEffect(() => {
    const onChange = () => {
      track('page_view');
    };
  }, [router.events]);

  useEffect(() => {
    const onScroll = () => {
      track('first_scroll');
      window.removeEventListener('scroll', onScroll);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [router.pathname]);

  return null;
}
