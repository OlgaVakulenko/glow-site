import { useMemo } from 'react';
import RollingText from './RollingText';
import cx from 'clsx';

export default function Button2({
  as = 'button',
  className,
  children,
  flavor = 'primary',
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={cx(
        {
          'rounded-full bg-brand': flavor === 'primary',
        },
        'inline-block px-6 py-3 text-button-m2 uppercase text-black focus-visible:shadow-btn-focus md:px-9 md:py-4',
        className
      )}
      {...props}
    >
      <RollingText height={24} text={children} />
    </Component>
  );
}
