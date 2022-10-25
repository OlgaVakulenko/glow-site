import cx from 'clsx';

export default function Layout({ children, className = '' }) {
  return (
    <div className={cx('w-full px-[16px] lg:px-[48px]', className)}>
      {children}
    </div>
  );
}
