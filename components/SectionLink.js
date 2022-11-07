import Link from 'next/link';
import { useMemo } from 'react';
import Animated from './Animated';
import Go from './Go';
import Layout from './Layout';
import LinkArrow from './LinkArrow';
import LinkArrowCircle from './LinkArrowCircle';

export default function SectionLink({ className, title, description, href }) {
  const Wrapper = useMemo(() => {
    if (href) {
      return function Wrapper({ children, ...props }) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        );
      };
    } else {
      return function Wrapper({ children, ...props }) {
        return <div {...props}>{children}</div>;
      };
    }
  }, [href]);

  return (
    <Layout className={className}>
      <Wrapper className="group">
        <div className="flex flex-col items-center justify-between md:flex-row  md:items-start">
          <Animated className="mb-[15px] font-glow text-xl font-medium leading-[34px] tracking-[0.02em] md:mb-0 md:w-full md:max-w-[240px] md:text-[22px] xl:max-w-[320px] xl:text-2xl xl:leading-10">
            {title}
          </Animated>
          <Animated
            delay={150}
            className="text-center text-lg italic leading-6 md:flex-grow md:text-left md:text-xl md:leading-[27px]"
          >
            <div className="md:max-w-[440px]">{description}</div>
          </Animated>
          <Animated delay={300} className="hidden md:block">
            <LinkArrowCircle />
          </Animated>
        </div>
      </Wrapper>
    </Layout>
  );
}
