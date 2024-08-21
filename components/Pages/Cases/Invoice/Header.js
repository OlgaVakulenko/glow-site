import Layout from '../../../Layout';
import Animated from '../../../Animated';

export default function Header({ title, subtitle }) {
  return (
    <Layout>
      <div className="pb-10 pt-[108px] md:grid md:grid-cols-8 md:gap-4 md:pb-12 md:pt-[144px] xl:grid-cols-12 xl:pb-[69px] xl:pt-[176px]">
				<Animated as='h1' className="mb-6 font-satoshi text-[40px] font-medium leading-[48px] tracking-[-1px] md:col-span-4 md:mb-0 md:text-[56px] md:leading-[64px] xl:col-span-5 xl:text-[72px] xl:leading-[80px]">
						{title}
				</Animated>
        <div className="hidden xl:col-span-3 xl:block"></div>
					<Animated as='h2' delay={100} className="text-base leading-[160%] md:flex md:pb-2 md:text-lg xl:text-[20px] md:col-span-4 xl:col-span-4 md:items-end">
						{subtitle}
					</Animated>
      </div>
    </Layout>
  );
}
