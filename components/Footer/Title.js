import cx from 'clsx';

export default function Title({ className, children }) {
  return (
    <div
      className={cx(
        'font-glow text-[32px] font-medium leading-[100%] md:text-[60px] xl:mb-[120px] xl:text-[64px]'
      )}
    >
      {children}
    </div>
  );
}
