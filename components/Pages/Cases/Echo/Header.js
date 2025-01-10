import Layout from '../../../Layout';
import Animated from '../../../Animated';
import cx from 'clsx';
import { Fragment } from 'react';

export default function Header({ title, subtitle, type }) {
  return (
    <Layout disableOnMobile className="max-md:px-3">
      <div className="md:justify-between pb-[50px] pt-[232px] md:flex md:pb-[72px] md:pt-[384px] xl:pb-[88px] xl:gap-[60px]   x-1280:pt-[400px]">
        <Animated
          as="h1"
          className="mb-6 text-white font-satoshi text-[40px] font-medium leading-[48px] tracking-[-1px] md:mb-0 md:w-[53.5vw]  md:max-w-[546px] xl:md:min-w-[642px]  md:text-[56px] md:leading-[64px] xl:text-[72px] xl:leading-[80px]"
        >
          {title.includes('<br />')
            ? title.split('<br />').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  {index !== title.split('<br />').length - 1 && <br />}
                </Fragment>
              ))
            : title}
        </Animated>
        <Animated
          as="h2"
          delay={100}
          className="text-base xl:mr-[6.2%] text-white font-normal leading-[26px] sm:flex md:w-[320px] md:items-end md:text-[18px] xl:text-[20px] md:leading-[28.8px]  xl:leading-[32px] md-safe:w-[414px] xl:w-[468px]"
        >
          {subtitle}
        </Animated>
      </div>
    </Layout>
  );
}
