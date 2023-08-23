import LocalTime from '../LocalTime';
import RollingText from '../RollingText';
import Weather from '../Weather';
import cx from 'clsx';

const links = [
  { href: 'https://www.facebook.com/glow.design.agency', label: 'Facebook' },
  { href: 'https://medium.com/glow-team', label: 'Medium' },
  { href: 'https://clutch.co/profile/glow-design-agency', label: 'Clutch' },
  { href: 'https://instagram.com/glow_dsgn', label: 'Instagram' },
  { href: 'https://dribbble.com/glow-team', label: 'Dribbble' },
];

export default function FooterLinks({ className = '' }) {
  return (
    <div
      className={cx(
        'flex items-center justify-between text-sm text-white md:text-base',
        className
      )}
    >
      <div className="flex w-full items-center justify-between md:justify-start">
        <div className="flex items-center">
          <div className="styag mr-4 w-[24px] overflow-hidden rounded md:mr-6">
            <div className="h-[9px] bg-[#156DD1]"></div>
            <div className="h-2 bg-[#FFD948]"></div>
          </div>
          <div>Odesa, Ukraine</div>
        </div>
        <div className="flex items-center  md:-mr-8 md:ml-8">
          <LocalTime className="mr-7 md:mr-8" />
          <Weather className="md:mr-8" />
        </div>
      </div>
      <div className="hidden md:flex md:space-x-10 xl:space-x-[56px]">
        {links.map((link) => (
          <a
            className="whitespace-nowrap"
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
  );
}
