import Header from './Header';
import Frame1md from './assets/frame-1-md.png';
import Frame1xl from './assets/frame-1-xl.png';
import Frame1 from './assets/frame-1.png';
import Frame2md from './assets/frame-2-md.png';
import Frame2xl from './assets/frame-2-xl.png';
import Frame2 from './assets/frame-2.png';
import Frame3md from './assets/frame-3-md.png';
import Frame3xl from './assets/frame-3-xl.png';
import Frame3 from './assets/frame-3.png';
import Frame4md from './assets/frame-4-md.png';
import Frame4xl from './assets/frame-4-xl.png';
import Frame4 from './assets/frame-4.png';
import Frame5md from './assets/frame-5-md.png';
import Frame5xl from './assets/frame-5-xl.png';
import Frame5 from './assets/frame-5.png';

import Layout from '../../../Layout';
import Branding from './Branding';
import Generating from './Generating';
import Objectives from './Objectives';
import ProblemsSolutions from './ProblemsSolutions';
import RespImage from './RespImage';
import Frame9md from './assets/frame-9-md.png';
import Frame9xl from './assets/frame-9-xl.png';
import Frame9 from './assets/frame-9.png';

export default function InvoiceMaker() {
  return (
    <div>
      <Header
        title="Invoice Maker - everything about invoices"
        subtitle="InvoiceMaker is designed to saves all of your invoicing information, making it simple to generate repeat invoices for regular clients."
      />
      <RespImage
        src={Frame1}
        md={Frame1md}
        xl={Frame1xl}
        className="bg-[#7a7b7c]"
      />
      <Objectives />
      <Layout className="grid gap-4 md:grid-cols-8 md:gap-8 xl:grid-cols-12">
        <div className="relative overflow-hidden rounded-[24px] rounded-t-[44px] md:col-span-8 md:rounded-[44px] md:rounded-b-[32px] xl:col-span-12 xl:rounded-[56px] xl:rounded-t-[56px]">
          <RespImage
            pictureClassname=""
            className=""
            src={Frame2}
            md={Frame2md}
            xl={Frame2xl}
          />
          <video
            autoPlay
            loop
            muted
            controls={false}
            src="/video/invoice/input2.mp4"
            className="absolute -bottom-8 left-1/2 mx-auto w-[180vw] max-w-[180vw] -translate-x-1/2 md:bottom-0 md:h-full md:max-h-[79%] md:w-full md:max-w-full xl:max-h-[72%]"
          />
        </div>

        <RespImage
          pictureClassname="md:col-span-4 xl:col-span-6"
          className="rounded-[24px] md:rounded-[32px] xl:rounded-[40px]"
          src={Frame3}
          md={Frame3md}
          xl={Frame3xl}
        />
        <RespImage
          pictureClassname="md:col-span-4 xl:col-span-6"
          className="rounded-[24px] md:rounded-[32px] xl:rounded-[40px]"
          src={Frame4}
          md={Frame4md}
          xl={Frame4xl}
        />
        {/* <Image className="rounded-[24px] md:col-span-4" src={Frame3} alt="" /> */}
        {/* <Image className="rounded-[24px] md:col-span-4" src={Frame4} alt="" /> */}
      </Layout>
      <ProblemsSolutions />
      <Layout disablePadding>
        <RespImage src={Frame5} md={Frame5md} xl={Frame5xl} />
      </Layout>
      <Generating />
      <Layout disablePadding>
        <RespImage src={Frame9} md={Frame9md} xl={Frame9xl} />
      </Layout>
      <Branding />
    </div>
  );
}
