import cx from 'clsx';
import Animated from '../../Animated';
import Image from '../../Image';
import Layout from '../../Layout';
import Section from '../../Section';
import Rus from './assets/ruslan.png';
import Stas from './assets/stas-k.png';

export default function Founders() {
  return (
    <Section>
      <div className="mb-[88px]">
        <Section.Header>
          <Section.Title>Meet with founders</Section.Title>
          <Section.Description>
            <p className="mb-4">
              Back in 2019 we had a goal to create an agency that will serve the
              clients through design in the complex industries. 2 years later,
              our partners became our friends and designers our family.
            </p>
            <p>Let us tell you about our process and what we can do for you.</p>
          </Section.Description>
        </Section.Header>
      </div>
      <div className="flex flex-col pb-[81px] md:flex-row md:flex-wrap md:px-10 md:pb-[136px] xl:justify-between xl:px-20 xl:pb-[153px]">
        <Photo
          img={Rus}
          name="Rus Mashatov"
          position="Co-Founder & Lead Designer"
          linkedin="#"
          medium="#"
        />
        <Photo
          img={Stas}
          name="Stas Kovalsky"
          position="Co-Founder & Lead Designer"
          align="right"
          linkedin="#"
          medium="#"
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
}) {
  return (
    <Animated
      className={cx(
        'clip-content group mb-[73px] min-w-[256px] overflow-hidden last:mb-0 xl:mx-14',
        {
          'ml-auto md:mt-[126px] xl:!mr-auto': align === 'right',
          'xl:!ml-auto': align === 'left',
        }
      )}
      delay={delay}
    >
      <div className="mb-6 overflow-hidden rounded-3xl md:mb-9 xl:mb-8">
        <Image
          src={img}
          className="max-w-[208px] overflow-hidden rounded-3xl transition-transform duration-500 group-hover:scale-105 md:max-w-[360px] xl:max-w-[448px]"
          alt=""
          sizes={[[208, 768], [448]]}
        />
      </div>

      <div className="md:flex md:justify-between">
        <div>
          <div className="mb-[3px] text-body-heading-m md:mb-2">{name}</div>
          <div className="text-body-s">{position}</div>
        </div>
        <div className="mt-8 flex flex-row space-x-6 md:mt-0">
          {linkedin && (
            <a href={linkedin} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
              >
                <g clip-path="url(#clip0_5903_17166)">
                  <path
                    d="M22.309 18.709C22.3593 18.7095 22.4093 18.6997 22.4556 18.6801C22.502 18.6605 22.5438 18.6316 22.5786 18.5952C22.6133 18.5588 22.6402 18.5156 22.6575 18.4683C22.6749 18.4211 22.6823 18.3708 22.6794 18.3205C22.6794 18.045 22.5132 17.9133 22.1722 17.9133H21.6211V19.3559H21.8284V18.7271H22.0831L22.0889 18.7348L22.4841 19.3559H22.7058L22.2805 18.713L22.309 18.709ZM22.0693 18.5645H21.829V18.0768H22.1336C22.2909 18.0768 22.4703 18.1025 22.4703 18.3086C22.4703 18.5455 22.2888 18.5645 22.0681 18.5645"
                    fill="#E33230"
                  />
                  <path
                    d="M16.9014 16.9012H13.9623V12.2984C13.9623 11.2009 13.9427 9.78796 12.4336 9.78796C10.9029 9.78796 10.6686 10.9838 10.6686 12.2185V16.9009H7.72952V7.43576H10.5511V8.72927H10.5906C10.8729 8.24647 11.281 7.8493 11.7712 7.58006C12.2614 7.31081 12.8155 7.17958 13.3745 7.20032C16.3534 7.20032 16.9026 9.15973 16.9026 11.7088L16.9014 16.9012ZM4.41324 6.14194C4.07591 6.142 3.74612 6.04203 3.4656 5.85466C3.18509 5.6673 2.96644 5.40096 2.83729 5.08933C2.70815 4.77769 2.6743 4.43476 2.74005 4.10389C2.8058 3.77303 2.9682 3.46909 3.20669 3.23052C3.44518 2.99194 3.74906 2.82944 4.0799 2.76357C4.41074 2.6977 4.75368 2.73142 5.06536 2.86045C5.37704 2.98949 5.64345 3.20805 5.83092 3.4885C6.01838 3.76895 6.11848 4.0987 6.11854 4.43603C6.11858 4.66002 6.0745 4.88181 5.98882 5.08876C5.90314 5.29571 5.77755 5.48376 5.6192 5.64216C5.46085 5.80057 5.27284 5.92624 5.06592 6.01199C4.859 6.09774 4.63723 6.1419 4.41324 6.14194V6.14194ZM5.88279 16.9012H2.94063V7.43576H5.88279V16.9012ZM18.3666 0.00135143H1.46374C1.08009 -0.00297804 0.710398 0.145182 0.435933 0.413275C0.161468 0.681368 0.00468222 1.04746 0 1.4311V18.4041C0.00452196 18.788 0.161216 19.1543 0.435672 19.4227C0.710127 19.691 1.0799 19.8395 1.46374 19.8354H18.3666C18.7512 19.8402 19.122 19.6922 19.3976 19.4238C19.6731 19.1555 19.8309 18.7887 19.8362 18.4041V1.42988C19.8307 1.04547 19.6729 0.678966 19.3973 0.41088C19.1218 0.142794 18.7511 -0.00494354 18.3666 0.000126304"
                    fill="#E33230"
                  />
                  <path
                    d="M22.0935 17.2705C21.7359 17.2739 21.3942 17.4189 21.1432 17.6735C20.8922 17.9282 20.7522 18.272 20.7539 18.6296C20.7556 18.9872 20.8989 19.3295 21.1524 19.5818C21.4059 19.834 21.7489 19.9756 22.1065 19.9756C22.4641 19.9756 22.8072 19.834 23.0606 19.5818C23.3141 19.3295 23.4574 18.9872 23.4591 18.6296C23.4608 18.272 23.3209 17.9282 23.0698 17.6735C22.8188 17.4189 22.4771 17.2739 22.1195 17.2705H22.0935ZM22.0935 19.8208C21.859 19.8247 21.6285 19.759 21.4313 19.6319C21.2342 19.5048 21.0791 19.3222 20.9857 19.107C20.8923 18.8918 20.8649 18.6537 20.9068 18.4229C20.9487 18.1921 21.0582 17.9789 21.2213 17.8103C21.3844 17.6417 21.5938 17.5252 21.823 17.4757C22.0523 17.4261 22.2912 17.4456 22.5094 17.5317C22.7275 17.6179 22.9153 17.7668 23.0488 17.9596C23.1824 18.1525 23.2557 18.3806 23.2596 18.6151C23.2596 18.6219 23.2596 18.6283 23.2596 18.635C23.2662 18.9427 23.1503 19.2404 22.9374 19.4627C22.7245 19.6849 22.4321 19.8135 22.1244 19.8202H22.0938"
                    fill="#E33230"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5903_17166">
                    <rect width="23.459" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          )}
          {medium && (
            <a href={medium} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="20"
                viewBox="0 0 36 20"
                fill="none"
              >
                <path
                  d="M20.3207 10.0002C20.3207 15.5229 15.874 20 10.389 20C4.90406 20 0.457031 15.5219 0.457031 10.0002C0.457031 4.47841 4.90373 0 10.389 0C15.8744 0 20.3207 4.4774 20.3207 10.0002ZM31.2161 10.0002C31.2161 15.1987 28.9927 19.4146 26.2501 19.4146C23.5074 19.4146 21.2841 15.1987 21.2841 10.0002C21.2841 4.80167 23.5071 0.585784 26.2497 0.585784C28.9924 0.585784 31.2157 4.80032 31.2157 10.0002H31.2161ZM35.6726 10.0002C35.6726 14.6567 34.8907 18.434 33.926 18.434C32.9613 18.434 32.1798 14.6578 32.1798 10.0002C32.1798 5.34258 32.9616 1.56636 33.926 1.56636C34.8904 1.56636 35.6726 5.34224 35.6726 10.0002Z"
                  fill="#E33230"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </Animated>
  );
}
