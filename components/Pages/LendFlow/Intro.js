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
                    'mb-4 text-next-heading-4 md:text-next-heading-3 md:mb-0 md:mr-0 md:min-w-[550px] xl:col-span-6 xl:mr-0 xl:min-w-[1440px] md:text-[48px] xl:text-[72px] pl-[12px] md:pl-[33px] xl:pl-[65px] md:leading-[64px] xl:leading-[80px] md:tracking-[-1px] xl:tracking-[-1px]',
                    headingClassname
                )}
            >
                {title}
            </Animated>
            {/*<div className="hidden xl:col-span-1 xl:block "></div>*/}
            <div
                delay={100}
                className="md:text-next-body-xxl xl:col-span-3 font-inter text-[16px] md:text-[24px] xl:text-[20px] leading-[24px] md:leading-[36px] xl:leading-[31px] pl-3 md:pl-0 xl:pl-0 pt-2 md:pt-0 xl:pt-0 md:pr-[20px] xl:pr-[65px] ">
                {subtitle}
            </div>
        </Layout>
    );
}
