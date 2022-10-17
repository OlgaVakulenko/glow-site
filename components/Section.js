import { useMemo } from 'react';
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

Section.Title = function Title({ children }) {
  return (
    <div className="mb-4 font-glow text-[32px] font-medium leading-[60px] ">
      {children}
    </div>
  );
};

Section.Description = function Description({ children }) {
  return <div className="text-lg italic">{children}</div>;
};

export default Section;
