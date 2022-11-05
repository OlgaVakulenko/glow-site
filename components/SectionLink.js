import Link from 'next/link';
import Animated from './Animated';
import Go from './Go';
import Layout from './Layout';
import LinkArrow from './LinkArrow';
import LinkArrowCircle from './LinkArrowCircle';

export default function SectionLink({ className, title, description, href }) {
  return (
    <Layout className={className}>
      <Link href={href} className="group">
        <div className="flex justify-between">
          <Animated className="font-glow text-2xl font-medium">
            {title}
          </Animated>
          <Animated
            delay={150}
            className="text-xl italic leading-[27px] md:max-w-[440px]"
          >
            {description}
          </Animated>
          <Animated delay={300}>
            <LinkArrowCircle />
          </Animated>
        </div>
      </Link>
    </Layout>
  );
}
