import cx from 'clsx';
import { useHeaderTheme } from '../../Header';
import Layout from '../../Layout';
import PageHeading from '../../PageHeading';
import PageSubheading from '../../PageSubheading';
import DefaultLayout from '../Layouts/DefaultLayout';
import Image from '../../Image';
import Img from './assets/team-cover.png';
import DimSection from '../../DimSection';
import Founders from './Founders';
import HRule from '../../HRule';
import Team from './Team';
import Push from './Push';
import Logos from './Logos';
import BlogPosts from './BlogPosts';
import Animated from '../../Animated';

export default function About() {
  return (
    <div>
      <Layout className="pt-48 pb-14 md:pt-[241px] xl:pt-[216px]">
        <div className="mb-[75px] md:mb-[93px] xl:mb-[100px]">
          <PageSubheading>
            Love for digital product and deep expertise of the team
          </PageSubheading>
        </div>

        <PageHeading>
          Hello it’s
          <br /> Glow design <br className="md:hidden" /> Agency
        </PageHeading>
      </Layout>
      <div>
        <Image
          src={Img}
          className="h-[408px] w-full object-cover md:h-[463px] xl:h-[664px]"
          alt=""
        />
      </div>
      <Layout className="pt-16 pb-24 md:pt-[111px] md:pb-[137px] xl:pt-[103px] xl:pb-[136px]">
        <Vision />
      </Layout>
      <DimSection className="pt-[80px] md:pt-[137px]">
        <Founders />
        <HRule className="mb-14" />
        <Team />
        <Push />
        <Logos />
        <HRule className="mb-14" />
        <BlogPosts />
      </DimSection>
    </div>
  );
}

function VisionBlock({ heading, text, className = '' }) {
  return (
    <div
      className={cx(
        'mb-[79px] last:mb-[0px] md:mb-0 md:w-1/2 xl:w-2/5',
        className
      )}
    >
      <div className="mb-8 text-body-heading-s uppercase opacity-50">
        {heading}
      </div>
      <div className="text-[32px] font-medium leading-[40px] xl:text-[36px] xl:leading-[48px]">
        {text}
      </div>
    </div>
  );
}

export function Separator({ className, size = 98 }) {
  return (
    <svg
      className={cx(className)}
      width={size}
      height={size}
      viewBox="0 0 98 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M97.0845 0.833479L0.917969 97" stroke="black" />
    </svg>
  );
}

function Vision() {
  return (
    <Animated className="relative md:flex xl:justify-between">
      <VisionBlock
        heading={'our  mission'}
        text={
          <>
            Simple design for complex <br className="hidden md:block" />
            products
          </>
        }
        className="md:pr-10 xl:pr-0"
      />
      <Separator className="hidden self-end xl:mb-6 xl:-ml-[5.5%] xl:block" />
      <VisionBlock
        heading={'our vision'}
        text="To become leader in enterprise design by creating game changing products"
        className="md:pl-3 xl:pl-0"
      />
    </Animated>
  );
}

About.getLayout = function getLayout(page) {
  return <DefaultLayout page={'about'}>{page}</DefaultLayout>;
};
