import Animated from '../../../Animated';
import Image from '../../../Image';
import Layout from '../../../Layout';
import Frame10 from './assets/frame-10.png';
import Frame10md from './assets/frame-10-md.png';
import Frame10xl from './assets/frame-10-xl.png';
import Frame11 from './assets/frame-11.png';
import Frame11md from './assets/frame-11-md.png';
import Frame11xl from './assets/frame-11-xl.png';
import Frame12 from './assets/frame-12.png';
import Frame12md from './assets/frame-12-md.png';
import Frame12xl from './assets/frame-12-xl.png';
import Frame13 from './assets/frame-13.png';
import Frame13md from './assets/frame-13-md.png';
import Frame13xl from './assets/frame-13-xl.png';
import Frame14 from './assets/frame-14.png';
import Frame14md from './assets/frame-14-md.png';
import Frame14xl from './assets/frame-14-xl.png';
import Frame15 from './assets/frame-15.png';
import Frame15md from './assets/frame-15-md.png';
import Frame15xl from './assets/frame-15-xl.png';
import RespImage from './RespImage';
// import Frame16 from './assets/frame-16.png';

export default function Branding() {
  return (
    <Layout>
      <div className="pb-5 md:grid md:grid-cols-8 md:gap-8 md:pb-[145px] xl:grid-cols-12">
        <Animated className="mb-10 font-satoshi text-[40px] font-medium leading-[48px] tracking-[-2px] md:col-span-3 md:mb-0 md:text-[56px] md:leading-[64px] xl:col-span-6">
          Branding
        </Animated>
        <Animated delay={100} className="text-base leading-[160%] md:col-span-5 md:text-[24px] xl:col-span-6">
          Through meticulous design we crafted a visual identity that conveyed
          trustworthiness and reliability, ensuring they stand out in the
          competitive landscape of financial services.
        </Animated>
      </div>
      <div className="grid gap-4 pb-4 md:grid-cols-8 md:gap-8 md:pb-8 xl:grid-cols-12">
        <RespImage
          pictureClassname="md:col-span-3 xl:col-span-4"
          className="rounded-[24px] md:rounded-[32px] xl:rounded-[40px]"
          src={Frame10}
          md={Frame10md}
          xl={Frame10xl}
        />
        <RespImage
          pictureClassname="md:col-span-5 xl:col-span-8"
          className="rounded-[24px] md:rounded-[32px] xl:rounded-[40px]"
          src={Frame11}
          md={Frame11md}
          xl={Frame11xl}
        />
        <RespImage
          pictureClassname="md:col-span-5 xl:col-span-8"
          className="rounded-[24px] md:rounded-[32px] xl:rounded-[40px]"
          src={Frame12}
          md={Frame12md}
          xl={Frame12xl}
        />
        <RespImage
          pictureClassname="md:col-span-3 xl:col-span-4"
          className="rounded-[24px] md:rounded-[32px] xl:rounded-[40px]"
          src={Frame13}
          md={Frame13md}
          xl={Frame13xl}
        />
        <RespImage
          pictureClassname="md:col-span-8 xl:col-span-12"
          className="rounded-[24px] md:rounded-[32px] md:rounded-t-[40px] xl:rounded-[40px] xl:rounded-t-[56px]"
          src={Frame14}
          md={Frame14md}
          xl={Frame14xl}
        />
        <RespImage
          pictureClassname="md:col-span-8 xl:col-span-12"
          className="rounded-[24px] md:rounded-[32px] xl:rounded-[40px]"
          src={Frame15}
          md={Frame15md}
          xl={Frame15xl}
        />
				<Animated className='md:col-span-8 xl:col-span-12'>
					<video
						autoPlay
						loop
						muted
						controls={false}
						src="/video/invoice/output.mp4"
						className="aspect-square w-full rounded-[24px] object-cover md:aspect-video"
					/>
				</Animated>
        {/* <Image className="rounded-[24px]" src={Frame16} alt="" /> */}
      </div>
    </Layout>
  );
}
