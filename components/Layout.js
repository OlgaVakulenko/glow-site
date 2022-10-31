import cx from 'clsx';

export default function Layout({ children, className = '' }) {
  return (
    <div
      className={cx('w-full px-[16px] md:px-[48px] xl:px-[56px]', className)}
    >
      {children}
    </div>
  );
}
