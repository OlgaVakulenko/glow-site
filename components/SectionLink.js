import Link from 'next/link';
import Go from './Go';
import Layout from './Layout';
import LinkArrow from './LinkArrow';

export default function SectionLink({ className, title, description, href }) {
  return (
    <Layout className={className}>
      <Link href={href} className="group-go">
        <div className="flex justify-between">
          <div className="font-glow text-2xl font-medium">{title}</div>
          <div className="text-xl italic leading-[27px]">{description}</div>
          <div>
            <LinkArrow />
          </div>
        </div>
      </Link>
    </Layout>
  );
}
