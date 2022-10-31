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
  return <div className={cx(className, 'md:flex')}>{children}</div>;
};

Section.Title = function Title({ children }) {
  return (
    <div className="mb-4 font-glow text-[32px] font-medium leading-[60px] md:w-1/2 md:text-[60px] md:leading-[95%] ">
      {children}
    </div>
  );
};

Section.Description = function Description({ children }) {
  return <div className="text-lg italic md:w-1/2 md:pl-10">{children}</div>;
};

export default Section;
