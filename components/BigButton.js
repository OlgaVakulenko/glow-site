import cx from 'clsx';
import LinkArrow from './LinkArrow';

const activeHeader = 'hover:bg-black hover:text-brand';
const activeFooter = 'hover:bg-lblue hover:text-black';

export default function BigButton({
  variant = 'header',
  children,
  className = '',
  hideLink = false,
  border = true,
  ...props
}) {
  return (
    <button
      type="button"
      className={cx(
        ' flex w-full items-center justify-between rounded-full px-6 py-14 text-left text-sm font-medium uppercase tracking-[0.03em] transition-colors duration-200 md:aspect-square md:max-w-[320px] md:pr-[20px]',
        {
          ['glow-border']: border,
          [activeHeader]: variant === 'header',
          [activeFooter]: variant === 'footer',
          ['glow-border-light']: variant === 'footer',
        },
        className
      )}
      {...props}
    >
      {children}
      {!hideLink && (
        <span>
          <LinkArrow />
        </span>
      )}
    </button>
  );
}
