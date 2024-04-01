import Layout from '../../../Layout';

export default function Header({ title, subtitle }) {
  return (
    <Layout>
      <div className="pb-10 pt-[108px] md:grid md:grid-cols-8 md:gap-4 md:pb-12 md:pt-[144px] xl:grid-cols-12 xl:pb-[69px] xl:pt-[176px]">
        <h1 className="mb-6 font-satoshi text-[40px] font-medium leading-[48px] tracking-[-1px] md:col-span-4 md:mb-0 md:text-[56px] md:leading-[64px] xl:col-span-5 xl:text-[72px] xl:leading-[80px]">
          {title}
        </h1>
        <div className="hidden xl:col-span-3 xl:block"></div>
        <h2 className="text-base leading-[160%] md:col-span-4 md:flex md:items-end md:pb-2 md:text-lg xl:col-span-4 xl:text-[20px]">
          {subtitle}
        </h2>
      </div>
    </Layout>
    // <Layout
  );
}
