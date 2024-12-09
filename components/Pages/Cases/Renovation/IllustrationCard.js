import Layout from '../../../Layout';
import Animated from '../../../Animated';
import RespImage from './RespImage';
import Frame46md from './assets/frame-46-md.svg';
import Frame46xl from './assets/frame-46-xl.svg';
import Frame46 from './assets/frame-46.svg';
import RespSVG from './RespSVG';

function Title({ className, children }) {
  return (
    <Animated
      as="h3"
      className={`mb-4 pt-6 font-satoshi text-[24px] font-medium leading-8 md:pt-8 md:text-[32px] md:leading-10 md:tracking-[-1px]  ${className}`}
    >
      {children}
    </Animated>
  );
}
function Text({ className, children }) {
  return (
    <Animated
      as="p"
      className={`text-[16px] font-normal leading-6 xl:text-[20px] xl:leading-8   ${className}`}
    >
      {children}
    </Animated>
  );
}

export default function IllustrationCard() {
  return (
    <div className="bg-gradient-to-b from-[#F5F7FA] to-[#FFFFFF]">
      <Layout
        disablePadding
        className="flex !max-w-[100%] flex-col items-center  py-[72px] md:mb-[72px] md:pb-0 md:pt-[96px] xl:mb-[88px] xl:pt-[120px]"
      >
        <div className="px-4 pb-10 md:px-8 md:pb-[88px] xl:pb-[120px]">
          <div className="mx-auto mb-6 w-fit rounded-[32px] bg-light-green px-4 py-2 font-inter text-[12px] font-medium uppercase leading-[24px] tracking-[0.02em] text-lightGray">
            Illustrations
          </div>
          <Animated
            as="div"
            className="text-center font-satoshi text-[32px] font-medium leading-10 tracking-[-1px] md:text-[48px] md:leading-[64px] xl:max-w-[1018px] xl:text-[56px] xl:leading-[72px]"
          >
            For onboarding, empty states and information screens, we created a
            series of minimalistic linear illustrations.
          </Animated>
        </div>
        <div className="h-full w-full">
          <RespSVG
            className="w-[100vw]"
            src="/img/wr/frame-46.svg"
            md="/img/wr/frame-46-md.svg"
            xl="/img/wr/frame-46-xl.svg"
          />
        </div>
      </Layout>
    </div>
  );
}
