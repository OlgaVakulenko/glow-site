import cx from 'clsx';
import { useMediaAtom } from '../../../lib/agent';
import Animated from '../../Animated';
import Layout from '../../Layout';

export default function Logos({ padding }) {
  return (
		<Animated>
    <Layout
      className={cx(
        'flex flex-col gap-10 md:grid md:grid-cols-8 md:gap-8 md:gap-y-14 xl:grid-cols-12 xl:gap-y-20',
        {
          'pb-[68px] pt-14 md:pb-[120px] md:pt-20 xl:pb-[240px] xl:pt-[120px]':
            padding == null,
        }
      )}
    >
      <Figma2 className="order-4 md:col-span-4" />
      <IconLayout
        className="order-5 md:col-span-4"
        icon={mediumIcon}
        title={<ItemTitle>Popular Design Blog on Medium</ItemTitle>}
        link={<RemoteLink>View Topics</RemoteLink>}
        href="https://medium.com/glow-team"
      />
      <IconLayout
        className="order-1 md:col-span-4"
        icon={dribbleIcon}
        title={
          <div className="flex gap-8 pt-[3px] md:gap-8">
            <DribbleStat count="12 860" label="Likes" />
            <DribbleStat count="2790" label="Followers" />
          </div>
        }
        link={<RemoteLink>View Profile</RemoteLink>}
        href="https://dribbble.com/glow-team"
      />
      <IconLayout
        className="order-2 md:col-span-4"
        icon={dr}
        title={<ItemTitle>Top Product Design Company</ItemTitle>}
        link={<RemoteLink>View Profile</RemoteLink>}
        href="https://www.designrush.com/agency/graphic-design/digital-design"
      />
      <Animated className="order-2 md:order-6 md:col-span-8 md:flex md:items-center md:justify-center md:rounded-full md:border md:border-black md:p-[32px] xl:order-3 xl:col-span-4 xl:justify-start">
        <IconLayout
          icon={clutchIcon}
          title={
            <ItemTitle>
              Top 30 User <br className="md:hidden" /> Experience Company
            </ItemTitle>
          }
          href="https://clutch.co/profile/glow-design-agency"
          clutch
        />
      </Animated>
    </Layout>
		</Animated>
  );
}

function DribbleStat({ count, label }) {
  return (
    <div>
      <div className="font-satoshi text-[18px] font-bold leading-[28px] md:text-[20px] md:leading-[32px]">
        {count}
      </div>
      <div className="font-satoshi text-[16px] leading-[160%]">{label}</div>
    </div>
  );
}

const mediumIcon = (
  <svg
    className="h-20 w-20 md:h-[128px] md:w-[128px] xl:h-[128px] xl:w-[128px]"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="80" height="80" rx="40" fill="#19191B" />
    <g clipPath="url(#clip0_9183_15297)">
      <path
        d="M42.5624 40.3785C42.5624 46.6631 37.5116 51.7576 31.2814 51.7576C25.0512 51.7576 20 46.6619 20 40.3785C20 34.0951 25.0508 28.999 31.2814 28.999C37.5119 28.999 42.5624 34.094 42.5624 40.3785Z"
        fill="white"
      />
      <path
        d="M54.9337 40.3809C54.9337 46.2964 52.4083 51.0938 49.293 51.0938C46.1778 51.0938 43.6523 46.2964 43.6523 40.3809C43.6523 34.4654 46.1774 29.668 49.2927 29.668C52.4079 29.668 54.9334 34.4638 54.9334 40.3809"
        fill="white"
      />
      <path
        d="M60.0025 40.3783C60.0025 45.6772 59.1144 49.9754 58.0186 49.9754C56.9228 49.9754 56.0352 45.6784 56.0352 40.3783C56.0352 35.0783 56.9232 30.7812 58.0186 30.7812C59.114 30.7812 60.0025 35.0779 60.0025 40.3783Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_9183_15297">
        <rect x="20" y="20" width="40" height="40" rx="4" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const dribbleIcon = (
  <svg
    className="h-20 w-20 md:h-[128px] md:w-[128px] xl:h-[128px] xl:w-[128px]"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="79" height="79" rx="39.5" stroke="#19191B" />
    <g clipPath="url(#clip0_9183_15303)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 25C31.7191 25 25 31.7191 25 40C25 48.2809 31.7191 55 40 55C48.2646 55 55 48.2809 55 40C55 31.7191 48.2646 25 40 25ZM49.9078 31.9143C51.6974 34.0944 52.7712 36.8763 52.8037 39.8861C52.3807 39.8048 48.1507 38.9425 43.8883 39.4794C43.7907 39.2679 43.7093 39.0401 43.6117 38.8124C43.3514 38.1942 43.0586 37.5597 42.7657 36.9577C47.4837 35.038 49.6312 32.2722 49.9078 31.9143ZM40 27.2126C43.2538 27.2126 46.231 28.4328 48.4924 30.4338C48.2646 30.7592 46.3286 33.346 41.7733 35.0542C39.6746 31.1985 37.3482 28.0423 36.9903 27.5542C37.9501 27.3265 38.9588 27.2126 40 27.2126ZM34.5499 28.4165C34.8916 28.872 37.1692 32.0445 39.3004 35.8188C33.3135 37.4133 28.026 37.3807 27.4566 37.3807C28.2863 33.4111 30.9707 30.1085 34.5499 28.4165ZM27.18 40.0163C27.18 39.8861 27.18 39.756 27.18 39.6259C27.7332 39.6421 33.9479 39.7234 40.3416 37.8037C40.7159 38.5195 41.0575 39.2516 41.3829 39.9837C41.2202 40.0325 41.0412 40.0814 40.8785 40.1301C34.2733 42.2614 30.7592 48.0857 30.4664 48.5737C28.4328 46.3124 27.18 43.3026 27.18 40.0163ZM40 52.82C37.039 52.82 34.3059 51.8113 32.1421 50.1193C32.3699 49.6475 34.9728 44.6367 42.1963 42.115C42.2288 42.0987 42.2451 42.0987 42.2777 42.0825C44.0835 46.7516 44.8157 50.6724 45.0109 51.795C43.4653 52.462 41.7733 52.82 40 52.82ZM47.1421 50.6237C47.0119 49.8427 46.3286 46.1009 44.6529 41.4967C48.6714 40.8622 52.1855 41.9035 52.6248 42.0499C52.0716 45.6128 50.0217 48.6876 47.1421 50.6237Z"
        fill="#19191B"
      />
    </g>
    <defs>
      <clipPath id="clip0_9183_15303">
        <rect x="25" y="25" width="30" height="30" rx="4" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const dr = (
  <svg
    className="h-20 w-20 md:h-[128px] md:w-[128px] xl:h-[128px] xl:w-[128px]"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="79" height="79" rx="39.5" stroke="#19191B" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.1699 20.1878C37.5791 22.5733 37.3451 23.6958 38.0486 25.567C38.5858 26.9954 38.6815 28.1732 38.2911 28.5531C37.4466 29.3748 36.3558 28.8154 35.9869 27.3715L35.7695 26.5208L34.887 28.2304C33.1065 31.6811 32.8524 33.7208 33.9322 35.8991C34.239 36.5183 34.8002 37.3637 35.1792 37.7775L35.8684 38.53L35.6119 37.7782C35.4708 37.3649 35.3554 36.5102 35.3554 35.8794C35.3554 34.0578 35.829 33.3073 38.8304 30.3698C40.346 28.8863 41.5381 27.5661 41.7772 27.1057C42.593 25.5352 42.13 22.5982 40.7266 20.4415C40.3449 19.855 39.9605 19.375 39.8723 19.375C39.784 19.375 39.4679 19.7407 39.1699 20.1878ZM42.8951 25.0801C42.851 25.2965 42.7729 25.781 42.7217 26.1565C42.5221 27.6197 41.6616 28.9125 39.4198 31.1162C36.8905 33.6029 36.4921 34.2599 36.4848 35.9531C36.4805 36.9668 36.5557 37.2843 36.9647 37.9754C37.7176 39.2477 38.5787 39.7203 40.2718 39.7902C42.7481 39.8928 44.5505 38.8875 45.5475 36.8478C46.0742 35.7708 46.4308 34.1233 46.4109 32.8608L46.4002 32.1736L46.092 33.0714C45.9227 33.5653 45.5846 34.2686 45.3407 34.6346C44.8609 35.3547 43.4467 36.3826 42.9358 36.3826C42.4877 36.3826 41.9276 35.7706 41.9276 35.2814C41.9276 34.8727 42.8874 33.5291 43.6566 32.8608C44.6857 31.9668 45.1114 30.0037 44.6812 28.1365C44.5055 27.3732 43.36 24.9227 43.1063 24.7669C43.0344 24.7228 42.9394 24.8636 42.8951 25.0801ZM26.0925 41.2697C29.8181 46.5725 39.7837 60.5695 39.8729 60.6248C39.9776 60.6898 55.0878 39.7767 54.9996 39.6892C54.9048 39.5949 48.7121 40.5296 47.8899 40.7623C47.4116 40.8976 46.6902 41.289 46.2867 41.632C45.8832 41.9753 44.3791 43.9301 42.9443 45.9762C39.8582 50.3772 40.0085 50.1975 39.6504 49.913C39.5006 49.794 38.2754 48.1356 36.9279 46.2279C34.3777 42.6175 33.2558 41.4089 32.0193 40.9397C31.6167 40.787 29.8726 40.4489 28.1436 40.1883L25 39.7145L26.0925 41.2697ZM35.8743 41.1407C35.8743 41.2369 39.7329 46.5989 39.8742 46.6991C39.9869 46.779 43.8682 41.1732 43.7685 41.0744C43.7376 41.0437 42.8524 41.2215 41.8017 41.4697L39.8911 41.921L37.8826 41.4941C36.7781 41.2594 35.8743 41.1003 35.8743 41.1407Z"
      fill="#19191B"
    />
  </svg>
);

const clutchIcon = (
  <svg
    className="h-20 w-20 md:h-[64px] md:w-[64px]"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 0L57.4 9.86232L74.641 20L74.8 40L74.641 60L57.4 70.1377L40 80L22.6 70.1377L5.35898 60L5.2 40L5.35898 20L22.6 9.86232L40 0Z"
      fill="#19191B"
    />
    <path
      d="M50.0241 47.7701C47.9153 49.4572 44.9629 50.7225 42.0105 50.7225C35.2622 50.7225 30.6227 45.6613 30.6227 38.9129C30.6227 32.1646 35.2622 27.5251 42.0105 27.5251C44.9629 27.5251 47.9153 28.3687 50.0241 30.4775L51.2895 31.7428L58.0378 25.4163L56.3507 24.151C52.5548 20.7768 47.4935 18.668 42.0105 18.668C30.2009 18.668 21.3438 27.5251 21.3438 39.3347C21.3438 51.1443 30.2009 60.0015 42.0105 60.0015C47.4935 60.0015 52.5548 57.8926 56.3507 54.5185L58.0378 53.2531L51.2895 46.5048L50.0241 47.7701Z"
      fill="#F3F2F4"
    />
    <path
      d="M41.5921 46.0825C45.3191 46.0825 48.3404 43.0611 48.3404 39.3341C48.3404 35.6071 45.3191 32.5858 41.5921 32.5858C37.8651 32.5858 34.8438 35.6071 34.8438 39.3341C34.8438 43.0611 37.8651 46.0825 41.5921 46.0825Z"
      fill="#F3F2F4"
    />
  </svg>
);

function IconLayout({ className, icon, title, href, link, clutch }) {
  return (
    <a
      href={href}
      target="_blank"
      className={cx(
        'flex items-center gap-4  md:gap-6 ',
        {
          'min-h-[120px]': icon !== clutchIcon,
          'md:!gap-8': clutch,
        },
        className
      )}
    >
      <div>{icon}</div>
      <div className="flex flex-col gap-2 md:gap-6">
        {title}
        {link}
      </div>
    </a>
  );
}

function Figma2({ className }) {
  return (
    <IconLayout
      className={className}
      title={<ItemTitle>Top Profile Figma Community</ItemTitle>}
      href="https://www.figma.com/@glow_agency"
      link={<RemoteLink>Open Comunity</RemoteLink>}
      icon={
        <svg
          className="h-20 w-20 md:h-[128px] md:w-[128px] xl:h-[128px] xl:w-[128px]"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="80" height="80" rx="40" fill="#19191B" />
          <g clipPath="url(#clip0_9183_15286)">
            <path
              d="M40.1289 39.6666C40.1289 38.2227 40.6977 36.8378 41.71 35.8168C42.7224 34.7958 44.0955 34.2222 45.5272 34.2222C46.9589 34.2222 48.332 34.7958 49.3444 35.8168C50.3568 36.8378 50.9255 38.2227 50.9255 39.6666C50.9255 41.1106 50.3568 42.4954 49.3444 43.5164C48.332 44.5374 46.9589 45.1111 45.5272 45.1111C44.0955 45.1111 42.7224 44.5374 41.71 43.5164C40.6977 42.4954 40.1289 41.1106 40.1289 39.6666Z"
              fill="#F3F2F4"
            />
            <path
              d="M29.332 50.5555C29.332 49.1116 29.9008 47.7268 30.9132 46.7057C31.9255 45.6847 33.2986 45.1111 34.7303 45.1111H40.1286V50.5555C40.1286 51.9995 39.5599 53.3843 38.5475 54.4053C37.5351 55.4264 36.1621 56 34.7303 56C33.2986 56 31.9255 55.4264 30.9132 54.4053C29.9008 53.3843 29.332 51.9995 29.332 50.5555V50.5555Z"
              fill="#F3F2F4"
            />
            <path
              d="M40.1289 23.3333V34.2221H45.5272C46.9589 34.2221 48.332 33.6485 49.3444 32.6275C50.3568 31.6065 50.9255 30.2217 50.9255 28.7777C50.9255 27.3337 50.3568 25.9489 49.3444 24.9279C48.332 23.9069 46.9589 23.3333 45.5272 23.3333H40.1289Z"
              fill="#F3F2F4"
            />
            <path
              d="M29.332 28.7777C29.332 30.2217 29.9008 31.6065 30.9132 32.6275C31.9255 33.6485 33.2986 34.2221 34.7303 34.2221H40.1286V23.3333H34.7303C33.2986 23.3333 31.9255 23.9069 30.9132 24.9279C29.9008 25.9489 29.332 27.3337 29.332 28.7777V28.7777Z"
              fill="#F3F2F4"
            />
            <path
              d="M29.332 39.6666C29.332 41.1106 29.9008 42.4954 30.9132 43.5164C31.9255 44.5374 33.2986 45.1111 34.7303 45.1111H40.1286V34.2222H34.7303C33.2986 34.2222 31.9255 34.7958 30.9132 35.8168C29.9008 36.8378 29.332 38.2227 29.332 39.6666V39.6666Z"
              fill="#F3F2F4"
            />
          </g>
          <defs>
            <clipPath id="clip0_9183_15286">
              <rect
                width="21.5932"
                height="32.6667"
                fill="white"
                transform="translate(29.332 23.3333)"
              />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );

  return (
    <div>
      <div></div>
      <div>
        <ItemTitle>Top Profile Figma Community</ItemTitle>
        <RemoteLink href="/figma" title="Open Comunity" />
      </div>
    </div>
  );
}

function ItemTitle({ children }) {
  return (
    <div className="max-w-[240px] font-satoshi text-[18px] font-bold leading-[28px] md:max-w-full md:text-[20px] md:leading-[32px]">
      {children}
    </div>
  );
}

function RemoteLink({ children }) {
  return (
    <div className="flex items-center gap-2 text-[16px] font-medium leading-[40px]">
      <span>{children}</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.12491 9.37512L16.3751 9.37512L16.3751 10.6251L3.12491 10.6251L3.12491 9.37512Z"
          fill="#19191B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3255 15.0186L15.3653 9.99962L10.3255 4.98149L11.2075 4.0957L17.1368 9.99954L11.2076 15.9043L10.3255 15.0186Z"
          fill="#19191B"
        />
      </svg>
    </div>
  );
}

function LinkItem({
  href,
  icon,
  title,
  subtitle,
  className,
  type = 'default',
}) {
  return (
    <Animated
      as="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cx('flex', className)}
    >
      <div className="mr-6">{icon}</div>
      <div
        className={cx('flex flex-col', {
          'justify-center md:justify-start': type === 'blog',
        })}
      >
        <div
          className={cx(
            'font-satoshi text-[16px] font-bold leading-[28px] md:mb-12 md:max-w-[236px]',
            {
              'mb-6': type !== 'blog',
              'mb-0': type === 'blog',
            }
          )}
        >
          {title}
        </div>
        <div
          className={cx(
            'flex w-fit items-center justify-between gap-2 text-[16px] font-medium leading-[24px]',
            {
              'hidden md:flex': type === 'blog',
            }
          )}
        >
          <span>{subtitle}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.12491 9.37512L16.3751 9.37512L16.3751 10.6251L3.12491 10.6251L3.12491 9.37512Z"
              fill="#19191B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3255 15.0186L15.3653 9.99962L10.3255 4.98149L11.2075 4.0957L17.1368 9.99954L11.2076 15.9043L10.3255 15.0186Z"
              fill="#19191B"
            />
          </svg>
        </div>
      </div>
    </Animated>
  );
}

function Figma({ className }) {
  const media = useMediaAtom();

  return (
    <LinkItem
      className={cx(className, 'group')}
      href="https://www.figma.com/@glow_agency"
      title="Top Profile Figma Community"
      subtitle="Open comunity"
      icon={
        media === 'mobile' ? (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#19191B] group-hover:text-brand"
          >
            <rect
              x="0.5"
              y="0.5"
              width="79"
              height="79"
              rx="39.5"
              fill="currentColor"
              stroke="currentColor"
              className="transition-color duration-500"
            />
            <g clipPath="url(#clip0_815_17)">
              <path
                d="M40 40.4998C40 38.9527 40.6321 37.469 41.7574 36.375C42.8826 35.2811 44.4087 34.6665 46 34.6665C47.5913 34.6665 49.1174 35.2811 50.2426 36.375C51.3679 37.469 52 38.9527 52 40.4998C52 42.0469 51.3679 43.5307 50.2426 44.6246C49.1174 45.7186 47.5913 46.3332 46 46.3332C44.4087 46.3332 42.8826 45.7186 41.7574 44.6246C40.6321 43.5307 40 42.0469 40 40.4998V40.4998Z"
                fill="#F3F2F4"
              />
              <path
                d="M28 52.1668C28 50.6197 28.6321 49.136 29.7574 48.042C30.8826 46.9481 32.4087 46.3335 34 46.3335H40V52.1668C40 53.7139 39.3679 55.1977 38.2426 56.2916C37.1174 57.3856 35.5913 58.0002 34 58.0002C32.4087 58.0002 30.8826 57.3856 29.7574 56.2916C28.6321 55.1977 28 53.7139 28 52.1668V52.1668Z"
                fill="#F3F2F4"
              />
              <path
                d="M40 23V34.6667H46C47.5913 34.6667 49.1174 34.0521 50.2426 32.9581C51.3679 31.8642 52 30.3804 52 28.8333C52 27.2862 51.3679 25.8025 50.2426 24.7085C49.1174 23.6146 47.5913 23 46 23H40Z"
                fill="#F3F2F4"
              />
              <path
                d="M28 28.8333C28 30.3804 28.6321 31.8642 29.7574 32.9581C30.8826 34.0521 32.4087 34.6667 34 34.6667H40V23H34C32.4087 23 30.8826 23.6146 29.7574 24.7085C28.6321 25.8025 28 27.2862 28 28.8333V28.8333Z"
                fill="#F3F2F4"
              />
              <path
                d="M28 40.4998C28 42.0469 28.6321 43.5307 29.7574 44.6246C30.8826 45.7186 32.4087 46.3332 34 46.3332H40V34.6665H34C32.4087 34.6665 30.8826 35.2811 29.7574 36.375C28.6321 37.469 28 38.9527 28 40.4998V40.4998Z"
                fill="#F3F2F4"
              />
            </g>
            <defs>
              <clipPath id="clip0_815_17">
                <rect
                  width="24"
                  height="35"
                  fill="white"
                  transform="translate(28 23)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="136"
            height="136"
            viewBox="0 0 136 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#19191B] group-hover:text-brand"
          >
            <rect
              x="0.5"
              y="0.5"
              width="135"
              height="135"
              rx="67.5"
              fill="currentColor"
              stroke="currentColor"
              className="transition-color duration-500"
            />
            <g clipPath="url(#clip0_815_17)">
              <path
                d="M68.1953 67.5002C68.1953 65.3342 69.0484 63.257 70.567 61.7255C72.0856 60.1939 74.1452 59.3335 76.2928 59.3335C78.4404 59.3335 80.5 60.1939 82.0185 61.7255C83.5371 63.257 84.3902 65.3342 84.3902 67.5002C84.3902 69.6661 83.5371 71.7433 82.0185 73.2749C80.5 74.8064 78.4404 75.6668 76.2928 75.6668C74.1452 75.6668 72.0856 74.8064 70.567 73.2749C69.0484 71.7433 68.1953 69.6661 68.1953 67.5002V67.5002Z"
                fill="#F3F2F4"
              />
              <path
                d="M52 83.8332C52 81.6672 52.8531 79.59 54.3717 78.0585C55.8903 76.5269 57.9499 75.6665 60.0975 75.6665H68.1949V83.8332C68.1949 85.9991 67.3418 88.0763 65.8232 89.6079C64.3047 91.1394 62.245 91.9998 60.0975 91.9998C57.9499 91.9998 55.8903 91.1394 54.3717 89.6079C52.8531 88.0763 52 85.9991 52 83.8332V83.8332Z"
                fill="#F3F2F4"
              />
              <path
                d="M68.1953 43V59.3333H76.2928C78.4404 59.3333 80.5 58.4729 82.0185 56.9414C83.5371 55.4098 84.3902 53.3326 84.3902 51.1667C84.3902 49.0007 83.5371 46.9235 82.0185 45.392C80.5 43.8604 78.4404 43 76.2928 43H68.1953Z"
                fill="#F3F2F4"
              />
              <path
                d="M52 51.1667C52 53.3326 52.8531 55.4098 54.3717 56.9414C55.8903 58.4729 57.9499 59.3333 60.0975 59.3333H68.1949V43H60.0975C57.9499 43 55.8903 43.8604 54.3717 45.392C52.8531 46.9235 52 49.0007 52 51.1667V51.1667Z"
                fill="#F3F2F4"
              />
              <path
                d="M52 67.5002C52 69.6661 52.8531 71.7433 54.3717 73.2749C55.8903 74.8064 57.9499 75.6668 60.0975 75.6668H68.1949V59.3335H60.0975C57.9499 59.3335 55.8903 60.1939 54.3717 61.7255C52.8531 63.257 52 65.3342 52 67.5002V67.5002Z"
                fill="#F3F2F4"
              />
            </g>
            <defs>
              <clipPath id="clip0_815_17">
                <rect
                  width="32.3898"
                  height="49"
                  fill="white"
                  transform="translate(52 43)"
                />
              </clipPath>
            </defs>
          </svg>
        )
      }
    />
  );
}

function Clutch({ className }) {
  const media = useMediaAtom();

  return (
    <Animated
      as="a"
      href="https://clutch.co/profile/glow-design-agency"
      target="_blank"
      rel="noreferrer"
      className={cx('flex', className, {})}
    >
      <div
        className={cx('group flex items-center transition-all duration-500', {
          'glow-border-black to-brand px-8 py-7 md:rounded-full':
            media !== 'mobile',
        })}
      >
        <div className="mr-6">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#19191B] group-hover:text-brand"
          >
            <path
              d="M40 0L57.4 9.86232L74.641 20L74.8 40L74.641 60L57.4 70.1377L40 80L22.6 70.1377L5.35898 60L5.2 40L5.35898 20L22.6 9.86232L40 0Z"
              fill="currentColor"
              className="transition-colors duration-500"
            />
            <path
              d="M50.0281 47.7692C47.9192 49.4562 44.9668 50.7215 42.0144 50.7215C35.2661 50.7215 30.6266 45.6603 30.6266 38.912C30.6266 32.1636 35.2661 27.5242 42.0144 27.5242C44.9668 27.5242 47.9192 28.3677 50.0281 30.4766L51.2934 31.7419L58.0417 25.4153L56.3546 24.15C52.5587 20.7758 47.4974 18.667 42.0144 18.667C30.2048 18.667 21.3477 27.5242 21.3477 39.3337C21.3477 51.1433 30.2048 60.0005 42.0144 60.0005C47.4974 60.0005 52.5587 57.8916 56.3546 54.5175L58.0417 53.2522L51.2934 46.5038L50.0281 47.7692Z"
              fill="#F3F2F4"
            />
            <path
              d="M41.5921 46.0816C45.3191 46.0816 48.3404 43.0603 48.3404 39.3333C48.3404 35.6063 45.3191 32.585 41.5921 32.585C37.8651 32.585 34.8438 35.6063 34.8438 39.3333C34.8438 43.0603 37.8651 46.0816 41.5921 46.0816Z"
              fill="#F3F2F4"
            />
          </svg>
        </div>
        <div className="text-body-heading-m md:max-w-[236px]">
          Top 30 User <br className="md:hidden" /> Experience Company
        </div>
      </div>
    </Animated>
  );
}

function Dribble({ className }) {
  const media = useMediaAtom();

  return (
    <Animated
      as="a"
      href="https://dribbble.com/glow-team"
      target="_blank"
      rel="noreferrer"
      className={cx('group flex items-center', className)}
    >
      <div className="mr-6">
        {media === 'mobile' ? (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#19191B] group-hover:text-brand"
          >
            <rect
              x="0.5"
              y="0.5"
              width="79"
              height="79"
              rx="39.5"
              stroke="currentColor"
              className="transition-color duration-500"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40 20C28.9588 20 20 28.9588 20 40C20 51.0412 28.9588 60 40 60C51.0195 60 60 51.0412 60 40C60 28.9588 51.0195 20 40 20ZM53.2104 29.2191C55.5965 32.1258 57.0282 35.8352 57.0716 39.8482C56.5076 39.7397 50.8677 38.59 45.1844 39.3058C45.0542 39.0239 44.9458 38.7202 44.8156 38.4165C44.4686 37.5922 44.0781 36.7462 43.6876 35.9436C49.9783 33.384 52.8416 29.6963 53.2104 29.2191ZM40 22.9501C44.3384 22.9501 48.308 24.577 51.3232 27.2451C51.0195 27.679 48.4382 31.128 42.3644 33.4056C39.5662 28.2646 36.4642 24.0564 35.987 23.4056C37.2668 23.102 38.6117 22.9501 40 22.9501ZM32.7332 24.5553C33.1887 25.1627 36.2256 29.3926 39.0672 34.4252C31.0846 36.551 24.0347 36.5076 23.2755 36.5076C24.3818 31.2148 27.961 26.8113 32.7332 24.5553ZM22.9067 40.0217C22.9067 39.8482 22.9067 39.6746 22.9067 39.5011C23.6443 39.5228 31.9306 39.6312 40.4555 37.0716C40.9544 38.026 41.41 39.0022 41.8438 39.9783C41.6269 40.0434 41.3883 40.1085 41.1714 40.1735C32.3644 43.0152 27.679 50.7809 27.2885 51.4317C24.577 48.4165 22.9067 44.4035 22.9067 40.0217ZM40 57.0933C36.0521 57.0933 32.4078 55.7484 29.5228 53.4924C29.8265 52.8634 33.2972 46.1822 42.9284 42.82C42.9718 42.7983 42.9935 42.7983 43.0369 42.7766C45.4447 49.0022 46.4208 54.2299 46.6811 55.7267C44.6204 56.616 42.3644 57.0933 40 57.0933ZM49.5228 54.1649C49.3492 53.1236 48.4382 48.1345 46.2039 41.9957C51.5618 41.1497 56.2473 42.538 56.833 42.7332C56.0954 47.4837 53.3622 51.5835 49.5228 54.1649Z"
              fill="currentColor"
              className="transition-color duration-500"
            />
          </svg>
        ) : (
          <svg
            width="136"
            height="136"
            viewBox="0 0 136 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#19191B] group-hover:text-brand"
          >
            <rect
              x="0.5"
              y="0.5"
              width="135"
              height="135"
              rx="67.5"
              stroke="currentColor"
              className="transition-color duration-500"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68 44C54.7506 44 44 54.7506 44 68C44 81.2494 54.7506 92 68 92C81.2234 92 92 81.2494 92 68C92 54.7506 81.2234 44 68 44ZM83.8525 55.0629C86.7158 58.551 88.4338 63.0022 88.4859 67.8178C87.8091 67.6876 81.0412 66.308 74.2213 67.167C74.0651 66.8287 73.9349 66.4642 73.7788 66.0998C73.3623 65.1106 72.8937 64.0954 72.4252 63.1323C79.974 60.0608 83.41 55.6356 83.8525 55.0629ZM68 47.5401C73.2061 47.5401 77.9696 49.4924 81.5878 52.6941C81.2234 53.2148 78.1258 57.3536 70.8373 60.0868C67.4794 53.9176 63.757 48.8677 63.1844 48.0868C64.7202 47.7223 66.3341 47.5401 68 47.5401ZM59.2798 49.4664C59.8265 50.1952 63.4707 55.2712 66.8807 61.3102C57.3015 63.8612 48.8417 63.8091 47.9306 63.8091C49.2581 57.4577 53.5532 52.1735 59.2798 49.4664ZM47.4881 68.026C47.4881 67.8178 47.4881 67.6096 47.4881 67.4013C48.3731 67.4273 58.3167 67.5575 68.5466 64.4859C69.1453 65.6312 69.692 66.8026 70.2126 67.974C69.9523 68.0521 69.6659 68.1302 69.4056 68.2082C58.8373 71.6182 53.2148 80.9371 52.7462 81.718C49.4924 78.0998 47.4881 73.2842 47.4881 68.026ZM68 88.5119C63.2625 88.5119 58.8894 86.898 55.4273 84.1909C55.7918 83.436 59.9566 75.4186 71.5141 71.384C71.5662 71.3579 71.5922 71.3579 71.6443 71.3319C74.5336 78.8026 75.705 85.0759 76.0173 86.872C73.5445 87.9392 70.8373 88.5119 68 88.5119ZM79.4274 84.9979C79.2191 83.7484 78.1258 77.7614 75.4447 70.3948C81.8742 69.3796 87.4967 71.0456 88.1996 71.2798C87.3145 76.9805 84.0347 81.9002 79.4274 84.9979Z"
              fill="currentColor"
              className="transition-color duration-500"
            />
          </svg>
        )}
      </div>
      <div className="flex md:h-full md:flex-col md:justify-between">
        <div className="mr-14 md:mr-0">
          <div className="mb-2 text-body-heading-m">12 860</div>
          <div className="text-body-xs">Likes</div>
        </div>
        <div>
          <div className="mb-2 text-body-heading-m">2790</div>
          <div className="text-body-xs">Followers</div>
        </div>
      </div>
    </Animated>
  );
}

export function Medium({
  className,
  title = 'Popular Design Blog on Medium',
  subtitle = 'subscribe',
  type = 'default',
}) {
  const media = useMediaAtom();

  return (
    <LinkItem
      className={cx(className, 'group')}
      title={title}
      subtitle={subtitle}
      href="https://medium.com/glow-team"
      type={type}
      icon={
        media === 'mobile' ? (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#19191B] group-hover:text-brand"
          >
            <rect
              x="0.5"
              y="0.5"
              width="79"
              height="79"
              rx="39.5"
              fill="currentColor"
              stroke="currentColor"
              className="transition-color duration-500"
            />
            <g clipPath="url(#clip0_815_18)">
              <path
                d="M42.9983 40.0002C42.9983 46.0752 38.0738 51 31.9994 51C25.9249 51 21 46.0741 21 40.0002C21 33.9263 25.9246 29 31.9994 29C38.0742 29 42.9983 33.9251 42.9983 40.0002ZM55.0646 40.0002C55.0646 45.7185 52.6023 50.356 49.5649 50.356C46.5275 50.356 44.0652 45.7185 44.0652 40.0002C44.0652 34.2818 46.5271 29.6444 49.5645 29.6444C52.6019 29.6444 55.0642 34.2804 55.0642 40.0002H55.0646ZM60 40.0002C60 45.1224 59.1341 49.2774 58.0658 49.2774C56.9974 49.2774 56.1319 45.1235 56.1319 40.0002C56.1319 34.8768 56.9977 30.723 58.0658 30.723C59.1338 30.723 60 34.8765 60 40.0002Z"
                fill="#F3F2F4"
              />
            </g>
            <defs>
              <clipPath id="clip0_815_18">
                <rect
                  width="39"
                  height="22"
                  fill="white"
                  transform="translate(21 29)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="136"
            height="136"
            viewBox="0 0 136 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#19191B] group-hover:text-brand"
          >
            <rect
              x="0.5"
              y="0.5"
              width="135"
              height="135"
              rx="67.5"
              fill="currentColor"
              stroke="currentColor"
              className="transition-color duration-500"
            />
            <g clipPath="url(#clip0_815_18)">
              <path
                d="M71.6486 68.0003C71.6486 77.9413 63.6683 86 53.8246 86C43.9809 86 36 77.9395 36 68.0003C36 58.0611 43.9803 50 53.8246 50C63.6689 50 71.6486 58.0593 71.6486 68.0003ZM91.2021 68.0003C91.2021 77.3576 87.212 84.9462 82.2898 84.9462C77.3677 84.9462 73.3775 77.3576 73.3775 68.0003C73.3775 58.643 77.3671 51.0544 82.2892 51.0544C87.2114 51.0544 91.2015 58.6406 91.2015 68.0003H91.2021ZM99.2 68.0003C99.2 76.3821 97.7969 83.1811 96.0655 83.1811C94.3342 83.1811 92.9317 76.384 92.9317 68.0003C92.9317 59.6166 94.3348 52.8195 96.0655 52.8195C97.7963 52.8195 99.2 59.616 99.2 68.0003"
                fill="#F3F2F4"
              />
            </g>
            <defs>
              <clipPath id="clip0_815_18">
                <rect
                  width="63.2"
                  height="36"
                  fill="white"
                  transform="translate(36 50)"
                />
              </clipPath>
            </defs>
          </svg>
        )
      }
    />
  );
}

function DesignRush({ className }) {
  const media = useMediaAtom();

  return (
    <LinkItem
      className={cx(className, 'group')}
      href="https://www.designrush.com/agency/graphic-design/digital-design"
      title="Top Product  Design Company"
      subtitle="view profile"
      icon={
        media === 'mobile' ? (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#19191B] group-hover:text-brand"
          >
            <rect
              x="0.5"
              y="0.5"
              width="79"
              height="79"
              rx="39.5"
              stroke="currentColor"
              className="transition-color duration-500"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M39.1451 17.926C37.3325 20.6441 37.0659 21.9231 37.8675 24.0551C38.4796 25.6827 38.5886 27.0247 38.1438 27.4574C37.1816 28.3937 35.9387 27.7563 35.5184 26.1111L35.2707 25.1418L34.2652 27.0898C32.2365 31.0215 31.947 33.3455 33.1773 35.8275C33.5269 36.5329 34.1663 37.4962 34.5981 37.9677L35.3834 38.8251L35.0911 37.9685C34.9303 37.4975 34.7989 36.5237 34.7989 35.805C34.7989 33.7295 35.3384 32.8744 38.7583 29.5274C40.4851 27.8372 41.8435 26.3329 42.1158 25.8083C43.0453 24.0189 42.5178 20.6725 40.9188 18.2152C40.4839 17.5469 40.0459 17 39.9454 17C39.8449 17 39.4846 17.4167 39.1451 17.926ZM43.3896 23.5003C43.3394 23.747 43.2503 24.299 43.192 24.7269C42.9645 26.394 41.9842 27.8669 39.4298 30.3779C36.548 33.2112 36.094 33.9597 36.0857 35.889C36.0808 37.044 36.1665 37.4057 36.6325 38.1932C37.4904 39.6429 38.4715 40.1813 40.4006 40.261C43.2221 40.3779 45.2757 39.2324 46.4117 36.9084C47.0118 35.6813 47.4181 33.8041 47.3955 32.3656L47.3833 31.5827L47.0321 32.6056C46.8392 33.1684 46.4539 33.9697 46.1761 34.3866C45.6294 35.2072 44.018 36.3783 43.4359 36.3783C42.9253 36.3783 42.2872 35.6811 42.2872 35.1236C42.2872 34.6579 43.3807 33.1271 44.2573 32.3656C45.4298 31.347 45.9148 29.1103 45.4247 26.9828C45.2244 26.1131 43.9193 23.321 43.6302 23.1435C43.5482 23.0932 43.4401 23.2537 43.3896 23.5003ZM24.2448 41.9467C28.4898 47.9886 39.8445 63.9368 39.9461 63.9998C40.0654 64.0738 57.2819 40.2455 57.1814 40.1459C57.0734 40.0385 50.0174 41.1035 49.0806 41.3685C48.5357 41.5228 47.7137 41.9687 47.254 42.3595C46.7942 42.7506 45.0804 44.978 43.4456 47.3092C39.9294 52.3237 40.1006 52.119 39.6925 51.7948C39.5219 51.6592 38.1259 49.7697 36.5906 47.596C33.6849 43.4823 32.4066 42.1053 30.9978 41.5707C30.539 41.3967 28.5518 41.0115 26.5818 40.7145L23 40.1747L24.2448 41.9467ZM35.3901 41.7997C35.3901 41.9093 39.7865 48.0188 39.9475 48.1329C40.076 48.2239 44.4983 41.8367 44.3848 41.7242C44.3495 41.6891 43.3409 41.8917 42.1438 42.1746L39.9668 42.6888L37.6784 42.2024C36.4199 41.935 35.3901 41.7537 35.3901 41.7997Z"
              fill="currentColor"
              className="transition-color duration-500"
            />
          </svg>
        ) : (
          <svg
            width="136"
            height="136"
            viewBox="0 0 136 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#19191B] group-hover:text-brand"
          >
            <rect
              x="0.5"
              y="0.5"
              width="135"
              height="135"
              rx="67.5"
              stroke="currentColor"
              className="transition-color duration-500"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.6718 36.3004C64.1265 40.1172 63.7521 41.9132 64.8778 44.9071C65.7373 47.1927 65.8904 49.0772 65.2658 49.6849C63.9145 50.9996 62.1692 50.1046 61.579 47.7944L61.2311 46.4332L59.8193 49.1687C56.9704 54.6897 56.5639 57.9533 58.2915 61.4386C58.7824 62.4292 59.6804 63.7819 60.2867 64.444L61.3894 65.648L60.979 64.4451C60.7532 63.7838 60.5687 62.4163 60.5687 61.407C60.5687 58.4926 61.3263 57.2916 66.1286 52.5917C68.5536 50.2182 70.461 48.1058 70.8435 47.3691C72.1488 44.8563 71.408 40.1571 69.1626 36.7064C68.5519 35.768 67.9367 35 67.7956 35C67.6545 35 67.1486 35.5852 66.6718 36.3004ZM72.6322 44.1281C72.5616 44.4745 72.4366 45.2496 72.3547 45.8505C72.0353 48.1915 70.6586 50.2599 67.0717 53.786C63.0249 57.7647 62.3873 58.8158 62.3757 61.5249C62.3687 63.1469 62.4891 63.6549 63.1436 64.7607C64.3482 66.7964 65.726 67.5525 68.4348 67.6644C72.397 67.8285 75.2808 66.22 76.8761 62.9564C77.7187 61.2333 78.2893 58.5973 78.2575 56.5773L78.2403 55.4778L77.7472 56.9142C77.4763 57.7045 76.9353 58.8298 76.5451 59.4153C75.7775 60.5675 73.5147 62.2121 72.6972 62.2121C71.9802 62.2121 71.0842 61.233 71.0842 60.4502C71.0842 59.7963 72.6198 57.6465 73.8506 56.5773C75.4972 55.1468 76.1782 52.0059 75.49 49.0183C75.2088 47.7971 73.3761 43.8764 72.9701 43.6271C72.855 43.5564 72.7031 43.7818 72.6322 44.1281ZM45.7481 70.0316C51.709 78.516 67.6539 100.911 67.7967 101C67.9641 101.104 92.1405 67.6427 91.9994 67.5028C91.8477 67.3519 81.9393 68.8474 80.6238 69.2196C79.8586 69.4362 78.7044 70.0624 78.0588 70.6113C77.4132 71.1605 75.0065 74.2882 72.7108 77.5619C67.7732 84.6035 68.0137 84.316 67.4406 83.8608C67.2009 83.6703 65.2406 81.017 63.0846 77.9646C59.0043 72.1879 57.2092 70.2542 55.2309 69.5036C54.5867 69.2592 51.7962 68.7183 49.0298 68.3013L44 67.5432L45.7481 70.0316ZM61.3988 69.8251C61.3988 69.9791 67.5726 78.5583 67.7987 78.7186C67.9791 78.8464 74.1891 69.8771 74.0297 69.719C73.9801 69.6698 72.5639 69.9543 70.8828 70.3515L67.8258 71.0736L64.6122 70.3906C62.845 70.0151 61.3988 69.7606 61.3988 69.8251Z"
              fill="currentColor"
              className="transition-color duration-500"
            />
          </svg>
        )
      }
    />
  );
}
