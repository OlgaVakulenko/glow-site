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
