import cx from 'clsx';
import Animated from '../Animated';

export default function Subheading({ children, className, ...props }) {
  return (
    <Animated
      as="h3"
      className={cx(className, 'text-xl italic leading-6')}
      {...props}
    >
      {children}
    </Animated>
  );
}

export function Subheading2({ children, className, ...props }) {
  return (
    <Animated
      as="h3"
      className={cx(
        className,
        'text-xl italic leading-6 md:text-2xl md:leading-[33px] xl:text-[26px]'
      )}
      {...props}
    >
      {children}
    </Animated>
  );
}
