import Layout from '../../../Layout';
import Animated from '../../../Animated';
import RespImage from './RespImage';
import Frame5md from './assets/frame-5-md.png';
import Frame5xl from './assets/frame-5-xl.png';
import Frame5 from './assets/frame-5.png';
import Frame6md from './assets/frame-6-md.png';
import Frame6xl from './assets/frame-6-xl.png';
import Frame6 from './assets/frame-6.png';

function Text({ className, children }) {
  return (
    <Animated as="p" className={className}>
      {children}
    </Animated>
  );
}

export default function UserApps() {
  return (
    <div className="rounded-tl-[32px] rounded-tr-[32px] bg-lightGray md:rounded-tl-[60px] md:rounded-tr-[60px]">
      <Layout className="flex flex-col items-center gap-10 pb-[72px] pt-[72px] md:gap-20 md:pt-[96px] xl:pb-[80px] xl:pt-[120px]">
        <div className="flex flex-col items-center gap-y-6 md:max-w-[898px]">
          <div className="rounded-[32px] bg-light-green px-4 py-2 font-inter text-[12px] font-medium uppercase leading-[24px] tracking-[0.02em] text-lightGray">
            The challenge
          </div>
          <Animated
            as="div"
            className="text-center font-satoshi text-[32px] font-medium leading-10 tracking-[-1px] md:text-[48px] md:leading-[64px] xl:text-[56px] xl:leading-[72px]"
          >
            Our task was to design the iOS apps for two user categories
          </Animated>
        </div>
        {/*md:h-[537px]*/}
        <div className="flex flex-col items-start gap-y-4 md:flex-row md:gap-x-8">
          <div className="flex-1 rounded-[32px] bg-white md:min-h-[530px] md:rounded-[40px] x-920:min-h-[550px] md-safe:h-[568px] x-1280:h-[712px]">
            <RespImage
              pictureClassname=""
              className="mb-6 h-full rounded-[24px] md:mb-8 md:max-h-[320px] md:rounded-[40px] xl:mb-10 xl:max-h-[408px]"
              src={Frame5}
              md={Frame5md}
              xl={Frame5xl}
            />
            <div className="px-4 pb-6 md:px-[24px] md:pb-0">
              <h5 className="mb-4 font-satoshi text-2xl font-medium md:mb-6 md:text-[32px] md:leading-10 md:tracking-[-1px]">
                Homeowner
              </h5>
              <Text className="min-h-full font-inter text-[16px] leading-6 xl:text-[20px] xl:leading-8">
                {`Homeowners are looking for a reliable and experienced contractor who will do a quality job without unexpected costs in the middle of the project. They want to find someone they can trust with their space and money without any worries.`}
              </Text>
            </div>
          </div>
          <div className="flex-1 rounded-[32px] bg-white md:min-h-[530px] md:rounded-[40px] x-920:min-h-[550px] md-safe:h-[568px] x-1280:h-[712px]">
            <RespImage
              pictureClassname=""
              className="mb-6 h-full rounded-[24px] md:mb-8 md:max-h-[320px] md:rounded-[40px] xl:mb-10 xl:max-h-[408px]"
              src={Frame6}
              md={Frame6md}
              xl={Frame6xl}
            />
            <div className="px-4 pb-6 md:px-[23.5px] md:pb-0">
              <h5 className="mb-4 font-satoshi text-2xl font-medium md:mb-6 md:text-[32px] md:leading-10 md:tracking-[-1px]">
                Project manager
              </h5>
              <Text className="font-inter text-[16px] leading-6 xl:text-[20px] xl:leading-8">
                {`Their job is to monitor the work progress and solve any problems that arise, as well as keep in touch with homeowners, send them daily progress reports and answer any of their questions. They need to be as mobile and flexible as possible.`}
              </Text>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
