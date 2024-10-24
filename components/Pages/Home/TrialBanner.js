import cx from 'clsx';
import Link from 'next/link';
import Button2 from '../../Button';
import { useAtom } from 'jotai';
import { themeAtom } from '../../../lib/theme';
import Image from '../../Image';
import Layout from '../../Layout';
import LogoG from './assets/logo-g.png';
import Sphere from './assets/sphere.png';
import CtaBG from './assets/cta-bg.png';
import Animated from '../../Animated';

function Card({ className, children, hideBg = false }) {
  return (
    <div
      className={cx(
        'overflow-hidden rounded-2xl p-6 xl:px-6',
        { 'bg-[rgba(255,255,255,0.05)]': !hideBg },
        className
      )}
    >
      {children}
    </div>
  );
}

function NumCard({ num, title }) {
	const [theme] = useAtom(themeAtom)

  return (
    <Card className={cx('relative flex items-center space-x-6 md:flex-col md:items-start md:space-x-0 md:space-y-[20px]', {'bg-dark-tag border border-[#403e514d]': theme === 'dark'})}>
      <div className={cx("flex h-[32px] w-[32px] items-center justify-center rounded-full p-[6px] font-inter text-[16px] font-normal leading-[20px] text-white xl:text-[16px] xl:leading-[20px]", {'bg-brand': theme === 'light', 'bg-[#ffffff1a]': theme === 'dark' })}>
        {num}
      </div>
      <div className="text-next-heading-7">{title}</div>
    </Card>
  );
}

export function Tag({ name }) {
  return (
    <div className="glow-border-light rounded-full px-[10px] py-[2px] text-next-tag font-normal uppercase">
      {name}
    </div>
  );
}

const tags = ['Discovery', 'UI Design', 'UX Design', 'Design Audit', 'MVP'];

function Bunner() {
	const [theme] = useAtom(themeAtom);
	const dark = theme === 'dark';

	return(
		<div className="grid gap-4 md:grid-cols-4">
			<Card hideBg={!dark} className={cx('relative md:col-span-2', {'bg-bl-dark xl:!p-12 md:!p-8 !p-6 trial-dark-outline': dark, 'md:!p-8 !p-2 !pb-4': !dark})}>
				<h2 className="relative mb-8 text-next-heading-5 md:mb-8 md:text-next-heading-3 xl:mb-8 xl:text-next-heading-2">
					Start with
					<br className="hidden md:block" /> a free
					<br className="md:hidden" /> 3&#8209;day trial
				</h2>
				<Button2
					as={Link}
					className={cx("relative !bg-white !px-[20px] !py-[12px] text-center md:w-auto font-normal", {'w-auto xl:mb-0 md:mb-[9px]': dark, 'w-full': !dark})}
					href="/contact-us"
					color="black"
				>
					Get started
				</Button2>
			</Card>
			<Card className={cx('relative md:col-span-2 xl:!p-6', { 'bg-dark-tag border border-[#403e514d]': dark })}>
				<div className="h-full md:flex md:flex-col md:justify-between">
					<div className={cx('relative mb-8 text-next-body-s md:mb-[40px] md:text-[16px] md:leading-[25.8px] xl:mb-[80px] xl:text-next-body-m', {'trial-text-gradient': dark})}>
						To reduce your risks and help you get to know us better, we offer
						the first three days of work at no charge. This way, you can
						evaluate our skills and decide whether you want to work with us
						going forward.
					</div>
					<div className={cx("relative flex flex-wrap gap-2 xl:max-w-full xl:pb-0", {'md:max-w-[80%]': !dark, 'md:max-w-full': dark})}>
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
		</div>
	)	
}

export default function TrialBanner() {
	const [theme] = useAtom(themeAtom);
	if (theme === 'dark') {
		return <Bunner />
	}

  return (
    // <Layout className="mb-[72px] font-inter md:mb-[144px] xl:mb-[176px]">
    <Animated className='relative -mx-2 overflow-hidden rounded-[32px] bg-black p-4 text-white md:mx-0'>
      <div className="bg-bl absolute inset-0"></div>
      {/* <Image
        src={CtaBG}
        alt=""
        className="pointer-events-none absolute inset-0 h-full max-h-[50%] w-[200%] max-w-[200%] md:h-auto md:max-h-full md:w-full md:max-w-full"
      /> */}
			<Bunner />
    </Animated>
    // </Layout>
  );
}
