import cx from "clsx";
import Animated from "../../Animated";
import RoundControl from "./RoundControl";

export default function InnovateSolutionTextBlock({
                                                      title,
                                                      subtitle,
                                                      boxClassName,
                                                      subBoxClassName = ""
                                                  }) {
    return (

        <div>
            <div className={cx(
                'flex  mb-1 justify-start ',
                {},
                boxClassName
            )}>
                <div className="items-start xl:mb-11">
                    <Animated style={{fontFeatureSettings: "normal"}}
                              className="text-center md:text-start font-satoshi tracking-[var(--fonts-30-heading-5-letter-spacing,-1px)]
                               xl:tracking-[var(--fonts-30-heading-5-letter-spacing,-2px)]
                               md:tracking-[var(--fonts-30-heading-5-letter-spacing,-2px)]
                               font-medium text-white forced-colors:accent-white  text-[28px] md:text-[40px] xl:text-[56px]
  leading-[36px] md:leading-[45px] xl:leading-[64px] mb-6 ">
                        {title}
                    </Animated>
                    <Animated
                        className={cx(
                            'text-opacity-70 text-center md:text-start font-inter text-[#FFFFFF] text-[14px] leading-[16.8px] md:text-[16px] xl:text-[16px] md:leading-[20.8px] xl:leading-[20.8px]',
                            {},
                            subBoxClassName
                        )}>
                        {subtitle}
                    </Animated>
                    <Animated>
                        <div className="flex-row xl:mt-[130px] md:mt-[53px] justify-start hidden xl:flex md:flex">
                            <RoundControl
                                className="mr-3 h-[fit-content] box-sizing-border  text-center !bg-transparent !text-white  m-[10px_0_10px_0] flex p-[12px_0_12px_0] font-medium xl:text-[20px] xl:leading-[24.2px] xl:w-[140px] md:w-[91px] "
                                text="Logistics"
                            />
                            <RoundControl
                                className="mr-3 h-[fit-content] box-sizing-border text-center !bg-transparent !text-white  m-[10px_0_10px_0] flex p-[12px_0_12px_0] font-medium xl:text-[20px] xl:leading-[24.2px] xl:w-[128px] md:w-[91px]"
                                compact
                                text="Fintech"
                            />
                            <RoundControl
                                className="h-[fit-content] box-sizing-border  text-center !bg-transparent !text-white  m-[10px_0_10px_0] flex p-[12px_0_12px_0] font-medium xl:text-[20px] xl:leading-[24.2px] xl:w-[180px] md:w-[91px]"
                                compact
                                text="E-commerce"
                            />
                        </div>
                    </Animated>
                </div>
            </div>
        </div>
    );
}
