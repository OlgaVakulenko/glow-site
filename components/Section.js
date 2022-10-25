import cx from 'clsx';
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
  return <div className={cx(className, 'lg:flex')}>{children}</div>;
};

Section.Title = function Title({ children }) {
  return (
    <div className="mb-4 lg:text-[60px] lg:leading-[95%] lg:w-1/2 font-glow text-[32px] font-medium leading-[60px] ">
      {children}
    </div>
  );
};

Section.Description = function Description({ children }) {
  return <div className="text-lg lg:w-1/2 lg:pl-10 italic">{children}</div>;
};

export default Section;
