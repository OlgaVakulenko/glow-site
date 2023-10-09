import { useMemo } from 'react';
import cx from 'clsx';

export default function AnimatedButton({
  as = 'button',
  className,
  children,
  ...props
}) {
  const Component = useMemo(() => {
    return as;
  }, [as]);

  return (
    <Component className={cx('animated-button', className)} {...props}>
      <div className="animated-button-cintent">{children}</div>
    </Component>
  );
}
