import { getAbsoluteUrl } from '../../../../lib/utils';

const url = ({ referer = '', url = '', text = '' }) => {
  try {
    const r = 'twsrc^tfw|twcamp^buttonembed|twterm^share|twgr^';

    const params = new URLSearchParams({
      referer,
      url,
      text,
      ref_src: r,
    });

    return 'https://twitter.com/intent/tweet?' + params.toString();
  } catch (e) {
    console.error(e);
  }
};

export default function Twitter() {
  const href = getAbsoluteUrl();

  return (
    <a
      href={url({
        referer: window.location.origin,
        url: href,
        text: 'Read my new article',
      })}
      target="_blank"
      rel="noreferrer"
			className='social-link'
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4191_820)">
          <path
            d="M32.4702 18.7133C31.834 18.9947 31.1593 19.1795 30.4685 19.2616C31.1967 18.8261 31.7416 18.1408 32.0019 17.3333C31.3185 17.7399 30.5694 18.0249 29.7885 18.1791C29.264 17.6179 28.5688 17.2457 27.811 17.1204C27.0532 16.9951 26.2752 17.1237 25.5979 17.4861C24.9207 17.8486 24.3822 18.4247 24.0661 19.1248C23.7501 19.8249 23.6742 20.6098 23.8502 21.3574C22.4645 21.288 21.1088 20.9279 19.8713 20.3005C18.6337 19.6731 17.542 18.7925 16.6669 17.7158C16.3571 18.2478 16.1943 18.8526 16.1952 19.4683C16.1952 20.6766 16.8102 21.7441 17.7452 22.3691C17.1919 22.3517 16.6507 22.2023 16.1669 21.9333V21.9766C16.167 22.7814 16.4455 23.5613 16.9551 24.1842C17.4646 24.807 18.1739 25.2345 18.9627 25.3941C18.4491 25.5333 17.9105 25.5538 17.3877 25.4541C17.6101 26.1468 18.0435 26.7526 18.6274 27.1867C19.2112 27.6208 19.9161 27.8614 20.6435 27.8749C19.9206 28.4427 19.0929 28.8624 18.2076 29.1101C17.3224 29.3577 16.397 29.4285 15.4844 29.3183C17.0775 30.3428 18.932 30.8867 20.826 30.8849C27.2369 30.8849 30.7427 25.5741 30.7427 20.9683C30.7427 20.8183 30.7385 20.6666 30.7319 20.5183C31.4143 20.0251 32.0032 19.4141 32.471 18.7141L32.4702 18.7133Z"
            fill="currentColor"
          />
        </g>
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          rx="23.5"
          stroke="currentColor"
        />
        <defs>
          <clipPath id="clip0_4191_820">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(14 14)"
            />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}
