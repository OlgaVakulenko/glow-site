import { useMemo } from 'react';
import RollingText from './RollingText';
import cx from 'clsx';

export default function Button2({
  as = 'button',
  className,
  children,
  color = 'black',
  flavor = 'primary',
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={cx(
        {
          'rounded-full bg-brand': flavor === 'primary',
          'text-white': color === 'white',
          'text-black': color === 'black',
        },
        'rolling-text-group inline-block px-6 py-2 text-button-m2 focus-visible:shadow-btn-focus md:px-9 md:py-4',
        className
      )}
      {...props}
    >
      <RollingText height={24} text={children} />
    </Component>
  );
}
