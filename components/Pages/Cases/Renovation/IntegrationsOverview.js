import Layout from '../../../Layout';
import Animated from '../../../Animated';
import RespImage from './RespImage';

import Frame20 from './assets/frame-20.svg';
import Frame20xl from './assets/frame-20-xl.svg';
import Frame21 from './assets/frame-21.png';
import Frame22xl from './assets/frame-22-xl.svg';
import Frame22 from './assets/frame-22.svg';
import Frame23 from './assets/frame-23.svg';
import Frame24 from './assets/frame-24.svg';
import Frame24md from './assets/frame-24-md.svg';
import Frame24xl from './assets/frame-24-xl.svg';
import Frame25xl from './assets/frame-25-xl.svg';
import Frame26xl from './assets/frame-26-xl.svg';
import Frame26md from './assets/frame-26-md.svg';
import Frame27 from './assets/frame-27.svg';
import Frame28xl from './assets/frame-28-xl.svg';
import Frame28md from './assets/frame-28-md.svg';
import Frame29 from './assets/frame-29.svg';
import Frame29md from './assets/frame-29-md.svg';
import Frame29xl from './assets/frame-29-xl.svg';
import RespSVG from './RespSVG';

function TitleSection({ className, children }) {
  return (
    <Animated
      as="h2"
      className={`font-satoshi text-[32px] font-medium leading-[40px] tracking-[-1px] text-white md:text-[48px] md:leading-[64px] xl:text-[56px] xl:leading-[72px]  ${className}`}
    >
      {children}
    </Animated>
  );
}

function TitleDesc({ className, children }) {
  return (
    <Animated
      as="p"
      className={`text-[16px] font-normal leading-6 text-white md:text-[20px] md:leading-8 ${className}`}
    >
      {children}
    </Animated>
  );
}

export default function IntegrationsOverview() {
  return (
    <div className="bg-lightGray">
      <Layout
        disablePadding
        className="rounded-[32px] bg-charcoal-black md:rounded-[56px]"
      >
        <Layout className="flex max-w-[978px] flex-col items-center  pb-[40px] pt-[72px] text-white md:px-10 md:pb-[80px] md:pt-[120px] xl:px-0">
          <div className="mx-auto mb-6 w-fit rounded-[32px] bg-light-green px-4 py-2 font-inter text-[12px] font-medium uppercase leading-[24px] tracking-[0.02em] text-lightGray">
            Integrations
          </div>
          <Animated
            as="div"
            className="text-center font-satoshi text-[32px] font-medium leading-10 tracking-[-1px] md:text-[48px] md:leading-[64px] xl:text-[56px] xl:leading-[72px]"
          >
            To reduce development time and budget, we used off-the-shelf
            solutions for the application&#39;s key features.
          </Animated>
        </Layout>
        {/*second*/}
        <Layout className="bg-charcoal-black">
          <div className=" relative mb-4 overflow-hidden rounded-[24px] bg-light-blue md:mb-8 md:rounded-[40px]">
            <div className="flex flex-col items-center justify-between px-6 pb-10 md:flex-row md:items-start md:px-10 md:pb-0 xl:w-[84%] xl:pl-[12.2%] xl:pr-0">
              <div className=" order-2 md:-order-10 md:max-w-[370px]  md:pt-[56px] md-safe:max-w-[392px] xl:pt-[120px]">
                <RespSVG
                  className="mb-[21px] h-[56px] !w-fit  md:mb-8 md:h-[88px] md:!w-[175px] xl:mb-8"
                  src="/img/wr/frame-20.svg"
                  md="/img/wr/frame-20-md.svg"
                  xl="/img/wr/frame-20-xl.svg"
                />
                <div className="md:pb-[80px] md-safe:pb-[127px] xl:pb-[78px]">
                  <TitleDesc className="mb-4 md:mb-[18px]">
                    Payments are structured into milestones, ensuring that
                    financial transactions align with the progress of the
                    renovation project.
                  </TitleDesc>
                  <TitleDesc className="">
                    Stripe, a secure and widely trusted payment gateway, is
                    integrated to handle these transactions.
                  </TitleDesc>
                </div>
                <div className="ml-auto hidden max-h-[160px] max-w-[210px] md:mr-[72px] md:block md-safe:mr-0 md-safe:max-h-[260px] md-safe:max-w-[288px] xl:mr-4">
                  <RespSVG
                    className="h-full md-safe:h-[270px]"
                    src="/img/wr/frame-21-xl.svg"
                    md="/img/wr/frame-21-xl.svg"
                    xl="/img/wr/frame-21-xl.svg"
                  />
                </div>
              </div>
              <div className="mb-[65px]  h-full max-h-[475px] w-[340px] pb-[5px] pt-[40px] xs:max-h-[470px] xs:max-w-[340px] sm:max-h-[550px] sm:w-full sm:max-w-[400px] md:mb-0 md:max-h-[640px] md:max-w-[330px] md:pt-[71px]  md-safe:max-h-[740px] md-safe:max-w-[400px]">
                <RespSVG
                  className="h-full w-full"
                  src="/img/wr/frame-22.svg"
                  md="/img/wr/frame-22-md.svg"
                  xl="/img/wr/frame-22-xl.svg"
                />
              </div>
            </div>
            <div className="absolute right-[-4%] top-[29%] hidden h-full w-full xl:block xl:max-h-[295px] xl:max-w-[289px]">
              <RespSVG
                className="h-full w-full"
                src="/img/wr/frame-23-xl.svg"
                md="/img/wr/frame-23-xl.svg"
                xl="/img/wr/frame-23-xl.svg"
              />
            </div>
          </div>
        </Layout>
        {/*third*/}
        <Layout className="bg-charcoal-black">
          <div className=" relative mb-4 overflow-hidden rounded-[24px] bg-light-red md:mb-8 md:rounded-[40px]">
            <div className="flex flex-col items-center justify-between py-10 md:w-[95%] md:flex-row md:items-end md:pb-[3px] md:pl-10 md:pt-[73px]  md-safe:pl-[56px] xl:pl-[104px]">
              <div className="mb-[25px] h-full max-h-[475px]  w-[340px] xs:max-h-[470px] xs:max-w-[340px] sm:max-h-[550px] sm:w-full sm:max-w-[400px] md:mb-0 md:max-h-[610px] md:max-w-[360px] md-safe:max-h-[740px] md-safe:max-w-[431px] xl:max-w-[488px]">
                <RespSVG
                  className="h-full w-full"
                  src="/img/wr/frame-24.svg"
                  md="/img/wr/frame-24-md.svg"
                  xl="/img/wr/frame-24-xl.svg"
                />
              </div>
              <div className="px-6 md:mr-0  md:max-w-[392px] md:px-0 md:pb-10 md-safe:pb-[56px] xl:mr-[96px] xl:pb-[96px]">
                <RespSVG
                  className="mb-[21px] h-[56px] !w-fit md:mb-8 md:h-[88px] md:!w-[233px]"
                  src="/img/wr/frame-26-md.svg"
                  md="/img/wr/frame-26-xl.svg"
                  xl="/img/wr/frame-26-xl.svg"
                />
                <div className="">
                  <TitleDesc className="mb-4">
                    Twilio integration enables real-time chat functionality
                    between customers and project managers.
                  </TitleDesc>
                  <TitleDesc className="">
                    In addition, Twilio enriches the app with video meeting
                    functionality for multiple stakeholders fostering
                    collaborative discussions and enhancing project
                    coordination.
                  </TitleDesc>
                </div>
                <div className="absolute top-[-2%] hidden h-full w-full md:right-[11%] md:top-[-0%] md:block md:max-h-[150px] md:max-w-[210px] md-safe:right-[9.5%] md-safe:max-h-[304px] md-safe:max-w-[290px]   xl:right-[7.5%] xl:top-[-3%]">
                  <RespSVG
                    className="h-full w-full"
                    src="/img/wr/frame-25-xl.svg"
                    md="/img/wr/frame-25-xl.svg"
                    xl="/img/wr/frame-25-xl.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Layout>
        {/*four*/}
        <Layout className="rounded-b-[32px]  bg-charcoal-black pb-[20px] md:rounded-b-[56px] md:pb-8 xl:pb-[64px]">
          <div className=" bg relative overflow-hidden rounded-[24px] bg-deep-black  md:rounded-[40px]">
            <div className="flex w-full flex-col-reverse items-center justify-between py-10 md:flex-row md:items-start md:gap-4 md:py-0 md-safe:gap-0 xl:max-w-[90%] xl:pl-[160px]">
              <div className="flex flex-col items-end px-6 md:gap-[90px] md:pl-10 md:pr-0 md-safe:gap-[130px] xl:gap-[101px] xl:pl-0">
                <div className="relative hidden h-full w-full  md:right-[25.5%] md:top-[-1.5%] md:block md:max-h-[150px]  md:max-w-[210px] md-safe:right-0 md-safe:mr-[10px] md-safe:max-h-[322px] md-safe:max-w-[264px] xl:top-[-3%]  xl:mr-0 ">
                  <RespSVG
                    className="h-full w-full md:h-[180px] md-safe:h-full"
                    src="/img/wr/frame-27.svg"
                    md="/img/wr/frame-27.svg"
                    xl="/img/wr/frame-27.svg"
                  />
                </div>
                <div className="md:max-w-[392px] md:pb-[40px] md-safe:pb-[56px] xl:pb-[96px]">
                  <RespSVG
                    className="mb-[16px] h-[56px] !w-fit md:mb-8 md:h-[80px] md:!w-[290px]"
                    src="/img/wr/frame-28-md.svg"
                    md="/img/wr/frame-28-xl.svg"
                    xl="/img/wr/frame-28-xl.svg"
                  />
                  <div className="">
                    <TitleDesc className="mb-4">
                      The Document Section in the Welcome Renovation app serves
                      as a centralized repository for essential project
                      documents.
                    </TitleDesc>
                    <TitleDesc className="">
                      With DocuSign integration, stakeholders can electronically
                      sign vital documents directly within the app.
                    </TitleDesc>
                  </div>
                </div>
              </div>
              <div className="mb-[25px] h-full max-h-[475px]  w-[340px] xs:max-h-[470px] xs:max-w-[340px] sm:max-h-[550px] sm:w-full sm:max-w-[400px] md:mb-[65px] md:mt-[96px] md:max-h-[520px] md:max-w-[360px] md-safe:max-h-[654px] md-safe:max-w-[456px] xl:my-[81px] xl:max-w-[428px]">
                <RespSVG
                  className="h-full w-full"
                  src="/img/wr/frame-29.svg"
                  md="/img/wr/frame-29-md.svg"
                  xl="/img/wr/frame-29-xl.svg"
                />
              </div>
            </div>
          </div>
        </Layout>
      </Layout>
    </div>
  );
}
