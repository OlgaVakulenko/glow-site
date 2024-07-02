import cx from 'clsx';

export default function CaseNavArrow({ dir = 'right', theme, ...rest }) {
  return (
    <button
      {...rest}
      className={cx(
				'flex h-12 w-12 items-center justify-center rounded-full border', {
					'border-black': theme === 'light',
					'border-white': theme === 'dark',
			})}
    >
      {dir === 'right' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 12L21 12M21 12L14 19M21 12L14 5" stroke={theme === 'dark' ? '#FFF' : "#19191B"} />
        </svg>
      )}
      {dir === 'left' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 12H3M3 12L10 5M3 12L10 19" stroke={theme === 'dark' ? '#FFF' : "#19191B"} />
        </svg>
      )}
    </button>
  );
}
