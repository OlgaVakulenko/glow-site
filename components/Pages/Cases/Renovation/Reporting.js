import Layout from '../../../Layout';
import Animated from '../../../Animated';
import RespImage from './RespImage';
import Frame32 from './assets/frame-32.png';
import Frame32md from './assets/frame-32-md.png';
import Frame32xl from './assets/frame-32-xl.png';
import Frame33 from './assets/frame-33.png';
import Frame33md from './assets/frame-33-md.png';
import Frame33xl from './assets/frame-33-xl.png';
import Frame34 from './assets/frame-34.png';
import Frame34md from './assets/frame-34-md.png';
import Frame34xl from './assets/frame-34-xl.png';

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

export default function Reporting() {
  return (
    <div className="bg-lightGray">
      <Layout className="flex h-full w-full flex-col-reverse items-start justify-between pb-[72px] md:flex-row md:pb-[96px] xl:pb-[160px]">
        <div className="flex h-full flex-col justify-between md:pt-[72px]">
          <div className="hidden sm:max-w-[167px] md:mb-[90px]  md:block md:max-w-[260px] md-safe:mb-[139px] md-safe:max-h-[335px] md-safe:max-w-[312px] xl:mb-[95px] xl:max-h-[427px] xl:max-w-[400px]">
            <RespImage
              className="w-full"
              src={Frame32}
              md={Frame32md}
              xl={Frame32xl}
            />
          </div>
          <div className="md:ml-0 md:mr-[2.4vw] md:min-w-[260px] md:max-w-[288px]  md-safe:min-w-[288px] xl:mx-[3.9vw]">
            <Title className="md-6 font-normal">{'Reporting'}</Title>
            <Text className='font-light'>
              {
                'When sending the report, the project manager manager should state how far the current stage has progressed, briefly describe the work done, and attach several photos if needed.'
              }
            </Text>
          </div>
        </div>
        <div className="hidden w-full justify-end md:flex  xl:justify-end xl:gap-[3vw]">
          <div className="h-full w-full md:max-w-[306px] md:pt-[25px] md-safe:max-w-[324px] xl:mr-[20px] xl:max-w-[400px] xl:pt-0">
            <RespImage
              className="w-full"
              src={Frame33}
              md={Frame33md}
              xl={Frame33xl}
            />
          </div>
          <div className="h-full w-full  md:max-w-[306px] md:pt-[160px] md-safe:max-w-[324px] xl:max-w-[400px] xl:pt-[232px]">
            <RespImage
              className="w-full"
              src={Frame34}
              md={Frame34md}
              xl={Frame34xl}
            />
          </div>
        </div>
        <div className="flex h-full w-full md:hidden">
          <div className="h-full w-full flex-1 pt-[94px]">
            <RespImage
              className="w-full"
              src={Frame33}
              md={Frame33md}
              xl={Frame33xl}
            />
          </div>
          <div className="h-full w-full flex-1">
            <div className="h-full w-full  md:max-w-[306px] md:pt-[160px] md-safe:max-w-[324px] xl:max-w-[400px] xl:pt-[232px]">
              <RespImage
                className="w-full"
                src={Frame34}
                md={Frame34md}
                xl={Frame34xl}
              />
            </div>
            <div className="md:mb-[90px]">
              <RespImage
                className="w-full"
                src={Frame32}
                md={Frame32md}
                xl={Frame32xl}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
