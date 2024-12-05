import Layout from '../../../Layout';
import Animated from '../../../Animated';
import cx from 'clsx';
import { Fragment } from 'react';

export default function Header({ title, subtitle, type }) {
  return (
    <Layout>
      <div className="md: justify-between pb-10 pt-[128px] md:flex md:pb-[48px] md:pt-[144px] xl:pb-[80px] x-1280:pt-[176px]">
        <Animated
          as="h1"
          className="mb-6 font-satoshi text-[40px] font-medium leading-[48px] tracking-[-1px] md:mb-0 md:w-[55vw]  md:max-w-[778px] md:text-[56px] md:leading-[72px] xl:text-[72px] xl:leading-[80px]"
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
          className="text-base font-normal leading-[24px] sm:flex md:w-[320px] md:items-end md:pb-2 md:text-[20px] md:leading-[32px] md-safe:w-[356px] xl:w-[414px]"
        >
          {subtitle}
        </Animated>
      </div>
    </Layout>
  );
}
