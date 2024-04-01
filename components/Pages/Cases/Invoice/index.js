import Header from './Header';
import Image from '../../../Image';
import Frame1 from './assets/frame-1.png';
import Frame1md from './assets/frame-1-md.png';
import Frame1xl from './assets/frame-1-xl.png';
import Frame2 from './assets/frame-2.png';
import Frame2md from './assets/frame-2-md.png';
import Frame2xl from './assets/frame-2-xl.png';
import Frame3 from './assets/frame-3.png';
import Frame3md from './assets/frame-3-md.png';
import Frame3xl from './assets/frame-3-xl.png';
import Frame4 from './assets/frame-4.png';
import Frame4md from './assets/frame-4-md.png';
import Frame4xl from './assets/frame-4-xl.png';
import Frame5 from './assets/frame-5.png';
import Frame5md from './assets/frame-5-md.png';
import Frame5xl from './assets/frame-5-xl.png';

import Frame9 from './assets/frame-9.png';
import Frame9md from './assets/frame-9-md.png';
import Frame9xl from './assets/frame-9-xl.png';
import Objectives from './Objectives';
import Layout from '../../../Layout';
import ProblemsSolutions from './ProblemsSolutions';
import Generating from './Generating';
import Branding from './Branding';
import RespImage from './RespImage';
import IntroSection from '../../../IntroSection2';

export default function InvoiceMaker() {
  return (
    <div>
      <Header
        title="Invoice Maker - everything about invoices"
        subtitle="InvoiceMaker is designed to saves all of your invoicing information, making it simple to generate repeat invoices for regular clients."
      />
      <RespImage src={Frame1} md={Frame1md} xl={Frame1xl} />
      <Objectives />
      <Layout className="grid gap-4 md:grid-cols-8 md:gap-8 xl:grid-cols-12">
        <RespImage
          pictureClassname="md:col-span-8 xl:col-span-12"
          className="rounded-[24px] md:rounded-[44px] md:rounded-b-[32px] xl:rounded-[56px]"
          src={Frame2}
          md={Frame2md}
          xl={Frame2xl}
        />
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
      <RespImage src={Frame5} md={Frame5md} xl={Frame5xl} />
      <Generating />
      <RespImage src={Frame9} md={Frame9md} xl={Frame9xl} />
      <Branding />
    </div>
  );
}
