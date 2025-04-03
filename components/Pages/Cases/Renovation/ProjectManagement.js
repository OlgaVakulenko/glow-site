import Layout from '../../../Layout';
import Animated from '../../../Animated';
import RespImage from './RespImage';
import Frame30 from './assets/frame-30.png';
import Frame30md from './assets/frame-30-md.png';
import Frame30xl from './assets/frame-30-xl.png';
import Frame31 from './assets/frame-31.png';
import Frame31md from './assets/frame-31-md.png';
import Frame31xl from './assets/frame-31-xl.png';

function Title({ className, children }) {
  return (
    <Animated
      as="h3"
      className={`mb-6 font-satoshi text-[24px] font-medium leading-8 md:text-[32px] md:leading-10 md:tracking-[-1px] xl:mb-6  ${className}`}
    >
      {children}
    </Animated>
  );
}
function Text({ className, children }) {
  return (
    <Animated
      as="p"
      className={`text-[16px] leading-6 md:text-[18px] md:leading-[28px] xl:text-[20px] xl:leading-8   ${className}`}
    >
      {children}
    </Animated>
  );
}

export default function ProjectManagement() {
  return (
    <div className="bg-lightGray ">
      <Layout className="flex flex-col items-center md:pb-[88px]">
        <div className="mb-[56px] flex max-w-[1082px] flex-col items-center pt-[72px] md:mb-[88px] md:pt-[96px] xl:pt-[160px]">
          <div className="mx-auto mb-6 w-fit rounded-[32px] bg-light-green px-4 py-2 font-inter text-[12px] font-medium uppercase leading-[24px] tracking-[0.02em] text-lightGray">
            Project management
          </div>
          <Animated
            as="div"
            className="text-center font-satoshi text-[32px] font-normal leading-10 tracking-[-1px] sm:w-[91.5%] md:w-full md:text-[48px] md:leading-[64px] md-safe:w-[91.5%] xl:w-full  xl:text-[56px] xl:leading-[72px]"
          >
            After finalizing the homeowner app, we proceeded to the project
            manager’s side
          </Animated>
        </div>
        <div className="mb-[56px] flex h-full w-full flex-col justify-center gap-0 pt-6 md:mb-0 md:flex-row md:justify-between md:pt-[40px] md-safe:pt-[56px] xl:gap-20 xl:pt-[72px]">
          <div className="flex w-full xl:gap-10">
            <div className="flex-1 md:max-h-[597px] xl:max-h-[740px] xl:max-w-[400px]">
              <RespImage
                className="w-full"
                src={Frame30}
                md={Frame30md}
                xl={Frame30xl}
              />
            </div>
            <div className="flex-1 md:max-h-[597px] xl:max-h-[740px] xl:max-w-[400px]">
              <RespImage
                className="w-full"
                src={Frame31}
                md={Frame31md}
                xl={Frame31xl}
              />
            </div>
          </div>
          <div className="flex flex-col items-start  md:max-w-[275px] md:pt-[5%] md-safe:ml-6 md-safe:max-w-[290px] xl:ml-0 xl:mr-[56px]  xl:max-w-[320px] xl:pt-[16%]">
            <Title className="font-normal">{'Home and projects'}</Title>
            <div>
              <Text className="mb-4 ">
                Our team designed a home screen with a notification center and a
                checklist of reports to be sent. This way the PM can easily
                track their daily tasks and important events.
              </Text>
              <Text className=" ">
                One project manager can lead up to 5 projects at a time. To keep
                projects organized, we made a separate Projects section.
              </Text>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
