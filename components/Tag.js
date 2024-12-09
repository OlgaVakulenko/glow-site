import cx from 'clsx';
import { forwardRef } from 'react';

export function Tag({ className, children, active }) {
  return (
    <div
      className={cx(
        'rounded-full bg-black-dim px-3 py-[2px] text-next-tag font-medium uppercase text-black',
        {
          'data-[active=true]:bg-black data-[active=true]:text-white': active,
        },
        className
      )}
      style={{
        boxShadow: !active
          ? 'inset 0 0 0px 1px rgba(25, 25, 27, 0.15)'
          : 'none',
      }}
      data-active={active}
    >
      {children}
    </div>
  );
}
