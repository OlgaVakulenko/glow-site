import cx from 'clsx';
import Link from 'next/link';
import Button2 from '../../Button';
import Image from '../../Image';
import Layout from '../../Layout';
import LogoG from './assets/logo-g.png';
import Sphere from './assets/sphere.png';
import CtaBG from './assets/cta-bg.png';

function Card({ className, children, hideBg = false }) {
  return (
    <div
      className={cx(
        'overflow-hidden rounded-2xl p-5 xl:px-6',
        { 'bg-[rgba(255,255,255,0.05)]': !hideBg },
        className
      )}
    >
      {children}
    </div>
  );
}

function NumCard({ num, title }) {
  return (
    <Card className="relative flex items-baseline space-x-6 md:flex-col md:space-x-0 md:space-y-[20px]">
      <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-brand p-[6px] font-inter text-[14px] font-medium leading-[16px] text-white xl:text-[16px] xl:leading-[20px]">
        {num}
      </div>
      <div className="font-satoshi font-medium md:text-[18px] md:leading-[28px] xl:text-[20px] xl:leading-[32px]">
        {title}
      </div>
    </Card>
  );
}

function Tag({ name }) {
  return (
    <div className="glow-border-light rounded-full px-[10px] py-[4.5px] uppercase md:text-[12px] md:leading-[160%] md:tracking-[0.02em]">
      {name}
    </div>
  );
}

const tags = ['Discovery', 'UI Design', 'UX Design', 'Design Audit', 'MVP'];

export default function TrialBanner() {
  return (
    <Layout className="mb-[72px] font-inter md:mb-[144px] xl:mb-[176px]">
      <div className="relative overflow-hidden  rounded-[32px] bg-black p-4 text-white">
        <Image
          src={CtaBG}
          alt=""
          className="pointer-events-none absolute left-0 top-0 md:inset-0"
        />
        <div className="grid gap-4 md:grid-cols-4">
          <Card
            hideBg
            className="relative !py-10 md:col-span-2 md:!py-12 xl:!pt-10"
          >
            <div className="relative mb-8 font-satoshi font-medium md:mb-8 md:text-[48px] md:leading-[56px] md:tracking-[-1px] xl:mb-9 xl:text-[56px]">
              Start with <br className="hidden md:block" />a free 3-day trial
            </div>
            <Button2
              as={Link}
              className="relative w-full !bg-white !px-[16px] !py-[8px] text-center !text-black md:w-auto"
              href="/contact-us"
              color="white"
              compact
            >
              Get started
            </Button2>
          </Card>
          <Card className="relative md:col-span-2  md:!pb-8 xl:!p-8">
            {/* <Image
            src={LogoG}
            alt=""
            className="pointer-events-none absolute right-0 top-0 h-full w-auto object-cover opacity-40"
          /> */}
            <div className="h-full md:flex md:flex-col md:justify-between">
              <div className="relative md:mb-12 md:text-[16px] md:leading-[160%] xl:mb-[88px] xl:text-[18px]">
                To reduce your risks and help you get to know us better, we
                offer the first three days of work at no charge. This way, you
                can evaluate our skills and decide whether you want to work with
                us going forward.
              </div>
              <div className="relative flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag key={tag} name={tag} />
                ))}
              </div>
            </div>
          </Card>

          <NumCard num={'1'} title="Discovery Call" />
          <NumCard num={'2'} title="Design" />
          <NumCard num={'3'} title="Work Presentation" />
          <NumCard num={'4'} title="Partnership" />
          {/* <Card>Hello</Card>

        {/* <Card>Hello</Card>
        {/* <Card>Hello</Card>
        {/* <Card>Hello</Card>
        <Card>Hello</Card>
        <Card>Hello</Card> */}
        </div>
      </div>
    </Layout>
  );
}
