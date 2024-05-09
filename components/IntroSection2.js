import Layout from './Layout';
import cx from 'clsx';

export default function IntroSection({ title, subtitle, className }) {
  return (
    <Layout
      className={cx(
        'pb-14 pt-[128px] md:flex md:items-end md:justify-between md:pb-12 md:pt-[144px] xl:grid xl:grid-cols-12 xl:gap-8 xl:pb-[32px] xl:pt-[178px]',
        {},
        className
      )}
    >
      <div className="mb-4 text-next-heading-4 md:mb-0 md:mr-24 md:min-w-[416px] md:text-next-heading-3 xl:col-span-6 xl:mr-0 xl:text-next-heading-2">
        {title}
      </div>
      <div className="hidden xl:col-span-1 xl:block"></div>
      <div className="text-next-body-m md:text-next-body-xxl xl:col-span-5">
        {subtitle}
      </div>
    </Layout>
  );
}
