import Image from '../../Image';
import Layout from '../../Layout';
import RusImage from '../About/assets/rus-2.png';
import StasImage from '../About/assets/stas-k.png';
import Member1 from './assets/member-1.png';
import Member2 from './assets/member-2.png';
import cx from 'clsx';
import Noise from './assets/noise-2.png';
import TrialIll from './assets/trial-ill.png';

const trialTeam = [
  {
    title: 'Project Manager',
    image: Member1,
  },
  {
    title: 'Product Designer',
    image: Member2,
  },
];

const listItems = [
  {
    title: 'Time',
    items: [
      {
        title: 'Duration',
        description:
          '2 weeks = 10 workdays (with the 3 first days out of charge)',
      },
    ],
  },
  {
    title: 'Deliverables',
    items: [
      {
        title: 'Result',
        description: 'A fitting design solution for your business pain points.',
      },
    ],
  },
];

function MemberImage({ src, isBoss = false }) {
  return (
    <Image
      className={cx('h-16 w-16 rounded-2xl object-cover', {
        'md:h-20 md:w-20 xl:h-[144px] xl:w-[144px]': isBoss,
      })}
      src={src}
      alt=""
    />
  );
}

function Label({ className, children }) {
  return (
    <div className={cx(className, 'text-body-heading-s uppercase opacity-50')}>
      {children}
    </div>
  );
}

function TimeItem({ title, description }) {
  return (
    <div>
      <div className="mb-2 text-body-heading-m">{title}</div>
      <div className="text-body-s">{description}</div>
    </div>
  );
}

function Illustration() {
  return (
    <div className="-mx-4 xl:mx-0 2xl:pr-28">
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative h-full w-full">
            <div className="noise-bg absolute -right-[45px] top-1/2 z-[1] h-[300px] w-[300px] -translate-y-1/2 overflow-hidden rounded-full md:right-[28px] md:top-[150px]"></div>
          </div>
        </div>
        <div className="absolute right-[197px] top-[112px] text-body-heading-s uppercase text-[#E33230] md:right-[252px] md:top-[20px]">
          Your business with glow
        </div>
        <div className="absolute right-[167px] top-[120px] scale-75 md:right-[218px] md:top-[28px] md:scale-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="13"
            viewBox="0 0 30 13"
            fill="none"
          >
            <path
              d="M29.2389 12.4885L26.0816 9.88577C18.9177 3.98044 9.92278 0.750976 0.638723 0.750977L0 0.750977"
              stroke="#E33230"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-6 z-[1] text-body-heading-s uppercase md:bottom-[44px] md:right-[120px]">
          Your business without glow
        </div>
        <div className="absolute bottom-1 right-[218px] z-[1] md:bottom-[48px] md:right-[16px] md:-scale-x-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="98"
            height="91"
            viewBox="0 0 98 91"
            fill="none"
          >
            <circle cx="38" cy="38" r="37.5" stroke="#19191B" />
            <circle
              cx="15"
              cy="15"
              r="14.5"
              transform="matrix(1 0 0 -1 23 53)"
              stroke="#19191B"
            />
            <path
              d="M71.9988 66.3208L75.8689 71.6007C80.9893 78.5862 88.5142 83.4292 96.9932 85.1962V85.1962"
              stroke="black"
            />
          </svg>
        </div>
        <div className="trial-ill absolute right-4 top-1/2 h-[180px] w-[180px] -translate-y-1/2 rounded-full bg-[#E33230] md:right-[75px] md:top-[140px] md:h-[208px] md:w-[208px]">
          <div className="relative h-full w-full">
            <div className="flex h-full items-center justify-between px-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="28"
                viewBox="0 0 22 28"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0307 14.8146C8.8092 14.8146 7.0895 13.1096 7.0895 10.9424H2.07422C2.07422 15.774 6.05084 19.6111 11.0307 19.6111V14.8146Z"
                  fill="#F0F6FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0352 7.06923C13.2563 7.06923 14.9756 8.7746 14.9756 10.9418H19.9913C19.9913 6.11015 16.0147 2.27344 11.0352 2.27344V7.06923Z"
                  fill="#F0F6FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0352 19.6109C16.0147 19.6109 19.9913 15.7734 19.9913 10.9418H14.9756C14.9756 13.109 13.2563 14.8144 11.0352 14.8144V19.6109Z"
                  fill="#F0F6FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.6094 5.89711H17.9477L21.5659 0H16.228L12.6094 5.89711Z"
                  fill="#F0F6FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 27.143H5.33792L11.3207 17.2666H5.9832L0 27.143Z"
                  fill="#F0F6FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.32422 27.1419H20.2726V22.4521H3.04063L2.32422 27.1419Z"
                  fill="#F0F6FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0307 2.27441C6.05084 2.27441 2.07422 6.11074 2.07422 10.9424H7.0895C7.0895 8.7752 8.8092 7.0702 11.0307 7.0702V2.27441Z"
                  fill="#F0F6FF"
                />
              </svg>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.2188 4.42578L4.64486 12.9997" stroke="#FFE7EA" />
                <path d="M13.2188 12.9995L4.64486 4.42562" stroke="#FFE7EA" />
              </svg>
              <svg
                width="29"
                height="14"
                viewBox="0 0 29 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.228 8.158V13H4.878V8.158L0.18 0.075999H1.656L5.598 6.898L9.558 0.075999H10.962L6.228 8.158ZM14.6406 13.18C12.0306 13.18 10.1406 11.11 10.1406 8.248C10.1406 5.404 12.0306 3.352 14.6406 3.352C17.2686 3.352 19.1586 5.404 19.1586 8.248C19.1586 11.11 17.2686 13.18 14.6406 13.18ZM14.6406 12.082C16.4946 12.082 17.8806 10.606 17.8806 8.248C17.8806 5.926 16.4946 4.45 14.6406 4.45C12.8046 4.45 11.4186 5.926 11.4186 8.248C11.4186 10.606 12.8046 12.082 14.6406 12.082ZM27.2621 9.166V3.514H28.5041V13H27.3341V11.29C26.8481 12.388 25.6961 13.18 24.3101 13.18C22.3841 13.18 21.1061 12.082 21.1061 9.688V3.514H22.3661V9.418C22.3661 11.344 23.3201 12.082 24.6521 12.082C26.1641 12.082 27.2621 10.858 27.2621 9.166Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Illustration2() {
  return (
    <div className="relative -mt-16 md:absolute md:left-1/2 md:right-4 md:top-1/2 md:w-[367px] md:max-w-[380px] md:-translate-x-1/2 md:-translate-y-[35%]">
      <Image src={TrialIll} alt="" />
    </div>
  );
}

function TextSpan({ children }) {
  return <span className="text-[#A4A6AE]">{children}</span>;
}

export default function Business() {
  return (
    <div className="md:pb-20 xl:px-20">
      <Layout className="relative z-[1]">
        <div className="mb-20 md:mb-28 md:flex md:items-center md:justify-between md:space-x-8 xl:mb-[72px]">
          <div className="mb-8 flex space-x-2 md:mb-0 md:shrink-0 md:space-x-4 xl:space-x-6">
            <MemberImage src={RusImage} isBoss={true} />
            <MemberImage src={StasImage} isBoss={true} />
          </div>
          <div className="hidden md:block">
            <svg
              width="136"
              height="136"
              viewBox="0 0 136 136"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="135.622"
                y1="0.620416"
                x2="1.27184"
                y2="134.971"
                stroke="black"
                stroke-width="0.997285"
              />
            </svg>
          </div>
          <div className="text-2xl font-medium leading-8 md:max-w-[600px] md:leading-9">
            Does <TextSpan>your product</TextSpan> need an additional spark? Or
            are you just <TextSpan>preparing your startup</TextSpan> to shoot
            for the stars? Whatever the case, we are eager to{' '}
            <TextSpan>help you make your product glow</TextSpan> with our{' '}
            <TextSpan>2-week trial</TextSpan> period.
          </div>
        </div>
        <div className="md:flex">
          <div className="md:flex md:space-x-16">
            <div className="mb-10">
              <Label className="mb-8 ">Trial team</Label>
              <div className="grid gap-4 md:gap-6">
                {trialTeam.map((member, i) => (
                  <div key={i} className="flex items-center space-x-8">
                    <MemberImage src={member.image} />
                    <div className="text-body-s">{member.title}</div>
                  </div>
                ))}
                <div className="flex items-center space-x-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E33230]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0V24" stroke="#FFE7EA" />
                      <path d="M24 12L7.15256e-07 12" stroke="#FFE7EA" />
                    </svg>
                  </div>
                  <div className="text-body-s">And you</div>
                </div>
              </div>
            </div>
            <div className="grid gap-10 md:flex md:max-w-[255px] md:flex-col">
              {listItems.map((item, i) => (
                <div key={i}>
                  <Label className="mb-6">{item.title}</Label>
                  {item.items.map((item2, i2) => (
                    <TimeItem
                      key={i2}
                      title={item2.title}
                      description={item2.description}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="md:relative md:ml-auto md:max-w-[600px] md:grow md:basis-0">
            <Illustration2 />
          </div>
        </div>
      </Layout>
    </div>
  );
}
