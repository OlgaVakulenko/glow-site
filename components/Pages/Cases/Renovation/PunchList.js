import Layout from '../../../Layout';
import Animated from '../../../Animated';
import RespImage from './RespImage';
import Frame36 from './assets/frame-36.svg';
import Frame36md from './assets/frame-36-md.svg';
import Frame36xl from './assets/frame-36-xl.svg';

import Frame37 from './assets/frame-37.svg';
import Frame37md from './assets/frame-37-md.svg';
import Frame37xl from './assets/frame-37-xl.svg';

import Frame38 from './assets/frame-38.svg';
import Frame38md from './assets/frame-38-md.svg';
import Frame38xl from './assets/frame-38-xl.svg';

import Frame39 from './assets/frame-39.svg';
import Frame39md from './assets/frame-39-md.svg';
import Frame39xl from './assets/frame-39-xl.svg';

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
      className={`text-[16px] font-normal leading-6 md:text-[18px] md:leading-[28px] xl:text-[20px] xl:leading-8   ${className}`}
    >
      {children}
    </Animated>
  );
}

export default function PunchList() {
  return (
    <Layout className="flex h-full w-full flex-col-reverse bg-lightGray md-safe:!px-8 md-safe:pb-[96px] xl:!px-20 xl:pb-[160px]">
      <div className="relative hidden md:block">
        <div className="absolute w-[68%] xl:ml-[40px] xl:w-[60%] ">
          <Title>{'Punch list'}</Title>
          <div className="flex h-full w-full justify-between gap-6">
            <Text className="md:max-w-[288px] xl:max-w-[389px]">
              {
                'Once all phases have been completed, the project manager must create a punch list, a document that identifies and tracks the remaining adjustments, repairs, or\u00A0deviations.'
              }
            </Text>
            <Text className="md:max-w-[288px] xl:max-w-[320px]">
              {
                'To ensure customer satisfaction, the project can be finished only after the punch list is completed and approved by the homeowner. '
              }
            </Text>
          </div>
        </div>
        <div className="flex h-full items-end justify-between xl:gap-[35px]">
          <div className="h-full w-full flex-1 md:mt-[315px] md-safe:mt-[345px] xl:mr-[9px]">
            <RespImage
              pictureClassname=""
              className="h-full w-full"
              src={Frame36}
              md={Frame36md}
              xl={Frame36xl}
            />
          </div>
          <div className="h-full w-full flex-1 md:mb-[55px] md-safe:mb-[106px] xl:mb-[96px]">
            <RespImage
              pictureClassname=""
              className="h-full w-full"
              src={Frame37}
              md={Frame37md}
              xl={Frame37xl}
            />
          </div>
          <div className="h-full w-full flex-1 md:mb-[45px] md:pt-[64px] md-safe:mb-[61px] xl:mb-[44px] xl:pt-[68px]">
            <RespImage
              pictureClassname=""
              className="h-full w-full md-safe:mb-4 md-safe:max-h-[385px] xl:mb-6 xl:max-h-[494px] "
              src={Frame38}
              md={Frame38md}
              xl={Frame38xl}
            />
            <RespImage
              pictureClassname=""
              className="h-full w-full md-safe:max-h-[449px] xl:max-h-[574px] "
              src={Frame39}
              md={Frame39md}
              xl={Frame39xl}
            />
          </div>
        </div>
      </div>
      <div className="pb-[56px] md:hidden">
        <div className="flex">
          <div className="mt-[46px] h-full w-full flex-1">
            <RespImage
              pictureClassname=""
              className="mb-[24px] h-full w-full md:mb-0"
              src={Frame38}
              md={Frame38md}
              xl={Frame38xl}
            />
            <RespImage
              pictureClassname=""
              className="h-full w-full"
              src={Frame36}
              md={Frame36md}
              xl={Frame36xl}
            />
          </div>
          <div className="mt-[24px] h-full w-full flex-1">
            <RespImage
              pictureClassname=""
              className="h-full w-full md-safe:mb-4  md-safe:max-h-[385px] xl:mb-6 xl:max-h-[494px] "
              src={Frame37}
              md={Frame37md}
              xl={Frame37xl}
            />
            <RespImage
              pictureClassname=""
              className="h-full w-full md-safe:max-h-[449px] xl:max-h-[574px] "
              src={Frame39}
              md={Frame39md}
              xl={Frame39xl}
            />
          </div>
        </div>
        <div className="mt-[15px]">
          <Title>{'Punch list'}</Title>
          <Text className="mb-4">
            {
              'Once all phases have been completed, the project manager must create a punch list, a document that identifies and tracks the remaining adjustments, repairs, or\u00A0deviations.'
            }
          </Text>
          <Text className="">
            {
              'To ensure customer satisfaction, the project can be finished only after the punch list is completed and approved by the homeowner. '
            }
          </Text>
        </div>
      </div>
    </Layout>
  );
}
