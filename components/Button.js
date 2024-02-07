import { useMemo } from 'react';
import RollingText from './RollingText';
import cx from 'clsx';

export default function Button2({
  as = 'button',
  className,
  children,
  color = 'black',
  flavor = 'primary',
  compact = false,
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={cx(
        {
          'bg-brand': flavor === 'primary',
          'border border-lblue bg-transparent text-white hover:bg-lblue hover:text-black':
            flavor === 'secondary',
          'text-white': color === 'white',
          'text-black': color === 'black',
          'px-6 py-3 md:px-9 md:py-4': compact === false,
          'px-6 py-3': compact === true,
        },
        'rolling-text-group inline-block rounded-full text-button-m2 uppercase transition-colors duration-200 focus-visible:shadow-btn-focus',
        className
      )}
      {...props}
    >
      {typeof children === 'string' ? (
        <RollingText height={24} text={children} />
      ) : (
        children
      )}
    </Component>
  );
}
