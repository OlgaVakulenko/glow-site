import cx from 'clsx';
import LinkArrow from './LinkArrow';
import RollingText from './RollingText';

const activeHeader = 'hover:bg-brand hover:text-black';
const activeFooter = 'hover:bg-lblue hover:text-black';
const activeContacts = 'hover:bg-black hover:text-white';

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
        'rolling-text-group flex w-full items-center justify-between rounded-full px-6 py-14 text-left text-sm font-medium uppercase tracking-[0.03em] transition-colors duration-500 md:aspect-square md:max-w-[320px] md:pr-[20px]',
        {
          ['glow-border']: border,
          [activeHeader]: variant === 'header',
          [activeFooter]: variant === 'footer',
          [activeContacts]: variant === 'contacts',
          ['glow-border-black']: variant === 'contacts',
          ['glow-border-light']: variant === 'footer',
        },
        className
      )}
      {...props}
    >
      <RollingText height={20} text={children}></RollingText>
      {/* {children} */}
      {!hideLink && (
        <span>
          <LinkArrow />
        </span>
      )}
    </button>
  );
}
