import cx from 'clsx';
import Animated from '../Animated';

export default function Subheading({ children, className, ...props }) {
  return (
    <Animated as="h3" className={cx(className, 'text-xl leading-6')} {...props}>
      {children}
    </Animated>
  );
}

export function Subheading2({
  children,
  className,
  mdClassName,
  xlClassName,
  ...props
}) {
  return (
    <Animated
      as="h3"
      className={cx(
        className,
        'text-xl leading-6',
        {
          'md:text-2xl md:leading-[33px]': !mdClassName,
          'xl:text-[26px] 4xl:text-[30px] 4xl:leading-[38px]': !xlClassName,
        },
        mdClassName,
        xlClassName
      )}
      {...props}
    >
      {children}
    </Animated>
  );
}
