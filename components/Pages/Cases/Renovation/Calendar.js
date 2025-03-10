import Layout from '../../../Layout';
import Animated from '../../../Animated';
import RespImage from './RespImage';
import Frame40 from './assets/frame-40.png';
import Frame40md from './assets/frame-40-md.png';
import Frame40xl from './assets/frame-40-xl.png';
import Frame41 from './assets/frame-41.png';
import Frame41md from './assets/frame-41-md.png';
import Frame41xl from './assets/frame-41-xl.png';

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

export default function Calendar() {
  return (
    <div className="bg-lightGray ">
      <Layout className="flex flex-col items-center pt-[56px] md:pb-[96px] md:pt-[96px] xl:pt-[160px]">
        <div className="mb-[56px] flex h-full w-full flex-col justify-center gap-0  pt-[24px] md:mb-0 md:flex-row md:justify-between  md:pt-[48px] xl:gap-20 xl:pt-0 ">
          <div className="flex w-full justify-between xl:gap-[40px]">
            <div className=" flex-1 md:max-h-[597px] xl:max-h-[740px] xl:max-w-[400px]">
              <RespImage
                className="w-full"
                src={Frame40}
                md={Frame40md}
                xl={Frame40xl}
              />
            </div>
            <div className="flex-1 md:max-h-[597px] xl:mt-[140px] xl:max-h-[740px] xl:max-w-[400px]">
              <RespImage
                className="w-full"
                src={Frame41}
                md={Frame41md}
                xl={Frame41xl}
              />
            </div>
          </div>
          <div className="flex flex-col items-start pt-[15px] md:max-w-[270px]  md:pt-[11%] md-safe:ml-[22px] md-safe:max-w-[290px] xl:ml-0 xl:mr-[56px]  xl:max-w-[320px] xl:pt-[21.3%]">
            <Title className='font-normal'>{'Calendar'}</Title>
            <div>
              <Text className="mb-4 font-light">
                {'For meetings we have created a calendar section.'}
              </Text>
              <Text>
                {
                  'Here project manager can quickly  schedule a meeting where other project participants can join, such as a designer in the initial stages or a relative of the homeowner.'
                }
              </Text>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
