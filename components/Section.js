import cx from 'clsx';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { mediaAtom } from '../lib/agent';
import Animated from './Animated';
import Layout from './Layout';

function Section({ children, withLayout = true, ...props }) {
  if (withLayout) {
    return (
      <section {...props}>
        <Layout>{children}</Layout>
      </section>
    );
  }

  return <section {...props}>{children}</section>;
}

Section.Header = function Header({ className, children }) {
  return <div className={cx(className, 'md:flex')}>{children}</div>;
};

Section.Title = function Title({ children }) {
  return (
    <Animated
      animate={'fade-up'}
      className="mb-4 font-glow text-[32px] font-medium leading-[60px] md:w-1/2 md:text-[60px] md:leading-[95%]"
    >
      {children}
    </Animated>
  );
};

Section.Description = function Description({ children }) {
  const [media] = useAtom(mediaAtom);
  const delay = media === 'mobile' ? 0 : 150;

  return (
    <Animated delay={delay} className="text-lg italic md:w-1/2 md:pl-10">
      {children}
    </Animated>
  );
};

export default Section;
