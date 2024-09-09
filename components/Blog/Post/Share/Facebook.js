import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { getAbsoluteUrl } from '../../../../lib/utils';

const url = (share) => `https://www.facebook.com/sharer/sharer.php?u=${share}`;

export default function Facebook() {
  const href = getAbsoluteUrl();

  const link = useMemo(() => {
    return url(href);
  }, [href]);

  return (
    <a target="_blank" rel="noreferrer" href={link} className='social-link'>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4191_793)">
          <path
            d="M25.6693 25.2501H27.7526L28.5859 21.9167H25.6693V20.2501C25.6693 19.3917 25.6693 18.5834 27.3359 18.5834H28.5859V15.7834C28.3143 15.7476 27.2884 15.6667 26.2051 15.6667C23.9426 15.6667 22.3359 17.0476 22.3359 19.5834V21.9167H19.8359V25.2501H22.3359V32.3334H25.6693V25.2501Z"
            fill='currentColor'
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
          <clipPath id="clip0_4191_793">
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
