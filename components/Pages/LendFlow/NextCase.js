import Layout from '../../Layout';
import Button2 from '../../Button';
import Link from 'next/link';
import Animated from '../../Animated';

export default function NextCase({ icon, title, link }) {
  return (
    <Animated>
      <Layout
        disablePadding={false}
        className="box-sizing-border flex w-full bg-[#FFFFFF] pb-[104px] pt-[52px] md:mb-[72px] md:mt-[72px] md:p-[0px_12px_72px_33px] xl:mb-[88px] xl:mt-[176px] xl:p-[0px_64px_88px_64px]"
      >
        <div className="box-sizing-border  flex h-[fit-content] w-full flex-col rounded-[32px] border-[1px] bg-[#FFFFFFF] p-[24px_24px_24px_24px] md:flex-row md:p-[46px_47px_46px_47px] xl:p-[46px_47px_46px_47px]">
          {icon}
          <div className="flex flex-grow flex-col md:flex-row xl:pt-[8px]">
            <div className="box-sizing-border flex flex-col">
              <div className="inline-block self-start break-words font-inter text-[16px] font-normal  leading-[24px] text-[#19191B] opacity-50  md:m-[4px_0_5px_0]  xl:m-[-6px_0_2px_0]">
                Next case
              </div>
              <span className="mt-[4px] break-words font-satoshi text-[24px] font-medium leading-[var(--fonts-30-heading-5-line-height,1.25)] tracking-[var(--fonts-30-heading-5-letter-spacing,-1px)] text-[#19191B] sm:mt-0 md:text-[24px]  md:leading-[32px] xl:text-[32px] xl:leading-[40px]">
                {title}
              </span>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:ml-auto md:mt-0 ">
            <Button2
              as={Link}
              href={link}
              className="box-sizing-border flex h-[fit-content] w-[98px] !bg-black p-[12px_20px_12px_0] font-inter text-[16px]  font-normal !text-white md:m-[12px_0px_10px_0] md:leading-[24px] xl:m-[12px_0px_10px_0] "
              compact
            >
              Explore
            </Button2>
          </div>
        </div>
      </Layout>
    </Animated>
  );
}
