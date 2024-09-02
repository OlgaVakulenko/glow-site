import Link from "next/link";
import Layout from "./Layout"
import Button2 from "./Button";
import Image from "./Image";
import Animated from "./Animated";

export default function NextCase({ icon, title, href}) {

  return (
		<Layout className="xl:my-[176px] md:my-[144px] my-[104px]">
			<div className="rounded-[32px] border flex flex-col md:flex-row p-6 md:p-[48px] w-full h-fit box-sizing-border">
				<div className="w-[68px] h-[68px] md:mb-0 mb-8 md:mr-8">
					{icon}
				</div> 
        <div className="flex flex-col box-sizing-border flex-grow">
          <p className="opacity-50 m-0 mb-1 font-inter leading-6 inline-block self-start break-words font-normal text-black">
            Next case
          </p>
          <p className="break-words font-satoshi font-medium text-[24px] xl:text-[32px] xl:leading-[40px] md:text-[24px] md:leading-[32px]  tracking-[var(--fonts-30-heading-5-letter-spacing,-1px)] leading-[var(--fonts-30-heading-5-line-height,1.25)] text-black">
            {title}
          </p>
        </div>
        <Button2
          as={Link}
          href={href}
					color='white'
          className="h-fit box-sizing-border text-button-l font-inter font-normal !bg-black flex px-5 py-3 mt-8 md:mt-0 md:self-center self-start"
          compact>
          Explore
        </Button2>
      </div>
		</Layout>        
  )
}