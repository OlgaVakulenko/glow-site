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
                'pb-14  md:flex md:items-end md:justify-between md:pb-12 md:pt-[144px] xl:grid xl:grid-cols-9 xl:pb-[82px] xl:pt-[178px] ',
                {},
                className
            )}
        >
            <Animated
                as="h1"
                className={cx(
                    'mb-4 text-next-heading-4 md:text-next-heading-3 md:mb-0 md:mr-0 md:min-w-[550px]  xl:col-span-6 xl:mr-0  xl:min-w-[1440px] xl:text-[72px] xl:pl-[65px] xl:leading-[80px] xl:tracking-[-1px]',
                    headingClassname
                )}
            >
                {title}
            </Animated>
            {/*<div className="hidden xl:col-span-1 xl:block "></div>*/}
            <div
                delay={100}
                className="text-next-body-m md:text-next-body-xxl  xl:col-span-3 xl:text-[20px]  xl:leading-[31px] xl:pr-[65px] ">
                {subtitle}
            </div>
        </Layout>
    );
}
