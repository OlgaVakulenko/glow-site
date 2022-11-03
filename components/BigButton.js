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
        'glow-border flex w-full justify-between rounded-full px-6 py-14 text-left text-sm font-medium uppercase transition-colors duration-200',
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
