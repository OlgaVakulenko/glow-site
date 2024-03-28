import Layout from './Layout';

export default function IntroSection({ title, subtitle }) {
  return (
    <Layout className="m pb-10 pt-[128px] md:flex md:items-end md:justify-between md:pb-12 md:pt-[144px] xl:grid xl:grid-cols-12 xl:gap-8 xl:pb-[72px] xl:pt-[178px]">
      <div className="mb-6 font-satoshi text-[40px] font-medium leading-[48px] tracking-[-1px] md:mb-0 md:text-[56px] md:leading-[64px] xl:col-span-8 xl:text-[72px] xl:leading-[80px]">
        {title}
      </div>
      <div className="text-[16px] leading-[160%] md:max-w-[414px] md:pb-2 md:text-[18px] xl:col-span-4 xl:text-[20px]">
        {subtitle}
      </div>
    </Layout>
  );
}
