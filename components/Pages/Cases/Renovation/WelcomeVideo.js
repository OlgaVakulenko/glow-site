import Layout from '../../../Layout';
import RespImage from './RespImage';
import Frame2xl from './assets/frame-2-xl.png';
import Frame3md from './assets/frame-3-md.png';
import Frame3xl from './assets/frame-3-xl.png';
import Frame3 from './assets/frame-3.png';
import Frame4md from './assets/frame-4-md.png';
import Frame4xl from './assets/frame-4-xl.png';
import Frame4 from './assets/frame-4.png';

export default function WelcomeVideo() {
  return (
    <Layout className="mb-[56px] md:mb-24 xl:mb-[120px]">
      <video
        autoPlay
        loop
        muted
        controls={false}
        src="/video/renovation/video-example.mp4"
        className="mb-14 max-h-[741px] w-screen md:mb-8 md:rounded-[40px]"
      />
      <div className="flex w-full flex-col gap-y-4 md:h-[537px] md:flex-row md:gap-x-8 xl:max-h-[537px]">
        <div className="hidden h-full w-full x-1390:block x-1390:w-[28.1vw]">
          <RespImage
            pictureClassname="hidden x-1390:block"
            className="w-fullrounded-[24px] h-full md:rounded-[40px] xl:max-h-[537px]"
            src={Frame2xl}
            md={Frame2xl}
            xl={Frame2xl}
          />
        </div>
        <div className="h-full w-full md:w-[39.7vw]  x-1390:w-[22.36vw]">
          <RespImage
            pictureClassname=""
            className="h-full w-full rounded-[24px] md:rounded-[40px]"
            src={Frame3}
            md={Frame3md}
            xl={Frame3xl}
          />
        </div>
        <div className="h-full w-full md:w-[51vw]  x-1390:w-[36.3vw]">
          <RespImage
            pictureClassname=""
            className="h-full w-full rounded-[24px] md:rounded-[40px] "
            src={Frame4}
            md={Frame4md}
            xl={Frame4xl}
          />
        </div>
      </div>
    </Layout>
  );
}
