'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { getReferrer } from '../lib/utils';

export default function PreDevForm() {
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileReady, setTurnstileReady] = useState(false);
  const turnstileRef = useRef(null);
  const turnstileWidgetId = useRef(null);
  const turnstileTokenRef = useRef('');

  const renderTurnstile = useCallback(() => {
    if (
      !turnstileReady ||
      !turnstileRef.current ||
      typeof window === 'undefined' ||
      !window.turnstile ||
      turnstileWidgetId.current
    ) {
      return;
    }

    turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
      sitekey: '0x4AAAAAACIykZNRrFqlGZdR',
      callback: (token) => {
        turnstileTokenRef.current = token || '';
        setTurnstileToken(token || '');
      },
      'expired-callback': () => {
        turnstileTokenRef.current = '';
        setTurnstileToken('');
      },
      'error-callback': () => {
        turnstileTokenRef.current = '';
        setTurnstileToken('');
      },
    });
  }, [turnstileReady]);

  useEffect(() => {
    renderTurnstile();

    return () => {
      if (window?.turnstile && turnstileWidgetId.current) {
        try {
          window.turnstile.remove(turnstileWidgetId.current);
        } catch (e) {
          console.error(e);
        }
      }
      turnstileWidgetId.current = null;
    };
  }, [renderTurnstile, turnstileReady]);

  useEffect(() => {
    const handleMessage = (e) => {
      if (!['https://pre.dev'].includes(e.origin)) {
        return;
      }

      const { type, data } = e.data || {};
      if (type === 'new_lead') {
        const token =
          turnstileTokenRef.current ||
          (window.turnstile && turnstileWidgetId.current
            ? window.turnstile.getResponse(turnstileWidgetId.current) || ''
            : '');
        if (!token) {
          return;
        }
        const [referrer, query] = getReferrer();
        const fd = new FormData();
        fd.append('source', referrer || 'Direct');
        fd.append('query', query || '');
        fd.append('name', data.name);
        fd.append('project-about', data.businessURL);
        fd.append('email', data.email);
        fd.append('budget', data.budget);
        fd.append('cf-turnstile-response', token);

        fetch('/api/contact', {
          method: 'POST',
          body: fd,
        }).then(() => {
          window?.lintrk('track', { conversion_id: 11283746 });
        });
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [turnstileToken]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        onLoad={() => setTurnstileReady(true)}
        strategy="afterInteractive"
      />
      <div className="hidden" aria-hidden="true">
        <div ref={turnstileRef} />
      </div>
      <div className="flex justify-center xl:justify-end">
        <iframe
          className="w-full max-w-[420px] overflow-hidden rounded-lg"
          height="590px"
          src="https://pre.dev/iframe/enterprise/chat/7af5286f-a622-4eae-a9b4-39c1009c9f16"
        />
      </div>
    </>
  );
}