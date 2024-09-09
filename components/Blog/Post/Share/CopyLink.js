import { useEffect, useState } from 'react';
import { getAbsoluteUrl, useLayoutSsrEffect } from '../../../../lib/utils';
import cx from 'clsx';

export default function CopyLink() {
  const [enabled, setEnabled] = useState(true);
  const [clicked, setClicked] = useState(false);

  useLayoutSsrEffect(() => {
    if (!window?.navigator?.clipboard) {
      setEnabled(false);
    }
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setClicked(false);

      return () => {
        clearInterval(id);
      };
    }, 500);
  }, [clicked]);

  if (!enabled) {
    return null;
  }

  const handleClick = () => {
    navigator.clipboard.writeText(getAbsoluteUrl()).then(() => {
      setClicked(true);
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cx('social-link transition-colors duration-200', {
        '!text-brand': clicked,
      })}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4191_815)">
          <path
            d="M28.7172 26.3566L27.5389 25.1783L28.7172 23.9999C29.0268 23.6904 29.2723 23.3229 29.4398 22.9185C29.6073 22.5141 29.6936 22.0806 29.6936 21.6428C29.6936 21.2051 29.6073 20.7716 29.4398 20.3672C29.2723 19.9628 29.0268 19.5953 28.7172 19.2858C28.4077 18.9762 28.0402 18.7307 27.6358 18.5632C27.2314 18.3956 26.7979 18.3094 26.3601 18.3094C25.9224 18.3094 25.4889 18.3956 25.0845 18.5632C24.6801 18.7307 24.3126 18.9762 24.0031 19.2858L22.8247 20.4641L21.6464 19.2858L22.8247 18.1074C23.765 17.1824 25.0327 16.6663 26.3517 16.6717C27.6707 16.677 28.9342 17.2034 29.8669 18.1361C30.7996 19.0688 31.3259 20.3323 31.3313 21.6513C31.3367 22.9703 30.8206 24.238 29.8956 25.1783L28.7172 26.3566ZM26.3597 28.7141L25.1814 29.8924C24.7185 30.3629 24.167 30.7371 23.5588 30.9934C22.9505 31.2497 22.2976 31.3831 21.6375 31.3858C20.9775 31.3884 20.3235 31.2604 19.7132 31.0091C19.1029 30.7577 18.5484 30.388 18.0817 29.9213C17.6149 29.4546 17.2452 28.9001 16.9939 28.2898C16.7426 27.6795 16.6145 27.0255 16.6172 26.3654C16.6199 25.7054 16.7533 25.0524 17.0096 24.4442C17.2659 23.836 17.6401 23.2845 18.1106 22.8216L19.2889 21.6433L20.4672 22.8216L19.2889 23.9999C18.9794 24.3095 18.7338 24.6769 18.5663 25.0814C18.3988 25.4858 18.3126 25.9193 18.3126 26.357C18.3126 26.7948 18.3988 27.2282 18.5663 27.6327C18.7338 28.0371 18.9794 28.4046 19.2889 28.7141C19.5984 29.0236 19.9659 29.2692 20.3703 29.4367C20.7748 29.6042 21.2082 29.6904 21.646 29.6904C22.0837 29.6904 22.5172 29.6042 22.9216 29.4367C23.3261 29.2692 23.6935 29.0236 24.0031 28.7141L25.1814 27.5358L26.3597 28.7141ZM26.3597 20.4641L27.5389 21.6433L21.6464 27.5349L20.4672 26.3566L26.3597 20.4649V20.4641Z"
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
          <clipPath id="clip0_4191_815">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(14 14)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
