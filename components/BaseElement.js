import { useMemo } from 'react';

export default function BaseElement({ as, children, ...rest }) {
  const Wrapper = useMemo(() => {
    const Dynamic = as;
    const Component = ({ children, ...rest }) => (
      <Dynamic {...rest}>{children}</Dynamic>
    );
    Component.dispayName = as?.dispayName || as;

    return Component;
  }, [as]);

  return <Wrapper {...rest}>{children}</Wrapper>;
}
