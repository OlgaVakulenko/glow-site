import { forwardRef, useEffect, useRef } from 'react';

const FormInput = forwardRef(
  ({ value, onChange, name, isVisible, _ref, ...props }, ref) => {
    useEffect(() => {
      const node = _ref && _ref.current;
      if (isVisible && node) {
        node.focus();
      }
    }, [isVisible, _ref]);

    return (
      <div className="w-full">
        <input
          ref={ref}
          {...props}
          className="w-full border-b border-black text-center text-body-m !leading-[48px] focus-visible:outline-none"
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;
