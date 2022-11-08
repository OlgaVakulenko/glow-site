import Image, { resolve, Source, x2 } from '../../Image';
import Layout from '../../Layout';
// import Home1Image from './assets/home-1.png';
// import HomeTabletImage from './assets/home-tablet.png';
// import HomeDesktopImage from './assets/home-desktop.png';
import CasesSlider from './CasesSlider';
import Niches from './Niches';
import OurClients from './OurClients';
import Reviews from './Reviews';
import Workflow from './Workflow';
import OutProjectsLink from './OurProjectsLink';
import Animated from '../../Animated';
import Showreel from './Showreel';

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="relative flex min-h-[calc(var(--vh)*100-96px)] flex-col justify-between bg-brand pb-[48px] pt-[59px] md:min-h-[calc(100vh-120px)] md:pt-[160px] md:pb-[89px] xl:pb-[49px]">
          <Animated
            className="relative ml-auto max-w-[252px] text-lg italic md:max-w-[328px] md:text-subtitle-l xl:mr-[200px]"
            delay={200}
          >
            <div className="absolute left-0 top-[-32px]">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.66499 17.0667L6.89169 11.0769L1.93451 14.8513L-2.15194e-07 12.1436L4.99748 8.53332L-5.30813e-07 4.92306L1.93451 2.17434L6.89169 5.9487L8.66499 -1.30005e-05L11.8086 1.02563L9.83375 6.93332L16 6.85127L16 10.2154L9.87406 10.1333L11.8086 16.041L8.66499 17.0667Z"
                  fill="#19191B"
                />
              </svg>
            </div>
            Your trusted design team for fintech challenges.
          </Animated>

          {/* <div className="absolute top-[27px] left-[-16px]">
            <svg
              width="320"
              height="380"
              viewBox="0 0 320 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M112.665 17.0667L110.892 11.0769L105.935 14.8513L104 12.1436L108.997 8.53332L104 4.92306L105.935 2.17434L110.892 5.9487L112.665 -1.37302e-05L115.809 1.02563L113.834 6.93332L120 6.85127L120 10.2154L113.874 10.1333L115.809 16.041L112.665 17.0667Z"
                fill="#19191B"
              />
              <path
                d="M95 14C63.6667 28.3333 -6.4 64.1 -36 92.5"
                stroke="#19191B"
              />
              <path
                d="M236.333 376.5C236.333 377.973 237.527 379.167 239 379.167C240.473 379.167 241.667 377.973 241.667 376.5C241.667 375.027 240.473 373.833 239 373.833C237.527 373.833 236.333 375.027 236.333 376.5ZM239.218 376.95C280.579 356.896 305.813 325.898 315.359 294.539C324.904 263.181 318.759 231.452 297.343 210.036L296.635 210.743C317.748 231.856 323.858 263.182 314.402 294.248C304.946 325.311 279.921 356.104 238.782 376.05L239.218 376.95ZM297.343 210.036C282.73 195.424 259.403 187.046 231.089 183.462C202.763 179.877 169.374 181.083 134.558 185.703C64.9266 194.944 -10.5014 217.859 -62.7207 243.552L-62.2793 244.449C-10.1653 218.808 65.1568 195.923 134.689 186.695C169.455 182.081 202.751 180.884 230.964 184.454C259.189 188.026 282.253 196.361 296.635 210.743L297.343 210.036Z"
                fill="#19191B"
              />
            </svg>
          </div> */}
          <div className="sticky bottom-[48px] font-glow text-[40px] font-medium leading-10 md:text-[60px] md:leading-[64px] xl:text-[64px]">
            <Animated as="h1">
              Simple design
              <br className="hidden md:block" /> for&nbsp;complex products
            </Animated>
            {/* The logical aesthetics your{' '} */}
            {/* <span className="block w-full text-right">experience</span> */}
          </div>
        </div>
      </Layout>
      <Showreel />
      <div className="bg-white">
        <Niches />
        <CasesSlider />
        <OutProjectsLink className="hidden md:block" />
      </div>

      <div className="bg-dim pb-14">
        <Workflow />
        <OurClients />
        <Reviews />
      </div>
    </div>
  );
}
