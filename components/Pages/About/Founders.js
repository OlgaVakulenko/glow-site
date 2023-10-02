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
        />
        <Photo
          img={Stas}
          name="Stas Kovalsky"
          position="Co-Founder & Lead Designer"
          align="right"
        />
      </div>
    </Section>
  );
}

function Photo({ img, name, position, align = 'left', delay = 0 }) {
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
      <div className="mb-6 overflow-hidden rounded-3xl">
        <Image
          src={img}
          className="max-w-[208px] overflow-hidden rounded-3xl transition-transform duration-500 group-hover:scale-105 md:max-w-[360px] xl:max-w-[448px]"
          alt=""
          sizes={[[208, 768], [448]]}
        />
      </div>

      <div className="mb-[3px] text-body-heading-m md:mb-2">{name}</div>
      <div className="text-body-s">{position}</div>
    </Animated>
  );
}
