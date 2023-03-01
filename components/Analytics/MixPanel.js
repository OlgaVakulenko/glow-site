import mixpanel from 'mixpanel-browser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const event = (name, payload) => {
  mixpanel?.track(name, payload);
};

export default function MixPanel() {
  const router = useRouter();

  useEffect(() => {
    mixpanel.init('14f0db99ef8e62ac7c8e6578c5ec5f46', {
      debug: false,
      ignore_dnt: true,
    });

    event('Page View', {
      url: window.location.pathname,
    });
  }, []);

  useEffect(() => {
    const onChange = (url) => {
      event('Page View', {
        url,
      });
    };

    router.events.on('routeChangeComplete', onChange);

    return () => {
      router.events.off('routeChangeComplete', onChange);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      event('First Scroll');
      window.removeEventListener('scroll', onScroll);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [router.pathname]);

  return null;
}
