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
  size = 'medium',
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={cx(
        {
          'bg-brand': flavor === 'primary',
          'border border-lblue bg-transparent font-medium !text-white hover:bg-lblue hover:text-black':
            flavor === 'secondary' && color === 'white',
          'border border-black bg-transparent text-black':
            flavor === 'secondary' && color === 'black',
          '!text-white': color === 'white',
          '!text-black': color === 'black',
          'px-6 py-3 md:px-9 md:py-4': compact === false,
          'px-5 py-3': compact === true,
          '!py-5': size === 'large',
        },
        'rolling-text-group inline-block rounded-full text-[16px] leading-[24px] tracking-[-0.01em] transition-colors duration-200 focus-visible:shadow-btn-focus md:text-next-body-s',
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
