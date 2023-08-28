import { useMemo } from 'react';
import { useMediaAtom } from '../lib/agent';

export default function DynamicMedia({
  mobile,
  tablet,
  desktop,
  children,
  ...props
}) {
  const media = useMediaAtom();
  const Component = useMemo(() => {
    if (media === 'desktop') {
      return desktop || tablet || mobile || 'div';
    }

    if (media === 'tablet') {
      return tablet || mobile || 'div';
    }

    if (media === 'mobile') {
      return mobile || 'div';
    }
  }, [media, mobile, tablet, desktop]);

  return <Component {...props}>{children}</Component>;
}
