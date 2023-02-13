import Link from 'next/link';
import Layout from '../../Layout';

export default function NextStudy2({ title, href }) {
  return (
    <section className="bg-brand">
      <Link href={href} className="block py-12 md:py-[84px]">
        <Layout>
          <div>
            <div className="mb-2 font-medium opacity-50 md:text-2xl xl:text-[28px] xl:leading-[38px]">
              Next Study
            </div>
            <div className="font-glow text-2xl font-medium md:text-4xl xl:text-5xl xl:leading-[64px]">
              {title}
            </div>
          </div>
        </Layout>
      </Link>
    </section>
  );
}
