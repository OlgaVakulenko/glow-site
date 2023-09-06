import Animated from './Animated';
import cx from 'clsx';
import Head from 'next/head';

export default function PageHeading({ className, children }) {
  return (
    <div
      className={cx(
        'font-glow text-[40px] font-medium leading-10 tracking-[-1px] md:text-[80px] md:leading-[81px] xl:text-[100px] xl:leading-[90px]',
        className
      )}
    >
      <Animated immediate as="h1">
        {children}
      </Animated>
    </div>
  );
}

export function PageHeading2({ className, children }) {
  return (
    <div
      className={cx(
        'font-glow text-[40px] font-medium leading-10 tracking-[-1px] md:text-[64px] md:leading-[59px] xl:text-[72px] xl:leading-[67px] xl:tracking-[-2px] layout-no-p:text-[92px] layout-no-p:leading-[92px]',
        className
      )}
    >
      <Animated immediate as="h1">
        {children}
      </Animated>
    </div>
  );
}
