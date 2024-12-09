import Layout from "../../Layout";
import Button2 from "../../Button";
import Link from "next/link";
import Animated from "../../Animated";

export default function NextCase({
                                     icon,
                                     title,
                                     link
                                 }) {

    return (
        <Animated>
            <Layout disablePadding={false} className="bg-[#FFFFFF] xl:mt-[176px] md:mt-[72px] xl:mb-[89px] md:mb-[57px] flex md:p-[0px_12px_88px_33px] xl:p-[0px_64px_88px_64px] w-full box-sizing-border">
                <div
                    className="rounded-[32px]  border-[1px] bg-[#FFFFFFF] flex flex-col md:flex-row p-[30px_30px_30px_30px] xl:p-[46px_47px_46px_47px] md:p-[46px_47px_46px_47px] w-full h-[fit-content] box-sizing-border">
                    {icon}
                    <div className="flex flex-col flex-grow md:flex-row xl:pt-[8px]">
                        <div className="flex flex-col box-sizing-border">
                            <div
                                className="opacity-50 xl:m-[-6px_0_2px_0] md:m-[4px_0_5px_0] font-inter text-[16px] leading-[24px]  inline-block self-start break-words  font-normal  text-[#19191B]">
                                Next case
                            </div>
                            <span
                                className="break-words font-satoshi font-medium text-[24px] xl:text-[32px] xl:leading-[40px] md:text-[24px] md:leading-[32px]  tracking-[var(--fonts-30-heading-5-letter-spacing,-1px)] leading-[var(--fonts-30-heading-5-line-height,1.25)] text-[#19191B]">
              {title}
            </span>
                        </div>

                    </div>
                    <div className="flex flex-col md:ml-auto mt-5 md:mt-0 ">
                        <Button2
                            as={Link}
                            href={link}
                            className="h-[fit-content] box-sizing-border font-inter font-normal text-[16px] md:leading-[24px] !bg-black !text-white  md:m-[12px_-19px_10px_0] xl:m-[12px_0px_10px_0] flex p-[12px_20px_12px_0] w-[98px] "
                            compact>
                            Explore
                        </Button2>
                    </div>
                </div>
            </Layout>
        </Animated>
    )
}
