'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import cx from 'clsx';

function CheckIcon({ className }) {
  return (
    <svg
      className={className}
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4.5L4.50011 7.99999L11.5001 1"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      onMouseDown={() => {
        setIsPressed(true);
      }}
      onMouseUp={() => {
        setIsPressed(false);
      }}
      onMouseLeave={() => {
        setIsPressed(false);
      }}
      className={cx(
        'focus-visible:ring-ring peer h-[14px] w-[14px] shrink-0 rounded-sm shadow-checkbox transition-all focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand data-[state=checked]:text-white',
        'data-[state="checked"]:border-brand data-[state=checked]:bg-brand data-[state=checked]:text-white data-[state=checked]:shadow-checkbox-checked',
        isPressed && 'scale-90',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cx('flex items-center justify-center text-current')}
      >
        <CheckIcon className="h-[14px] w-[14px]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
