import cx from 'clsx';
import { useRef } from 'react';
import { RollingWords } from '.';
import { useHeaderTheme } from '../../Header';
import Layout from '../../Layout';
import PageHeading from '../../PageHeading';
import PageSubheading from '../../PageSubheading';

function IntroSection(props) {
  const ref = useRef(null);

  useHeaderTheme({ theme: 'brand', ref });

  return (
    <div ref={ref} className={cx('relative bg-brand')}>
      {/* <div
        className={cx('absolute inset-0 bg-white opacity-0 duration-300', {
          'opacity-100': subMenuOpen,
        })}
      ></div> */}

      <Layout className="pointer-events-none">
        <div className="relative flex min-h-[calc(var(--lvh)*100)] flex-col justify-between pb-[48px] pt-[155px] md:min-h-screen md:pt-[280px]">
          <PageSubheading>
            Your trusted design team <br />
            for&nbsp;
            <RollingWords
              words={['transportation', 'healthcare', 'fintech']}
              interval={2200}
            />{' '}
            <div className="inline-flex">challenges.</div>
          </PageSubheading>

          <PageHeading>
            Simple design
            <br className="hidden md:block" /> for&nbsp;complex products
          </PageHeading>
        </div>
      </Layout>
    </div>
  );
}

export default IntroSection;
