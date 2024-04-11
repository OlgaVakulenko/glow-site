import cx from 'clsx';

export default function Layout({
  disableOnMobile = false,
  disablePadding = false,
  children,
  className = '',
}) {
  return (
    <div
      className={cx(
        'mx-auto w-full max-w-[1440px]',
        {
          'md:px-8 xl:px-16': !disablePadding,
          'px-4': !disableOnMobile && !disablePadding,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
