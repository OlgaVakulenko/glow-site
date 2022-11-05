import BigButton from './BigButton';
import Layout from './Layout';
import LocalTime from './LocalTime';
import RollingText from './RollingText';
import Weather from './Weather';

const links = [
  { href: 'https://www.facebook.com/glow.design.agency', label: 'Facebook' },
  { href: 'https://medium.com/glow-team', label: 'Medium' },
  { href: 'https://clutch.co/profile/glow-design-agency', label: 'Clutch' },
  { href: 'https://instagram.com/glow_dsgn', label: 'Instagram' },
  { href: 'https://dribbble.com/glow-team', label: 'Dribbble' },
];

export default function Footer() {
  return (
    <footer className="bg-black py-[30px] pt-[61px] text-lblue md:pt-[160px] xl:pt-[176px]">
      <Layout>
        <div className="md:flex md:items-baseline md:justify-between">
          <div className="pb-[66px] text-lg italic leading-[24px] md:w-full md:min-w-[292px] md:text-xl md:leading-[27px] xl:min-w-full xl:max-w-[265px]">
            Contact us to upgrade your product and&nbsp;make it top-tier with
            our design.
          </div>
          {/* <div className="mb-14 flex flex-col"> */}
          <BigButton
            variant="footer"
            className="mb-4 md:mr-[37px] md:ml-[63px] xl:ml-auto"
          >
            Discovery Call
          </BigButton>
          <BigButton variant="footer" className="">
            Fill out the form
          </BigButton>
          {/* </div> */}
        </div>
        <div className="mb-[38px] mt-[68px] font-glow text-[32px] font-medium leading-[100%] md:mb-[112px] md:mt-[110px] md:pl-2 md:text-[60px] xl:mb-[120px] xl:text-[64px]">
          Let’s make
          <br /> your project glow
        </div>
        <div className="flex items-center justify-between text-sm text-white md:text-base">
          <div className="flex w-full items-center justify-between md:justify-start">
            <div className="flex items-center">
              <div className="styag mr-4 w-[24px] overflow-hidden rounded md:mr-6">
                <div className="h-[9px] bg-[#156DD1]"></div>
                <div className="h-2 bg-[#FFD948]"></div>
              </div>
              <div>Odessa, Ukraine</div>
            </div>
            <div className="-mr-7 flex items-center md:ml-8 md:-mr-8">
              <LocalTime className="mr-7 md:mr-8" />
              <Weather className="mr-7 md:mr-8" />
            </div>
          </div>
          <div className="mr-[-40px] hidden md:flex xl:mr-[-56px]">
            {links.map((link) => (
              <a
                className="mr-[40px] whitespace-nowrap xl:mr-[56px]"
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <RollingText text={link.label} height={24} />
              </a>
            ))}
          </div>
        </div>
      </Layout>
    </footer>
  );
}
