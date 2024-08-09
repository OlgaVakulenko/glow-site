import cx from 'clsx';

export default function Box({ className, children }) {
  return (
    <div className={cx('py-[52px] md:py-[72px] xl:py-[88px]', className)}>
      {children}
    </div>
  );
}