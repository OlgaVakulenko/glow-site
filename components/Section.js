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
      className="mb-6 font-glow text-[40px] font-medium leading-[48px] tracking-[-2px] md:mb-0 md:text-[48px] md:leading-[56px] xl:shrink-0 xl:text-next-heading-2"
    >
      <h3 className="xl:max-w-[440px]">{children}</h3>
    </Animated>
  );
};

Section.Description = function Description({ children }) {
  const [media] = useAtom(mediaAtom);
  const delay = media === 'mobile' ? 0 : 150;

  return (
    <Animated
      delay={delay}
      className="text-[16px] leading-[26px] xl:max-w-[437px] xl:text-next-body-m"
    >
      {children}
    </Animated>
  );
};

export default Section;
