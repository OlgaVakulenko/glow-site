import cx from 'clsx';
import { useAtom } from 'jotai';
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
      className="mb-6 font-glow text-[40px] font-medium leading-[48px] md:w-1/2 md:text-[48px] md:leading-[56px] xl:text-[56px] xl:leading-[64px]"
    >
      <h2 className="xl:max-w-[440px]">{children}</h2>
    </Animated>
  );
};

Section.Description = function Description({ children }) {
  const [media] = useAtom(mediaAtom);
  const delay = media === 'mobile' ? 0 : 150;

  return (
    <Animated
      delay={delay}
      className="text-[16px] leading-[160%] md:w-1/2 md:pl-10 xl:pl-40 xl:text-[18px]"
    >
      {children}
    </Animated>
  );
};

export default Section;
