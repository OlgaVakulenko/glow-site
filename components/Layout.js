import cx from 'clsx';

export default function Layout({
  disableOnMobile = false,
  children,
  className = '',
}) {
  return (
    <div
      className={cx(
        'mx-auto w-full max-w-[1424px] md:px-8 xl:px-16',
        'xl:px-16',
        // '4xl:px-[120px]',
        // '2k:max-w-full',
        {
          'px-4': !disableOnMobile,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
