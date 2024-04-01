import Image from '../../../Image';
import Layout from '../../../Layout';
import Frame6 from './assets/frame-6.png';
import Frame6md from './assets/frame-6-md.png';
import Frame6xl from './assets/frame-6-xl.png';
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
      <div className="grid gap-4 md:grid-cols-8 md:gap-8 xl:grid-cols-12">
        <RespImage
          pictureClassname="md:col-span-8 xl:col-span-12"
          className="w-full rounded-[24px] md:rounded-[32px] xl:rounded-[40px]"
          src={Frame6}
          md={Frame6md}
          xl={Frame6xl}
        />
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
