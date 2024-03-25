import Image from '../../../Image';
import Layout from '../../../Layout';
import Frame6 from './assets/frame-6.png';
import Frame6md from './assets/frame-6-md.png';
import Frame65 from './assets/frame-65.png';
// import Frame6xl from './assets/frame-6-xl.png';
import Frame7 from './assets/frame-7.png';
import Frame7md from './assets/frame-7-md.png';
import Frame7xl from './assets/frame-7-xl.png';
import Frame8 from './assets/frame-8.png';
import Frame8md from './assets/frame-8-md.png';
import Frame8xl from './assets/frame-8-xl.png';
import RespImage from './RespImage';

export default function Generating() {
  return (
    <Layout className="grid gap-4 md:gap-8">
      <div className="relative overflow-hidden rounded-[24px] bg-[#D1FC54] px-5 py-[44px] md:p-[52px] xl:px-[112px] xl:py-[100px]">
        <div className="mb-[44px] md:mb-8 md:max-w-[568px]">
          <div className="mb-4 font-satoshi text-[28px] font-medium leading-[36px] md:text-[31px] md:leading-[120%]">
            The InvoiceMaker application for generating
            <br className="md:hidden" /> invoices
          </div>
          <div className="text-base leading-[160%] opacity-50 md:leading-[140%]">
            This is how the idea of incorporating onboarding screens into the
            InvoiceMaker application for generating invoices came about.
            Onboarding helps users in creating professional and accurate
            invoices has never been easier.
          </div>
        </div>

        <RespImage className="max-w-[107%]" src={Frame6} md={Frame6md} />
        <Image
          src={Frame65}
          alt=""
          className="absolute right-[100px] top-[100px] hidden h-[54vw] !w-auto object-contain xl:block"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-8 md:gap-8 xl:grid-cols-12">
        <RespImage
          pictureClassname="md:col-span-5 xl:col-span-8"
          className="w-full md:rounded-[32px] xl:rounded-[40px]"
          src={Frame7}
          md={Frame7md}
          xl={Frame7xl}
        />
        <RespImage
          pictureClassname="md:col-span-3 xl:col-span-4"
          className="w-full md:rounded-[32px] xl:max-h-[783px] xl:rounded-[40px]"
          src={Frame8}
          md={Frame8md}
          xl={Frame8xl}
        />
      </div>
    </Layout>
  );
}
