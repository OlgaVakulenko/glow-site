import { forwardRef, useEffect, useRef, useState } from 'react';
import cx from 'clsx';

const FormInput = forwardRef(
  (
    {
      value,
      onChange,
      name,
      isVisible,
      _ref,
      isValid = (value) => value.trim(),
      onBlur,
      errorText = 'This field is required',
      ...props
    },
    ref
  ) => {
    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
      const node = _ref && _ref.current;
      if (isVisible && node) {
        node.focus();
      }
    }, [isVisible, _ref]);

    const isError = isDirty && !isValid(value);

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          {...props}
          className={cx(
            'w-full border-b border-black text-center text-body-m !leading-[48px] placeholder:text-black focus-visible:outline-none',
            {
              '!border-[#E33230]': isError,
            }
          )}
          value={value}
          onChange={(event) => {
            console.log('on change');
            if (onChange) {
              onChange(event);
            }
          }}
          onBlur={(event) => {
            if (!isDirty) {
              setIsDirty(true);
            }

            if (onBlur) {
              onBlur(event);
            }
          }}
          name={name}
        />
        {isError && (
          <div className="text-body-m text-[#E33230]">{errorText}</div>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;
