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
            <Layout className="bg-[#FFFFFF] flex p-[88px_64px_88px_64px] w-full box-sizing-border">
                <div
                    className="rounded-[32px]  border-[1px] bg-[#FFFFFFF] flex flex-col md:flex-row p-[30px_30px_30px_30px] md:p-[47px_47px_47px_47px] w-full h-[fit-content] box-sizing-border">
                    {icon}
                    <div className="flex flex-col flex-grow md:flex-row">
                        <div className="flex flex-col box-sizing-border">
                            <div
                                className="opacity-50 m-[0_0_4px_0] font-inter text-[16px] leading-[24px]  inline-block self-start break-words  font-normal  text-[#19191B]">
                                Next case
                            </div>
                            <span
                                className="break-words font-satoshi font-medium text-[24px] xl:text-[24px] xl:leading-[40px] md:text-[24px] md:leading-[32px]  tracking-[var(--fonts-30-heading-5-letter-spacing,-1px)] leading-[var(--fonts-30-heading-5-line-height,1.25)] text-[#19191B]">
              {title}
            </span>
                        </div>

                    </div>
                    <div className="flex flex-col md:ml-auto mt-5 md:mt-0">
                        <Button2
                            as={Link}
                            href={link}
                            className="h-[fit-content] box-sizing-border !bg-black !text-white  m-[10px_0_10px_0] flex p-[12px_0_12px_0] w-[97px] "
                            compact>
                            Explore
                        </Button2>
                    </div>
                </div>
            </Layout>
        </Animated>
    )
}
