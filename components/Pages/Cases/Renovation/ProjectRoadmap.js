import Layout from '../../../Layout';
import Animated from '../../../Animated';
import RespImage from './RespImage';
import Frame14md from './assets/frame-14-md.png';
import Frame14xl from './assets/frame-14-xl.png';
import Frame14 from './assets/frame-14.png';
import Frame15md from './assets/frame-15-md.png';
import Frame15xl from './assets/frame-15-xl.png';
import Frame15 from './assets/frame-15.png';
import CardIcon from './assets/CardIcon.png';
import ListIcon from './assets/Listicon.png';

function Title({ className, children }) {
  return (
    <Animated
      as="h3"
      className={`mb-4 pt-6 font-satoshi text-[24px] font-medium leading-8 md:pt-8 md:text-[32px] md:leading-10 md:tracking-[-1px]  ${className}`}
    >
      {children}
    </Animated>
  );
}
function Text({ className, children }) {
  return (
    <Animated
      as="p"
      className={`text-[16px] font-normal leading-6 xl:text-[20px] xl:leading-8   ${className}`}
    >
      {children}
    </Animated>
  );
}

export default function ProjectRoadmap() {
  return (
    <div className="bg-lightGray">
      <Layout className="flex flex-col items-center pb-[72px] md:pb-[120px]">
        <div className="mb-[40px] flex max-w-[830px] flex-col items-center pt-[72px] md:mb-[80px] md:pt-[80px]">
          <div className="mx-auto mb-6 w-fit rounded-[32px] bg-light-green px-4 py-2 font-inter text-[12px] font-medium uppercase leading-[24px] tracking-[0.02em] text-lightGray">
            Project timeline
          </div>
          <Animated
            as="div"
            className="mb-4 text-center font-satoshi text-[32px] font-medium leading-10 tracking-[-1px] md:text-[48px] md:leading-[64px] xl:text-[56px] xl:leading-[72px]"
          >
            Detailed project roadmap
          </Animated>
          <Text className="max-w-[826px] text-center text-[16px] font-normal leading-6 md:text-[20px] md:leading-8">
            {
              'This section describes all the stages of the project in each room, as well as deadlines, reports, and tasks of already completed stages. For the convenience of the homeowner, we designed 2 views of this section.'
            }
          </Text>
        </div>
        <div className="mb-10 flex h-full w-full justify-center gap-4 md:mb-0 md:justify-between md-safe:gap-8">
          <div className="hidden flex-col items-start md:flex md:max-w-[272px]  md:pt-[12.5%] xl:pt-[17%]">
            <RespImage
              pictureClassname="h-[56px] w-[56px]"
              className=""
              src={CardIcon}
              md={CardIcon}
              xl={CardIcon}
            />
            <Title>{'Card view'}</Title>
            <Text>
              {'This view provides'}
              <br /> {'a detailed perspective,'}
              <br /> {'allowing users to focus'}
              <br /> {'on the current stage of'}
              <br /> {'work in a particular room.'}
            </Text>
          </div>
          <div className="flex h-[720px] max-h-[400px] gap-4 xs:max-h-[470px] sm:max-h-[550px] md:max-h-[480px] md-safe:max-h-[547px]  md-safe:gap-[25px] xl:max-h-[720px] xl:gap-[48px]">
            <div className="flex-1">
              <RespImage
                pictureClassname=""
                className="h-full "
                src={Frame14}
                md={Frame14md}
                xl={Frame14xl}
              />
            </div>
            <div className="flex-1">
              <RespImage
                pictureClassname=""
                className="h-full"
                src={Frame15}
                md={Frame15md}
                xl={Frame15xl}
              />
            </div>
          </div>
          <div className="hidden flex-col  items-start md:flex md:max-w-[200px] md:pt-[12.5%]  xl:max-w-[272px] xl:pt-[17%]">
            <RespImage
              pictureClassname="h-[56px] w-[56px]"
              className=""
              src={ListIcon}
              md={ListIcon}
              xl={ListIcon}
            />
            <Title>{'List view'}</Title>
            <Text>
              {
                'Provides a broader overview of the renovation project, making it suitable for users who prefer a high-level summary of what has been completed.'
              }
            </Text>
          </div>
        </div>
        <div className="mb-10 flex max-w-[450px] flex-col items-center md:hidden">
          <RespImage
            pictureClassname="h-[56px] w-[56px]"
            className=""
            src={CardIcon}
            md={CardIcon}
            xl={CardIcon}
          />
          <Title className="text-center">{'Card view'}</Title>
          <Text className="text-center">
            {
              'This view provides a detailed perspective, allowing users to focus on the current stage of work in a particular room.'
            }
          </Text>
        </div>
        <div className="flex max-w-[450px] flex-col items-center md:hidden">
          <RespImage
            pictureClassname="h-[56px] w-[56px]"
            className=""
            src={ListIcon}
            md={ListIcon}
            xl={ListIcon}
          />
          <Title className="text-center">{'List view'}</Title>
          <Text className="text-center">
            {
              'Provides a broader overview of the renovation project, making it suitable for users who prefer a high-level summary of what has been completed.'
            }
          </Text>
        </div>
      </Layout>
    </div>
  );
}
