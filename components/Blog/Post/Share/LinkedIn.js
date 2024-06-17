import { getAbsoluteUrl } from '../../../../lib/utils';

const url = (share) =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${share}`;

export default function LinkedIn() {
  const href = getAbsoluteUrl();

  return (
    <a href={url(href)} target="_blank" rel="noreferrer">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4191_798)">
          <path
            d="M19.7865 18.1668C19.7862 18.6088 19.6104 19.0326 19.2977 19.345C18.985 19.6574 18.561 19.8328 18.119 19.8326C17.6769 19.8324 17.2531 19.6566 16.9407 19.3439C16.6283 19.0311 16.4529 18.6071 16.4531 18.1651C16.4533 17.7231 16.6292 17.2992 16.9419 16.9868C17.2546 16.6744 17.6786 16.499 18.1206 16.4993C18.5627 16.4995 18.9865 16.6753 19.2989 16.988C19.6113 17.3007 19.7867 17.7247 19.7865 18.1668ZM19.8365 21.0668H16.5031V31.5001H19.8365V21.0668ZM25.1031 21.0668H21.7865V31.5001H25.0698V26.0251C25.0698 22.9751 29.0448 22.6918 29.0448 26.0251V31.5001H32.3365V24.8918C32.3365 19.7501 26.4531 19.9418 25.0698 22.4668L25.1031 21.0668Z"
            fill="#09121F"
          />
        </g>
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          rx="23.5"
          stroke="rgba(25,25,27,0.15)"
        />
        <defs>
          <clipPath id="clip0_4191_798">
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
