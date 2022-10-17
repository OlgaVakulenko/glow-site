import cx from 'clsx';

export default function Layout({ children, className = '' }) {
  return <div className={cx('w-full px-[16px]', className)}>{children}</div>;
}
