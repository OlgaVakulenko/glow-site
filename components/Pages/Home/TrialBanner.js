import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from '../../../dist/gsap';
import { useHandleFooterFormClick } from '../../../lib/utils';
import AnimatedButton from '../../AnimatedButton';
import Image from '../../Image';
import Layout from '../../Layout';
import SphereBg from './assets/sphere-bg.png';
import Bg from './assets/trial-bg.png';
import Logo from './assets/trial-logo.png';
import cx from 'clsx';
import Button2 from '../../Button';
import LogoG from './assets/logo-g.png';
import Sphere from './assets/sphere.png';

function Card({ className, children }) {
  return (
    <div
      className={cx(
        'overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.06)] p-6 xl:px-8',
        className
      )}
    >
      {children}
    </div>
  );
}

function NumCard({ num, title }) {
  return (
    <Card className="flex items-baseline space-x-6 md:flex-col md:space-x-0 md:space-y-[14px] md:!py-8">
      <div className="h-[18px] font-glow text-2xl font-medium leading-none tracking-[2px] text-brand md:leading-none">
        {num}
      </div>
      <div className="text-body-heading-m2">{title}</div>
    </Card>
  );
}

function Tag({ name }) {
  return (
    <div className="glow-border-light rounded-full px-2 py-1 text-body-heading-s uppercase text-lblue">
      {name}
    </div>
  );
}

const tags = ['Discovery', 'UI Design', 'UX Design', 'Design Audit', 'MVP'];

export default function TrialBanner() {
  return (
    <Layout className="mb-[72px] md:mb-20 xl:mb-[120px]">
      <div className="grid gap-4 rounded-[32px] bg-black p-4 text-white md:grid-cols-4 ">
        <Card className="relative !py-10 md:col-span-2 md:!py-12 xl:!pt-10">
          <Image
            src={Sphere}
            alt=""
            className="absolute left-0 top-0 h-full w-[200%] max-w-[600px] md:inset-0 md:w-full md:max-w-full"
          />
          <div className="relative mb-8 font-glow text-heading-h3 md:mb-6 md:text-heading-h2 xl:mb-4 xl:text-heading-h2-hero">
            Start with <br className="hidden md:block" />a free 3-day trial
          </div>
          <Button2
            as={Link}
            className="relative w-full text-center md:w-auto"
            href="/contact-us"
            color="white"
            compact
          >
            Get started
          </Button2>
        </Card>
        <Card className="relative md:col-span-2  md:!pb-8 xl:!p-8">
          <Image
            src={LogoG}
            alt=""
            className="pointer-events-none absolute right-0 top-0 h-full w-auto object-cover opacity-40"
          />
          <div className="h-full md:flex md:flex-col md:justify-between">
            <div className="relative mb-10 text-body-s md:text-body-m">
              To reduce your risks and help you get to know us better, we offer
              the first three days of work at no charge. This way, you can
              evaluate our skills and decide whether you want to work with us
              going forward.
            </div>
            <div className="relative flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          </div>
        </Card>

        <NumCard num={'01'} title="Discovery Call" />
        <NumCard num={'02'} title="Design" />
        <NumCard num={'03'} title="Work Presentation" />
        <NumCard num={'04'} title="Partnership" />
        {/* <Card>Hello</Card>

        {/* <Card>Hello</Card>
        {/* <Card>Hello</Card>
        {/* <Card>Hello</Card>
        <Card>Hello</Card>
        <Card>Hello</Card> */}
      </div>
    </Layout>
  );
}
