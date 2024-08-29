import cx from 'clsx';
import Animated from '../../Animated';
import Image from '../../Image';
import Section from '../../Section';
import Rus from './assets/team-new/rus.png';
import Stas from './assets/team-new/stas.png';

export default function Founders() {
  return (
    <Section withLayout={false}>
      <div className="mb-14 md:mb-[88px]">
        <Section.Header className="md:grid md:grid-cols-2 md:gap-10 xl:flex xl:items-center xl:justify-between">
          <Section.Title>
            Meet our <br className="hidden md:block" /> founders
          </Section.Title>
          <Section.Description>
            <p className="mb-4 md:mb-0">
              Back in 2019, we had a goal to create an agency that would help
              its clients with design in complex industries. Few years later,
              our partners became our friends, and designers became our family.
            </p>
          </Section.Description>
        </Section.Header>
      </div>
      <div className="grid grid-cols-4 gap-1 gap-y-10 border-b border-white/10 pb-14 pr-4 md:grid-flow-col md:grid-cols-8 md:gap-16 md:pb-16 md:pr-0 xl:flex xl:gap-20 xl:pb-20">
        <Photo
          img={Rus}
          name="Ruslan Mashatov"
          position="Co-Founder & Lead Designer"
          linkedin="https://www.linkedin.com/in/ruslan-mashatov-0b794aa9/"
          medium="https://medium.com/@ruslanmashatov"
          className="col-span-4 md:col-start-1 xl:col-span-11"
        />

        <Photo
          img={Stas}
          name="Stas Kovalsky"
          position="Co-Founder & Lead Designer"
          align="right"
          linkedin="https://www.linkedin.com/in/staskovalsky/"
          medium="https://medium.com/@stas_k"
          className="col-span-4 md:col-start-5 md:mt-[140px] xl:col-span-11 xl:col-start-[14] xl:mt-[194px]"
        />
      </div>
    </Section>
  );
}

function Photo({
  img,
  name,
  position,
  align = 'left',
  delay = 0,
  linkedin,
  medium,
  className,
}) {
  return (
    <Animated
      className={cx('group overflow-hidden xl:w-full', className)}
      delay={delay}
    >
      <div className="mb-6 overflow-hidden rounded-3xl md:mb-8 xl:mb-8">
        <Image
          src={img}
          className="w-full overflow-hidden rounded-3xl transition-transform duration-500 group-hover:scale-105"
          alt=""
          sizes={[[208, 768], [448]]}
        />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="mb-1 font-satoshi text-[18px] font-medium leading-[26px] md:mb-2 md:text-[20px] xl:text-next-heading-7">
            {name}
          </div>
          <div className="text-[14px] leading-[23px] opacity-80 md:text-[16px] md:leading-none xl:text-next-body-s">
            {position}
          </div>
        </div>
        <div className="flex flex-row gap-2">
          {linkedin && (
            <a href={linkedin} target="_blank" className="p-2 text-white hover:text-brand transition-colors duration-200">
              <svg
                className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00781 2.4405C1.00781 1.7331 1.25541 1.1495 1.75057 0.689708C2.24574 0.229896 2.88948 0 3.68176 0C4.4599 0 5.08946 0.226351 5.57049 0.679097C6.06566 1.14598 6.31326 1.75432 6.31326 2.50417C6.31326 3.18327 6.07275 3.74917 5.59172 4.20191C5.09655 4.66879 4.44574 4.90223 3.63931 4.90223H3.61809C2.83995 4.90223 2.21039 4.66879 1.72935 4.20191C1.24832 3.73503 1.00781 3.14789 1.00781 2.4405ZM1.2837 21.0096V6.83341H5.99493V21.0096H1.2837ZM8.60521 21.0096H13.3164V13.0938C13.3164 12.5986 13.373 12.2167 13.4862 11.9479C13.6843 11.4668 13.9849 11.0601 14.3881 10.7276C14.7914 10.3951 15.2971 10.2289 15.9055 10.2289C17.4901 10.2289 18.2823 11.2971 18.2823 13.4334V21.0096H22.9936V12.8816C22.9936 10.7877 22.4984 9.19964 21.508 8.11733C20.5177 7.03502 19.209 6.49386 17.582 6.49386C15.7569 6.49386 14.3351 7.27907 13.3164 8.84948V8.89192H13.2952L13.3164 8.84948V6.83341H8.60521C8.6335 7.28614 8.64765 8.69384 8.64765 11.0565C8.64765 13.4192 8.6335 16.7369 8.60521 21.0096Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}
          {medium && (
            <a href={medium} target="_blank" className="p-2 text-white hover:text-brand transition-colors duration-200">
              <svg
                className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_13001_4400)">
                  <path
                    d="M13.5374 12.2271C13.5374 15.9978 10.5069 19.0546 6.76883 19.0546C3.03073 19.0546 0 15.9971 0 12.2271C0 8.45709 3.0305 5.39941 6.76883 5.39941C10.5072 5.39941 13.5374 8.4564 13.5374 12.2271Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20.9602 12.2285C20.9602 15.7779 19.445 18.6563 17.5758 18.6563C15.7067 18.6563 14.1914 15.7779 14.1914 12.2285C14.1914 8.67922 15.7064 5.80078 17.5756 5.80078C19.4448 5.80078 20.96 8.67829 20.96 12.2285"
                    fill="currentColor"
                  />
                  <path
                    d="M24.0015 12.227C24.0015 15.4063 23.4686 17.9853 22.8112 17.9853C22.1537 17.9853 21.6211 15.407 21.6211 12.227C21.6211 9.04699 22.1539 6.46875 22.8112 6.46875C23.4684 6.46875 24.0015 9.04676 24.0015 12.227Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13001_4400">
                    <rect width="24" height="24" rx="4" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          )}
        </div>
      </div>
    </Animated>
  );
}
