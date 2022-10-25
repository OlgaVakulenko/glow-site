import cx from 'clsx';
import LinkArrow from './LinkArrow';

const activeHeader = 'hover:bg-black hover:text-brand';
const activeFooter = 'hover:bg-lblue hover:text-black';

export default function BigButton({
  variant = 'header',
  children,
  className = '',
  ...props
}) {
  return (
    <button
      type="button"
      className={cx(
        'font-medium flex justify-between transition-colors duration-200 text-left px-6 text-sm uppercase py-14 glow-border rounded-full',
        {
          [activeHeader]: variant === 'header',
          [activeFooter]: variant === 'footer',
        },
        className
      )}
      {...props}
    >
      {children}
      <span>
        <LinkArrow />
      </span>
    </button>
  );
}
