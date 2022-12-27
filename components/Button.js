import cx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';
import RollingText from './RollingText';

export default function Button({
  href = null,
  children,
  theme,
  className,
  ...props
}) {
  const El = useMemo(() => {
    if (typeof href === 'string') {
      return Link;
    }

    return 'button';
  }, [href]);

  return (
    <El
      className={cx(
        'glow-border-black rolling-text-group flex whitespace-pre-wrap rounded-full px-[19px] py-[16px] text-button-m uppercase shadow-black transition-all duration-500 hover:bg-black',
        'hover:text-brand',
        theme === 'white' &&
          'glow-border-b-b hover:!bg-brand hover:!text-black',
        theme === 'dark' &&
          'glow-border-white-to-r text-white hover:!bg-brand hover:!text-black',
        className
      )}
      href={href}
      {...props}
    >
      <RollingText height={20} text={children}></RollingText>
    </El>
  );
}
