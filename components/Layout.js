import cx from 'clsx';

export default function Layout({
  disableOnMobile = false,
  children,
  className = '',
}) {
  return (
    <div
      className={cx(
        'mx-auto w-full md:px-4 xl:px-14 layout-no-p:px-[120px]',
        '2k:max-w-full',
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

export function Layout2({ children, className = '' }) {
  return (
    <div
      className={cx(
        'mx-auto w-full max-w-[1680px] px-[16px] md:px-[16px] xl:px-[56px] layout:max-w-[1680px]',
        className
      )}
    >
      {children}
    </div>
  );
}
