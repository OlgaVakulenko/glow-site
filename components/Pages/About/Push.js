import Layout from '../../Layout';
import { useMediaAtom } from '../../../lib/agent';
import Animated from '../../Animated';

export default function Push() {
  const media = useMediaAtom();

  const widths = {
    mobile: [102, 109, 109, 112],
    tablet: [179, 192, 192, 198],
    // 'desktop': [232, 249, ]
  };

  return (
    <Layout className="pt-36">
      <Animated className="mb-[140px] text-[32px] font-medium leading-[40px] md:mb-[128px] xl:mb-[117px]">
        {/* <Balance> */}
        We push the transportation industry innovation through product design.
        Digital&nbsp;transformation knocks in the door of every industry and we
        provide the services that will help you to be ahead of time with product
        design decision that last.
        {/* </Balance> */}
      </Animated>
      <div className="-mb-12 md:-mx-8 md:flex md:flex-wrap md:justify-between">
        <Letter
          width="24%"
          letter={
            <svg
              className="max-h-[29vw] md:max-h-full"
              viewBox="0 0 102 126"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.1566 87.5683C82.1618 87.5683 102 71.4234 102 42.9944C102 14.741 82.1618 0 49.1566 0H0V126H33.1807V87.5683H49.1566ZM48.9811 27.9025C62.148 27.9025 68.9948 33.5181 68.9948 43.3454C68.9948 52.9972 62.148 59.6657 48.9811 59.6657H33.1807V27.9025H48.9811Z"
                fill="black"
              />
            </svg>
          }
          title="Perfection"
          description="By working with transportation related companies we deep"
        />
        <Letter
          index={1}
          width="25%"
          letter={
            <svg
              className="max-h-[29vw] md:max-h-full"
              viewBox="0 0 109 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M109 0H75.9326V75.9618C75.9326 89.0587 71.2087 98.4884 54.5875 98.4884C37.7913 98.4884 33.0674 89.0587 33.0674 75.9618V0H0V75.4379C0 105.823 18.8957 128 54.5875 128C89.9294 128 109 105.823 109 75.4379V0Z"
                fill="black"
              />
            </svg>
          }
          title="Unity"
          description="By working with transportation related companies we deep"
        />
        <Letter
          index={2}
          width="25%"
          letter={
            <svg
              className="max-h-[29vw] md:max-h-full"
              viewBox="0 0 109 129"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M109 86.1167C109 67.9132 97.1408 56.886 74.8176 52.5102L50.576 47.7843C43.9488 46.559 38.368 43.2334 38.368 37.6323C38.368 30.806 44.2976 25.555 54.064 25.555C65.0512 25.555 72.7248 32.9064 73.5968 44.2836H106.907C104.989 17.1533 83.5376 0 53.7152 0C25.6368 0 5.0576 16.4532 5.0576 39.9077C5.0576 60.2117 18.312 71.9389 38.368 75.7897L61.2144 80.1655C68.5392 81.5658 73.9456 85.5916 73.9456 91.0176C73.9456 98.8942 66.4464 103.27 55.1104 103.27C41.5072 103.27 33.6592 95.7436 33.3104 83.8412H0C2.2672 111.672 23.1952 129 55.808 129C88.4208 129 109 112.022 109 86.1167Z"
                fill="black"
              />
            </svg>
          }
          title="Simplicity"
          description="By working with transportation related companies we deep"
        />
        <Letter
          index={3}
          width="26%"
          letter={
            <svg
              className="max-h-[29vw] md:max-h-full"
              viewBox="0 0 112 126"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.9207 126V75.6351H79.0793V126H112V0H79.0793V46.8552H32.9207V0H0V126H32.9207Z"
                fill="black"
              />
            </svg>
          }
          title="Honesty"
          description="By working with transportation related companies we deep"
        />
      </div>
    </Layout>
  );
}

function Letter({ letter, title, description, width, index = 0 }) {
  const media = useMediaAtom();
  const delay = index * 50;

  return (
    <div
      className="mb-12 flex justify-between md:flex-col md:px-8"
      style={{
        width: media !== 'mobile' ? width : null,
      }}
    >
      <Animated
        delay={delay}
        className="relative w-1/2 md:mb-[104px] md:w-full xl:mb-[120px]"
      >
        {letter}
      </Animated>
      <div className="w-1/2 md:w-full">
        <Animated delay={50 + delay} className="mb-4 text-body-heading-m">
          {title}
        </Animated>
        <Animated
          delay={100 + delay}
          className="max-w-[167px] text-body-s opacity-50 md:max-w-[200px]"
        >
          {description}
        </Animated>
      </div>
    </div>
  );
}
