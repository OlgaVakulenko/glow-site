import Layout from '../../../Layout';
import Animated from '../../../Animated';
import RespImage from './RespImage';
import Frame11md from './assets/frame-11-md.png';
import Frame11xl from './assets/frame-11-xl.png';
import Frame11 from './assets/frame-11.png';
import Frame12md from './assets/frame-12-md.png';
import Frame12xl from './assets/frame-12-xl.png';
import Frame12 from './assets/frame-12.png';
import Frame13md from './assets/frame-13-md.png';
import Frame13xl from './assets/frame-13-xl.png';
import Frame13 from './assets/frame-13.png';
import RespSVG from './RespSVG';

function Text({ className, children }) {
  return (
    <Animated as="p" className={className}>
      {children}
    </Animated>
  );
}

export default function About() {
  return (
    <div className="bg-lightGray">
      <Layout className="flex flex-col items-center pb-6 md:pb-8 xl:pb-[80px]">
        <div className="mb-[40px] flex max-w-[830px] flex-col items-center pt-[72px] md:mb-[80px] md:pt-[80px]">
          <div className="mx-auto mb-6 w-fit rounded-[32px] bg-light-green px-4 py-2 font-inter text-[12px] font-medium uppercase leading-[24px] tracking-[0.02em] text-lightGray">
            HOmeowner
          </div>
          <Animated
            as="div"
            className="mb-4 text-center font-satoshi text-[32px] font-medium leading-10 tracking-[-1px] md:text-[48px] md:leading-[64px] xl:text-[56px] xl:leading-[72px]"
          >
            All information about the renovation process in your pocket
          </Animated>
          <Text className="max-w-[732px] text-center text-[16px] font-normal leading-6 md:text-[20px] md:leading-8">
            {
              'Our goal was for the homeowner to see all the information they needed about the project here without having to navigate anywhere within the app.'
            }
          </Text>
        </div>
        <div className="flex w-full flex-col gap-4 md:gap-8">
          {/*<RespImage*/}
          {/*  pictureClassname=""*/}
          {/*  className="h-full rounded-[24px] md:rounded-[40px] "*/}
          {/*  src={Frame11}*/}
          {/*  md={Frame11md}*/}
          {/*  xl={Frame11xl}*/}
          {/*/>*/}
          <RespSVG
            className="h-full rounded-[24px] md:rounded-[40px] "
            src='/img/wr/frame-11.png'
            md='/img/wr/frame-11-md.png'
            xl='/img/wr/frame-11-xl.png'
          />
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            <div className="flex-1">
              {/*<RespImage*/}
              {/*  pictureClassname=""*/}
              {/*  className="h-full rounded-[24px] md:rounded-[40px]"*/}
              {/*  src={Frame12}*/}
              {/*  md={Frame12md}*/}
              {/*  xl={Frame12xl}*/}
              {/*/>*/}
              <RespSVG
                className="h-full max-xs:w-full rounded-[24px] md:rounded-[40px] "
                src='/img/wr/frame-12.png'
                md='/img/wr/frame-12-md.png'
                xl='/img/wr/frame-12-xl.png'
              />
            </div>
            <div className="flex-1">
              <RespSVG
                className="h-full max-xs:w-full rounded-[24px] md:rounded-[40px] "
                src='/img/wr/frame-13.png'
                md='/img/wr/frame-13-md.png'
                xl='/img/wr/frame-13-xl.png'
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
