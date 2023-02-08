import Image from '../../../Image';
import Layout from '../../../Layout';
import PageHeading from '../../../PageHeading';
import PageSubheading from '../../../PageSubheading';
import Office from './assets/office.png';
import cx from 'clsx';
import InlineVideo from '../InlineVideo';

export default function LiquidSpace() {
  return (
    <div>
      <Layout className="pb-10">
        <div className="pt-[144px]">
          <PageSubheading>
            It’s people untethered, workplace without boundaries, productivity
            and collaboration unimpeded by space and convention. It&apos;s more
            than the rise of the hybrid workplace. It&apos;s&nbsp;the dawn of a
            new era.
          </PageSubheading>
        </div>
        <div className="mt-[188px]">
          <PageHeading>
            LiquidSpace - workspace <br />
            rental service
          </PageHeading>
        </div>
      </Layout>
      <Image src={Office} alt="" />
      <SectionBalance />
    </div>
  );
}

function SectionHeading({ className, children }) {
  return (
    <div
      className={cx(
        className,
        'font-glow text-[32px] font-medium leading-[32px]'
      )}
    >
      {children}
    </div>
  );
}

function List({ data }) {
  return (
    <div className="-mr-6 flex">
      {data.map((column, i) => (
        <div key={i} className="mr-6">
          <div className="mb-2 text-xs font-medium uppercase leading-[13px] opacity-50">
            {column.title}
          </div>
          <div className="text-sm leading-[26px]">
            {column.values.map((value, i) => (
              <div key={i}>{value}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionBalance() {
  return (
    <Layout className="pt-16">
      <SectionHeading className="mb-6">
        We balance business objectives with customer needs
      </SectionHeading>
      <List
        data={[
          {
            title: 'User Experience',
            values: ['UX Audit', 'Research', 'Wireframe', 'Prototype'],
          },
          {
            title: 'Visual Design',
            values: ['Art Direction', 'Visual Identity', 'Motion Design'],
          },
          {
            title: 'Digital Branding',
            values: [
              'Product Identity System',
              'Naming',
              'Logo',
              'Motion Design',
            ],
          },
        ]}
      />
      <InlineVideo src="/video/liquidspace/1_3d.mp4" />
    </Layout>
  );
}
