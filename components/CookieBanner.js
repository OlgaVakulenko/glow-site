import { useEffect, useState } from 'react';
import Button2 from './Button2';
import Layout from './Layout';
import Analytics from './Analytics';
import { useIsClient, useLayoutSsrEffect } from '../lib/utils';

function setConsentCookie(consent) {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1); // Cookie expires in 1 year
  const expires = 'expires=' + d.toUTCString();
  document.cookie =
    'userConsent=' + (consent ? '1' : '0') + ';' + expires + ';path=/';
}

function getConsentCookie() {
  const name = 'userConsent=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length) === '1';
    }
  }
  return null; // Return null if the cookie is not set
}

export default function CookieBannerWrapper() {
  const isClient = useIsClient();
  const [isConsent, setIsConsent] = useState(null);

  useLayoutSsrEffect(() => {
    setIsConsent(getConsentCookie());
  }, []);

  return (
    <>
      {isClient && isConsent === null && (
        <CookieBanner
          onConsent={(consent) => {
            setIsConsent(consent);
            setConsentCookie(consent);
          }}
        />
      )}
      {isConsent === true && <Analytics />}
    </>
  );
}

function CookieBanner({ onConsent }) {
  return (
    <div className="fixed bottom-0 z-[9] w-full bg-[#f3f3f3]">
      <Layout className="flex flex-col justify-between py-7 md:flex-row">
        <div className="mb-4 flex md:mb-0">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
            >
              <circle cx="18.3369" cy="26.9973" r="5" stroke="#BCBCBC" />
              <path
                d="M18.3369 28.4973C17.5085 28.4973 16.8369 27.8257 16.8369 26.9973C16.8369 26.1689 17.5085 25.4973 18.3369 25.4973C19.1653 25.4973 19.8369 26.1689 19.8369 26.9973C19.8369 27.8257 19.1653 28.4973 18.3369 28.4973Z"
                fill="#19191B"
                stroke="#19191B"
              />
              <circle cx="29.3369" cy="37.9973" r="3" stroke="#19191B" />
              <circle cx="28.3369" cy="14.9973" r="3" stroke="#19191B" />
              <circle cx="40.3369" cy="27.9973" r="2" stroke="#BCBCBC" />
              <ellipse
                cx="30.8369"
                cy="28.4973"
                rx="1.5"
                ry="1.5"
                transform="rotate(-90 30.8369 28.4973)"
                fill="#BCBCBC"
              />
              <ellipse
                cx="28.3369"
                cy="14.9973"
                rx="1"
                ry="1"
                transform="rotate(-90 28.3369 14.9973)"
                fill="#BCBCBC"
              />
              <path
                d="M47.6027 21.2132C48.7422 25.4659 48.4466 29.9757 46.7618 34.0433C45.077 38.1108 42.0971 41.5088 38.2842 43.7101C34.4714 45.9114 30.0387 46.7932 25.6737 46.2185C21.3087 45.6438 17.2553 43.6449 14.1421 40.5317C11.0289 37.4186 9.02999 33.3651 8.45532 29.0001C7.88066 24.6351 8.76237 20.2024 10.9637 16.3896C13.165 12.5768 16.563 9.59684 20.6305 7.912C24.6981 6.22717 29.2079 5.93157 33.4606 7.07107L33.4056 7.54233C32.957 11.3882 36.2145 14.6457 40.0604 14.1971L40.5317 14.1421L40.4767 14.6134C40.0281 18.4593 43.2856 21.7168 47.1315 21.2682L47.6027 21.2132Z"
                stroke="black"
              />
            </svg>
          </div>
          <div>
            <div className="mb-2 text-body-heading-m2 font-medium">
              The website uses cookies
            </div>
            <div className="text-body-xs">
              This is the cookie banner from Cookie information. It collects
              documentable user consents based on informed website scans.
            </div>
          </div>
        </div>
        <div className="ml-4 flex shrink-0 items-center justify-center space-x-4">
          <Button2
            flavor="navigation"
            onClick={() => {
              onConsent(false);
              // setConsentCookie(false);
            }}
          >
            Decline
          </Button2>
          <Button2
            className="!bg-black !text-lblue"
            onClick={() => {
              onConsent(true);
            }}
          >
            Accept Cookies
          </Button2>
        </div>
      </Layout>
    </div>
  );
}
