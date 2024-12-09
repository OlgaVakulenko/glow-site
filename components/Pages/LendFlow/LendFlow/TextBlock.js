import Layout from "../../Layout";
import cx from "clsx";
import Animated from "../../Animated";
import TextBlockIcon from "../LendFlow/assets/textBlocIcon.png";
import Image, {Source} from "../../Image";

export default function TextBlock({
                                      topic,
                                      title,
                                      subtitle,
                                      topicClassName,
                                      boxClassName,
                                      subBoxClassName = ""
                                  }) {
    return (

        <div className="md:mt-[97px] mt-[100px]">
            <div
                className="bg-[#070919] xl:rounded-[1440px] flex flex-col items-center mx-[20] xl:mx-[300px] md:mx-[100px] "
                style={{
                    borderRadius: '50%',
                    backgroundImage: `radial-gradient(circle at center, rgba(7, 9, 25, 0.08) 0, rgba(255, 255, 255, 0.08) 1px, #070919 0.5px, #070919 2px)`,
                    backgroundSize: '13px 13px',
                    backgroundRepeat: 'repeat',
                    zIndex: 1,
                }}>
                <Animated>
                    <div
                        className={cx(
                            'relative items-center rounded-[52px] bg-[#2A2A2A] flex flex-row justify-between  h-[34px]  p-[8px_11px_8px_11px] box-sizing-border mb-6 mx-auto',
                            {},
                            topicClassName
                        )}>
                        <Image src={TextBlockIcon} className="w-[18px] h-[18px] " alt="icon"/>
                        <div
                            className=" inline-block break-words font-inter font-medium text-[14px] leading-[16.94px] text-[#FFFFFF]  pt-0.5">
                            {topic}
                        </div>
                    </div>
                </Animated>
                <div>
                    <div className={cx(
                        ' relative flex flex-row p-[0px_12px_8px_12px] box-sizing-border mb-6 mx-auto justify-center',
                        {},
                        boxClassName
                    )}>
                        <div className="items-center md:mb-11">
                            <Animated style={{fontFeatureSettings: "normal"}} className=" text-center font-satoshi tracking-tighter font-medium text-white forced-colors:accent-white leading-[36px] text-[28px] md:text-[48px] xl:text-[56px]
  md:leading-[56px] xl:leading-[64px] xl:tracking-[-2px] mb-6">
                                {title}
                            </Animated>
                            <div className="pl-8">

                            <Animated
                                className={cx(
                                    'relative text-opacity-70 text-center font-inter text-[#FFFFFF] text-[14px] md:text-[16px] xl:text-[16px] leading-[16.8px] md:leading-[20.8px] xl:leading-[20.8px]',
                                    {},
                                    subBoxClassName
                                )}>
                                {subtitle}
                            </Animated>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
