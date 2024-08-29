import RollingText from '../RollingText';
import cx from 'clsx';
import { useAtom } from 'jotai';
import { themeAtom } from '../../lib/theme';
import Link from 'next/link';
import { links, usFlag } from '../../data/footer-data';

export function SocialLinks() {
	const [theme] = useAtom(themeAtom);

  return (
    <div className="flex w-full justify-between py-2 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:justify-center md:gap-4">
      {links.map((link) => (
        <a
          title={link.label}
          className={cx('whitespace-nowrap p-1 hover:text-brand transition-colors text-[#19191B]', {'text-white': theme === 'dark'})}
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default function FooterLinks({ className = '' }) {
	const [theme] = useAtom(themeAtom);
	const dark = theme === 'dark';

  return (
    <div
      className={cx(
        'relative flex flex-col items-center justify-between gap-4 text-next-body-s text-white md:justify-between md-safe:flex-row md-safe:space-y-0',
        className
      )}
    >
      <div className={cx('flex w-full items-center justify-between py-3 md-safe:w-auto md-safe:justify-start', {'text-white': dark})}>
				<div className="flex shrink-0 items-center md:mr-8">
          <div className="styag mr-4 w-[24px] overflow-hidden rounded md-safe:mr-4">
						{usFlag.icon}
          </div>
          <div><span className='md:hidden xl:inline'>Delaware, </span>USA</div>
        </div>
        <div className="flex shrink-0 items-center">
          <div className="styag mr-4 w-[24px] overflow-hidden rounded md-safe:mr-4">
            <div className="h-[9px] bg-[#156DD1]"></div>
            <div className="h-2 bg-[#FFD948]"></div>
          </div>
          <div><span className='md:hidden xl:inline'>Odesa, </span>Ukraine</div>
        </div>
        {/* <div className="flex items-center md-safe:-mr-4 md-safe:ml-4 lg:opacity-100">
          <LocalTime className="mr-4 md-safe:mr-4" />
          <Weather className="md-safe:mr-8" />
        </div> */}
      </div>
      <SocialLinks />
      <div className="relative flex w-full shrink-0 justify-between px-2 py-4 md:gap-6 md-safe:w-auto xl:space-x-9">
        <div className="absolute left-1/2 top-1/2 h-[16px] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-checkbox-light md:hidden"></div>
        <Link href="/privacy-policy" className={cx({'text-white': dark})}>
          <RollingText text="Privacy Policy" height={24}></RollingText>
        </Link>
        <Link href="terms-of-service" className={cx({'text-white': dark})}>
          <RollingText text="Terms Of Service" height={24}></RollingText>
        </Link>
      </div>
    </div>
  );
}
