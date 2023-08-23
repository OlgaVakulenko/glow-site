import cx from 'clsx';

export default function PolicyLayout({ children, className }) {
  return (
    <div className={cx('mx-auto max-w-[700px] px-4', className)}>
      {children}
    </div>
  );
}
