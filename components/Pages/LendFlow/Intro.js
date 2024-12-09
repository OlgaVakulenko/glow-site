import cx from 'clsx';
import Layout from '../../../components/Animated';
import Animated from '../../../components/Animated';

export default function IntroSection({
  title,
  subtitle,
  className,
  headingClassname,
}) {
  return (
    <Layout
      className={cx(
        'pb-14  md:flex md:items-end md:justify-between md:pb-[64px] md:pt-[144px] xl:grid xl:grid-cols-9 xl:pb-[82px] xl:pt-[178px] ',
        {},
        className
      )}
    >
      <Animated
        as="h1"
        className={cx(
          'mb-4 pl-[12px] text-next-heading-4 md:mb-0 md:mr-0 md:min-w-[550px] md:pl-[33px] md:text-[48px] md:text-next-heading-3 md:leading-[64px] md:tracking-[-1px] xl:col-span-6 xl:mr-0 xl:min-w-[1440px] xl:pl-[65px] xl:text-[72px] xl:leading-[80px] xl:tracking-[-1px]',
          headingClassname
        )}
      >
        {title}
      </Animated>
      {/*<div className="hidden xl:col-span-1 xl:block "></div>*/}
      <div
        delay={100}
        className="pl-3 pt-2 font-inter text-[16px] leading-[24px] md:pl-0 md:pr-[20px] md:pt-0 md:text-[24px] md:text-next-body-xxl md:leading-[36px] xl:col-span-3 xl:pl-0 xl:pr-[65px] xl:pt-0 xl:text-[20px] xl:leading-[31px] "
      >
        {subtitle}
      </div>
    </Layout>
  );
}
